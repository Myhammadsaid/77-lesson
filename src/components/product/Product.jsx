import React from "react";
import "./Product.css";
import { Link } from "react-router-dom";

const Product = ({ data, loading }) => {
  const products = data?.map((val) => (
    <div className="product-card" key={val.id}>
      <Link to={`/product/${val.id}`} key={val.id}>
        <img className="product-img" src={val.images[0]} alt="" />
      </Link>
      <h1 className="product-text">{val.title}</h1>
      <h3 className="product-text">{val.price}$</h3>
    </div>
  ));
  return (
    <div>
      <section className="product">
        <div className="container">
          {loading ? <h1>Loading...</h1> : <></>}
          <div className="product-cards">{products}</div>
        </div>
      </section>
    </div>
  );
};

export default Product;
