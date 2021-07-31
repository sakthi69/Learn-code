import React from "react";
import pyth from './pyth.jpg';
import html from './html.jpg';
import reac from './react.png';
import django from "./django.jpg";
import docker from "./docker.png";
import sql from "./sql.jpg";


export default function Container() {
  return (
    <section id="course">
      <h2 className="section-heading">Our Courses</h2>
      <br />
      <div className="row">
        <div className="cour pricing-column col-lg-4 col-md-6">
          <div className="car card">
            <div className="card-header">
              <img
                className="course-img"
                src={pyth}
                alt="python"
              />
            </div>
            <div className="card-body">
              <a href="https://docs.python.org/3/" className="cour-link">
                Python Course
              </a>
              <p>Everything you need to program in Python in one course</p>
              <p>9 Modules</p>
              <p>43 Lessons </p>
            </div>
          </div>
        </div>

        <div className="cour pricing-column col-lg-4 col-md-6">
          <div className="car card">
            <div className="card-header">
              <img
                className="course-img"
                src={html}
                alt="html-css"
              />
            </div>
            <div className="card-body">
              <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" className="cour-link">
                HTML + CSS Course
              </a>
              <p className="car-para">
                Everything you need to build fast and stunning websites with
                HTML and CSS
              </p>
              <p>11 Modules</p>
              <p>37 Lessons</p>
            </div>
          </div>
        </div>

        <div className="cour pricing-column col-lg-4">
          <div className="car card">
            <div className="card-header">
              <img
                className="course-img"
                src={reac}
                alt="react js"
              />
            </div>
            <div className="card-body">
              <a href="https://reactjs.org/docs/getting-started.html" className="cour-link">
                React Js Course
              </a>
              <p className="car-para">
                Become web developer with access to our React Js course
              </p>
              <p>13 Modules</p>
              <p>38 Lessons</p>
            </div>
          </div>
        </div>
        <div className="cour pricing-column col-lg-4 col-md-6">
          <div className="car card">
            <div className="card-header">
              <img
                className="course-img"
                src={django}
                alt="django"
              />
            </div>
            <div className="card-body">
              <a href="https://docs.djangoproject.com/en/3.2/" className="cour-link">
                Django Course
              </a>
              <p className="car-para">
                Master the fundamentals of Web development with django
              </p>
              <p>11 Modules</p>
              <p>32 Lessons</p>
            </div>
          </div>
        </div>

        <div className="cour pricing-column col-lg-4 col-md-6">
          <div className="car card">
            <div className="card-header">
              <img
                className="course-img"
                src={docker}
                alt="docker"
              />
            </div>
            <div className="card-body">
              <a href="https://docs.docker.com/" className="cour-link">
                Docker Course
              </a>
              <p className="car-para">
                Everything you need to master Docker in one clear,concise course
              </p>
              <p>8 Modules</p>
              <p>27 Lessons</p>
            </div>
          </div>
        </div>

        <div className="cour pricing-column col-lg-4 col-md-6">
          <div className="car card">
            <div className="card-header">
              <img
                className="course-img"
                src={sql}
                alt="sql"
              />
            </div>
            <div className="card-body">
              <a  href="https://dev.mysql.com/doc/"  className="cour-link">
                MySql Course
              </a>
              <p className="car-para">
                Master the fundamentals of database with MySql
              </p>
              <p>9 Modules</p>
              <p>29 Lessons</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
