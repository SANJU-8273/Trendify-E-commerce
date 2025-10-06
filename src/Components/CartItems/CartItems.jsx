import React, { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContext";
import removeIcon from "../Assets/cart_cross_icon.png";

const CartItems = () => {
  const { getTotalCartAmount, all_product, cartItems, removeFromCart } =
    useContext(ShopContext);

  return (
    <section className="cart">
      <div className="cart__header">
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />

      {all_product.map((item) =>
        cartItems[item.id] > 0 ? (
          <div key={item.id} className="cart__item">
            <img src={item.image} alt={item.name} className="cart__item-img" />
            <p>{item.name}</p>
            <p>${item.new_price}</p>
            <div className="cart__qty">{cartItems[item.id]}</div>
            <p>${item.new_price * cartItems[item.id]}</p>
            <img
              src={removeIcon}
              alt="Remove"
              className="cart__remove-icon"
              onClick={() => removeFromCart(item.id)}
            />
          </div>
        ) : null
      )}

      <div className="cart__summary">
        <div className="cart__total">
          <h2>Cart Summary</h2>
          <div className="cart__summary-row">
            <span>Subtotal</span>
            <span>${getTotalCartAmount()}</span>
          </div>
          <div className="cart__summary-row">
            <span>Shipping</span>
            <span>Free</span>
          </div>
          <div className="cart__summary-row total">
            <strong>Total</strong>
            <strong>${getTotalCartAmount()}</strong>
          </div>
          <button className="cart__checkout-btn">Proceed to Checkout</button>
        </div>

        <div className="cart__promo">
          <p>Have a promo code?</p>
          <div className="cart__promo-box">
            <input type="text" placeholder="Enter promo code" />
            <button>Apply</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartItems;
