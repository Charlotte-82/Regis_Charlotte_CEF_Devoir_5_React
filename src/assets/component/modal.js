import React from "react";
import { useState, useEffect } from "react";

const Modal = () => {
  const [showModal, setShowModal] = useState(false);
  const [profile, setProfile] = useState([]);

  const fetchGithubData = async () => {
    const res = await fetch("https://api.github.com/users/github-john-doe");
    const data = await res.json();
    setProfile(data);
  };
  useEffect(() => {
    fetchGithubData();
  });
  return (
    <div>
      <button className="btn btn-danger" onClick={() => setShowModal(true)}>
        En savoir plus
      </button>
      <div
        className="modal show d-bloc"
        tabIndex="-1"
        style={{ display: showModal ? "block" : "none" }}
      >
        {" "}
        <div
          className="modal-dialog modal-dialog-centered"
          style={{ maxWidth: "80%" }}
        >
          <div className="modal-content bg-dark text-light">
            <div
              className="modal-header"
              style={{ borderColor: "rgba(113,113,113,1)" }}
            >
              {" "}
              <h3 className="modal-title">Mon profil GitHub</h3>
              <button
                type="button"
                className="btn-close"
                onClick={() => setShowModal(false)}
              ></button>
            </div>
            <div className="modal-body ">
              <div className="container">
                <div className="row">
                  <div className="col-md-6 col-12 text-center ">
                    <img
                      src={profile.avatar_url}
                      alt="Avatar Github"
                      className="img-fluid profile-img mb-3"
                    ></img>
                  </div>
                  <div className="col-md-6 col-12 text-start">
                    <ul className="list-unstyled mb-2">
                      <li className="border-bottom border-secondary-subtle mb-3 ">
                        <i className=" bi bi-person me-1"></i>
                        <a
                          href={profile.html_url || "Aucun nom spécifié"}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {profile.name}
                        </a>
                      </li>
                      <li className="border-bottom border-secondary-subtle mb-3 ">
                        <i className=" bi bi-geo-alt me-1"></i>
                        {profile.location || ""}{" "}
                      </li>
                      <li className="border-bottom border-secondary-subtle mb-3">
                        <i className=" bi bi-card-text me-1"></i>
                        {profile.bio || "Aucune biographie disponible"}
                      </li>
                      <li className="border-bottom border-secondary-subtle mb-3">
                        <i className=" bi bi-box me-1"></i>Repositories :{" "}
                        {profile.public_repos}
                      </li>
                      <li className="border-bottom border-secondary-subtle mb-3">
                        <i className="bi bi-people me-1"></i>Followers :{" "}
                        {profile.followers}
                      </li>
                      <li>
                        <i className="bi bi-people me-1"></i>Following :
                        {profile.following}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="modal-footer"
              style={{ borderColor: "rgba(113, 113, 113, 1)" }}
            >
              <button
                className="btn btn-secondary"
                onClick={() => setShowModal(false)}
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Modal;
