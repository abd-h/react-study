import React from 'react'

const Button = ({ textOnly, children, ...props }) => {
  


    const cssClass = `${
      textOnly
        ? "text-2xl cursor-pointer bg-transparent border-none  text-[#ffcb04]"
        : " bg-yellow-300 text-[0.9rem] font-bold py-2 px-8 m-0 rounded-md hover:bg-yellow-400 text-[#544101]"
        }`;
      
  return (
    <button className={ cssClass} {...props}>
      {children}
    </button>
  );
}

export default Button