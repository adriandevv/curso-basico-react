import React from "react";
import "../styles/TodoCounter.css";
function TodoCounter(props) {
  return (
    <div className="TodoCounter-container">
      <h1 className="TodoCounter">
        <i className="fa-solid fa-list-check"></i> Tasks of the day{" "}
      </h1>
      <section>
        <h3 className="date">Wednesday, March 23rd</h3>
        <p className="smallMessage"
        >{props.total-props.completedNow} left of {props.total} TODOs</p>
      </section>
    </div>
  );
}

export { TodoCounter };
