import React from "react";
import img from "../../assets/hero-img.png";
import "./Hero.css";

const Hero = () => {
  return (
    <div>
      <section className="hero">
        <div className="container">
          <div className="hero-style">
            <div className="hero-content">
              <div className="hero-text">
                <span className="hero-text1">Mobile</span>
                <span className="hero-text2">Backcover</span>
                <span className="hero-text3">Tempered Glass</span>
              </div>
              <button className="hero-btn">Shop all !</button>
            </div>
            <img className="hero-img" src={img} alt="hero-img" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
