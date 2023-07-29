import React from 'react'
import "./projectCard.css";
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import GitHubIcon from '@material-ui/icons/GitHub';
// import "./modal.css";
// import { Modal, Button, Typography } from '@material-ui/core';
// import ModalCard from './ModalCard';

const ProjectCard = ({project}) => {
    // const [showModal, setShowModal] = useState(false);
  return (
    <div className="project-container">
        <div className="project-img-container">
            <div className="image-wrapper">
                <img src={project.screenshot} alt={project.title} className="project-img" />
                <div className="overlay"></div>
                <a href={project.liveLink} className="view-btn view-button" target='_blank'>Live Demo</a>
            </div>
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
                    {project.skills.map((skill) => <li>{skill}</li>)}
                </ul>
            </div>
            <div className="btn-container flex-column">
            <a href={[project.sourceLink]} target='_blank'>
                <button type="submit" class="view-btn modal-view-btn source-container">
                    <span>Source</span>
                        <span className='github-logo'><GitHubIcon /></span>
                </button>
            </a>
           {project.liveLink ?  <a href={[project.liveLink]} target='_blank'>
                <button type="submit" class="view-btn modal-view-btn source-container new-tab-btn">
                    <span>Live Demo</span>
                        <span className='github-logo'> <OpenInNewIcon /> </span>
                </button>
            </a> : null}
            </div>
            {/* <ModalCard project={project}/> */}
        </div>
    </div>
  )
}

export default ProjectCard