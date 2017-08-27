import React, {Component} from 'react';
import { Layout } from 'antd';
import LogList from '../LogList/LogList';
import NewLog from '../NewLog/NewLog';
import Routes from '../Routes/Routes';
import './AppContent.css';
const {Content } = Layout;
class AppContent extends Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }
  render() {
    return (
      <Content className="appContent" style={{marginTop: 80,overflow:'hidden',paddingLeft:'16px',paddingRight:'16px'}}>
        <Routes/>
      </Content>
    );
  }
}

export default AppContent;