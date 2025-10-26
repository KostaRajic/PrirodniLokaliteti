/* eslint-disable react/jsx-key */

import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { ScrollToTop } from "../../../ScrollToTop";
import { IstocnaIJuznaSrbijaText, IstocnaIJuznaSrbijaTextENG } from "./IstocnaIJuznaSrbijaTekst";
import { serbianMapPathRoutes } from "../../serbianMapPathRoutes";
import { useContextAuth } from "../../../Context";

const JuznaIIStocnaSrbijaTekstModal = ({ goBack }) => {
  const { switchLanguage } = useContextAuth();
  const navigate = useNavigate();

  const handleNext = () => {
    navigate(serbianMapPathRoutes.IstocnaSrbija(switchLanguage));
  };

  return (
    <div className="modalBackground">
      <div className="modalContent istocnaIJuznaSrbijaTekstModalBackground">
        <ScrollToTop />
        {switchLanguage === 'rs' ?
          (
            <>
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
                <button className="firstBtn" onClick={() => navigate('/')}>
                  Nazad
                </button>
                <button className="secondBtn" onClick={handleNext}>
                  Napred
                </button>
              </div>
            </>
          ) : (
            <>

              <h1 style={{ textAlign: "center" }}>{IstocnaIJuznaSrbijaTextENG?.name}</h1>
              <h4>{IstocnaIJuznaSrbijaTextENG?.mainText}</h4>
              <h3 style={{ margin: "20px 0", textAlign: "center" }}>
                {IstocnaIJuznaSrbijaTextENG?.topic1}
              </h3>
              <h4>{IstocnaIJuznaSrbijaTextENG?.text1}</h4>
              <p>{IstocnaIJuznaSrbijaTextENG?.text11}</p>
              <p>{IstocnaIJuznaSrbijaTextENG?.text12}</p>
              <p>{IstocnaIJuznaSrbijaTextENG?.text13}</p>
              <p>{IstocnaIJuznaSrbijaTextENG?.text14}</p>
              <p>{IstocnaIJuznaSrbijaTextENG?.text15}</p>
              <p>{IstocnaIJuznaSrbijaTextENG?.text16}</p>
              <p>{IstocnaIJuznaSrbijaTextENG?.text17}</p>
              <p>{IstocnaIJuznaSrbijaTextENG?.text18}</p>
              <h3 style={{ margin: "30px 0", textAlign: "center" }}>
                {IstocnaIJuznaSrbijaTextENG?.topic2}
              </h3>
              <h4>{IstocnaIJuznaSrbijaTextENG?.text2}</h4>
              <h3 style={{ margin: "20px 0", textAlign: "center" }}>Districts</h3>
              <p style={{ margin: "10px 0 10px 0px", textAlign: "center" }}>
                Braničevo District
              </p>
              <p style={{ margin: "10px 0 10px 0px", textAlign: "center" }}>
                Bor District
              </p>
              <p style={{ margin: "10px 0 10px 0px", textAlign: "center" }}>
                Jablanica District
              </p>
              <p style={{ margin: "10px 0 10px 0px", textAlign: "center" }}>
                Nišava District
              </p>
              <p style={{ margin: "10px 0 10px 0px", textAlign: "center" }}>
                Pčinja District
              </p>
              <p style={{ margin: "10px 0 10px 0px", textAlign: "center" }}>
                Pirot District
              </p>
              <p style={{ margin: "10px 0 10px 0px", textAlign: "center" }}>
                Danube District
              </p>
              <p style={{ margin: "10px 0 10px 0px", textAlign: "center" }}>
                Toplica District
              </p>
              <p style={{ margin: "10px 0 10px 0px", textAlign: "center" }}>
                Zaječar District
              </p>
              <div className="btnClass">
                <button className="firstBtn" onClick={() => navigate('/')}>
                  Back
                </button>
                <button className="secondBtn" onClick={handleNext}>
                  Next
                </button>
              </div>

            </>
          )}
        < Outlet />
      </div>
    </div>
  );
};

export default JuznaIIStocnaSrbijaTekstModal;