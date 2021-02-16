import React from "react";
import { Link } from "react-router-dom";
import FullColorLogo from "./svgs/logo-fullcolor.svg"

export default function Navbar() {
  return (
    <nav className="fixed-top navbar navbar-expand-lg navbar-light" id="navBar">
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="justify-content-center collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item active">
          <Link className="nav-link" to="/">Inicio <span class="sr-only"></span></Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link" to="/store">Tienda</Link>
        </li>
        <li className="nav-item">
          <Link to="/">
            <form className="logo-navbar">
              <img src={ FullColorLogo } alt="Logo Uaxan" id="full-logo" />
            </form>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contacto">Contacto</Link>
        </li>
        <li className="nav-item" id="navbar-bar-shrink">
          <Link className="nav-link" to="/signin">Mi Cuenta</Link>
        </li>
      </ul>
    </div>
  </nav>
    );
}
