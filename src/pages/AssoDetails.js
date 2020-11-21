import React, { Component } from 'react'
import { withAuth } from "../lib/AuthProvider";
import { Link } from 'react-router-dom'
import ProfileHeader from '../components/private-common/ProfileHeader';


class AssoDetails extends Component {
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
            </div>
        )
    }
}

export default withAuth(AssoDetails)