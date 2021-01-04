import React, {Fragment} from 'react';
import '../styling/App.css';

import Header from '../components/Header'

import InputTodo from '../components/InputTodo';
import TableTodo from '../components/TableTodo';
import FilterTodo from '../components/FilterTodo';

function ProjectMgmt() {
  return (
    <div className="App">
      <Header/>
      <div className="grid-container">
      <div className="grid-item">
      <InputTodo/>
      <TableTodo/>
      </div>
      <div className="grid-item">
      <FilterTodo/>
      </div>
      </div>
    </div>
  );
}

export default ProjectMgmt;
