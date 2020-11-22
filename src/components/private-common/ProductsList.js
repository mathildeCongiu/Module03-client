import React, { Component } from "react";
import { withAuth } from "../../lib/AuthProvider";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";

class ProductsList extends Component {
    state = {
        productsArr: [1, 2, 3, 4, 5]
    }

  render() {
    return (
      <div className="products-list">
        <ul> 
        {/* hemos cambiado state por props para el css */}
          {this.state.productsArr.map((element) => {
            return (
              <li>
                <ProductCard />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default withAuth(ProductsList);
