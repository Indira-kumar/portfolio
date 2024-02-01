import React from "react";
import "./Techstacks.css";
import { FaReact, FaNodeJs, FaAws, FaGolang } from "react-icons/fa";
import {
  SiRedux,
  SiHtml5,
  SiMaterialui,
  SiExpress,
  SiRedis,
  SiTailwindcss,
  SiNetlify
} from "react-icons/si";
import { DiPostgresql , DiMongodb } from "react-icons/di";
import { SiJavascript, SiSpringboot, SiFlask} from "react-icons/si";
import { VscGithub } from "react-icons/vsc";
import { BsBootstrap, BsWordpress } from "react-icons/bs";
import { BiLogoGoLang } from "react-icons/bi";

export const Techstacks = () => {
  return (
    <>
      <div className="section main" data-aos="fade-right">
        <h2 className="section__title different">Skills</h2>
        <div className="techsection">
          <div>
            <SiJavascript />
            <h5>Javascript</h5>
          </div>
          <div>
            <SiHtml5 />
            <h5>HTML</h5>
          </div>
          <div>
            <FaReact />
            <h5>React</h5>
          </div>
          <div>
            <FaNodeJs />
            <h5>Nodejs</h5>
          </div>
          <div>
            <DiMongodb />
            <h5>MongoDb</h5>
          </div>
          <div>
            <SiExpress />
            <h5>Express</h5>
          </div>
          <div>
            <FaAws />
            <h5>AWS</h5>
          </div>
          <div>
            <BsBootstrap />
            <h5>Bootstrap</h5>
          </div>
          <div>
            <SiSpringboot />
            <h5>Spring Boot</h5>
          </div>
          <div>
            <VscGithub />
            <h5>Github</h5>
          </div>
          <div>
            <DiPostgresql />
            <h5>PostgreSQL</h5>
          </div>
          <div>
            <SiFlask />
            <h5>Flask</h5>
          </div>
        </div>
      </div>
    </>
  );
};
