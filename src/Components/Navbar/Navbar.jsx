import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import cart_icon from "../Assets/cart_icon.png";
import { ShopContext } from "../../Context/ShopContext";
import { useUser, SignInButton, UserButton } from "@clerk/clerk-react";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);

  const { isSignedIn, user } = useUser();

  return (
    <header className="navbar">
      <Link to="/" className="nav-logo">
        <svg
          width="36"
          height="38"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="50" cy="50" r="48" stroke="#ff4d4d" strokeWidth="6" />
          <path d="M30 55 L50 30 L70 55 L50 80 Z" fill="#ff4d4d" />
        </svg>
        <p>Trendify</p>
      </Link>

      <nav>
        <ul className="nav-menu">
          {["shop", "mens", "womens", "kids"].map((item) => (
            <li
              key={item}
              className={menu === item ? "active" : ""}
              onClick={() => setMenu(item)}
            >
              <Link to={item === "shop" ? "/" : `/${item}`}>
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="nav-login-cart" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        {isSignedIn ? (
          <>
            <span style={{ color: "#333", fontWeight: "600" }}>
              Hello, {user?.firstName || "User"}
            </span>
            <UserButton />
          </>
        ) : (
          <SignInButton>
            <button className="login-btn">Login</button>
          </SignInButton>
        )}

        <Link to="/cart" className="cart-icon">
          <img src={cart_icon} alt="Cart" />
          <span className="nav-cart-count">{getTotalCartItems()}</span>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
