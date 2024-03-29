import React, { Component } from "react";
import { withAuth } from "../../lib/AuthProvider";
import auth from "../../lib/auth-service";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";

class ProductsList extends Component {
  shouldComponentUpdate = async (nextProps, nextState) => {
    // console.log(nextProps, nextState);
    // console.log(this.props, this.state);

    const newUser = await auth.me();
    // console.log(newUser.products);
    if (newUser.products.length !== this.props.productsArr.length) {
      return true;
    }

    return false;
  };

  render() {
    // console.log(this.props.productsArr)
    const { user } = this.props
    return (
      <div className="products-list">
        <ul>
          {this.props.productsArr.map((element, index) => {
            return (
              <li key={index}>
              {user.relationship === "business" ? <Link className="link" to={ { pathname: `/products/edit/${element._id}`, state: element }}>
                  <ProductCard element={element} />
                </Link> : <ProductCard element={element} /> }
                
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default withAuth(ProductsList);
