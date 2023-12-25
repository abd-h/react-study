import React, { useState, useRef, forwardRef, useImperativeHandle } from "react";

import AddProject from "./AddProject";
import CreateNewProject from "./CreateNewProject";
import AsideProjectForm from "./AsideProjectForm";

const MainComponent = forwardRef(function MainComponent(props, ref) {
  const [projectTitle, setProjectTitle] = useState("");
  const [btn, setBtn] = useState(false);
  const ref1 = useRef();
  const ref2 = useRef();

  


  console.log(ref1.current);
  console.log(ref);

  const inputRef = useRef();

  const addProjectHandler = (e) => {
    setBtn(true);
  };

  const addProject = (title, description, date) => {
    setProjectTitle(
      (prevState) =>
        (prevState = { title: title, description: description, date: date })
    );
  };
  props.onAddProjectHeaders(projectTitle);


  const onCurriedRefs = (refs => {
    console.log(refs);
    return refs;
  })


  return (
    <div className="flex justify-between bg-white space-x-8 w-full h-1/1 gap-32">
      <AddProject
        onAddHeaders={props.onAddHeaders}
        title={projectTitle.title}
        description={projectTitle.description}
        date={projectTitle.date}
        onclick={addProjectHandler}
       
      />
      {btn ? (
        <AsideProjectForm ref={inputRef} onAddProject={addProject} onCurriedRefs={onCurriedRefs} />
      ) : (
        <CreateNewProject
          title={projectTitle.title}
          description={projectTitle.description}
            date={projectTitle.date}
        />
      )}
    </div>
  );
});

export default MainComponent;
