import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class BusinessLogin extends Component {
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

               
                <input type="email" name="email" placeholder= "Email" value={this.props.email} onChange={this.handleChange} />
                <input type="password" name="password" placeholder= "Password" value={this.props.password} onChange={this.handleChange} />
            
                <p>Don't have an account! <span><Link to={"/signup"}>Log In</Link></span> here!</p>
                
                <input type="submit" value="Login" />
                </form>
            </div>
        )
    }
}

export default BusinessLogin



