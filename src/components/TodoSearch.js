import React from "react";
import { CreateTodoButon } from "./CreateTodoButton";
import "../styles/TodoSearch.css";

function TodoSearch() {
  return (
    <section>
      <div className="Add-container" id="cont">
        <input placeholder="Add a new task" className="newTask" />
        <i class="fa-solid fa-magnifying-glass"></i>
      </div>
    </section>
  );
}

export { TodoSearch };
