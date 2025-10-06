import React from "react";
import "./Offers.css";
import offerImage from "../Assets/exclusive_image-removebg-preview.png";

const Offers = () => {
  return (
    <section className="offers">
      <div className="offers-left animate-fadein">
        <h1>Exclusive Deals Just for You</h1>
        <p>
          Unlock the best offers on our latest arrivals. Stylish, affordable,
          and handpicked just for you.
        </p>
        <button className="offers-btn">Grab the Deal</button>
      </div>

      <div className="offers-right animate-slidein">
        <img
          src={offerImage}
          alt="Special Offer"
          className="offers-img"
          loading="lazy"
          decoding="async"
        />
      </div>
    </section>
  );
};

export default Offers;
