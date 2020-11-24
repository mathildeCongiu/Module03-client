import React, { Component } from "react";
import { withAuth } from "../../lib/AuthProvider";
import auth from "../../lib/auth-service";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";

class ProductsList extends Component {
  shouldComponentUpdate = async (nextProps, nextState) => {
    // console.log(nextProps, nextState);
    // console.log(this.props, this.state);

    const newUser = await auth.me()
console.log(newUser.products)
    if(newUser.products.length !== this.props.productsArr.length) {
        return true
    }

    return false
  }

  render() {
    // console.log(this.props.productsArr)
    return (
      <div className="products-list">
        <ul> 
          {this.props.productsArr.map((element, index) => {
            return (
              <li key= {index}>
                <Link to={`/products/edit/${element._id}`}><ProductCard element= {element}/></Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default withAuth(ProductsList);
