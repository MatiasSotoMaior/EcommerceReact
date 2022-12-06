import './ItemCount.css' 
import { useState } from 'react'

const ItemCount = ({stock=10, initial=1, precioInicial=1500, onAdd}) => {
    const [count, setCount] = useState(initial)
    const [precio, setPrecio] = useState(precioInicial)
    const subtract = () => {
        if (count > initial) {
            setCount(count - 1)
            setPrecio(precio - precioInicial)
        }
    }
    const add = () => {
        if (count < stock) {
            setCount(count + 1)
            setPrecio(precio + precioInicial)
        }
    }
    const handleOnAdd = () => {
        onAdd(count)
    }
    return (
        <div>
            <button className='btnCount' onClick={subtract}><i className="fa-solid fa-minus"></i></button>
            <label className='mx-3'>{count}</label>
            <button className='btnCount' onClick={add}><i className="fa-solid fa-plus"></i></button>
            <h3>TOTAL: ${precio}</h3>
            <button className='mt-3 btn btn-outline-success' onClick={handleOnAdd}>ADD TO CART</button>
        </div>
    )
}

export default ItemCount