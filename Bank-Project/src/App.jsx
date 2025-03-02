import { useEffect, useState } from 'react'
import Signup from './components/regitsrations/SignupPage'
import Navigation from './components/regitsrations/Navigation';
function App() {
  const base = [];
  useEffect(() =>{
    localStorage.setItem("DataBase",JSON.stringify(base))
},[base])
  return (
    <>
      <Navigation />
      <Signup data={base}/>
    </>
  )
}

export default App
