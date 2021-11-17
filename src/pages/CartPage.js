import React from "react";
import { useCart } from "../providers/CartProvider";
import "./CartPage.css";

function CartPage() {
  const { cart } = useCart();

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
                <div>{item.price * item.quantity}</div>
                <div className="btn-container">
                  <button>Add</button>
                  <button>{item.quantity}</button>
                  <button>remove</button>
                </div>
              </div>
            );
          })
        ) : (
          <p>cart is empty...!</p>
        )}
      </section>

      <section className="CartDetail">more detail</section>
    </main>
  );
}

export default CartPage;
