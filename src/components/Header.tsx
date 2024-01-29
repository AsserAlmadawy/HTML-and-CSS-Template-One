"use client";

import React, { useRef } from "react";
import Image from "next/image";
import logo from "@/assets/images/logo.png";
import "@/styles/Header.css";

const Header: React.FC = () => {
  const menuRef = useRef<HTMLDivElement>(null);

  return (
  <div className="header">
    <div className="header-image">
      <Image src={logo} alt="logo" className="logo" />
    </div>
    <div className="header-lines" onMouseOver={() => menuRef.current!.style.display = "block"}>
      <div className="line"></div>
      <div className="line two"></div>
      <div className="line"></div>
    </div>
    <div className="header-menu" ref={menuRef} onMouseOver={() => menuRef.current!.style.display = "block"} onMouseLeave={() => menuRef.current!.style.display = "none"}>
      <ul>
        <li>Services</li>
        <li>Portfolio</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  </div>
  );
};

export default Header;