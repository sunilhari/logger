import React, {Component} from 'react';
import Main from '../Main/Main';
import AppHeader from '../AppHeader/AppHeader';
import AppContent from '../AppContent/AppContent';
import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <AppHeader/>
          <AppContent/>
        </Layout>
      </div>
    );
  }
}

export default App;