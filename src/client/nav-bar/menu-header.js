import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { userActions } from "../actions";
import "./menu-header.css";

function MenuHeader(props) {
  const loggedIn = useSelector(state => state.authentication.loggedIn);
  const { username } = useSelector(state => state.authentication.user);
  const dispatch = useDispatch();
  let history = useHistory();

  const signOut = () => {
    // reset login status
    dispatch(userActions.logout());
    history.push("/");
  };

  return (
    <header className="header">
      <a href="/" className="logo">
        <span style={{ fontSize: "20px" }}>
          <i className="fa fa-home fa-fw" aria-hidden="true"></i>&nbsp; Home
        </span>
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
        {username && (
          <li className="modal-header">
            <span style={{ fontSize: "20px", color: "Green" }}>
              {username} <i className="fas fa-user"></i>
              <i className="fas fa-unlock"></i>
            </span>
          </li>
        )}

        {loggedIn && (
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
