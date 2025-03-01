import { useEffect, useState } from 'react'
import Signup from './components/SignupPage'
function App() {
  const [userData,setUserData] = useState([]);
  return (
    <>
      <Signup/>
    </>
  )
}

export default App
