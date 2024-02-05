import AddItemToCartContext from "./component/AddItemToCartContext";
import Header from "./component/Header";
import Shop from "./component/Shop";
import "./index.css";

function App() {
  return (
    <AddItemToCartContext>
      <div>
        <Header />
        <Shop />
      </div>
    </AddItemToCartContext>
  );
}

export default App;
