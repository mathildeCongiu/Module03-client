import React from 'react'
import { Link } from 'react-router-dom'

function HomeSignUpCard(props) {
    return (
        <div>
            <img src={`/img/cards/${props.img}`} alt={props.type}/>
            <p>{props.description}</p>
            <Link to={`/signup`}>SIGN UP TODAY </Link>
        </div>
    )
}

export default HomeSignUpCard
