import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CartPage from "./pages/CartPage";
import HomePage from "./pages/HomePage";
import Layout from "./layout/Layout";
import CartProvider from "./providers/CartProvider";

function App() {
  return (
    <Router>
      <CartProvider>
        <Layout>
          <Switch>
            <Route path="/cart" component={CartPage} />
            <Route path="/" exact={true} component={HomePage} />
          </Switch>
        </Layout>
      </CartProvider>
    </Router>
  );
}

export default App;
