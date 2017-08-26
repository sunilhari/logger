import React, {Component} from 'react';
import { Layout } from 'antd';
import LogList from '../LogList/LogList'
const {Content } = Layout;
class AppContent extends Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }
  render() {
    return (
      <Content className="appContent">
        <LogList/>
      </Content>
    );
  }
}

export default AppContent;