import React from 'react'
import { Link } from 'react-router-dom'
import HomeSignUpCard from '../components/common/HomeSignUpCard'

function Home() {
    return (
        <>
            <header>
                <h1>FOOD FOR ALL</h1>
                <div>
                    <Link to="/signup">Sign Up</Link>
                    <Link to="/login">Login</Link>
                </div>
                <div>
                    <HomeSignUpCard img= "bakery-RK.jpg" description= "iwurghrwiughvnirug aroeigjinvgurignv" type="business" />
                    <HomeSignUpCard img= "asso01-JM.jpg" description= "iwurghrwiughvnirug aroeigjinvgurignv" type="association" />
                </div>
                <footer>
                    <Link to="/attributions">Attributionsp</Link>
                    <Link to="/about-us">About Us</Link>
                </footer>
            </header>
        

        </>
    )
}

export default Home


