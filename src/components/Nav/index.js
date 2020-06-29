import React from "react";
import "./style.css";

function Nav() {

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        <a href="/"><span className="navbar-brand mb-0 h1">Daniel Abell</span></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse flex-row-reverse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link float-right" id="left-nav" href="/about">About <span
                className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link float-right" id="center-nav" href="/projects">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link float-right" id="right-nav" href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}


export default Nav;