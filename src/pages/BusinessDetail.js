import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import { Link } from "react-router-dom";
import ProductsList from "../components/private-common/ProductsList";
import ProfileHeader from "../components/private-common/ProfileHeader";

class BusinessDetail extends Component {
  render() {
    console.log(this.props.location.state)
    return (
      <div className="details-page asso-details">
        <Link className="back-button-details" to="">
          <img src="/img/delete.png" alt="Back" />{" "}
        </Link>
        {/* <ProfileHeader selectedProfile={} /> */}

        <div className="details-info">
          <p>Description</p>

          <h3>PICK UP</h3>
          <h4>Adress</h4>
          <p>Lorem Ipsum, 19, <br/> 08015 BARCELONA</p>

          <h4>Phone number</h4>
          <p>654654654</p>

          <h4>Schedule</h4>
          <p>WED 20h</p>

          <h3>PRODUCTS</h3>
          <ProductsList />
        </div>

        <button className="button add-edit-product-button">Request partnership</button>
      </div>
    );
  }
}

export default withAuth(BusinessDetail);
