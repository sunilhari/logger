import React, {Component} from 'react';
import Main from '../Main/Main';
import Header from '../Header/Header';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Main/>
      </div>
    );
  }
}

export default App;