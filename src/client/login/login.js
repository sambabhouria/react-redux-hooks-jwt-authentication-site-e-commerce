import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
/* We want to import our 'AuthHelperMethods' component in order to send a login request */
//import AuthHelperMethods from "../authentication/auth-helper-methods";
import { Link } from "react-router-dom";
import "./login.css";
import Modal from "../modal";
import { userActions } from "../actions";

class Login extends Component {
  /* In order to utilize our authentication methods within the AuthService class, we want to instantiate a new object */
  // Auth = new AuthHelperMethods();

  state = {
    username: "",
    password: "",
    visible: false
  };

  /* Fired off every time the use enters something into the input fields */
  _handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleFormSubmit = e => {
    e.preventDefault();

    const { dispatch } = this.props;
    if (this.state.username && this.state.password) {
      dispatch(userActions.login(this.state.username, this.state.password));
    }
  };

  closeModal() {
    this.setState({
      visible: false
    });
  }

  // componentDidUpdate(nextProps) {
  //   const { loggedIn } = this.props;

  //   if (nextProps.loggedIn !== loggedIn) {
  //     if (nextProps.loggedIn === false) this.setState({ visible: !loggedIn });
  //   }
  // }

  render() {
    const { loggedIn, error } = this.props;
    console.log("TCL: Login -> render -> loggingIn,error", loggedIn, error);

    return (
      <Fragment>
        <div className="main-wrapper">
          <div className="box">
            <div className="box-header">
              <h1>Login</h1>
            </div>
            <form className="box-form">
              <input
                className="form-item"
                placeholder="Username"
                name="username"
                type="text"
                onChange={this._handleChange}
              />
              <input
                className="form-item"
                placeholder="Password"
                name="password"
                type="password"
                onChange={this._handleChange}
              />
              <button className="form-submit" onClick={this.handleFormSubmit}>
                Login
              </button>
            </form>
            <hr className="hr-row " />
            <Link className="link" to="/signup">
              Don't have an account?{" "}
              <span className="link-signup">Sign Up Here</span>
            </Link>
          </div>
          )}
        </div>
      </Fragment>
    );
  }
}

function mapStateToProps(state) {
  const { loggedIn, error } = state.authentication;
  return {
    loggedIn,
    error
  };
}

const connectedLogin = connect(mapStateToProps)(Login);
export { connectedLogin as Login };

//export default Login;
