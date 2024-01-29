import React from "react";
import Image from "next/image";
import logo from "@/assets/images/logo.png";
import "@/styles/Header.css";

const Header: React.FC = () => (
  <div className="header">
    <div className="header-image">
      <Image src={logo} alt="logo" className="logo" />
    </div>
    <div className="header-lines">
      <div className="line"></div>
      <div className="line two"></div>
      <div className="line"></div>
    </div>
    <div className="header-menu">
      <ul>
        <li>Services</li>
        <li>Portfolio</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  </div>
);

export default Header;