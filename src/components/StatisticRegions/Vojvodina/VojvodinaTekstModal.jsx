/* eslint-disable react/jsx-key */

import { vojvodinaText } from "./VojvodinaTekst";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { ScrollToTop } from "../../../ScrollToTop";

export const VojvodinaTekstModal = ({ goBack }) => {
    const navigate = useNavigate()

    const handleNext = () => {
      navigate("Vojvodina");
    }


  return (
    <div className="modalBackground">

      <div className="modalContent vojvodinaTekstModalBackround">
      <ScrollToTop/>
          <>
            <h1 style={{textAlign: 'center'}}>{vojvodinaText?.name}</h1>
            <h4>{vojvodinaText?.mainText}</h4>
            <h3 style={{margin: '20px 0', textAlign: 'center'}}>{vojvodinaText?.topic1}</h3>
            <h4>{vojvodinaText?.text1}</h4>
            <p>{vojvodinaText?.text11}</p>
            <p>{vojvodinaText?.text12}</p>
            <p>{vojvodinaText?.text13}</p>
            <p>{vojvodinaText?.text14}</p>
            <p>{vojvodinaText?.text15}</p>
            <p>{vojvodinaText?.text16}</p>
            <p>{vojvodinaText?.text17}</p>
            <p>{vojvodinaText?.text18}</p>
            <h3 style={{margin: '30px 0', textAlign: 'center'}}>{vojvodinaText?.topic2}</h3>
            <h4>{vojvodinaText?.text2}</h4>
            <h3 style={{margin: '20px 0', textAlign: 'center'}}>Okruzi</h3>
            <p style={{margin:'10px 0 10px 0px', textAlign: 'center'}}>Zapadno-Backi</p>
            <p style={{margin:'10px 0 10px 0px', textAlign: 'center'}}>Severno-Backi</p>
            <p style={{margin:'10px 0 10px 0px', textAlign: 'center'}}>Severno-Banatski</p>
            <p style={{margin:'10px 0 10px 0px', textAlign: 'center'}}>Juzno-Backi</p>
            <p style={{margin:'10px 0 10px 0px', textAlign: 'center'}}>Sredje-Banatski</p>
            <p style={{margin:'10px 0 10px 0px', textAlign: 'center'}}>Sremski</p>
            <p style={{margin:'10px 0 10px 0px', textAlign: 'center'}}>Juzno-Banatski</p>
          </>
        <div className="btnClass">
          <button className="firstBtn" onClick={() => navigate(-1)}>GO BACK</button>
          <button className="secondBtn" onClick={handleNext}>NEXT</button>
        </div>
        <Outlet />
      </div>
    </div>
  );
};
