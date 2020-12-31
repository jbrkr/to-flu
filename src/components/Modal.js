import React, { Fragment, useState, setShow } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';



const Edit = ({ todo }) => {
    const [description, setDescription] = useState(todo.description);
    const [show, setShow] = useState(false);
  
    const handleClose = async e => {
        e.preventDefault();
        try {
            const body = { description };
            const response = await fetch(
              `http://localhost:5000/todos/${todo.todo_id}`,
              {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
              }
            );
            setShow(false);
      
            window.location = "/";
          } catch (err) {
            console.error(err.message);
          }
        };
        
        
        
    const handleShow = () => setShow(true);
  
    return (
      <Fragment>
        <Button variant="primary" onClick={handleShow}>
          Edit
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header>
            <Modal.Title>Edit your todo</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <input
                type="text"
                className="form-control"
                value={description}
                onChange={e => setDescription(e.target.value)}
              />
              </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Fragment>
    );
  }
  
export default Edit;