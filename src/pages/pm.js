import React, {Fragment} from 'react';
import '../styling/App.css';

import Header from '../components/Header'

import InputTodo from '../components/InputTodo';
import ListTodos from '../components/ListTodo';
import FilterList from '../components/FilterList';

function ProjectMgmt() {
  return (
    <Fragment>
    <div className="App">
      <Header/>
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

export default ProjectMgmt;
