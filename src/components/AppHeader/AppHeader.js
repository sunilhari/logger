import React, {Component} from 'react';
import {Layout,Avatar} from 'antd';
import './Header.css';
const {Header} = Layout;
class AppHeader extends Component {
  constructor(props){
    super(props)
    this.state = {
     
    }
  }
  render() {
    return (
      <Header className="headerContainer" style={{ position: 'fixed',height:'60px',zIndex:1000}}>
      </Header>
    );
  }
}

export default AppHeader;