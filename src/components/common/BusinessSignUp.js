import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withAuth } from '../../lib/AuthProvider';

class BusinessSignUp extends Component {
    // handleChange(event) {
    //     this.props.handleChange(event)
    //  }
    //  handleFormSubmit(event) {
    //     event.preventDefault()
    //      this.props.handleFormSubmit(event)
    //  }
    render() {
        return (
            <div>
                <form onSubmit={this.props.handleFormSubmit}>

                <label>BUSINESS INFO</label>
                <input type="text" name="name" placeholder= "Name" value={this.props.name} onChange={(e) => this.props.handleChange(e)} />
                {/* <div>
                    <button><img src="../../img/upload.png" alt=""/></button><p>Upload your logo</p>
                </div>
                <textarea name="description" placeholder= "Short description of what you do" value={this.props.description} onChange= {(e) => this.handleChange(e)} />
                <select name="typeName" onChange= {(e) => this.handleChange(e)}>
                        <option value="select">SELECT TYPE</option> 
                        <option value="fishmonger">fishmonger</option>
                        <option value="bakery">Bakery</option>
                        <option value="supermarket">Supermarket</option>
                        <option value="butchShop">Butch Shop</option>
                        <option value="restaurant">Restaurant</option>
                        <option value="grocery">Green Grocery</option>
                </select> */}
                <input type="email" name="email" placeholder= "Email" value={this.props.email} onChange= {(e) => this.props.handleChange(e)} />
                <input type="password" name="password" placeholder= "Password" value={this.props.password} onChange= {(e) => this.props.handleChange(e)} />
                {/* <label>PICK-UP ADDRESS</label>
                <input type="text" name="street" placeholder= "Street" value={this.props.street} onChange= {(e) => this.handleChange(e)} />
                <div>
                    <input type="number" name="number" placeholder= "Number" value={this.props.number} onChange= {(e) => this.handleChange(e)} />
                    <input type="text" name="flat" placeholder= "Flat" value={this.props.flat} onChange= {(e) => this.handleChange(e)} />
                    <input type="number" name="postcode" placeholder= "ZIP Code" value={this.props.postcode} onChange= {(e) => this.handleChange(e)} />

                </div>
                <div>
                    <input type="text" name="city" placeholder= "City" value={this.props.city} onChange= {(e) => this.handleChange(e)} />
                    <input type="text" name="country" placeholder= "Country" value={this.props.country} onChange= {(e) => this.handleChange(e)} />
                </div>
                <input type="number" name="phoneNumber" placeholder= "Phone Number" value={this.props.phoneNumber} onChange= {(e) => this.handleChange(e)} />
                <div>
                <select name="day" onChange= {(e) => this.handleChange(e)}>
                        <option value="day">SELECT TYPE</option> 
                        <option value="monday">Monday</option>
                        <option value="tuesday">Tuesday</option>
                        <option value="wednesday">Wednesday</option>
                        <option value="thursday">Thursday</option>
                        <option value="friday">Friday</option>
                        <option value="saturday">Saturday</option>
                        <option value="sunday">Sunday</option>
                </select>
                <input type="hour" name="hour" value= "19:00" onChange= {(e) => this.handleChange(e)}/>
                 */}
                {/* </div> */}
                {/* <button>Add more days</button> */}
                <p>Already have an account! <span><Link to={"/login"}>Log In</Link></span> here!</p>
                
                <input type="submit" value="Signup" />
                </form>
            </div>
        )
    }
}

export default withAuth(BusinessSignUp)



