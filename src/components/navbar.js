import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.scss";

const Navbar = () => {
  return (
    <header className="header">
      <h1 className="header__title">VENTAS</h1>
      <div className="header__items">
        <Link to="/" className="header__items--link">
          <img src="/images/users.svg" />
          <p>Clientes</p>
        </Link>
        <Link to="/Facturas" className="header__items--link">
          <img src="/images/file-text.svg" />
          <p>Facturas</p>
        </Link>
        <Link to="/Productos" className="header__items--link">
          <img src="/images/shopping-bag.svg" />

          <p>Productos</p>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
