import React, { Component } from 'react'
import { withAuth } from '../../lib/AuthProvider';
import { Link } from 'react-router-dom'


class Card extends Component {
    state = {
        img: "",
        element: {
            name: this.props.name, 
            address: this.props.address,
            type: this.props.type}
    }
    componentDidMount = () => {
        const { relationship, type } = this.props;
        if (relationship === "business") {
          switch (type.name) {
            case "fishmonger":
              this.setState({
                img: "/img/cards/fishmonger-SC.jpg"
              });
              break;
            case "bakery":
              this.setState({
                img: "/img/cards/bakery-RK.jpg"
              });
              break;
            case "supermarket":
              this.setState({
                img: "/img/cards/supermarket-RM.jpg"
              });
              break;
            case "butchShop":
              this.setState({
                img: "/img/cards/butcher-AT.jpg"
              });
              break;
            case "restaurant":
              this.setState({
                img: "/img/cards/restaurant-MB.jpg"
              });
              break;
            case "grocery":
              this.setState({
                img: "/img/cards/grocery-GS.jpg"
              });
              break;
          } 
        } else {
          this.setState({
            img: "/img/cards/asso01-JM.jpg"
          })
        }
      };
    
    render() {
        const { user, name, pickup, _id} = this.props
        return (
            <div className="card">
                <Link className="card-img-link" to={{pathname:`/business-details/${_id}`, state: {element: this.state.element}}} ><img src={this.state.img} alt="Card img"/></Link>
                <img className="card-logo" src="/img/upload.png" alt="Logo"/>
                <h3>{name}</h3>
                {(user.relationship === "association") ? <p>{pickup.day}</p> : null }
                {(this.props.showPending && user.relationship === "business") ? <div className="accept-reject-container">
                    <button className="button accept">Accept</button>
                    <button className="button reject">Reject</button>
                </div> : null }
            </div>
        )
    }
}

export default withAuth(Card)
