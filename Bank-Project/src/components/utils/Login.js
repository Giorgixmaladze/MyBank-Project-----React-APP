import { useState } from "react"
import { useNavigate } from "react-router-dom"

const login = (e,navigate) =>{
    e.preventDefault()
   
    
    const data = new FormData(e.target)
    const users = JSON.parse(localStorage.getItem("Users")||[])
    let logged = localStorage.getItem("logged") || false
    const info ={}
    for(let [key,value] of data.entries()){
        info[key] = value
    }
    
    if(users.some(user => user.email === info.email && user.password === info.password)){
        localStorage.setItem("curUser",JSON.stringify(info)) 
        logged = true
        localStorage.setItem("logged",logged)
        navigate("/")
    }else{
        alert("Incorrect Password or Email")
        logged = false
        localStorage.setItem("logged",logged)
    }
    return users
}

export default login