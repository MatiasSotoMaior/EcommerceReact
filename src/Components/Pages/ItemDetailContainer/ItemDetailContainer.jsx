import { getFirestore, doc, getDoc } from 'firebase/firestore'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Loading from '../../Loading/Loading'
import ItemDetail from '../../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {
    const [products, setProduct] = useState({})
    const [loading, setLoading] = useState(true)
    const { productID } = useParams()

    useEffect(() => {
        const querydb = getFirestore();
        const queryDoc = doc(querydb, 'Stock', productID)
        getDoc(queryDoc)
            .then(res => setProduct({ id: res.id, ...res.data() }))
            .finally(() => setLoading(false))
    }, [productID])

    return (
        <>
            {loading ?
                <Loading /> :
                <ItemDetail products={products} />
            }
        </>
    )
}

export default ItemDetailContainer