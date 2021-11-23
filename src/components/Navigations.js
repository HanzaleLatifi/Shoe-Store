import { NavLink, withRouter } from "react-router-dom";
import { useCart } from "../providers/CartProvider";
import "./Navigations.css";

function Navigations() {
  const { cart } = useCart();

  return (
    <header>
      <nav>
        <ul>
          <div>
            <li className="logo">Shoe Store</li>
          </div>
          <div>
            <li>
              <NavLink to="/" activeClassName="NavActive" exact>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" activeClassName="NavActive">
                About us
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" activeClassName="NavActive">
                contact us
              </NavLink>
            </li>
          </div>
          <div>
            <li className="badge-container">
              <NavLink to="/cart" activeClassName="NavActive">
                Cart
              </NavLink>
              <span>{cart.length}</span>
            </li>
            <li>
              <NavLink to="/signup"> Login/Signup </NavLink>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
}

export default withRouter(Navigations);
