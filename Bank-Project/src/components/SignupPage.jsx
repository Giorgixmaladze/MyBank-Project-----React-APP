import { useEffect, useState } from "react";
import useForm from "../hooks/useForm";
import "./Signup.css"
import google from "./images/google.png"
import facebook from "./images/facebook.png"
import apple from "./images/apple.png"
import article from "./images/article.png"
import Navigation from "./Navigation";
import Footer from "./footer";

const Signup = () => {
    const [userData, handleSubmit] = useForm();
    const [review, setReview] = useState("")
    const [individualReview, setIndividualReview] = useState([])
    const [buisnessReview, setBuisnessReview] = useState([])

    const setIndividuals = () => {
        const reviewList = [
            { name: "Sara T", review: "YourBank has been my trusted financial partner for years. Their personalized service and innovative digital banking solutions have made managing my finances a breeze." },
            { name: "John D", review: "I recently started my own business, and YourBank has been instrumental in helping me set up my business accounts and secure the financing I needed. Their expert guidance and tailored solutions have been invaluable." },
            { name: "Emily G", review: "I love the convenience of YourBank's mobile banking app. It allows me to stay on top of my finances and make transactions on the go. The app is user-friendly and secure, giving me peace of mind." }
        ]
        setIndividualReview(reviewList)
        setBuisnessReview([])
        setReview("For-individuals")
    }
    const setBuisness = () => {
        const buisnessReviews = [
            { name: "Marc W", review: "This bank was so easy to set up my new business account with. App works like a dream and it added my new debit card to my iPhone immediately - had delivery of the actual card within 3 working days. I am very impressed" },
            { name: "Milly", review: "Really easy to set up an account (unlike another bank which made me jump through hoops and then declined anyway!!). Just frustrating that you can only get one director in the basic level account and they only tell you that after you sign up…" },
            { name: "Joseph G", review: "As always great never any problems. I have another business account and never had any issues. Thanks Guys." }
        ]
        setReview("For-Buisness")
        setBuisnessReview(buisnessReviews)
    }

    console.log(individualReview)
    console.log(buisnessReview)




    return (
        <>
            <Navigation />
            <main id="Signup">
                <div id="registrationBlock">
                    <div id="Background">
                        <div id="background2">
                            <div id="signupHeader">
                                <h1>Sign Up</h1>
                                <p>Join our community today! Create an account to unlock exclusive features and personalized experiences.</p>
                            </div>
                            <div id="form">
                                <form onSubmit={handleSubmit}>
                                    <input type="text" placeholder="Enter First Name" required name="firstname" />
                                    <input type="text" placeholder="Enter Last Name" required name="lastname" />
                                    <input type="email" placeholder="Enter your Email" required name="email" />
                                    <input type="password" placeholder="Enter your Password" name="password" />
                                    <button>Submit</button>
                                </form>
                                <button id="loginButton">Login</button>
                                <div id="continue-with">
                                    <div></div>
                                    <p>Or Continue With</p>
                                    <div></div>
                                </div>
                                <div id="sub-accounts">
                                    <div id="google">
                                        <button>

                                            <img src={google} alt="" />
                                        </button>
                                    </div>
                                    <div id="facebook">
                                        <button>
                                            <img src={facebook} alt="" />
                                        </button>
                                    </div>
                                    <div id="apple">
                                        <button>

                                            <img src={apple} alt="" />
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>
                <div id="testimonials">
                    <div id="testimonials-header">
                        <span id="text">
                            <h1><b>Our</b> Testimonials</h1>
                            <p>Lorem ipsum dolor sit amet consectetur. Blandit odio semper risus pellentesque elit. Pellentesque eget ut imperdiet nulla penatibus. Nascetur viverra arcu sed amet cursus purus.</p>
                        </span>
                        <div id="decision">
                            <span>
                                <button id="individuals" onClick={setIndividuals} style={review === "For-individuals" ? { backgroundColor: "#caff33", } : { color: "white", background: "transparent" }}>For Individuals</button>
                                <button id="buisness" onClick={setBuisness} style={review === "For-Buisness" ? { backgroundColor: "#caff33" } : { color: "white", background: "transparent" }}>For Buisness</button>
                            </span>

                        </div>

                    </div>
                    <div id="reviews">


                        {
                            review === "For-Buisness" ? (
                                <div id="reviews-child" style={{ display: review === "For-Buisness" ? "flex" : "none" }}>
                                    {buisnessReview.map(item => {
                                        return (
                                            <div id="review">
                                                <div id="article">
                                                    <div></div>
                                                    <img src={article} alt="" />
                                                    <div></div>
                                                </div>


                                                <p>{item.review}</p>
                                                <h3>{item.name}</h3>
                                            </div>
                                        )


                                    })}
                                </div>
                            ) : (
                                <div id="reviews-child" style={{ display: review === "For-individuals" ? "flex" : "none" }}>
                                    {
                                        individualReview.map(item => {
                                            return (

                                                <div id="review">
                                                    <div id="article">
                                                        <div></div>
                                                        <img src={article} alt="" />
                                                        <div></div>
                                                    </div>

                                                    <p>{item.review}</p>
                                                    <h3>{item.name}</h3>
                                                </div>

                                            )
                                        })
                                    }
                                </div>
                            )
                        }

                    </div>
                </div>


            </main>
            <Footer />
        </>
    );
};

export default Signup;