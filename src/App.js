import React, {Fragment} from 'react';
import './styling/App.css';

import InputTodo from './components/InputTodo';
import ListTodos from './components/ListTodo';

function App() {
  return (
    <Fragment>
    <div className="App">
      <header className="App-header">
        <p>
          5w
        </p>
      </header>
      <div className="container">
      <div className="td-entry">
        <h2>To-Do</h2>
        
      </div>

      <InputTodo/>
      <ListTodos/>


    </div>
    </div>
    </Fragment>
  );
}

export default App;
