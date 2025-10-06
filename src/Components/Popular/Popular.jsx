import React from "react";
import "./Popular.css";
import data_product from "../Assets/data";
import Item from "../Item/Item";

const Popular = () => {
  return (
    <section className="popular">
      <h2 className="section-title">Popular in Women</h2>
      <div className="underline"></div>
      <div className="popular-grid">
        {data_product.map((item, idx) => (
          <Item
            key={idx}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </section>
  );
};

export default Popular;
