import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import './Firebase/Config';
import React from 'react';
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom"
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/Pages/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './Components/Pages/ItemDetailContainer/ItemDetailContainer';
import CartContainer from './Components/Pages/CartContainer/CartContainer';
import CartProvider from './context/CartContext';
import CreateOrder from './Components/CreateOrder/CreateOrder';

function App() {
  return (
    <BrowserRouter className="App">
      <CartProvider>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/category/:Tipo' element={<ItemListContainer />} />
          <Route path='/detail/:productID' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<CartContainer />} />
          <Route path='*' element={<Navigate to='/' />} />
          <Route path='/CreateOrder' element={<CreateOrder/>}/>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
