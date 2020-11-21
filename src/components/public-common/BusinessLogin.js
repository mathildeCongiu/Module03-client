import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class BusinessLogin extends Component {
    
    render() {
        return (
            <div>
                <form onSubmit={this.props.handleFormSubmit}>

               
                <input type="email" name="email" placeholder= "Email" value={this.props.email} onChange={(e) => this.props.handleChange(e)} />
                <input type="password" name="password" placeholder= "Password" value={this.props.password} onChange={(e) => this.props.handleChange(e)} />
            
                <p>Don't have an account! <span><Link to={"/signup"}>Log In</Link></span> here!</p>
                
                <input type="submit" value="Login" />
                </form>
            </div>
        )
    }
}

export default BusinessLogin



