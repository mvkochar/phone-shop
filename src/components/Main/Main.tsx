import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../../pages/Home'
import Support from '../../pages/Support'

type MainProps = {
  handleTotalPrice: (productPrice: number) => void
}

const Main = ({handleTotalPrice}:MainProps)=> {
  return (
    <Routes>
      <Route
        path='/'
        element={<Home handleTotalPrice={handleTotalPrice}/>}
      />
      <Route 
        path='support'
        element={<Support/>}
      />
    </Routes>
  )
}

export default Main