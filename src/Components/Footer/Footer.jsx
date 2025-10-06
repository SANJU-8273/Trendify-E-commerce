import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

import instagram_icon from "../Assets/instagram_icon.png";
import pintester_icon from "../Assets/pintester_icon.png";
import whatsapp_icon from "../Assets/whatsapp_icon.png";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
       <Link to="/" className="nav-logo">
        {/* 🟣 Stylish SVG Logo */}
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
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
          <img src={instagram_icon} alt="" />
        </div>
        <div className="footer-icons-container">
          <img src={pintester_icon} alt="" />
        </div>
        <div className="footer-icons-container">
          <img src={whatsapp_icon} alt="" />
        </div>
      </div>
      <div className="footer-copyright">
       
        
        <hr />
        <p>&copy; {new Date().getFullYear()} Trendify. All rights reserved.</p>
      
       
      </div>
    </div>
  );
};

export default Footer;
