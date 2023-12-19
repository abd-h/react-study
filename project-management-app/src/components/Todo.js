import React, { useRef, useState } from "react";
import TodoList from "./TodoList";

const Todo = (props, ref) => {
  const inputRef = useRef();

  // const [clearUl, setClearUl] = useState(false);
  // const clearedUl = val => {
  //   setClearUl(prev => prev = val);
  // }

  // console.log(props.taskValue.join().match(/\s*/g));
  // console.log(props.taskValue[0]);
  // const addTask = props.taskValue
  //   .map(a => !/^\s+$/g.test(a))
  //   .filter(a => a === true).join();
  // console.log(addTask);
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
