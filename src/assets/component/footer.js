import React from "react";
import "./../css/footer.css";
import Linkedin from "./../img/linkedin.svg";
import Github from "./../img/github.svg";
import Twitter from "./../img/twitter.svg";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="column-footer" class="col-md-4">
        <h4>John Doe</h4>
        <p className="p-footer">
          40 rue Laure Diebold
          <br />
          10 20 30 40 50
          <br />
          john.doe@gmail.com
        </p>
        <div className="socialnetwork-icons">
          <img src={Linkedin} alt="icône de Linkedin" id="Linkedin" />
          <img src={Github} alt="icône de Github" id="Github" />
          <img src={Twitter} alt="icône de Twitter" id="Twitter" />
        </div>
      </div>
      <div className="column-footer" class="col-md-4">
        <h4>Liens utiles</h4>
        <p className="p-footer">
          <NavLink to="/" className="nav-link">
            Accueil
          </NavLink>
          <NavLink to="/Portfolio" className="nav-link">
            Portfolio
          </NavLink>
          <NavLink to="/Services" className="nav-link">
            Services
          </NavLink>
          <NavLink to="/Contact" className="nav-link">
            Contact
          </NavLink>
          <NavLink to="/Mentionslegales" className="nav-link">
            Mentions légales
          </NavLink>
        </p>
      </div>
      <div className="column-footer" class="col-md-4">
        <h4>Mes dernières réalisations</h4>
        <p className="p-footer">
          Fresh Food
          <br />
          Restaurant Akira
          <br />
          Espace bien-être
          <br />
          SEO
          <br />
          Création d'une API
          <br />
          Maquette d'un site
        </p>
      </div>
    </div>
  );
}

export default Footer;
