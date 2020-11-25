import React, { Component } from "react";
import { withAuth } from "../../lib/AuthProvider";
import { Link } from "react-router-dom";
import businessFunc from "../../lib/business-service";

class Card extends Component {
  state = {
    img: "",
  };
  componentDidMount = () => {
    const { relationship, type } = this.props.element;
    if (relationship === "business") {
      switch (type.name) {
        case "fishmonger":
          this.setState({
            img: "/img/cards/fishmonger-SC.jpg",
          });
          break;
        case "bakery":
          this.setState({
            img: "/img/cards/bakery-RK.jpg",
          });
          break;
        case "supermarket":
          this.setState({
            img: "/img/cards/supermarket-RM.jpg",
          });
          break;
        case "butchShop":
          this.setState({
            img: "/img/cards/butcher-AT.jpg",
          });
          break;
        case "restaurant":
          this.setState({
            img: "/img/cards/restaurant-MB.jpg",
          });
          break;
        case "grocery":
          this.setState({
            img: "/img/cards/grocery-GS.jpg",
          });
          break;
      }
    } else {
      this.setState({
        img: "/img/cards/asso01-JM.jpg",
      });
    }
  };

  handleAccept = async () => {
    const { _id } = this.props.element;
    await businessFunc.accept(_id);
    window.location.reload();
  };

  handleReject = async (id) => {
    const { _id } = this.props.element;
    await businessFunc.reject(_id);
    window.location.reload();
  };

  render() {
    const { user, element } = this.props;

    return (
      <div className="card">
        {user.relationship === "business" ? (
          <Link
            className="card-img-link"
            to={{
              pathname: `/association-details/${element._id}`,
              state: { element },
            }}
          >
            <img src={this.state.img} alt="Card img" />
          </Link>
        ) : (
          <Link
            className="card-img-link"
            to={{
              pathname: `/business-details/${element._id}`,
              state: { element },
            }}
          >
            <img src={this.state.img} alt="Card img" />
          </Link>
        )}
        <img className="card-logo" src={element.logo} alt="Logo" />
        <h3>{element.name}</h3>
        {user.relationship === "association" ? (
          <p>{element.pickup.day} {element.pickup.hour}</p>
        ) : null}
        {this.props.showPending && user.relationship === "business" ? (
          <div className="accept-reject-container">
            <button onClick={this.handleAccept} className="button accept">
              Accept
            </button>
            <button onClick={this.handleReject} className="button reject">
              Reject
            </button>
          </div>
        ) : null}
      </div>
    );
  }
}

export default withAuth(Card);
