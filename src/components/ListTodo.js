import React, { Fragment, useEffect, useState } from "react";
import '../styling/component.css';

import Edit from './Modal';

const ListTodos = () => {
  const [todos, setTodos] = useState([]);

  const completeTodo = async id => {
    try {
      const completeTodo = await fetch(`http://localhost:5000/todosx/${id}`, {
        method: "PUT"
      });

      setTodos(todos.filter(todo => todo.todo_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  //delete todo function

  const deleteTodo = async id => {
    try {
      const deleteTodo = await fetch(`http://localhost:5000/todos/${id}`, {
        method: "DELETE"
      });

      setTodos(todos.filter(todo => todo.todo_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  const getTodos = async () => {
    try {
      const response = await fetch("http://localhost:5000/todos");
      const jsonData = await response.json();

      setTodos(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  console.log(todos);

  return (
    <Fragment>
      {" "}
      <div className={"tdlist"}>
      <h2>Todos</h2>
      <table id={"tdl"} className={"tdl"} class="tdl">
      <colgroup>
          <col style={{width:"14%"}}/>
	        <col style={{width:"8%"}}/>
	        <col style={{width:"4%"}}/>
          <col style={{width:"2%"}}/>
	        <col style={{width:"2%"}}/>
          <col style={{width:"2%"}}/>
          </colgroup>
        <thead>
          <tr style={{borderColor: "black"}}>
            <th>What</th>
            <th>When</th>
            <th>For Whom</th>
            <th>Complete</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {/*<tr>
            <td>John</td>
            <td>Doe</td>
            <td>john@example.com</td>
          </tr> */}
          {todos.map(todo => (
            <tr key={todo.todo_id}  style={{borderColor: "black"}}>
              <td>{todo.description}</td>
              <td>{String(todo.due_date).split('T')[0]}</td>
              
              <td>{todo.recipient}</td>
              <td>
                <button
                   className={"buttonX"} 
                  onClick={() => completeTodo(todo.todo_id)}
                >
                  *
                </button>
                </td>
              <td>
                <Edit todo={todo} />
              </td>
              <td>
                <button
                   className={"buttonX"} 
                  onClick={() => deleteTodo(todo.todo_id)}
                >
                  X
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </Fragment>
  );
};

export default ListTodos;