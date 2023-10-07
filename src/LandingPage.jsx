import React from "react";
import "./LandingPage.css";
import pp from "./images/pp.png";
import Carosal from "./components/Carosal";
import ProjectCard from "./components/projects/ProjectCard";
import pc1 from "../src/images/pcard.png";
import pc2 from "../src/images/wb2.png";
import pc3 from "../src/images/wb3.png";
import pc4 from "../src/images/wb4.png";
import pc5 from "../src/images/wb5.png";
import pc6 from "../src/images/wb6.png";
import ContactB from "./components/ContactButton/ContactBtn";
import upwork from "./tech icnos/upwork.png";
import linkedin from "./tech icnos/linkedin.png";
import github from "./tech icnos/github.png";
import gmail from "./tech icnos/gmail.png";
import whatsapp from "./tech icnos/whatsapp.png";
import facebook from "./tech icnos/facebook.png";
import insta from "./tech icnos/instagram.png";
import paragraph from "./components/projects/paragraph";
import doc from "../src/components/Doc/Doc";
import Doc from "../src/components/Doc/Doc";
import Header from "./components/Header/Header";
const LandingPage = () => {
  return (
    <>
      <div className="landingpage">
<Header/>

        <div className="m-con">
          <div className="profile-picture">
            <img className="profile-picture1" src={pp} alt="" />
          </div>
          <div className="carosal">
            <Carosal />
            <Carosal />
            <Carosal />
          </div>
        </div>
        <div className="projects">
          <h1>Rifat Yusuf</h1>
          <h2> 5 Years of Full Stack Development Experince</h2>
        </div>

        <div className="weCon">
          <div className="doc">
            <Doc />
          </div>

          <div className="workExamples">
            <ProjectCard
              title="Gym Website"
              thumbnail={pc1}
              description={paragraph}
            />
            <ProjectCard
              title="Animated Dashboard"
              thumbnail={pc2}
              description={paragraph}
            />
            <ProjectCard
              title="Meeting Managment"
              thumbnail={pc3}
              description={paragraph}
            />
            <ProjectCard
              title="Ecommerce Website"
              thumbnail={pc4}
              description={paragraph}
            />
            <ProjectCard
              title="Cafe's Website"
              thumbnail={pc5}
              description={paragraph}
            />
            <ProjectCard
              title="Multitheme Website"
              thumbnail={pc6}
              description={paragraph}
            />

            <ProjectCard
              title="Cafe's Website"
              thumbnail={pc5}
              description={paragraph}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
