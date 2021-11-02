import React from "react";

const cityInfo = ({ city, country }) => {
  return (
    <div>
      <h1>
        {city},{country}
      </h1>
    </div>
  );
};

export default cityInfo;
