import React from "react";
import "../styles/TodoCounter.css";

function TodoCounter({ totalTodos, completedTodos, loading }) {
  let today = new Date();
  let date =
    today.getFullYear() +
    "  -  " +
    (today.getMonth() + 1) +
    "  -  " +
    today.getDate();
  return (
    <div className={`TodoCounter-container ${!!loading && "CounterLoading"}`}>
      <h1 className="TodoCounter">
        <i className="fa-solid fa-list-check"></i> Tasks of the day
      </h1>
      <section>
        <h3 className="smallMessage">{date}</h3>
        <p className="smallMessage">
          {totalTodos - completedTodos} left of {totalTodos} TODOs
        </p>
      </section>
    </div>
  );
}

export { TodoCounter };
