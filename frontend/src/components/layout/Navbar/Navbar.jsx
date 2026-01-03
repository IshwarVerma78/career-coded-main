// Navbar.jsx
import React, { useState } from "react";
import "./Navbar.css";

import logo from "../../../assets/images/logo2.png";
import { NavLink } from "react-router-dom";
import Button from "../ui/Button/Button";

import CallbackModal from "../../callback/CallbackModal/CallbackModal.jsx"

function Navbar() {
  const [open, setOpen] = useState(false);
  const [isCallbackOpen, setIsCallbackOpen] = useState(false);


  return (
    <>
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
            <li> <NavLink to="/">Home</NavLink> </li>
            <li> <NavLink to="/categories">Categories</NavLink> </li>
            <li> <NavLink to="/courses"> Courses </NavLink> </li>
            <li> <NavLink to="/instructors"> Instructors </NavLink> </li>
            <li> <NavLink to="/contact"> Contact </NavLink> </li>
          </ul>

          <div className="nav-right">
            <NavLink to="/login"> <Button variant="outline"> Login </Button> </NavLink>
            <NavLink to="/register"> <Button variant="outline"> Register </Button> </NavLink>
            <Button variant="primary" onClick={()=>setIsCallbackOpen(true)}> 📞 Request Callback </Button>
          </div>
        </div>

      </nav>

      <CallbackModal
          isOpen={isCallbackOpen}
          onClose={() => setIsCallbackOpen(false)}
      />

    </>
  );
}

export default Navbar;
