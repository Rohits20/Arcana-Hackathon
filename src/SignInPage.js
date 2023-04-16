import React, { useEffect, useState } from "react";
import {auth,provider} from "./FirebaseAuth/config";
import {signInWithPopup} from "firebase/auth";
import Home from "./Home/Home";
import { useNavigate } from "react-router-dom"


const SignInPage = () => {

  const history = useNavigate()

    const [value,setValue] = useState('')
    const handleClick =()=>{
      // history.replace('/');
        signInWithPopup(auth,provider).then((data)=>{
            setValue(data.user.email)
            console.log(data.user.email);
            console.log("Rohit");
            localStorage.setItem("email",data.user.email)
        })
    }
    

    useEffect(()=>{
        setValue(localStorage.getItem('email'))
        console.log("Successfulley stored to local storage");
    })
  return (
    <div>
      <Home/>
    </div>
    // <div className="bgColor">
    //   <div>
    //     <img src = "https://i.ibb.co/hWNNjG7/rovi-logo.png"  width={'250px'}/>
    //   </div>
    //         {
    //         value ?  window.location.href=`/home` :
    //         <div className="bgColor">

    //           <button onClick={handleClick} style={{marginLeft:'45vw',marginTop:'205px',padding:'3px'}}>Login With Google</button>
    //          </div>
    //         }
    //           </div>
  )
}

export default SignInPage
