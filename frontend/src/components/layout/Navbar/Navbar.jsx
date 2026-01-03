// Navbar.jsx
import React, { useState } from "react";
import "./Navbar.css";
// import logo from "../../assets/images/logo2.png";
import logo from "../../../assets/images/logo2.png";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* LEFT */}
      <div className="nav-left">
        <img src={logo} alt="CareerCoded Logo" className="brand-logo" />
        <span className="brand">CareerCoded</span>
      </div>

      {/* HAMBURGER */}
      <div className="hamburger" onClick={() => setOpen(!open)}>
        <span />
        <span />
        <span />
      </div>

      {/* CENTER + RIGHT */}
      <div className={`nav-menu ${open ? "active" : ""}`}>
        <ul className="nav-center">
          <li> <NavLink to="/categories">Categories</NavLink> </li>
          <li> <NavLink to="/courses"> Courses </NavLink> </li>
          <li> <NavLink to="/instructors"> Instructors </NavLink> </li>
          <li> <NavLink to="/contact"> Contact </NavLink> </li>
        </ul>

        <div className="nav-right">
          <NavLink to="/login" className="btn-outline"> Login </NavLink>
          <NavLink to="/register" className="btn-outline"> Register </NavLink>
          {/* <button className="btn-outline">Login</button>
          <button className="btn-outline">Register</button> */}
          <button className="btn-primary">📞 Request Callback</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
