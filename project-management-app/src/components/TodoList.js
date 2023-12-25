import React, { Fragment, useState } from 'react';

import Button from './Button';

const TodoList = (props) => {
    // console.log(props.inputRef);
    const [cleared, setCleare] = useState({});

    const clearBtn = (i) => {
        setCleare(prev => ({
            ...prev,
            [i]: !prev[i]
        }));
  } 
  const container = props.inputRef.filter((a => a !== "" && !/^\s+$/.test(a)));
  
  console.log(container.length);
  console.log(props.inputRef.length)
  
    return (
      <Fragment>
        {props.inputRef.map((value, i, array) => {
          // console.log(value === "");
          return (
            /^\s+$/g.test(value) !== true && (
              <li
                className={`flex justify-between content-center items-center p-2 font-semibold ${
                  cleared[i] ? "hidden" : "visible"
                }`}
                key={i}
              >
                <span>{value}</span>
                <Button inputRef={props.inputRef} val={i} onClearBtn={clearBtn}>
                  Clear
                </Button>
              </li>
            )
          );
        })}
        {container.length === 0 && <h2 className=' text-2xl bold px-4'>Add Task</h2>}
      </Fragment>
    );
}

export default TodoList;