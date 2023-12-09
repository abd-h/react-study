import React, { useState, forwardRef } from "react";

const AddProject = forwardRef(function AddProject(props, ref) {
  const [addProject, setAddProject] = useState("");
  const clickHandler = () => {
    // console.log(ref.current);
    setAddProject(true);
  };
  return (
    <aside
      ref={ref}
      className="bg-black text-white w-2/4 flex mt-16 justify-self-start flex flex-col items-center rounded-tr-2xl h-screen"
      id="name"
    >
      <h2 className="text-3xl m-16 font-extrabold ">Your Projects</h2>
      <button
        onClick={props.onclick}
        className="bg-stone-700 rounded  bg-slate-700 font-bold py-3 px-8"
        type="button"
      >
        + Add Project
      </button>
      <section className={`rounded tracking-wide w-1/2 justify-self-center mt-12 p-3 ${
            props.value.length == 0 ? "hidden" : "bg-stone-700"
          }`}>
        <h2
          className={`text-xl font-bold  w-auto`}
        >
          {props.value}
        </h2>
      </section>
    </aside>
  );
});

export default AddProject;
