import React, { Fragment, useState } from "react";

const InputTodo = () => {
  const [description, setDescription] = useState("");
  const [recipient, setRecipient] = useState("");
  const [due_date, setDueDate] = useState("");

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
    {/*const body = { description };*/}
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
        <input
          type="text"
          name="description"
          id="description"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <input
          type="date"
          name="due_date"
          id="due_date"
          value={due_date}
          onChange={e => setDueDate(e.target.value)}
        />
        <input
          type="text"
          name="recipient"
          id="recipient"
          value={recipient}
          onChange={e => setRecipient(e.target.value)}
        />
        <button>Add</button>
      </form>
    </Fragment>
  );
};

export default InputTodo;