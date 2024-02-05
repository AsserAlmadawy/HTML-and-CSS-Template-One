import React from "react";
import notFoundImage from "@/assets/images/not-found.png";
import Image from "next/image";
import "@/styles/NotFound.css";

const NotFound: React.FC = () => <Image src={notFoundImage} alt="Not Found" className="not-found-image" />

export default NotFound;