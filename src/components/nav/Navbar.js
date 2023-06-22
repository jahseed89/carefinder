import React from "react";
import Button from "../button/Button";
import { useNavigate } from "react-router-dom";
import { ABOUT_ROUTE, FINDER_ROUTE, HOME_ROUTE, LOGIN_ROUTE } from "../../content-management/Landing";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import './navbar.scss'

const Navbar = () => {

  const navitagator = useNavigate()

  const toLoginPage = () => {
    navitagator(`/${LOGIN_ROUTE}`)
  }

    const navigate = useNavigate();

    const toHomePage = () => {
        navigate(`/${HOME_ROUTE}`)
    }

    const toAboutPage = () => {
      navigate(`/${ABOUT_ROUTE}`);
    };
  
    const toFinder = () => {
      navigate(`/${FINDER_ROUTE}`);
    };

    const userSignOut = () => {
      signOut(auth).then(() => {
        console.log('You have successfully signed out')
        toLoginPage()
      }).catch((error) => {
        console.log(error)
      })
    }
  return (
    <nav className="nav-bar">
      <h1>CareFinder</h1>
      <ul>
        <li onClick={toHomePage}>Home</li>
        <li onClick={toAboutPage}>About</li>
        <li onClick={toFinder}>Find Hospital</li>
        <span className="nav-btn-holder">
          <Button btnText="Signout" clickHandler={userSignOut} />
          {/* <Button btnText="Signup" clickHandler={toLoginPage} /> */}
        </span>
      </ul>
    </nav>
  );
};

export default Navbar;
