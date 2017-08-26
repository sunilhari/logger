import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Layout,Avatar} from 'antd';
import './Header.css';
const {Header} = Layout;
class AppHeader extends Component {
  constructor(props){
    super(props)
    this.state = {
      color:'#d70900',
      user:'S',
      size:"large",
      shape:"circle"
    }
  }
  render() {
    return (
      <Header className="headerContainer">
      <div className="avatarContainer">
        <Avatar style={{ backgroundColor: this.state.color }} size={this.state.size} shape={this.state.shape}>{this.state.user}</Avatar>
      </div>
      </Header>
    );
  }
}

export default AppHeader;
/**
 * 
 * <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
        </ul>
 */