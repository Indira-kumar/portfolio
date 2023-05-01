import React from "react";
import "./Projects.css";
import { FaReact, FaHardHat } from "react-icons/fa";
import {
  SiBlockchaindotcom,
  SiHtml5,
  SiMaterialui,
  SiChai,
  SiEthereum,
  SiExpress,
  SiSocketdotio,
  SiTailwindcss,
  SiReactrouter,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { VscJson } from "react-icons/vsc";
import { IoLogoJavascript } from "react-icons/io";
export const Projects = () => {
  return (
    <>
      <div className="section">
        <h2 className="section__title different">Projects</h2>
        <p className="about__desc">
        More other Projects are yet to be updated here. You could find them in my GitHub profile.
        </p>
        <div className="allProjects">
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://i.ibb.co/rptzPw3/chrome-TC3-CSol3-Oq.jpg"
                    alt="Speaker Ore"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Speaker Ore</h2>
                <p>
                The website is a platform similar to TEDx that allows users to book, organize and view talk events. It provides a space for individuals and organizations to share their ideas and insights with others through talks, presentations and performances. The platform also includes features such as event management, ticketing, and video streaming to enhance the user experience.
                </p>
                <div>
                <div class="tags">
                     <ul class="flex" id="technologies">
                     <li> Firebase </li>
                     <li> React </li>
                     </ul>
                  </div>
                </div>
                <div>
                  {/* <a
                    href="https://store-rockstargames.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a> */}
                  <a
                    href="https://github.com/Indira-kumar/speaker-frontend"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://i.ibb.co/wg6wPNT/Best-doc-app.png"
                    alt="Issue Raiser"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Issue raiser</h2>
                <p>
                The website is a platform that allows patients to raise issues related to their hospital experience. It provides a secure and confidential space for patients to share their concerns and feedback with healthcare providers, with the goal of improving the quality of care and patient satisfaction. The platform also offers resources and support to help patients navigate the healthcare system and advocate for their own health.
                </p>
                <div>
                <div class="tags">
                     <ul class="flex" id="technologies">
                     <li> Express </li>
                     <li> React </li>
                     <li> Node </li>
                     <li> Mongo </li>
                     </ul>
                  </div>
                </div>
                <div>
                  {/* <a
                    href="https://store-rockstargames.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a> */}
                  <a
                    href="https://github.com/Indira-kumar/IssueRaiser/tree/feature"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      
    </>
  );
};
