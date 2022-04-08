import React from "react";
import { CreateTodoButon } from "./CreateTodoButton";
import "../styles/TodoSearch.css";

function TodoSearch({searchValue,setSearchValue}) {
  const onSearchValueChange = (event) =>{
    console.log(event.target.value);
    setSearchValue(event.target.value);
  }
  return (
    <section>
      <div className="Add-container" id="cont">
        <input placeholder="find task" className="newTask" 
        onChange = {onSearchValueChange}
        value={searchValue}
        />
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>
    </section>
  );
}

export { TodoSearch };
