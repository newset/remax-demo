import React, { Component } from 'react';
import { View, Input, navigateBack } from 'remax';
import AddButton from '@/components/AddButton';

import './index.css';

export default class Todo extends Component {

  state = {
    text: ""
  }

  handleAdd = () => {
    let item = [
      {
        id: Date.now(),
        text,
        compeleted: false
      }
    ];
    navigateBack();
  };
  render() {
    return (
      <View className="page-add-todo">
        <View className="add-todo">
          <Input
            className="add-todo-input"
            placeholder="What needs to be done?"
            onInput={e => setText(e.detail.value)}
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
