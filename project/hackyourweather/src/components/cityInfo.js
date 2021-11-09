import React from "react";

const cityInfo = ({ city }) => {
  const { name, sys } = city;
  return (
    <>
      <h1>
        {name},{sys.country}
      </h1>
    </>
  );
};

export default cityInfo;
