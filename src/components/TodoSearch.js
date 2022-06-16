import React from "react";
import "../styles/TodoSearch.css";

function TodoSearch({ searchValue, setSearchValue, loading }) {
  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };
  return (
    <section>
      <div className="Add-container" id="cont">
        <input
          placeholder="find task"
          className="newTask"
          onChange={onSearchValueChange}
          value={searchValue}
          disabled={loading}
        />
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>
    </section>
  );
}

export { TodoSearch };
