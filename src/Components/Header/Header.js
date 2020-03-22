import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <ul className="nav nav-tabs justify-content-center">
        <li className="nav-item ">
          <a className="nav-link active" href="/">
            Contact List
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/contact">
            Add contact
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
