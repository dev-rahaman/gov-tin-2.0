import React, { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { FaBars } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="menu">
        <div className="menu__logo">
          <Link to="/" className="navbar-logo">
            Jakaria
          </Link>
        </div>
        <button className="menu__toggle" onClick={toggleMenu}>
          {isOpen ? (
            "X"
          ) : (
            <>
              <FaBars />
            </>
          )}
        </button>
        <ul className={`menu__list ${isOpen ? "menu__list--open" : ""}`}>
          <li className="menu__item">
            <Link to="/">Home</Link>
          </li>
          <li className="menu__item">
            <Link to="/get-certificate">Get Certificate </Link>
          </li>
          <li className="menu__item">
            <Link to="/ ">Resume</Link>
          </li>
          <li className="menu__item">
            <Link to="/ ">Contact Me</Link>
          </li>
          <li className="menu__item">
            <Link to="/  ">Work Simple</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
