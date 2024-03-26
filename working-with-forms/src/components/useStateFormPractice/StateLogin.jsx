import React from "react";
import Input from "./Input";
import { isEmail, hasMinLength, isNotEmpty } from "../utility/validation";
import { useInput } from "../hooks/useInput";

const StateLogin = () => {
  const {
    handleInputChange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
    value: emailValue,
    hasError: emailHasError,
  } = useInput("", (value) => isEmail(value) && isNotEmpty(value));

  const {
    handleInputChange: handlePasswordChange,
    handleInputBlur: handlePasswordBlur,
    value: passwordValue,
    hasError: passwordHasError,
  } = useInput("", (value) => isNotEmpty && hasMinLength(value, 6));
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (emailHasError || passwordHasError) {
      return;
    }
    console.log(emailValue);
    console.log(passwordValue);
    e.target.reset();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-[90%] max-w-[50rem] my-12 mx-auto p-8 bg-[linear-gradient(180deg,#253c3c,#1d4949)] shadow-[0_0_16px_1px_rgba(0,0,0,0.5)] rounded-[8px]"
    >
      <h2 className="text-white font-sami-bold text-3xl my-4">Login</h2>
      <section className="flex justify-start w-full gap-8">
        <section className="flex flex-col">
          <Input
            label="email"
            type="email"
            name="email"
            required
            onChange={handleEmailChange}
            onBlur={handleEmailBlur}
            // value={emailValue}
          />
          {emailHasError && (
            <p className="text-red-200">Please enter valid email</p>
          )}
        </section>
        <section className="flex flex-col">
          <Input
            label="password"
            type="password"
            name="password"
            required
            onChange={handlePasswordChange}
            onBlur={handlePasswordBlur}
            // value={passwordValue}
          />
          {passwordHasError && (
            <p className=" text-red-200">Please enter valid password</p>
          )}
        </section>
      </section>

      <p
        className="flex gap-4 mt-4 justify-end 
      "
      >
        <button type="reset"  className="py-2 px-4 font-thin capitalize text-lg tracking-wide rounded-[4px] hover:bg-[#0a3e3a]">
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
