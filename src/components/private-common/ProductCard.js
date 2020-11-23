import React, { Component } from 'react'
import { withAuth } from '../../lib/AuthProvider';


class ProductCard extends Component {
    render() {
        const {element} = this.props
        return (
            <div className="product-card">
                {element.typeName === "fresh" ? <img src="img/fresh.png" alt="Food"/> : <img src="img/dry.png" alt="Food"/>}
                <h3>{element.name}</h3>
            </div>
        )
    }
}

export default withAuth(ProductCard)
