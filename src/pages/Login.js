import React, { Component } from "react";
// import { Link } from "react-router-dom";
import AssoLogin from "../components/public-common/AssoLogin";
import BusinessLogin from "../components/public-common/BusinessLogin";
import { withAuth } from "../lib/AuthProvider";

class Login extends Component {
  state = {
    email: "",
    password: "",
    isBusiness: true,
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { email, password, isBusiness } = this.state;

    this.props.login({
      email,
      password,
      isBusiness,
    });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  // toggleHandler = () => {
  //   this.setState({ isBusiness: !this.state.isBusiness });
  // };

  toggleHandlerBusiness = () => {
    this.setState({ isBusiness: true });
  };

  toggleHandlerAsso = () => {
    this.setState({ isBusiness: false });
  };

  render() {
    return (
      <div className="register-page">
        <div className="register-tabs-container">
          <button
            className="register-tabs register-business"
            onClick={() => this.toggleHandlerBusiness()}
          >
            Log In as a Business
          </button>
          <button
            className="register-tabs register-asso"
            onClick={() => this.toggleHandlerAsso()}
          >
            Log In as an Association
          </button>
        </div>
        {!this.state.isBusiness ? (
          <AssoLogin
            {...this.state}
            handleChange={(e) => this.handleChange(e)}
            handleFormSubmit={(e) => this.handleFormSubmit(e)}
          />
        ) : (
          <BusinessLogin
            {...this.state}
            handleChange={(e) => this.handleChange(e)}
            handleFormSubmit={(e) => this.handleFormSubmit(e)}
          />
        )}
      </div>
    );
  }
}

export default withAuth(Login);
