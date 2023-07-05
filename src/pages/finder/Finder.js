import React from "react";
import Button from "../../components/button/Button";
import DocsAvatar from "../../components/docs-avatar/DocsAvatar";
import doc1 from "../../assets/ellipse1.png";
import doc2 from "../../assets/ellipse2.png";
import doc3 from "../../assets/ellipse3.png";
import doc4 from "../../assets/ellipse4.png";
import Navbar from "../../components/nav/Navbar";
import "./finder.scss";
import Input from "../../components/input/Input";


const Finder = () => {
  return (
    <>
      <Navbar />
      <div className="finder">
        <div className="qualified-docs-container">
          <h1 className="title-qualified">QUALIFIED DOCTORS</h1>

          <div className="docs-container fistCont">
            <DocsAvatar
              name="Dr Stephen"
              avata={doc1}
              possition="Pediatritian"
              hospital="Federal Hospital"
            />
            <DocsAvatar
              name="Dr Victoria"
              avata={doc3}
              possition="Pediatritian"
              hospital="General Hospital"
            />
          </div>
          <div className="docs-container">
            <DocsAvatar
              name="Dr Zoe"
              avata={doc4}
              possition="Pediatritian"
              hospital="Eva Care Hospital"
            />
            <DocsAvatar
              name="Dr Micaiah"
              avata={doc2}
              possition="Pediatritian"
              hospital="Lagos State Health Clinic"
            />
          </div>
        </div>
        <form className="booking-container">
          <Button btnText="Book An Appointment" className="booking-btn" />
          <Input type="text" placeholder="Address" />
          <Input type="text" placeholder="Hospital" />
          <Input type="text" placeholder="Treatment" />
          <Input type="text" placeholder="Doctor" />
          <Input type="text" placeholder="Email" />
          <Input type="date" />
          <Input type="time" />
          <Button btnText="Book Appointment Now" className="booking-btn" />
        </form>
      </div>
    </>
  );
};

export default Finder;
