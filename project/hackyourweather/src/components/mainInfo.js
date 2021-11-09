import React from "react";

const mainInfo = ({ city }) => {
  return (
    <>
      <h4>
        {city.main}
        <br />
        <strong style={{ fontWeight: "lighter" }}>{city.description}</strong>
      </h4>
    </>
  );
};

export default mainInfo;
