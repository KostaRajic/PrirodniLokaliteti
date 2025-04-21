/* eslint-disable react/jsx-key */

import { sumadijaIZapadnaSrbijaText } from "./SumadijaIZapadnaSrbijaTekst";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { ScrollToTop } from "../../../ScrollToTop";
import { serbianMapPathRoutes } from "../../serbianMapPathRoutes";

export const SumadijaIZapadnaSrbijaTekstModal = ({ goBack }) => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate(serbianMapPathRoutes.SumadijaIZapadnaSrbija);
  };

  return (
    <div className="modalBackground">
      <div className="modalContent sumadijaTekstModalBackground">
        <ScrollToTop />
        <h1 style={{ textAlign: "center" }}>
          {sumadijaIZapadnaSrbijaText?.name}
        </h1>
        <h4>
          {sumadijaIZapadnaSrbijaText?.mainText}
        </h4>
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
        <h4>
          {sumadijaIZapadnaSrbijaText?.text2}
        </h4>
        <h3 style={{ margin: "20px 0", textAlign: "center" }}>Okruzi</h3>
        <p style={{ margin: "10px 0 10px 0px", textAlign: "center" }}>Mačvanski</p>
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
        <p style={{ margin: "10px 0 10px 0px", textAlign: "center" }}>Raški</p>
        <p style={{ margin: "10px 0 10px 0px", textAlign: "center" }}>
          Rasinski
        </p>
        <div className="btnClass">
          <button className="firstBtn" onClick={() => navigate(serbianMapPathRoutes.SumadijaIZapadnaSrbijaModal)}>
            Nazad
          </button>
          <button className="secondBtn" onClick={handleNext}>
            Napred
          </button>
        </div>
        <Outlet />
      </div>
    </div>
  );
};
