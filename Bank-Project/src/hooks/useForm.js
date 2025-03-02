import { useEffect, useState } from "react";

const useForm = () => {
    

    const [info, setInfo] = useState(() => {
        const storedInfo = localStorage.getItem("Users");
        return storedInfo ? JSON.parse(storedInfo) : [];
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        const infoObj = {};
        for (let [key, value] of data.entries()) {
            infoObj[key] = value;
        }

        e.target.reset();

        if (info.some(user => user.email === infoObj.email)) {
            alert("Account With This Email Already Exists");
        } else {
            setInfo(prev => [...prev, infoObj]);
        }
    };

    
    useEffect(() => {
        localStorage.setItem("Users", JSON.stringify(info));
    }, [info]);

    return [info, handleSubmit];
};

export default useForm;