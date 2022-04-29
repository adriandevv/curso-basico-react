import React from "react";
import "../styles/TodoCounter.css";
import { TodoContext } from '../context/TodoContext';

function TodoCounter() {
  const { totalTodos, completedTodos } = React.useContext(TodoContext);
  let today = new Date();
  let date = today.getFullYear() + '  -  ' + (today.getMonth() + 1) + '  -  ' + today.getDate();
  return (
    <div className="TodoCounter-container">
      <h1 className="TodoCounter">
        <i className="fa-solid fa-list-check"></i> Tasks of the day
      </h1>
      <section>
        <h3 className="date">{date}</h3>
        <p className="smallMessage"
        >{totalTodos - completedTodos} left of {totalTodos} TODOs</p>
      </section>
    </div>
  );
}

export { TodoCounter };
