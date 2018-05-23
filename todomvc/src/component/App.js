import React, { Component } from 'react';
import Header from './Header';
import MainSection from './MainSection'

const initialState=[
  {
    text:'React ES6 TodoMVC',
    completed:false,
    id:0
  }
]

class App extends Component {
  state = {
    todos: initialState
  }

  constructor(props){
    super(props)
    this.state={
      todos:initialState,
      gameID:null,
      player:0
    }
  }
  onSave(text){
    const todos=[
      {
        id:this.state.todos.reduce((macId,todo)=>Math.max(todo.id,macId),-1)+1,
        comleted:false,
        text:text
      },
      ...this.state.todos
    ]
    this.setState({
      todos:todos
    })
  }
  render() {
    return (
      <div>
        <Header 
          onSave={this.onSave.bind(this)}
        />
        <MainSection todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
