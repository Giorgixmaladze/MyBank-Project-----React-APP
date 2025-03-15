import "./home.css";
import Navigation from "../Navigation";
import { fetchData, exchange } from "../utils/fetchData";
import { useEffect, useState } from "react";

const Home = () => {
    const [data, setData] = useState([])
    const [value, setValue] = useState(0)
    const handleSubmit = (e) => {
        e.preventDefault()
        setValue(() => exchange(e.target.curr1.value, e.target.curr2.value, e.target.from.value))
    }

    useEffect(() => {
        fetchData(setData)
    }, [])


    const [choice, setChoice] = useState("")
    const [IndividualAdvantage, setIndividualAdvantage] = useState([])
    const [buisnessAdvantage, setBuisnessAdvantage] = useState([])



    const setIndividuals = () => {
        const benefits =[
            {benefitName:"Checking Accounts",benefit:"Enjoy easy and convenient access to your funds with our range of checking account options. Benefit from features such as online and mobile banking, debit cards, and free ATM access." },
            {benefitName:"Savings Accounts", benefit:"Build your savings with our competitive interest rates and flexible savings account options. Whether you're saving for a specific goal or want to grow your wealth over time, we have the right account for you."},
            {benefitName:"Loans and Mortgages", benefit:"Realize your dreams with our flexible loan and mortgage options. From personal loans to home mortgages, our experienced loan officers are here to guide you through the application process and help you secure the funds you need."}
        ]
        setIndividualAdvantage(benefits)
        setBuisnessReview([])
        setChoice("For-individuals")
    }
    const setBuisness = () => {
        const benefits = [
            {benefitName:"Cash flow management", benefit:"Efficient cash flow management is vital for the financial health and stability of a business. Banking services, including money management instruments and electronic payments help businesses to optimise their cash flow, oversee liquidity, as well as to sure that there are sufficient funds in the account to fulfil their financial obligations."},
            { benefitName:"Custom Settings", review:"make your own decisions about the exact feature access a user has." },
            { benefitName: "Keeping Finances Separate", review:"Maintaining a distinct boundary between personal and professional is analogous to keeping your transactions private. This division guarantees that your purchases, income, and business expenses are tracked independently from your personal spending." }
        ]
        setChoice("For-Buisness")
        setBuisnessAdvantage(benefits)
    }




    return (
        <div id="container">
            <Navigation />

            <main id="home">
                <div id="top">
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
                                <button id="individuals" onClick={setIndividuals} style={review === "For-individuals" ? { backgroundColor: "#caff33", } : { color: "white", background: "transparent" }}>For Individuals</button>
                                <button id="buisness" onClick={setBuisness} style={review === "For-Buisness" ? { backgroundColor: "#caff33" } : { color: "white", background: "transparent" }}>For Buisness</button>
                            </span>

                        </div>
                    </div>


                    <div id="benefits">

                    </div>
                </div>
            </main >

        </div >
    )
}

export default Home;