import React from 'react';
import './Todo.css'

//importing componenets
// import Item from "./components/Todo";
import TodoList from "./components/TodoList";
import ListForm from "./components/TodoForm";

const tasks = [
  {
    task: 'complete project',
    id: '1',
    completed: false
  },
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = { todoList: tasks };
  }

  toggleItem = itemId => {
    console.log(itemId);
    this.setState({
      todoList: this.state.todoList.map(item => {
        if (itemId === item.id) {
          return {
            ...item,
            completed: !item.completed
          };
        }
        return item;
      })
    })
  }

  clearCompleted = event => {
    event.preventDefault();
    this.setState({
      todoList: this.state.todoList.filter(tasks => tasks.completed === false)
    })
  }

  addItem = (event, itemName) => {
    event.preventDefault();
    const newTask = {
      task: itemName,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todoList: [...this.state.todoList, newTask]
    })
  };
  render() {
    return (
      <div className="bodyContainer">
        <div className="body">
        <h2>Welcome to your Todo App!</h2>
        <h3>Here are your current tasks...<hr/></h3>
        <TodoList 
          tasks={this.state.todoList}
          toggleItem={this.toggleItem}
          clear={this.clearCompleted}
        />
        <ListForm addItem={this.addItem}/>
        </div>
      </div>
    );
  }
}

export default App;
