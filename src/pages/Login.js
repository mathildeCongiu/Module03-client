import React, { Component } from "react";
// import { Link } from "react-router-dom";
import AssoLogin from "../components/public-common/AssoLogin";
import BusinessLogin from "../components/public-common/BusinessLogin";
import { withAuth } from '../lib/AuthProvider';

class Login extends Component {
  state = {
    email: "",
    password: "",
    isBusiness: true
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const {      
      email,
      password,
      isBusiness
    } = this.state;
    
    this.props.login({       
      email,
      password,
    isBusiness});
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
        <button onClick={() => this.toggleHandler()}>Log In as a Business</button>
        <button onClick={() => this.toggleHandler()}>Log In as an Asso</button>
        </div>
       { !this.state.isBusiness ? <AssoLogin {...this.state} handleChange= {(e) => this.handleChange(e)} handleFormSubmit= {(e) => this.handleFormSubmit(e)}/> :
              <BusinessLogin {...this.state} handleChange= {(e) => this.handleChange(e)} handleFormSubmit= {(e) => this.handleFormSubmit(e)}/>}
  
      </div>
    );
  }
}

export default withAuth(Login);
