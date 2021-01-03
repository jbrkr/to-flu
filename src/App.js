import React, {Fragment} from 'react';
import './styling/App.css';

import InputTodo from './components/InputTodo';
import ListTodos from './components/ListTodo';

function App() {
  return (
    <Fragment>
    <div className="App">
      <header className="App-header">
        <h1>
          3W
        </h1>
      </header>
      <div>

      <InputTodo/>
      <ListTodos/>
      
    </div>
    </div>
    </Fragment>
  );
}

export default App;
