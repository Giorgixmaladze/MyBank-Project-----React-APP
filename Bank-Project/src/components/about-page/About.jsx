import Navigation from "../Navigation"
import "./About.css"
import Footer from "../footer"

const About = () => {
    return (
        <>
            <Navigation />
            <div id="main-about">
                <div id="about-header">
                    <div id="about-introduction">
                        <h4>Welcome to MyBank</h4>
                        <h1>Where Banking Meets <span>Excellence!</span></h1>
                        <p>At YourBank, we believe that banking should be more than just transactions. It should be an experience that empowers individuals and businesses to thrive and reach their financial goals. As a trusted financial institution, we are committed to delivering exceptional banking services that go beyond expectations. With a focus on innovation, personalized solutions, and unwavering integrity, we strive to provide the best banking experience for our valued customers. Join us on this exciting journey and discover a new level of banking excellence.</p>
                    </div>
                    <div id="about-img"></div>
                </div>
                <div id="mission">
                    <div id="mission-header">
                        <h2>Mission & Vision</h2>
                        <p>We envision being a leading force in the industry, driven by innovation, integrity, and inclusivity, creating a brighter financial future for individuals and businesses while maintaining a strong commitment to customer satisfaction and community development</p>
                    </div>
                    <div className="mission-vision">

                        <div className="box">
                            <img src="public/about-images/grow.png" alt="Mission Image" />
                            <div>
                                <h3>Mission</h3>
                                <p>We forge new paths in technological advancements to create a better future. <span className="highlight">Our mission is to establish cutting-edge innovations</span> to bring efficiency to our clients, driving progress in the global market.</p>
                            </div>

                        </div>


                        <div className="box">
                            <img src="public/about-images/vision.png" alt="Vision Image" />
                            <div>

                                <h3>Vision</h3>
                                <p>Our vision is to pioneer a new frontier in industry-leading solutions that prioritize sustainability, efficiency, and excellence. <span className="highlight">We aim to revolutionize business strategies</span> to support a brighter and more sustainable future.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <section class="press-section">
                    <span>
                        <h2>Press Releases</h2>
                        <p>Stay updated with the latest happenings and exciting developments at YourBank through our press releases.</p>
                    </span>


                    <div class="press-container">

                        <div class="press-card">
                            <img src="public/about-images/agreement.png" alt="Handshake" />
                            <div class="press-content">
                                <h3>YourBank Launches New Rewards Program to Enhance Customer Loyalty and Satisfaction</h3>
                                <p class="press-meta">Location: Global | Date: March 27, 2025</p>
                                <p>YourBank is proud to announce the launch of our new Rewards Program, designed to provide customers with exclusive benefits...</p>
                            </div>
                        </div>

                        <div class="press-card">
                            <img src="public/about-images/building.png" alt="Skyscrapers" />
                            <div class="press-content">
                                <h3>YourBank Expands Branch Network with Opening of New Location in Chennai</h3>
                                <p class="press-meta">Location: India | Date: March 25, 2025</p>
                                <p>We are excited to announce the grand opening of our newest branch in Chennai, India. This expansion is part of our commitment to improving accessibility...</p>
                            </div>
                        </div>

                        <div class="press-card">
                            <img src="public/about-images/papers.png" alt="Business Meeting" />
                            <div class="press-content">
                                <h3>YourBank Partners with Local Nonprofits to Support Financial Education Initiatives</h3>
                                <p class="press-meta">Location: USA | Date: March 24, 2025</p>
                                <p>Our partnership with local nonprofit organizations aims to provide financial literacy programs to underserved communities...</p>
                            </div>
                        </div>

                        <div class="press-card">
                            <img src="public/about-images/global.png" alt="Sustainable Banking" />
                            <div class="press-content">
                                <h3>YourBank Launches Sustainable Banking Initiative to Promote Environmental Responsibility</h3>
                                <p class="press-meta">Location: Global | Date: March 22, 2025</p>
                                <p>As part of our commitment to sustainability, YourBank introduces new initiatives to support green banking and eco-friendly financial solutions...</p>
                            </div>
                        </div>

                    </div>
                </section>

            </div>
            <Footer />
        </>
    )
}

export default About