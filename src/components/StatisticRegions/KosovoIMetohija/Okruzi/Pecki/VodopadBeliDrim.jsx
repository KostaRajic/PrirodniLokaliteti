import beliDrimVodopad1 from "../../../../../assets/images/KosovoIMetohija/Pecki/VodopadBeliDrim/vodopadBeliDrim1.jpg";
import beliDrimVodopad2 from "../../../../../assets/images/KosovoIMetohija/Pecki/VodopadBeliDrim/vodopadBeliDrim2.jpg";
import beliDrimVodopad3 from "../../../../../assets/images/KosovoIMetohija/Pecki/VodopadBeliDrim/vodopadBeliDrim3.jpg";
import beliDrimVodopad4 from "../../../../../assets/images/KosovoIMetohija/Pecki/VodopadBeliDrim/vodopadBeliDrim4.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { peckiOkrugPathRoutes } from "./PeckiOkrugPathRoutes";

export const VodopadBeliDrim = () => {
  const navigate = useNavigate();

  return (
    <div className="placeBackground">
      <ScrollToTop />
      <FaArrowLeft className="arrowLeft" onClick={() => navigate(peckiOkrugPathRoutes.home)} style={{fill: 'white'}} />
      <header></header>
      <img src={beliDrimVodopad1} alt="Vodopad Beli Drim 1" />

      <h2>Vodopad Beli Drim</h2>

      <p style={{ paddingTop: "50px" }}>
        Beli Drim je jedna od dve reke čijim spajanjem nastaje reka Drim u
        Albaniji. Druga reka je Crni Drim. Ove dve reke se spajaju u
        severoistočnoj Albaniji, kod grada Kukesa.
        <br />
        <br />
        Dužina Belog Drima je 175 km (od toga 156 km u Srbiji i 19 km u
        Albaniji). Izvire sa planine Žljeb u Metohiji, severno od Peći, i
        protiče kroz polukrašku regiju Metohiju. U svom početnom delu, Beli Drim
        je reka ponornica, koja izlazi kao snažan izvor i formira vodopad visine
        25 metara u blizini sela Radovac. Izvor ove reke nalazi se na nadmorskoj
        visini od 580 m, dok je tačka spajanja sa Crnim Drimom na visini od
        240,8 m.
      </p>

      <img src={beliDrimVodopad2} alt="Vodopad Beli Drim 2" />

      <p>
        Beli Drim teče prema istoku, pored Pećke banje, a zatim prima vodu od
        pritoke Istočke reke, nakon čega njegov tok skreće ka jugu. Dalji tok
        prolazi kroz veoma plodnu i gusto naseljenu centralnu Metohiju, poznatu
        i kao Podrimlje. Zanimljivo je da se veliki gradovi ovog područja nisu
        smestili direktno na obalu reke (kao što su Peć, Đakovica i Prizren).
        Najveće naselje pored Belog Drima je Kline.
      </p>

      <img src={beliDrimVodopad3} alt="Vodopad Beli Drim 3" />

      <p>
        Beli Drim ima mnoge značajne pritoke: desne pritoke su Pećka Bistrica,
        Dečanska Bistrica i Erenik, dok su leve pritoke Istočka reka, Kline,
        Miruša, Rimnik, Topluga i Prizrensksa Bistrica.
      </p>

      <img src={beliDrimVodopad4} alt="Vodopad Beli Drim 4" />

      <p>
        Sliv Belog Drima u Srbiji pokriva površinu od 4.360 km², dok je površina
        albanksog dela sliva 604 km². U ovom delu reke nema naselja, a Beli Drim
        prima levu pritoku, Plavsku reku, koja dolazi iz oblasti Gora. Tok Belog
        Drima nije plovan.
      </p>
    </div>
  );
};
