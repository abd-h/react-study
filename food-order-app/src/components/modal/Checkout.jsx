import React, { Fragment, useContext } from "react";
import useHttp from "../../hooks/useHttp";
import CartContext from "../../store/CartContext";
import UserProgressContext from "../../store/UserProgressContext";
import Button from "../../UI/Button";
import InputCheckout from "../../UI/InputCheckout";
import Modal from "./Modal";

import Error from '../Error';

const requestConfig = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
};

const Checkout = () => {
  const { cartTotal, items, clearCart } = useContext(CartContext);
  const { progress, hideCheckout } = useContext(UserProgressContext);

  const {
    data,
    error,
    isLoading: isSending,
    sendRequest,
    clearData,
  } = useHttp("http://localhost:3000/orders", requestConfig);

  const handleClose = () => {
    hideCheckout();
  };

  const handleFinish = () => {
    hideCheckout();
    clearCart();
    clearData()
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const fd = new FormData(e.target);
    const customerData = Object.fromEntries(fd.entries());
    console.log(customerData);

    sendRequest(
      JSON.stringify({
        order: {
          items,
          customer: customerData,
        },
      })
    );

    // fetch("http://localhost:3000/orders", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "Application/json",
    //   },
    //   body: JSON.stringify({
    //     order: {
    //       items,
    //       customer: customerData,
    //     },
    //   }),
    // });
  };

  let actions = (
    <Fragment>
      <Button
        className="text-[#1d1a16] focus:text-[#313c1d] hover:text-[#313c1d]"
        textOnly
        type="button"
        onClick={handleClose}
      >
        Okay
      </Button>
      <Button>Submit Order</Button>
    </Fragment>
  );

  if (isSending) {
    actions = <span>Sending order data...</span>;
  }

  console.log(error);

  if (data && !error) {
    return (
      <Modal open={progress === "checkout"} onClose={handleFinish}>
        <h2 className="capitalize text-green-700 font-bold">Success!</h2>
        <p>your order was submited successfully</p>
        <p>We'll send your oder details to your email</p>
        <p className="flex justify-end">
          <Button
            className="bg-yellow-500 font-bold  text-[#1d1a16] rounded-lg py-1 px-8 my-2 mx-4  focus:text-[#313c1d] hover:text-[#313c1d]"
            textOnly
            type="button"
            onClick={handleFinish}
          >
            Close
          </Button>
        </p>
      </Modal>
    );
  }

  return (
    <Modal open={progress === "checkout"} onClose={handleClose}>
      <form onSubmit={handleSubmit}>
        <h2>Checkout</h2>
        <p>Total amount Due: {cartTotal} </p>
        <InputCheckout
          label="Full Name"
          id="name"
          type="text"
          placeholder="John Doe "
        />
        <InputCheckout
          label="email"
          id="email"
          type="text"
          placeholder="johnD@example.com"
        />
        <InputCheckout
          label="Street"
          id="street"
          type="text"
          placeholder="Woodside Avenue"
        />
        <div className="flex justify-start gap-4">
          <InputCheckout
            label="Postal Code"
            id="postal-code"
            type="text"
            placeholder="UB5 1NL"
          />
          <InputCheckout
            label="City"
            id="city"
            name="city"
            type="text"
            placeholder="London Dairy"
          />
        </div>
        {error && <Error title="Something went wrong" message={error} />}
        <p className="flex justify-end gap-4">{actions}</p>
      </form>
    </Modal>
  );
};

export default Checkout;
