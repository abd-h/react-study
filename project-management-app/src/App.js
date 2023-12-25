import React, { useState, useRef } from 'react';
import './App.css';
import AddProjectForm from './components/AddProjectForm';
// import Todo from './components/Todo';
import MainComponent from './components/MainComponent';
// import ProjectForm from './components/ProjectForm';

function App() {
  const [deleted, setDeleted] = useState(false)
  const [addHeaders, setAddHeaders] = useState();
  const ref = useRef();


  const AddProjectHeaders = (projectTitle) => {
    // console.log(projectTitle.title);
    // console.log(projectTitle.description);
    // console.log(projectTitle.date);
    setAddHeaders(projectTitle)
  }

  console.log(ref.current);

  return (
    <div className="flex w-full h-screen justify-center items-center">
      {deleted && (
        <AddProjectForm
          onDeleted={setDeleted}
          projectHeaders={addHeaders}
        />
      )}
      {!deleted && (
        <MainComponent
          onAddProjectHeaders={AddProjectHeaders}
          onAddHeaders={setDeleted}
          ref={ref}
        />
      )}
      {/**
      
      <Todo />
    **/}
    </div>
  );
}

export default App;
