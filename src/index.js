import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import './index.css';
import App1 from './App1';
import reportWebVitals from './reportWebVitals';
import { loginRoutes } from './router/routes';




ReactDOM.render(
  <Router>
    <Switch>
      <Route path='/pages' render={routeProps=><App1 {...routeProps} />}/>
      {loginRoutes.map(route => {
        return <Route key={route.path} {...route} />
      })}
    </Switch>
    <Redirect to='/loginpage/login' from='/' />
  </Router>,
  document.getElementById('root')
);


reportWebVitals();
