import React, { useState } from "react";
import {Button , Modal, Input}from "../../components/index";
import {google, apple, facebook, loginTreat, logins} from "../../assets/index";
import { useNavigate } from "react-router-dom";
import { HOME_ROUTE } from "../../content-management/Landing";
import SignUp from "./SignUp";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Toaster, toast } from "react-hot-toast";
import "./login.scss";

const SignIn = () => {
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [values, setValues] = useState({
    email: "",
    password: ""
  })
  const [toggleLog, setToggleLog] = useState(true);
  const [openModal, setOpenModal] = useState(false);

  const navigate = useNavigate();

  const toHomePage = () => {
    navigate(`/${HOME_ROUTE}`);
  };

  const modalIsOpen = () =>{
    setOpenModal(prev => !prev)
  }
  const modalIsClose = () => {
    setOpenModal();
  };

  const toSignUpPage = () => {
    setToggleLog((prev) => !prev);
    modalIsClose()

  };

  const handleChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value})
  }

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

  const handleSubmitSignin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredential) => {
        console.log(userCredential);
        if(userCredential) {
          successMsg()
          setTimeout(() => {
            toHomePage()
          }, 5000)
        }
      })
      .catch((error) => {
        console.log(error);
        modalIsOpen()

      });
  };

  return (
    <>
    <Toaster />
      {toggleLog ? (
        <div className="login">
          <div className="login-form-container">
            <form onSubmit={handleSubmitSignin}>
              <h1>Welcome to CareFinder</h1>
              <p>Login with correct details!</p>
              <div className="input-container">
                <div>
                  <label>Email Address</label>
                  <br />
                  <Input
                    type="email"
                    placeholder="Enter Email Address"
                    value={values.email}
                    name="email"
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label>Password</label>
                  <br />
                  <Input
                    type={passwordVisibility ? "password" : "text"}
                    placeholder="Enter Password"
                    passwordIcon={true}
                    name="password"
                    passwordIconHandler={() =>
                      setPasswordVisibility((prev) => !prev)
                    }
                    value={values.password}
                    onChange={handleChange}
                  />
                </div>
                <div className="login-btn-wrapper">
                  <Button btnText="Login" className="login-btn" type="submit" />
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
                  Don't have an account{" "}
                  <span onClick={() => setToggleLog((prev) => !prev)}>
                    Signup!
                  </span>
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
        <SignUp />
      )}
      {openModal && (
        <Modal closeModal={modalIsClose}>
          <h2 className="confirmation-modal">
            Pleas login with the correct credential or click{" "}
            <span className="here" onClick={toSignUpPage}> here</span> to creact an account{" "}
          </h2>
          <div className="errorLog-container">
            <img src={logins} alt="invalid" className="error-log" />
          </div>
        </Modal>
      )}
    </>
  );
};

export default SignIn;
