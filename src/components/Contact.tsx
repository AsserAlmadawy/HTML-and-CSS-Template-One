import React from "react";
import SectionTitle from "./SectionTitle";
import Image from "next/image";
import youtubeIcon from "@/assets/icons/youtube.svg";
import facebookIcon from "@/assets/icons/facebook.svg";
import twitterIcon from "@/assets/icons/twitter.svg";
import "@/styles/Contact.css";

const Contact: React.FC = () => (
  <div className="contact">
    <SectionTitle lightText="Contact" blackText="We are born to create." />
    <div className="contact-content">
      <div className="blue-text">Feel free to drop us a line at:</div>
      <div className="email">leonagency@mail.com</div>
      <div className="social-networks">
        Find us on social networks.
        <Image src={youtubeIcon} alt="Youtube" className="icon" />
        <Image src={facebookIcon} alt="Facebook" className="icon" />
        <Image src={twitterIcon} alt="Twitter" className="icon" />
      </div>
    </div>
  </div>
);

export default Contact;