import { useEffect, useState } from 'react'
import Signup from './components/regitsrations/SignupPage'
import Navigation from './components/Navigation';
function App() {
  const base = [];
  useEffect(() =>{
    localStorage.setItem("DataBase",JSON.stringify(base))
},[base])
  return (
    <>
      <Signup data={base}/>
    </>
  )
}

export default App
