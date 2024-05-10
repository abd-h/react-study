import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { counterActions } from "../store/counter-slice";


const Counter = () => {
  const counter = useSelector((state) => state.counter.counter);

  const show = useSelector((state) => state.counter.showCounter);

  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const increaseHandler = () => {
    const amount = 5;

    dispatch(counterActions.increase(amount));
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };

    
  return (
    <main>
      <div className="w-2/4 h-30 flex flex-col items-center rounded-md  bg-white outline mt-40 mx-auto">
        <h1 className="text-stone-600 text-xl font-bold pt-4">Redux Counter</h1>
        <div className="text-3xl bold py-4">
          <button
            onClick={decrementHandler}
            className="font-extrabold text-red-600 mr-4"
          >
            -
          </button>
          {!show && counter}{" "}
          <button
            onClick={incrementHandler}
            className="font-extrabold text-green-600 ml-2"
          >
            +
          </button>
        </div>
        <button
          onClick={increaseHandler}
          className="py-2 px-6 bg-yellow-700 mb-4 rounded-md"
        >
          increase by 5
        </button>
        <button
          onClick={toggleCounterHandler}
          className="py-2 px-6 bg-blue-700 mb-4 rounded-md"
        >
          Toggle Counter
        </button>
      </div>
    </main>
  );
};

export default Counter;
