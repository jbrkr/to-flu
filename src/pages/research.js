import React, {Fragment} from 'react';
import '../styling/App.css';

import Header from '../components/Header'

import InputResearch from '../components/InputResearch';
import FilterResearch from '../components/FilterResearch';
import TableResearch from '../components/TableResearch';
function Research() {
  return (
    <Fragment>
    <div className="App">
      <Header/>
      <div className="grid-container">
      <div className="grid-item">
      <InputResearch/>
      <TableResearch/>
      </div>
      <div className="grid-item">
      <FilterResearch/>
      </div>
      </div>
    </div>
    </Fragment>
  );
}

export default Research;