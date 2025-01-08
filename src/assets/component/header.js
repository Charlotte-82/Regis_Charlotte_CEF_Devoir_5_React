import React from "react";
import "./../css/header.css";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          John Doe
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li className="nav-item">
              <NavLink to="/" className="nav-link">
                Accueil
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/Portfolio" className="nav-link">
                Portfolio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/Services" className="nav-link">
                Services
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/Contact" className="nav-link">
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/Mentions" className="nav-link">
                Mentions légales
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
