import React, {Fragment} from 'react';
import './styling/App.css';

import InputTodo from './components/InputTodo';
import ListTodos from './components/ListTodo';
import Example from './components/Modal';

function App() {
  return (
    <Fragment>
    <div className="App">
      <header className="App-header">
        <p>
          3W
        </p>
      </header>
      <div>
      <div>
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
