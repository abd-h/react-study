import { createPortal } from "react-dom";
import {
  forwardRef,
  useRef,
  useImperativeHandle,
} from "react";
import Cart from "./Cart";

const CartModal = forwardRef(function CartModal({ actions, title }, ref) {
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
      className="w-[50%] py-2 px-2 bg-[#d3b17b] border-none rounded-md shadow-[0_0_10px_rgba(0,0,0,0.5)] animate-[fade-slide-in-from-top_0.3s_ease-in-out] backdrop:bg-[rgba(0,0,0,0.65)]"
    >
      <h2 className="text-2xl text-[#4f3807] uppercase m-0 py-2 px-4">
        {title}
      </h2>
      <Cart />
      <form className="flex gap-4 justify-end items-center " method="dialog">
        {actions}
      </form>
    </dialog>,
    document.getElementById("root-modal")
  );
});

export default CartModal;
