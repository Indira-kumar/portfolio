import React from 'react';
import ProjectCard from './ProjectCard';
import "./projectSection.css";
import musicanaScreenshot from './images/musicana.png';
import microverseFestScreenshot from './images/math-magician.png';
const ProjectSection = () => {
    const projects = [
      {
         id: 1,
         title: 'Doc Assist',
         info: {
            client: 'Amfoss',
            role: 'Software Developer',
            year: 2022,
         },
         screenshot: 'https://i.ibb.co/wg6wPNT/Best-doc-app.png',
         description: `The website is a platform that allows patients to raise issues related to their hospital experience. It provides a secure and confidential space for patients to share their concerns and feedback with healthcare providers, with the goal of improving the quality of care and patient satisfaction. The platform also offers resources and support to help patients navigate the healthcare system and advocate for their own health.`,
         skills: ['Node.js', 'Express.js', 'React.js', 'MySQL', 'Tailwindcss', 'REST API'],
         sourceLink: "https://github.com/Indira-kumar/IssueRaiser/tree/feature"
      },
        {
           id: 2,
           title: 'Speaker Ore',
           info: {
              client: 'AjileDone',
              role: 'Software Developer Intern',
              year: 2022,
           },
           screenshot: "https://i.ibb.co/rptzPw3/chrome-TC3-CSol3-Oq.jpg",
           description: `The website is a platform similar to TEDx that allows users to book, organize and view talk events. It provides a space for individuals and organizations to share their ideas and insights with others through talks, presentations and performances. The platform also includes features such as event management, ticketing, and video streaming to enhance the user experience.`,
           skills: ['React', 'FireBase'],
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
