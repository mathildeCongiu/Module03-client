import React, { Component } from 'react'
import { withAuth } from "../lib/AuthProvider";
import ProductsList from '../components/private-common/ProductsList'

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
            <div>
                <h2>My Products</h2>

                <ProductsList productsArr={this.state.productsArr} />
            </div>
        )
    }
}

export default withAuth(ProductsPage)
