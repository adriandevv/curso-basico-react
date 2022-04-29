import React from "react";
import '../styles/CreateTodoButton.css';
function CreateTodoButon({ setOpenModal, openModal }) {
  const onClickButton = () => {
    setOpenModal(!openModal);
  };

  return <button className="CreateTodoButton"
    onClick={() => onClickButton()}
  > + </button>;
}

export { CreateTodoButon };
