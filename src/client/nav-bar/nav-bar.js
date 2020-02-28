import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";
import { userActions } from "../actions";

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: false
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.loggingIn !== this.props.loggingIn) {
      this.setState({
        isAuthenticated: this.props.loggingIn
      });
    }
  }

  signIn = () => {
    this.props.history.push("/login");
  };

  signOut = () => {
    // reset login status
    this.props.dispatch(userActions.logout());
    this.props.history.replace("/");
  };

  render() {
    const { loggingIn } = this.props;
    return (
      <nav className="navbar navbar-dark bg-primary fixed-top">
        <Link className="navbar-brand" to="/">
          Authent-Author-Secure
        </Link>
        {!loggingIn && (
          <button
            className="btn btn-dark"
            onClick={() => {
              this.signIn();
            }}
          >
            Log Out
          </button>
        )}
      </nav>
    );
  }
}

function mapStateToProps(state) {
  const { loggingIn } = state.authentication;
  return {
    loggingIn
  };
}

const enhance = compose(withRouter, connect(mapStateToProps));

export default enhance(NavBar);
