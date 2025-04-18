import "./home.css";
import Navigation from "../Navigation";
import { fetchData, exchange } from "../utils/fetchData";
import { useEffect, useState } from "react";
import { setOnlineBanking, setQuestions } from "../utils/choice";
import Footer from "../footer";


const Home = () => {

    const [data, setData] = useState([])
    const [value, setValue] = useState(0)
    const [advantage, setAdvantage] = useState("online-banking")
    const [review, setReview] = useState("")
    const [individualReview, setIndividualReview] = useState([])
    const [buisnessReview, setBuisnessReview] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()
        setValue(() => exchange(e.target.curr1.value, e.target.curr2.value, e.target.from.value))
    }
    const online = setOnlineBanking()

    useEffect(() => {
        fetchData(setData)
    }, [])
    const questions = setQuestions()

    const [choice, setChoice] = useState("")
    const [IndividualAdvantage, setIndividualAdvantage] = useState([])
    const [buisnessAdvantage, setBuisnessAdvantage] = useState([])



    const setIndividuals = () => {
        const benefits = [
            { benefitName: "Checking Accounts", benefit: "Enjoy easy and convenient access to your funds with our range of checking account options. Benefit from features such as online and mobile banking, debit cards, and free ATM access.", img: "public/home-images/job.png", id: "job" },
            { benefitName: "Savings Accounts", benefit: "Build your savings with our competitive interest rates and flexible savings account options. Whether you're saving for a specific goal or want to grow your wealth over time, we have the right account for you.", img: "public/home-images/save.png", id: "save" },
            { benefitName: "Loans and Mortgages", benefit: "Realize your dreams with our flexible loan and mortgage options. From personal loans to home mortgages, our experienced loan officers are here to guide you through the application process and help you secure the funds you need.", img: "public/home-images/money.png", id: "money" }
        ]
        setIndividualAdvantage(benefits)
        setBuisnessAdvantage([])
        setChoice("For-individuals")
    }
    const setBuisness = () => {
        const benefits = [
            { benefitName: "Cash flow management", benefit: "Efficient cash flow management is vital for the financial health and stability of a business. Banking services, including money management instruments and electronic payments help businesses to optimise their cash flow, oversee liquidity, as well as to sure that there are sufficient funds in the account to fulfil their financial obligations.", img: "public/home-images/money.png", id: "cashFlow" },
            { benefitName: "Custom Settings", benefit: "make your own decisions about the exact feature access a user has. oversee liquidity, as well as to sure that there are sufficient funds in the account to fulfil their financial obligations.", img: "public/home-images/settings.png", id: "customSettings" },
            { benefitName: "Keeping Finances Separate", benefit: "Maintaining a distinct boundary between personal and professional is analogous to keeping your transactions private. This division guarantees that your purchases, income, and business expenses are tracked independently from your personal spending.", img: "public/home-images/card.png", id: "seperate" }
        ]
        setChoice("For-Buisness")
        setBuisnessAdvantage(benefits)
    }

    const setInd = () => {
        const reviewList = [
            { name: "Sara T", review: "YourBank has been my trusted financial partner for years. Their personalized service and innovative digital banking solutions have made managing my finances a breeze." },
            { name: "John D", review: "I recently started my own business, and YourBank has been instrumental in helping me set up my business accounts and secure the financing I needed. Their expert guidance and tailored solutions have been invaluable." },
            { name: "Emily G", review: "I love the convenience of YourBank's mobile banking app. It allows me to stay on top of my finances and make transactions on the go. The app is user-friendly and secure, giving me peace of mind." }
        ]
        setIndividualReview(reviewList)
        setBuisnessReview([])
        setReview("For-individuals")
    }
    const setBuis = () => {
        const buisnessReviews = [
            { name: "Marc W", review: "This bank was so easy to set up my new business account with. App works like a dream and it added my new debit card to my iPhone immediately - had delivery of the actual card within 3 working days. I am very impressed" },
            { name: "Milly", review: "Really easy to set up an account (unlike another bank which made me jump through hoops and then declined anyway!!). Just frustrating that you can only get one director in the basic level account and they only tell you that after you sign up…" },
            { name: "Joseph G", review: "As always great never any problems. I have another business account and never had any issues. Thanks Guys." }
        ]
        setReview("For-Buisness")
        setBuisnessReview(buisnessReviews)
    }


    return (
        <div id="container">
            <Navigation />

            <main id="home">
                <div id="top">
                    <div id="greet">
                        <h1>Welcome to YourBank
                            Empowering Your <span>Financial Journey</span></h1>
                        <p>At YourBank, our mission is to provide comprehensive banking solutions that empower individuals and businesses to achieve their financial goals. We are committed to delivering personalized and innovative services that prioritize our customers' needs.</p>
                    </div>
                    <div id="left">
                        <div id="exchange">
                            <h2>Money Exchange</h2>
                            <form onSubmit={handleSubmit}>
                                <span>
                                    <select name="curr1" id="">
                                        {data.length && (
                                            data.map(info => {
                                                const [key, value] = info;
                                                return <option value={value} key={key}>{`${key}`}</option>
                                            })
                                        )
                                        }
                                    </select>
                                    <input type="number" className="from" name="from" />
                                    <input type="text" value={value} className="from" name="to" readOnly />
                                    <select name="curr2" id="">
                                        {data.length && (
                                            data.map(info => {
                                                const [key, value] = info;
                                                return <option value={value} key={key}>{`${key}`}</option>
                                            })
                                        )
                                        }
                                    </select>
                                </span>

                                <button id="exchangeTo">Exchange</button>

                            </form>
                        </div>
                    </div>
                    <div id="right"></div>
                </div>
                <div id="products">
                    <div id="products-top">
                        <span id="header">
                            <h2>Our <span>Products</span></h2>
                            <p>Discover a range of comprehensive and customizable banking products at YourBank, designed to suit your unique financial needs and aspirations</p>
                        </span>

                        <div id="decision">
                            <span>
                                <button id="individuals" onClick={setIndividuals} style={choice === "For-individuals" ? { backgroundColor: "#caff33", } : { color: "white", background: "transparent" }}>For Individuals</button>
                                <button id="buisness" onClick={setBuisness} style={choice === "For-Buisness" ? { backgroundColor: "#caff33" } : { color: "white", background: "transparent" }}>For Buisness</button>
                            </span>

                        </div>
                    </div>


                    <div id="benefits">
                        {
                            choice === "For-individuals" ? (
                                IndividualAdvantage.map(item => {
                                    return (
                                        <div>
                                            <button id={item.id}>
                                                <img src={item.img} alt={item.benefitName} />
                                            </button>

                                            <h2>{item.benefitName}</h2>
                                            <p>{item.benefit}</p>
                                        </div>
                                    )
                                })
                            ) : (
                                buisnessAdvantage.map(item => {
                                    return (
                                        <div>
                                            <button id={item.id}>
                                                <img src={item.img} alt={item.benefitName} />
                                            </button>
                                            <h2>{item.benefitName}</h2>
                                            <p>{item.benefit}</p>
                                        </div>
                                    )
                                })
                            )
                        }
                    </div>
                </div>
                <div id="cases">
                    <span id="case-head">
                        <h2>
                            Use Cases
                        </h2>
                        <p>At YourBank, we cater to the diverse needs of individuals and businesses alike, offering a wide range of financial solutions</p>
                    </span>
                </div>
                <div id="ind">
                    <div id="ind-left">
                        <div className="benefits">
                            <div>
                                <img src="public/home-images/cash.png" />
                            </div>
                            <h3>Managing Personal Finances</h3>

                        </div>
                        <div className="benefits">
                            <div>
                                <img src="public/home-images/future.png" alt="" />
                            </div>
                            <h3>Saving for the Future</h3>
                        </div>
                        <div className="benefits">
                            <div>
                                <img src="public/home-images/bank.png" alt="" />
                            </div>
                            <h3>Homeownership</h3>
                        </div>
                        <div className="benefits">
                            <div>
                                <img src="public/home-images/education.png" alt="" />
                            </div>
                            <h3>Education Funding</h3>
                        </div>
                    </div>
                    <div id="ind-right">
                        <span>
                            <h2 id="ind-h2">For Individuals</h2>
                            <p>For individuals, our mortgage services pave the way to homeownership, and our flexible personal loans provide vital support during various life milestones. We also prioritize retirement planning, ensuring a financially secure future for our customers</p>
                        </span>
                        <div className="percentages">
                            <span>
                                <h2 className="percent">78%</h2>
                                <p>Secure Retirement Planning</p>
                            </span>
                            <div className="dashedLine"></div>
                            <span>
                                <h2 className="percent">63%</h2>
                                <p>Manageable Debt Consolidation</p>
                            </span>
                            <div className="dashedLine"></div>
                            <span>
                                <h2 className="percent">91%</h2>
                                <p>Reducing financial burdens</p>
                            </span>
                        </div>
                        <button>Learn more</button>
                    </div>
                </div>

                <div id="buis">
                    <div id="buis-left">
                        <span>
                            <h2 id="buis-h2">For Buisness</h2>
                            <p> For businesses, we empower growth with working capital solutions that optimize cash flow, and our tailored financing options fuel business expansion. Whatever your financial aspirations, YourBank is committed to providing the right tools and support to achieve them</p>
                        </span>
                        <div className="percentages">
                            <span>
                                <h2 className="percent">78%</h2>
                                <p>Secure Retirement Planning</p>
                            </span>
                            <div className="dashedLine"></div>
                            <span>
                                <h2 className="percent">63%</h2>
                                <p>Manageable Debt Consolidation</p>
                            </span>
                            <div className="dashedLine"></div>
                            <span>
                                <h2 className="percent">91%</h2>
                                <p>Reducing financial burdens</p>
                            </span>
                        </div>

                    </div>
                    <div id="buis-right">
                        <div className="benefits">
                            <div>
                                <img src="public/home-images/company.png" />
                            </div>
                            <h3>Startups and Entrepreneurs</h3>

                        </div>
                        <div className="benefits">
                            <div>
                                <img src="public/home-images/money.png" alt="" />
                            </div>
                            <h3>Cash Flow Management</h3>
                        </div>
                        <div className="benefits">
                            <div>
                                <img src="public/home-images/stat.png" />
                            </div>
                            <h3>Business Expansion</h3>
                        </div>
                        <div className="benefits">
                            <div>
                                <img src="public/home-images/dollar.png" />
                            </div>
                            <h3>Payment Solutions</h3>
                        </div>
                    </div>
                </div>
                <div id="features">
                    <div id="features-header">
                        <h2>Our <span>Features</span></h2>
                        <p>Experience a host of powerful features at YourBank, including seamless online banking, secure transactions, and personalized financial insights, all designed to enhance your banking experience</p>
                    </div>
                    <div id="features-body">
                        <div id="list">
                            <button style={{ backgroundColor: advantage === "online-banking" ? "#191919" : "transparent", color: advantage === "online-banking" ? "#CAFF33" : "white" }} onClick={() => setAdvantage("online-banking")}>Online Banking</button>
                            <button style={advantage === "financical-tools" ? { backgroundColor: "#191919", color: "#CAFF33" } : { backgroundColor: "transparent", color: "white" }} onClick={() => { setAdvantage("financical-tools") }}>Financical Tools</button>
                            <button style={advantage === "customer-support" ? { backgroundColor: "#191919", color: "#CAFF33" } : { backgroundColor: "transparent", color: "white" }} onClick={() => { setAdvantage("customer-support") }} >Customer Support</button>
                        </div>
                        <div id="advantages">
                            {
                                advantage === "online-banking" ? (
                                    online.map(benefit => {
                                        return (
                                            <div>
                                                <span>
                                                    <h3>{benefit.name}</h3>
                                                    <img src={benefit.img} alt="" />
                                                </span>

                                                <p>{benefit.text}</p>
                                            </div>
                                        )
                                    })
                                ) : advantage === "financical-tools" ? (
                                    online.map(benefit => {
                                        return (
                                            <div>
                                                <span>
                                                    <h3>{benefit.name}</h3>
                                                    <img src={benefit.img} alt="" />
                                                </span>

                                                <p>{benefit.text}</p>
                                            </div>
                                        )
                                    })
                                ) : (<h1 style={{ color: "white" }}>Coming soon...</h1>)
                            }
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
                <div id="testimonials">
                    <div id="testimonials-header">
                        <span id="text">
                            <h1><b>Our</b> Testimonials</h1>
                            <p>Lorem ipsum dolor sit amet consectetur. Blandit odio semper risus pellentesque elit. Pellentesque eget ut imperdiet nulla penatibus. Nascetur viverra arcu sed amet cursus purus.</p>
                        </span>
                        <div id="decision">
                            <span>
                                <button id="individuals" onClick={setInd} style={review === "For-individuals" ? { backgroundColor: "#caff33", } : { color: "white", background: "transparent" }}>For Individuals</button>
                                <button id="buisness" onClick={setBuis} style={review === "For-Buisness" ? { backgroundColor: "#caff33" } : { color: "white", background: "transparent" }}>For Buisness</button>
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
                                                    <img src="public/home-images/article.png" alt="" />
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
                                        individualReview.map((item, index) => {
                                            return (

                                                <div key={index} id="review">
                                                    <div id="article">
                                                        <div></div>
                                                        <img src="public/home-images/article.png" alt="" />
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
            </main >
            <Footer />

        </div >
    )
}

export default Home;