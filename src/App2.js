import React, { Component } from 'react';

import './shuangfeiyi.css'

const App = () => (
    <div className="App">
      <Button type="primary">Button</Button>
    </div>
)

class App2 extends Component {
    
    render() { 
        return (
            <div className='container'>
                <div className='center'>
                    <div className='middle'>middle</div>
                </div>
                <div className='left'>left</div>
                <div className='right'>right</div>
            </div>
        );
    }
}
 
export default App2;