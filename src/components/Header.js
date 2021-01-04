import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';
import '../styling/App.css';

const Header = () => {
  return (
    <Fragment>
    
      <header className="App-header">
        <h1>
          3W
        </h1>
        <Link to="/research">Research Tracking</Link>
        <Link to="/pm">Project Management</Link>
      </header>
    
    </Fragment>
  );
}

export default Header;