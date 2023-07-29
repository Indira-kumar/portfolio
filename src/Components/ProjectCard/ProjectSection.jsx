import React from 'react';
import ProjectCard from './ProjectCard';
import "./projectSection.css";
import musicanaScreenshot from './images/musicana.png';
import microverseFestScreenshot from './images/math-magician.png';
const ProjectSection = () => {
    const projects = [
        {
           id: 1,
           title: 'Cargogo - Rental App',
           info: {
              client: 'R.B., Microverse',
              role: 'Full Stack Dev',
              year: 2023,
           },
           screenshot: "https://i.ibb.co/rptzPw3/chrome-TC3-CSol3-Oq.jpg",
           description: `CarGoGo is an online platform that offers a user-friendly and efficient way for customers to rent cars. The website provides a range of vehicles that users can choose from, including sedans, SUVs, trucks, and luxury cars.
           Once a customer has found a car that they like, CarGoGo makes it easy for them to favorite it. Customers can save or delte their favorite cars for future rentals. This feature is particularly useful for frequent travelers who prefer to rent the same car each time they travel.`,
           skills: ['React', 'Redux', 'Rest API', 'Tailwindcss', 'Ruby on Rails', 'Postgresql'],
           liveLink: 'https://cargogo-rental-app.netlify.app/',
           sourceLink: 'https://github.com/RiyaBulia12/Cargogo-front-end'
        },
        {
           id: 2,
           title: 'Musicana',
           info: {
              client: 'R.B., Microverse',
              role: 'Full Stack Dev',
              year: 2022,
           },
           screenshot: musicanaScreenshot,
           description: `Musicana is a mobile web application to display a favorite counts of each Playlist created with through React and Redux. Playlist page displays with a list of playlist that could be filtered by playlist name. Playlist Songs List out all the tracks contained in the playlist.`,
           skills: ['Tailwindcss', 'CSS3', 'Tailwind', 'REST API', 'ES6'],
           liveLink: 'https://riya-musikaana.netlify.app/',
           sourceLink: 'https://github.com/RiyaBulia12/Music-App'
        },
        {
           id: 10,
           title: 'Microversity Spring Fest',
           info: {
              client: 'R.B., Microverse',
              role: 'Front-end Dev',
              year: 2022,
           },
           screenshot: microverseFestScreenshot,
           description: `The project is based on an online website for a college cultural fest. It aids easy access to information related to all the events and allow hassle-free registration for students. The website is currently built with only two pages, Home and About, which gives enough idea about what the Microversity Folklore fiesta is, the location of the event and way to reach out in case of any query.`,
           skills: ['HTML5', 'CSS3', 'Bootstrap5'],
           liveLink: null,
           sourceLink: 'https://github.com/RiyaBulia12/Microversity-Spring-Fest'
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
