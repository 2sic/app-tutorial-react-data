import React, { Component } from 'react';
import TodoService from './TodoService';

class Todo extends Component {
  render() {
    let t = this.props.todo;
    return (
        <div className="todo" key={t.Id}>
            <input disabled type='checkbox' checked={t.Done} />
            <span>{t.Title}</span>
        </div>
    );
  }
}

export default Todo;
