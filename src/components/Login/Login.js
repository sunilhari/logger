import React, {Component} from 'react';
import {Form,Icon,Input,Button,Row,Col} from 'antd';
import './Login.css';
import Loader from '../Loader/Loader';
import { connect } from 'react-redux';

const FormItem = Form.Item;
class Login extends Component {
  constructor() {
    super();
    this.state = {
      loader: {
        isVisible: true,
        message: ""
      }
    }
  }
  handleSubmit = (e)=>{
    e.preventDefault();
    this.props.form.validateFields((err,values)=>{
      if(!err){
        console.log('Form Validated');
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
export default Form.create()(Login);