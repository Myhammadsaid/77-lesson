import React from "react";
import "./Product.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../context/cartSlice";

const Product = ({ data, loading }) => {
  const dispatch = useDispatch();

  const products = data?.map((val) => (
    <div className="product-card" key={val.id}>
      <Link to={`/product/${val.id}`} key={val.id}>
        <img className="product-img" src={val.images[0]} alt="" />
      </Link>
      <h1 className="product-text">{val.title}</h1>
      <h3 className="product-text">{val.price}$</h3>
      <button className="product-btn" onClick={() => dispatch(addToCart(val))}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <circle cx="10.5" cy="19.5" r="1.5"></circle>
          <circle cx="17.5" cy="19.5" r="1.5"></circle>
          <path d="m14 13.99 4-5h-3v-4h-2v4h-3l4 5z"></path>
          <path d="M17.31 15h-6.64L6.18 4.23A2 2 0 0 0 4.33 3H2v2h2.33l4.75 11.38A1 1 0 0 0 10 17h8a1 1 0 0 0 .93-.64L21.76 9h-2.14z"></path>
        </svg>
      </button>
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
