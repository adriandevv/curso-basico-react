//import './App.css';
import React from "react";
import { TodoCounter } from "../components/TodoCounter";
import { TodoSearch } from "../components/TodoSearch";
import { CreateTodoButon } from "../components/CreateTodoButton";
import { TodoList } from "../components/TodoList";
import { TodoItem } from "../components/TodoItem";
import { useLocalStorage } from '../hooks/useLocalStorage';
import { TodoProvider } from '../context/TodoContext';
import { TodoContext } from "../context/TodoContext";
import { Modal } from '../modal/AddTask';
import { TodoForm } from "../components/TodoForm";
import {CreateTodoMessage} from '../components/CreateTodoMessage';
import ContentLoader, { List } from "react-content-loader";

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



function AppUI() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal
  } = React.useContext(TodoContext);
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
      <TodoList >
        {loading && <List viewBox="0 0 250 100"/>}
        {(!loading && !searchedTodos.length) && <CreateTodoMessage/>}
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
      {!!openModal && (
        <Modal>
          <TodoForm/>
        </Modal>
      )}
      <CreateTodoButon 
      setOpenModal={setOpenModal} 
      openModal={openModal}
       />
    </React.Fragment>
  );
}

export { AppUI };
