import palicko1 from "../../../../../assets/images/Vojvodina/SevernoBackiOkrug/PalićkoJezero/desktop/Palić4.jpg";
import palicko2 from "../../../../../assets/images/Vojvodina/SevernoBackiOkrug/PalićkoJezero/desktop/Palić2.jpg";
import palicko3 from "../../../../../assets/images/Vojvodina/SevernoBackiOkrug/PalićkoJezero/desktop/PalićFilmFestival.jpg";
import palicko4 from "../../../../../assets/images/Vojvodina/SevernoBackiOkrug/PalićkoJezero/desktop/Palićzoo.jpg";
import palicko5 from "../../../../../assets/images/Vojvodina/SevernoBackiOkrug/PalićkoJezero/desktop/Palić3.jpg";
import palicko11 from "../../../../../assets/images/Vojvodina/SevernoBackiOkrug/PalićkoJezero/mobile/MPalić4.jpg";
import palicko22 from "../../../../../assets/images/Vojvodina/SevernoBackiOkrug/PalićkoJezero/mobile/MPalić2.jpg";
import palicko33 from "../../../../../assets/images/Vojvodina/SevernoBackiOkrug/PalićkoJezero/mobile/MPalićFilmFestival.jpg";
import palicko44 from "../../../../../assets/images/Vojvodina/SevernoBackiOkrug/PalićkoJezero/mobile/MPalićzoo.jpg";
import palicko55 from "../../../../../assets/images/Vojvodina/SevernoBackiOkrug/PalićkoJezero/mobile/MPalić3.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { servernoBackiPathRoutes } from "./SevernoBackiPathRoutes";

export const PalićkoJezero = () => {
  const navigate = useNavigate();

  return (
    <div className="placeBackground">
      <ScrollToTop />
      <FaArrowLeft className="arrowLeft" onClick={() => navigate(servernoBackiPathRoutes.home)} />
      <header></header>
      <img srcSet={`${palicko22} 400w, ${palicko2} `} alt="palicko jezero 5" />
      <h2>Palicko jezero</h2>

      <p>
        Palićko jezero se nalazi u Vojvodini, na 8 kilometara od Subotice,
        jednog od najlepših gradova u Srbiji, pa svi posetioci jezera lako mogu
        da odu i vreme provedu i u ovom gradu. To je najveće prirodno jezero u
        Srbiji. Jezero, prečnika skoro 5km i najveće dubine 3.5 metra, ima tri
        uređene plaže, toplu vodu i prijatan ambijent.
      </p>

      <img  srcSet={`${palicko11} 400w, ${palicko1} `} alt="palicko jezero 1" />

      <p>
        Obala jezera je duga 17 kilometara i uređena je celom svojom dužinom.
        Zbog ovoga, atraktivne su i pešačke ture, ali i pecanje, posmatranje
        ptica, kao i obilazak parka prirode oko samog jezera.
      </p>

      <img  srcSet={`${palicko55} 400w, ${palicko5} `} alt="palicko jezero 2" />

      <p>
        Kada se ovome dodaju i novoizgrađeni hoteli, restorani, manje vile
        različitih smeštajnih kapaciteta, kao i poslovično dobar noćni život,
        Palićko jezero postaje mesto koje ne smete propustiti, koliko god godina
        da imate i kakva god da su vam interesovanja!
      </p>

      <img  srcSet={`${palicko33} 400w, ${palicko3} `} alt="palicko jezero 3" />

      <p>
        U letnjim mesecima, na Paliću se održava i Festival evropskog filma, pa
        ovo mesto postaje stecište mnogih, pre svega, regionalnih filmskih
        stvaralaca, glumaca i kritičara. Zaljubljenici u “sedmu umetnost” ovde
        mogu uživati u prijatnom ambijentu gledajući najnovija filmska
        ostvarenja, a jedna od glavnih specifičnosti festivala je i činjenica da
        je jedan od retkih manifestacija ovog tipa sa 100 odsto evropskim
        sadržajem.
      </p>

      <img
         srcSet={`${palicko44} 400w, ${palicko4} `}
        alt="palicko jezero 4"
      />
      <p>
        U neposrednoj blizini jezera se nalazi i atraktivni ZOO vrt u kome
        većina životinja nije smeštena u kaveze već slobodno šeta ograđenim
        delovima parka što ovo mesto čini veoma zanimljivim, pre svega za
        najmlađe, ali i za sve ljubitelje životinja. Čak iako ne odete u zoo,
        biljni i životinjski svet oko jezera će vas očarati i ostaviti bez daha.
      </p>
    </div>
  );
};
