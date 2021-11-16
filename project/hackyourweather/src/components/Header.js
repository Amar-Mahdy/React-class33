import React from "react";
import { Link } from "react-router-dom";

const Header = ({ city }) => {
  const { name, sys } = city;
  return (
    <div>
      <h1>
        <Link className="decoration" to={`/${city.id}`}>
          {name}
        </Link>
        , {sys.country}
      </h1>
    </div>
  );
};

export default Header;
