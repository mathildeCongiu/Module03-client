import axios from 'axios'
import React, { Component } from 'react'
import { withAuth } from '../../lib/AuthProvider';

class ProfileHeader extends Component {
    state = {
        img: "/img/cards/grocery-GS.jpg",
    }

    /*  //Test for USER get info
    componentDidMount = () => {
        try {
            const user = this.props.getUserInfo()
            console.log("function getUser", user)
            // return this.setState({ user: getUser.data })
            // console.log("user", this.state.user)
        } catch (error) {
            console.log(error)
        }
    }
    */

    render() {
        return (
            <div>
                <img src={this.state.img} alt="Business Type"/>
                <img src="/img/upload.png" alt="Business Logo"/>
                <h2>Business NAME</h2>
                
            </div>
        )
    }
}

export default withAuth(ProfileHeader)
