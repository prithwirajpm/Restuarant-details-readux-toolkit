import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function OperatingHours({ restuarant }) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="dark" onClick={handleShow}>
          Operating Hours
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Operating Hours</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h6>Monday: {restuarant?.operating_hours?.Monday || 'Not available'}</h6>
            <h6>Tuesday: {restuarant?.operating_hours?.Tuesday || 'Not available'}</h6>
            <h6>Wednesday: {restuarant?.operating_hours?.Wednesday || 'Not available'}</h6>
            <h6>Thursday: {restuarant?.operating_hours?.Thursday || 'Not available'}</h6>
            <h6>Friday: {restuarant?.operating_hours?.Friday || 'Not available'}</h6>
            <h6>Saturday: {restuarant?.operating_hours?.Saturday || 'Not available'}</h6>
            <h6>Sunday: {restuarant?.operating_hours?.Sunday || 'Not available'}</h6>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="dark" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  

export default OperatingHours
