import { useState, useContext } from "react";

import { AddTaskContext } from "../../store/AddProjectContext";

const NewTask = (props) => {
  const [enteredTask, setEnteredTask] = useState("");
  const { handleAddTask, handleDeleteTask } = useContext(AddTaskContext);

    const text = (enteredTask) => {
      if (enteredTask.trim() === '') {
          console.log('String');
           return <p>Error Mode</p>

        }
    }
    console.log(enteredTask.trim() === "");
  const handleChange = (event) => {
    setEnteredTask(event.target.value);
  };
    const handleClick = () => {
      
    if (enteredTask.trim() === '') {
      return;
      
    } 
      handleAddTask(enteredTask);
      setEnteredTask("");
    
  };

  return (
    <p className="flex gap-4 items-center">
      <input
        onChange={handleChange}
        value={enteredTask}
        className="w-64 bg-stone-100 py-1 px-2 focus:outline-none focus:border-b-2 border-b-stone-300 rounded-sm"
        label="Add Task"
      />
      <button
        onClick={handleClick}
        className="text-stone-700 block hover:text-stone-950"
      >
        Add Task
      </button>
    </p>
  );
};

export default NewTask;
