import React, { useState } from "react";
import "../css/Navbar.min.css";
const Navbar = () => {
  const [toggleIcon, setToggleIcon] = useState(false);
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-success bg-info">
        <div className="container">
          <a className="navbar-brand" to="/">
            Prettier Shop
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setToggleIcon(!toggleIcon)}
          >
            <span
              className={toggleIcon ? "fas fa-times" : "fas fa-bars"}
            ></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 me-5 pe-5">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" to="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" to="#">
                  Skincare
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" to="#">
                  Make-up
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" to="#">
                  Mens
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
