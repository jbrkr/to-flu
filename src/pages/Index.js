import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import '../styling/App.css';

import Header from '../components/Header'

const Index = () => (
  <Fragment>
  <div className="App">
    <Header/>
    <article id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/">About this site</Link></h2>
        </div>
      </header>
      <p> Welcome to 3W, which is built for both {' '}
        <Link to="/research">research tracking</Link>{' '} and {' '}
        <Link to="/pm">project management</Link> {' '}
      </p>
      <p> Source available <a href="https://github.com/jbrkr/to-flu">here</a>.</p>
    </article>
    </div>
  </Fragment>
);

export default Index;
