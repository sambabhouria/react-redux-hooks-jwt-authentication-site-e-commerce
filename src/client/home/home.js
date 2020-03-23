import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductList from "../product/product-list";
import NavBar from "../nav-bar/nav-bar";
import { ProductProvider } from "../context/context";
import Details from "../product/details";
import Cart from "../cart/cart";
import Default from "../default/default";

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
              <Route component={Default} />
            </Switch>
          </main>
        </div>
      </Router>
    </ProductProvider>
  );
}

export { Home };
