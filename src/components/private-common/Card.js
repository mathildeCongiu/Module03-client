import React, { Component } from 'react'
import { withAuth } from '../../lib/AuthProvider';

class Card extends Component {
    state = {
        img: "img/cards/asso01-JM.jpg"
    }

    render() {
        return (
            <div>
                <img src={this.state.img} alt="Card img"/>
                <img src="/img/upload.png" alt="Logo"/>
                <h3>Association Pepita</h3>
                {(this.props.showPending) ? <div>
                    <button>Accept</button>
                    <button>Reject</button>
                </div> : null }
            </div>
        )
    }
}

export default withAuth(Card)
