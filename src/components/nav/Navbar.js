import React, { useEffect, useState } from "react";
import Button from "../button/Button";
import { useNavigate } from "react-router-dom";
import { ABOUT_ROUTE, FINDER_ROUTE, HOME_ROUTE, LOGIN_ROUTE } from "../../content-management/Landing";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../firebase";
import './navbar.scss'

const Navbar = () => {

  const [authUser, setAuthUser] = useState(null)

  const navitagator = useNavigate()

  const toLoginPage = () => {
    navitagator(`/${LOGIN_ROUTE}`)
  }

    const toHomePage = () => {
      navitagator(`/${HOME_ROUTE}`)
    }

    const toAboutPage = () => {
      navitagator(`/${ABOUT_ROUTE}`);
    };
  
    const toFinder = () => {
      navitagator(`/${FINDER_ROUTE}`);
    };

    // const toLibrary = () => {
    //   navitagator(`/${HOSPITALS_ROUTE}`)
    // }



    useEffect(() => {
      const listen = onAuthStateChanged(auth, (user) => {
        if(user) {
          setAuthUser(user)
        } else {
          setAuthUser(null)
          
        }
      })
      return () => {
        listen()
      }
    }, [authUser])

    const userSignOut = () => {
      signOut(auth).then(() => {
        toLoginPage()
      }).catch(error => console.log(error))
    }


  return (
    <nav className="nav-bar">
      <h1>CareFinder</h1>
      <ul>
        <li onClick={toHomePage}>Home</li>
        {/* <li onClick={toLibrary}>Library</li> */}
        <li onClick={toFinder}>Find Doctor</li>
        <li>Hospitals</li>
        <li onClick={toAboutPage}>About</li>
        <span className="nav-btn-holder">
          <Button btnText="Signout" clickHandler={userSignOut} />
        </span>
      </ul>
    </nav>
  );
};

export default Navbar;
