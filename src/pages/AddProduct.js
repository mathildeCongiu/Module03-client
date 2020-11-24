import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import auth from "../lib/auth-service";
import { Link } from "react-router-dom";
import businessFunc from "./../lib/business-service"

class AddProduct extends Component {
  state = {

  }

  handleFormSubmit = async (event) => {
    event.preventDefault();
    const { name, typeName } = this.state;
    // this.props.location.state.getUserData()
    await businessFunc.addNewProduct(name, typeName );
    
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="add-edit-product">
        <Link to="/products" className="back-button">
          <img src="/img/delete.png" alt="Back" />
        </Link>
        <form className="add-edit-form" onSubmit={this.handleFormSubmit}>
          <label>Name</label>
          <input type="text" name="name" onChange={(e) => this.handleChange(e) }/>

          <label>Type</label>
          <select name="typeName" onChange={(e) => this.handleChange(e) }>
            <option value="select">SELECT</option>
            <option value="can">Canned food</option>
            <option value="fresh">Fresh food</option>
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
