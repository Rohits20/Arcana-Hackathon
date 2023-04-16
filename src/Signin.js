import React, { useEffect, useState } from "react";
import {auth,provider} from "./FirebaseAuth/config";
import {signInWithPopup} from "firebase/auth";
import Home from "./Home/Home";
import SignInPage from "./SignInPage";

function SignIn(){
    const [value,setValue] = useState('')
    const handleClick =()=>{
        signInWithPopup(auth,provider).then((data)=>{
            setValue(data.user.email)
            console.log(data.user.email);
            console.log("Rohit");
            localStorage.setItem("email",data.user.email)
        })
    }

    useEffect(()=>{
        setValue(localStorage.getItem('email'))
    })

return (
    <div>
        {
        value?<Home/>:
        <SignInPage />
        // <button onClick={handleClick} style={{marginLeft:'80vw',marginTop:'15px',padding:'3px'}}>Signin With Google</button>
        }
    </div>
);
}
export default SignIn;
