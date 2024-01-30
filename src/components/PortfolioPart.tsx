import React from "react";
import Image from "next/image";
import type { Image as ImageType } from "@/models/image";
import "@/styles/PortfolioPart.css";

interface PortfolioPartProps {
  image: ImageType;
}

const PortfolioPart: React.FC<PortfolioPartProps> = (props: PortfolioPartProps) => (
  <div className="portfolio-part">
    <Image src={props.image.source} alt={props.image.alt} className="portfolio-image" />
    <div className="portfolio-title">Project here</div>
    <p>
      My creative ability is very difficult to measure because it can manifest
      in so many surprising and ....
    </p>
  </div>
);

export default PortfolioPart;
export type { PortfolioPartProps };