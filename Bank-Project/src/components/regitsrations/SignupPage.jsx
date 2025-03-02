import { useEffect } from "react";
import useForm from "../../hooks/useForm";
import "./Signup.css"

const Signup = () => {
    const [userData, handleSubmit] = useForm();
    return (
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
                        </div>
                    </div>

                </div>

            </div>
        </main>
    );
};

export default Signup;