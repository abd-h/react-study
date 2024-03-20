import React, { useState, useRef } from "react";
import UseRefInput from "../useRefFormPractice/UseRefInput";

const UseRefLogingForm = () => {
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const email = useRef();
  const password = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    setInputValue((prevState) => ({
      ...prevState,
      email: email.current.value,
      password: password.current.value,
    }));
  };

  console.log(inputValue.email);

  return (
    <form
      onSubmit={handleSubmit}
      className="w-[90%] max-w-[50rem] my-12 mx-auto p-8 bg-[linear-gradient(180deg,#253c3c,#1d4949)] shadow-[0_0_16px_1px_rgba(0,0,0,0.5)] rounded-[8px]"
    >
      <h2 className="text-white font-sami-bold text-3xl my-4">Login</h2>
      <section className="flex justify-start w-full gap-8">
        <UseRefInput
          ref={email}
          label="email"
          type="email"
          name="email"
          required
        />
        <UseRefInput
          ref={password}
          label="password"
          type="password"
          name="password"
          required
        />
      </section>
      <p
        className="flex gap-4 mt-4 justify-end 
      "
      >
        <button type="reset" className="py-2 px-4 font-thin capitalize text-lg tracking-wide rounded-[4px] hover:bg-[#0a3e3a]">
          reset
        </button>
        <button
          className={`py-2 px-4 text-lg bg-[#147b73] rounded-[4px] text-white capitalize tracking-wide hover:bg-[#0a3e3a]`}
        >
          login
        </button>
      </p>
    </form>
  );
};

export default UseRefLogingForm;
