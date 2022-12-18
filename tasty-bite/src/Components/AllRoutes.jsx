import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Deals from '../Pages/Deals'
import Menu from '../Pages/Menu'
import Cart from '../Pages/Cart'

const AllRoutes = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/deals" element={<Deals/>}></Route>
        <Route path="/menu" element={<Menu/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
    </Routes>
    </>
  )
}

export default AllRoutes