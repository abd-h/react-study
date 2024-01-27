import { useState, useContext, Fragment, useRef } from "react";

import { AddTaskContext } from "../../store/AddProjectContext";
import TaskModal from "./TaskModal";

const NewTask = (props) => {
  const [enteredTask, setEnteredTask] = useState("");
  const { handleAddTask, handleDeleteTask } = useContext(AddTaskContext);
  const modal = useRef();
  

  const handleChange = (event) => {
    setEnteredTask(event.target.value);
  };

  const handleClick = () => {
    if (enteredTask.trim() === "") {
      return modal.current.open();
    }
    handleAddTask(enteredTask);
    setEnteredTask("");
  };

  return (
    <Fragment>
      <TaskModal ref={modal} captionBtn="Close">
        <h2 className=" text-stone-500 text-xl font-bold line my-2">
          Invalid input
        </h2>
        <p>Ooops... looks like you forgot to enter a value.</p>
        <p className="py-2">
          Please make sure you provide a valid value for the Task input field
        </p>
      </TaskModal>
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
    </Fragment>
  );
};

export default NewTask;
