import React, { Fragment, useState, useEffect } from 'react';


const ListTodos = () => {

    const [todos, setTodos] = useState([]);

    const deleteTodo = async (id) => {
        try {
            const deleteTodo = await fetch(`http://localhost:5000/todos/${id}`, {
                method: 'DELETE',
            });

            console.log(deleteTodo);
        } catch (err) {
            console.error(err);
        }
    }

    const getTodos = async () => {
        try {
            const response =  await fetch("http://localhost:5000/todos")
            const jsonData = await response.json();

            setTodos(jsonData);
        } catch (err) {
            console.error(err);
            
        }
    };

    useEffect(() => { 
        getTodos();
    }, []);

    console.log(todos);
    return ( <Fragment>
        <table>
        <thead>
  <tr>
    <th>Firstname</th>
    <th>Lastname</th> 
    <th>Age</th>
  </tr>
  </thead>
  <tbody>
  {todos.map(todo =>(
      <tr key={todo.todo_id}>
          <td>{todo.description}</td>
          <td>Edit</td>
          <td><button onClick={() => deleteTodo(todo.todo_id)}>Delete</button></td>
      </tr>
  ))}
  </tbody>
</table>
    </Fragment>
    )};

export default ListTodos;