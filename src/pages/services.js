import React from "react";
import Banner from "./../assets/img/banner.jpg";
import Brush from "./../assets/img/brush.svg";
import Code from "./../assets/img/code-slash.svg";
import Search from "./../assets/img/search.svg";

function Services() {
  return (
    <div>
      <img
        src={Banner}
        alt="bannière bleue marine avec des lignes lumineuses"
      />
      <h1>Mon offre de services</h1>
      <p class="text-center">
        Voici les prestations sur lesquelles je peux intervenir
      </p>
      <hr
        class="border border-primary border-3 opacity-100"
        style={{ width: "30%" }}
      />
      <div className="cards" style={{ display: "flex" }}>
        <div
          class="card"
          style={{ width: "25rem", marginLeft: "10%", marginBottom: "2%" }}
        >
          <div class="card-body">
            <img
              src={Brush}
              className="card-img-top"
              alt="icône de pinceau"
              style={{ height: "5vh", color: "blue" }}
            />
            <hr class="border border-light border-2 opacity-100" />
            <h2 class="card-title">UX Design</h2>

            <p class="card-text text-center">
              L'UX Design est une discipline qui consiste à concevoir des
              produits (sites web, applications mobiles, logiciels, objetx
              connectés, etc) en plaçant l'utilisateur au centre des
              préoccupations. L'objectif est de rendre l'expérience utilisateur
              la plus fluide et agréable possible.
            </p>
          </div>
        </div>
        <div
          class="card"
          style={{ width: "25rem", marginLeft: "10%", marginBottom: "2%" }}
        >
          <div class="card-body">
            <img
              src={Code}
              className="card-img-top"
              alt="balises ouvrantes et fermantes HTML"
              style={{ height: "5vh", color: "blue" }}
            />
            <hr class="border border-light border-2 opacity-100" />
            <h2 class="card-title">Développement web</h2>

            <p class="card-text text-center">
              Le développement de sites web consiste à créer des sites internet
              en utilisant différents langages informatiques (HTML, CSS,
              Javascript? PHP, etc) et des frameworks/librairies (Bootstrap,
              React, Angular, etc).
            </p>
          </div>
        </div>
        <div
          class="card"
          style={{ width: "25rem", marginLeft: "10%", marginBottom: "2%" }}
        >
          <div class="card-body">
            <img
              src={Search}
              className="card-img-top"
              alt="icône de loupe"
              style={{ height: "5vh", color: "blue" }}
            />
            <hr class="border border-light border-2 opacity-100" />
            <h2 class="card-title">Référencement</h2>

            <p class="card-text text-center">
              Le référencement naturel (SEO) est une technique qui consiste à
              optimiser un site web pour le faire remonter dans les résultats
              des mteurs de recherche (Google, Bing, Yahoo, etc). L'objectif est
              d'attirer un maximum de visiteurs qualifiés sur le site.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
