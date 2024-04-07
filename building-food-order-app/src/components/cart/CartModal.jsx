import { useRef, useContext, useEffect } from "react";
import { createPortal } from "react-dom";
import { MealsCxt } from "../../store/MealsContext";
const CartModal = ({ children }) => {
  const { modalIsOpen, handleClickCart } = useContext(MealsCxt);
  const dialog = useRef();
  
  useEffect(() => {
    if (modalIsOpen) {
      dialog.current.showModal();
    } else {
      dialog.current.close();
    }
  }, [modalIsOpen]);

  return createPortal(
    <dialog
      className="backdrop:bg-[rgba(0,0,0,0.65)]/90 w-[50%] shadow-[0_0_10px_rgba(0,0,0,0.5)] animate-[fade-slide-in-from-top_0.3s_ease-in-out] border-none rounded-md"
      ref={dialog}
    >
      {modalIsOpen ? children : null}
    </dialog>,
    document.getElementById("modal")
  );
};

export default CartModal;
