import React from 'react'
import Layout from './components/Layout'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Nav from './components/Nav'
import Home from './pages/Home'
import Login from './pages/Login'
import Setting from './pages/Setting'
import UserPage from './pages/UserPage'
function App() {
    return (
        <div>
            <Nav />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/setting' element={<Setting />} />
                <Route path='/user/:id' element={<UserPage />} />
            </Routes>
        </div>
    )
}

export default App