import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './components/About'
import Home from './components/Home'
import Login from './components/Login'
import Logout from './components/Logout'
import Navbar from './components/Navbar'
import Register from './components/Register'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'



const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/about' element={<About/>} />
    <Route path='/login' element={<Login/>} />
    <Route path='/logout' element={<Logout/>} />
    <Route path='/register' element={<Register/>} />
    </Routes>
    </>
    
  )
}

export default App