import React from 'react';
import { AppUI } from './AppUI';


function useLocalStorage(itemName,initialValue){
  const localStorageItem = localStorage.getItem(itemName);
  let parsedItem;
  
  if(!localStorageItem){
    localStorage.setItem(itemName,JSON.stringify(initialValue));
    parsedItem = initialValue;
  }else{
  parsedItem = JSON.parse(localStorageItem);
  }

  const [item,setItem] = React.useState(parsedItem);

  const saveItem = (newItem) =>{
    const stringfiedTodos = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringfiedTodos);
    setItem(newItem);
  };

  return [
    item,
    saveItem,
  ];
}

function App() {
  const [todos, saveItem] = useLocalStorage('TODOS_V1',[]);

  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => todo.completed === true).length;
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

  const completeTodo = (text)=> {
    const todoIntex = todos.findIndex(todo => todo.text === text);
    const newItem =  [...todos];
    newItem[todoIntex].completed = true;
    saveItem(newItem);
  }

  const deleteTodo = (text)=> {
    const todoIntex = todos.findIndex(todo => todo.text === text);
    const newItem =  [...todos];
    newItem.splice(todoIntex,1);
    saveItem(newItem);
  }


  return (
     <AppUI
     totalTodos = {totalTodos}
     completedTodos = {completedTodos}
     searchValue = {searchValue}
     setSearchValue = {setSearchValue}
     searchTodos = {searchTodos}
     completeTodo = {completeTodo}
     deleteTodo = {deleteTodo}
     />
  );
}

export default App;
