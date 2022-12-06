import "./ItemList.css"
import React from 'react'
import Item from '../Item/Item'

const ItemList = ({products=[]}) => {
    return (
        <div className='itemList'>
        {products.map(prod =>  <Item key={prod.ID} info={prod}/>)}
        </div>
    )
}

export default ItemList