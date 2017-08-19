import React from "react";
import logo from "../images/rainy.svg";

const Navbar = props =>
  <nav className="navbar">
    <div className="navbar-brand">
      <a className="navbar-item" href="http://bulma.io">
        <img
          src={logo}
          alt="React Redux Simple Weather App"
          width="150"
          height="60"
        />
      </a>
      <span className="navbar-item">React &amp; Redux Weather App</span>
    </div>
    <div className="navbar-end">
      <a href="#" className="navbar-item" target="_blank">
        Source Code &nbsp;
        <span className="icon">
          <i className="fa fa-github" />
        </span>
      </a>
    </div>
  </nav>;

export default Navbar;
