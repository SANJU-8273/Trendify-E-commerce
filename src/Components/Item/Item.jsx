import React from "react";
import { Link } from "react-router-dom";
import "./Item.css";

const Item = ({ id, image, name, new_price, old_price }) => {
  return (
    <div className="item-card">
      <Link to={`/product/${id}`} className="item-image-link" onClick={() => window.scrollTo(0, 0)}>
        <div className="item-image-wrapper">
          <img src={image} alt={name} className="item-image" />
        </div>
      </Link>
      <div className="item-info">
        <h3 className="item-name">{name}</h3>
        <div className="item-prices">
          <span className="item-price-new">${new_price}</span>
          <span className="item-price-old">${old_price}</span>
        </div>
      </div>
    </div>
  );
};

export default Item;
