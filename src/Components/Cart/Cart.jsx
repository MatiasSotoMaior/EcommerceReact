import './Cart.css' 
import React from 'react'
import {Link} from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'
import ItemCart from '../ItemCart/ItemCart';

const Cart = () => {
    const {cart, totalPrice, onBuyClick, clearCart} = useCartContext();

    if (cart.length === 0) {
        return(
            <div className='cart'>
            <h3>TU CARRITO ESTA VACIO...</h3>
            <Link to='/'>SEGUIR COMPRANDO</Link>
            </div>
        )
    }

    return (
        <div className='ItemCartContainer'>
        {
            cart.map(product =><div className='ItemCartC' key={product.id}><ItemCart product={product}/></div>)
        }
        <div className='TotalBuy pt-3'>
        <p className='fs-5 pt-2 me-5'>TOTAL: ${totalPrice()}</p>
        <button className='btn btn-outline-success' onClick={() =>{clearCart(), onBuyClick()}}>Comprar</button>
        </div>
        </div>
    )
}

export default Cart