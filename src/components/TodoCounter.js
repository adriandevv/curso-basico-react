import React from "react";
import "../styles/TodoCounter.css";
function TodoCounter() {
  return (
    <div className="TodoCounter-container">
      <h1 className="TodoCounter">
        <i class="fa-solid fa-list-check"></i> Tasks of the day{" "}
      </h1>
      <section>
        <h3 className="date">Wednesday, March 23rd</h3>
        <p className="smallMessage">3 Task left</p>
      </section>
    </div>
  );
}

export { TodoCounter };
