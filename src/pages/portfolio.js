import React from "react";
import Banner from "./../assets/img/banner.jpg";
import Fresh from "./../assets/img/portfolio/fresh-food.jpg";
import Akira from "./../assets/img/portfolio/restaurant-japonais.jpg";

function Portfolio() {
  return (
    <div>
      <img
        src={Banner}
        alt="bannière bleue marine avec des lignes lumineuses"
      />
      <h1>Portfolio</h1>
      <p class="text-center">Voici quelques-une de mes réalisations</p>
      <hr class="border border-primary border-2 opacity-100" />
      <div className="cardsLine1" class="row">
        <div class="col md-4">
          <div class="card" style={{ width: "18rem" }}>
            <img src={Fresh} class="card-img-top" alt="ensemble de légumes" />
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
        </div>

        <div class="col md-4">
          <div class="card" style={{ width: "18rem" }}>
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
        </div>

        <div class="col md-4">
          <div class="card" style={{ width: "18rem" }}>
            <img src={Fresh} class="card-img-top" alt="ensemble de légumes" />
            <div class="card-body">
              <h5 class="card-title">Fresh Food</h5>
              <p class="card-text">Site de vente de produits frais en ligne</p>
              <div class="text-center">
                <a href="#" class="btn btn-primary">
                  Voir le site
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
