import React from 'react'
import "./ProjectList.css";
import projectdata from "./ProjectData";
import Projectcard from './Projectcard';
const ProjectList = () => {
  return (
    <div>ProjectList
    <section class="portfolio-card flex" id="portfolio">
    {projectdata.map(Projectcard)}
    </section> 
    </div>
  )
}

export default ProjectList