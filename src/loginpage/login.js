import React, { Component } from 'react';
import './login.css'
import { Form, Input, Button, Card } from 'antd';
import FormItem from 'antd/lib/form/FormItem';

class login extends Component {
  constructor(props){
    super(props);
    this.state = {
      userName: '',
      passWord: '',
    }
  }

  // componentDidMount() {
  //   const userName = localStorage.userName
  //   if (userName === 'admin') {
  //     this.goToLink()
  //   }
  // }

  usernameCheck(e) {
    this.setState({
      userName: e.target.value,
    })
  }
  passwordCheck(e) {
    this.setState({
      passWord: e.target.value,
    })
  }

  handleSubmit=e=>{
    this.formRef.current.validateFields()
            .then(values => {
                this.formRef.current.resetFields();
                this.goToLink(this);
                
            })
            .catch(info=>{
              console.log('Validate failed:', info);
            })
  }

  goToLink() {
    
    // if(localStorage.userName = 'admin'){
    //   this.props.history.push('/pages/home')
    // } else {
      if (this.state.userName === 'admin' && this.state.passWord === '123123') {
        this.props.history.push('/pages/home')
      } else {
        alert('incorrect username or password!')
      }
    // }
  }

  formRef = React.createRef();

    render() { 
      return (
        <div className='loginarea'>
          <Card title='Login' className='login-form'>
            <Form ref={this.formRef} name='loginform'>
                  <FormItem 
                    name='username'
                    label='Username: '
                    rules={[
                      {
                        required: true,
                        message: 'Username is required!',
                      },
                     ]}
                  >
                  <Input value={this.state.userName} onChange={this.usernameCheck.bind(this)}/>
                  </FormItem>
                  <FormItem
                    name='password'
                    label='Password: '
                    rules={[
                      {
                        required: true,
                        message: 'Password is required!',
                      },
                    ]}
                  >
                  <Input value={this.state.passWord} onChange={this.passwordCheck.bind(this)}/>
                  </FormItem>
                  <FormItem>
                    <Button type='primary' onClick={this.handleSubmit} className='login-button'>Confirm</Button>
                  </FormItem>
                </Form>    
          </Card>
        </div>
      );
    }
}
   
export default login;