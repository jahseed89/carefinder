import React from "react";
import {Button, DocsAvatar, Input, Navbar} from "../../components/index";
import {doc1, doc2, doc3, doc4} from '../../assets/index'
import "./finder.scss";


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
