import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getStock } from '../../../helpers/getStock'
import ItemDetail from '../../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {
    const [products, setProduct] = useState({})
    const {productID} = useParams()

    useEffect(()=>{
        getStock()
        .then(data=>setProduct(data.find(prod => prod.ID == productID)))
        .catch(err=>console.log(err))
    }, [])
    return (
        <ItemDetail products={products}/>
    )
}

export default ItemDetailContainer