import logo from "./regitsrations/images/logo.png"
import close from "./regitsrations/images/close.png"
import { useState } from "react"
import { Link } from "react-router-dom"


const Navigation = () => {
    const [condition, setCondition] = useState(false)

    const closeSidebar = () => {
        setCondition(false)
    }
    const openSidebar = () => {
        setCondition(true)
    }

    return (
        <>
            <header>
                <div id="navigation">
                    <div id="logoDiv">

                        <img id="logo" src={logo} alt="image not found" />
                        <h2>Mybank</h2>
                    </div>

                    <nav>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/careers">Careers</Link></li>
                            <li><a href="">About</a></li>
                            <li><a href="">Security</a></li>
                        </ul>
                    </nav>
                    <div id="registrationLinks">
                        <Link to='/signup'>Sign up</Link>
                        <button id="log"> <Link to= "/login">Login</Link></button>
                    </div>

                    <button id="burgerMenu" onClick={openSidebar}></button>
                </div>
            </header>

            <div id="sidebar" style={{ display: condition === true ? "flex" : "none" }}>
                <div id="back">
                    <div id="sidebar-temp">
                        <div id="head">
                            <button onClick={closeSidebar}>
                                <img src={close} alt="" />
                            </button>
                        </div>
                        <div id="body">
                            <ul>
                                <li><a href="">Home</a></li>
                                <li><a href="">Careers</a></li>
                                <li><a href="">About</a></li>
                                <li><a href="">Security</a></li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>

        </>

    )
}

export default Navigation