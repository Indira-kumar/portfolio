import React from 'react'
import "./projectList.css";
const Projectcard = (project) => {
  return (
    <div className="project-container">
      <div className="project-img-container">
         <a href="#" aria-label="Tonic Project">
            <img src={project.screenshot} alt="tonic-project" className="project-img" />
         </a>
      </div>
      <div className="about-project flex">
         <div className="project-title">
            <h2>{project.title}</h2>
         </div>
         <div className="project-info">
            <ul className="flex">
               <li className="client-name">{project.info.client}</li>
               <li className="counter"></li>
               <li className="role">{project.info.role}</li>
               <li className="counter"></li>
               <li className="year">{project.info.year}</li>
            </ul>
         </div>
         <div className="project-description">
            <p>{project.description}</p>
         </div>
         <div className="tags">
            <ul className="flex">
                {project.skills.map((skill) => <li>{skill}</li>).join('')}
            </ul>
         </div>
         <div className="btn-container">
            <button type="submit" className="view-btn" data-bs-toggle="modal" data-bs-target="#projectModal" id="{project.id}" >See Project</button>
         </div>
      </div>
   </div>
  )
}

export default Projectcard