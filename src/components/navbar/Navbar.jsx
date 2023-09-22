import React from "react";
import "./Navbar.css";
import Button from "../button/Button";
import image from "../../asset/image";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-wrapper">
        <img className="logo" src={image.Logo} alt="logo" />
        <img src="" alt="" />
        <ul className="nav-links">
          <li className='heading-primary'>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <Button name="Login" />
      </div>
    </div>
  );
};

export default Navbar;
