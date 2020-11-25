import React from 'react'
import { Link } from 'react-router-dom'

function HomeSignUpCard(props) {
    return (
        <div className="home-sign-up-card">
            <img src={`/img/cards/${props.img}`} alt={props.type}/>
            <p>{props.description}</p>
            <Link className="button home-card-button" to={`/signup`}>SIGN UP TODAY</Link>
        </div>
    )
}

export default HomeSignUpCard
