import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import { Link } from "react-router-dom";
import Navbar from "../components/private-common/Navbar";

class Others extends Component {
  render() {
    const { user, logout, isLoggedin, deleteUser } = this.props;
    return (
      <div className="others-page">
        {/* <Link className= "link others-link" to="/edit">EDIT PROFILE</Link> */}
        <Link className="link others-link" to="/about-us">
          ABOUT US
        </Link>
        <Link className="link others-link" to="/attributions">
          ATTRIBUTIONS
        </Link>
        <button className="button-others link others-link" onClick={logout}>
          LOG OUT
        </button>
        <hr />
        <button
          className="button-others link others-link delete-link"
          onClick={deleteUser}
        >
          DELETE ACCOUNT
        </button>
        <Navbar />
      </div>
    );
  }
}

export default withAuth(Others);
