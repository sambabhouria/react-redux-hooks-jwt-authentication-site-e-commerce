import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductList from "../product/product-list";
import NavBar from "../nav-bar/nav-bar";
import { ProductProvider } from "../context/context";
import Details from "../product/details";
import Cart from "../cart/cart";
import "./home.css";

function Home() {
  return (
    <ProductProvider>
      <Router>
        <div className="wrapper">
          <header>
            <NavBar />
          </header>
          <main>
            <Switch>
              <Route exact path="/" component={ProductList} />
              <Route path="/details" component={Details} />
              <Route path="/cart" component={Cart} />
            </Switch>
          </main>
          <footer>I'm a 30px tall footer</footer>
        </div>
      </Router>
    </ProductProvider>
  );
}

export { Home };
