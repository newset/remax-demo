/**
  @todo 接入 DVA
*/
import React, { Component } from 'react';
import dvaApp from './dva';
import './app.css';

class App extends Component {
  render() {
    return this.props.children;
  }
}

export default dvaApp.start(App);
