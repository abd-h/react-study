import React from 'react'

const Notifications = (props) => {
    let specialClasses = '';

    if (props.status === 'error') {
        specialClasses = "bg-[#690000]";
    }
    if (props.status === 'success') {
        specialClasses = "bg-[#1ad1b9]";
    }
    
    const cssClasses = `${specialClasses}  w-full h-[3rem] bg-[#1a8ed1] flex justify-between py-[0.5] px-[10%] items-center text-white`;
  return (
      <section className={ cssClasses }>
          <h2>{ props.title }</h2>
          <p> { props.message } </p>
      </section>
  )
}

export default Notifications