import React from 'react'
import Header from '../../Header/Header'
import Loading from '../../Loading/Loading'
import ItemList from '../../ItemList/ItemList'
import { useState, useEffect } from "react"
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore'
import { useParams } from 'react-router-dom'

function ItemListContainer({ }) {
    const [products, setProduct] = useState([])
    const [loading, setLoading] = useState(true)
    const { Tipo } = useParams()

    useEffect(() => {
        const querydb = getFirestore();
        const queryCollection = collection(querydb, 'Stock')
        if (Tipo) {
            const queryFilter = query(queryCollection, where('Tipo', '==', Tipo))
            getDocs(queryFilter)
                .then(res => setProduct(res.docs.map(prod => ({ id: prod.id, ...prod.data() }))))
                .finally(() => setLoading(false))
        } else {
            getDocs(queryCollection)
                .then(res => setProduct(res.docs.map(prod => ({ id: prod.id, ...prod.data() }))))
                .finally(() => setLoading(false))
        }
    }, [Tipo])


    return (
        <>
            {loading ?
                <Loading /> :
                <>
                    <Header greetings="On stock" />
                    <ItemList products={products} />
                </>}
        </>
        )
}

export default ItemListContainer