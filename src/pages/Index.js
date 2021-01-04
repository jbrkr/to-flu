import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Index = () => (
  <Fragment>
    <article id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/">About this site</Link></h2>
          <p>
            A beautiful, responsive, statically-generated,
            react application written with modern Javascript.
          </p>
        </div>
      </header>
      <p> Welcome to 3W, which is built for both {' '}
        <Link to="/research">research tracking</Link>{' '} and {' '}
        <Link to="/pm">project management</Link> {' '}
      </p>
      <p> Source available <a href="https://github.com/jbrkr/to-flu">here</a>.</p>
    </article>
  </Fragment>
);

export default Index;