import React, { useState } from "react";
import Button from "../../components/button/Button";
import google from "../../assets/google.svg";
import apple from "../../assets/apple-cloud.svg";
import facebook from "../../assets/facebook.svg";
import loginTreat from "../../assets/login-treatment.png";
import { useNavigate } from "react-router-dom";
import { HOME_ROUTE } from "../../content-management/Landing";
import Input from "../../components/input/Input";
import Modal from "../../components/modal/Modal";
import checked from "../../assets/checked.png";
import { IoIosEyeOff } from "react-icons/io";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import SignIn from "./SignIn";
import "./login.scss";
import { toast } from "react-hot-toast";

const SignUp = () => {
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [toggleLog, setToggleLog] = useState(true)

  const navigate = useNavigate();

  const toHomePage = () => {
    setOpenModal()
    navigate(`/${HOME_ROUTE}`);
  };


  // const approvalModal = () => {
  //   setOpenModal((prev) => !prev);
  //   setToggleLog(false)
  // };
  const accCreateMsg = () => {
    toast.success('you have successfully created an acc')
  }

  const handleSubmitSignup = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log(userCredential);
      accCreateMsg()
      toHomePage()
    })
    .catch((error) => {
      console.log(error)
    });
  };

  return (
    <>
      {openModal && (
        <Modal closeModal={() => setOpenModal()}>
          <div className="acc-modal">
            <h1>You Have Successfully Created an Account</h1>
            <img src={checked} alt="checked" />
          </div>
        </Modal>
      )}
     {toggleLog ? (
         <div className="login">
         <div className="login-form-container form2">
           <form onSubmit={handleSubmitSignup}>
             <h1>Create An Account</h1>
             <p>Signup to for free!</p>
             <div className="input-container">
               <div>
                 <label>Enter Name</label>
                 <br />
                 <Input type="text" placeholder="Enter Name" />
               </div>
 
               <div>
                 <label>Email Address</label>
                 <br />
                 <Input
                   type="email"
                   placeholder="Enter Email Address"
                   value={email}
                   onChange={(e) => setEmail(e.target.value)}
                 />
               </div>
 
               <div>
                 <label>Password</label>
                 <br />
 
                 <Input
                   type={passwordVisibility ? "password" : "text"}
                   placeholder="Enter Password"
                   className="create-pass-input"
                   value={password}
                   onChange={(e) => setPassword(e.target.value)}
                 />
                 <IoIosEyeOff
                   className="pass-viewIcon"
                   onClick={() => setPasswordVisibility((prev) => !prev)}
                 />
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
