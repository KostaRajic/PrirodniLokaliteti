import vodopadTupavica1 from "../../../../../assets/images/JuznaIIstocnaSrbija/PirotskiOkrug/VodopadTupavica/vodopadTupavica1.jpg";
import vodopadTupavica2 from "../../../../../assets/images/JuznaIIstocnaSrbija/PirotskiOkrug/VodopadTupavica/vodopadTupavica2.jpg";
import vodopadTupavica3 from "../../../../../assets/images/JuznaIIstocnaSrbija/PirotskiOkrug/VodopadTupavica/vodopadTupavica3.jpg";
import vodopadTupavica4 from "../../../../../assets/images/JuznaIIstocnaSrbija/PirotskiOkrug/VodopadTupavica/vodopadTupavica4.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { pirotskiOkrugPathRoutes } from "./PirotskiOkrugPathRoutes";

export const VodopadTupavica = () => {
  const navigate = useNavigate();

  return (
    <div className="placeBackground">
      <ScrollToTop />
      <FaArrowLeft className="arrowLeft" onClick={() => navigate(pirotskiOkrugPathRoutes.home)} />
      <header></header>
      <img src={vodopadTupavica1} alt="Vodopad Tupavica 1" />

      <h2>Vodopad Tupavica</h2>

      <p style={{ paddingTop: "50px" }}>
        Vodopad Tupavica nalazi se na 5 km i 400 metara od sela Dojkinci na
        Staroj Planini, na visini od 1050 metara nadmorske visine. Tokom
        najtoplijeg perioda godine, ukoliko je godina sušna, slap vode je manji
        nego inače i tada voda samo kaplje preko stena. Čista i hladna voda pada
        sa visine od oko 15 metara preko stena crvene boje.
      </p>

      <img src={vodopadTupavica2} alt="Vodopad Tupavica 2" />

      <p>
        Vodopad Tupavica nalazi se u blizini sela Dojkinci na Dojkinčkoj reci,
        na nadmorskoj visini od 1050 metara. Smešten je u centru Stare planine,
        zbog čega se smatra najpristupačnijim u odnosu na ostale vodopade. Od
        mesta Dojkinci, uzvodno uz Dojkinčsku reku, do vodopada Tupavica
        potrebno je sat i po vremena.
      </p>

      <img src={vodopadTupavica3} alt="Vodopad Tupavica 3" />

      <p>
        Vodopad Tupavica ima veliki turistički značaj, kako zbog svog položaja u
        srcu Stare planine, tako i zbog svoje visine od 25 metara i očaravajuće
        lepote. Najpovoljniji period za posetu vodopadu je proleće ili jesen,
        pod uslovom da nije bila sušna godina. Ako je godina sušna, tokom
        najtoplijeg perioda voda samo kaplje preko stena.
      </p>

      <img src={vodopadTupavica4} alt="Vodopad Tupavica 4" />

      <p>
        U optimalnim uslovima, tokom proleća i leta, vodopad se prikazuje u
        svojoj punoj lepoti, jer slapovi vode padaju niz liticu od peščara.
        Vodopadi Stare planine poznati su po tome što, osim u periodu proleća i
        leta, predstavljaju turističku atrakciju i tokom zimskih dana, kada
        potpuno zaledjeni postaju pravo remek-delo prirode.
      </p>
    </div>
  );
};
