import React, { useState } from "react";
import "./App.css";
import NewProject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSideBar from "./components/ProjectsSidebar.jsx";
import SelectedProject from "./components/SelectedProject";
import { SelectedProjectContex } from "./store/SelectedProjectContex";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  function handleAddTask(text) {
    setProjectState((prevState) => {
      const taskId = Math.random();
      const newTask = {
        text: text,
        projectId: prevState.selectedProjectId,
        id: taskId,
      };
      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks],
      };
    });
  }

  function handleDeleteTask(id) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter(
          (tasks) => tasks.id !== id,
        ),
      };
    });
  }

  function handleSelectProject(id) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
  }

  function handleStartProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  function handleCacelAddProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  }
  function handleAddProject(projectData) {
    setProjectState((prevState) => {
      const projectId = Math.random();
      const newProject = {
        ...projectData,
        id: projectId,
      };
      return {
        ...prevState,
        projects: [...prevState.projects, newProject],
        selectedProjectId: undefined,
      };
    });
  }

  function handleDeleteProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter(
          (project) => project.id !== prevState.selectedProjectId
        ),
      };
    });
  }

  const selectedProject = projectState.projects.find(
    (project) => project.id === projectState.selectedProjectId
  );

  const nValues = [
    handleAddTask,
    handleAddProject,
    handleDeleteTask,
    handleDeleteProject,
    selectedProject,
    projectState.tasks,
  ];
  console.log(projectState.tasks.map(a => console.log(a.text)))
  //contains main selected project
  let content = (
    <SelectedProject
      
      onDeleteTasks={handleDeleteTask}
      onDelete={handleDeleteProject}
      project={selectedProject}
      tasks={projectState.tasks}
    />
  );
  
  if (projectState.selectedProjectId === null) {
    content = (
      <NewProject
        onAddProject={handleAddProject}
        onCancel={handleCacelAddProject}
      />
    );
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartProject={handleStartProject} />;
  }
  console.log(projectState.projects);
  return (
    <SelectedProjectContex.Provider value={nValues}>
      <div className="flex w-full h-screen gap-12">
        <ProjectSideBar
          onStartProject={handleStartProject}
          projects={projectState.projects}
          onSelectProject={handleSelectProject}
          selectedProjectId={projectState.selectedProjectId}
        />

        {content}
      </div>
    </SelectedProjectContex.Provider>
  );
}

export default App;
