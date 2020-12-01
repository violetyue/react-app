import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { mainRoutes } from './router/routes'


class App1 extends Component {
  
  render() { 
    return (
      <div className='App1'>
        <Switch>
        {
          mainRoutes.map(route=>{
            return <
              Route key={route.path} 
              path={route.path} 
              render={routeProps=>{
                return <route.component {...routeProps} />
              }} 
            />
          })
        }
        </Switch>
      </div>
    );
  }
}
 
export default App1;


