import React, { Component } from "react";
import { Link } from "react-router-dom";
import CardList from "../components/private-common/CardList";
import Navbar from "../components/private-common/Navbar";
import ProfileHeader from "../components/private-common/ProfileHeader";
import { withAuth } from "../lib/AuthProvider";

class Dashboard extends Component {
  state = {
      showPending: false,
  }

  toggleHandler = () => {
    this.setState({ showPending: !this.state.showPending });
  };

  render() {
    const { user, logout, isLoggedin } = this.props;
    console.log("user", user);
    return (
      <div>
        <button onClick={logout}>Log out</button>
        <ProfileHeader />

        <p>Wed, 8 PM</p>
        <div>
          <button onClick={() => this.toggleHandler()}>Collaborations</button>
          <button onClick={() => this.toggleHandler()}>Pending</button>
        </div>

        <CardList showPending={this.state.showPending} />

        <Navbar />
      </div>
    );
  }
}

export default withAuth(Dashboard);
