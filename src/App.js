import React from 'react';
import {TodoCount} from './TodoCounter.js';
import { TodoSearch } from './TodoSearch.js';
import {CreateTodoButton} from './CreateTodoButton.js';
import { TodoList } from './TodoList.js';
import {TodoItem} from './TodoItem.js';
//import './App.css';

const todos = [
  {text: 'Cortar cebolla', completed: true},
  {text: 'Cortar tomate', completed: false},
  {text: 'Cortar lechuga', completed: false},
];

function App() {
  return (
      <React.Fragment>

      <TodoCount/>
      <TodoSearch/> 

      <TodoList>
        {todos.map(todo =>(
          <TodoItem 
          key ={todo.text} 
          text={todo.text}
          completed={todo.completed} 
          />
        ))}
      </TodoList>


      <CreateTodoButton/> 

      </React.Fragment>
  );
}

export default App;
