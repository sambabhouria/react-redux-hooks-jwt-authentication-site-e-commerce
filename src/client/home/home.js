import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductList from "../product/product-list";
import NavBar from "../nav-bar/nav-bar";
import { ProductProvider } from "../context/context";
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
            </Switch>
          </main>
          <footer>I'm a 30px tall footer</footer>
        </div>
        {/* <div>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home1} />
            <Route exact path="/">
              <Home1 />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
          </Switch>
        </div> */}
      </Router>
    </ProductProvider>
  );
}

function Home1() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}

export { Home };
