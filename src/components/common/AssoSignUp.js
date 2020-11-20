import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class AssoSignUp extends Component {
    handleChange(event) {
        this.props.handleChange(event)
     }
     handleFormSubmit(event) {
         this.props.handleFormSubmit(event)
     }
    render() {
        return (
            <div>
                <form onSubmit={this.handleFormSubmit}>

                <label>ASSO INFO</label>
                <input type="text" name="name" placeholder= "Name" value={this.props.name} onChange={this.handleChange} />
                <div>
                    <button><img src="../../img/upload.png" alt=""/></button><p>Upload your logo</p>
                </div>
                <textarea name="description" placeholder= "Short description of what you do" value={this.props.description} onChange={this.handleChange} />
                <input type="email" name="email" placeholder= "Email" value={this.props.email} onChange={this.handleChange} />
                <input type="password" name="password" placeholder= "Password" value={this.props.password} onChange={this.handleChange} />
                <label>HEADQUARTERS ADDRESS</label>
                <input type="text" name="street" placeholder= "Street" value={this.props.street} onChange={this.handleChange} />
                <div>
                    <input type="number" name="number" placeholder= "Number" value={this.props.number} onChange={this.handleChange} />
                    <input type="text" name="flat" placeholder= "Flat" value={this.props.flat} onChange={this.handleChange} />
                    <input type="number" name="postcode" placeholder= "ZIP Code" value={this.props.postcode} onChange={this.handleChange} />

                </div>
                <div>
                    <input type="text" name="city" placeholder= "City" value={this.props.city} onChange={this.handleChange} />
                    <input type="text" name="country" placeholder= "Country" value={this.props.country} onChange={this.handleChange} />
                </div>
                <input type="number" name="phoneNumber" placeholder= "Phone Number" value={this.props.phoneNumber} onChange={this.handleChange} />
                <p>Already have an account! <span><Link to={"/login"}>Log In</Link></span> here!</p>
                <input type="submit" value="Signup" />
                </form>
            </div>
        )
    }
}

export default AssoSignUp



