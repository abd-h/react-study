import { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../test-store/auth-slice";


const Header = () => {
  const isAuth = useSelector(state => state.auth.authenticated);

  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(authActions.logout());
  }

  return (
    <Fragment>
      <nav className=" flex justify-around text-white bg-indigo-900   py-4 ">
        <h1 className="w-1/2 font-extrabold tracking-wider text-xl capitalize">
          Redux Auth
        </h1>

        {isAuth && (
          <ul className="  gap-8 flex list-none justify-between capitalize">
            <li>my Product</li>
            <li>My Sales</li>
            <li>
              <button onClick={handleLogout} className="w-full bg-yellow-600 py-1 px-4 rounded-[4px]">
                Logout
              </button>
            </li>
          </ul>
        )}
      </nav>
    </Fragment>
  );
};

export default Header;
