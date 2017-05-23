import React, { Component } from 'react';
import TodoService from './TodoService';
import Todo from './Todo';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  }

  async componentDidMount() {
    let todos = await TodoService.getAll();
    this.setState({todos: todos});
  }
  
  render() {
    return (
      <div className="todo-app">
        <h2>View all todos</h2>
        <div className="todo-app-list">
          {this.state.todos.map(function(t) {
            return (
              <Todo todo={t} />
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
