import { createPortal } from "react-dom";
import { useEffect, useRef } from "react";

const Modal = ({ children, open, className = "" }) => {
  const dialog = useRef();

  useEffect(() => {
    const modal = dialog.current;
    if (open) {
      modal.showModal();
    } 
    return () => modal.close();
  }, [open]);

  return createPortal(
    <dialog
      ref={dialog}
      className={`bg-[#e4ddd4] rounded-md border-none shadow-[0_2px_8px_rgba(0,0,0,0.6)] p-4 w-4/5 max-w-[40rem] animation-[faded-slide-up_0.3s_ease-out_forwards] backdrop:bg-[rgba(0,0,0,0.65)] ${className}`}
    >
      {children}
    </dialog>,
    document.getElementById("modal")
  );
};

export default Modal;
