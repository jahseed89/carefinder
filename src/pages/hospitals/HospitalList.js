import React, { useContext, useState } from "react";
import { BrandLoader, Input, Navbar } from "../../components/index";
import { hospitalIcon } from "../../assets/index";
import HospitalDataContext from "../../context";
import "./hospitalList.scss";

const HospitalList = () => {
  const [searchHospital, setSearchHospital] = useState("");
  const { loading, hospitals } = useContext(HospitalDataContext);

  // State variables for pagination
  const itemsPerPage = 50;
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the start and end indices for pagination
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const filterHospitals = hospitals.filter((value) => {
    if (searchHospital === "") {
      return true;
    } else {
      const searchValue = searchHospital.toLowerCase().trim();
      const nameMatch = value.name.toLowerCase().includes(searchValue);
      const stateMatch = value.state.name.toLowerCase().includes(searchValue);
      return nameMatch || stateMatch;
    }
  });

  const currentHospitals = filterHospitals.slice(startIndex, endIndex);

  // Function to handle page changes
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // *******Add hospital to your List*******
  const addToList = () => {
    
  }

  return (
    <>
      <Navbar />
      <div className="hospital-list">
        <form>
          <img src={hospitalIcon} alt="hospital-icon" />
          <h1>Search for Hospitals in anywhere in Nigeria</h1>
          <p>Search Hospital by Name or State.</p>
          <Input
            type="text"
            placeholder="Search Hospital by Name or State"
            value={searchHospital}
            onChange={(e) => setSearchHospital(e.target.value)}
          />
        </form>
        {loading ? (
          <BrandLoader />
        ) : (
          <div className="list-container">
            {currentHospitals.map((data) => {
              return (
                <div className="details-wrapper">
                  <pre>
                    <h1>{data.name}</h1>
                    <p>{data.address.length > 120 ? data.address.slice(100) : data.address}</p>
                  </pre>
                  <p className="add-section">
                    <span>{data.state.name}</span>
                    <button onClick={addToList}>add</button>
                  </p>
                </div>
              );
            })}
          </div>
        )}
        <div className="pagination-controls">
          <button
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
          >
            Previous
          </button>
          <span>{currentPage}</span>
          <button
            disabled={currentHospitals.length < itemsPerPage}
            onClick={() => handlePageChange(currentPage + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default HospitalList;
