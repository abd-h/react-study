import React, { useState, forwardRef, useRef, useEffect } from "react";

const AddProject = forwardRef(function AddProject(props, ref) {
  // const [addProject, setAddProject] = useState([]);
  const [title, setTitle] = useState();
 
  

  const handleClick = () => {
    console.log('click from h1');
    props.onAddHeaders(true);
  }



  
  return (
    <aside
      ref={ref}
      className="bg-black text-white w-2/4 flex mt-16 justify-self-start flex-col items-center rounded-tr-2xl h-screen"
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
      <section
        className={`rounded tracking-wide w-1/2 justify-self-center mt-12 p-3 ${
          /^\s*$/g.test(props.title) || props.title === undefined ? "hidden" : "bg-stone-700"
        }`}
      >
        <h2 className={`cursor-pointer text-xl font-bold  w-auto`} onClick={handleClick}>
          {props.title}
        </h2>
      </section>
    </aside>
  );
});

export default AddProject;
