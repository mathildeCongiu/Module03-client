import React, { Component } from "react";
// import { Link } from "react-router-dom";
import AssoSignUp from "../components/public-common/AssoSignUp";
import BusinessSignUp from "../components/public-common/BusinessSignUp";
import { withAuth } from "../lib/AuthProvider";
import auth from "../lib/auth-service" 

class Signup extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    // logo: "",
    street: "",
    // number: 0,
    flat: "",
    city: "",
    // postcode: 0,
    country: "",
    // phoneNumber: 0,
    description: "",
    typeName: "",
    pickupDate: "",
    pickupPlace: "",
    isBusiness: true,
    pickupHour: "19:00"
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const {
      name,
      email,
      password,
      logo,
      street,
      number,
      flat,
      city,
      postcode,
      country,
      phoneNumber,
      description,
      typeName,
      pickupDate,
      pickupPlace,
      pickupHour
    } = this.state;

    this.props.signup({
      name,
      email,
      password,
      logo,
      street,
      number,
      flat,
      city,
      postcode,
      country,
      phoneNumber,
      description,
      typeName,
      pickupDate,
      pickupPlace,
      pickupHour
    });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  toggleHandlerBusiness = () => {
    this.setState({ isBusiness: true });
  };

  toggleHandlerAsso = () => {
    this.setState({ isBusiness: false });
  };

   // this method handles just the file upload
   handleFileUpload = async (e) => {
    console.log("The file to be uploaded is: ", e.target.files[0]);

    // Create a new Object Form 
    const uploadData = new FormData();
    // imageUrl => this name has to be the same as in the model since we pass
    // req.body to .create() method when creating a new thing in '/api/things/create' POST route
    uploadData.append("logo", e.target.files[0]);
    console.log(uploadData)
    try {
      const res = await auth.handleUpload(uploadData);

      console.log("response is: ", res);
      // after the console.log we can see that response carries 'secure_url' which we can use to update the state
      this.setState({ logo: res.secure_url });
    } catch (error) {
      console.log("Error while uploading the file: ", error);
    }
  };


  render() {
    return (
      <div className="register-page">
        <div className="register-tabs-container">
          <button
            className="register-tabs register-business"
            onClick={() => this.toggleHandlerBusiness()}
          >
            Sign Up as a Business
          </button>
          <button
            className="register-tabs register-asso"
            onClick={() => this.toggleHandlerAsso()}
          >
            Sign Up as an Association
          </button>
        </div>
        {!this.state.isBusiness ? (
          <AssoSignUp
          edit = {false}
            {...this.state}
            handleChange={(e) => this.handleChange(e)}
            handleFormSubmit={this.handleFormSubmit}
            handleFileUpload ={(e) => this.handleFileUpload(e)}
          />
        ) : (
          <BusinessSignUp
          edit = {false}
            {...this.state}
            handleChange={(e) => this.handleChange(e)}
            handleFormSubmit={this.handleFormSubmit}
            handleFileUpload ={this.handleFileUpload}
          />
        )}
      </div>
    );
  }
}

export default withAuth(Signup);
