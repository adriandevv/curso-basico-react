import React from "react";
import '../styles/TodoItem.css';
function TodoItem(props) {
  return (
    <li className="item-Container">
      <span onClick = {props.onComplete}><i className={`${!props.completed && 'fa-solid fa-square'} ${props.completed && 'fa-solid fa-square-check'}`}></i></span>
      <p className={`${props.completed &&  'completed-check'}`}>{props.text}</p>
      <span onClick={props.onDelete}><i className="fa-solid fa-x"></i></span>
    </li>
  );
}

export { TodoItem };
