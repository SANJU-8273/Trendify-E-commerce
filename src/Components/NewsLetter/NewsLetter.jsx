import React from "react";
import "./NewsLetter.css";

const NewsLetter = () => {
  return (
    <section className="newsletter" aria-labelledby="newsletter-heading">
      <div className="newsletter-text">
        <h1 id="newsletter-heading">Get Exclusive Offers On Your Email</h1>
        <p>Subscribe to our newsletter and stay updated</p>
      </div>
      <form className="input-container" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="email" className="visually-hidden">Email Address</label>
        <input
          id="email"
          type="email"
          placeholder="Your Email Id"
          required
          aria-required="true"
        />
        <button type="submit">Subscribe</button>
      </form>
    </section>
  );
};

export default NewsLetter;
