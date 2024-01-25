import React, { Fragment, useContext, useRef } from "react";
import Modal from "../Modal";
import { AddProjectContext } from "../../store/AddProjectContext";
import Input from "../input/Input";

const NewProject = (props) => {
  const handleCancelForm = useContext(AddProjectContext);
  const { handleAddProject } = useContext(AddProjectContext);
  const title = useRef(),
    description = useRef(),
    dueDate = useRef(),
    modal = useRef();

  const handleSave = () => {
    const enteredTitle = title.current.value,
      enteredDescription = description.current.value,
      enteredDueDate = dueDate.current.value;

    // validation
    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      return modal.current.open();
    }

    handleAddProject({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  };

  return (
    <Fragment>
      <Modal ref={modal} btnCaption="Close">
        <h2 className=" text-stone-500 text-xl font-bold line my-2">
          Invalid input
        </h2>
        <p>Ooops... looks like you forgot to enter a value.</p>
        <p className="py-2">Please make sure you provide a valid value for every input field</p>
      </Modal>
      <div className="mt-16 w-[40rem] ">
        <menu className="flex gap-8 justify-end">
          <button
            onClick={handleCancelForm.handleCancel}
            className="py-2 px-4 text-m hover:bg-stone-200 rounded-md"
            type="submit"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="py-2 px-4 text-lg rounded-md bg-stone-900 text-white"
            type="submit"
          >
            Save
          </button>
        </menu>
        <Input ref={title} type="text" label="Title" />
        <Input ref={description} textarea label="Description" />
        <Input ref={dueDate} type="date" label="Due Date" />
      </div>
    </Fragment>
  );
};

export default NewProject;
