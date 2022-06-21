import React from "react";
import { useStorageListener } from "../hooks/useStorageListener";
import "../styles/ChangeAlert.css";

function ChangeAlert({ sincronize, deleteRenderItems }) {
  const { show, toggleShow } = useStorageListener({
    sincronize,
    deleteRenderItems,
  });
  if (show) {
    return (
      <div className="background">
        <aside className="container">
          <h2 className="subtitle">your list is outdated</h2>
          <button onClick={toggleShow} className="btn-recharge">
            Refresh
          </button>
        </aside>
      </div>
    );
  } else {
    return null;
  }
}

export { ChangeAlert };
