import React from "react";
import Button from "./Button";

const AddProjectForm = (props) => {
  return (
    <div className="my-3 flex flex-col justify-center  outline w-3/4">
      <header className="flex flex-col text-xl border-b-4 border-b-slate-400">
        <div className="flex justify-between items-center">
          <h1 className="text-5xl my-6 font-bold">Learning React</h1>
          <Button>Delete</Button>
        </div>
        <p className="text-slate-700 font-bold text-2xl">Dec 29, 2024</p>
        <p className="py-6 p-r-1 font-semibold ">
          Learning React from the ground up start With the Basics, finish with
          advanced knowledge.
        </p>
      </header>
      <h2 className="font-bold text-5xl my-6">Task</h2>
      <form className="flex content-center items-center gap-1 pb-4">
        <p className="flex flex-col">
          <input
            className="text-lg h-12 self-start w-96 py-1 rounded"
            type="text"
            id="task"
            name="task"
          />
        </p>
        <Button>Add Task</Button>
      </form>
    </div>
  );
};

export default AddProjectForm;
