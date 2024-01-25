import React from "react";

const Button = ({ children, ...props }) => {
  return (
    <button
      className="px-6 py-3 text-s font-bold md:text-base rounded-md bg-stone-700  text-stone-400 hover:bg-stone-600 hover:text-stone-100"
       
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
