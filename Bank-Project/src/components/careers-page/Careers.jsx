import Footer from "../footer"
import Navigation from "../Navigation"
import { setQuestions } from "../utils/choice"
import "./careers.css"

const Careers = () => {
    const questions = setQuestions()

    return (
        <>
        <div id="block">
            <Navigation />


            <div id="introduction">
                <div id="introduction-child">
                    <div id="welcome">
                        <span id="welcome-header">
                            <h1>Welcome To <span>MyBank</span> Careers</h1>
                        </span>
                        <span id="welcome-description">

                            <p>Join our team and embark on a rewarding journey in the banking industry. At YourBank, we are committed to fostering a culture of excellence and providing opportunities for professional growth. With a focus on innovation, customer service, and integrity, we strive to make a positive impact in the lives of our customers and communities. Join us today and be a part of our mission to shape the future of banking.</p>
                        </span>

                    </div>
                    <div id="img">
                        <div></div>
                    </div>
                </div>
            </div>
            <div id="values">
                <div id="values-header">

                    <h2>Our <span>Values</span></h2>
                    <p>At YourBank, our values form the foundation of our organization and guide our actions. We believe in upholding the highest standards of integrity, delivering exceptional service, and embracing innovation. These values define our culture and shape the way we work together to achieve our goals.</p>
                </div>
                <div id="values-body">
                    <div className="value">
                        <div>
                            <h2>Integrity</h2>
                            <p>We conduct ourselves with utmost honesty, transparency, and ethical behavior. We believe in doing what is right for our customers, colleagues, and stakeholders, even when faced with difficult choices.</p>
                        </div>

                    </div>
                    <div className="value">
                        <div>
                            <h2>Customer Centricity</h2>
                            <p>Our customers are at the heart of everything we do. We are dedicated to understanding their needs, providing personalized solutions, and delivering exceptional service that exceeds expectations.</p>
                        </div>
                    </div>
                    <div className="value">
                        <div>
                            <h2>Collaboration</h2>
                            <p>We foster a collaborative and inclusive work environment, where teamwork and diversity are celebrated. By leveraging the unique strengths and perspectives of our employees, we drive innovation and achieve greater success together.</p>
                        </div>
                    </div>
                    <div className="value">
                        <div>
                            <h2>Innovation</h2>
                            <p>We embrace change and constantly seek innovative solutions to meet the evolving needs of our customers. We encourage our employees to think creatively, challenge conventions, and explore new ideas to drive the future of banking.</p>
                        </div>
                    </div>
                </div>

            </div>
            <div id="careers-benefits">
                <div id="careers-benefits-header">
                    <h2>Our <span>Benefits</span></h2>
                    <p>At YourBank, we value our employees and are dedicated to their well-being and success. We offer a comprehensive range of benefits designed to support their personal and professional growth.</p>
                </div>
                <div id="careers-benefits-body">
                    <div className="body-block">
                        <div className="career-benefit">
                            <span>
                                <div>
                                    <img src="public/careers-images/stats.png" alt="" />
                                </div>
                                <h4>Competitive Compensation</h4>
                            </span>
                            
                                <p>We provide a competitive salary package that recognizes the skills and expertise of our employees. YourBank believes in rewarding exceptional performance and offering opportunities for financial growth.</p> 
                            
                           
                        </div>
                    </div>
                    <div className="body-block">
                        <div className="career-benefit">
                            <span>
                                <div>
                                    <img src="public/careers-images/light.png" alt="" />
                                </div>
                                <h4>Health and Wellness</h4>
                            </span>
                            <p>We prioritize the health and well-being of our employees by providing comprehensive medical, dental, and vision insurance plans. We also offer wellness programs, gym memberships, and resources to support a healthy lifestyle.</p>
                        </div>
                    </div>
                    <div className="body-block">
                        <div className="career-benefit">
                            <span>
                                <div>
                                    <img src="public/careers-images/job.png" alt="" />
                                </div>
                                <h4>Retirement Planning</h4>
                            </span>
                            <p>YourBank is committed to helping employees plan for their future. We offer a retirement savings plan with a generous employer match to help them build a secure financial foundation for the long term.</p>
                        </div>
                    </div>
                    <div className="body-block">
                        <div className="career-benefit">
                            <span>
                                <div>
                                    <img src="public/careers-images/stack.png" alt="" />
                                </div>
                                <h4>Work-Life Balance</h4>
                            </span>
                            <p>We understand the importance of maintaining a healthy work-life balance. YourBank offers flexible work arrangements, paid time off, parental leave, and other programs that support employees in managing their personal and professional commitments.</p>
                        </div>
                    </div>
                </div>
            </div>
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
        <Footer />
        </>
    )



}

export default Careers