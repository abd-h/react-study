import React from 'react'

const Notification = ({ title, message, status }) => {
    let specialClasses = '';
    console.log(status);
    if (status === 'error') {
        specialClasses = "bg-[#690000]";
    }
    if (status === 'success') {
        specialClasses = "bg-[#1ad1b9]";
    }

    const notification =
        "w-full h-[3rem] bg-[#1a8ed1] flex justify-around py-[0.5rem] px-[10%] items-center text-white font-bold tracking-wider text-lg";
    const cssClasses = `${notification} ${specialClasses}`


  return (
      <section className={cssClasses}>
          <h2>{title} </h2>
          <p>{status}</p>
      </section>
  )
}

export default Notification