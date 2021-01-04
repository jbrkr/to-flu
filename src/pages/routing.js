import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import '../styling/component.css';
import '../styling/App.css';

const { PUBLIC_URL } = process.env;

// Every route - we lazy load so that each page can be chunked
// NOTE that some of these chunks are very small. We should optimize
// which pages are lazy loaded in the future.
const ProjectMgmt = lazy(() => import('./pm'));
const Research = lazy(() => import('./research'));
const Index = lazy(() => import('./Index'));

const Appr = () => (
  <BrowserRouter basename={PUBLIC_URL}>
  <Suspense fallback={<h1>Loading profile...</h1>}>
      <Switch>
        <Route exact path="/" component={Index} />
        <Route path="/pm" component={ProjectMgmt} />
        <Route path="/research" component={Research} />
      </Switch>
      </Suspense>
  </BrowserRouter>
);

export default Appr;