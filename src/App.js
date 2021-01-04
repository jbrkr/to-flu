import React, {Fragment} from 'react';
import './styling/App.css';

import InputTodo from './components/InputTodo';
import ListTodos from './components/ListTodo';
import FilterList from './components/FilterList';

function App() {
  return (
    <Fragment>
    <div className="App">
      <header className="App-header">
        <h1>
          3W
        </h1>
      </header>
      <div className="grid-container">
      <div className="grid-item">
      <InputTodo/>
      <FilterList/>
      </div>
      <div className="grid-item">
      <ListTodos/>
      </div>
      </div>
      
    </div>
    
    </Fragment>
  );
}

export default App;
