import React, { Component } from "react";
//import AuthHelperMethods from "./authentication/auth-helper-methods";

import axios from "axios";
import { Link } from "react-router-dom";

class Signup extends Component {
  //Auth = new AuthHelperMethods();
  state = {
    username: "",
    password: "",
    submitted: false
  };

  _handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleFormSubmit = e => {
    alert("totototo");
    e.preventDefault();
    this.setState({ submitted: true });
    axios
      .post("/signup", {
        username: this.state.username,
        password: this.state.password
      })
      .then(data => {
        console.log("TCL: Signup -> data", data);
        this.props.history.replace("/login");
      });
  };

  componentDidMount() {
    // console.log(this.Auth.loggedIn());
    // if (this.Auth.loggedIn()) {
    //   this.props.history.push("/dashboard");
    // }
  }

  render() {
    return (
      <React.Fragment>
        <div className="main-wrapper">
          <div className="box">
            <div className="box-header">
              <h1>Sign Up</h1>
            </div>
            <form
              name="form"
              className="box-form"
              onSubmit={this.handleFormSubmit}
            >
              <input
                placeholder="Username"
                value={this.state.username}
                name="username"
                type="text"
                onChange={this._handleChange}
                className={
                  "form-item" +
                  (this.state.submitted && !this.state.username
                    ? " is-invalid"
                    : "")
                }
              />
              {this.state.submitted && !this.state.username && (
                <div className="invalid-feedback">Username is required</div>
              )}
              <input
                placeholder="Password"
                value={this.state.password}
                name="password"
                type="password"
                onChange={this._handleChange}
                className={
                  "form-item" +
                  (this.state.submitted && !this.state.password
                    ? " is-invalid"
                    : "")
                }
              />
              {this.state.submitted && !this.state.password && (
                <div className="invalid-feedback">Password is required</div>
              )}

              <button className="" style={{ width: "100%" }}>
                Sign Up
              </button>
            </form>
            <hr className="hr-row " />
            <Link className="link" to="/login">
              Already have an account?{" "}
              <span className="link-signup">Login</span>
            </Link>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export { Signup };
