import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import CardList from '../components/private-common/CardList';
import ProfileHeader from '../components/private-common/ProfileHeader';
import { withAuth } from '../lib/AuthProvider';

export class Dashboard extends Component {
    state = {
        user: {},
        img: "",
        showPending: false,
    }

    toggleHandler = () => {
        this.setState({ showPending: !this.state.showPending })
    }

    render() {
        return (
            <div>
                {/* <button onClick={this.props.logout}>Log out</button> */}
                <ProfileHeader />

                <p>Wed, 8 PM</p>
                <div>
                    <button onClick={() => this.toggleHandler()}>Collaborations</button>
                    <button onClick={() => this.toggleHandler()}>Pending</button>
                </div>

                <CardList showPending={this.state.showPending} />
            </div>
        )
    }
}

export default withAuth(Dashboard)
