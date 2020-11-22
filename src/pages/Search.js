import React, { Component } from "react";
import CardList from "../components/private-common/CardList";
import { withAuth } from "../lib/AuthProvider";
import Navbar from "../components/private-common/Navbar";

class Search extends Component {
  state = {
    areFiltersShown: false,
  };
  // onChangeHandler = (event) => {
  //     let value = event.target.value
  //     this.props.showResult(value)
  // }

  showFilters = () => {
    this.setState({
      areFiltersShown: !this.state.areFiltersShown,
    });
  };

  render() {
    // {
    //   console.log(this.props.search());
    // }

    return (
      <div className="search-page">
        <div className="search-input">
          <label>SEARCH</label>
          <input
            type="text"
            name="search" /*onChange= { (event) => this.onChangeHandler(event) } */
          />
        </div>
        <button className="button filter-button" onClick={this.showFilters}>FILTERS</button>
        {this.state.areFiltersShown ? (
          <div className="filter-options">
            <label>
              <input type="checkbox" value="bakery" />
              Bakery
            </label>
            <label>
              <input type="checkbox" value="fishmonger" />
              Fishmonger
            </label>
            <label>
              <input type="checkbox" value="supermarket" />
              Supermarket
            </label>
            <label>
              <input type="checkbox" value="butchShop" />
              Butcher Shop
            </label>
            <label>
              <input type="checkbox" value="restaurant" />
              Restaurant
            </label>
            <label>
              <input type="checkbox" value="grocery" />
              Green Grocery
            </label>
          </div>
        ) : null}

        <CardList />
        {/* {this.props.search().data.map(element => console.log(element) )} */}
        <Navbar />
      </div>
    );
  }
}

export default withAuth(Search);
