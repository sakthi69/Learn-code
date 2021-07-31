import React from "react";
import code from './code.png';

export default function Navbar() {
  return (
    <nav className="nav-bg navbar navbar-expand-lg navbar-light  fixed-top py-3">
      <div className="container-fluid">
        <img className="bran-pic" src={code} alt="coding" />
        <a className="navbar-brand" href="#header">
          Learn Code
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="bran navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#header">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#features">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#testimonials">
                Comments
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#course">
                Courses
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#join">
                Sign Up
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#footer">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
