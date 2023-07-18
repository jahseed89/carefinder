import "./hospitalCard.scss";

const HospitalCard = ({ name, address, location, locateHospital }) => {
  console.log('hospital address', locateHospital)
  return (
    <>
      <a href={`https://maps.google.com/?q=${encodeURIComponent(locateHospital)}`} target="_blank" rel="noopener noreferrer" className="location-link">
        <div to={locateHospital} className="hosp-card">
          <h1>{name}</h1>
          <p>{address}</p>
          <h3>{location}</h3>
        </div>
      </a>
    </>
  );
};

export default HospitalCard;
