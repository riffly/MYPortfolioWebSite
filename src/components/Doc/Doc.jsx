import React from "react";
import "./doc.css";

import upwork from "../../tech icnos/upwork.png";
import linkedin from "../../tech icnos/linkedin.png";
import github from "../../tech icnos/github.png";
import gmail from "../../tech icnos/gmail.png";
import whatsapp from "../../tech icnos/whatsapp.png";
import facebook from "../../tech icnos/facebook.png";
import insta from "../../tech icnos/instagram.png";

import ContactB from "../ContactButton/ContactBtn";

const Doc = () => {
  const upworkProfileUrl = "https://www.upwork.com/freelancers/rifaty";
  const linkedinProfileUrl = "https://www.linkedin.com/in/rifat-yusuf-96a830180/";
  const githubProfileUrl = "https://github.com/riffly";
  const gmailProfileUrl = "mailto:iamyusufrifat@gmail.com";
  const facebookProfileUrl = "https://www.facebook.com/rifat1in100";
  const instaProfileUrl = "https://www.instagram.com/riff_fly/";
  const whatsappProfileUrl = "https://wa.me/01723779197/";

  return (
    <div className="icon-container">
      <div className="icon">
        <a href={upworkProfileUrl} target="_blank" rel="noopener noreferrer">
          <ContactB icon={upwork} />
        </a>
        <a href={linkedinProfileUrl} target="_blank" rel="noopener noreferrer">
          <ContactB icon={linkedin} />
        </a>
        <a href={githubProfileUrl} target="_blank" rel="noopener noreferrer">
          <ContactB icon={github} />
        </a>
        <a href={gmailProfileUrl} target="_blank" rel="noopener noreferrer">
          <ContactB icon={gmail} />
        </a>
        <a href={facebookProfileUrl} target="_blank" rel="noopener noreferrer">
          <ContactB icon={facebook} />
        </a>
        <a href={instaProfileUrl} target="_blank" rel="noopener noreferrer">
          <ContactB icon={insta} />
        </a>
        <a href={whatsappProfileUrl} target="_blank" rel="noopener noreferrer">
          <ContactB icon={whatsapp} />
        </a>
      </div>
    </div>
  );
};

export default Doc;
