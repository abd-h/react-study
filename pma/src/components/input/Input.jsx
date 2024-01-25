import React, { useRef, forwardRef } from "react";

const Input = forwardRef(function Input({ textarea, label, ...props }, ref){

  const ref1 = useRef();
  // console.log(ref.current.value);

  const classes =
    "w-full p-1 border-b-2 round-sm border-stone-300 bg-stone-100 text-stone-600 focus:outline-none focus:border-stone-600 ";

  return (
        
      <p className="flex flex-col gap-1 my-4">
        <label className="font-bold text-stone-500" htmlFor={label}>
          {label}
        </label>
        {textarea ? (
          <textarea ref={ref} {...props} className={classes + " h-40 "} />
        ) : (
          <input ref={ref} {...props} className={classes} />
        )}
      </p>
    
  );
});
export default Input;
