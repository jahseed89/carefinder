import React, { useState } from "react";
import Button from "../../components/button/Button";
import google from "../../assets/google.svg";
import apple from "../../assets/apple-cloud.svg";
import facebook from "../../assets/facebook.svg";
import loginTreat from "../../assets/login-treatment.png";
import { useNavigate } from "react-router-dom";
import { HOME_ROUTE } from "../../content-management/Landing";
import { IoIosEyeOff } from "react-icons/io";
import Input from "../../components/input/Input";
import { toast } from "react-hot-toast";
import Modal from "../../components/modal/Modal";
import checked from '../../assets/checked.png'
import "./login.scss";

const Login = () => {
  const [changer, setChanger] = useState(false);
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [openModal, setOpenModal] = useState(false)

  const successMsg = () => {
    toast.success('YOU HAVE SUCCESSFULLY LOGED IN')
  }

  const navigate = useNavigate();

  const toHomePage = () => {
    successMsg()
    navigate(`/${HOME_ROUTE}`);
  };

  const showSignup = () => {
    setChanger((prev) => !prev);
  };

  const showSignin = () => {
    setChanger();
  };

  const approvalModal = () => {
    setOpenModal(prev => !prev)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }



  return (
    <>
    {openModal && (
        <Modal closeModal={()=> setOpenModal()}>
            <div className="acc-modal">
                <h1>You Have Successfully Created an Account</h1>
                <img src={checked} alt="checked" />
                <p>Kindly check your email for details</p>
            </div>
            <div className="b-btn" ><Button btnText="Back to Home Page" clickHandler={toHomePage} backIcon={true} /></div>
        </Modal>
    )}
      <div className="login">
        {changer ? (
          <div className="login-form-container form2">
            <form onSubmit={handleSubmit} >
              <h1>Welcome Back</h1>
              <p>Login using correct details!</p>
              <div className="input-container">
                <div>
                  <label>Enter Name</label>
                  <br />
                  <Input
                    type="text"
                    placeholder="Enter Name"
                  />
                </div>
                {/* {errors.email && <p className="error-msg">{errors.name}</p>} */}

                <div>
                  <label>Email Address</label>
                  <br />
                  <Input
                    type="email"
                    placeholder="Enter Email Address"
                  />
                </div>
                {/* {errors.email && <p className="error-msg">{errors.email}</p>} */}

                <div>
                  <label>Password</label>
                  <br />

                  <Input
                    type={passwordVisibility ? "password" : "text"}
                    placeholder="Enter Password"
                  />
                  <span className="show-passN">
                    <IoIosEyeOff
                      onClick={() => setPasswordVisibility((prev) => !prev)}
                    />
                  </span>
                </div>
                {/* {errors.password && (
                  <p className="error-msg">{errors.password}</p>
                )} */}

                <div className="login-btn-wrapper">
                  <Button
                    btnText="Create Account"
                    className="create-btn"
                    type="submit"
                    clickHandler={approvalModal}
                    // clickHandler={toHomePage}
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
                  Already have an account{" "}
                  <span onClick={showSignin}>Login!</span>
                </p>
              </div>
            </form>
          </div>
        ) : (
          <div className="login-form-container">
            <form onSubmit={handleSubmit}>
              <h1>Welcome Back</h1>
              <p>Login using correct details!</p>
              <div className="input-container">
                <div>
                  <label>Email Address</label>
                  <br />
                  <Input
                    type="email"
                    placeholder="Enter Email Address"
                  />
                </div>
                {/* {errors.email && <p className="error-msg">{errors.email}</p>} */}

                <div>
                  <label>Password</label>
                  <br />
                  <Input
                    type={passwordVisibility ? "password" : "text"}
                    placeholder="Enter Password"
                  />
                  <span className="show-pass">
                    <IoIosEyeOff
                      onClick={() => setPasswordVisibility((prev) => !prev)}
                    />
                  </span>
                </div>
                {/* {errors.password && (
                  <p className="error-msg">{errors.password}</p>
                )} */}

                <div className="login-btn-wrapper">
                  <Button
                    btnText="Login"
                    className="login-btn"
                    type="submit"
                    clickHandler={toHomePage}
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
                  Don't have an account{" "}
                  <span onClick={showSignup}>Signup!</span>
                </p>
              </div>
            </form>
          </div>
        )}

        <div className="login-treatment-container">
          <div className="title-elements">
            <h1>CareFinder</h1>
            <h2>Join Our</h2>
            <h2> Comunity</h2>
            <p>Enjoy seamless access to medical services.</p>
          </div>
          <img src={loginTreat} alt="treatment" />
        </div>
      </div>
    </>
  );
};

export default Login;
