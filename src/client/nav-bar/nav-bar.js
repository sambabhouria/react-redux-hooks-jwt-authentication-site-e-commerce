import React, { Fragment } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../actions";
import { ProductConsumer } from "../context/context";

import logo from "./logo.svg";
import "./nav-bar.css";

function Navbar(props) {
  const loggedIn = useSelector((state) => state.authentication.loggedIn);
  const { username } = useSelector((state) => state.authentication.user);
  const dispatch = useDispatch();
  let history = useHistory();

  const signOut = () => {
    // reset login status
    dispatch(userActions.logout());
    history.push("/");
  };

  const goToCart = () => {
    history.push("/cart");
  };

  const goToHome = () => {
    history.push("/");
  };

  return (
    <header className="header">
      <ProductConsumer>
        {(value) => {
          const { cart } = value;
          let totalInCart = 0;
          if (cart.length > 0) {
            totalInCart = cart.reduce((total, obj) => total + obj.count, 0);
          }
          // var arr = [{ x: 1 }, { x: 2 }, { x: 4 }];
          // const val = arr.reduce(function (acc, obj) {
          //   return acc + obj.x;
          // }, 0);
          // [{ age: 5 }, { age: 2 }, { age: 8 }].reduce(
          //   (total, thing) => total + thing.age,
          //  0
          // );
          //
          return (
            <Fragment>
              <li
                onClick={() => {
                  goToHome();
                }}
                className="logo"
              >
                <img src={logo} alt="store" className="navbar-brand" />
              </li>

              <li
                onClick={() => {
                  goToHome();
                }}
                className="logo"
              >
                Products
              </li>
              <input className="menu-btn" type="checkbox" id="menu-btn" />
              <label className="menu-icon" htmlFor="menu-btn">
                <span className="navicon"></span>
              </label>
              <ul className="menu">
                <li>
                  <a href="#about">Contact Us</a>
                </li>
                <li
                  className="modal-header"
                  style={{ borderBottom: "none" }}
                  onClick={() => {
                    goToCart();
                  }}
                >
                  <span style={{ fontSize: "20px", color: "RED" }}>
                    {totalInCart > 0 ? totalInCart : totalInCart} &nbsp;
                  </span>
                  <span style={{ fontSize: "20px", color: "BLUE" }}>
                    <i className="fa fa-cart-plus" aria-hidden="true"></i>
                    &nbsp;My Cart
                  </span>
                </li>
                {username && (
                  <li className="modal-header" style={{ borderBottom: "none" }}>
                    <span style={{ fontSize: "20px", color: "Green" }}>
                      <i className="fas fa-user"></i>&nbsp;
                      {username}
                    </span>
                  </li>
                )}

                {loggedIn && (
                  <li
                    className="modal-header"
                    style={{ borderBottom: "none" }}
                    onClick={() => {
                      signOut();
                    }}
                  >
                    <span style={{ fontSize: "20px", color: "Tomato" }}>
                      Logout <i className="fas fa-lock"></i>
                    </span>
                  </li>
                )}
              </ul>
            </Fragment>
          );
        }}
      </ProductConsumer>
    </header>
  );
}

export default Navbar;
