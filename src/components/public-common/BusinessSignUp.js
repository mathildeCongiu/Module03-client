import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../../lib/AuthProvider";

class BusinessSignUp extends Component {
  render() {
    return (
      <div className="register-page register-business">
        <form className="register-form" onSubmit={this.props.handleFormSubmit}>
          <label>BUSINESS INFO</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={this.props.name}
            onChange={(e) => this.props.handleChange(e)}
          />
          <div className="upload-logo">
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
          <select name="typeName" onChange={(e) => this.props.handleChange(e) }>
            <option value="select">SELECT TYPE</option>
            <option value="fishmonger">Fishmonger</option>
            <option value="bakery">Bakery</option>
            <option value="supermarket">Supermarket</option>
            <option value="butchShop">Butcher Shop</option>
            <option value="restaurant">Restaurant</option>
            <option value="grocery">Green Grocery</option>
          </select>
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
          <label>PICK-UP ADDRESS</label>
          <input
            type="text"
            name="street"
            placeholder="Street"
            value={this.props.street}
            onChange={(e) => this.props.handleChange(e)}
          />
          <div className="address-nums">
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
          <div className="address-city">
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
          <div className="date-input">
            <select name="pickupDate" onChange={(e) => this.props.handleChange(e)}>
              <option value="day">SELECT DAY</option>
              <option value="Mon.">Monday</option>
              <option value="Tue.">Tuesday</option>
              <option value="Wed.">Wednesday</option>
              <option value="Thu.">Thursday</option>
              <option value="Fri.">Friday</option>
              <option value="Sat.">Saturday</option>
              <option value="Sun.">Sunday</option>
            </select>
            {/* <input type="hour" name="hour" value= "19:00" onChange= {(e) => this.handleChange(e)}/> */}
          </div>
          {/* <button>Add more days</button> */}
          <p>
            Already have an account!{" "}
            <span>
              <Link className="link" to={"/login"}>Log In</Link>
            </span>{" "}
            here!
          </p>

          <input className="button main-color-button input-button" type="submit" value="Signup" />
        </form>
      </div>
    );
  }
}

export default withAuth(BusinessSignUp);
