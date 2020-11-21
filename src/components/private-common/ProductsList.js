import React, { Component } from 'react'
import { withAuth } from '../../lib/AuthProvider';
import ProductCard from './ProductCard';
import { Link } from 'react-router-dom'


class ProductsList extends Component {
    render() {
        return (
            <div>
                <ul>
                    {this.props.productsArr.map( element => {
                        return (
                            <li>
                                <ProductCard />
                            </li>
                        )
                    })}
                </ul>
                <Link to="/products/add">Add product</Link>
            </div>
        )
    }
}

export default withAuth(ProductsList)
