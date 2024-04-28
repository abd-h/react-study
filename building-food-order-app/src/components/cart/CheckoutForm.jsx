import React, { useContext} from "react";
import { MealsCxt } from "../../store/MealsContext";
import InputCheckout from "./InputCheckout";

const CheckoutForm = ({totalMealPrice}) => {
  const { handleCheckout, handleClickCart, handleSubmitedOrders, meals } =
    useContext(MealsCxt);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const customerData = Object.fromEntries(formData.entries());

    const list = {
      items:meals,
      customer: customerData
    }
    
    
    console.log(customerData);
    handleSubmitedOrders(list);
  }
  
  return (
    <form onSubmit={handleSubmit} className="capitalize  bg-stone-200 w-full h-full p-4">
      <h2 className="tracking-wider font-bold text-base">Checkout</h2>

      <p className="font-thin text-sm my-4">Amount due: ${totalMealPrice} </p>

      <InputCheckout label={"Full Name"} placeholder={"Full Name"} id='name' />

      <InputCheckout label={"email address"} placeholder={"jdoe@example.com"} id='email' />

      <InputCheckout label={"street"} placeholder={"Carlyon Avenue"} id='street' />

      <div className="flex pb-4 w-1/2 gap-4">
        <InputCheckout
          className="w-full inline focus:text-sm px-1 py-[2px] rounded-sm placeholder:text-xs
          focus:outline-stone-500"
          label="Postal Code"
          placeholder= "W6 1UL" 
          id='postal-code' 
          
        />
        <InputCheckout
          className="w-full placeholder:text-xs focus:text-sm px-1 py-[2px] focus:outline-stone-500"
          label={"City"}
          placeholder={ "M" }
          id='city'
        />
      </div>

      <div className="flex gap-4 justify-end my-4">
        <button
          onClick={handleClickCart}
          className="hover:bg-stone-400 py-1 px-4 tracking-wider text-sm rounded-sm"
        >
          Close
        </button>
        <button
          className="bg-yellow-400 hover:bg-yellow-500 py-1 px-4 text-xs rounded-sm tracking-wider capitalize"
        >
          Submit order
        </button>
      </div>
    </form>
  );
};

export default CheckoutForm;
