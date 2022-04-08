//import './App.css';
import React from "react";
import { TodoCounter } from "../components/TodoCounter";
import { TodoSearch } from "../components/TodoSearch";
import { CreateTodoButon } from "../components/CreateTodoButton";
import { TodoList } from "../components/TodoList";
import { TodoItem } from "../components/TodoItem";
import {useLocalStorage} from '../hooks/useLocalStorage';

// const defaultTodos = [
//   {
//     text: "Cortar ola cebolla",
//     completed: false,
//   },
//   {
//     text: "hacer tarea",
//     completed: true,
//   },
//   {
//     text: "decir F en el chat",
//     completed: false,
//   },
// ];



function App(props) {
  const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);
  
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }


  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
    // todos[todoIndex]= {
    //   text:  todos[todoIndex].text,
    //   completed:true,
    // };
  };
  const deleteTodo = (text) => {
    const newTodos = todos.filter(todo => todo.text !== text);
    saveTodos(newTodos);
  }

  return (
    <React.Fragment>
      <TodoCounter
        total={totalTodos}
        completedNow={completedTodos}
      />
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <TodoList>
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      <CreateTodoButon />
    </React.Fragment>
  );
}

export default App;
