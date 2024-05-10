import { Fragment } from 'react'
import { useSelector, useDispatch } from 'react-redux';

const UserProfile = () => {
  const isAuth = useSelector(state => state.auth.isAuthenticated);
  const dispatch = useDispatch();


  return (
    <Fragment>
      {isAuth && (
        <main className="my-20 mx-auto shadow-[0_1px_8px_rgba(0,0,0,0.2)] w-[40rem] rounded-lg p-4 bg-[#f4f0fa] text-center ">
          My User Profile
        </main>
      )}
    </Fragment>
  );
}

export default UserProfile