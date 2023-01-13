import './ItemCart.css'
import React from 'react'
import { useCartContext } from '../../context/CartContext'

const ItemCart = ({ product }) => {
    const { removeProduct } = useCartContext();
    return (
        <div className='itemCart'>
            <img src={product.Img} className="cartImg" alt="" />
            <div className='d-flex'>
                <div className='detCont'>
                    <p>{product.Name}</p>
                    <p>Cantidad: {product.quantity}</p>
                    <p>U: ${product.Precio}</p>
                    <p>Sub: ${product.quantity * product.Precio}</p>
                </div>
                <div className='deleteBtnCont'>
                    <button className='deleteBtn' onClick={() => removeProduct(product.id)}>X</button>
                </div>
            </div>
        </div>
    )
}

export default ItemCart