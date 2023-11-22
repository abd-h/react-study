import React from 'react';
// import '../index.css'
import clipboard from './media/no-projects.png'

const CreateNewProject = (props) => {
    return (
      <div className="bg-slate-900">
        <header className="box-boder">
          <img className="rounded-lg md:w-30" src={clipboard} alt="clipboard" />
          <h1 className="text-3xl font-bold underline">No Project selected</h1>
          <h2>Select a project or start a new one</h2>
          <input type="button" value="Create New Project" />
        </header>
      </div>
    );
}

export default CreateNewProject;