import logo from "./regitsrations/images/logo.png"
import mail from "./regitsrations/images/mail.png"
import phone from "./regitsrations/images/phone.png"
import location from "./regitsrations/images/location.png"

const Footer= () => {
    return(
        <footer>
            <div id="nav">
                <div id="logo">
                    <img src={logo} alt="" />
                    <h2>MyBank</h2>
                </div>
                <div id="pages">
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="">Careers</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Security</a></li>
                    </ul>
                </div>
            </div>
            <div className="line"></div>
            <div id="contact">
                <span id="mail">
                    <img src={mail} alt="" />
                    <p>hello@world.com</p>
                </span>
                <span id="phone">
                    <img src={phone} alt="" />
                    <p>+91 91813 23 2309</p>
                </span >
                <span id="location">
                    <img src={location} alt="" />
                    <p>Somewhere in the World</p>
                </span>
            </div>
            <div className="line"></div>
            <div id="privacy">
                <div id="socials">
                    <button id="facebook2"></button>
                    <button id="tweet"></button>
                    <button id="linkedin"></button>
                </div>
                <p>MyBank All Rights Reserved</p>
                <div id="services">
                    <p>Privacy Policy</p>
                    <div></div>
                    <p>Terms of Service</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer