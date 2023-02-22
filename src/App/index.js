import React from 'react';
import { AppUI } from './AppUI';


function useLocalStorage(itemName,initialValue){

  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [item, setItem] = React.useState(initialValue);

  React.useEffect(()=>{
    setTimeout(()=> {
      try{
        const localStorageItem = localStorage.getItem(itemName);
      let parsedItem;
      
      if(!localStorageItem){
        localStorage.setItem(itemName,JSON.stringify(initialValue));
        parsedItem = initialValue;
      }else{
      parsedItem = JSON.parse(localStorageItem);
      }
      setItem(parsedItem);
      setLoading(false);
      } catch (error){
          setError(error);
      }
     finally {
      setLoading(false);
     }
    }, 1000);
  });
  
  const saveItem = (newItem) =>{
    try{
      const stringfiedTodos = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringfiedTodos);
      setItem(newItem);
    }catch(error){
      setError(error);
    }
  };

  return {
    item,
    saveItem,
    loading,
    error,
  };
}

function App() {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  }= useLocalStorage('TODOS_V1',[]);

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
    const newTodos =  [...todos];
    newTodos[todoIntex].completed = true;
    saveTodos(newTodos);
  }

  const deleteTodo = (text)=> {
    const todoIntex = todos.findIndex(todo => todo.text === text);
    const newTodos =  [...todos];
    newTodos.splice(todoIntex,1);
    saveTodos(newTodos);
  }

  return (
     <AppUI
     loading = {loading}
     error = {error}
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
