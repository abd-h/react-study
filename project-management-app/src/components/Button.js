import React, { useState, useRef, forwardRef, useImperativeHandle } from "react";


const Button = forwardRef(function Button(props, ref) {
  const vRef = useRef();
  
  useImperativeHandle(ref, () => {
    return {
      open() {
        return vRef.current.value;
      },
    };
  });



  const changeHandler = (identifier, value) => {
 
    if (identifier == props.children && identifier == "Save") {
      //Date extraction methods
     
      let year = new Date(props.date.current.value).getFullYear(),
        month = new Date(props.date.current.value).getMonth(),
        day = new Date(props.date.current.value).getDay();

      const result = {
        title: props.title.current.value,
        description: props.description.current.value,
        // date: `${day}/${month}/${year}`,
        date: new Date(props.date.current.value).toDateString("en-GB", {
          month: "long",
        }),
      };
      props.onAddProject(props.title.current.value);

      props.title.current.value = "";
      props.description.current.value = "";
      props.date.current.value = "";
    } else if (identifier == props.children && identifier == "Cancel") {
      props.title.current.value = "";
      props.description.current.value = "";
      props.date.current.value = "";
    } else if (identifier === "Add Task") {
      props.onInputValue(props.task.current.value);
      props.task.current.value = "";
    } else if (identifier === "Clear") {
      console.log('clicked:', props.val);
      console.log(props.inputRef[props.val]);
      props.onClearBtn(props.val);
      props.inputRef[props.val] = "";
    }
  };
  return (
    <button
      ref={vRef}
      onClick={(e) => changeHandler(props.children, e)}
      className={`rounded 
      ${
        props.children == "Save"
          ? "bg-black text-white"
          : props.children === "Clear"
          ? "bg-slate-100 hover:text-red-700"
          : "bg-white text-black hover:bg-slate-200"
      } 

      font-bold py-3 px-8 text-lg`}
      type="button"
    >
      {props.children}
    </button>
  );
});

export default Button;
