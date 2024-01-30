import React from "react";
import Image from "next/image";
import type { Image as Icon } from "@/models/image";
import "@/styles/Service.css";

interface ServiceProps {
  icon: Icon;
  title: string;
  description: string;
  className: string;
}

const Service: React.FC<ServiceProps> = props => (
  <div className={`service ${props.className}`}>
    <Image src={props.icon.source} alt={props.icon.alt} className="service-icon" />
    <div className="service-title">{props.title}</div>
    <div className="service-description">{props.description}</div>
  </div>
);

export default Service;