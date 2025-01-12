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

      <div className="modalContent vojvodinaBackground">
      <ScrollToTop/>
          <>
            <h1>{vojvodinaText?.name}</h1>
            <p>{vojvodinaText?.mainText}</p>
            <h3>{vojvodinaText?.topic1}</h3>
            <p>{vojvodinaText?.text1}</p>
            <h3>{vojvodinaText?.topic2}</h3>
            <p>{vojvodinaText?.text2}</p>
            <h3>Okruzi</h3>
            <p>Zapadno-Backi</p>
            <p>Severno-Backi</p>
            <p>Severno-Banatski</p>
            <p>Juzno-Backi</p>
            <p>Sredje-Banatski</p>
            <p>Sremski</p>
            <p>Juzno-Banatski</p>
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
