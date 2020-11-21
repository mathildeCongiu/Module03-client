import React, { Component } from 'react'
import { withAuth } from "../lib/AuthProvider";
import { Link } from 'react-router-dom'

class EditProduct extends Component {
    render() {
        return (
            <div>
                <Link><img src="" alt="Back"/></Link>
                <form>
                    <label>Name</label>
                    <input type="text" name="name" placeholder="TO DEFINE" />

                    <label>Type</label>
                    <select name="productType" >
                        <option value="fresh">Fresh food</option>
                        <option value="can">Canned food</option>
                    </select>
                    <input type="submit" value="Edit Product"/>
                </form>
            </div>
        )
    }
}

export default withAuth(EditProduct)
