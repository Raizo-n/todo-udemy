// import React from "react";
import "./App.css";

export const App = () => {
  return (
    <>
      <div className="input-area">
        <input type="text" placeholder="Type a task..." />
        <button>Add</button>
      </div>

      <div className="incomplete-area">
        <p className="title">Undone TODO</p>
        <ul className="flex">
          <li>Yooo</li>
          <button>Done</button>
          <button>Delete</button>
        </ul>
        <ul className="flex">
          <li>Sup</li>
          <button>Done</button>
          <button>Delete</button>
        </ul>
      </div>

      <div className="complete-area">
        <p className="title">Undone TODO</p>
        <ul className="flex">
          <li>Epic</li>
          <button>Cancel</button>
        </ul>
      </div>
    </>
  );
};
