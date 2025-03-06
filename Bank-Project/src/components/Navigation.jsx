import logo from "./regitsrations/images/logo.png"
import close from "./regitsrations/images/close.png"
import { useState } from "react"


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
                            <li><a href="">Home</a></li>
                            <li><a href="">Careers</a></li>
                            <li><a href="">About</a></li>
                            <li><a href="">Security</a></li>
                        </ul>
                    </nav>
                    <div id="registrationLinks">
                        <a href="">Sign up</a>
                        <button>Login</button>
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