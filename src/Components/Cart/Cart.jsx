import './Cart.css'
import React from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'
import ItemCart from '../ItemCart/ItemCart';

const Cart = () => {

    const { cart, totalPrice, clearCart, handleBuyClick, signIn } = useCartContext();

    if (cart.length === 0) {
        return (
            <div className='cart'>
                <h3>TU CARRITO ESTA VACIO...</h3>
                <Link to='/'>SEGUIR COMPRANDO</Link>
            </div>
        )
    }

    return (
        <div className='ItemCartContainer'>
            {
                cart.map(product => <div className='ItemCartC' key={product.id}><ItemCart product={product} /></div>)
            }
            <div className='TotalBuy pt-3'>
                <p className='fs-5 me-5'>TOTAL: ${totalPrice()}</p>
                <div>
                    <button className='btn btn-outline-danger mx-2' onClick={() => { clearCart() }}>Vaciar</button>
                </div>
                <Link to='/CreateOrder'>
                    <button className='btn btn-outline-success' onClick={() => { handleBuyClick() }}>
                        Comprar
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Cart