import React from 'react'

const InputCheckout = ({id, label, labelHtmlFor, ...props }) => {
  
  return (
    <div>
      <label className="block text-sm font-semibold" htmlFor={id}>
        {label}
      </label>
      <input
        className="placeholder:px-1 focus:text-sm px-1 py-[2px] focus:outline-stone-500 placeholder:text-xs rounded-sm w-2/4 mb-2"
        type="text"
        id={id}
        { ...props }
        name={id}
      />
    </div>
  );
}

export default InputCheckout