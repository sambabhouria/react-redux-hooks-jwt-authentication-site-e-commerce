import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
/* We want to import our 'AuthHelperMethods' component in order to send a login request */
import AuthHelperMethods from "../authentication/auth-helper-methods";
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

    /* 
      Here is where all the login logic will go. Upon clicking the login button,we would like to utilize
      a login method that will send our entered credentialsover to the server for verification. Once verified,
      it should store your token and send you to the protected route.
      */

    // this.Auth.login(this.state.username, this.state.password)
    //   .then(res => {
    //     console.log("valeur du res", res);
    //     if (res === false) {
    //       return alert("Sorry those credentials don't exist!");
    //     }
    //     this.props.history.push("/");
    //   })
    //   .catch(err => {
    //     console.log("valeur du res====> ", err);
    //     if (err === "Unauthorized" || err === "Internal Server Error") {
    //       this.setState({
    //         visible: true
    //       });
    //     }
    //   });

    /**
     *
     */
    const { dispatch } = this.props;
    if (this.state.username && this.state.password) {
      dispatch(userActions.login(this.state.username, this.state.password));
    }
  };

  // componentWillMount() {
  //   /* Here is a great place to redirect someone who is already logged in to the protected route */
  //   if (this.Auth.loggedIn()) this.props.history.replace("/");
  // }

  closeModal() {
    this.setState({
      visible: false
    });
  }

  render() {
    console.log("totototot");
    return (
      <Fragment>
        <div className="main-wrapper">
          <Modal
            visible={this.state.visible}
            closeModal={() => this.closeModal()}
          />

          {!this.state.visible && (
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
  const { loggingIn } = state.authentication;
  return {
    loggingIn
  };
}

const connectedLogin = connect(mapStateToProps)(Login);
export { connectedLogin as Login };

//export default Login;
