import React from "react";
import { Link } from "react-router-dom";
import { useCart, useCartActions } from "../providers/CartProvider";
import "./CartPage.css";

function CartPage() {
  const { cart, total } = useCart();
  const dispatch = useCartActions();

  const incHandler = (item) => {
    dispatch({ type: "ADD_TO_CART", payload: item });
  };

  const decHandler = (item) => {
    dispatch({ type: "DEC_PRODUCT", payload: item });
  };

  return (
    <main className="cart-container">
      <section className="cartList">
        {cart.length ? (
          cart.map((item) => {
            return (
              <div className="cartItem" key={item.id}>
                <div className="cartImage">
                  <img src={item.image} alt={item.name} />
                </div>
                <div>{item.name}</div>
                <div>{item.price * item.quantity} $</div>
                <div className="btn-container">
                  <button className="IncBtn" onClick={() => incHandler(item)}>
                    +
                  </button>
                  <button>{item.quantity}</button>
                  <button className="DecBtn" onClick={() => decHandler(item)}>
                    -
                  </button>
                </div>
              </div>
            );
          })
        ) : (
          <p>cart is empty...!</p>
        )}
      </section>
      <CartSummery cart={cart} total={total} />
    </main>
  );
}

export default CartPage;

const CartSummery = ({ cart, total }) => {
  const netPrice = cart.length
    ? cart.reduce((acc, curr) => acc + curr.quantity * curr.offPrice, 0)
    : "0";
  return (
    <section className="CartDetail">
      <h4>Cart Summery</h4>
      <div>
        <p>orginal price : {total} $</p>
        <p>discount : {total - netPrice} $</p>
        <hr />
        <p>net price : {netPrice} $</p>
      </div>
      <Link to="/signup?redirect=checkout">
        <button
          className="btn btn-primary"
          style={{ width: "100%", padding: ".4rem .6rem", marginTop: "2rem" }}
        >
          checkout
        </button>
      </Link>
    </section>
  );
};
