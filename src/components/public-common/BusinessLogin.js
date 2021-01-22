import React, { Component } from "react";
import { Link } from "react-router-dom";

export class BusinessLogin extends Component {
  render() {
    return (
      <div className="register-page register-business">
        <form className="register-form" onSubmit={this.props.handleFormSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={this.props.email }
            onChange={(e) => this.props.handleChange(e)}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={this.props.password}
            onChange={(e) => this.props.handleChange(e)}
          />

          <p>
            Don't have an account!{" "}
            <span>
              <Link className="link" to={"/signup"}>Sign up</Link>
            </span>{" "}
            here!
          </p>

          <input className="button main-color-button input-button" type="submit" value="Login" />
        </form>
      </div>
    );
  }
}

export default BusinessLogin;
