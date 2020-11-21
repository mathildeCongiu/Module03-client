import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import { Link } from "react-router-dom";

class Others extends Component {
  render() {
    const { user, logout, isLoggedin } = this.props;
    return (
      <div>
        <Link to="/edit">Edit profile</Link>
        <Link to="/about-us">About us</Link>
        <Link to="/attributions">Attributions</Link>
        <button onClick={logout}>Log out</button>
        <button>Delete account</button>
      </div>
    );
  }
}

export default withAuth(Others);
