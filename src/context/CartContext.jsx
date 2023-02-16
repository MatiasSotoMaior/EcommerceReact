import React, { useState, useContext } from 'react'

export const CartContext = React.createContext([])
export const useCartContext = () => useContext(CartContext)

function CartProvider({ children }) {
    const [cart, setCart] = useState([])

    const onBuyClickOk = () => {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Compra exitosa',
            showConfirmButton: false,
            timer: 1500
        })
    }

    const onBuyClickNotOk = () => {
        return (
            <>
                <div id="liveAlertPlaceholder"></div>
                <button type="button" class="btn btn-primary" id="liveAlertBtn">Show live alert</button>
            </>
        )
    }

    const signIn = false

    const handleBuyClick = () => { signIn === true ? onBuyClickOk : onBuyClickNotOk }

    const clearCart = () => { setCart([]) }

    const isInCart = (id) => cart.find(product => product.id === id) ? true : false;

    const removeProduct = (id) => setCart(cart.filter(product => product.id !== id))

    const addProduct = (item, quantity) => {
        if (isInCart(item.id)) {
            setCart(cart.map(product => {
                return product.id === item.id ? { ...product, quantity: product.quantity + quantity } : product
            }));
        } else {
            setCart([...cart, { ...item, quantity }])
        }
    }

    const totalPrice = () => {
        return cart.reduce((prev, act) => prev + act.quantity * act.Precio, 0);
    }
    const totalProducts = () => cart.reduce((acumulador, productoActual) => acumulador + productoActual.quantity, 0)

    return (
        <CartContext.Provider value={{
            clearCart,
            isInCart,
            removeProduct,
            addProduct,
            totalPrice,
            totalProducts,
            onBuyClickOk,
            handleBuyClick,
            signIn,
            cart
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider