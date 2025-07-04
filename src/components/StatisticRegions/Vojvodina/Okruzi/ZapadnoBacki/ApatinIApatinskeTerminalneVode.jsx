import apatin1 from "../../../../../assets/images/Vojvodina/ZapadnoBackiOkrug/ApatinITerminalneVode/desktop/Apatin1.jpg";
import apatin2 from "../../../../../assets/images/Vojvodina/ZapadnoBackiOkrug/ApatinITerminalneVode/desktop/Apatin2.jpg";
import apatin3 from "../../../../../assets/images/Vojvodina/ZapadnoBackiOkrug/ApatinITerminalneVode/desktop/Apatin3.jpg";
import apatin5 from "../../../../../assets/images/Vojvodina/ZapadnoBackiOkrug/ApatinITerminalneVode/desktop/Apatin5.jpg";
import apatin6 from "../../../../../assets/images/Vojvodina/ZapadnoBackiOkrug/ApatinITerminalneVode/desktop/Apatin6.jpg";
import apatin11 from "../../../../../assets/images/Vojvodina/ZapadnoBackiOkrug/ApatinITerminalneVode/mobile/MApatin1.jpg";
import apatin22 from "../../../../../assets/images/Vojvodina/ZapadnoBackiOkrug/ApatinITerminalneVode/mobile/MApatin2.jpg";
import apatin33 from "../../../../../assets/images/Vojvodina/ZapadnoBackiOkrug/ApatinITerminalneVode/mobile/MApatin3.jpg";
import apatin55 from "../../../../../assets/images/Vojvodina/ZapadnoBackiOkrug/ApatinITerminalneVode/mobile/MApatin5.jpg";
import apatin66 from "../../../../../assets/images/Vojvodina/ZapadnoBackiOkrug/ApatinITerminalneVode/mobile/MApatin6.jpg";

import apatinM1 from "../../../../../assets/images/Vojvodina/ZapadnoBackiOkrug/ApatinITerminalneVode/muzeji/CrkvaSvApostola.jpg";
import apatinM2 from "../../../../../assets/images/Vojvodina/ZapadnoBackiOkrug/ApatinITerminalneVode/muzeji/MuzejPodunavskihNemaca.jpg";
import apatinM3 from "../../../../../assets/images/Vojvodina/ZapadnoBackiOkrug/ApatinITerminalneVode/muzeji/NikolaTesla.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { useEffect, useState } from "react";
import { zapadnoBackiPathRoutes } from "./ZapadnoBackiPathRoutes";

export const Apatin = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft className="arrowLeft" onClick={() => navigate(zapadnoBackiPathRoutes.home)} />

        <header></header>
        <img srcSet={`${apatin11} 400w, ${apatin1} `} alt="apatin1" />
        
          <h2>Apatin i Terminalne Vode</h2>

        <p>
          Apatin, smešten na severozapadu Srbije, u Zapadno Bačkom okrugu,
          poznat je po svojoj istoriji, prirodnim resursima i turističkim
          potencijalima. Grad leži na obali Dunava, što mu daje poseban značaj
          kao destinaciji za ljubitelje prirode, reke i autentičnih vojvođanskih
          pejzaža.
        </p>

        <img srcSet={`${apatin22} 400w, ${apatin2} `} alt="apatin2" />

        <p>
          Apatin je poznat po svojoj Apatinskoj pivari, jednoj od najstarijih u
          regionu, kao i salašima u okolini gde se mogu probati tradicionalna
          jela i uživati u autentičnom vojvođanskom ambijentu. Pored toga,
          manifestacije i festivali dodatno obogaćuju turističku ponudu. Apatin
          spaja prirodne resurse, kulturno nasleđe i moderni turizam, pružajući
          nezaboravno iskustvo svakom posetiocu.
        </p>

        <div className="displayFlex">
          <div>
            <img src={apatinM1} alt="Crkva Sv. Apostola" />
            <p>Crkva svetih Apostola</p>
          </div>
          <div>
            <img src={apatinM2} alt="Muzej podunavskih nemaca" />
            <p>Muzej podunavskih nemaca</p>
          </div>
          <div>
            <img src={apatinM3} alt="Nikola Tesla" />
            <p>Spomenik Nikoli Tesli</p>
          </div>
        </div>

        <img srcSet={`${apatin55} 400w, ${apatin5} `} alt="apatin3" />

        <p>
          Dunav, sa svojim adama i rukavcima, predstavlja srce prirodnih
          atrakcija Apatina. Ova područja pružaju idealne uslove za ribolov,
          plovidbu i uživanje u mirnim pejzažima. Riblji fond privlači sportske
          ribolovce, dok reka nudi nezaboravne doživljaje tokom vožnje čamcem
          ili organizovanih tura. Letnje manifestacije na Dunavu, poput
          Ribarskih večeri, okupljaju brojne posetioce i promovišu tradiciju
          ovog kraja. Biciklističke i pešačke staze kroz okolinu Apatina idealne
          su za rekreativce i ljubitelje prirode.
        </p>

        <img srcSet={`${apatin33} 400w, ${apatin3} `} alt="apatin4" />

        <p>
          Poseban značaj imaju termalne vode, poznate po svom lekovitom sastavu
          i temperaturi od oko 50°C. Ove vode se koriste za tretman reumatskih
          bolesti, problema sa mišićima i zglobovima, kao i za oporavak nakon
          povreda. Njihova lekovita svojstva čine ih osnovom zdravstvenog i
          wellness turizma. Termalne vode privlače posetioce koji traže
          opuštanje i poboljšanje opšteg zdravlja u prirodnom okruženju.
        </p>

        <img srcSet={`${apatin66} 400w, ${apatin6} `} alt="apatin4" />

        <p>
          Posetite Apatin, grad na obali Dunava, gde se spajaju prirodne lepote,
          termalne vode i bogata vojvođanska tradicija, pružajući savršen odmor
          i autentično iskustvo.
        </p>
      </div>
    </>
  );
};
