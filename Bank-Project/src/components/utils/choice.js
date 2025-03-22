const setOnlineBanking = () =>{
    const benefits = [
        {name:"24/7 Account Access",text:"Enjoy the convenience of accessing your accounts anytime, anywhere through our secure online banking platform. Check balances, transfer funds, and pay bills with ease.", img:'public/home-images/arrow-up.png'},
        {name:"Mobile Banking App", text:"Stay connected to your finances on the go with our user-friendly mobile banking app. Easily manage your accounts, deposit checks, and make payments from your smartphone or tablet.",img:'public/home-images/arrow-up.png'},
        {name:"Secure Transactions", text:"Rest assured knowing that your transactions are protected by industry-leading security measures. We employ encryption and multi-factor authentication to safeguard your financial information.",img:'public/home-images/arrow-up.png'},
        {name:"Bill Pay and Transfers", text:"Save time and avoid late fees with our convenient bill pay service. Set up recurring payments or make one-time transfers between your accounts with just a few clicks.", img:'public/home-images/arrow-up.png'}
    ]
    return benefits
}

const setQuestions = () =>{
    const questions = [
        {question:"How do I open an account with YourBank?", answer:"Opening an account with YourBank is easy. Simply visit our website and click on the 'Open an Account' button. Follow the prompts, provide the required information, and complete the application process. If you have any questions or need assistance, our customer support team is available to help."},
        {question:"What documents do I need to provide to apply for a loan?", answer:"The documents required for a loan application may vary depending on the type of loan you are applying for. Generally, you will need to provide identification documents (such as a passport or driver's license), proof of income (such as pay stubs or tax returns), and information about the collateral (if applicable). Our loan officers will guide you through the specific requirements during the application process."},
        {question:"How can I access my accounts online?", answer:"Accessing your accounts online is simple and secure. Visit our website and click on the 'Login' button. Enter your username and password to access your accounts. If you haven't registered for online banking, click on the 'Enroll Now' button and follow the registration process. If you need assistance, our customer support team is available to guide you."},
        {question:"Are my transactions and personal information secure?", answer:"At YourBank, we prioritize the security of your transactions and personal information. We employ industry-leading encryption and multi-factor authentication to ensure that your data is protected. Additionally, we regularly update our security measures to stay ahead of emerging threats. You can bank with confidence knowing that we have robust security systems in place."}
    ]

    return questions
}







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

export {setOnlineBanking,setQuestions}