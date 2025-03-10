import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const useForm = () => {
    
    const navigate = useNavigate()
    const [signed,setSigned] = useState(localStorage.getItem("signed") || false)
    const [info, setInfo] = useState(JSON.parse(localStorage.getItem("Users")) || []);
    const [curUser,setCurUser] = useState([])
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        const infoObj = {};
        for (let [key, value] of data.entries()) {
            infoObj[key] = value;
        }
        console.log(data)

        e.target.reset();

        if (info.some(user => user.email === infoObj.email)) {
            alert("Account With This Email Already Exists");
        } else {
            setInfo(prev => [...prev, infoObj]);

            setCurUser([infoObj])
            navigate('/login')
            setSigned(true)
        }
    };

    
    useEffect(() => {
        localStorage.setItem("Users", JSON.stringify(info));
        localStorage.setItem("curUser", JSON.stringify(curUser))
        localStorage.setItem("signed",signed)
    }, [info,curUser]);

    return [info, handleSubmit];
};

export default useForm;