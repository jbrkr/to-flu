import React, {Fragment} from 'react';
import '../styling/App.css';

import Header from '../components/Header'

import InputResearch from '../components/InputResearch';
import FilterResList from '../components/ListResearch';
import ListRes from '../components/TableResearch';
function Research() {
  return (
    <Fragment>
    <div className="App">
      <Header/>
      <div className="grid-container">
      <div className="grid-item">
      <InputResearch/>
      <ListRes/>
      </div>
      <div className="grid-item">
      <FilterResList/>
      </div>
      </div>
    </div>
    </Fragment>
  );
}

export default Research;