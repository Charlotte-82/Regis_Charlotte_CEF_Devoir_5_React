import React, { useState } from "react";

function Modal() {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <div>
      <button type="button" class="btn btn-danger">
        <a href="#" onClick={handleShow}>
          En savoir plus
        </a>
      </button>
      {show && (
        <div
          className="modal show d-block"
          tabIndex="-1"
          style={{ backgroundColor: "rgba(0,0,0,0.5" }}
        >
          <div className="modal-dialog">
            <div
              className="modal-content"
              style={{
                backgroundColor: "rgba(42,42,48,1)",
                borderColor: "rgba(113,113,113,1)",
              }}
            >
              <div
                className="modal-header"
                style={{
                  borderColor: "rgba(113,113,113,1)",
                }}
              >
                <h5 className="modal-title">Mon profil GitHub</h5>
                <button
                  type="button"
                  className="btn-close btn-secondary"
                  onClick={handleClose}
                ></button>
              </div>
              <div className="modal-body">
                <p>Contenu de la modale</p>
              </div>
              <div
                className="modal-footer"
                style={{
                  borderColor: "rgba(113,113,113,1)",
                }}
              >
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleClose}
                >
                  Fermer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
    // <div class="modal-body">
    //   <div class="container-fluid">
    //     <div class="row">
    //       <div class="col-md-4">.col-md-4</div>
    //       <div class="col-md-4 ms-auto">.col-md-4 .ms-auto</div>
    //     </div>
    //     <div class="row">
    //       <div class="col-md-3 ms-auto">.col-md-3 .ms-auto</div>
    //       <div class="col-md-2 ms-auto">.col-md-2 .ms-auto</div>
    //     </div>
    //     <div class="row">
    //       <div class="col-md-6 ms-auto">.col-md-6 .ms-auto</div>
    //     </div>
    //     <div class="row">
    //       <div class="col-sm-9">
    //         Level 1: .col-sm-9
    //         <div class="row">
    //           <div class="col-8 col-sm-6">Level 2: .col-8 .col-sm-6</div>
    //           <div class="col-4 col-sm-6">Level 2: .col-4 .col-sm-6</div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Modal;
