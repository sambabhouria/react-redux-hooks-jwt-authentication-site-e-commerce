import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { userActions } from "../actions";
//import auth0Client from "../Auth";
import "./menu-header.css";

function MenuHeader(props) {
  const loggingIn = useSelector(state => state.authentication.loggingIn);
  const dispatch = useDispatch();
  let history = useHistory();

  const signOut = () => {
    // reset login status
    dispatch(userActions.logout());
    history.replace("/");
  };

  return (
    <header className="header">
      <a href="/" className="logo">
        Home
      </a>
      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-icon" htmlFor="menu-btn">
        <span className="navicon"></span>
      </label>
      <ul className="menu">
        <li>
          <a href="#work">Our Work</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#careers">Careers</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>

        {!loggingIn && (
          <li
            className="modal-header"
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

export default MenuHeader;
