import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import { Link } from "react-router-dom";
import businessFunc from "./../lib/business-service";

class EditProduct extends Component {
  state = {
    name: this.props.location.state.name,
    type: this.props.location.state.productType.name
  };

  handleFormSubmit = async (event) => {
    event.preventDefault();
    const { name, typeName } = this.state;
    // console.log(this.props.match)
    const { id } = this.props.match.params;

    await businessFunc.editProduct(name, typeName, id);
    this.props.history.goBack()
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleDeleteProduct =  async () => {
    const { id } = this.props.match.params;
    await businessFunc.deleteProduct(id);
    this.props.history.goBack()
  }
  render() {
    console.log(this.props.location.state)
    return (
      <div className="add-edit-product">
        <Link to="/products" className="back-button">
          <img src="/img/delete.png" alt="Back" />
        </Link>
        <form className="add-edit-form" onSubmit={this.handleFormSubmit}>
          <label>Name</label>
          <input 
           className="add-edit-input"
            type="text"
            name="name"
            value= {this.state.name}
            onChange={(e) => this.handleChange(e)}
          />

          <label>Type</label>
          <select className= "select-input" name="typeName" defaultValue= {this.state.type} onChange={(e) => this.handleChange(e) }>
            <option value="select">SELECT</option>
            <option value="can">Canned food </option>
            <option value="fresh">Fresh food</option>
          </select>
          <input type="submit" value="Edit Product" className="button add-edit-product-button"/>
        </form>
        <button className="button add-edit-product-button delete-button" onClick= {this.handleDeleteProduct}>Delete Product</button>
      </div>
    );
  }
}

export default withAuth(EditProduct);
