import React, { Component } from 'react'
import { withAuth } from '../../lib/AuthProvider';

class Card extends Component {
    state = {
        img: "img/cards/asso01-JM.jpg"
    }

    render() {
        const { user } = this.props
        return (
            <div className="card">
                <img src={this.state.img} alt="Card img"/>
                <img className="card-logo" src="/img/upload.png" alt="Logo"/>
                <h3>Association Pepita</h3>
                {(this.props.showPending && user.relationship === "business") ? <div className="accept-reject-container">
                    <button className="button accept">Accept</button>
                    <button className="button reject">Reject</button>
                </div> : null }
            </div>
        )
    }
}

export default withAuth(Card)
