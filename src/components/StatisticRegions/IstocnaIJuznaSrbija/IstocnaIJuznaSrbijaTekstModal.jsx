/* eslint-disable react/jsx-key */

import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { ScrollToTop } from "../../../ScrollToTop";
import { IstocnaIJuznaSrbijaText } from "./IstocnaIJuznaSrbijaTekst";

export const JuznaIIStocnaSrbijaTekstModal = ({ goBack }) => {

  const navigate = useNavigate();

  const handleNext = () => {
    navigate("IstocnaIZapadnaSrbija");
  };

  return (
    <div className="modalBackground">
      <div className="modalContent istocnaIJuznaSrbijaTekstModalBackground">
        <ScrollToTop />
        <h1 style={{ textAlign: "center" }}>
          {IstocnaIJuznaSrbijaText?.name}
        </h1>
        <h4>
          {IstocnaIJuznaSrbijaText?.mainText}
        </h4>
        <h3 style={{ margin: "20px 0", textAlign: "center" }}>
          {IstocnaIJuznaSrbijaText?.topic1}
        </h3>
        <h4>{IstocnaIJuznaSrbijaText?.text1}</h4>
        <p>{IstocnaIJuznaSrbijaText?.text11}</p>
        <p>{IstocnaIJuznaSrbijaText?.text12}</p>
        <p>{IstocnaIJuznaSrbijaText?.text13}</p>
        <p>{IstocnaIJuznaSrbijaText?.text14}</p>
        <p>{IstocnaIJuznaSrbijaText?.text15}</p>
        <p>{IstocnaIJuznaSrbijaText?.text16}</p>
        <p>{IstocnaIJuznaSrbijaText?.text17}</p>
        <p>{IstocnaIJuznaSrbijaText?.text18}</p>
        <h3 style={{ margin: "30px 0", textAlign: "center" }}>
          {IstocnaIJuznaSrbijaText?.topic2}
        </h3>
        <h4>
          {IstocnaIJuznaSrbijaText?.text2}
        </h4>
        <h3 style={{ margin: "20px 0", textAlign: "center" }}>Okruzi</h3>
        <p style={{ margin: "10px 0 10px 0px", textAlign: "center" }}>Podunavski</p>
        <p style={{ margin: "10px 0 10px 0px", textAlign: "center" }}>
          Braničevski
        </p>
        <p style={{ margin: "10px 0 10px 0px", textAlign: "center" }}>
          Borski
        </p>
        <p style={{ margin: "10px 0 10px 0px", textAlign: "center" }}>
          Zaječarski
        </p>
        <p style={{ margin: "10px 0 10px 0px", textAlign: "center" }}>
          Nišavski
        </p>
        <p style={{ margin: "10px 0 10px 0px", textAlign: "center" }}>
          Pirotski
        </p>
        <p style={{ margin: "10px 0 10px 0px", textAlign: "center" }}>Toplički</p>
        <p style={{ margin: "10px 0 10px 0px", textAlign: "center" }}>
          Jablanički
        </p>
        <p style={{ margin: "10px 0 10px 0px", textAlign: "center" }}>
          Pčinski
        </p>
        <div className="btnClass">
          <button className="firstBtn" onClick={() => navigate(-1)}>
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
