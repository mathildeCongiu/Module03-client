import React, { Component } from "react";
import { Link } from "react-router-dom";

export class AssoSignUp extends Component {
  render() {
    return (
      <div className="register-asso">
        <form onSubmit={this.props.handleFormSubmit}>
          <label>ASSO INFO</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={this.props.name}
            onChange={(e) => this.props.handleChange(e)}
          />
          <div>
            <button>
              <img src="../../img/upload.png" alt="" />
            </button>
            <p>Upload your logo</p>
          </div>
          <textarea
            name="description"
            placeholder="Short description of what you do"
            value={this.props.description}
            onChange={(e) => this.props.handleChange(e)}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={this.props.email}
            onChange={(e) => this.props.handleChange(e)}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={this.props.password}
            onChange={(e) => this.props.handleChange(e)}
          />
          <label>HEADQUARTERS ADDRESS</label>
          <input
            type="text"
            name="street"
            placeholder="Street"
            value={this.props.street}
            onChange={(e) => this.props.handleChange(e)}
          />
          <div>
            <input
              type="number"
              name="number"
              placeholder="Number"
              value={this.props.number}
              onChange={(e) => this.props.handleChange(e)}
            />
            <input
              type="text"
              name="flat"
              placeholder="Flat"
              value={this.props.flat}
              onChange={(e) => this.props.handleChange(e)}
            />
            <input
              type="number"
              name="postcode"
              placeholder="ZIP Code"
              value={this.props.postcode}
              onChange={(e) => this.props.handleChange(e)}
            />
          </div>
          <div>
            <input
              type="text"
              name="city"
              placeholder="City"
              value={this.props.city}
              onChange={(e) => this.props.handleChange(e)}
            />
            <input
              type="text"
              name="country"
              placeholder="Country"
              value={this.props.country}
              onChange={(e) => this.props.handleChange(e)}
            />
          </div>
          <input
            type="number"
            name="phoneNumber"
            placeholder="Phone Number"
            value={this.props.phoneNumber}
            onChange={(e) => this.props.handleChange(e)}
          />
          <p>
            Already have an account!{" "}
            <span>
              <Link to={"/login"}>Log In</Link>
            </span>{" "}
            here!
          </p>
          <input type="submit" value="Signup" />
        </form>
      </div>
    );
  }
}

export default AssoSignUp;
