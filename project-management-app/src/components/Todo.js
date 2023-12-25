import React, { useRef, useState } from "react";
import TodoList from "./TodoList";

const Todo = (props) => {
//   const inputRef = useRef();

//  console.log(inputRef.current);
  return (
    <ul
      className={`bg-slate-100 py-6 rounded ${
        props.taskValue.length <= 0 ? "hidden" : "visible"
      }`}
    >
      {props.taskValue.map((a) => a !== "")}
      <TodoList inputRef={props.taskValue} />
    </ul>
  );
};

export default Todo;
