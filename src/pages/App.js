//import './App.css';
import React from "react";
import { TodoCounter } from "../components/TodoCounter";
import { TodoSearch } from "../components/TodoSearch";
import { CreateTodoButon } from "../components/CreateTodoButton";
import { TodoList } from "../components/TodoList";
import { TodoItem } from "../components/TodoItem";

const todos = [
  {
    text: "Cortar ola cebolla",
    completed: false,
  },
  {
    text: "hacer tarea",
    completed: false,
  },
  {
    text: "decir F en el chat",
    completed: false,
  },
];

function App(props) {
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {todos.map((todo) => (
          <TodoItem key={todo.text} text={todo.text} />
        ))}
      </TodoList>
      <CreateTodoButon />
    </React.Fragment>
  );
}

export default App;
