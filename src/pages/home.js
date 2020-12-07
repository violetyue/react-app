import './shenbei.css';
import React, { Component } from 'react';
import { Input, DatePicker, Button, Table, Select, Modal, Form } from 'antd';
import 'antd/dist/antd.css';
import '../mock/index'
import Mock from 'mockjs';
import { formatCountdown } from 'antd/lib/statistic/utils';
import FormItem from 'antd/lib/form/FormItem';
const Random = Mock.Random;

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
        render: (text,record,index) => <a data-index={index} onClick={this.deleteItem.bind(this,text,record,index)}>Delete</a>
      }],
      inputTitle: '',
      inputPrice: '',
      data: [],
      modalAddInfoVisible: false,
    }
  }

  openModalAddInfo = (type)=>{
    this.setState({modalAddInfoVisible: true})
  }

  componentDidMount() {
    //页面加载时就调用查询
    this.showData()
  }


  showData = () => {
    const list = localStorage.list;
    if (list) {
      //判断是否存在list，localStorage
      const data = JSON.parse(localStorage.list);
      this.setState({data})
    }
  }

  saveItem = () => {
    const {data} = this.state;
    //localStorage中的值是按照字符保存的，所以每次需要用JSON.stringify及JSON.parse转换
    localStorage.list = JSON.stringify(data);
  }

  addItem = () => {
    // const data = JSON.parse(localStorage.list)
    //因为state中的数据和localStorage的数据是一致的这里，我们就偷懒使用state中的data
    const {data} = this.state;
    let arr = data.slice(0)
    //使用makeNewItem来生成新的数据
    let newItem = this.makeNewItem()
    arr.push(newItem)
    this.setState({data:arr}, ()=>{this.saveItem()})
  }

  makeNewItem = () => {
    const { data } = this.state;
    //生成唯一的key
    let lastKey = 1;
    if (data.length){
      lastKey = data[data.length - 1].key
    }
    let newItem = {}
    newItem.key = lastKey + 1;
    newItem.title = this.state.inputTitle
    newItem.price = this.state.inputPrice
    return newItem
  }
  deleteItem = (text, record, index) => {
    //这里是配置项中我们传入的参数，其中index我们就直接可以在splice中使用
    console.log(text, record, index)
    // const data = JSON.parse(localStorage.list)
    //因为state中的数据和localStorage的数据是一致的这里，我们就偷懒使用state中的data
    const {data} = this.state;
    let arr = data.slice(0)
    arr.splice(index,1)
    //数组slice和splice语法再掌握一下
    this.setState({data:arr}, ()=>{this.saveItem()})
  }

  titleInput(e) {
    this.setState({
      inputTitle: e.target.value,
    })
  }
  priceInput(e) {
    this.setState({
      inputPrice: e.target.value,
    })
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
            <div className='addarea'>
              <Button
                onClick={()=>this.openModalAddInfo("modalAddInfo")}
              >
              Input here
              </Button>
              <Modal 
                visible={this.state.modalAddInfoVisible} 
                title="Input item" 
                cancelText="Cancel" 
                onCancel={()=>{this.setState({modalAddInfoVisible: false})}}
                okText="Input" 
                onOk={()=>{
                    this.addItem.bind(this);
                    this.setState({modalAddInfoVisible: false});
                }}
              >
                <Form>
                  <FormItem 
                    name='titlearea'
                    label='Title: '
                    rules={[
                      {
                        required: true,
                        message: 'Title is required!',
                      },
                     ]}
                  >
                  <Input value={this.state.inputTitle} onChange={this.titleInput.bind(this)}/>
                  </FormItem>
                  <FormItem
                    name='pricearea'
                    label='Price: '
                    rules={[
                      {
                        required: true,
                        message: 'Price is required!',
                      },
                    ]}
                  >
                  <Input value={this.state.inputPrice} onChange={this.priceInput.bind(this)}/>
                  </FormItem>
                </Form>    
              </Modal>
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