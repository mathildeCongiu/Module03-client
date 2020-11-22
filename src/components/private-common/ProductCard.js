import React, { Component } from 'react'
import { withAuth } from '../../lib/AuthProvider';

class ProductCard extends Component {
    render() {
        return (
            <div className="product-card">
                <img src="img/fresh.png" alt="Food"/>
                <h3>Breads and similar</h3>
            </div>
        )
    }
}

export default withAuth(ProductCard)
