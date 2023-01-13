import "./CartWidget.css"
import React from 'react'
import { useCartContext } from "../../context/CartContext"

const Cart= () => {
    const {totalProducts} = useCartContext ()
    return (
        <div className='Carrito'>
            <i className='fa-solid fa-cart-shopping'></i>
            <span>{totalProducts() || ""}</span>
        </div>
    )
}

export default Cart