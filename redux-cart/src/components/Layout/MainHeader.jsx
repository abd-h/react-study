import { useSelector } from "react-redux";
import CartButton from "../Cart/CartButton";

const MainHeader = () => {
  return (
    <header className="bg-[#242424] w[100%] m-auto py-6 px-16 flex justify-between items-center text-white">
      <h1 className="text-3xl font-bold">ReduxCart</h1>
      <nav>
        <ul>
          <li>
            <CartButton />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
