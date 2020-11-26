import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { withAuth } from "../../lib/AuthProvider";

class Navbar extends Component {
  render() {
    const { user, logout, isLoggedin } = this.props;
    return (
      <nav className="navbar">
        <NavLink className="link navbar-links" to="/dashboard" >
          <img src="/img/dashboard.png" alt="Dashboard" />
          <p>Dashboard</p>
        </NavLink>
        {user.relationship === "business" ? (
          <NavLink className="link navbar-links" to="/products" >
            <img src="/img/products.png" alt="Products" />
            <p>Products</p>
          </NavLink>
        ) : (
          <NavLink className="link navbar-links" to="/search" >
            <img src="/img/search.png" alt="Search" />
            <p>Search</p>
          </NavLink>
        )}

        <NavLink className="link navbar-links" to="/others" >
          <img src="/img/others.png" alt="Others" />
          <p>Others</p>
        </NavLink>
      </nav>
    );
  }
}

export default withAuth(Navbar);
