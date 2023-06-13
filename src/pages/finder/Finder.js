import React from "react";
import Button from "../../components/button/Button";
import DocsAvatar from "../../components/docs-avatar/DocsAvatar";
import doc1 from "../../assets/ellipse1.png";
import doc2 from "../../assets/ellipse2.png";
import doc3 from "../../assets/ellipse3.png";
import doc4 from "../../assets/ellipse4.png";

import "./finder.scss";
import Navbar from "../../components/nav/Navbar";

const Finder = () => {
  return (
    <>
      <Navbar />
      <div className="finder">
        <div className="qualified-docs-container">
          <h1 className="title-qualified">QUALIFIED DOCTORS</h1>

          <div className="docs-container fistCont">
            <DocsAvatar
              name="Dr Cole Ben"
              avata={doc1}
              possition="Pediatritian"
              hospital="Federal Hospital"
            />
            <DocsAvatar
              name="Dr Yemi"
              avata={doc3}
              possition="Pediatritian"
              hospital="General Hospital"
            />
          </div>
          <div className="docs-container">
            <DocsAvatar
              name="Dr Emmanuela"
              avata={doc4}
              possition="Pediatritian"
              hospital="Eva Care Hospital"
            />
            <DocsAvatar
              name="Dr Felix Bill"
              avata={doc2}
              possition="Pediatritian"
              hospital="Lagos State Health Clinic"
            />
          </div>
        </div>
        <div className="booking-container">
          <Button btnText="Book An Appointment" className="booking-btn" />
          <input type="text" placeholder="Address" />
          <input type="text" placeholder="Hospital" />
          <input type="text" placeholder="Treatment" />
          <input type="text" placeholder="Doctor" />
          <input type="text" placeholder="Email" />
          <input type="date" />
          <input type="time" />

          <Button btnText="Book Appointment Now" className="booking-btn" />
        </div>
      </div>
    </>
  );
};

export default Finder;
