import { Link } from "react-router-dom";
import { useAuth } from "../../providers/AuthProvider";
import { useCart } from "../../providers/CartProvider";
import "./Checkout.css";
function Checkout() {
  const userData = useAuth();
  const { cart } = useCart();
  console.log(cart, userData);

  if (cart.length === 0)
    return (
      <div className="cart-empty ">
        <p>cart is empty</p>
        <Link className="btn btn-primary" to="/">
          GO TO SHOPPING
        </Link>
      </div>
    );
  return (
    <section className="checkout-container">
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        <div className="userData">
          <p>{userData.name}</p>
          <p>{userData.email}</p>
          <p>{userData.phoneNumber}</p>
        </div>
        <div className="productData">
          <p>{cart[0].name}</p>
          <p>count :{cart[0].quantity}</p>
          <p>price : {cart[0].offPrice} $</p>
        </div>
      </div>

      <button className="btn btn-primary btn-buy">BUY</button>
    </section>
  );
}

export default Checkout;
