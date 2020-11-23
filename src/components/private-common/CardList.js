import React, { Component } from "react";
import { withAuth } from "../../lib/AuthProvider";
import Card from "./Card";


class CardList extends Component {

  render() {
    return (
      <div className="card-list">
        <ul>
          {this.props.result.map((element) => {
            return (
              <li key={element._id}>
                <Card {...element} />
              </li>
            );
          })}
          
        </ul>
      </div>
    );
  }
}

export default withAuth(CardList);
