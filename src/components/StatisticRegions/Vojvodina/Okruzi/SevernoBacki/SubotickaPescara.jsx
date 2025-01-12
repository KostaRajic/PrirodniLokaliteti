import pescara1 from "../../../../../assets/images/Vojvodina/SevernoBackiOkrug/SubotickaPescara/pescara1.jpg";
import pescara2 from "../../../../../assets/images/Vojvodina/SevernoBackiOkrug/SubotickaPescara/pescara2.jpg";
import pescara3 from "../../../../../assets/images/Vojvodina/SevernoBackiOkrug/SubotickaPescara/pescara3.jpg";
import pescara4 from "../../../../../assets/images/Vojvodina/SevernoBackiOkrug/SubotickaPescara/pescara4.jpg";
import pescara5 from "../../../../../assets/images/Vojvodina/SevernoBackiOkrug/SubotickaPescara/pescara5.jpg";
import pescara6 from "../../../../../assets/images/Vojvodina/SevernoBackiOkrug/SubotickaPescara/pescara6.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";

export const SubotickaPescara = () => {
  const navigate = useNavigate();

  return (
    <div className="placeBackground">
      <ScrollToTop/>
      <FaArrowLeft className="arrowLeft" onClick={() => navigate(-1)} />
      <header></header>
      <img src={pescara1} alt="Suboticka Pescara 1" />

      <h2>
        SUBOTIČKA PEŠČARA
      </h2>

      <p style={{ paddingTop: "80px", marginTop: "-10px" }}>
        Subotička peščara se nalazi na severu Bačke, a predstavlja krajnji južni
        deo velike peščarske površine u međurečju Dunava i Tise, koja se
        najvećim delom prostire u susednoj Mađarskoj. Zaštićeno područje je sa
        severne strane ograničeno državnom granicom prema Mađarskoj, a na jugu
        rubnim delovima naselja Subotica, Palić i Kelebija. Površina peščare je
        5.369,90 ha i ima izdužen oblik generalnog pravca pružanja istok -
        zapad.
      </p>

      <img src={pescara4} alt="Suboticka Pescara 2" />

      <p style={{ marginTop: "-10px" }}>
        Ovo područje ima karakter šumo-stepe, sa šumskim kompleksima, većinom
        antropogenog porekla. Prirodna vrednost je uslovljena karakterom i
        mozaičnošću staništa, među kojima peščarska, stepska i močvarna, daju
        osnovni pečat predelu sa visokim stepenom biodiverziteta. Najznačajnija
        su vlažna staništa formirana na podlozi nizijskog treseta u dolini
        rečice Kireš, koja se smatraju najređim i najugrožnijim staništima u
        Evropi i svetu.
      </p>

      <img src={pescara2} alt="Suboticka Pescara 3" />

      <p style={{ marginTop: "-10px" }}>
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

      <img src={pescara3} alt="Suboticka Pescara 4" />
      <p style={{ marginTop: "-10px" }}>
        Među očuvanim prirodnim retkostima, mora se pomenuti reliktna
        šumo-stepska biljka – šafranjika, koja je sinonim za floru Subotičke
        peščare, s obzirom da je tu njeno jedino nalazište u Vojvodini i Srbiji.
        Ukupan broj zabeleženih vrsta ptica na području iznosi čak 170 vrsta,
        što je rezultat velike raznovrsnosti staništa.
      </p>

      <img
        src={pescara5}
        alt="Suboticka Pescara 5"
        style={{ marginBottom: "-10px" }}
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
