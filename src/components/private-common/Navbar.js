import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../../lib/AuthProvider";

class Navbar extends Component {
  render() {
    const { user, logout, isLoggedin } = this.props;
    return (
      <nav className="navbar">
        <Link to="/dashboard">
          <img src="/img/dashboard.png" alt="Dashboard" />
          <p>Dashboard</p>
        </Link>
        {user.relationship === "business" ? (
          <Link to="/products">
            <img src="/img/products.png" alt="Products" />
            <p>Products</p>
          </Link>
        ) : (
          <Link to="/search">
            <img src="/img/search.png" alt="Search" />
            <p>Search</p>
          </Link>
        )}

        <Link to="/others">
          <img src="/img/others.png" alt="Others" />
          <p>Others</p>
        </Link>
      </nav>
    );
  }
}

export default withAuth(Navbar);
