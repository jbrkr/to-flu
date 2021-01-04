import React, { Fragment, useState } from "react";
import '../styling/component.css';
import $ from 'jquery'; 


function resizeInput() {
  $(this).attr('size', $(this).val().length);
}

$('input[type="text"]')
  // event handler
  .keyup(resizeInput)
  // resize on page load
  .each(resizeInput);

const InputTodo = () => {
  const [description, setDescription] = useState("");
  const [recipient, setRecipient] = useState("");
  const [due_date, setDueDate] = useState("");

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {

      const response = await fetch("http://localhost:5000/todos", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          description,
          due_date,
          recipient
        })
      });

      const data = await response.json();
      console.log(data);
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <h1>Todo Entry</h1>
      <form onSubmit={onSubmitForm}>
        I need to finish &nbsp;
        <input
          type="text"
          name="description"
          id="description"
          value={description}
          onChange={e => setDescription(e.target.value)}
          placeholder="What"
          onkeypress="this.style.width = ((this.value.length + 1) * 8) + 'px';"
        />
        by &nbsp;
        <input
          type="date"
          name="due_date"
          id="due_date"
          value={due_date}
          onChange={e => setDueDate(e.target.value)}
          placeholder="When"
        />
        &nbsp; for &nbsp;
        <select
          name="recipient"
          id="recipient"
          value={recipient}
          onChange={e => setRecipient(e.target.value)}
          placeholder="For Whom  ">
          <option value="" disabled="disabled">Whom</option>
          <option value="Joe">Joe</option>
          <option value="Gavin">Gavin</option>
          <option value="Olga">Olga</option>
          <option value="Yaniv">Yaniv</option>
          <option value="Ara">Ara</option>
    </select>
        <button className={"buttonX"}>Add</button>
      </form>
      <br/>
    </Fragment>
  );
};

export default InputTodo;