import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import Collection from './pages/Collection/Collection'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import Product from './pages/Product/Product'
import Cart from './pages/Cart/Cart'
import Login from './pages/Login/Login'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Orders from './pages/Orders/Orders'
import './index.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/collection' element={<Collection/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/product/:productId' element={<Product/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/Place-order' element={<PlaceOrder/>} />
        <Route path='/orders' element={<Orders/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App