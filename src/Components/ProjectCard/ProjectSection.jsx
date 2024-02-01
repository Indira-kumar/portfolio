import React from 'react';
import ProjectCard from './ProjectCard';
import "./projectSection.css";
import musicanaScreenshot from './images/musicana.png';
import microverseFestScreenshot from './images/math-magician.png';
const ProjectSection = () => {
    const projects = [

      {
         id: 1,
         title: 'Finance Management System',
         info: {
            client: 'Free Lancing Project',
            role: 'Team Lead',
            year: 2023,
         },
         screenshot: 'https://i.ibb.co/B6qD6f4/finance-management-project.png',
         description: `The web app is used by many local financial institutions for their fund, debit/credit management. Developed this Microservices-based web application using Spring Boot and Node for the backend servers, with PostgreSQL and MongoDB as the databases. Transformed the application into a Progressive Web App (PWA) with push notifications to enhance user experience and engagement for over 1000 daily users.`,
         skills: ['Node.js', 'Express.js', 'React.js', 'PostgreSQL', 'Tailwindcss', 'REST API', 'Spring Boot', 'MongoDB'],
         sourceLink: "https://github.com/naveenkumarse/thiru-kumaran-dept-maintenance"
      },
      {
         id: 2,
         title: 'Dev Empire',
         info: {
            client: 'GSSOC\'23',
            role: 'Contributor',
            year: 2022,
         },
         screenshot: 'https://i.ibb.co/VHZdzP4/dev-empire.png',
         description: `All in one place where you can find all the resources and details of ambassador/fellowship, open source events, web dev sites, js toolkits, etc. that are available across different sites. I have contributed to the UI, its responsiveness, and the accessibility of the website. My single big contribution would be my work on the buttons in the website during GirlScript Summer of Code 2023.`,
         skills: ['Next.js', 'SASS'],
         sourceLink: "https://github.com/Indira-kumar/DevEmpire",
         liveLink:"https://devempire.netlify.app/"
      },
      {
         id: 3,
         title: 'Pixel Pulse',
         info: {
            client: 'Tech Triump 1.0',
            role: 'Hackathon Winner',
            year: 2023,
         },
         screenshot: 'https://i.ibb.co/Hqgkb6n/pixelpulse-hackathon.png',
         description: `A web app to provide read receipts for emails. It is based on the concept of a web beacon (web bug) which is a technique used on web pages and emails to unobtrusively (usually invisibly) allow checking that a user has accessed some content. Led a team of 4 members in a 24-hour hackathon, developed and deployed the entire web app.`,
         skills: ['Flask','Firebase','Heroku'],
         sourceLink: "https://github.com/Indira-kumar/pixelpulse/tree/master"
      },
      {
         id: 4,
         title: 'Doc Assist',
         info: {
            client: 'Amfoss',
            role: 'Software Developer',
            year: 2022,
         },
         screenshot: 'https://i.ibb.co/Rh5qJ90/doc-assist-cropped.png',
         description: `The website is a platform that allows patients to raise issues related to their hospital experience. It provides a secure and confidential space for patients to share their concerns and feedback with healthcare providers, with the goal of improving the quality of care and patient satisfaction. The platform also offers resources and support to help patients navigate the healthcare system and advocate for their own health.`,
         skills: ['Node.js', 'Express.js', 'React.js', 'MySQL', 'Tailwindcss', 'REST API'],
         sourceLink: "https://github.com/Indira-kumar/IssueRaiser/tree/feature"
      },
        {
           id: 5,
           title: 'Speaker Ore',
           info: {
              client: 'AjileDone',
              role: 'Software Developer Intern',
              year: 2022,
           },
           screenshot: "https://i.ibb.co/mz3DfCQ/speaker-ore-cropped.jpg",
           description: `The website is a platform similar to TEDx that allows users to book, organize and view talk events. It provides a space for individuals and organizations to share their ideas and insights with others through talks, presentations and performances. The platform also includes features such as event management, ticketing, and video streaming to enhance the user experience.`,
           skills: ['React', 'Firebase'],
           sourceLink: 'https://github.com/Indira-kumar/speaker-frontend'
        },
     ];
  return (
    <div>
        <h2 className="section__title different">Projects</h2>
        <p className="about__desc">
        More other Projects are yet to be updated here. You could find them in my GitHub profile.
        </p>
        <section class="portfolio-card flex" id="portfolio">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
       </section> 

    </div>
  );
};

export default ProjectSection;
