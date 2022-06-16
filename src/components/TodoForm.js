import React from "react";
import "../styles/TodoForm.css";

function TodoForm({ openModal, setOpenModal, addTodo }) {
  const [newTodoValue, setNewTodoValue] = React.useState("");
  const onCancel = () => {
    setOpenModal(!openModal);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    onCancel();
  };
  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };
  return (
    <form onSubmit={onSubmit}>
      <label>Add new task</label>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        placeholder="programar 1 hora"
      />
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          onClick={onCancel}
          className="TodoForm-button TodoForm-button-cancel"
        >
          Cancelar
        </button>
        <button type="submit" className="TodoForm-button TodoForm-button-add">
          Añadir
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
