import React, { Fragment, useState } from "react";

const InputTodo = () => {
  const [description, setDescription] = useState("");

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { description };
      const response = await fetch("http://localhost:5000/todos", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(body)
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
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <button>Add</button>
      </form>
    </Fragment>
  );
};

export default InputTodo;