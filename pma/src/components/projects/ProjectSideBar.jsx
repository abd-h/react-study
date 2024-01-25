import React, { Fragment, useContext } from "react";
import { AddProjectContext } from "../../store/AddProjectContext";

const btnClasses =
  "bg-stone-700 rounded-md py-3 text-sm font-bold hover:bg-stone-600 px-6 text-stone-400 leading-6 tracking-wide";

const ProjectSideBar = ({ onSelectedProject, selectedProjectId }) => {
  const startProject = useContext(AddProjectContext);
  const { projects } = useContext(AddProjectContext);

  return (
    <aside
      className=" flex flex-col gap-12 h-screen w-1/4 mt-16 rounded-tr-lg bg-black
        "
    >
      <header className="ml-9">
        <h1 className="my-16 text-white text-3xl font-extrabold">
          Your Projects
        </h1>
        <button
          onClick={startProject.handleStartProject}
          className={btnClasses}
          type="button"
        >
          + Add Projects
        </button>
      </header>
      <ul className="text-white ml-9 text-left items-start w-[70%] list-none">
        {projects.map((project) => {
          let cssClasses =
            "w-full rounded-sm px-2 py-1 text-sm text-left font-bold bg-stone-700 hover:text-stone:200 hover:bg-stone-800 leading-6 tracking-wide";

          if (project.id === selectedProjectId) {
            cssClasses += " bg-stone-800 text-stone-200 block";
          } else {
            cssClasses = " text-stone-400";
          }

          return (
            <li
              key={project.id}
              className={cssClasses + " my-4 w-full hover:" + btnClasses}
            >
              <button
                onClick={() => onSelectedProject(project.id)}
                className={cssClasses}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default ProjectSideBar;
