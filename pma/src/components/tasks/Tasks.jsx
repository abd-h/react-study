import React, { useState, useContext, Fragment } from "react";
import NewTask from "./NewTask";
import { AddTaskContext } from "../../store/AddProjectContext";
const Tasks = (props) => {
  const { tasks } = useContext(AddTaskContext);
  const { selectedProjectId } = useContext(AddTaskContext);
  const { handleDeleteTask } = useContext(AddTaskContext);

  return (
    <section className="flex flex-col">
      <h2 className="my-5 text-stone-600 text-2xl">Task</h2>
      <NewTask />
      
      {tasks.length > 0 && (
        <ul className="flex my-8 flex-col gap-4">
          {tasks.map((task) => {
            console.log(task.id);
            return (
              <Fragment key={task.id}>
                {selectedProjectId === task.projectId && (
                  <li
                    className={
                      "flex justify-between w-full bg-stone-100 py-4 px-2 focus:border-b-2 border-b-stone-300 rounded-sm"
                    }
                  >
                    {task.text}
                    <button
                      className="hover:text-red-700"
                      type="submit"
                      onClick={() => handleDeleteTask(task.id)}
                    >
                      Clear
                    </button>
                  </li>
                )}
              </Fragment>
            );
          })}
        </ul>
      )}
    </section>
  );
};

export default Tasks;
