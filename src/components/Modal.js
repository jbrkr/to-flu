import React, { Fragment, useState, setShow } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';
import '../styling/component.css';


const Edit = ({ todo }) => {
    const [description, setDescription] = useState(todo.description);
    const [recipient, setRecipient] = useState(todo.recipient);
    const [due_date, setDueDate] = useState(todo.due_date);
    const [show, setShow] = useState(false);
  
    const handleClose = async e => {
        try {
            {/*const body = { description };*/}
            const response = await fetch(
              `http://localhost:5000/todos/${todo.todo_id}`,
              {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    description,
                    due_date,
                    recipient
                  })
              }
            );
            setShow(false);
            const data = await response.json();
            console.log(data);
      
            window.location = "/";
          } catch (err) {
            console.error(err.message);
          }
        };
        
        
        
    const handleShow = () => setShow(true);
  
    return (
      <Fragment>
        <button className={"buttonX"} onClick={handleShow}>
          //
        </button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header className={"editorModal"}>
            <Modal.Title>Edit your todo</Modal.Title>
          </Modal.Header>
          <Modal.Body className={"editorModal"} >
          <input
                type="text"
                className="form-control"
                name="description"
                id="description"
                value={description}
                onChange={e => setDescription(e.target.value)}
              />
            <input
                type="date"
                className="form-control"
                name="due_date"
                id="due_date"
                value={due_date}
                onChange={e => setDueDate(e.target.value)}
              />
              <select
                className="form-control"
                name="recipient"
                id="recipient"
                value={recipient}
                onChange={e => setRecipient(e.target.value)}
                placeholder="For Whom  ">
                  <option value="Joe">Joe</option>
                  <option value="Gavin">Gavin</option>
                  <option value="Olga">Olga</option>
                  <option value="Yaniv">Yaniv</option>
                  <option value="Ara">Ara</option>
              </select>
              </Modal.Body>
          <Modal.Footer className={"editorModal"} >
            <Button className={"buttonX"} onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Fragment>
    );
  }
  
export default Edit;