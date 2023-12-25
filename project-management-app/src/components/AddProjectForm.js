import React, { useState, useRef, forwardRef, useImperativeHandle } from "react";
import Button from "./Button";
import Todo from "./Todo";

const AddProjectForm = (props) => {
    const ref = useRef();
    const task = useRef();
    const [inputValue, setInputValue] = useState([])

    // useImperativeHandle(ref, () => {
    //     return {
    //         taskValue() {
    //            return task.current.value;
    //         }
    //     }
    // })

    const addTask = (task) => {
      console.log(task);
    };

    // const clickedHandler = () => {
    //     setInputValue(task.current.value);
        
    // }
    
   
    function newResult(result) {
        console.log(result == /\s/g);
        if (result.length > 0 && result !== 0 && result !== /\s/g) {
            setInputValue((prev) => prev.concat(result));
        };
     
    }
    // console.log(newResult(inputValue));
    // console.log(inputValue);
  
    console.log(props.projectHeaders === undefined);

  return (
    <div className="my-3 flex flex-col justify-center max-w-3/4">
      <header className="flex flex-col text-xl border-b-4 border-b-slate-400">
        <div className="flex justify-between items-center">
          <h1 className="text-5xl my-6 font-bold"> 
            {props.projectHeaders.title}
             </h1>
          <Button onDeleted={props.onDeleted}>Delete</Button>
        </div>
        <p className="text-slate-700 font-bold text-2xl">{ props.projectHeaders.date.split("-").reverse().join('-')} </p>
        <p className="py-6 p-r-1 font-semibold ">

          {props.projectHeaders.description}
        </p>
      </header>
      <h2 className="font-bold text-5xl my-6">Task</h2>
      <form className="flex flex-col">
        <p className="flex content-center items-center gap-2 pb-4">
          <input
            ref={task}
            className="text-xl  tracking-wide caret-black px-1 font-sans font-sami-bold h-12 self-start w-96 py-1 rounded bg-slate-200"
            type="text"
            id="task"
            name="task"
          />
          <Button task={task} onInputValue={newResult} onAddTask={addTask}>Add Task</Button>
        </p>
        <Todo taskValue={inputValue} />
      </form>
    </div>
  );
};

export default AddProjectForm;
