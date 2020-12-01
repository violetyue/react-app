import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import './index.css';
import App1 from './App1';
import reportWebVitals from './reportWebVitals';




ReactDOM.render(
  <Router>
    <Switch>
      <Route path='/pages' render={routeProps=><App1 {...routeProps} />}/>
    </Switch>
  </Router>,
  document.getElementById('root')
);


reportWebVitals();
