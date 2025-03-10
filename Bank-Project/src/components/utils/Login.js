import { useNavigate } from "react-router-dom"

const login = (e) =>{
    e.preventDefault()
    const data = new FormData(e.target)
    console.log(Array.from(data))




}

export default login