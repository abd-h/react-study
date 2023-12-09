import React, { useState, useRef, forwardRef, useImperativeHandle } from "react";
import Button from "./Button";

const AsideProjectForm = forwardRef(function AsideProjectForm(props, ref) {

  // console.log(props);
  const titleRefs = useRef(); 
  const description = useRef();
  const dateRef = useRef();

  useImperativeHandle(ref, () => {
    return {
      resultV() {
        return titleRefs.current.value;
      }, 
      description() {
        return description.current.value
      }, 
      date() {
        return dateRef.current.value;
      }
    }
  })

 
  const [val, setVal] = useState();
  const [inputVal, setInputVal] = useState();
  const clickHandler = (e) => {
    setVal(e.target.value);
  };
  const newV = {
    name: val,
  };
  const onChangeHandler = (e) => {
    setInputVal(e.target.value);
  };
  
 // console.log(ref.current.description());

  return (
    <form className="flex flex-col justify-center w-full">
      <div className="flex justify-end w-3/4 gap-5">
        <Button
          ref={ref}
          description={description}
          title={titleRefs}
          date={dateRef}
        >
          Cancel
        </Button>
        <Button
          ref={ref}
          description={description}
          title={titleRefs}
          date={dateRef}
          onAddProject={props.onAddProject}
        >
          Save
        </Button>
      </div>
      <label
        className="font-bold my-4 text-xl uppercase text-slate-500 mb-7 justify-end"
        htmlFor="title"
      >
        Title
        <input
          ref={titleRefs}
          className="rounded text-2xl bg-slate-300 py-2  px-1 border-2 border-transparent border-width block w-3/4"
          type="text"
          name="title"
          onChange={onChangeHandler}
        />
      </label>
      <label
        className="font-bold uppercase mb-4 text-xl text-slate-500"
        htmlFor="description"
      >
        Description
        <textarea
          ref={description}
          onChange={clickHandler}
          className="text-xl block rounded bg-slate-300 py-2 w-3/4"
          name="description"
          id="description"
          rows="3"
          cols="33"
        ></textarea>
      </label>

      <label
        className="uppercase mb-20 font-bold  text-slate-500"
        htmlFor="date"
      >
        <span className="text-xl bolder">Due date</span>

        <input
          ref={dateRef}
          onChange={clickHandler}
          className="rounded text-2xl block bg-slate-300 py-2 w-3/4"
          type="date"
          name="date"
          placeholder="dd.mm.yyyy"
        />
      </label>
    </form>
  );
});

export default AsideProjectForm;
