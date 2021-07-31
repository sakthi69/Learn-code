import React from "react";
import man from './man.png';
import girl from './girl.png';
import woman from './woman.png';

export default function Testimonial() {
  return (
    <section className="colored-section" id="testimonials">
      <div
        id="carousel-controls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active container-fluid">
            <h2 className="testimonial-text">
              Amazing JS course, for beginners as well as professionals.
              explained in-depth concepts of each module of ES6 with best
              practices.
            </h2>
            <img
              className="testimonial-image"
              src={man}
              alt="man"
            />
            <em>Brent Rivera, New York</em>
          </div>
          <div className="carousel-item container-fluid">
            <h2 className="testimonial-text">
              I got my first ever job as a full-stack dev after completing your
              React course. Now, I'm starting my own company using React and
              .NET Core.
            </h2>
            <img
              className="testimonial-image"
              src={girl}
              alt="girl"
            />
            <em>Pierson, California</em>
          </div>
          <div className="carousel-item container-fluid">
            <h2 className="testimonial-text">
              I was surprised when a few months later I started working in a
              software factory and everything I had learned in the course was
              used in real world applications
            </h2>
            <img
              className="testimonial-image"
              src={woman}
              alt="woman"
            />
            <em>Charlotte, Florida</em>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carousel-controls"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carousel-controls"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
}
