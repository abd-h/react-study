import React from "react";
import Input from "./Input";

const bgLinearCss = "[linear-gradient(#d0d6d9,#b1b4ba)]";

const SignUpForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-[90%] max-w-[50rem] my-12 mx-auto p-8 bg-[linear-gradient(180deg,#253c3c,#1d4949)] shadow-[0_0_16px_1px_rgba(0,0,0,0.5)] rounded-[8px]"
    >
      <h2 className="text-white font-sami-bold text-3xl my-4">
        Welcome on board!
      </h2>
      <p className="tracking-wider">
        We just need a little bit of data from you to get you started{" "}
        <span className="ml-2">🚀</span>
      </p>
      <p className=" flex-wrap flex flex-col my-4">
        <label
          htmlFor="email"
          className={`w-[15rem] uppercase tracking-wide text-${bgLinearCss}`}
        >
          Email
        </label>
        <input
          type="email"
          id="email2"
          name="email"
          className={`my-1 p-2 text-x w-full block max-w-[25rem] rounded-md bg-[#869999] text-[#142020]`}
        />
      </p>
      <section className="flex gap-4 border-white pb-6 border-b">
        <Input label="Password" type="password" />
        <Input type="password" label="Confirm Password" />
      </section>
    </form>
  );
};

export default SignUpForm;
