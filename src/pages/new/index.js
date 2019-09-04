import React, { Component, useState } from 'react';
import { View, Input, navigateBack } from 'remax/wechat';
import AddButton from '@/components/AddButton';
import { connect } from 'react-redux';
import './index.css';

const app = getApp();

class Todo extends Component {
  state = {
    text: '',
  };

  componentDidMount() {
    console.log('props:', this.props);
  }

  handleAdd = () => {
    app.todos = app.todos.concat([
      {
        id: Date.now(),
        text: this.state.text,
        compeleted: false,
      },
    ]);
    navigateBack();
  };

  handleInput = e => {
    this.setState({
      text: e.detail.value,
    });
  };
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
}

export default connect(() => {})(Todo);
