/* eslint-disable react/jsx-key */

import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { ScrollToTop } from "../../../ScrollToTop";
import { KosovoIMetohijaTekst } from "./KosovoIMetohijaTekst";
import { serbianMapPathRoutes } from "../../serbianMapPathRoutes";

export const KosovoIMetohijaTekstModal = ({ goBack }) => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate(serbianMapPathRoutes.KosovoIMetohija);
  };

  return (
    <div className="modalBackground">
      <div className="modalContent kosovoIMetohijaTekstModalBackgorund">
        <ScrollToTop />
        <h1 style={{ textAlign: "center" }}>{KosovoIMetohijaTekst?.name}</h1>
        <h4>{KosovoIMetohijaTekst?.mainText}</h4>
        <h3 style={{ margin: "20px 0", textAlign: "center" }}>
          {KosovoIMetohijaTekst?.topic1}
        </h3>
        <h4>{KosovoIMetohijaTekst?.text1}</h4>
        <p>{KosovoIMetohijaTekst?.text11}</p>
        <p>{KosovoIMetohijaTekst?.text12}</p>
        <p>{KosovoIMetohijaTekst?.text13}</p>
        <p>{KosovoIMetohijaTekst?.text14}</p>
        <p>{KosovoIMetohijaTekst?.text15}</p>
        <p>{KosovoIMetohijaTekst?.text16}</p>
        <p>{KosovoIMetohijaTekst?.text17}</p>
        <p>{KosovoIMetohijaTekst?.text18}</p>
        <h3 style={{ margin: "30px 0", textAlign: "center" }}>
          {KosovoIMetohijaTekst?.topic2}
        </h3>
        <h4>{KosovoIMetohijaTekst?.text2}</h4>
        <h3 style={{ margin: "20px 0", textAlign: "center" }}>Okruzi</h3>
        <p style={{ margin: "10px 0 10px 0px", textAlign: "center" }}>Pećki</p>
        <p style={{ margin: "10px 0 10px 0px", textAlign: "center" }}>
          Đakovački
        </p>
        <p style={{ margin: "10px 0 10px 0px", textAlign: "center" }}>
          Prizrenski
        </p>
        <p style={{ margin: "10px 0 10px 0px", textAlign: "center" }}>
          Mitrovački
        </p>
        <p style={{ margin: "10px 0 10px 0px", textAlign: "center" }}>
          Prištinski
        </p>
        <p style={{ margin: "10px 0 10px 0px", textAlign: "center" }}>
          Gnjilanski
        </p>
        <p style={{ margin: "10px 0 10px 0px", textAlign: "center" }}>
          Uroševački
        </p>
        <div className="btnClass">
          <button className="firstBtn" onClick={() => navigate('/')}>
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
