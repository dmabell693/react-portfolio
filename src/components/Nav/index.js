import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Nav() {

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        <Link to="/"><span className="navbar-brand mb-0 h1">Daniel Abell</span></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse flex-row-reverse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link float-right" id="left-nav" to="/about">About <span
                className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link float-right" id="center-nav" to="/projects">Projects</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link float-right" id="right-nav" to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}


export default Nav;