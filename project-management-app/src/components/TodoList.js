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
  function t(val) {
    return val === '' || /^\s+$/g.test(val);
  }
  console.log('Function t: ', t(''));

  console.log(props.inputRef);
  console.log(container.length);
  console.log(container.length == 0);
    
    return (
      <Fragment>
        {props.inputRef.map((value, i, array) => {
          console.log(value === "");
          console.log(cleared[i]);
          // props.onClearedUl(cleared[i])
          return (
            container.length > 0 && (
              <li
                className={`flex justify-between content-center items-center p-2 font-semibold ${
                  cleared[i] ? "hidden" : "visible"
                }`}
                key={i}
              >
                {value && value}
                {cleared[i] === true ? "Enter Task" : value}
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