import React, { useState } from "react";
import Input from "./Input";

const bgLinearCss = "[linear-gradient(#d0d6d9,#b1b4ba)]";

const SignUpForm = () => {

    const [invalidPassword, setInvalidPassword] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault();
    const fd = new FormData(event.target);
    const acquisitionChannel = fd.getAll("acquisition");
    const terms = fd.getAll("terms");
    const data = Object.fromEntries(fd.entries());
    data.acquisition = acquisitionChannel;
      data.terms = terms;
      
      if (data.Password !== data["Confirm Password"]) {
          return setInvalidPassword(true);
    };
    console.log(data['Confirm Password']);
    // event.target.reset();
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
          className={`my-1 p-2 text-x w-full block max-w-[25rem] rounded-md bg-[#869999] focus:bg-[#869999] text-[#142020]`}
          required
        />
      </p>
      <section className="flex gap-4 border-white pb-6 border-b">
        <Input type="password" label="Password" name="password" />
        <Input type="password" label="Confirm Password" />
      </section>
      <section className="mt-4 mb-4 flex gap-4">
        <Input label="First Name" type="text" required={true} />
        <Input label="Last Name" type="text" required={true} />
      </section>
      <section>
        <label
          className={`w-[15rem] uppercase tracking-wide text-${bgLinearCss}`}
          htmlFor="phone"
        >
          What best describes your role ?
        </label>
        <select
          name="role"
          id="role"
          className={`my-1 p-2 text-x w-full block max-w-[25rem] rounded-md bg-[#869999] focus:bg-[#869999] text-[#142020]`}
        >
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
          <option value="employee">Employee</option>
          <option value="founder">Founder</option>
        </select>
      </section>
      <fieldset className="border-white border-2 my-4 p-4">
        <legend className="mx-4 px-1">How did you hear about us ?</legend>
        <p className=" mb-4 uppercase">
          <input
            type="checkbox"
            id="google"
            name="acquisition"
            value="google"
          />
          <label className="px-2" htmlFor="google">
            Google
          </label>
        </p>
        <p className=" mb-4 uppercase">
          <input
            type="checkbox"
            id="friend"
            name="acquisition"
            value="friend"
          />
          <label className="px-2" htmlFor="friend">
            refered by friend
          </label>
        </p>
        <p className=" mb-4 uppercase">
          <input type="checkbox" id="other" name="acquisition" value="other" />
          <label className="px-2" htmlFor="other">
            Other
          </label>
        </p>
      </fieldset>
      <p className=" mb-4 uppercase">
        <input
          type="checkbox"
          id="terms-and-conditions"
          name="terms"
          value="terms-and-conditions"
          required
        />
        <label className="px-2" htmlFor="terms-and-conditions">
          I agree terms and conditions.
        </label>
      </p>
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
      {invalidPassword && <p>Passwords do not match</p>}
    </form>
  );
};

export default SignUpForm;
