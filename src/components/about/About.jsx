import React from "react";
import img from "../../assets/about-img.png";
import logo from "../../assets/box.png";
import "./About.css";

const About = () => {
  return (
    <div>
      <section className="about">
        <div className="container">
          <img src={logo} alt="logo" className="box-logo" />
          <p className="about-title">about us</p>
          <p className="about-text">
            If you’re looking for a Premium Quality Tempered Glass or Back-cover
            for your Device
          </p>
          <p className="about-par">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. 
          </p>
          <img className="about-img" src={img} alt="about-img" />
        </div>
      </section>
    </div>
  );
};

export default About;
