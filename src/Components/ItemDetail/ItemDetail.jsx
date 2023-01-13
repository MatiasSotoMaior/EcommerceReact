import "./ItemDetail.css"
import React from 'react'
import ItemCount from "../ItemCount/ItemCount"
import { useCartContext } from "../../context/CartContext"
import { useState } from "react"
import { Link } from 'react-router-dom'

const ItemDetail = ({ products = [] }) => {
    const [goToCart, setGoToCart] = useState(false);

    const { addProduct } = useCartContext();

    const onAdd = (cant) => {
        setGoToCart(true)
        addProduct(products, cant)
        console.log('agregaste: ', cant);
    }
    return (
        <div className="Detail">
            <div className="imgDetail">
                <img src={products.Img} alt="" />
            </div>
            <div className="detDetail">
                <h2 className="title text-center">{products.Name}</h2>
                <div className="py-3">
                    <h3>Tipo de Bebida</h3>
                    {products.Tipo}
                </div>
                <div className="py-3">
                    <h3>Detalles</h3>
                    {products.IBU ? <p>IBU:{products.IBU}</p> : <p>ALC:{products.ALC}%</p>}
                </div>
                {
                    goToCart
                        ? <div className="goToCart">
                            <Link to="/cart"><button className="mb-3 btn btn-outline-dark">VER CARRITO</button></Link>
                            <Link to="/"><button className="btn btn-outline-success">SEGUIR COMPRANDO</button></Link>
                        </div>
                        : <ItemCount onAdd={onAdd} products={products} />
                }
            </div>
        </div>
    )
}

export default ItemDetail