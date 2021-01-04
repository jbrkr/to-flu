import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';
import '../styling/App.css';

const Header = () => {
  return (
    <Fragment>
      <header className="App-header">
      <div className="grid-item"><Link to="/"><h1>3W</h1></Link></div>
      <div className="grid-item">
      <Link to="/research">Research Tracking</Link><br/>
      <Link to="/pm">Project Management</Link>
      </div>
      </header>
    
    </Fragment>
  );
}

export default Header;