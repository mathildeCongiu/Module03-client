import React, { Component } from "react";
import CardList from "../components/private-common/CardList";
import { withAuth } from "../lib/AuthProvider";
import Navbar from "../components/private-common/Navbar";
import assoFunc from "./../lib/asso-service";

class Search extends Component {
  state = {
    areFiltersShown: false,
    result: [],
    filteredResult: [],
  };

  searchInput = (event) => {
    let value = event.target.value.toLowerCase();
    const businessCopy = [...this.state.result];
    
    const filteredArr = businessCopy.filter((elem) => {
      return elem.name.toLowerCase().includes(value);
    });

    if (filteredArr.length === 0 ) {
      this.setState({
        
        filteredResult: ["There is no result"],
      });
    }
    else {

      this.setState({
        filteredResult: filteredArr,
      });
    }
  };

  selectInput = (event) => {
    let value = event.target.value;
    if (event.target.checked) {
      const businessCopy = [...this.state.result];
      const filteredArr = businessCopy.filter((elem) => {
        return elem.type.name === value;
      });
      const filterArrTotal = [...this.state.filteredResult];
      console.log(filterArrTotal)
      filterArrTotal.push(...filteredArr);
      this.setState({
        filteredResult: filterArrTotal,
      });
    } else {
      const businessCopy = [...this.state.filteredResult];
      const filteredArr = businessCopy.filter((elem) => {
        console.log(elem)
        return elem.type.name !== value;
      });

      if (filteredArr.length === 0) {
        this.setState({
          filteredResult: []
        });
      } else {
        this.setState({
          filteredResult: filteredArr,
        });
      }
    }
  };

  showFilters = () => {
    this.setState({
      areFiltersShown: !this.state.areFiltersShown,
    });
  };

  getBusinesses = async () => {
    const result = await assoFunc.searchBusinesses();
    this.setState({
      result,
    });
  };

  componentDidMount = () => {
    this.getBusinesses();
  };

  render() {
    // console.log(this.state.result, "LLamada al BackEnd");
    return (
      <div className="search-page">
        <div className="search-input">
          <label>SEARCH</label>
          <input
            type="text"
            name="search"
            onChange={(event) => this.searchInput(event)}
          />
        </div>
        <button className="button filter-button" onClick={this.showFilters}>
          FILTERS
        </button>
        {this.state.areFiltersShown ? (
          <div className="filter-options">
            <label>
              <input
                type="checkbox"
                value="bakery"
                onClick={(event) => this.selectInput(event)}
              />
              Bakery
            </label>
            <label>
              <input
                type="checkbox"
                value="fishmonger"
                onClick={(event) => this.selectInput(event)}
              />
              Fishmonger
            </label>
            <label>
              <input
                type="checkbox"
                value="supermarket"
                onClick={(event) => this.selectInput(event)}
              />
              Supermarket
            </label>
            <label>
              <input
                type="checkbox"
                value="butchShop"
                onClick={(event) => this.selectInput(event)}
              />
              Butcher Shop
            </label>
            <label>
              <input
                type="checkbox"
                value="restaurant"
                onClick={(event) => this.selectInput(event)}
              />
              Restaurant
            </label>
            <label>
              <input
                type="checkbox"
                value="grocery"
                onClick={(event) => this.selectInput(event)}
              />
              Green Grocery
            </label>
          </div>
        ) : null}
        <CardList
          result={
            this.state.filteredResult[0]
              ? this.state.filteredResult
              : this.state.result
          }
          showPending={false}
        />
        <Navbar />
      </div>
    );
  }
}

export default withAuth(Search);
