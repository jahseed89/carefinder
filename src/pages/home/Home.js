import React, { useContext, useState } from "react";
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
import { GrSearch } from "react-icons/gr";
import Input from "../../components/input/Input";
import ReactPaginate from "react-paginate";
import HospitalDataContext from "../../context";
import { useNavigate } from "react-router-dom";
import { ABOUT_ROUTE } from "../../content-management/Landing";
import { CSVLink } from "react-csv";
import "./home.scss";

const Home = () => {
  const { loading, hospitals } = useContext(HospitalDataContext);
  const [searchHospital, setSearchHospital] = useState("");
  const loadHospital = hospitals || [];

  const navigator = useNavigate();

  const filterHospitals = loadHospital.filter((value) => {
    if (searchHospital === "") {
      return value;
    } else if (
      value.name.includes(searchHospital) ||
      value.state.name.includes(searchHospital)
    ) {
      return value;
    }
    return false;
  });

  const [hospCardNum, setHospCardNumb] = useState(0);

  const cardPerPage = 4;

  const cardVisited = hospCardNum * cardPerPage;

  const hospitalList = filterHospitals.slice(
    cardVisited,
    cardVisited + cardPerPage
  );

  const hospCardCount = Math.ceil(filterHospitals.length / cardPerPage);

  const changeHospCard = ({ selected }) => {
    setHospCardNumb(selected);
  };

  const toAboutPage = () => {
    navigator(`/${ABOUT_ROUTE}`);
  };

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
            <span onClick={toAboutPage}>
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
        <div className="finder-input-container">
          <Input
            type="text"
            placeholder="Search Hospital by Name or State"
            value={searchHospital}
            onChange={(e) => setSearchHospital(e.target.value)}
          />
          <GrSearch className="search-icon" />
        </div>
      </form>
      {loading ? (
        <div className="brand-loading">
          <BrandLoader />
        </div>
      ) : (
        <div className="findsearch">
          {hospitalList.map((data, index) => {
            return (
              <div key={data.id} className="hosp-card-wrapper">
                <HospitalCard
                  name={data.name}
                  address={data.address}
                  location={data.state.name}
                  index={index}
                  csv={
                    <CSVLink
                      data={[data]}
                      headers={["name", "address", "state"]}
                    >
                      Export Hospitals to CVS
                    </CSVLink>
                  }
                />
              </div>
            );
          })}
        </div>
      )}
      <div className="pagination-container">
        <ReactPaginate
          previousLabel={"<<"}
          nextLabel={">>"}
          pageCount={hospCardCount}
          onPageChange={changeHospCard}
          containerClassName={"pagination-btn"}
          activeClassName={"paginate-active"}
        />
      </div>
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
            Welcome to <span>CareFinder</span>
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
