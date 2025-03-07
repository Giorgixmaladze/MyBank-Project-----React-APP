import { use, useEffect, useState } from 'react'
import Signup from './components/regitsrations/SignupPage'
import Navigation from './components/Navigation';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import Login from './components/regitsrations/Login';
function App() {
  const navigate = useNavigate()
  const signedUp = JSON.parse(localStorage.getItem("registered"))
  useEffect(() => {
    if (!signedUp) {
      navigate('/')
    }else{
      navigate("/login")
    }
  }, [])


  return (

    <Routes>

      <Route path='/' element={<Signup />} />
      <Route path='/login' element={<Login />} />

    </Routes>


  )
}

export default App
