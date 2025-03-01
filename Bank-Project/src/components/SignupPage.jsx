import { useEffect } from "react";
import useForm from "../hooks/useForm";

const Signup = () => {
    const [userData, setUserData] = useForm();
    

    return (
        <div>
            <form onSubmit={setUserData}>
                <input type="text" placeholder="Enter First Name" required name="firstname" />
                <input type="text" placeholder="Enter Last Name" required name="lastname" />
                <input type="email" placeholder="Enter your Email" required name="email" />
                <input type="password" placeholder="Enter your Password" name="password" />
                <button>Submit</button>
            </form>
        </div>
    );
};

export default Signup;
