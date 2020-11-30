import './shenbei.css';
import React, { Component } from 'react';
import { Input, DatePicker, Button, Table, Select, Menu } from 'antd';
import 'antd/dist/antd.css';

const { SubMenu } = Menu;

const { Column } = Table;
const data = [
  {
    key: '1',
    name: 'Alice',
    period: '23/11/2020 - 25/11/2020',
    location: 'Shanghai, China',
    status: 'Finished',
  },
  {
    key: '2',
    name: 'Bob',
    period: '23/11/2020 - 29/11/2020',
    location: 'Melbourne, Australia',
    status: 'Processing',
  },
  {
    key: '3',
    name: 'Jack',
    period: '1/12/2020 - 6/12/2020',
    location: 'Canberra, Australia',
    status: 'Not start',
  },
];

const { Option } = Select;

class App1 extends Component {
  
  render() { 
    return (
      <div className='container'>
          <div className='middle'>
            <div className='inputarea'>
              <div className='name'>
                <label htmlFor='name'>Name: </label>
                <Input placeholder="name" style={{ width: '80%' }} />
              </div>
              <div className='period'>
                <label>Period: </label>
                <DatePicker.RangePicker style={{ width: '85%' }} />
              </div>
              <div className='statusarea'>
                <label>Status: </label>
                <Select defaultValue='Not Start'>
                  <Option value='not start'>Not start</Option>
                  <Option value='processing'>Processing</Option>
                  <Option value='finished'>Finished</Option>
                </Select>
              </div>
              <div className='buttonarea'>
                <Button>Submit</Button>
              </div>
            </div>
            <div className='tablearea'>
              <Table dataSource={data}>
                <Column title='Name' dataIndex='name' key='name' />
                <Column title='Period' dataIndex='period' key='period' />
                <Column title='Location' dataIndex='location' key='location' />
                <Column title='Status' dataIndex='status' key='status' />
                <Column title='Action' key='action' render={() => (<a>Delete</a>)} />
              </Table>
            </div>
          </div>
          <div className='left'>
            <Menu theme='dark'>
              <Menu.Item key='m1'>
                Option 1
              </Menu.Item>
              <Menu.Item key='m2'>
                Option 2
              </Menu.Item>
              <SubMenu key='subm1' title='Option 3'>
                <Menu.Item key='m3'>Sub 1</Menu.Item>
                <Menu.Item key='m4'>Sub 2</Menu.Item>
                <Menu.Item key='m5'>Sub 3</Menu.Item>
              </SubMenu>
            </Menu>
          </div>
          <div className='right'></div>
      </div>
    );
  }
}
 
export default App1;


