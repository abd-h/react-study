import React from "react";
import ProductItem from "./ProductItem";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    price: 289,
    title: "Tail jacket",
    description: "Morning Tail Jacket",
  },
  {
    id: "p2",
    price: 189,
    title: "trouser",
    description: "Morning grey stripe trousers",
  },
  {
    id: "p3",
    price: 59,
    title: "shirt",
    description: "Tailor fit",
  },
  {
    id: "p4",
    price: 159,
    title: "top hat",
    description: "morning wear top hat",
  },
];

const Product = () => {
  return (
    <section className="mb-4">
      <h2 className="text-center my-8 font-extrabold text-[#fff] text-3xl uppercase">
        ROYAL ASCOT
      </h2>
      <ul className="mb-4">
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            description={product.description}
            price={product.price}
            items={product}
          />
        ))}
      </ul>
    </section>
  );
};

export default Product;
