import './shenbei.css';
import React, { Component } from 'react';
import {  Menu } from 'antd';
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom';

const { SubMenu } = Menu;

class person extends Component {
  
    render() { 
      return (
        <div className='container'>
            <div className='middle'>
                <h1>人员管理</h1>
            </div>
            <div className='left'>
              <Menu theme='dark'>
                <Menu.Item key='m1'>
                  <Link to="/pages/home">Home</Link>
                </Menu.Item>
                <Menu.Item key='m2'>
                  Option 2
                </Menu.Item>
                <SubMenu key='subm1' title='Manage'>
                  <Menu.Item key='m3'>
                    <Link to="/pages/person">Person</Link>
                  </Menu.Item>
                  <Menu.Item key='m4'>
                    <Link to="/pages/order">Order</Link>
                  </Menu.Item>
                  <Menu.Item key='m5'>
                    <Link to="/pages/device">Device</Link>
                  </Menu.Item>
                </SubMenu>
              </Menu>
            </div>
            <div className='right'></div>
        </div>
      );
    }
}
   
export default person;
  
