import React, {Component} from 'react';
import Main from '../Main/Main';
import AppHeader from '../AppHeader/AppHeader';
import AppContent from '../AppContent/AppContent';
import SideBar from '../SideBar/SideBar';
import {Layout} from 'antd';
const {Header, Footer, Sider, Content} = Layout;
class App extends Component {
  render() {
    return (
      <Layout className="ant-layout-has-sider" style = {{height:'100%'}}>
      <SideBar/>
        <Layout style = {{overflow:'hidden'}}>
        <AppHeader/>
        <AppContent/>
        </Layout>
        </Layout>
    );
  }
}


export default App;