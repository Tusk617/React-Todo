import React from 'react';

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

  addItem = itemName => {
    this.setState=({todoList: tasks})
  }
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <h3>Here are your current tasks...<hr/></h3>
        <TodoList 
          tasks={this.state.todoList}
          toggleItem={this.toggleItem}
        />
        <ListForm />
      </div>
    );
  }
}

export default App;
