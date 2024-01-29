import React from "react";

interface ServicesProps {
  children: React.ReactNode;
}

const Services: React.FC<ServicesProps> = props => <div className="services">{props.children}</div>;

export default Services;                       