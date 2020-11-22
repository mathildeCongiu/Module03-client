import React, { Component } from 'react'
import { withAuth } from "../lib/AuthProvider";
import ProductsList from '../components/private-common/ProductsList'
import Navbar from '../components/private-common/Navbar';
import { Link } from 'react-router-dom';

class ProductsPage extends Component {
    state = {
        productsArr: [],
    }

    componentDidMount = () => {
        const { user } = this.props

        this.setState({
            productsArr: user.products
        })
    }

    render() {
        return (
            <div className="products-page">
                <h2>OUR PRODUCTS</h2>

                <ProductsList productsArr={this.state.productsArr} />

                <Link className="button button-create-product" to="/products/add">Create Product</Link>

                <Navbar />
            </div>
        )
    }
}

export default withAuth(ProductsPage)
