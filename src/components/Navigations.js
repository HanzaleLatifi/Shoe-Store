import { NavLink, withRouter } from "react-router-dom"

import './Navigations.css'
function Navigations() {
  return (
    <header >
      <nav>
        <ul>
          <li>
            <NavLink to="/" activeClassName="NavActive" exact >Home</NavLink>
          </li>
          <li>
            <NavLink to="/cart" activeClassName="NavActive" >Cart</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default withRouter(Navigations);
