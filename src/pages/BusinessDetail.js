import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import { Link } from "react-router-dom";
import ProductsList from "../components/private-common/ProductsList";
import ProfileHeader from "../components/private-common/ProfileHeader";
import assoFunc from "../lib/asso-service";

class BusinessDetail extends Component {
  handleRequest = async () => {
    const { _id } = this.props.location.state.element;
    // console.log(_id, "where are you darlingh")
    await assoFunc.postRequest(_id);
    this.props.history.goBack();
  };

  render() {
    const {
      description,
      address,
      phoneNumber,
      pickup,
    } = this.props.location.state.element;
    // console.log(this.props.history)
    return (
      <div className="details-page asso-details">
        <Link className="back-button-details" to="">
          <img src="/img/delete.png" alt="Back" />{" "}
        </Link>
        <ProfileHeader selectedProfile={this.props.location.state.element} />

        <div className="description-container">
          <div className="details-info">
            <p>{description}</p>
            <div className="details-less-description">
              <h3>PICK UP</h3>
              <div className="sub-details-list">
                <div>
                  <h4>Adress</h4>
                  <p>
                    {address.street}, {address.number} <br /> {address.postcode}{" "}
                    {address.city} <br /> {address.country}
                  </p>
                </div>
                <div>
                  <h4>Phone number</h4>
                  <p>{phoneNumber}</p>
                </div>
                <div>
                  <h4>Schedule</h4>
                  <p>
                    {pickup.day} {pickup.hour}
                  </p>
                </div>
              </div>
            </div>
            <div className="details-products">
              <h3>PRODUCTS</h3>
              <ProductsList
                productsArr={this.props.location.state.element.products}
              />
            </div>
          </div>
        </div>

        <button
          onClick={this.handleRequest}
          className="button add-edit-product-button button-create-product"
        >
          Request partnership
        </button>
      </div>
    );
  }
}

export default withAuth(BusinessDetail);
