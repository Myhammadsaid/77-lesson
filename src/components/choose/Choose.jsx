import React from "react";
import box from "../../assets/box.png";
import choos1 from "../../assets/choose-img1.png";
import choos2 from "../../assets/choose-img2.png";
import choos3 from "../../assets/choose-img3.png";
import "./Choose.css";

const Choose = () => {
  return (
    <div>
      <section className="choose">
        <div className="container">
          <img className="box-logo" src={box} alt="box" />
          <p className="choose-title">Why Choose US</p>
          <div className="choose-cards">
            <div className="choose-card">
              <img src={choos1} alt="choose-img" />
              <p className="choose-text">Fast Delivery</p>
              <p className="choose-par">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="choose-card">
              <img src={choos2} alt="choose-img" />
              <p className="choose-text">Cheap Price</p>
              <p className="choose-par">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="choose-card">
              <img src={choos3} alt="choose-img" />
              <p className="choose-text">Premium Quality</p>
              <p className="choose-par">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Choose;
