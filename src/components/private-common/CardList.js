import React, { Component } from 'react'
import { withAuth } from '../../lib/AuthProvider';
import Card from './Card';

class CardList extends Component {
    
    selectList = () => {
        let arr = []
        if (this.props.showPending) {
            arr = [1, 2, 3, 4]
        } else {
            arr = [5, 6, 7, 8]
        }

        return arr;
    }

    render() {
        return (
            <div>
                <ul>
                {this.selectList().map( element => {
                    return(
            <li>
                    <Card {...this.props} />
            </li>
                    )
        })}
                </ul>
            </div>
        )
    }
}

export default withAuth(CardList)
