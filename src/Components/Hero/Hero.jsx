// src/components/Hero.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";
import heroImage from "../Assets/smiling-lady-model-short-blue-dress-hat-barfoot-white.png";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__content">
          <h1 className="hero__title">Unleash Your Unique Style</h1>
          <p className="hero__subtitle">
            From subtle elegance to bold expressions — discover fashion that speaks your language.
          </p>
          <Link to="/collections" className="hero__button">
            Explore Collection
          </Link>
        </div>

        <div className="hero__image-wrapper">
          <img
            src={heroImage}
            alt="Fashion model wearing blue dress"
            className="hero__image"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
