import React from 'react'

const InputCheckout = ({ id, label, ...props }) => {
    
  return (
      <p className='my-2 mx-0 flex flex-col '>
          <label className='font-bold mb-2' htmlFor={ id }>{label} </label>
          <input className='w-full max-w-80 text-inherit p-2 rounded-[4px] border-[1px_solid_#ccc]' id={id} name={id} required {...props} />
      </p>
  )
}

export default InputCheckout