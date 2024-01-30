import React from "react";
import SectionTitle from "./SectionTitle";
import Image from "next/image";
import servicesImage from "@/assets/images/services.jpg";
import "@/styles/Services.css";

interface ServicesProps {
  children: React.ReactNode;
}

const Services: React.FC<ServicesProps> = (props) => (
  <div className="services-container">
    <SectionTitle lightText="Services" blackText="Don't be busy, be productive." />
    <div className="services-content">
      <div className="services">{props.children}</div>
      <Image src={servicesImage} alt="Services" className="services-image" />
      <div className="services-image-backdrop"></div>
    </div>
  </div>
);

export default Services;