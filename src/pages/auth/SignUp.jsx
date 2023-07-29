import React, { useState } from "react";
import {Button, Input,} from "../../components/index";
import {google, apple, facebook, loginTreat} from '../../assets/index'
import { useNavigate } from "react-router-dom";
import { HOME_ROUTE } from "../../content-management/Landing";
import { IoIosEyeOff } from "react-icons/io";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import SignIn from "./SignIn";
import { Toaster, toast } from "react-hot-toast";
import "./login.scss";
import Validation from "../../components/validation/Validation";

const SignUp = () => {
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: ''
  })
  const [errorMsgs, setErrorMsgs] = useState({})
  const [toggleLog, setToggleLog] = useState(true)

  const navigate = useNavigate();

  const toHomePage = () => {
    navigate(`/${HOME_ROUTE}`);
  };

  const handleChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value})
  }

  const handleSubmitSignup = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, values.email, values.password)
    .then((userCredential) => {
      console.log(userCredential);
      successMsg()
      setTimeout(() => {
        toHomePage()
      }, 5000)
     
    })
    .catch((error) => {
      setErrorMsgs(Validation(values))
      console.log(error)
    });
  };

  const successMsg = ()=>{
    toast('YOU ARE SUCCESSFULLY LOGED IN', {
      position: "top-center",
      auth: '5000',
      style: {
        background: '#00000',
        color: '#fffff'
      }
    })
    
  }

  return (
    <>
    <Toaster />
     {toggleLog ? (
         <div className="login">
         <div className="login-form-container form2">
           <form onSubmit={handleSubmitSignup}>
             <h1>Create An Account</h1>
             <p>Signup for free!</p>
             <div className="input-container">
               <div>
                 <label>Enter Name</label>
                 <br />
                 <Input type="text" placeholder="Enter Name" name='name' onChange={handleChange} value={values.name} />
                 {errorMsgs.name && <span className="error-msg">{errorMsgs.name}</span>}
               </div>
 
               <div>
                 <label>Email Address</label>
                 <br />
                 <Input
                   type="email"
                   placeholder="Enter Email Address"
                   value={values.email}
                   name='email'
                   onChange={handleChange}
                 />
                 {errorMsgs.email && <span className="error-msg">{errorMsgs.email}</span>}
               </div>
 
               <div>
                 <label>Password</label>
                 <br />
 
                 <Input
                   type={passwordVisibility ? "password" : "text"}
                   placeholder="Enter Password"
                   className="create-pass-input"
                   value={values.password}
                   name='password'
                   onChange={handleChange}
                 />
                 <IoIosEyeOff
                   className="pass-viewIcon"
                   onClick={() => setPasswordVisibility((prev) => !prev)}
                 />
                 {errorMsgs.password && <span className="error-msg">{errorMsgs.password}</span>}
               </div>
 
               <div className="login-btn-wrapper">
                 <Button
                   btnText="Create Account"
                   className="create-btn"
                   type="submit"
                 />
               </div>
               <div className="other-login">
                 <h2>OR</h2>
                 <p>Login Using</p>
                 <div className="internet-login">
                   <img src={google} alt="google" />
                   <img src={apple} alt="apple" />
                   <img src={facebook} alt="f-book" />
                 </div>
               </div>
               <p className="dont-hv-acc">
                 Already have an account <span onClick={()=> setToggleLog(prev => !prev)}>Login!</span>
               </p>
             </div>
           </form>
         </div>
         <div className="login-treatment-container">
           <div className="title-elements">
             <h1>CareFinder</h1>
             <div>
               <h2>Join Our</h2>
               <h2> Comunity</h2>
             </div>
             <p>Enjoy seamless access to medical services.</p>
           </div>
           <img src={loginTreat} alt="treatment" />
         </div>
       </div>
     ) : (
        <SignIn />
     )}
    </>
  );
};

export default SignUp;
