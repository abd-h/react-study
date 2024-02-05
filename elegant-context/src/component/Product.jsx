import React, { useContext } from "react";

import { AddItemsToCtx } from "./AddItemToCartContext";

export default function Product({ id, image, title, price, description }) {
  const { handleAddItemsToCart } = useContext(AddItemsToCtx);

  return (
    <article className="h-full bg-[#5f4e33] rounded-[6px] flex flex-col shadow-[0_0_10px_rgba(0,0,0,0.2)] gap-8 ">
      <img className="w-full rounded-md" src={image} alt="" />
      <section className="flex-[1] pt-0 pb-4 pl-2 pr-4 flex flex-col justify-between">
        <h2 className="text-lg text-[#fbd392] mb-[0.15rem] ">{title}</h2>
        <p className="text-[1rem] text-[#d1b68b] m-0 ">${price} </p>
        <p className="py-4">{description} </p>
        <p className="text-right">
          <button
            onClick={() => handleAddItemsToCart(id)}
            type="submit"
            className="bg-[#f4b115] border-none rounded-[5px] py-2 px-4 text-[#201e1a] text-[1rem] cursor-pointer hover:bg-[#f5b744] "
          >
            Add To Cart
          </button>
        </p>
      </section>
    </article>
  );
}
