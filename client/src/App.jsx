import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Index'
import DefaultWrapper from './layouts/DefaultWrapper'

function App() {
    return (
        <DefaultWrapper> 
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<h1>Coming soon</h1>} />
        </Routes>
        </DefaultWrapper>
    )
}

export default App
