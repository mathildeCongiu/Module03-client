import axios from "axios";
import React, { Component } from "react";
import { withAuth } from "../../lib/AuthProvider";

class ProfileHeader extends Component {
  state = {
    img: "",
  };

  componentDidMount = () => {
    const { user } = this.props;
    if (user.relationship === "business") {
      switch (user.type.name) {
        case "fishmonger":
          this.setState({
            img: "/img/cards/fishmonger-SC.jpg"
          });
          break;
        case "bakery":
          this.setState({
            img: "/img/cards/bakery-RK.jpg"
          });
          break;
        case "supermarket":
          this.setState({
            img: "/img/cards/supermarket-RM.jpg"
          });
          break;
        case "butchShop":
          this.setState({
            img: "/img/cards/butcher-AT.jpg"
          });
          break;
        case "restaurant":
          this.setState({
            img: "/img/cards/restaurant-MB.jpg"
          });
          break;
        case "grocery":
          this.setState({
            img: "/img/cards/grocery-GS.jpg"
          });
          break;
      } 
    } else {
      this.setState({
        img: "/img/cards/asso01-JM.jpg"
      })
    }
  };

  render() {
    const { selectedProfile } = this.props;
    return (
      <div className="profile-header">
        <img src={this.state.img} alt="Photo" />
        <img className="profile-logo" src={selectedProfile.logo} alt="Business Logo" />
        <h2>{selectedProfile.name}</h2>
      </div>
    );
  }
}

export default withAuth(ProfileHeader);
