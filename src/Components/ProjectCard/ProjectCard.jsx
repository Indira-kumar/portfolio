import React, {useState} from 'react'
import "./projectCard.css";
import Modal from 'react-modal';
import "./modal.css";

const ProjectCard = ({project}) => {
    const [showModal, setShowModal] = useState(false);
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
            <div className="btn-container">
                {/* <button type="submit" className="view-btn" id={project.id} >See Project</button> */}
                <button type="submit" className="view-btn" onClick={()=> setShowModal(true)} id={project.id} >See Project</button>
            </div>
             <Modal isOpen={showModal}
            onRequestClose={()=> setShowModal(false)}
            contentLabel='projecl modal'
            >
                <div class="modal-header" id="modal-header">
                    <div class="project-title">
                    <h2 class="modal-title" id="title">{project.title}</h2>
                    </div>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body" id="modal-body">
                    <div class="project-info">
                    <ul class="flex">
                        <li class="client-name" id="clientName">{project.info.client}</li>
                        <li class="counter"></li>
                        <li class="role" id="role">{project.info.role}</li>
                        <li class="counter"></li>
                        <li class="year" id="year">{project.info.year}</li>
                    </ul>
                    </div>
                    <div class="project-img-container modal-img-size">
                    <a href="#" aria-label="Tonic Project">
                        <img src={project.screenshot} alt={project.title} id="project-img" class="project-img" />
                    </a>
                    </div>
                    <div class="project-description-container">
                    <div class="project-description" id="description">
                        <p>{project.description}</p>
                    </div>
                    <div class="footer flex" id="footer">
                        <div class="tags">
                            <ul class="flex" id="technologies">
                            {project.skills.map((skill) => <li>{skill}</li>)}
                            </ul>
                        </div>
                        <div class="btn-container">
                            <button type="submit" class="view-btn modal-view-btn" onclick="location.href = '{project.liveLink}'">
                                <span>See Live</span>
                                <span><i class="bi bi-box-arrow-up-right"></i></span>
                            </button>
                            <button type="submit" class="view-btn modal-view-btn" onclick="location.href = '{project.sourceLink}'">
                                <span>Source</span>
                                <span><i class="bi bi-github"></i></span>
                            </button>
                        </div>
                    </div>
                    </div>

                </div>
            </Modal>
        </div>
    </div>
  )
}

export default ProjectCard