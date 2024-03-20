import React, { useState } from "react";
import Input from "./Input";

const StateLogin = () => {
  const [enteredValue, setEnteredValue] = useState({
    email: "",
    password: "",
  });
  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false,
  });

  const emailIsInvalid = didEdit.email && !enteredValue.email.includes('@')

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(enteredValue.email);
  };

  const handleChange = (identifier, value) => {
    setEnteredValue(prev => ({
      ...prev,
      [identifier]: value,
    }))
    setDidEdit(prevEdit => ({
      ...prevEdit,
      [identifier]: false
    }))
  }

  function handleInputBlur(identifier) {
    setDidEdit(prev => ({
      ...prev,
      [identifier]: true
    }))
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-[90%] max-w-[50rem] my-12 mx-auto p-8 bg-[linear-gradient(180deg,#253c3c,#1d4949)] shadow-[0_0_16px_1px_rgba(0,0,0,0.5)] rounded-[8px]"
    >
      <h2 className="text-white font-sami-bold text-3xl my-4">Login</h2>
      <section className="flex justify-start w-full gap-8">
        <Input
          label="email"
          type="email"
          name="email"
          required
          onBlur={(e) => handleInputBlur("email", e.target.value)}
          onChange={ (e) => handleChange("email", e.target.value) }
          value={enteredValue.email}
        />
        <Input
          label="password"
          type="password"
          name="password"
          required
          onBlur={(e) => handleInputBlur("password", e.target.value)}
          onChange={ (e) => handleChange("password", e.target.value) }
          value={enteredValue.password}
        />
      </section>

      {emailIsInvalid && <p>Please enter valid email</p>}
      <p
        className="flex gap-4 mt-4 justify-end 
      "
      >
        <button className="py-2 px-4 font-thin capitalize text-lg tracking-wide rounded-[4px] hover:bg-[#0a3e3a]">
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

export default StateLogin;
