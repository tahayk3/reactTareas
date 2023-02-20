import React from 'react';
import {TodoCounter} from './TodoCounter.js';
import { TodoSearch } from './TodoSearch.js';
import {CreateTodoButton} from './CreateTodoButton.js';
import { TodoList } from './TodoList.js';
import {TodoItem} from './TodoItem.js';
//import './App.css';

const defaultTodos = [
  {text: 'Cortar cebolla', completed: true},
  {text: 'Cortar tomate', completed: false},
  {text: 'Cortar lechuga', completed: false},
  {text: 'Hacer la masa', completed: false},
];

function App() {

  const [todos,setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => todo.completed == true).length;
  const totalTodos = todos.length;

  let searchTodos = [];

  if(!searchValue.length >= 1){
    searchTodos = todos
  }else{
    searchTodos = todos.filter(todo =>{
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    })
  }


  return (
      <React.Fragment>
      <TodoCounter
      completed = {completedTodos}
      total = {totalTodos}
      />
      <TodoSearch
      searchValue={searchValue}
      setSearchValue={setSearchValue} 
      /> 

      <TodoList>
        {searchTodos.map(todo =>(
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
