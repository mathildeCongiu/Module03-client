import React from 'react'
import { Link } from 'react-router-dom'


function AboutUs() {
    return (
        <div className="attributions-about">
              <Link className="back-button-details" to="">
          <img src="/img/delete.png" alt="Back" />{" "}
        </Link>
            <h2 >ABOUT US</h2>
            <p>We are two IronHacks students who decided to use our 9 weeks intensive course knowledge to help association and people. This version of the web is initial and we would like to add new features to make it really useful</p>
            <img className= "mvt" src="/img/MVT.png" alt="MVT"/>
        </div>
    )
}

export default AboutUs
