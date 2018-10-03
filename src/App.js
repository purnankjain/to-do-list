import React, { Component } from 'react';
import NewItem from './NewItem';
import List from './List';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.addItemCallback = this.addItemCallback.bind(this)
    this.completeItemCallback = this.completeItemCallback.bind(this)
    this.deleteItemCallback = this.deleteItemCallback.bind(this)
    this.state = {
      tasks: []
    }
  }
  addItemCallback(taskName) {
    this.setState({
      tasks: [...this.state.tasks, { name: taskName, completed: false }]
    })
  }
  completeItemCallback(taskName) {
    let index = this.state.tasks.findIndex((task) => { return task.name === taskName });
    let updatedTasks = [...this.state.tasks.slice(0, index), { name: taskName, completed: true }, ...this.state.tasks.slice(index + 1)]
    this.setState({
      tasks: updatedTasks
    })
  }
  deleteItemCallback(taskName) {
    let index = this.state.tasks.findIndex((task) => { return task.name === taskName });
    let updatedTasks = [...this.state.tasks.slice(0, index), ...this.state.tasks.slice(index + 1)]
    this.setState({
      tasks: updatedTasks
    })
  }
  render() {
    return (
      <div className="App">
        <NewItem addItemCallback={this.addItemCallback} />
        <List items={this.state.tasks} deleteItemCallback={this.deleteItemCallback} completeItemCallback={this.completeItemCallback} />
      </div>
    );
  }
}

export default App;
