/* eslint-disable react/jsx-key */

import { vojvodinaText, vojvodinaTextEng } from "./VojvodinaTekst";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { ScrollToTop } from "../../../ScrollToTop";
import { serbianMapPathRoutes } from "../../serbianMapPathRoutes";
import { useContextAuth } from "../../../Context";

const VojvodinaTekstModal = ({ goBack }) => {
  const navigate = useNavigate();
  const { switchLanguage } = useContextAuth();

  const handleNext = () => {
    navigate(serbianMapPathRoutes.Vojvodina(switchLanguage));
  };

  return (
    // <div className="modalBackground">
      <div className="modalContent vojvodinaTekstModalBackround">
        <ScrollToTop />

        {switchLanguage === "rs" ? (
          <>
            <h1 style={{ textAlign: "center" }}>{vojvodinaText?.name}</h1>
            <h4>{vojvodinaText?.mainText}</h4>
            <h3 style={{ margin: "20px 0", textAlign: "center" }}>
              {vojvodinaText?.topic1}
            </h3>
            <h4>{vojvodinaText?.text1}</h4>
            <p>{vojvodinaText?.text11}</p>
            <p>{vojvodinaText?.text12}</p>
            <p>{vojvodinaText?.text13}</p>
            <p>{vojvodinaText?.text14}</p>
            <p>{vojvodinaText?.text15}</p>
            <p>{vojvodinaText?.text16}</p>
            <p>{vojvodinaText?.text17}</p>
            <p>{vojvodinaText?.text18}</p>
            <h3 style={{ margin: "30px 0", textAlign: "center" }}>
              {vojvodinaText?.topic2}
            </h3>
            <h4>{vojvodinaText?.text2}</h4>
            <h3 style={{ margin: "20px 0", textAlign: "center" }}>Okruzi</h3>
            <p style={{ margin: "10px 0 10px 0px", textAlign: "center" }}>
              Zapadno-Backi
            </p>
            <p style={{ margin: "10px 0 10px 0px", textAlign: "center" }}>
              Severno-Backi
            </p>
            <p style={{ margin: "10px 0 10px 0px", textAlign: "center" }}>
              Severno-Banatski
            </p>
            <p style={{ margin: "10px 0 10px 0px", textAlign: "center" }}>
              Juzno-Backi
            </p>
            <p style={{ margin: "10px 0 10px 0px", textAlign: "center" }}>
              Sredje-Banatski
            </p>
            <p style={{ margin: "10px 0 10px 0px", textAlign: "center" }}>
              Sremski
            </p>
            <p style={{ margin: "10px 0 10px 0px", textAlign: "center" }}>
              Juzno-Banatski
            </p>
            <div className="btnClass">
          <button className="button firstBtn" onClick={() => navigate("/")}>
            Nazad
          </button>
          <button className="button secondBtn" onClick={handleNext}>
            Napred
          </button>
        </div>
          </>

          
        ) : (
          <>
            <h1 style={{ textAlign: "center" }}>{vojvodinaTextEng?.name}</h1>
            <h4>{vojvodinaTextEng?.mainText}</h4>
            <h3 style={{ margin: "20px 0", textAlign: "center" }}>
              {vojvodinaTextEng?.topic1}
            </h3>
            <h4>{vojvodinaTextEng?.text1}</h4>
            <p>{vojvodinaTextEng?.text11}</p>
            <p>{vojvodinaTextEng?.text12}</p>
            <p>{vojvodinaTextEng?.text13}</p>
            <p>{vojvodinaTextEng?.text14}</p>
            <p>{vojvodinaTextEng?.text15}</p>
            <p>{vojvodinaTextEng?.text16}</p>
            <p>{vojvodinaTextEng?.text17}</p>
            <p>{vojvodinaTextEng?.text18}</p>
            <h3 style={{ margin: "30px 0", textAlign: "center" }}>
              {vojvodinaTextEng?.topic2}
            </h3>
            <h4>{vojvodinaTextEng?.text2}</h4>
            <h3 style={{ margin: "20px 0", textAlign: "center" }}>Districts</h3>
            <p style={{ margin: "10px 0 10px 0px", textAlign: "center" }}>
              West Bačka
            </p>
            <p style={{ margin: "10px 0 10px 0px", textAlign: "center" }}>
              North Bačka
            </p>
            <p style={{ margin: "10px 0 10px 0px", textAlign: "center" }}>
              North Banat
            </p>
            <p style={{ margin: "10px 0 10px 0px", textAlign: "center" }}>
              South Bačka
            </p>
            <p style={{ margin: "10px 0 10px 0px", textAlign: "center" }}>
              Middle Banat
            </p>
            <p style={{ margin: "10px 0 10px 0px", textAlign: "center" }}>
              Srem
            </p>
            <p style={{ margin: "10px 0 10px 0px", textAlign: "center" }}>
              South Banat
            </p>
            <div className="btnClass">
          <button className="button firstBtn" onClick={() => navigate("/")}>
            Back
          </button>
          <button className="button secondBtn" onClick={handleNext}>
            Next
          </button>
        </div>
          </>
        )}

        
        <Outlet />
      </div>
    // </div>
  );
};


export default VojvodinaTekstModal;