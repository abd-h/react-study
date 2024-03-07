import { useEffect } from "react";

import ProgressBar from "./ProgressBar";

const TIMER = 3000;

const DeleteConfirmation = ({ onConfirm, onCancel }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onConfirm();
    }, TIMER);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        <button className="button-text" onClick={onCancel}>
          No
        </button>
        <button className="button-text" onClick={onConfirm}>
          Yes
        </button>
      </div>
      <ProgressBar timer={TIMER} />
    </div>
  );
};

export default DeleteConfirmation;
