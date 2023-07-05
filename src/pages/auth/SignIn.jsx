import React, { useState } from "react";
import Button from "../../components/button/Button";
import google from "../../assets/google.svg";
import apple from "../../assets/apple-cloud.svg";
import facebook from "../../assets/facebook.svg";
import loginTreat from "../../assets/login-treatment.png";
import { useNavigate } from "react-router-dom";
import { HOME_ROUTE } from "../../content-management/Landing";
import Input from "../../components/input/Input";
import SignUp from "./SignUp";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import Modal from "../../components/modal/Modal";
import "./login.scss";

const SignIn = () => {
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [toggleLog, setToggleLog] = useState(true);
  const [openModal, setOpenModal] = useState(false);

  const navigate = useNavigate();

  const toHomePage = () => {
    navigate(`/${HOME_ROUTE}`);
  };

  const modalIsOpen = () => {
    setOpenModal((prev) => !prev);
  };

  const modalIsClose = () => {
    setOpenModal();
  };

  const toSignUpPage = () => {
    setToggleLog((prev) => !prev);
    modalIsClose()

  };

  const handleSubmitSignin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        if (userCredential) {
          toHomePage();
        } else {
          modalIsOpen();
        }
      })
      .catch((error) => {
        console.log(error);
        modalIsOpen();
        console.log('not a user')

      });
  };

  return (
    <>
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
                    passwordIcon={true}
                    passwordIconHandler={() =>
                      setPasswordVisibility((prev) => !prev)
                    }
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
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
        </Modal>
      )}
    </>
  );
};

export default SignIn;
