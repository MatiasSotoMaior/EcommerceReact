import React, { useState } from 'react'
import { useCartContext } from '../../context/CartContext'
import { getFirestore, collection, addDoc} from 'firebase/firestore'
import { useNavigate } from 'react-router-dom';
import './CreateOrder.css'

const CreateOrder = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        nombre: "",
        email: "",
        direccion: "",
        phone: "",
    });

    const { cart, totalPrice, clearCart, onBuyClickOk } = useCartContext();

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    const handleFinishPurchase = () => {

        if (formData.nombre == "" || formData.email == "" || formData.direccion == "" || formData.phone == "") {
            Swal.fire({
                icon: 'error',
                title: 'Es necesario completar todos los campos',
                text: 'Asegurate de completar todo antes de finalizar',
            })
        } else {
            const order = {}
            order.buyer = formData
            order.total = totalPrice()
            order.items = cart.map(prod => ({ id: prod.id, Precio: prod.Precio, Name: prod.Name, quantity: prod.quantity }))
            const db = getFirestore()
            const queryCollection = collection(db, 'orders')
            addDoc(queryCollection, order)
                .then(() => { clearCart(), onBuyClickOk() })
                .then(() => {
                    setFormData({
                        nombre: "",
                        email: "",
                        direccion: "",
                        phone: "",
                    })
                })
                .finally(() => { redirectToHome() })
        }
    }

    const redirectToHome = () => {
        setTimeout(() => {
            navigate("/");
        }, 4000);
    }

    return (
        <>
            <div className='order'>
                <div className='orderIcon'>
                    <i className="fa-solid fa-money-check"></i>
                </div>
                <div className='orderCont d-flex'>
                    <form className='form' onChange={handleInputChange}>
                        <label htmlFor="nombre">Nombre:</label>
                        <input type="text" id="nombre" name="nombre" value={formData.nombre} />
                        <label htmlFor="phone">Celular:</label>
                        <input type="phone" id="phone" name="phone" value={formData.phone} />
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" value={formData.email} />
                        <label htmlFor="direccion">Dirección:</label>
                        <input type="text" id="direccion" name="direccion" value={formData.direccion} />
                    </form>
                    <div className='mt-3'>
                        {
                            cart.map(product =>
                                <div className='orderProduct' key={product.id}>
                                    <p className='mx-2'>{product.Name}</p>
                                    <p className='mx-2'>U: ${product.Precio}</p>
                                    <p className='mx-2'>Cantidad: {product.quantity}</p>
                                </div>)
                        }
                    </div>
                </div>
                <p className='fs-4 text-center'>TOTAL: ${totalPrice()}</p>
            </div>
            <div className='orderIcon mt-2'>
                <button className='btn btn-outline-success mx-2' onClick={() => { handleFinishPurchase() }}>Terminar compra</button>
            </div>
        </>
    )
}

export default CreateOrder