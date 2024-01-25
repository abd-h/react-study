import React, { useContext} from "react";

import Button from "./Button.jsx";
import { SelectedProjectContex } from "../store/SelectedProjectContex.jsx";

const ProjectSideBar = ({
  onStartProject,
  projects,
  onSelectProject,
  selectedProjectId,
  ...props
}) => {

  const savedProjectTitle = projects
    .filter((projectTitle) => projectTitle.title)
    .map((a) => a.title);

  const cContex = useContext(SelectedProjectContex);
  // console.log(cContex.tasks.map(a => console.log(a['text'])));
  
  return (
    <aside className="bg-black text-white w-1/4 flex mt-16 justify-self-start items-center flex-col rounded-tr-2xl h-screen">
      <h1 className="text-3xl m-16 font-extrabold ">Your Projects</h1>
      <div>
        <Button onClick={onStartProject}>+ Add Project</Button>
      </div>
      <ul className="mt-8 w-3/4">
        {projects.map((project) => {
            
            let cssClasses = "w-full text-left px-4 py-1 rounded-sm mt-1 text-stone-400 hover:text-stone-200 hover:bg-stone-800 ";

            if (project.id === selectedProjectId) {
                cssClasses += ' bg-stone-800 text-stone-200'
            } else {
                cssClasses += " text-stone-400";
            }
          return (
            <li key={project.id}>
              <button
                onClick={() =>  onSelectProject(project.id)}
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
