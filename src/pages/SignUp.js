import React, { Component } from "react";
// import { Link } from "react-router-dom";
import AssoSignUp from "../components/common/AssoSignUp";
import BusinessSignUp from "../components/common/BusinessSignUp";
import { withAuth } from '../lib/AuthProvider';

class Signup extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    logo: "",
    street: "",
    number: 0,
    flat: "",
    city: "",
    postcode: 0,
    country: "",
    phoneNumber: 0,
    description: "",
    typeName: "",
    pickupDate: "",
    pickupPlace: "",
    isBusiness: true
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const {       name,
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
      pickupPlace, } = this.state;
    
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
      pickupPlace, });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  toggleHandler = () => {
    this.setState({ isBusiness: !this.state.isBusiness });
  }
  render() {
    return (
      <div>
        <div>
        <button onClick={() => this.toggleHandler()}>Sign Up as a Business</button>
        <button onClick={() => this.toggleHandler()}>Sign Up as an Asso</button>
        </div>
       { !this.state.isBusiness ? <AssoSignUp {...this.state} handleChange= {(e) => this.handleChange(e)} handleFormSubmit= {(e) => this.handleFormSubmit(e)}/> :
              <BusinessSignUp {...this.state} handleChange= {(e) => this.handleChange(e)} handleFormSubmit= {(e) => this.handleFormSubmit(e)}/>}
  
      </div>
    );
  }
}

export default withAuth(Signup);
