/**
  @todo 接入 DVA
*/
import React, { Component } from 'react';
// import dva from './dva';
import { Provider } from 'react-redux';

import './app.css';

class App extends Component {
  todos = [
    { id: 1, text: 'Learning Javascript', completed: true },
    { id: 2, text: 'Learning ES2016', completed: true },
    { id: 3, text: 'Learning Remax', completed: false },
  ];

  render() {
    return this.props.children;
    // return <Provider store={dva._store}>{this.props.children}</Provider>;
  }
}

export default App;
