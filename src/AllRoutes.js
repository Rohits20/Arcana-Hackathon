import React, { useEffect, useState } from "react";
import {auth,provider} from "./FirebaseAuth/config";
import {signInWithPopup} from "firebase/auth";
import Upload from './UploadProductInfo/Upload'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Signin from './Signin';
import Home from './Home/Home.js'
import SignInPage from './SignInPage';
const AllRoutes = () => {

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
      <Router>
    <div >
      <Routes>
      <Route exact path="/" element={ <SignInPage/> }/>
      <Route exact path="/home" element={<Home/>}/>
      </Routes>
    
    </div>
    </Router>
    </div>
  )
}

export default AllRoutes

