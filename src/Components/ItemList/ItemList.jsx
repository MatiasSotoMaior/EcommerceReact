import "./ItemList.css"
import React from 'react'
import Item from '../Item/Item'

const ItemList = ({ products = [] }) => {
    return (
        <div className="container">
            <div className='itemList row justify-content-around'>
                {products.map(prod => <Item key={prod.id} info={prod} />)}
            </div>
        </div>
    )
}

export default ItemList