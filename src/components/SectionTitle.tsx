import React from "react";
import "@/styles/SectionTitle.css";

interface SectionTitleProps {
  lightText: string;
  blackText: string;
}

const SectionTitle: React.FC<SectionTitleProps> = props => (
  <>
    <div className="light-text">{props.lightText}ld</div>
    <div className="black-text">{props.blackText}</div>
  </>
);

export default SectionTitle;