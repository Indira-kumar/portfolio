import React from 'react';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import Modal from '@mui/material/Modal';
import { Modal, Button, Box, Typography } from '@material-ui/core';
import './projectCard.css';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({project}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  
  return (
    <div>
    {/* <div class="modal-header" id="modal-header">
            <div class="project-title">
               <h2 class="modal-title" id="title">${project.title}</h2>
            </div>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
         </div>
         <div class="modal-body" id="modal-body">
            <div class="project-info">
               <ul class="flex">
                  <li class="client-name" id="clientName">${project.info.client}</li>
                  <li class="counter"></li>
                  <li class="role" id="role">${project.info.role}</li>
                  <li class="counter"></li>
                  <li class="year" id="year">${project.info.year}</li>
               </ul>
            </div>
            <div class="project-img-container modal-img-size">
               <a href="#" aria-label="Tonic Project">
                  <img src="${project.screenshot}" alt="${project.title}" id="project-img" class="project-img" />
               </a>
            </div>
            <div class="project-description-container">
               <div class="project-description" id="description">
                  <p>${project.description}</p>
               </div>
               <div class="footer flex" id="footer">
                  <div class="tags">
                     <ul class="flex" id="technologies">
                     ${project.skills.map((skill) => `<li>${skill}</li>`).join('')}
                     </ul>
                  </div>
                  <div class="btn-container">
                     <button type="submit" class="view-btn modal-view-btn" onclick="location.href = '${project.liveLink}'">
                        <span>See Live</span>
                        <span><i class="bi bi-box-arrow-up-right"></i></span>
                     </button>
                     <button type="submit" class="view-btn modal-view-btn" onclick="location.href = '${project.sourceLink}'">
                        <span>Source</span>
                        <span><i class="bi bi-github"></i></span>
                     </button>
                  </div>
               </div>
            </div>

         </div> */}
      <div className="btn-container">
                {/* <button type="submit" className="view-btn" id={project.id} >See Project</button> */}
                <Button type="submit" className="view-btn" onClick={handleOpen} id={project.id} >See Project</Button>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}