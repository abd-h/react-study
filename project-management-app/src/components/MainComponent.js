import React, { useState, useRef } from "react";

import AddProject from "./AddProject";
import CreateNewProject from "./CreateNewProject";
import AsideProjectForm from "./AsideProjectForm";

const MainComponent = (props) => {
  const [projectTitle, setProjectTitle] = useState("");
  const [btn, setBtn] = useState(false);
  const ref = useRef();
  const inputRef = useRef();

  const addProjectHandler = (e) => {
    setBtn(true);
  };
 
  const addProject = (title) => {
    console.log(title);
    setProjectTitle(title);
  }
  
  return (
    <div className="flex justify-between bg-white space-x-8 w-full h-1/1 gap-32">
      <AddProject value={projectTitle} onclick={addProjectHandler} ref={ref} />
      {btn ? (
        <AsideProjectForm ref={inputRef} onAddProject={addProject} />
      ) : (
        <CreateNewProject />
      )}
    </div>
  );
};

export default MainComponent;
