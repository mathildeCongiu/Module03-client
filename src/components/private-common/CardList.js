import React, { Component } from "react";
import { withAuth } from "../../lib/AuthProvider";
import Card from "./Card";

class CardList extends Component {
  render() {
    return (
      <div className="card-list">
        {this.props.result[0] === "There is no result" ? (
          <p>There is no result</p>
        ) : (
          <ul>
            {this.props.result.map((element) => {
              return (
                <li key={element._id}>
                  <Card
                    element={element}
                    showPending={this.props.showPending}
                  />
                </li>
              );
            })}
          </ul>
        )}
      </div>
    );
  }
}

export default withAuth(CardList);
