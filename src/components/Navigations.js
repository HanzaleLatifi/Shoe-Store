import { NavLink, withRouter } from "react-router-dom";
import { useCart } from "../providers/CartProvider";
import "./Navigations.css";

function Navigations() {
  const { cart } = useCart();

  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/" activeClassName="NavActive" exact>
              Home
            </NavLink>
          </li>
          <li className="badge-container">
            <NavLink to="/cart" activeClassName="NavActive">
              Cart
            </NavLink>
            <span>{cart.length}</span>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default withRouter(Navigations);
