// @flow
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {TodoForm, TodoList} from './components/todo';

export interface ITodo {
  id: number;
  name: string;
  isComplete: boolean;
}

interface IAppState {
  todos: ITodo[],
  currentTodo: string;
}

class App extends Component {

  state: IAppState;

  constructor() {
    super();

    this.state = {
      todos: [
        { id: 1, name: 'Learn JSX!', isComplete: true },
        { id: 2, name: 'Build an Awesome App', isComplete: false },
        { id: 3, name: 'Ship It', isComplete: false }
      ],
      currentTodo: ''
    };

    (this: any).handleCheckBoxChange = this.handleCheckBoxChange.bind(this);
    (this: any).handleInputChange = this.handleInputChange.bind(this);
  }

  handleCheckBoxChange(e: Event) {
    if (e.target instanceof HTMLInputElement) {

    }
  }

  handleInputChange(e: Event) {
    if (e.target instanceof HTMLInputElement) {
      this.setState({ currentTodo: e.target.value });
    }
  }

  render() {

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Todos</h2>
        </div>
        <div className="Todo-App">
          <TodoForm
            currentTodo={this.state.currentTodo}
            handleInputChange={this.handleInputChange} />
          <TodoList todosElements={this.state.todos} />
        </div>
      </div>
    );
  }
}

export default App;
