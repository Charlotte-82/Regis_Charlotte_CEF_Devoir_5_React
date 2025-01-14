import React from "react";
import "./../assets/css/index-page.css";
import johnDoeAbout from "./../assets/img/john-doe-about.jpg";
import Levels from "./../assets/component/progress.js";
import Modal from "./../assets/component/modal.js";

function IndexPage() {
  return (
    <div className="index-page">
      <div className="index-top">
        <h1>Bonjour, je suis John Doe,</h1>
        <h2>Developper Web Full Stack</h2>

        <Modal />
      </div>
      <div className="index-bottom">
        <div className="index-bottom-left" class="col-md-6">
          <h3>À propos</h3>
          <hr class="border border-primary border-2 opacity-100" />
          <div className="portrait">
            <img
              src={johnDoeAbout}
              alt="portrait de john doe"
              id="johnDoeAbout"
            />
          </div>
          <p class="text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            pulvinar ut augue id sollicitudin. Mauris luctus aliquet justo, nec
            varius diam aliquet a. Pellentesque vitae enim volutpat, tincidunt
            justo non, imperdiet leo.
          </p>
          <p class="text-center">
            Sed lectus neque, tempor eu ex sit amet, dictum accumsan nunc.
            Vivamus venenatis, ex vitae accumsan molestie, massa est dictum
            tellus, quis fringilla sem dui quis arcu.
          </p>
          <p class="text-center">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Suspendisse tellus elit, egestas sed accumsan
            et, faucibus et velit. Fusce interdum nisl ac magna luctus rhoncus
            quis sit amet nunc.
          </p>
        </div>
        <div className="index-bottom-right" class="col-md-6">
          <h3>Mes compétences</h3>
          <hr class="border border-primary border-2 opacity-100" />
          <Levels />
        </div>
      </div>
    </div>
  );
}

export default IndexPage;
