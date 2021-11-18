import React from "react";
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
                  <button onClick={() => incHandler(item)}>Add</button>
                  <button>{item.quantity}</button>
                  <button onClick={() => decHandler(item)}>remove</button>
                </div>
              </div>
            );
          })
        ) : (
          <p>cart is empty...!</p>
        )}
      </section>

      <section className="CartDetail">Total Price : {total} $</section>
    </main>
  );
}

export default CartPage;
