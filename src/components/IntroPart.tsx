import React from "react";
import Icon from "@/models/icon";
import Image from "next/image";
import "@/styles/IntroPart.css";

interface IntroPartProps {
  icon: Icon;
  title: string;
}

const IntroPart: React.FC<IntroPartProps> = (props) => (
  <div className="intro-part">
    <Image src={props.icon.source} alt={props.icon.alt} className="intro-icon" />
    <div className="intro-title">{props.title}</div>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut lab.
    </p>
  </div>
);

export default IntroPart;