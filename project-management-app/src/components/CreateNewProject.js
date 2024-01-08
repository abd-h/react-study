import React from "react";
import logo from "./media/no-projects.png";


const CreateNewProject = (props) => {
    const clickHandler = () => {
        console.log('clicked from CreateNew Project');
    }

    const newLocal = `
        flex flex-col 
        p-10 justify-center 
        items-center 
        flex-wrap 
        m-20 
        text-center
        `;
  return (
    <div className="mt-50 self-center justify-self-center align-self-center w-full">
      <header
        className={newLocal}
      >
        <img className="w-20 block " src={logo} alt="clipboard" />
        <h1 className="text-slate-600 font-extrabold text-lg tracking-wide m-5">
          No Project Selected
        </h1>
        <p className="font-bold text-slate-400 tracking-wide">
          Select a project or get started with the new one
        </p>

        <button
          className="tracking-wider w-60  m-5 bg-stone-700 font-bold   py-3 px-1 rounded-xl text-slate-100"
                  type="button"
                  onClick={props.onclick}
        >
          Create new Project
        </button>
          </header>
          
    </div>
  );
};

export default CreateNewProject;
