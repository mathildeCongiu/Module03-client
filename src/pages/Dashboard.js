import React, { Component } from "react";
import { Link } from "react-router-dom";
import CardList from "../components/private-common/CardList";
import Navbar from "../components/private-common/Navbar";
import ProfileHeader from "../components/private-common/ProfileHeader";
import { withAuth } from "../lib/AuthProvider";

class Dashboard extends Component {
  state = {
    user: {},
    showPending: false,
  };

  toggleHandler = () => {
    this.setState({ showPending: !this.state.showPending });
  };

  render() {
    const { user } = this.props;
    console.log("user", user);
    return (
      <div className="dashboard">
        <ProfileHeader selectedProfile={user}/>

        {user.relationship === "business" ? <p className="dashboard-pickup-day">| {user.pickup.day} |</p> : null}

        <div className="toggle">
          <button className="toggle-collaborations" onClick={() => this.toggleHandler()}>COLLABORATIONS</button>
          <button className="toggle-pending" onClick={() => this.toggleHandler()}>PENDING</button>
        </div>

        {this.state.showPending ? <CardList result= {user.pendingPartnerships} showPending={this.state.showPending} /> : <CardList result= {user.partnerships} showPending={this.state.showPending} />}
   

        <Navbar />
      </div>
    );
  }
}

export default withAuth(Dashboard);
