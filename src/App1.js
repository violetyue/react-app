import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { mainRoutes } from './router/routes'
import './shenbei.css';
import Frame from './frame/index'


class App1 extends Component {
  

  render() { 
    return (
      <div>
        <Frame>
        <div className='App1'>
          <Switch>
          {
            mainRoutes.map(route=>{
              return <
                Route 
                key={route.path} 
                path={route.path} 
                render={routeProps=>{
                  return <route.component {...routeProps} />
                }} 
              />
            })
          }
          </Switch>
        </div>
      </Frame>
      
      </div>
      
    )
    ;
  }
}
 
export default App1;


