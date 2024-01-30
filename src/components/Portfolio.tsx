import React from "react";
import SectionTitle from "./SectionTitle";
import "@/styles/Portfolio.css";

interface PortfolioProps {
  children: React.ReactNode;
}

const Portfolio: React.FC<PortfolioProps> = (props: PortfolioProps) => (
  <div className="portfolio-container">
    <SectionTitle lightText="Portfolio" blackText="If you do it right, it will last forever." />
    <div className="portfolio">{props.children}</div>
  </div>
);

export default Portfolio;