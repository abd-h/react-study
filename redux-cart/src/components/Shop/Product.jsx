import React from "react";
import ProductItems from "./ProductItems";

const DUMMY_DATA = [
  {
    id: "p1",
    price: 189,
    title: "Jacket",
    description: "Ted Baker no ordanery Joe",
  },
  {
    id: "p2",
    price: 159,
    title: "Blazer",
    description: "Performance formal Jacket",
  },
  {
    id: "p3",
    price: 209,
    title: "Sports Jacket",
    description: "Water repelent and crease risistant",
  },
];

const Product = () => {
  return (
    <section className="flex flex-col mx-auto w-full text-black m-4">
      <h2 className="text-white text-center uppercase font-bold text-xl tracking-wider">
        Buy Your favourite product{" "}
      </h2>
      <ul>
        {DUMMY_DATA.map(({ id, price, title, description }) => (
          <ProductItems
            key={ id }
            id={id}
            price={price}
            title={title}
            description={description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Product;
