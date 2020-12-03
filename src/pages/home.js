import './shenbei.css';
import React, { Component } from 'react';
import { Input, DatePicker, Button, Table, Select, Menu } from 'antd';
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../mock/index'

const { SubMenu } = Menu;

// const { Column } = Table;
// const data = [
//   {
//     key: '1',
//     name: 'Alice',
//     period: '23/11/2020 - 25/11/2020',
//     location: 'Shanghai, China',
//     status: 'Finished',
//   },
//   {
//     key: '2',
//     name: 'Bob',
//     period: '23/11/2020 - 29/11/2020',
//     location: 'Melbourne, Australia',
//     status: 'Processing',
//   },
//   {
//     key: '3',
//     name: 'Jack',
//     period: '1/12/2020 - 6/12/2020',
//     location: 'Canberra, Australia',
//     status: 'Not start',
//   },
// ];

const { Option } = Select;

class home extends Component {
  constructor(props){
    super(props);
    this.state = {
      columns: [{
        title: 'Title',
        dataIndex: 'title',
      }, {
        title: 'Price',
        dataIndex: 'price',
      }],
      data: []
    }
  }

  getData = () => {
    axios.get('http://v.juhe.cn/toutiao/index?type=top&key=d85a6d287c10182f16ceebc6a744e231')
    .then((response)=>{
      this.setState({
        data: response.data
      })
    })
    .catch(error=>{
      console.log(error);
    })
  }
  
  showData = () => {
    axios({
        url:"/infor",
        method:"get"
    }).then((ok)=>{
        this.setState({
          data: ok.data
        })
    })
  }

  render() { 
    let data = this.state.data
    let columns = this.state.columns
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
              <Button onClick={this.showData.bind(this)}>Show</Button>
              {
                <Table columns={columns} dataSource={data} />
              }
            </div>
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
 
export default home;


