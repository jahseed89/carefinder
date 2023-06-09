import React from "react";
import Button from "../../components/button/Button";
import "./home.scss";
import { useNavigate } from "react-router-dom";
import { ABOUT_ROUTE } from "../../content-management/Landing";
import treatment from "../../assets/treatment.png";
import {BsArrowRightShort} from 'react-icons/bs'

const Home = () => {
  const navigate = useNavigate();

  const toAboutPage = () => {
    navigate(`/${ABOUT_ROUTE}`);
  };
  return (
    <div className="home">
      <nav className="nav-bar">
        <h1>CareFinder</h1>
        <ul>
          <li>Home</li>
          <li onClick={toAboutPage}>About</li>
          <li>Find Hospital</li>
          <span className="nav-btn-holder">
            <Button btnText="Login" />
            <Button btnText="Signup" />
          </span>
        </ul>
      </nav>
      <div className="main-section">
        <div className="description">
          <h2>Find the nearest hospital to you and make an appointment</h2>
          <p>
            Discover Your Perfect Care: Find Your Hospital, Anytime, Anywhere!
          </p>
          <div className="get-start-container">
            <Button btnText="GET STARTED" />
            <span>Learn more <BsArrowRightShort /></span>
          </div>
        </div>
        <div className="dashbdImg-container">
          <img src={treatment} alt="treatment" />
        </div>
      </div>

      <div className="findsearch">
        <h3>Find a nearby hospital</h3>
        <input type="text" placeholder="Search Hospital" />
      </div>
    </div>
  );
};

export default Home;
