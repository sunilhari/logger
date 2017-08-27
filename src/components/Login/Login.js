import React, {Component} from 'react';
import {render} from 'react-dom';
import {Form,Icon,Input,Button,Row,Col} from 'antd';
import './Login.css';
import Loader from '../Loader/Loader';
import { connect } from 'react-redux';
import App from '../App/App';
import {Switch, Route} from 'react-router-dom';

const FormItem = Form.Item;
class Login extends Component {
  constructor() {
    super();
    this.state = {
      loader: {
        isVisible: false,
        message: ""
      },
      loginValid:false
    }
  }
  handleSubmit = (e)=>{
    e.preventDefault();
    this.props.form.validateFields((err,values)=>{
      if(!err){
        console.log('Form Validated');
        this.state.loginValid = true;
      }
      else{
        
      }
    });
  }
  render() {
    const {getFieldDecorator} = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: {
          span: 24
        },
        sm: {
          span: 12
        },
        lg: {
          span: 24
        }
      },
      wrapperCol: {
        xs: {
          span: 24
        },
        sm: {
          span: 14
        },
        lg: {
          span: 24
        }
      }
    };
    if(this.state.loginValid){
      return (<App/>);
    }
    else{
    return (
      <div className="LoginRoot">
        <Row>
          <Col>
            <Form onSubmit={this.handleSubmit} className="login-form">
              <FormItem {...formItemLayout}>
                {getFieldDecorator('userName', {
                  rules: [
                    {
                      required: true,
                      message: 'Please enter your username!'
                    }
                  ]
                })(
                  <Input
                    prefix={<Icon type = "user" style = {{ fontSize: 13 }}/>}
                    placeholder="Username"/>
                )}
              </FormItem>
              <FormItem {...formItemLayout}>
                {getFieldDecorator('password', {
                  rules: [
                    {
                      required: true,
                      message: 'Please enter your Password!'
                    }
                  ]
                })(
                  <Input prefix={<Icon type = "lock" style = {{ fontSize: 13 }}/>} type="password" placeholder="Password"/>
                )}
              </FormItem>
              <FormItem {...formItemLayout}>
                <Button type="primary" htmlType="submit" className="login-form-button">
                  Log in
                </Button>
              </FormItem>
            </Form>
          </Col>
        </Row>
        <Loader
          isVisible={this.state.loader.isVisible}
          message={this.state.loader.message}/>
      </div>
    );
  }

  }
}
export default Form.create()(Login);