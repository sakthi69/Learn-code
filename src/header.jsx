import React from "react";
import code from './code.png';
export default function Header() {
  return (
    <section id="header">
<div className="head row">
      <div className="head col-lg-6">
        <h1 className="heading">
          Master the Coding Skills to Become an Engineer Companies LOVE to Hire
        </h1>
        <br />
        <button type="button" className="btn btn-light btn-lg download-button">
          Login
        </button>
        <button
          type="button"
          className="btn btn-outline-light btn-lg download-button"
        >
          Sign Up
        </button>
      </div>

      <div className="col-lg-6">
        <img
          className="title-image"
          src={code}
          alt="coding"
        />
      </div>
    </div>
    </section>
    
  );
}
