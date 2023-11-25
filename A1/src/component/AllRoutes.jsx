import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../Pages/Login'
import Homepage from '../Pages/Homepage'
import PrivateRoute from './PrivateRoute'

const AllRoutes = () => {
  return (
    <Routes>
      <Route path= "/" element={
      <PrivateRoute>


         <Homepage/>
      </PrivateRoute>
      
      }/>
      <Route path= "/login" element={<Login/>}/>

    </Routes>
  )
}

export default AllRoutes
