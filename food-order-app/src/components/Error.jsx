import React from 'react'

const Error = ({title, message}) => {
  return (
      <div className='w-3/4 bg-red-300 mx-auto my-4 py-2 px-1 text-center rounded-md'>
          <h2 className='text-3xl'>{title} </h2>
          <p>{message} </p>
      </div>
  )
}

export default Error