import React from "react";
import NewTask from "./NewTask.jsx";

const Task = ({ tasks, onAdd, onDelete }) => {
  console.log(tasks);
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Task3</h2>
      <NewTask onAdd={onAdd} />
      {tasks.length <= 0 && (
        <p className="text-stone-800 my-4">
          This project does not have any tasks yet
        </p>
      )}
      {tasks.length > 0 && (
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          {tasks.map((task) => (
            <li key={tasks.id} className="flex justify-between mt-4">
              <span>
                {task.text}
              </span>
              <button
                className="text-stone-700 hover:text-red-500"
                onClick={() => onDelete(task.id)}
              >
                Clear
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Task;
