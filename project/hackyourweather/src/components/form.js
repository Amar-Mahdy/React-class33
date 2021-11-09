import React from "react";

function Form({ handleCity, handleSubmit, cityName }) {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="search">search for city's weather</label>
        <input
          type="text"
          className="form-control"
          placeholder="e.g Groningen"
          onChange={handleCity}
          value={cityName}
          name="cityName"
        />
        <button className="btn" type="submit">
          click to search
        </button>
      </form>
    </>
  );
}

export default Form;
