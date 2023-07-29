import React from 'react'
import "./projectList.css";

import Projectcard from './Projectcard';
const ProjectList = () => {
  const projectdata = [
    {
       id: 1,
       title: 'Cargogo - Rental App',
       info: {
          client: 'R.B., Microverse',
          role: 'Full Stack Dev',
          year: 2023,
       },
       screenshot: 'images/desktop-version/cargogo.png',
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
       screenshot: 'images/desktop-version/musicana.png',
       description: `Musicana is a mobile web application to display a favorite counts of each Playlist created with through React and Redux. Playlist page displays with a list of playlist that could be filtered by playlist name. Playlist Songs List out all the tracks contained in the playlist.`,
       skills: ['Tailwindcss', 'CSS3', 'Tailwind', 'REST API', 'ES6'],
       liveLink: 'https://riya-musikaana.netlify.app/',
       sourceLink: 'https://github.com/RiyaBulia12/Music-App'
    },
    {
       id: 3,
       title: 'Space Hub',
       info: {
          client: 'R.B., Microverse',
          role: 'Full Stack Dev',
          year: 2022,
       },
       screenshot: 'images/desktop-version/space-hub.png',
       description: `The Space Travelers' Hub displays list of Rockets, Missions, and the user can reserve any rockets or become member of mission which is listed in the My Profile section.`,
       skills: ['React', 'Redux', 'Tailwind', 'Jest', 'ES6'],
       liveLink: 'https://riya-space-hub.netlify.app/',
       sourceLink: 'https://github.com/RiyaBulia12/Space-Hub'
    },
    {
       id: 4,
       title: 'Pokilo',
       info: {
          client: 'R.B., Microverse',
          role: 'Full Stack Dev',
          year: 2022,
       },
       screenshot: 'images/desktop-version/pokilo.png',
       description: `Pokilo displays information about the Pokemons for which user can post likes and comments on each pokemon.`,
       skills: ['HTML5', 'CSS3', 'Bootstrap5', 'REST API', 'ES6'],
       liveLink: 'https://pokilo.netlify.app/',
       sourceLink: 'https://github.com/RiyaBulia12/Pokilo'
    },
    {
       id: 5,
       title: 'Book Store',
       info: {
          client: 'R.B., Microverse',
          role: 'Full Stack Dev',
          year: 2022,
       },
       screenshot: 'images/desktop-version/book-store.png',
       description: `"Bookstore" is an MVP website that allows you to: display a list of books, add a book, remove a selected book.`,
       skills: ['HTML5', 'CSS3', 'Bootstrap5', 'React', 'ES6'],
       liveLink: 'https://admirable-frangollo-a50203.netlify.app/',
       sourceLink: 'https://github.com/RiyaBulia12/Book-Store'
    },
    {
       id: 6,
       title: 'Math Magicians',
       info: {
          client: 'R.B., Microverse',
          role: '',
          year: 2022,
       },
       screenshot: 'images/desktop-version/math-magician.png',
       description: `"Math magicians" is a website for all fans of mathematics. It is a Single Page App (SPA) that allows users to: Make simple calculations & Read a random math-related quote.`,
       skills: ['html', 'css', 'JavaScript', 'React', 'jest', 'ES6'],
       liveLink: 'https://moonlit-shortbread-872398.netlify.app/',
       sourceLink: 'https://github.com/RiyaBulia12/Math-Magician'
    },
    {
       id: 7,
       title: 'Leaderboard',
       info: {
          client: 'R.B., Microverse',
          role: 'Full Stack Dev',
          year: 2022,
       },
       screenshot: 'images/desktop-version/leaderboard.png',
       description: `The leaderboard website displays scores submitted by different players. It also allows you to submit your score.`,
       skills: ['HTML5', 'CSS3', 'Bootstrap5', 'ES6'],
       liveLink: 'https://riyabulia12.github.io/Leaderboard/dist/',
       sourceLink: 'https://github.com/RiyaBulia12/Leaderboard'
    },
    {
       id: 8,
       title: 'To-Do List : ES6',
       info: {
          client: 'R.B., Microverse',
          role: 'Full Stack Dev',
          year: 2022,
       },
       screenshot: 'images/desktop-version/to-do-list.png',
       description: `"To-do list" is a tool that helps to organize your day. It simply lists the things that you need to do and allows you to mark them as complete.`,
       skills: ['HTML5', 'CSS3', 'JavaScript', 'ES6', 'webpack'],
       liveLink: 'https://riyabulia12.github.io/To-do-list/dist/',
       sourceLink: 'https://github.com/RiyaBulia12/To-do-list'
    },
    {
       id: 9,
       title: 'Awesome Book App',
       info: {
          client: 'R.B., Microverse',
          role: 'Front-End Dev',
          year: 2022,
       },
       screenshot: 'images/desktop-version/awesome-book-1.png',
       description: `Awesome books is a simple fully functional website that displays a list of books and allows you to add and remove books from that list. This application is built using Single Page Application concept where three links added on top of the page: List, Create and Contact. When the user clicks on any of the three links, the main area changes to display only one of the three content sections.`,
       skills: ['HTML5', 'CSS3', 'JavaScript', 'ES6'],
       liveLink: 'https://riyabulia12.github.io/Awesome-Book/',
       sourceLink: 'https://github.com/RiyaBulia12/Awesome-Book/'
    },
    {
       id: 10,
       title: 'Microversity Spring Fest',
       info: {
          client: 'R.B., Microverse',
          role: 'Front-end Dev',
          year: 2022,
       },
       screenshot: 'images/desktop-version/microversity-fest.png',
       description: `The project is based on an online website for a college cultural fest. It aids easy access to information related to all the events and allow hassle-free registration for students. The website is currently built with only two pages, Home and About, which gives enough idea about what the Microversity Folklore fiesta is, the location of the event and way to reach out in case of any query.`,
       skills: ['HTML5', 'CSS3', 'Bootstrap5'],
       liveLink: 'https://riyabulia12.github.io/Microversity-Spring-Fest/',
       sourceLink: 'https://github.com/RiyaBulia12/Microversity-Spring-Fest'
    },
 ];
  return (
    <div>ProjectList
    <section class="portfolio-card flex" id="portfolio">
    {projectdata.map((project) => (
        <Projectcard key={project.id} project={project} />
      ))}
    </section> 
    </div>
  )
}

export default ProjectList