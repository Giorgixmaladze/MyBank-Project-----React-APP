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
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/security">Security</Link></li>
                        </ul>
                    </nav>
                    <div id="registrationLinks">
                        <Link to='/signup'>Sign up</Link>
                        <button id="log"> <Link to="/login">Login</Link></button>
                    </div>

                    <button id="burgerMenu" onClick={openSidebar}></button>
                </div>
            </header>

            <div id="sidebar" style={{ display: condition === true ? "flex" : "none", zIndex: condition === true ? 1000 : 0 }}>
                <div id="back">
                    <div id="sidebar-temp">
                        <div id="head">
                            <button onClick={closeSidebar}>
                                <img src={close} alt="" />
                            </button>
                        </div>
                        <div id="body">
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/careers">Careers</Link></li>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/security">Security</Link></li>
                            </ul>
                            <span>
                                <Link to='/signup'>Sign up</Link>
                                <button id="log"> <Link to="/login">Login</Link></button>
                            </span>

                        </div>

                    </div>
                </div>
            </div>

        </>

    )
}

export default Navigation