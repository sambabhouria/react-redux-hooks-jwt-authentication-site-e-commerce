import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { userActions } from "../actions";
import logo from "./logo.svg";
import "./nav-bar.css";

function Navbar(props) {
  const loggedIn = useSelector(state => state.authentication.loggedIn);
  const { username } = useSelector(state => state.authentication.user);
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

  return (
    <header className="header">
      <Link to="/" className="logo">
        <img src={logo} alt="store" className="navbar-brand" />
      </Link>

      <a href="/" className="logo">
        Products
      </a>
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
          <span style={{ fontSize: "20px", color: "BLUE" }}>
            <i className="fa fa-cart-plus" aria-hidden="true"></i>&nbsp;My Cart
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
    </header>
  );
}

export default Navbar;
