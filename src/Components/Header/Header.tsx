import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <div className="header">
      <Link to="/">
        <img src="/icons/sandwich.svg" alt="home" className="header__home" />
      </Link>
    </div>
  );
};

export default Header;
