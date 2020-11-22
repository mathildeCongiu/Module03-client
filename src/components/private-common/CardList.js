import React, { Component } from "react";
import { withAuth } from "../../lib/AuthProvider";
import Card from "./Card";

class CardList extends Component {
  state= {
  }
  selectList = () => {
    let arr = [];
    if (this.props.showPending) {
      arr = [1, 2, 3, 4];
    } else {
      arr = [5, 6, 7, 8];
    }

    return arr;
  }

  getBusinesses = async () => {
    const data =  await this.props.search()
    console.log(data, "what is happening")
    this.setState({
      searchResults: data
  })
  }

  componentDidMount =  () => {
    if(!this.state.searchResults) {
      this.getBusinesses()
    }
      
    console.log(this.state.searchResults)
  }
 

  render() {
    return (
      <div className="card-list">
        <ul>
          {this.selectList().map((element) => {
            return (
              <li>
                <Card {...this.props} />
              </li>
            );
          })}
          
        </ul>
      </div>
    );
  }
}

export default withAuth(CardList);
