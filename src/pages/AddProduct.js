import React, { Component } from 'react'
import { withAuth } from "../lib/AuthProvider";
import { Link } from 'react-router-dom'

class AddProduct extends Component {
    render() {
        return (
            <div>
                <Link><img src="" alt="Back"/></Link>
                <form>
                    <label>Name</label>
                    <input type="text" name="name" />

                    <label>Type</label>
                    <select name="productType" >
                        <option value="fresh">Fresh food</option>
                        <option value="can">Canned food</option>
                    </select>
                    <input type="submit" value="Add Product"/>
                </form>
            </div>
        )
    }
}

export default withAuth(AddProduct)
