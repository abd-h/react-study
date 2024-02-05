import React, { useContext } from "react";
import { AddItemsToCtx } from "./AddItemToCartContext";

//CSS for cart buttons
const cartItemsActionsCss = `
  bg-transparent border-none rounded-[5px] text-[#201e1a] cursor-pointer text-[1.1rem] hover:bg-[#f5b744]
`;

const Cart = () => {
  const { shoppingCart, handleUpdateCartItemQuantity } =
    useContext(AddItemsToCtx);

  const { items } = shoppingCart;

  const totalPrice = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const formattedTotalPrice = `$${totalPrice.toFixed(2)}`;

  return (
    <section className="my-4 mx-12">
      {items.length === 0 && <p>No items in cart</p>}
      {items.length > 0 && (
        <ul className="list-none my-4 mx-0 p-0 flex flex-col gap-2">
          {items.map((item) => {
            const formatedPrice = `$${item.price.toFixed(2)}`;

            return (
              <li
                className="flex justify-between items-center py-2 px-4 bg-[#fbd392] rounded-md text-[0.9rem] "
                key={item.id}
              >
                <div>
                  <span>{item.name} </span>
                  <span>{formatedPrice} </span>
                </div>
                <div className="text-base flex gap-2 items-center">
                  <button
                    onClick={() => handleUpdateCartItemQuantity(item.id, -1)}
                    className={cartItemsActionsCss}
                  >
                    -
                  </button>
                  <span>{item.quantity} </span>
                  <button
                    onClick={() => handleUpdateCartItemQuantity(item.id, 1)}
                    className={cartItemsActionsCss}
                  >
                    +
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      )}
      <p className="px-4">
        Cart Total: <strong>{formattedTotalPrice} </strong>
      </p>
    </section>
  );
};

export default Cart;
