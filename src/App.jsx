// import React from "react";
import { useState } from "react";
import "./App.css";

export const App = () => {
  const [incompleteTodo, setIncompleteTodo] = useState([
    "cleaning my room",
    "doing the laundry",
  ]);
  const [completeTodo, setCompleteTodo] = useState(["Making lunch"]);

  return (
    <>
      <div className="input-area">
        <input type="text" placeholder="Type a task..." />
        <button>Add</button>
      </div>

      <div className="incomplete-area">
        <p className="title">Undone TODO</p>
        <ul>
          {incompleteTodo.map((todo) => {
            return (
              <div key={todo} className="flex">
                <li>{todo}</li>
                <button>Done</button>
                <button>Delete</button>
              </div>
            );
          })}
        </ul>
      </div>

      <div className="complete-area">
        <p className="title">Done TODO</p>
        <ul>
          {completeTodo.map((todo) => {
            return (
              <div key={todo} className="flex">
                <li>{todo}</li>
                <button>Cancel</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
