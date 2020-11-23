import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import { Link } from "react-router-dom";
import ProductsList from "../components/private-common/ProductsList";
import ProfileHeader from "../components/private-common/ProfileHeader";
import assoFunc from "../lib/asso-service"

class BusinessDetail extends Component {

  handleRequest = async () => {
    const { _id} = this.props.location.state.element
    console.log(_id, "where are you darlingh")
    await assoFunc.postRequest(_id)
  }
 
  render() { 
    const { description, address, phoneNumber, pickup} = this.props.location.state.element
    console.log(this.props.location.state.element)
    return (
      <div className="details-page asso-details">
        <Link className="back-button-details" to="">
          <img src="/img/delete.png" alt="Back" />{" "}
        </Link>
        <ProfileHeader selectedProfile={this.props.location.state.element} />

        <div className="details-info">
          <p>{description}</p>

          <h3>PICK UP</h3>
          <h4>Adress</h4>
          <p>{address.street}, {address.number} <br/> {address.postcode} {address.city} <br/> {address.country}</p>

          <h4>Phone number</h4>
          <p>{phoneNumber}</p>

          <h4>Schedule</h4>
          <p>{pickup.day}</p>

          <h3>PRODUCTS</h3>
          <ProductsList />
        </div>

        <button onClick={this.handleRequest} className="button add-edit-product-button">Request partnership</button>
      </div>
    );
  }
}

export default withAuth(BusinessDetail);
