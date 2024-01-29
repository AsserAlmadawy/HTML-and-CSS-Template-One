import React from "react";
import "@/styles/Intro.css";

interface IntroProps {
  children: React.ReactNode;
}

const Intro: React.FC<IntroProps> = props => <div className="intro">{props.children}</div>;

export default Intro;