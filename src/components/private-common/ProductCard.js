import React, { Component } from 'react'
import { withAuth } from '../../lib/AuthProvider';


class ProductCard extends Component {
    render() {
        const {element} = this.props
        // console.log(element)
        return (
            <div className="product-card">
                {element.productType.name === "fresh" ? <img src="/img/fresh.png" alt="Food"/> : <img src="/img/dry.png" alt="Food"/>}
                <h3>{element.name}</h3>
            </div>
        )
    }
}

export default withAuth(ProductCard)
