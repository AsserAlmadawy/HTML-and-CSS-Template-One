import React from "react";
import "@/styles/SectionTitle.css";

interface SectionTitleProps {
  lightText: string;
  blackText: string;
}

const SectionTitle: React.FC<SectionTitleProps> = (props: SectionTitleProps) => (
  <>
    <div className="light-text">{props.lightText}</div>
    <div className="black-text">{props.blackText}</div>
  </>
);

export default SectionTitle;