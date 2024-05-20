import React from 'react'

const Cards = ({children, ...props}) => {
  return (
    <section
      className={` ${
        props.className
          ? props.className
          : "my-4 mx-auto rounded-md bg-white p-4 w-[80%] max-w-[40rem]"
      }`}
    >
      {children}
    </section>
  );
}

export default Cards