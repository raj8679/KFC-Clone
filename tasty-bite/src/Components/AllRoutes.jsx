import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Deals from '../Pages/Deals'
import Menu from '../Pages/Menu'

const AllRoutes = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/deals" element={<Deals/>}></Route>
        <Route path="/menu" element={<Menu/>}></Route>
    </Routes>
    </>
  )
}

export default AllRoutes