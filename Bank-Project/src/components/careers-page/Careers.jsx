import Navigation from "../Navigation"
import "./careers.css"

const Careers = () => {


    return (
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



        </div>
    )



}

export default Careers