import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./Cart.css";
import {
  incrementCartQuantity,
  decrementCartQuantity,
  removeItemFromCart,
} from "../../context/cartSlice";

const Cart = () => {
  const carts = useSelector((s) => s.cart.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let totalPrice = carts?.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  let cartItems = carts?.map((item) => (
    <div className="cart-card" key={item.id}>
      <img className="cart-img" src={item.images[0]} width={150} alt="" />
      <p className="cart-text">{item.title}</p>
      <b className="cart-text">{item.price * item.quantity} USD</b>
      <br />
      <div className="cart-box">
        <button
          disabled={item.quantity <= 1}
          onClick={() => dispatch(decrementCartQuantity(item))}
        >
          -
        </button>
        <span>{item.quantity}</span>
        <button onClick={() => dispatch(incrementCartQuantity(item))}>+</button>
      </div>
      <button onClick={() => dispatch(removeItemFromCart(item))}>delete</button>
    </div>
  ));
  return (
    <div className="container">
      {carts.length ? (
        <>
          <h2 style={{ textAlign: "center", marginBottom: "10px" }}>
            Jami : {totalPrice} USD
          </h2>
          <div>
            <div className="cart-cards">{cartItems}</div>
            <button className="cart-btn" onClick={() => navigate("/contact")}>
              Check Out
            </button>
          </div>
        </>
      ) : (
        <h2 style={{ textAlign: "center" }}>There is nothing in the cart</h2>
      )}
    </div>
  );
};

export default Cart;
