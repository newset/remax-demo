import React, { Component, useState } from 'react';
import { View, Input, navigateBack } from 'remax/wechat';
import AddButton from '@/components/AddButton';

import './index.css';

const app = getApp();
export default class Todo extends Component {

  state = {
    text: ""
  }

  handleAdd = () => {
    app.todos = app.todos.concat([
      {
        id: Date.now(),
        text: this.state.text,
        compeleted: false
      }
    ]);
    navigateBack();
  };

  handleInput = e=>{
    this.setState({
      text: e.detail.value
    })
  }
  render() {
    return (
      <View className="page-add-todo">
        <View className="add-todo">
          <Input
            className="add-todo-input"
            placeholder="What needs to be done?"
            onInput={this.handleInput}
            value={this.state.text}
          />
        </View>

        <View className="todo-footer">
          <AddButton text="Add Todo" onClick={this.handleAdd} />
        </View>
      </View>
    );
  }
};
