import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.scss";

const Navbar = () => {
  return (
    <header className="header">
      <h1 className="header__title">VENTAS</h1>
      <div className="header__items">
        <Link to="/" className="header__items--link">
          Clientes
        </Link>
        <Link to="/Facturas" className="header__items--link">
          Facturas
        </Link>
        <Link to="/Productos" className="header__items--link">
          Productos
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
