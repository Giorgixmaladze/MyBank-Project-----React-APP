import { use, useEffect, useState } from 'react'
import Signup from './components/regitsrations/SignupPage'
import Navigation from './components/Navigation';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import Login from './components/regitsrations/Login';
import Home from './components/Home/Home';
import Careers from './components/careers-page/Careers';
import About from './components/about-page/About';
import Security from './components/security-page/Security';
function App() {
  const navigate = useNavigate()
  const signedUp = localStorage.getItem("signed")
  const logged = localStorage.getItem("logged")
  useEffect(() => {
    if (signedUp && logged) {
      navigate('/')
    }else if(signedUp){
      navigate("/login")
    }else{
      navigate("/signup")
    }
  }, [])


  return (

    <Routes>

      <Route path='/signup' element={<Signup />} />
      <Route path='/login' element={<Login />} />
      <Route path='/' element ={<Home />} />
      <Route path='/careers' element = {<Careers />}/>
      <Route path='/about' element = {<About />}/>
      <Route path='/security' element ={<Security />} />
    </Routes>

  )
}

export default App
