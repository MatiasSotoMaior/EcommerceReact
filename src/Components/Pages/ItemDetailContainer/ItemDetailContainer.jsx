import { getFirestore, doc, getDoc } from 'firebase/firestore'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getStock } from '../../../helpers/getStock'
import ItemDetail from '../../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {
    const [products, setProduct] = useState({})
    const { productID } = useParams()

    useEffect(() => {
        const querydb = getFirestore();
        const queryDoc = doc(querydb, 'Stock', productID)
        getDoc(queryDoc)
            .then(res => setProduct({ id: res.id, ...res.data()}))
    }, [productID])

    // useEffect(()=>{
    //     getStock()
    //     .then(data=>setProduct(data.find(prod => prod.ID == productID)))
    //     .catch(err=>console.log(err))
    // }, [productID])

    return (
        <ItemDetail products={products} />
    )
}

export default ItemDetailContainer