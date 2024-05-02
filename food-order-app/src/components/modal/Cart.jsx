import { useContext } from "react";
import CartContext from "../../store/CartContext";
import UserProgressContext from "../../store/UserProgressContext";
import Button from "../../UI/Button";
import Modal from "./Modal";
import { currencyFormmater } from "../../utility/formating";
import CartItem from "./CartItem";

const Cart = () => {
    const { items, addItem, removeItem, cartTotal } = useContext(CartContext);
    
  const { progress, hideCart, ShowCheckout } = useContext(UserProgressContext);


 
  const handleCloseCart = () => {
    hideCart();
  };
    const handleShowCheckout = () => { ShowCheckout('checkout') };

  return (
    <Modal open={progress === "cart"}>
      <h2>Basket Total</h2>
      <ul>
        {items.map((meal) => {
          return (
            <CartItem
              key={meal.id}
              name={meal.name}
              price={meal.price}
              quantity={meal.quantity}
              onDecrease={() => removeItem(meal.id)}
              onIncrease={() => addItem(meal)}
            />
          );
        })}
      </ul>
      <p>Total Due{cartTotal}</p>
      <p>
        <Button onClick={handleCloseCart} textOnly>
          Close
        </Button>
        {items.length > 0 && (<Button onClick={handleShowCheckout}>Check out </Button>)}
      </p>
    </Modal>
  );
};

export default Cart;
