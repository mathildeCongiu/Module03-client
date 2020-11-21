import React, { Component } from 'react'
import { withAuth } from "../lib/AuthProvider";
import { Link } from 'react-router-dom'
import ProductsList from '../components/private-common/ProductsList';
import ProfileHeader from '../components/private-common/ProfileHeader';


class BusinessDetail extends Component {
    render() {
        return (
            <div>
                <Link to="">Back</Link>
                <ProfileHeader /*user={inventeduserfromfunction}*//>
                
                <p>Description</p>

                <h3>PICK UP</h3>
                <h4>Adress</h4>
                <p>Lorem Ipsum, 19</p>
                <p>08015 BARCELONA</p>

                <h4>Phone number</h4>
                <p>654654654</p>

                <h4>Schedule</h4>
                <p>WED 20h</p>

                <h3>PRODUCTS</h3>
                <ProductsList />

                <button>Request partnership</button>
            </div>
        )
    }
}

export default withAuth(BusinessDetail)
