import { fireEvent, render, screen } from "@testing-library/react";
import App from "../../App";
import { handlers } from "../mock/request";
import { server } from "../mock/server";

describe("welcome message and header", () => {
  test("show welcome message", () => {
    render(<App />);
    const linkElement = screen.getByText(/Welcome to the city weather/i);
    expect(linkElement).toBeInTheDocument();
  });
  test("show the header", () => {
    render(<App />);
    const header = screen.getByRole("heading", { name: "Weather" });
    expect(header).toBeInTheDocument();
  });
});

describe("testing API requests", () => {
  beforeAll(() => {
    // Establish requests interception layer before all tests.
    server.listen();
  });
  afterEach(() => {
    server.resetHandlers();
  });
  afterAll(() => {
    // Clean up after all tests are done, preventing this
    // interception layer from affecting irrelevant tests.
    server.close();
  });

  describe("dealing with the requests", () => {
    beforeAll(() => {
      server.use(handlers[0]);
    });

    it("loading text while fetching data", async () => {
      render(<App />);
      const searchButton = screen.getByRole("button", {
        name: /click to search/i,
      });
      fireEvent.submit(searchButton);
      const loading = await screen.findByText(/loading/i);
      expect(loading).toBeInTheDocument();
    });

    it("No Loading text when getting info", async () => {
      render(<App />);
      const searchButton = screen.getByRole("button", {
        name: /click to search/i,
      });
      fireEvent.submit(searchButton);
      const loading = await screen.findByText(/loading/i);

      const weatherInfo = await screen.findByTestId("min");
      expect(weatherInfo).toBeInTheDocument();
      expect(loading).not.toBeInTheDocument();
    });
  });

  describe("dealing with error", () => {
    it("it's loading before getting error", async () => {
      server.use(handlers[1]);
      render(<App />);
      const searchButton = screen.getByRole("button", {
        name: /click to search/i,
      });
      expect(searchButton).toBeInTheDocument();
      fireEvent.submit(searchButton);
      const loading = await screen.findByText(/loading/i);
      expect(loading).toBeInTheDocument();
    });

    it("Get error When writing invalid city name", async () => {
      server.use(handlers[1]);
      render(<App />);
      const searchButton = screen.getByRole("button", {
        name: /click to search/i,
      });
      expect(searchButton).toBeInTheDocument();
      fireEvent.submit(searchButton);
      const err = await screen.findByText("city not found");
      expect(err).toBeInTheDocument();
    });

    it("loading is disappeared after getting error", async () => {
      server.use(handlers[1]);
      render(<App />);
      const searchButton = screen.getByRole("button", {
        name: /click to search/i,
      });
      expect(searchButton).toBeInTheDocument();
      fireEvent.submit(searchButton);

      const loading = await screen.findByText(/loading/i);
      expect(loading).toBeInTheDocument();

      const err = await screen.findByText("city not found");
      expect(err).toBeInTheDocument();

      expect(loading).not.toBeInTheDocument();
    });
  });
});
