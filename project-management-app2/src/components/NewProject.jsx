import React, { useRef } from "react";
import Input from "./Input.jsx";
import Modal from "./Modal.jsx";

const NewProject = ({ onAddProject,onCancel, ...props }) => {
  const title = useRef(),
    description = useRef(),
    dueDate = useRef(),
    modal = useRef();

  const handleSave = (e) => {
    e.preventDefault();
    const enteredTitle = title.current.value,
      enteredDescription = description.current.value,
      enteredDueDate = dueDate.current.value;

    // validation ...
    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      modal.current.open();
      return;
    }

    onAddProject({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  };

  return (
    <React.Fragment>
      <Modal ref={modal} buttonCaption="Close">
        <h2 className="text-xl font-bold text-stone-500 my-4">Invalid Input</h2>
        <p className="text-stone-400 mb-1">
          Oops ... looks like you forgot to enter a value.
        </p>
        <p className="text-stone-400 mb-4">
          Please make sure you provide a valid value input field.
        </p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 m-4">
          <button onClick={onCancel} className="text-stone-800 hover:text-stone-950">
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-6 py-2 rounded-md bg-slate-800 text-stone-50"
          >
            Save
          </button>
        </menu>
        <div>
          <Input type="text" ref={title} label="Title" />
          <Input ref={description} label="Description" textarea />
          <Input type="date" ref={dueDate} label="Due Date" />
        </div>
      </div>
    </React.Fragment> 
  );
};

export default NewProject;
