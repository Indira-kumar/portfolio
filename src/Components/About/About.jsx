import React from "react";
import "./About.css";
import { Type } from "./Type";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import TwitterIcon from "@material-ui/icons/Twitter";
import DescriptionIcon from "@material-ui/icons/Description";
// import PublicIcon from "@material-ui/icons/Public";
import { Introduction } from "./Introduction";
import { Techstacks } from "./Techstacks";
// import Button from "@mui/material/Button";
export const About = () => {
  return (
    <>
      <div className="about center">
        <h1 data-aos="fade-right" className="mobileHead">
          Hello, I am <span className="about__name">Indira Kumar A K</span>
        </h1>
        <Type />
        <p className="about__desc" data-aos="">
        I was in 6th grade when all this started. I wanted to create an Operating System because I just saw a documentary at that point about Bill Gates and Microsoft. I researched and then realised C language is used for building OS so I enrolled and studied C language at the nearest University available, YES all that in 6th grade!!! 
        </p>
        <p className="about__desc" data-aos="">
        Two years passed, and I completed C++, and HTML along that journey, but still couldn't get anywhere near coding an Operating System, Then I realized I had to start building something instead of just learning so I did my first web page as a freelancing project in my 8th grade. 8 years passed since then, learned numerous languages, built numerous landing pages, and developed countable applications and I can say I still have that excitement for learning and building new things.
        </p>
        <div className="about__contact center">
          <a
            href="https://github.com/Indira-kumar"
            aria-label="github"
            target="_blank"
            rel="noreferrer"
            className="link link--icon"
          >
            <GitHubIcon />
          </a>
          <a
            href="mailto:indirakumarak@gmail.com"
            target="_blank"
            rel="noreferrer"
            aria-label="mail"
            className="link link--icon"
          >
            <EmailIcon />
          </a>
          <a
            href="tel:+918300228399"
            target="_blank"
            rel="noreferrer"
            aria-label="phone"
            className="link link--icon"
          >
            <PhoneIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/indira-kumar-a-k-b612381bb/"
            aria-label="linkedin"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon />
          </a>
          <a
            href="https://twitter.com/theluckiestman"
            aria-label="twitter"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <TwitterIcon />
          </a>
        </div>

        <button
          className="btnResume"
          onClick={() => {
            window.open(
              "https://drive.google.com/file/d/1gOq5CctDuxF3QTmPG-5VC-IN9P66DC1u/view?usp=sharing"
            );
          }}
        >
          Resume
        </button>
      </div>
      <Introduction />
      <section id="#skills">
        <Techstacks />
      </section>
    </>
  );
};
