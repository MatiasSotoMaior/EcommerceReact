import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import {BrowserRouter, Navigate, Routes, Route} from "react-router-dom"
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/Pages/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './Components/Pages/ItemDetailContainer/ItemDetailContainer';
import CartContainer from './Components/Pages/CartContainer/CartContainer';

function App() {

  return (
    <BrowserRouter className="App">
      <NavBar/>
      <Routes>
      <Route path='/' element={<ItemListContainer/>}/>
      <Route path='/category/:Tipo' element={<ItemListContainer/>}/>
      <Route path='/detail/:productID' element={<ItemDetailContainer/>}/>
      <Route path='/cart' element={<CartContainer/>}/>
      <Route path='*' element={<Navigate to='/'/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
