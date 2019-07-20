import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Mine from '../pages/Mine';
import TestChart from '../pages/TestChart';
import ReactTest from '../pages/ReactTest';
export default () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/my" component={Mine} />
      <Route path="/chart" component={TestChart} />
      <Route path="/i" component={ReactTest} />
    </Switch>
  </Router>
);
