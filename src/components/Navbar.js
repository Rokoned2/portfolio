import React from "react";
import { Link } from "react-router-dom";
import ThemeOptions from "./ThemeOptions";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__tabs">
        <Link to="/" className="navbar__item">
          ¿Qué hago?
        </Link>
        <Link to="/projects" className="navbar__item">
          Proyectos
        </Link>
        <Link to="/contact" className="navbar__item">
          Contacto
        </Link>
      </div>
      <ThemeOptions />
    </nav>
  );
};

export default Navbar;
