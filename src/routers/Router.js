import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Shop from '../pages/Shop'
import Signin from '../pages/Signin'
import Signup from '../pages/Signup'
import ProductDetail from '../pages/ProductDetail'
import Cart from '../pages/Cart'
import Checkout from '../pages/Checkout'
const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='home' />} />
        <Route path='home' element={<Home />} />
        <Route path='cart' element={<Cart />} />
        <Route path='signin' element={<Signin />} />
        <Route path='signup' element={<Signup />} />
        <Route path='shop/id' element={<ProductDetail />} />
        <Route path='shop' element={<Shop />} />
        <Route path='chechout' element={<Checkout />} />
    </Routes>
  )
}

export default Router