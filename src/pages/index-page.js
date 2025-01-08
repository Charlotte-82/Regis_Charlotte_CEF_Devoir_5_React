import React from "react";
import "./../assets/css/index-page.css";
import johnDoeAbout from "./../assets/img/john-doe-about.jpg";
import Levels from "./../assets/component/progress.js";
import Footer from "./../assets/component/footer.js";

function IndexPage() {
  return (
    <div className="index-page">
      <div className="index-top">
        <h1>Bonjour, je suis John Doe,</h1>
        <h2>Developper Web Full Stack</h2>
        <button type="button" class="btn btn-danger">
          <a className="index-button" href="#">
            En savoir plus
          </a>
        </button>
      </div>
      <div className="index-bottom">
        <div className="index-bottom-left" class="col-md-6">
          <h3>À propos</h3>
          <hr></hr>
          <div className="portrait">
            <img
              src={johnDoeAbout}
              alt="portrait de john doe"
              id="johnDoeAbout"
            />
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            pulvinar ut augue id sollicitudin. Mauris luctus aliquet justo, nec
            varius diam aliquet a. Pellentesque vitae enim volutpat, tincidunt
            justo non, imperdiet leo.
          </p>
          <p>
            Sed lectus neque, tempor eu ex sit amet, dictum accumsan nunc.
            Vivamus venenatis, ex vitae accumsan molestie, massa est dictum
            tellus, quis fringilla sem dui quis arcu.
          </p>
          <p>
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Suspendisse tellus elit, egestas sed accumsan
            et, faucibus et velit. Fusce interdum nisl ac magna luctus rhoncus
            quis sit amet nunc.
          </p>
        </div>
        <div className="index-bottom-right" class="col-md-6">
          <h3>Mes compétences</h3>
          <hr />
          <Levels />
        </div>
      </div>
    </div>
  );
}

export default IndexPage;
