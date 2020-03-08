import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Signup extends Component {
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
    e.preventDefault();
    this.setState({ submitted: true });
    axios
      .post("/signup", {
        username: this.state.username,
        password: this.state.password
      })
      .then(data => {
        this.props.history.replace("/login");
      });
  };

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
              <span
                className="input-group-addon"
                style={{ fontSize: "20px", marginRight: "20px" }}
              >
                <i className="fa fa-user" aria-hidden="true"></i>
              </span>
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

              <span
                className="input-group-addon"
                style={{ fontSize: "20px", marginRight: "20px" }}
              >
                <i className="fa fa-key fa-fw" aria-hidden="true"></i>
              </span>
              <input
                placeholder="password"
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
