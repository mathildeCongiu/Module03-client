import React, { Component } from "react";
import { Link } from "react-router-dom";
import CardList from "../components/private-common/CardList";
import Navbar from "../components/private-common/Navbar";
import ProfileHeader from "../components/private-common/ProfileHeader";
import { withAuth } from "../lib/AuthProvider";
import auth from "../lib/auth-service";

class Dashboard extends Component {
  state = {
    userUpdated: {},
    showPending: false,
  };

  componentDidMount = () => {
    this.getUserData();
  };

  getUserData = async () => {
    const newUser = await auth.me();
    this.setState({
      userUpdated: newUser,
    });
  };

  toggleHandlerCollab = () => {
    this.setState({ showPending: false });

  };

  toggleHandlerPending = () => {
    this.setState({ showPending: true });
  };

  // toggleHandler = () => {
  //   this.setState({ showPending: !this.state.showPending });
  // };

  renderLists = () => {
    if (this.state.userUpdated.name) {
      return (
      this.state.showPending ? (
          <CardList
            result={this.state.userUpdated.pendingPartnerships}
            showPending={this.state.showPending}
          />
        ) : (
          <CardList
            result={this.state.userUpdated.partnerships}
            showPending={this.state.showPending}
          />
        ))
    }

  }

  render() {
    const { userUpdated } = this.state;
    console.log("userUpdated", userUpdated);
    return (
      <div className="dashboard">
        {userUpdated.name ? 
        <ProfileHeader selectedProfile={userUpdated} /> : null}
        {userUpdated.relationship === "business" ? (
          <p className="dashboard-pickup-day">| {userUpdated.pickup.day} {userUpdated.pickup.hour} |</p>
        ) : null}

              <div className="button-and-filtered-list">
        <div className="toggle">
          <button
          // { this.state.showPending ? return (className="toggle-collaborations") : return (className="toggle-collaborations toggle-active") }
            className="toggle-collaborations"
            style={this.state.showPending ? {backgroundColor:"white", color: "grey"} : null }
            onClick={() => this.toggleHandlerCollab()}
          >
            COLLABORATIONS
          </button>
          <button
            className="toggle-pending"
            style={!this.state.showPending ? {backgroundColor:"white", color: "grey"} : null }
            onClick={() => this.toggleHandlerPending()}
          >
            PENDING
          </button>
         
          
    
        </div>

        {/* {this.state.showPending ? (
          <CardList
            result={this.state.userUpdated.pendingPartnerships}
            showPending={this.state.showPending}
          />
        ) : (
          <CardList
            result={this.state.userUpdated.partnerships}
            showPending={this.state.showPending}
          />
        )} */}

        {this.renderLists()}

          </div>
        {/* {this.state.userUpdated.partnerships && !userUpdated.partnerships ? (<p>You don’t have partnership yet. Browse your first one <span>NOW!</span></p>) : null }  */}
        <Navbar />
      </div>
    );
  }
}

export default withAuth(Dashboard);
