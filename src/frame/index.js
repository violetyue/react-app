import React from 'react'
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css';

const { SubMenu } = Menu;

function index(props) {
    return (
        <div className='container'>
          <div className='middle'>
            {props.children}
          </div>
          <div className='left'>
            <Menu theme='dark'>
              <Menu.Item key='m1'>
                <Link to="/pages/home">Home</Link>
              </Menu.Item>
              <Menu.Item key='m2'>Option 2</Menu.Item>
                <SubMenu key='subm1' title='Manage'>
                  <Menu.Item key='m3'><Link to="/pages/person">Person</Link></Menu.Item>
                  <Menu.Item key='m4'><Link to="/pages/order">Order</Link></Menu.Item>
                  <Menu.Item key='m5'><Link to="/pages/device">Device</Link></Menu.Item>
                </SubMenu>
              </Menu>
          </div>
          <div className='right'></div>
        </div>
    )
}

export default index
