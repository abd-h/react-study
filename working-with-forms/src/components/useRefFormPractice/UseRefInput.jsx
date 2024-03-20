import React, { useState, forwardRef, useRef } from "react";
const bgLinearCss = "[linear-gradient(#d0d6d9,#b1b4ba)]";

const UseRefInput = forwardRef(function UseRefInput({ label, ...props }, ref) {
  return (
    <p className=" flex-wrap flex flex-col">
      <label
        htmlFor={label}
        className={`w-[15rem] uppercase tracking-wide text-${bgLinearCss}`}
      >
        {label}
      </label>
      <input
        ref={ref}
        id={label}
        {...props}
        className={`my-1 p-2 text-x w-full block max-w-[15rem] rounded-md bg-[#869999] text-[#142020]`}
      />
    </p>
  );
});

export default UseRefInput;
