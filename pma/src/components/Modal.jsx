import { forwardRef, useRef, useImperativeHandle } from "react";
import { createPortal } from "react-dom";

const Modal = forwardRef(function Modal({ children, btnCaption }, ref) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog
      ref={dialog}
      className="backdrop:bg-stone-900/90 p-4 rounded-md shodow-md"
    >
      {children}
      <form method="dialog" className="text-right">
        <button
          className="bg-stone-700 rounded-md py-2 text-sm font-bold hover:bg-stone-600 px-4 my-4 text-stone-200 leading-6 tracking-wide"
          type="submit"
        >
          {btnCaption}
        </button>
      </form>
    </dialog>,
    document.getElementById("task-modal")
  );
});

export default Modal;
