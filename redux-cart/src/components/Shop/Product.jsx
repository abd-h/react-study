import React from "react";
import ProductItems from "./ProductItems";

const DUMMY_PRODUCTS = [
  { id: "p1", title: "Jacket", description: "Slim Fit", price: 189 },
  { id: "p2", title: "Trousers", description: "Slim Fit", price: 90 },
  { id: "p3", title: "Waistcoat", description: "Slim Fit", price: 110 },
];
const Product = () => {

  return (
    <section className="flex flex-col mx-auto w-full text-black m-4">
      <h2 className="text-white text-center uppercase font-bold text-xl tracking-wider">
        Buy Your favourite product{" "}
      </h2>
      <ul>
        {DUMMY_PRODUCTS.map((item) => (
          <ProductItems key={item.id} items={item} />
        ))}
      </ul>
    </section>
  );
};

export default Product;
