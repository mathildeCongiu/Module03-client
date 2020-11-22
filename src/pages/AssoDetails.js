import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import { Link } from "react-router-dom";
import ProfileHeader from "../components/private-common/ProfileHeader";

class AssoDetails extends Component {
  render() {
    return (
      <div className="details-page">
        <Link className="back-button-details" to="">
          <img src="/img/delete.png" alt="Back" />
        </Link>
        <ProfileHeader /*user={inventeduserfromfunction}*/ />

        <div className="details-info">
          <p>Description</p>

          <h3>PICK UP</h3>
          <h4>Adress</h4>
          <p>Lorem Ipsum, 19 <br/> 08015 BARCELONA</p>

          <h4>Phone number</h4>
          <p>654654654</p>
        </div>
      </div>
    );
  }
}

export default withAuth(AssoDetails);
