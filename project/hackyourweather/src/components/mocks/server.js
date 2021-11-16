import { setupServer } from "msw/node";
import { handlers } from "../mock/request";

export const server = setupServer(...handlers);
