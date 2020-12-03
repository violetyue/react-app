import './shenbei.css';
import React, { Component } from 'react';
import { Input, DatePicker, Button, Table, Select } from 'antd';
import 'antd/dist/antd.css';
import '../mock/index'

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
      }, {
        title: 'Action',
        dataIndex: 'delete',
        key: 'delete',
        render: (text,record,index) => <div data-index={index} onClick={this.deleteItem.bind(this,text,record,index)}>Delete</div>
      }],
      data: [],
      list: [
        {"key":"1","title":"第二件半价！日系爆款5双装纯棉中筒袜","price":18.9},
        {"key":"2","title":"【啄木鸟】加绒加厚针织衫毛衣","price":59},
        {"key":"3","title":"爆款！滋色联名大英博物馆埃及限量款蜜粉饼","price":49.9},
        {"key":"4","title":"冬季爆款！新款加厚羊羔毛羽绒棉服女","price":69},
        {"key":"5","title":"【拍3件】156颗立白洗衣凝珠","price":94},
        {"key":"6","title":"【李子柒】桂花坚果藕粉羹350g","price":49.7}
      ]
    }
  }

  
  showData = () => {
    
    const data = JSON.parse(localStorage.list);
    console.log(localStorage.list)
    this.setState({data})
  }

  saveItem = () => {
    const {data} = this.state;
    localStorage.list = JSON.stringify(data);
  }

  addItem = () => {
    const data = JSON.parse(localStorage.list)
    let arr = data.slice(0)
    let newItem = {"key":"10","title":"this is the new item","price":40}
    arr.push(newItem)
    this.setState({data:arr}, ()=>{this.saveItem()})
  }

  deleteItem = () => {
    const data = JSON.parse(localStorage.list)
    let arr = data.slice(0)
    arr.splice(('data-index'),1)
    this.setState({data:arr}, ()=>{this.saveItem()})
  }

  render() { 
    let data = this.state.data
    let columns = this.state.columns
    return (
      <div>
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
              <Button onClick={this.addItem.bind(this)}>Add</Button>
              <Button onClick={this.showData.bind(this)}>Show</Button>
              {
                <Table columns={columns} dataSource={data} />
              }
              
            </div>
            
      </div>
    );
  }
}
 
export default home;