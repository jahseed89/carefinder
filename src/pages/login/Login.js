import React, { useState } from "react";
import Button from "../../components/button/Button";
import google from "../../assets/google.svg";
import apple from "../../assets/apple-cloud.svg";
import facebook from "../../assets/facebook.svg";
import loginTreat from "../../assets/login-treatment.png";
import "./login.scss";
import Validation from "../../Validation";
import { useNavigate } from "react-router-dom";
import { HOME_ROUTE } from "../../content-management/Landing";
import {IoIosEyeOff} from 'react-icons/io'
import Input from "../../components/input/Input";

const Login = () => {
  const [changer, setChanger] = useState(false);

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const [passwordVisibility, setPasswordVisibility] = useState(true)

  const handleChange = (event) => {
    const newObj = { ...values, [event.target.name]: event.target.value };
    setValues(newObj);
  };

  const handleSubmit = (event) => {
    event.preventDefalt();
    setErrors(Validation(values));
  };

  const navigate = useNavigate();

  const toHomePage = () => {
    navigate(`/${HOME_ROUTE}`);
  };

  const showSignup = () => {
    setChanger((prev) => !prev);
  };

  const showSignin = () => {
    setChanger();
  }

  return (
    <>
      {changer ? (
        <div className="login">
          <div className="login-form-container">
            <form onSubmit={handleSubmit}>
              <h1>Welcome Back</h1>
              <p>Login using correct details!</p>
              <div className="input-container">
                <div>
                  <label>Email Name</label>
                  <br />
                  <Input type="text" placeholder="Enter Name" onChange={handleChange} />
                  {errors.email && <p>{errors.email}</p>}
                </div>
                <div>
                  <label>Email Address</label>
                  <br />
                  <Input type="email" placeholder="Enter Email Address" onChange={handleChange} />
                  {errors.email && <p>{errors.email}</p>}
                </div>

                <div>
                  <label>Password</label>
                  <br />
                 
                  <Input type={passwordVisibility ? "password": "text"} placeholder="Enter Password" onChange={handleChange} />
                  <span className="show-passN"><IoIosEyeOff onClick={()=> setPasswordVisibility((prev => !prev))} /></span>
                  {errors.password && <p>{errors.password}</p>}
                </div>
                <div className="login-btn-wrapper">
                  <Button
                    btnText="Create Account"
                    className="login-btn"
                    type="submit"
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
                  Already have an account <span onClick={showSignin}>Login!</span>
                </p>
              </div>
              <div></div>
            </form>
          </div>
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
      ) : (
        <div className="login">
          <div className="login-form-container">
            <form onSubmit={handleSubmit}>
              <h1>Welcome Back</h1>
              <p>Login using correct details!</p>
              <div className="input-container">
                <div>
                  <label>Email Address</label>
                  <br />
                  <input
                    type="email"
                    placeholder="Enter Email Address"
                    onChange={handleChange}
                  />
                  {errors.email && <p>{errors.email}</p>}
                </div>

                <div>
                  <label>Password</label>
                  <br />
                  <Input type={passwordVisibility ? "password": "text"} placeholder="Enter Password" onChange={handleChange} />
                  <span className="show-pass"><IoIosEyeOff  onClick={()=> setPasswordVisibility((prev => !prev))} /></span>
                  {errors.password && <p>{errors.password}</p>}
                </div>
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
              <div></div>
            </form>
          </div>
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
      )}
    </>
  );
};

export default Login;
