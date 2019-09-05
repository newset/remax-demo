/**
  @todo 接入 DVA
*/
import React, { Component } from 'react';
import dva from './dva';
import { Provider } from 'react-redux'; // 引入后立即无法执行编译
import './app.css';

class App extends Component {
  render() {
    return <Provider store={dva._store}>{this.props.children}</Provider>;
  }
}

export default App;
