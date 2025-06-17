import pescara1 from "../../../../../assets/images/Vojvodina/SevernoBackiOkrug/SubotickaPescara/desktop/pescara1.jpg";
import pescara2 from "../../../../../assets/images/Vojvodina/SevernoBackiOkrug/SubotickaPescara/desktop/pescara2.jpg";
import pescara3 from "../../../../../assets/images/Vojvodina/SevernoBackiOkrug/SubotickaPescara/desktop/pescara3.jpg";
import pescara4 from "../../../../../assets/images/Vojvodina/SevernoBackiOkrug/SubotickaPescara/desktop/pescara4.jpg";
import pescara5 from "../../../../../assets/images/Vojvodina/SevernoBackiOkrug/SubotickaPescara/desktop/pescara5.jpg";
import pescara6 from "../../../../../assets/images/Vojvodina/SevernoBackiOkrug/SubotickaPescara/desktop/pescara6.jpg";
import pescara11 from "../../../../../assets/images/Vojvodina/SevernoBackiOkrug/SubotickaPescara/mobile/Mpescara1.jpg";
import pescara22 from "../../../../../assets/images/Vojvodina/SevernoBackiOkrug/SubotickaPescara/mobile/Mpescara2.jpg";
import pescara33 from "../../../../../assets/images/Vojvodina/SevernoBackiOkrug/SubotickaPescara/mobile/Mpescara3.jpg";
import pescara44 from "../../../../../assets/images/Vojvodina/SevernoBackiOkrug/SubotickaPescara/mobile/Mpescara4.jpg";
import pescara55 from "../../../../../assets/images/Vojvodina/SevernoBackiOkrug/SubotickaPescara/mobile/Mpescara5.jpg";
import pescara66 from "../../../../../assets/images/Vojvodina/SevernoBackiOkrug/SubotickaPescara/mobile/Mpescara6.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { servernoBackiPathRoutes } from "./SevernoBackiPathRoutes";

export const SubotickaPescara = () => {
  const navigate = useNavigate();

  return (
    <div className="placeBackground">
      <ScrollToTop/>
      <FaArrowLeft className="arrowLeft" onClick={() => navigate(servernoBackiPathRoutes.home)} />
      <header></header>
      <img srcSet={`${pescara11} 400w, ${pescara1} `} alt="Suboticka Pescara 1" />

      <h2>
      Suboticka Peščara
      </h2>

      <p>
        Subotička peščara se nalazi na severu Bačke, a predstavlja krajnji južni
        deo velike peščarske površine u međurečju Dunava i Tise, koja se
        najvećim delom prostire u susednoj Mađarskoj. Zaštićeno područje je sa
        severne strane ograničeno državnom granicom prema Mađarskoj, a na jugu
        rubnim delovima naselja Subotica, Palić i Kelebija. Površina peščare je
        5.369,90 ha i ima izdužen oblik generalnog pravca pružanja istok -
        zapad.
      </p>

      <img srcSet={`${pescara44} 400w, ${pescara4} `} alt="Suboticka Pescara 2" />

      <p>
        Ovo područje ima karakter šumo-stepe, sa šumskim kompleksima, većinom
        antropogenog porekla. Prirodna vrednost je uslovljena karakterom i
        mozaičnošću staništa, među kojima peščarska, stepska i močvarna, daju
        osnovni pečat predelu sa visokim stepenom biodiverziteta. Najznačajnija
        su vlažna staništa formirana na podlozi nizijskog treseta u dolini
        rečice Kireš, koja se smatraju najređim i najugrožnijim staništima u
        Evropi i svetu.
      </p>

      <img srcSet={`${pescara22} 400w, ${pescara2} `} alt="Suboticka Pescara 3" />

      <p>
        Flora i vegetacija ovog područja imaju odlike šumo-stepe odnosno čine
        mozaik šumskih zajedica i stepskih fitocenoza. Od drvenastih vrsta to su
        pre svega autohtone sastojine hrasta lužnjaka i manje oaze bele i sive
        topole a zatim i zasadi bagrema koji imaju pre svega ulogu da uspore
        vetar i koliko je to moguće vežu pesak. Samonikli biljni svet travnog
        pokrivača ovog prirodnog dobra predstavljen je raznim tipovima
        vegetacije: peščarskom, stepskom, livadskom i močvarnom. Od mnogobrojnih
        ovde prisutnih zeljastih vrsta one koje su vezane za peščarske uslove i
        rastu samo u Subotičkoj peščari su: borbaševa tamnocrvena kalužđerka
        (Epipactis atrorubens subsp. borbssii), kasni peščarski karanfil
        (Dianthus serotinus), peščarska perunika (Iris arenaria) i naravno
        šafranjika (Bulbocodium versicolor) koja je sinoim za ovu peščaru.
      </p>

      <img srcSet={`${pescara33} 400w, ${pescara3} `} alt="Suboticka Pescara 4" />
      <p>
        Među očuvanim prirodnim retkostima, mora se pomenuti reliktna
        šumo-stepska biljka – šafranjika, koja je sinonim za floru Subotičke
        peščare, s obzirom da je tu njeno jedino nalazište u Vojvodini i Srbiji.
        Ukupan broj zabeleženih vrsta ptica na području iznosi čak 170 vrsta,
        što je rezultat velike raznovrsnosti staništa.
      </p>

      <img
        srcSet={`${pescara55} 400w, ${pescara5} `}
        alt="Suboticka Pescara 5"
      />
      <p>
        Peščara je sve popularnija destinacija za ljubitelje prirode, turiste,
        istraživače i ljubitelje ekologije zbog svoje lepote i jedinstvene
        prirodne sredine. Posetioci mogu uživati u pešačenju, biciklizmu,
        fotografiji prirode i posmatranju ptica.
      </p>
    </div>
  );
};
