import Navbar from "../../components/nav/Navbar";
import hospBook from "../../assets/hospital-book.png";
import "./about.scss";

const About = () => {
  return (
    <div className="about">
      <Navbar />
      <header>Somkenechukwu Hospital and maternity Ikem II, Isi-Uzo</header>
      <p className="home-hospitals">
        Home » Hospitals in Nigeria » 7,117+ Family Planning Hospitals In
        Nigeria » 216+ Family Planning Hospitals In Enugu » Somkenechukwu
        Hospital and maternity Ikem II, Isi-Uzo
      </p>
      <div className="donation-img-container">
        <img src={hospBook} alt="hospital book" />
      </div>
      <div>
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
      <div>
        <h1>Open Days & Time</h1>
        <p>
          he Somkenechukwu Hospital and maternity is open on
          Monday,Tuesday,Wednesday,Thursday,Friday,Saturday,Sunday , and
          operates on 24hrs basis
        </p>
      </div>
      <div>
        <h1>What type of Hospital is Somkenechukwu Hospital and maternity?</h1>
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
    </div>
  );
};

export default About;
