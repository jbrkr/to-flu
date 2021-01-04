import React, {Fragment} from 'react';
import '../styling/App.css';

import Header from '../components/Header'
import InputResearch from '../components/InputResearch';

function Research() {
  return (
    <Fragment>
    <div className="App">
      <Header/>
      <div className="grid-container">
      <div className="grid-item">
      <InputResearch/>
      
      </div>
      <div className="grid-item">
      
      </div>
      </div>
    </div>
    </Fragment>
  );
}

export default Research;