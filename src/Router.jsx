import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import Images from './Images.jsx'

function Router() {
  return (
    <HashRouter>
    <Routes>
        <Route  path="/" element={<App />}/> 
        <Route  path="/images" element={<Images />}/> 
    </Routes>
    </HashRouter>
  )
}

export default Router