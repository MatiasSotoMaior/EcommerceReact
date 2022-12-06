import React from 'react'
import Header from '../../Header/Header'
import NavBar from '../../NavBar/NavBar'
import ItemList from '../../ItemList/ItemList'
import { useState, useEffect } from "react"
import { getStock } from '../../../helpers/getStock'
import { useParams } from 'react-router-dom'




function ItemListContainer() {
    const [products, setProduct] = useState([])
    const [loading, setLoading] = useState(true)
    const { Tipo } = useParams()

    useEffect(()=>{
        if (Tipo) {        
            getStock()
                .then(data => setProduct(data.filter(prod=>prod.Tipo == Tipo)))
                .catch(err => console.log(err))
                .finally(() => setLoading(false))
            
        } else {        
            getStock()
                .then(data => setProduct(data))
                .catch(err => console.log(err))
                .finally(() => setLoading(false))
            
        }
    }, [Tipo])

    const link = () => {
        console.log("clickeaste ${this.key}");
    }
    return (
        <>
            <Header greetings="On stock" />
            <ItemList products={products} />
        </>
    )
}

export default ItemListContainer