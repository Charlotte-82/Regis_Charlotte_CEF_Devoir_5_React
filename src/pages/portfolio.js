import React from "react";
import Banner from "./../assets/img/banner.jpg";
import Fresh from "./../assets/img/portfolio/fresh-food.jpg";
import Akira from "./../assets/img/portfolio/restaurant-japonais.jpg";
import Espace from "./../assets/img/portfolio/espace-bien-etre.jpg";
import Seo from "./../assets/img/portfolio/seo.jpg";
import Api from "./../assets/img/portfolio/coder.jpg";
import Maquette from "./../assets/img/portfolio/screens.jpg";

function Portfolio() {
  return (
    <div>
      <img
        src={Banner}
        alt="bannière bleue marine avec des lignes lumineuses"
      />
      <h1>Portfolio</h1>
      <p class="text-center">Voici quelques-une de mes réalisations</p>
      <hr
        class="border border-primary border-3 opacity-100"
        style={{ width: "30%" }}
      />
      <div
        className="row cardsLine"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          alignContent: "space-evenly",
        }}
      >
        <div
          className="card"
          style={{
            width: "23rem",
            marginBottom: "1rem",
          }}
        >
          <img
            src={Fresh}
            class="card-img-top img-fluid"
            alt="ensemble de légumes"
            style={{ margin: "0", padding: "0", width: "100%" }}
          />
          <div class="card-body">
            <h5 class="card-title">Fresh Food</h5>
            <p class="card-text text-center">
              Site de vente de produits frais en ligne
            </p>
            <div class="text-center">
              <a href="#" class="btn btn-primary">
                Voir le site
              </a>
            </div>
            <hr class="border border-light border-2 opacity-100" />
            <div class="card-footer">Site réalisé avec PHP et MySQL</div>
          </div>
        </div>

        <div class="card" style={{ width: "23rem", marginBottom: "1rem" }}>
          <img src={Akira} class="card-img-top" alt="ensemble de sushis" />
          <div class="card-body">
            <h5 class="card-title">Restaurant Akira</h5>
            <p class="card-text text-center">Site de restaurant japonais</p>
            <div class="text-center">
              <a href="#" class="btn btn-primary">
                Voir le site
              </a>
            </div>
            <hr class="border border-light border-2 opacity-100" />
            <div class="card-footer">Site réalisé avec Wordpress</div>
          </div>
        </div>

        <div class="card" style={{ width: "23rem", marginBottom: "1rem" }}>
          <img
            src={Espace}
            class="card-img-top"
            alt="statue de Bouddha et agencement zen de cailloux"
          />
          <div class="card-body">
            <h5 class="card-title">Espace bien-être</h5>
            <p class="card-text text-center">
              Site de services spécialisés dans le bien-être
            </p>
            <div class="text-center">
              <a href="#" class="btn btn-primary">
                Voir le site
              </a>
            </div>
            <hr class="border border-light border-2 opacity-100" />
            <div class="card-footer">Site réalisé avec LARAVEL</div>
          </div>
        </div>

        <div class="card" style={{ width: "23rem", marginBottom: "1rem" }}>
          <img
            src={Seo}
            class="card-img-top"
            alt="nuage de mots en lien avec le référencement d'un site web"
          />
          <div class="card-body">
            <h5 class="card-title">SEO</h5>
            <p class="card-text text-center">
              Amélioration du référencement d'un site e-commerce
            </p>
            <div class="text-center">
              <a href="#" class="btn btn-primary">
                Voir le site
              </a>
            </div>
            <hr class="border border-light border-2 opacity-100" />
            <div class="card-footer">Utilisation des outils SEO</div>
          </div>
        </div>
        <div class="card" style={{ width: "23rem", marginBottom: "1rem" }}>
          <img
            src={Api}
            class="card-img-top"
            alt="photo d'écran avec des lignes de code"
          />
          <div class="card-body">
            <h5 class="card-title">Création d'une API</h5>
            <p class="card-text text-center">
              Création d'une API RESTFULL publique
            </p>
            <div class="text-center">
              <a href="#" class="btn btn-primary">
                Voir le site
              </a>
            </div>
            <hr class="border border-light border-2 opacity-100" />
            <div class="card-footer">PHP - SYMFONY</div>
          </div>
        </div>
        <div class="card" style={{ width: "23rem", marginBottom: "1rem" }}>
          <img
            src={Maquette}
            class="card-img-top"
            alt="bureau équipé de deux ordinateurs et d'une tablette"
          />
          <div class="card-body">
            <h5 class="card-title">Maquette d'un site web</h5>
            <p class="card-text text-center">Création du prototype d'un site</p>
            <div class="text-center">
              <a href="#" class="btn btn-primary">
                Voir le site
              </a>
              <hr class="border border-light border-2 opacity-100" />
              <div class="card-footer">Réalisé avec FIGMA</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
