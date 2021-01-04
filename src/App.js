import React, {Fragment} from 'react';
import './styling/App.css';

import Header from './components/Header'

import InputTodo from './components/InputTodo';
import TableTodo from './components/TableTodo';
import FilterTodo from './components/FilterTodo';

function App() {
  return (
    <Fragment>
    <div className="App">
    <Header/>
      <div className="grid-container">
      <div className="grid-item">
      <InputTodo/>
      <FilterTodo/>
      </div>
      <div className="grid-item">
      <TableTodo/>
      </div>
      </div>
      
    </div>
    
    </Fragment>
  );
}

export default App;
