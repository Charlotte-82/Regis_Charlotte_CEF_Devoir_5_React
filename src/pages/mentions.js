import React from "react";
import Geo from "./../assets/img/geo-alt.svg";
import Tel from "./../assets/img/phone.svg";
import Mail from "./../assets/img/envelope.svg";
import Map from "./../assets/img/map.svg";
import Globe from "./../assets/img/globe.svg";

function Mentions() {
  return (
    <div style={{ height: "70vh" }}>
      <h1>Mentions légales</h1>
      <hr
        class="border border-primary border-3 opacity-100"
        style={{ width: "30%", marginBottom: "2%" }}
      />
      <div
        class="accordion"
        id="accordionExample"
        style={{
          width: "60%",
          display: "flex",
          flexDirection: "column",
          justifySelf: "center",
          marginBottom: "2%",
        }}
      >
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Éditeur du site
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <h3 class="text-start">John Doe</h3>
              <p className="mb-0">
                <img src={Map} alt="icône de carte routière" id="Map" /> 40 rue
                Laure Diebold
              </p>
              <p className="mb-0">
                <img
                  src={Geo}
                  alt="icône d'emplacement géographique"
                  id="Geo"
                />{" "}
                69009 Lyon, France
              </p>
              <p className="mb-0">
                <img src={Tel} alt="icône de smartphone" id="Tel" /> 10 20 30 40
                50
              </p>
              <p>
                <img src={Mail} alt="icône d'enveloppe" id="Mail" />{" "}
                john.doe@gmail.com
              </p>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Hébergeur
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <p style={{ fontSize: "xx-large", fontWeight: "600" }}>
                alwaysdata
              </p>
              <p>91 Rue du Faubourg Saint-Honoré, 75008 Paris</p>

              <div className="lienHebergeur">
                <p class="texte-start">
                  <a href="www.alwaysdata.com">
                    <img
                      src={Globe}
                      alt="icône de globe terrestre"
                      style={{ paddingRight: "1%" }}
                    />
                    www.alwaysdata.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Crédits
            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <p style={{ fontSize: "xx-large", fontWeight: "600" }}>Crédits</p>
              <p>
                Ce site a été réalisé par John Doe, étudiant au{" "}
                <a href="https://www.centre-europeen-formation.fr/landing/multi-marque/?code=1464&utm_source=google&utm_medium=cpc&utm_campaign=TOTAL-REF_PAYANT-Marque_CEF&gad_source=1&gclid=Cj0KCQiA4fi7BhC5ARIsAEV1YiYjxt15BuFIOBUssRM3XbapaztCTJT9WkgBhar2QMEnAmDZkgc6qf8aAtpdEALw_wcB">
                  Centre Européen de Formation
                </a>
                .
              </p>
              <p>
                Les images utilisées sur ce site sont libres de droit et ont été
                obtenus sur le site de{" "}
                <a href="https://icons.getbootstrap.com/">Bootstrap</a>.
              </p>
              <p>
                La favicon de ce site a été fournie par{" "}
                <a href="https://www.flaticon.com/de/kostenlose-icons/john-doe">
                  Freepik
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mentions;
