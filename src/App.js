import React from 'react'





import {  Route, Routes } from 'react-router-dom'
import Home from './routes/home/home.component'
import Navigation from './routes/Nav/navigation.component'

import Authentication from './routes/authentication/Authentication.component'
import Shop from './routes/shop/shop.component'


const App = () => {


  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route  index element={<Home/>}/>
        <Route  path='auth' element={<Authentication/>}/>
        <Route  path='shop' element={<Shop/>}/>
     </Route>
    </Routes>
  )
}

export default App
