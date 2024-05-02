import { createContext, useContext, useState } from "react";

const UserProgressContext = createContext({
  progress: "", // to show cart or checkout
  showCart: () => {},
  hideCart: () => {},
  ShowCheckout: () => {},
  hideCheckout: () => {},
});

export const UserProgressContextProvider = ({ children }) => {
  const [userProgress, setUserProgress] = useState("");
  const showCart = () => setUserProgress("cart");
  const hideCart = () => setUserProgress("");
  const ShowCheckout = () => setUserProgress("checkout");
  const hideCheckout = () => setUserProgress("");

  const userProssCtx = {
    progress: userProgress,
    showCart,
    hideCart,
    ShowCheckout,
    hideCheckout,
  };

  return (
    <UserProgressContext.Provider
      value={userProssCtx}
    >{children} </UserProgressContext.Provider>
  );
};

export default UserProgressContext;
