
import "./hospitalCard.scss";

const HospitalCard = ({ name, address, location, csv, index }) => {

  return (
    <>
      <div className="hosp-card">
        <h1>{name}</h1>
        <p>{address}</p>
        <h3>{location}</h3>
        <h1 className="csv">{csv}</h1>
        <p className="index">{index}</p>
      </div>
      
    </>
  );
};

export default HospitalCard;