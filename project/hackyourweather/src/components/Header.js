import React from "react";

const Header = ({ city }) => {
  const { name, sys } = city;
  return (
    <>
      <h1>
        {name}, {sys.country}
      </h1>
    </>
  );
};

export default Header;
