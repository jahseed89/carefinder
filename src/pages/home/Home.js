import React, { useEffect, useState } from "react";
import Button from "../../components/button/Button";
import treatment from "../../assets/treatment.png";
import { BsArrowRightShort } from "react-icons/bs";
import rectangle7 from "../../assets/Rectangle7.png";
import rectangle8 from "../../assets/Rectangle8.png";
import DocsCard from "../../components/docs-card/DocsCard";
import vector5 from "../../assets/vector5.svg";
import vector6 from "../../assets/vector6.svg";
import vector7 from "../../assets/vector7.svg";
import vector8 from "../../assets/vector8.svg";
import Navbar from "../../components/nav/Navbar";
import Footer from "../../components/footer/Footer";
import BrandLoader from "../../components/brand-loader/BrandLoader";
import HospitalCard from "../../components/hospital-card/HospitalCard";
import axios from "axios";
import { GrSearch } from "react-icons/gr";
import "./home.scss";
import Input from "../../components/input/Input";


const Home = () => {
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState([]);
  const [searchHospital, setSearchHospital] = useState("");
  const url = "https://api.reliancehmo.com/v3/providers";

  const filteredData =  userData
  .filter((value) => {
    if (searchHospital === "") {
      return value;
    } else if (
      value.name.includes(searchHospital) ||
      value.state.name.includes(searchHospital)
    ) {
      return value;
    }
  })

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);
      const resp = await axios.get(url);
      setUserData(resp.data.data);
      console.log(resp.data.data);
      setLoading(false);
    };
    fetchPost();
  }, []);
  return (
    <div className="home">
      <Navbar />
      <div className="main-section">
        <div className="description">
          <h2>Find the nearest hospital to you and make an appointment</h2>
          <p>
            Discover Your Perfect Care: Find Your Hospital, Anytime, Anywhere!
          </p>
          <div className="get-start-container">
            <Button btnText="GET STARTED" />
            <span>
              Learn more <BsArrowRightShort />
            </span>
          </div>
        </div>
        <div className="dashbdImg-container">
          <img src={treatment} alt="treatment" />
        </div>
      </div>

      <form>
        <h3 className="find-nearby">Find a nearby hospital</h3>
        <div className="input-container">
          <Input
            type="text"
            placeholder="Search Hospital by Name or State"
            onChange={(e) => setSearchHospital(e.target.value)}
          />
          <GrSearch className="search-icon" />
        </div>
      </form>
      {loading ? (
        <div className="brand-loading">
          {" "}
          <BrandLoader />
        </div>
      ) : (
        <div className="findsearch">
          {filteredData
            .map((data) => {
              return (
                <div className="hosp-card-holder" >
                  <HospitalCard
                  key={data.id}
                  name={data.name}
                  address={data.address}
                  location={data.state.name}
                />
                </div>
              );
            })}
        </div>
      )}
      <div className="welcome-container">
        <div className="treatment-cont-wrapper">
          <div>
            <img src={rectangle7} alt="" />
          </div>
          <div className="img2">
            <img src={rectangle8} alt="" />
          </div>
        </div>
        <div className="welcome-section">
          <h1 className="welcome">
            Welcome to <h1>CareFinder</h1>
          </h1>
          <p>
            Carefinder is a platform where users can search for hosiptals in
            their areas, export hospital details for your records and enhance
            your healthcare experience by connecting with others and sharing
            valuable resources.
          </p>
          <div className="btn-container">
            <Button btnText="OUR SERVICES" />
          </div>
        </div>
      </div>
      <div className="docs-card-holder">
        <DocsCard
          icon={vector5}
          title="Search Doctors"
          desc1="Effortlessly Find the Best Hospital Near You"
        />
        <DocsCard
          icon={vector6}
          title="Search Hospital"
          desc1="Effortlessly Find the Best Hospital Near You"
        />
        <DocsCard
          icon={vector7}
          title="Export Hospital"
          desc1="Effortlessly Find the Best Hospital Near You"
        />
        <DocsCard
          icon={vector8}
          title="Shear Hospital"
          desc1="Effortlessly Find the Best Hospital Near You"
        />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
