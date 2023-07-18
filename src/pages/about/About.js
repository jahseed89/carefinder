import { hospBook } from "../../assets/index";
import { useContext, useState } from "react";
import HospitalDataContext from "../../context";
import {
  Input,
  BrandLoader,
  HospitalCard,
  Navbar,
} from "../../components/index";
import ReactPaginate from "react-paginate";
import { CSVLink } from "react-csv";
import "./about.scss";

const About = () => {
  const { loading, hospitals } = useContext(HospitalDataContext);
  const [searchHospital, setSearchHospital] = useState("");
  const loadHospital = hospitals || [];

  const filterHospitals = loadHospital.filter((value) => {
    if (searchHospital === "") {
      return true;
    } else {
      const searchValue = searchHospital.toLowerCase().trim();
      const nameMatch = value.name.toLowerCase().includes(searchValue);
      const stateMatch = value.state.name.toLowerCase().includes(searchValue);
      return nameMatch || stateMatch;
    }
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

  return (
    <>
      <Navbar />
      <div className="about">
        <header>Somkenechukwu Hospital and maternity Ikem II, Isi-Uzo</header>
        <p className="home-hospitals">
          Home » Hospitals in Nigeria » 7,117+ Family Planning Hospitals In
          Nigeria » 216+ Family Planning Hospitals In Enugu » Somkenechukwu
          Hospital and maternity Ikem II, Isi-Uzo
        </p>
        <div className="donation-img-container">
          <img src={hospBook} alt="hospital book" />
        </div>
        <div className="abt-container">
          <h1>About</h1>
          <p>
            The Somkenechukwu Hospital and maternity is a Private hospital,
            located at Ikem II, Isi-Uzo Local Government, Enugu State. It was
            established on 4/8/2017, and operates on 24hrs basis.
          </p>
          <p>
            The Somkenechukwu Hospital and maternity is Licensed hospital by the
            Nigeria Ministry of Health, with facility code 14/10/1/2/2/0042 and
            registered as Secondary Health Care Centre.
          </p>
        </div>
        <div className="open-day-container">
          <h1>Open Days & Time</h1>
          <p>
            he Somkenechukwu Hospital and maternity is open on
            Monday,Tuesday,Wednesday,Thursday, Saturday,Sunday , and Friday,
            operates on 24hrs basis
          </p>
        </div>
        <div className="what-type-container">
          <h1>
            What type of Hospital is Somkenechukwu Hospital and maternity?
          </h1>
          <p>
            The Somkenechukwu Hospital and maternity is Licensed by the Nigerian
            Ministry of Health. It is registered as a Secondary Health Care
            Centre.
          </p>
          <p>
            There are three-tier system of health care in Nigeria, depending on
            the facility infrastructure, personnel and the type of care they
            offer.
          </p>
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
          </div>
        </form>
        {loading ? (
          <div className="brand-loading">
            <BrandLoader />
          </div>
        ) : (
          <div className="findsearch">
            {hospitalList.map((data) => {
              return (
                <div key={data.id} className="hosp-card-wrapper">
                  <HospitalCard
                    name={data.name}
                    address={data.address}
                    location={data.state.name}
                  />
                </div>
              );
            })}
          </div>
        )}
        <h1 className="csv">
          <CSVLink
            data={hospitalList.map((data) => {
              return {
                name: data.name,
                address: data.address,
                state: data.name.state,
              };
            })}
            headers={["name", "address", "state"]}
          >
            Export Hospitals to CSV
          </CSVLink>
        </h1>
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
      </div>
    </>
  );
};

export default About;
