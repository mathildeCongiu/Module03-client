import React from 'react'
import { Link } from 'react-router-dom'


function Attributions() {
    return (
        <div className="attributions-about">
              <Link className="back-button-details" to="">
          <img src="/img/delete.png" alt="Back" />{" "}
        </Link>
            <h2 >ATTRIBUTIONS</h2>
   <li>       Photo by Joel Muniz on Unsplash </li>
   <li>     Photo by Markus Winkler on Unsplash</li>
   <li>     Photo by Gary Sandoz on Unsplash</li>
   <li>     Photo by Michael Browning on Unsplash</li>
   <li>     Photo by Samuel C. on Unsplash</li>
   <li>     Photo by Alex Teixeira on Unsplash</li>
   <li>      Photo by Roman Kraft on Unsplash</li>
   <li> <Link to='https://www.freepik.es/fotos/comida'>Foto de Comida creado por freepik - www.freepik.es</Link></li>
   <li> <Link to="https://www.vecteezy.com/free-vector/location-icon">Location Icon Vectors by Vecteezy</Link></li>
   <li> <Link to="https://www.vecteezy.com/free-vector/honesty">Honesty Vectors by Vecteezy</Link></li>
   <li> <Link to="https://www.vecteezy.com/free-vector/shopping">Shopping Vectors by Vecteezy</Link></li>
   <li> <Link to="https://www.vecteezy.com/free-vector/web-icons">Web Icons Vectors by Vecteezy</Link></li>
   <li> <Link to='https://www.freepik.es/vectores/comida'>Vector de Comida creado por pch.vector - www.freepik.es</Link></li>
   <li> <Link to="https://www.vecteezy.com/free-vector/web">Web Vectors by Vecteezy</Link></li>
   <li> <Link to="https://www.vecteezy.com/free-vector/web-icons">Web Icons Vectors by Vecteezy</Link></li>

        </div>
    )
}

export default Attributions
