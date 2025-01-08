import React from "react";
import "./../css/progress.css";

function Levels() {
  return (
    <div className="levels">
      <p>HTML 90%</p>
      <div className="progress">
        <div
          class="progress-bar bg-success"
          role="progressbar"
          aria-label="html level"
          style={{ width: "90%" }}
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
      <p>CSS 80%</p>
      <div className="progress">
        <div
          class="progress-bar bg-info"
          role="progressbar"
          aria-label="css level"
          style={{ width: "80%" }}
          aria-valuenow="50"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
      <p>JAVASCRIPT 70%</p>
      <div className="progress">
        <div
          class="progress-bar bg-warning"
          role="progressbar"
          aria-label="javascript level"
          style={{ width: "70%" }}
          aria-valuenow="75"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
      <p>PHP 60%</p>
      <div className="progress">
        <div
          class="progress-bar bg-danger"
          role="progressbar"
          aria-label="php level"
          style={{ width: "60%" }}
          aria-valuenow="100"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
      <p>REACT 50%</p>
      <div className="progress">
        <div
          class="progress-bar bg-primary"
          role="progressbar"
          aria-label="react level"
          style={{ width: "50%" }}
          aria-valuenow="100"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
    </div>
  );
}

export default Levels;
