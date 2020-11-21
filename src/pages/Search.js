import React, { Component } from 'react'
import CardList from '../components/private-common/CardList';
import { withAuth } from "../lib/AuthProvider";

class Search extends Component {
    state = {
        areFiltersShown: false,
    }
    // onChangeHandler = (event) => {
    //     let value = event.target.value
    //     this.props.showResult(value)
    // }

    showFilters = () => {
        this.setState({
            areFiltersShown: !this.state.areFiltersShown
        })
    }

    render() {
        return (
            <div>
                <div>
                    <label>Search</label>
                    <input type="text" name="search" /*onChange= { (event) => this.onChangeHandler(event) } *//>
                </div>
                <button onClick={this.showFilters}>Filters</button>
                {this.state.areFiltersShown ? <div>
                    <label><input type="checkbox" value="bakery" />Bakery</label>
                    <label><input type="checkbox" value="fishmonger" />Fishmonger</label>
                    <label><input type="checkbox" value="supermarket" />Supermarket</label>
                    <label><input type="checkbox" value="butchShop" />Butcher Shop</label>
                    <label><input type="checkbox" value="restaurant" />Restaurant</label>
                    <label><input type="checkbox" value="grocery" />Green Grocery</label>

                </div> : null }

                <CardList />
            </div>
        )
    }
}

export default withAuth(Search)
