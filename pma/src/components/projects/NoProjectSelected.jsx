import React, { Fragment, useContext } from "react";
import logo from "../../media/no-projects.png";
import { AddProjectContext } from "../../store/AddProjectContext";

const NoprojectSelected = (props) => {
  const startProject = useContext(AddProjectContext);

  return (
    <Fragment>
      <section className="flex flex-col items-center w-2/3 mt-[8rem]">
        <img className="w-[8rem] mb-4" src={logo} alt="logo" />
        <h2 className=" text-stone-500 text-xl font-bold line">
          No project selected
        </h2>
        <p className="my-8 text-xl text-stone-400 ">
          Select a project or get started a new one
        </p>
        <button
          onClick={startProject.handleStartProject}
          className="bg-stone-700 rounded-md py-3 text-sm font-bold hover:bg-stone-600 px-6 text-stone-400 leading-6 tracking-wide"
          type="button"
        >
          Create new project
        </button>
      </section>
    </Fragment>
  );
};

export default NoprojectSelected;
