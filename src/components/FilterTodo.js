import React, { Fragment, useEffect, useState } from "react";
import '../styling/component.css';

const FilterTodo = () => {
    const [recipient, setRecipient] = useState("Ara");
    const [todos, setTodos] = useState([]);

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
        
        <div className="search" class="search">
        <select
          name="recipient"
          id="recipient"
          value={recipient}
          onChange={e => setRecipient(e.target.value)}>
          <option value="Ara">Ara</option>
          <option value="Joe">Joe</option>
          <option value="Gavin">Gavin</option>
          <option value="Olga">Olga</option>
          <option value="Yaniv">Yaniv</option>
          
    </select>
    <hr/>
        <div>
      {todos.filter(todo => todo.recipient == recipient).map(filteredTodo => (
        <li>
          {filteredTodo.description}
        </li>
      ))}
    </div>
    </div>
    
        )

};


export default FilterTodo;