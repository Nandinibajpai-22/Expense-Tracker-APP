import React from 'react'
import{ BrowserRouter as Router, Route, BrowserRouter, Routes, } from 'react-router-dom'            
import Index from './pages/index.jsx'
import NotFound from './pages/NotFound.jsx'
const App = () => {
  return <>
  <BrowserRouter>
  <Routes>
    <Route path="/"element={<Index/>} /> 
    <Route path="*" element={<NotFound />} />
  
    </Routes>


  </BrowserRouter>

    
  </>
}

export default App
