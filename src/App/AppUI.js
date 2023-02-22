import React from "react";
import {TodoCounter} from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import {CreateTodoButton} from '../CreateTodoButton';
import { TodoList } from '../TodoList';
import {TodoItem} from '../TodoItem';

function AppUI({
    totalTodos, 
    completedTodos, 
    searchValue, 
    setSearchValue, 
    searchTodos, 
    completeTodo, 
    deleteTodo,
}){
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
            onComplete={() => completeTodo(todo.text)}
            onDelete = {() => deleteTodo(todo.text)}
            />
          ))}
        </TodoList>
  
        <CreateTodoButton/> 
  
        </React.Fragment>
    );
}

export {AppUI};