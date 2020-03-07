import React, { useState, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../modal";
import { userActions } from "../actions";
import "./login.css";

function Login() {
  const [inputs, setInputs] = useState({
    username: "",
    password: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { username, password } = inputs;
  const loggingIn = useSelector(state => state.authentication.loggingIn);

  // reset login status
  const alert = useSelector(state => state.alert);
  const dispatch = useDispatch();

  useEffect(() => {
    alert.message && setHidden(true);

    dispatch(userActions.logout());
  }, [dispatch, alert]);

  function handleChange(e) {
    const { name, value } = e.target;
    setInputs(inputs => ({ ...inputs, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // setHidden(true);
    setSubmitted(true);
    if (username && password) {
      dispatch(userActions.login(username, password));
    }
  }

  return (
    <Fragment>
      <div className="main-wrapper">
        {/* {alert.message && (
          <div className={`alert ${alert.type}`}>{alert.message}</div>
        )} */}
        {hidden ? (
          <Modal visible={hidden} closeModal={() => setHidden(false)} />
        ) : (
          <div className="box">
            <div className="box-header">
              <h1>Login</h1>
            </div>
            <form name="form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label style={{ marginRight: "20px" }}>Username</label>
                <input
                  type="text"
                  name="username"
                  value={username}
                  onChange={handleChange}
                  className={
                    "form-item" + (submitted && !username ? " is-invalid" : "")
                  }
                />
                {submitted && !username && (
                  <div className="invalid-feedback">Username is required</div>
                )}
              </div>

              <div className="form-group">
                <label style={{ marginRight: "20px" }}>Password</label>
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={handleChange}
                  className={
                    "form-item" + (submitted && !password ? " is-invalid" : "")
                  }
                />
                {submitted && !password && (
                  <div className="invalid-feedback">Password is required</div>
                )}
              </div>
              <div className="form-group">
                <button className="btn btn-primary" style={{ width: "100%" }}>
                  {loggingIn && (
                    <span className="spinner-border spinner-border-sm mr-1"></span>
                  )}
                  Login
                </button>
                <hr className="hr-row " />

                <Link className="link" to="/signup">
                  Don't have an account?{" "}
                  <span className="link-signup">Sign Up Here</span>
                </Link>
              </div>
            </form>
          </div>
        )}
      </div>
    </Fragment>
  );
}

export { Login };
