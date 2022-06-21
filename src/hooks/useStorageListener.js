import React from "react";

function useStorageListener({ sincronize, deleteRenderItems }) {
  const [storageChange, setStorageChange] = React.useState(false);
  window.addEventListener("storage", (change) => {
    if (change.key === "TODOS_V1") {
      console.log("Hubo cambios en TODOS_V1");
      setStorageChange(true);
    }
  });
  const toggleShow = () => {
    sincronize();
    setStorageChange(false);
    deleteRenderItems();
  };

  return {
    show: storageChange,
    toggleShow,
  };
}

export { useStorageListener };
