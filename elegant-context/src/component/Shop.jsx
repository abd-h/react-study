import { useContext } from "react";
import Product from "./Product";
import { AddItemsToCtx } from "./AddItemToCartContext";

const Shop = () => {
    const { DUMMY_PRODUCTS } = useContext(AddItemsToCtx);
    
  return (
    <section className="w-[70%] my-8 mx-auto">
      <h2 className="text-2xl text-[#a59b8b] uppercase font-bold my-4">
        Elegant Clothing for everyone
      </h2>
      <ul className="list-none m-0 p-0 grid grid-cols-[repeat(auto-fit,minmax(20rem,1fr))] gap-8">
        {DUMMY_PRODUCTS.map((product) => (
          <li key={product.id}>
            <Product {...product} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Shop;
