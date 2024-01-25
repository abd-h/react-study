import React, { useState } from "react";
import NoprojectSelected from "./components/projects/NoProjectSelected";
import "./App.css";
import NewProject from "./components/projects/NewProject";
import ProjectSideBar from "./components/projects/ProjectSideBar";
import Task from "./components/tasks/SelectedProject";
import { AddProjectContext } from "./store/AddProjectContext";
import { AddTaskContext } from "./store/AddProjectContext";
import SelectedProject from "./components/tasks/SelectedProject";

const App = () => {
  const [projectState, setProjectState] = useState({
    projects: [],
    tasks: [],
    selectedProjectId: undefined,
  });
  // to get selected project id;
  let selectedProjectId = projectState.selectedProjectId;

  const tasks = projectState.tasks;
  const handleAddTask = (text) => {
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
  };

  const handleDeleteTask = (id) => {
    setProjectState((prevState) => ({
      ...prevState,
      tasks: prevState.tasks.filter(
        (tasks) => tasks.id !== id
      ),
    }));
  };

  const handleSelectedProject = (id) => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
  };

  const handleStartProject = () => {
    setProjectState((prevState) => ({
      ...prevState,
      selectedProjectId: null,
    }));
  };

  const handleAddProject = (projectData) => {
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
  };
  // To retrieve projects title in the ProjectSidebar component.
  const projects = projectState.projects;

  const handleCancel = () => {
    setProjectState((prevState) => ({
      ...prevState,
      selectedProjectId: undefined,
    }));
  };

  // Deleting selected project
  const handleDeleteProject = () => {
    setProjectState((prevState) => ({
      ...prevState,
      selectedProjectId: undefined,
      projects: prevState.projects.filter(
        (project) => project.id !== prevState.selectedProjectId
      ),
    }));
  };

  const selectedProject = projectState.projects.find(
    (project) => project.id === projectState.selectedProjectId
  );

  let content = (
    <AddTaskContext.Provider
      value={{ tasks, handleAddTask, handleDeleteTask, selectedProjectId }}
    >
      <SelectedProject
        onDelete={handleDeleteProject}
        projects={selectedProject}
      />
    </AddTaskContext.Provider>
  );

  if (projectState.selectedProjectId === null) {
    content = <NewProject />;
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoprojectSelected />;
  }

  return (
    <AddProjectContext.Provider
      value={{
        projects,
        handleStartProject,
        handleCancel,
        handleAddProject,
        handleSelectedProject,
      }}
    >
      <div className="flex gap-12">
        <ProjectSideBar
          selectedProjectId={selectedProjectId}
          onSelectedProject={handleSelectedProject}
        />
        {content}
        {/** 
        <SelectedProject />**/}
      </div>
    </AddProjectContext.Provider>
  );
};

export default App;
