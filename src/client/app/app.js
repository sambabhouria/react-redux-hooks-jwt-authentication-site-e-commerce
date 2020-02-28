import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { userActions } from "../actions";
import { history } from "../helpers";
import { Login } from "../login";
import "./App.css";

/* Once the 'Authservice' and 'withAuth' componenets are created, import them into App.js */
import AuthHelperMethods from "../authentication/auth-helper-methods";
//Our higher order component
import WithAuth from "../authentication/with-auth";
import NavBar from "../nav-bar/nav-bar";

class App extends Component {
  state = {
    username: ""
  };
  /* Create a new instance of the 'AuthHelperMethods' compoenent*/
  Auth = new AuthHelperMethods();

  _handleLogout = () => {
    this.Auth.logout();
    this.props.history.replace("/login");
  };

  render() {
    const { user, users } = this.props;

    let name = null;
    if (this.props.confirm) {
      name = this.props.confirm.username;
    }
    return (
      <div className="App">
        <div className="main-page">
          <NavBar />

          <div className="bottom-section">
            <button onClick={this._handleLogout}>LOGOUT</button>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log("TCL: mapStateToProps -> state", state);
  const { authentication, alert } = state;

  return {
    loggingIn: authentication.loggingIn,
    alert
  };
}

//In order for this component to be protected, we must wrap it with what we call a 'Higher Order Component' or HOC.
//export default compose(connect(mapStateToProps, null), withAuth(App));

const connectedApp = connect(mapStateToProps)(compose(WithAuth(App)));
export { connectedApp as App };

//export default withAuth(App);
