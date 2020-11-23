import React, { Component } from "react";
import { withAuth } from "../../lib/AuthProvider";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";

class ProductsList extends Component {


  render() {
    console.log(this.props.productsArr)
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
