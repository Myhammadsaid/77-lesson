import React from "react";
import img from "../../assets/phone.png";
import "./Shop.css";

const Shop = () => {
  return (
    <div>
      <section className="shop">
        <div className="container">
          <div className="shop-style">
            <div className="shop-content">
              <p className="shop-text">
                Shop Premium Tempered Glass in wholesale Price !
              </p>
              <p className="shop-par">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. 
                <br /> LKR : 299
              </p>
              <button className="shop-btn">Shop Tempered Glass </button>
            </div>
            <img src={img} alt="phone-img" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop;
