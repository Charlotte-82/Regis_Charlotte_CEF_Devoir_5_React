import React from "react";
import "./../assets/css/contact.css";
import Map from "./../assets/img/map.svg";
import Geo from "./../assets/img/geo-alt.svg";
import Tel from "./../assets/img/phone.svg";
import Mail from "./../assets/img/envelope.svg";
import Form from "./../assets/component/form.js";

function Contact() {
  return (
    <div>
      <h1>Contact</h1>
      <p className="contact-top">
        Pour me contacter en vue d'un entretien ou d'une future collaboration,
        merci de remplir le formulaire de contact.
      </p>
      <hr class="border border-primary border-2 opacity-100" />
      <div className="contact-bottom">
        <div className="contact-gauche" class="col-md-6">
          <h2>Formulaire contact</h2>
          <hr class="border border-primary border-2 opacity-100" />
          <Form />
        </div>
        <div className="contact-droite" class="col-md-6">
          <h2>Mes coordonnées</h2>
          <hr class="border border-primary border-2 opacity-100" />
          <h3 className="h4">John Doe</h3>
          <p className="mb-0">
            <img src={Map} alt="icône de carte routière" id="Map" /> 40 rue
            Laure Diebold
          </p>
          <p className="mb-0">
            <img src={Geo} alt="icône d'emplacement géographique" id="Geo" />{" "}
            69009 Lyon, France
          </p>
          <p className="mb-0">
            <img src={Tel} alt="icône de smartphone" id="Tel" /> 10 20 30 40 50
          </p>
          <p>
            <img src={Mail} alt="icône d'enveloppe" id="Mail" />{" "}
            john.doe@gmail.com
          </p>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.6271559985175!2d4.798946315498682!3d45.77991847910688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eaee061cfdbf%3A0xdb50f7e52015ab7!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sen!2sfr!4v1670000000000!5m2!1sen!2sfr"
              width="100%"
              height="500"
              allowFullScreen=""
              title="Adresse de John Doe"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
