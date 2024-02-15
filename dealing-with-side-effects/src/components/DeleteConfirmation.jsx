import { useEffect } from "react";
import { DeleteConfirmationStyles } from "./Styles";
// import { ProgressBar } from "./Styles";
import ProgressBar from "./ProgressBar";

const TIMER = 3000;

function DeleteConfirmation({ onConfirm, onCancel }) {


  useEffect(() => {
    const timeIsOut = setTimeout(() => {
      onConfirm();
    }, 3000);

    return () => {
      clearTimeout(timeIsOut);
    };
  }, [onConfirm]);

  return (
    <DeleteConfirmationStyles id="delete-confirmation">
      <h2>Are you sure</h2>
      <p>Do you really want to remove this place</p>
      <p id="confirmation-actions">
        <button className="btn-text" onClick={onCancel}>
          No
        </button>
        <button className="btn" onClick={onConfirm}>
          Yes
        </button>
       </p>
      <ProgressBar timer={ TIMER } />
      
    </DeleteConfirmationStyles>
  );
}

export default DeleteConfirmation;
