import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import { Link } from "react-router-dom";

class AddProduct extends Component {
  render() {
    return (
      <div className="add-edit-product">
        <Link to="/products" className="back-button">
          <img src="/img/delete.png" alt="Back" />
        </Link>
        <form className="add-edit-form">
          <label>Name</label>
          <input type="text" name="name" />

          <label>Type</label>
          <select name="productType">
            <option value="fresh">Fresh food</option>
            <option value="can">Canned food</option>
          </select>
          <input
            className="button add-edit-product-button"
            type="submit"
            value="Add Product"
          />
        </form>
      </div>
    );
  }
}

export default withAuth(AddProduct);
