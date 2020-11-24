import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import auth from "../lib/auth-service";
import ProductsList from "../components/private-common/ProductsList";
import Navbar from "../components/private-common/Navbar";
import { Link } from "react-router-dom";

class ProductsPage extends Component {
  state = {
    productsArr: [],
  };

  componentDidMount = () => {
    this.getUserData();
  };

  shouldComponentUpdate = async (nextProps, nextState) => {
    const newUser = await auth.me();

    if (newUser.products.length !== this.state.productsArr.length) {
      return true;
    }

    return false;
  };

  getUserData = async () => {
    const newUser = await auth.me();
    this.setState({
      productsArr: newUser.products,
    });
  };

  render() {
    // console.log(this.state.productsArr)
    const { user } = this.props;
    // console.log(user.products, "PRODUCTS")
    return (
      <div className="products-page">
        <h2>OUR PRODUCTS</h2>

        <ProductsList productsArr={this.state.productsArr} />

        <Link className="button button-create-product" to="/products/add">
          Create Product
        </Link>

        <Navbar />
      </div>
    );
  }
}

export default withAuth(ProductsPage);
