import React, { Component } from "react";
import AssoSignUp from "../components/public-common/AssoSignUp";
import BusinessSignUp from "../components/public-common/BusinessSignUp";
import { withAuth } from "../lib/AuthProvider";
import auth from "../lib/auth-service" 
import { Link } from 'react-router-dom'

class EditForm extends Component {
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

  componentDidMount = () => {
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
    isBusiness,
    pickupHour
       } = this.props.user

    this.setState({
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
    isBusiness,
    pickupHour
    })
    console.log();
  }

  render() {
    return (
      <div >
          <Link className="back-button-details" to="">
          <img src="/img/delete.png" alt="Back" />
        </Link>
        {this.props.user.relationship === "association" ? (
          <AssoSignUp
            {...this.state}
            handleChange={(e) => this.handleChange(e)}
            handleFormSubmit={this.handleFormSubmit}
            handleFileUpload ={(e) => this.handleFileUpload(e)}
          />
        ) : (
          <BusinessSignUp
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

export default withAuth(EditForm);
