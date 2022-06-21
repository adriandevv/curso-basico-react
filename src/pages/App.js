import React from "react";
import { TodoCounter } from "../components/TodoCounter";
import { TodoSearch } from "../components/TodoSearch";
import { CreateTodoButon } from "../components/CreateTodoButton";
import { TodoList } from "../components/TodoList";
import { TodoItem } from "../components/TodoItem";
import { TodoHeader } from "../components/TodoHeader";
import { Modal } from "../modal/AddTask";
import { TodoForm } from "../components/TodoForm";
import { CreateTodoMessage } from "../components/CreateTodoMessage";
import { List } from "react-content-loader";
import { useTodos } from "../context/useTodos";
import { ChangeAlert } from "../components/ChangeAlert";

function App() {
  const {
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    addTodo,
    sincronizeTodos,
    deleteRenderItems,
  } = useTodos();
  return (
    <React.Fragment>
      <TodoHeader loading={loading}>
        <TodoCounter
          totalTodos={totalTodos}
          completedTodos={completedTodos}
          // loading={loading}
        />
        <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          // loading={loading}
        />
      </TodoHeader>
      <TodoList
        loading={loading}
        onLoading={() => <List viewBox="0 0 250 100" />}
        onEmptyTodos={() => <CreateTodoMessage />}
        totalTodos={totalTodos}
        searchText={searchValue}
        sincronize={sincronizeTodos}
        onEmptySearchResults={(searchText) => (
          <p>No se encontraron resultados para "{searchText}"</p>
        )}
        searchedTodos={searchedTodos}
        render={(todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        )}
      />
      {!!openModal && (
        <Modal>
          <TodoForm
            openModal={openModal}
            setOpenModal={setOpenModal}
            addTodo={addTodo}
          />
        </Modal>
      )}
      <CreateTodoButon setOpenModal={setOpenModal} openModal={openModal} />
      <ChangeAlert
        sincronize={sincronizeTodos}
        deleteRenderItems={deleteRenderItems}
      />
    </React.Fragment>
  );
}

export default App;
