import React, { forwardRef } from "react";

const Input = forwardRef(function Input({ label, textarea, ...props }, ref) {
  
  let classes =
    "w-full p-1 border-b-2 round-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600 ";
  return (
    <p className="flex flex-col gap-1 my-4 mx-4">
      <label
        htmlFor=""
        className="font-bold text-sm uppercase text-stone-500"
      >
        {label}
      </label>
      {textarea ? (
        <textarea ref={ref} className={classes + 'h-40'} {...props} />
      ) : (
        <input ref={ref} className={classes} {...props} />
      )}
    </p>
  );
});

export default Input;
