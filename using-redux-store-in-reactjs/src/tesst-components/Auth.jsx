import { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";

import { authActions } from '../test-store/auth-slice';
const Auth = () => {
  const isAuth = useSelector(state => state.auth.authenticated);

  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(authActions.login());
  }
  
  

  return (
    <Fragment>
      {!isAuth && (
        <form
          onSubmit={handleLogin}
          className="w-[30rem] mx-auto my-12 felx flex-col bg-slate-300 rounded-md text-center shadow-sm "
        >
          <p className="uppercase items-center flex flex-col px-4 pt-2">
            <label className="mt-2 " htmlFor="email">
              Email
            </label>
            <input
              className="w-4/6 px-1 py-[2px] border-b-slate-700 border-x-1 placeholder:text-sm text-center rounded-sm"
              type="text"
              name="email"
              id="email"
              placeholder="jdoe@exmaple.com"
            />
          </p>
          <p className="uppercase my-2 items-center flex flex-col px-4">
            <label className="uppercase text-sm my-1" htmlFor="password">
              Password
            </label>
            <input
              className="w-4/6 px-1 py-[2px] rounded-sm"
              type="password"
              name="password"
            />
          </p>
          <button className="mb-4 bg-violet-700 py-1 px-4 rounded-[4px]">
            Login
          </button>
        </form>
      )}
    </Fragment>
  );
};

export default Auth;
