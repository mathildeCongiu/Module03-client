import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import { Link } from "react-router-dom";
import ProfileHeader from "../components/private-common/ProfileHeader";

class AssoDetails extends Component {
  render() {
    const {
      description,
      address,
      phoneNumber,
    } = this.props.location.state.element;
    return (
      <div className="details-page asso-details">
        <Link className="back-button-details" to="">
          <img src="/img/delete.png" alt="Back" />
        </Link>
        <ProfileHeader selectedProfile={this.props.location.state.element} />

        <div className="description-container">
          <div className="details-info">
            <p>{description}</p>
            <h3>PICK UP</h3>
            <div className="sub-details-list">
              <div>
                <h4>Address</h4>
                <p>
                  {address.street}, {address.number} <br /> {address.postcode}{" "}
                  {address.city} <br /> {address.country}
                </p>
              </div>

              <div>
                <h4>Phone number</h4>
                <p>{phoneNumber}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withAuth(AssoDetails);
