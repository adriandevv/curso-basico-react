import React from "react";
import { withStorageListener } from "../HOC/withStorageListener";
import "../styles/ChangeAlert.css";

function ChangeAlert({ show, toggleShow }) {
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

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);

export { ChangeAlertWithStorageListener };
