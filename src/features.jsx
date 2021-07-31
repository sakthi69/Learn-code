import React from "react";

export default function Features() {
  return (
    <section id="features">
      <div className="container-fluid">
        <div className="row">
          <div className="feature-box col-lg-4">
            <i className="icon fas fa-check-circle fa-4x"></i>
            <h3 className="feature-title">Simple and Beginner friendly</h3>
            <p>
              Complex Topics are broken down into simple, digestible lessons
              that anyone can understand.
            </p>
          </div>

          <div className="feature-box col-lg-4">
            <i className="icon fas fa-file-code fa-4x"></i>
            <h3 className="feature-title">Coding Interviews</h3>
            <p>
              in-depth, and comprehensive courses are packed with real-world
              examples and exercises that prepare you for the job.
            </p>
          </div>

          <div className="feature-box col-lg-4">
            <i className="icon fas fa-heart fa-4x"></i>
            <h3 className="feature-title">Passionate Teacher</h3>
            <p>Learn from Calm, friendly and approachable teachers</p>
          </div>
        </div>
      </div>
    </section>
  );
}
