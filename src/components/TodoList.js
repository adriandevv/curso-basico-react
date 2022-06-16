import React from "react";
import "../styles/TodoList.css";

function TodoList(props) {
  let renderfunc = props.render || props.children;
  return (
    <section className="TodoList">
      {props.loading && props.onLoading()}
      {!props.sincronize && <h1>se esta sincronizando</h1>}
      {!props.loading && !props.totalTodos && props.onEmptyTodos()}
      {!!props.totalTodos &&
        !props.searchedTodos.length &&
        props.onEmptySearchResults(props.searchText)}
      <ul>{props.searchedTodos.map((todo) => renderfunc(todo))}</ul>
    </section>
  );
}

export { TodoList };
