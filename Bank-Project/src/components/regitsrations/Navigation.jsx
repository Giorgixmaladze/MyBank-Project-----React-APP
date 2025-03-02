import logo from "./images/logo.png"
const Navigation = () => {

    return (
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

            </div>
        </header>

    )
}

export default Navigation