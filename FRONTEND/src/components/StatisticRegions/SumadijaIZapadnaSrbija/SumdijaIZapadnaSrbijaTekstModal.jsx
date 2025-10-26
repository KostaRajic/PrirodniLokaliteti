/* eslint-disable react/jsx-key */

import { sumadijaIZapadnaSrbijaText, sumadijaIZapadnaSrbijaTextENG } from "./SumadijaIZapadnaSrbijaTekst";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { ScrollToTop } from "../../../ScrollToTop";
import { serbianMapPathRoutes } from "../../serbianMapPathRoutes";
import { useContextAuth } from "../../../Context";

const SumadijaIZapadnaSrbijaTekstModal = ({ goBack }) => {
  const navigate = useNavigate();
  const { switchLanguage } = useContextAuth();

  const handleNext = () => {
    navigate(serbianMapPathRoutes.SumadijaIZapadnaSrbija(switchLanguage));
  };

  return (


    <div className="modalContent sumadijaBGD">
      <ScrollToTop />
      {switchLanguage === 'rs' ?
        (
          <>
            <h1 style={{ textAlign: "center" }}>
              {sumadijaIZapadnaSrbijaText?.name}
            </h1>
            <h4>{sumadijaIZapadnaSrbijaText?.mainText}</h4>
            <h3 style={{ margin: "20px 0", textAlign: "center" }}>
              {sumadijaIZapadnaSrbijaText?.topic1}
            </h3>
            <h4>{sumadijaIZapadnaSrbijaText?.text1}</h4>
            <p>{sumadijaIZapadnaSrbijaText?.text11}</p>
            <p>{sumadijaIZapadnaSrbijaText?.text12}</p>
            <p>{sumadijaIZapadnaSrbijaText?.text13}</p>
            <p>{sumadijaIZapadnaSrbijaText?.text14}</p>
            <p>{sumadijaIZapadnaSrbijaText?.text15}</p>
            <p>{sumadijaIZapadnaSrbijaText?.text16}</p>
            <p>{sumadijaIZapadnaSrbijaText?.text17}</p>
            <p>{sumadijaIZapadnaSrbijaText?.text18}</p>
            <h3 style={{ margin: "30px 0", textAlign: "center" }}>
              {sumadijaIZapadnaSrbijaText?.topic2}
            </h3>
            <h4>{sumadijaIZapadnaSrbijaText?.text2}</h4>
            <h3 style={{ margin: "20px 0", textAlign: "center" }}>Okruzi</h3>
            <p style={{ margin: "10px 0 10px 0px", textAlign: "center" }}>
              Mačvanski
            </p>
            <p style={{ margin: "10px 0 10px 0px", textAlign: "center" }}>
              Kolubarski
            </p>
            <p style={{ margin: "10px 0 10px 0px", textAlign: "center" }}>
              Šumadijski
            </p>
            <p style={{ margin: "10px 0 10px 0px", textAlign: "center" }}>
              Zlatiborski
            </p>
            <p style={{ margin: "10px 0 10px 0px", textAlign: "center" }}>
              Moravički
            </p>
            <p style={{ margin: "10px 0 10px 0px", textAlign: "center" }}>
              Pomoravski
            </p>
            <p style={{ margin: "10px 0 10px 0px", textAlign: "center" }}>
              Raški
            </p>
            <p style={{ margin: "10px 0 10px 0px", textAlign: "center" }}>
              Rasinski
            </p>
            <div className="btnClass">
              <button className="firstBtn" onClick={() => navigate("/")}>
                Nazad
              </button>
              <button className="secondBtn" onClick={handleNext}>
                Napred
              </button>
            </div>

          </>
        )
        :
        (
          <>
            <h1 style={{ textAlign: "center" }}>
              {sumadijaIZapadnaSrbijaTextENG?.name}
            </h1>
            <h4>{sumadijaIZapadnaSrbijaTextENG?.mainText}</h4>
            <h3 style={{ margin: "20px 0", textAlign: "center" }}>
              {sumadijaIZapadnaSrbijaTextENG?.topic1}
            </h3>
            <h4>{sumadijaIZapadnaSrbijaTextENG?.text1}</h4>
            <p>{sumadijaIZapadnaSrbijaTextENG?.text11}</p>
            <p>{sumadijaIZapadnaSrbijaTextENG?.text12}</p>
            <p>{sumadijaIZapadnaSrbijaTextENG?.text13}</p>
            <p>{sumadijaIZapadnaSrbijaTextENG?.text14}</p>
            <p>{sumadijaIZapadnaSrbijaTextENG?.text15}</p>
            <p>{sumadijaIZapadnaSrbijaTextENG?.text16}</p>
            <p>{sumadijaIZapadnaSrbijaTextENG?.text17}</p>
            <p>{sumadijaIZapadnaSrbijaTextENG?.text18}</p>
            <h3 style={{ margin: "30px 0", textAlign: "center" }}>
              {sumadijaIZapadnaSrbijaTextENG?.topic2}
            </h3>
            <h4>{sumadijaIZapadnaSrbijaTextENG?.text2}</h4>
            <h3 style={{ margin: "20px 0", textAlign: "center" }}>Okruzi</h3>
            <p style={{ margin: "10px 0 10px 0px", textAlign: "center" }}>
              Mačva District
            </p>
            <p style={{ margin: "10px 0 10px 0px", textAlign: "center" }}>
              Kolubara District
            </p>
            <p style={{ margin: "10px 0 10px 0px", textAlign: "center" }}>
              Šumadija District
            </p>
            <p style={{ margin: "10px 0 10px 0px", textAlign: "center" }}>
              Zlatibor District
            </p>
            <p style={{ margin: "10px 0 10px 0px", textAlign: "center" }}>
              Moravica District
            </p>
            <p style={{ margin: "10px 0 10px 0px", textAlign: "center" }}>
              Pomoravski District
            </p>
            <p style={{ margin: "10px 0 10px 0px", textAlign: "center" }}>
              Raška
            </p>
            <p style={{ margin: "10px 0 10px 0px", textAlign: "center" }}>
              Rasina
            </p>
            <div className="btnClass">
              <button className="firstBtn" onClick={() => navigate("/")}>
                Back
              </button>
              <button className="secondBtn" onClick={handleNext}>
                Next
              </button>
            </div>

          </>
        )}


      <Outlet />
    </div>
  );
};


export default SumadijaIZapadnaSrbijaTekstModal;