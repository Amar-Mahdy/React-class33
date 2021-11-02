import React from "react";

const mainInfo = ({ main, description }) => {
  return (
    <div>
      <h4>
        {main}
        <br />
        <strong style={{ fontWeight: "lighter" }}>{description}</strong>
      </h4>
    </div>
  );
};

export default mainInfo;
