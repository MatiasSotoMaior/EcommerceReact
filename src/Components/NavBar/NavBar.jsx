import React from 'react'
import "../Styles.css"
import Brand from '../Brand/Brand'
import Cart from '../Cart/Cart'

function NavBar() {
    return (
        <div className='NavBar'>
            <a href='#'><Brand/></a>
            <ul>
                <li><a href="#">Nosotros</a></li>
                <li><a href="#">Packs</a></li>
                <li><a href="#">Arma tu presupuesto</a></li>
                <li><a href="#">Contactanos</a></li>
            </ul>
            <Cart/>
        </div>
    )
}

export default NavBar