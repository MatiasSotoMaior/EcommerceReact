import React from 'react'
import "../Styles.css"
import Brand from '../Brand/Brand'
import Cart from '../Cart/Cart'

function NavBar({link}) {
    return (
        <div className='NavBar'>
            <a href='#'><Brand/></a>
            <ul>
                <li><a onClick={link} key={"nosotros"} href="#">Nosotros</a></li>
                <li><a onClick={link} key={"packs"} href="#">Packs</a></li>
                <li><a onClick={link} key={"presupuesto"} href="#">Arma tu presupuesto</a></li>
                <li><a onClick={link} key={"contacto"} href="#">Contactanos</a></li>
            </ul>
            <Cart/>
        </div>
    )
}

export default NavBar