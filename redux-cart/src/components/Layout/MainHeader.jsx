import CartButton from "../Cart/CartButton";

const MainHeader = () => {
  return (
    <div className="bg-[#242424] max-w[100%]">
      <header className="w-[80%] m-auto py-6 px-16 flex justify-between items-center">
        <h1 className="text-3xl text-[#fff] font-bold">ReduxCart</h1>
        <nav>
          <ul>
            <li>
              <CartButton />
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default MainHeader;
