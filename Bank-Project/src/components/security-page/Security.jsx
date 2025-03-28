import Footer from "../footer"
import Navigation from "../Navigation"
import { setQuestions } from "../utils/choice"
import "./security.css"
const Security = () => {

    const questions = setQuestions()

    return (
        <>
            <Navigation />
            <div id="security">
                <div id="security-header">
                    <div id="priority">
                        <h1>
                            Your Security is Our <span>Top Priority</span>
                        </h1>
                        <p>At YourBank, we understand the importance of keeping your financial information secure. We employ robust security measures and advanced technologies to protect your personal and financial data. Rest assured that when you bank with us, your security is our utmost priority.</p>
                    </div>
                    <div id="security-image">
                        <img src="public/security-images/security.png" alt="" />
                    </div>
                </div>
                <section className="security-section">
                    <span>
                        <h2>How We <span>Protect You</span></h2>
                        <p>At YourBank, we prioritize the security and confidentiality of your financial information. Our state-of-the-art encryption technology and stringent data protection measures ensure your assets and transactions are safeguarded at all times.</p>
                    </span>


                    <div className="security-container">

                        <div className="security-card">
                            <div className="icon">🔒</div>
                            <h3>Secure Online Banking Platform</h3>
                            <p>Our online banking platform is built with multiple layers of security to safeguard your financial transactions and sensitive data.</p>
                        </div>

                        <div className="security-card">
                            <div className="icon">🛡️</div>
                            <h3>Multi-Factor Authentication</h3>
                            <p>We employ industry-leading multi-factor authentication to ensure only authorized users access your accounts.</p>
                        </div>

                        <div className="security-card">
                            <div className="icon">⚠️</div>
                            <h3>Fraud Monitoring</h3>
                            <p>Our AI-powered fraud detection continuously monitors your transactions, alerting you to any suspicious activity.</p>
                        </div>

                        <div className="security-card">
                            <div className="icon">📱</div>
                            <h3>Secure Mobile Banking</h3>
                            <p>Our mobile banking app uses the latest security protocols to keep your data encrypted and transactions safe.</p>
                        </div>

                    </div>
                </section>
                <div id="asked-questions">
                    <span id="questions-header">
                        <h2><span>Frequently</span> Asked Questions</h2>
                        <p>Still you have any questions? Contact our Team via support@yourbank.com</p>
                    </span>
                    <div id="questions">
                        {
                            questions.map(item => {
                                return (
                                    <div className="question">
                                        <h3>{item.question}</h3>
                                        <div></div>
                                        <p>{item.answer}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Security