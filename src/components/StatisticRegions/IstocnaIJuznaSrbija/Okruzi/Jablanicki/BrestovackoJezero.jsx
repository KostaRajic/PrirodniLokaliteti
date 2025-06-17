import brestovackoJezero1 from "../../../../../assets/images/JuznaIIstocnaSrbija/JablanickiOkrug/BrestovackoJezero/desktop/brestovackoJezero1.jpg";
import brestovackoJezero2 from "../../../../../assets/images/JuznaIIstocnaSrbija/JablanickiOkrug/BrestovackoJezero/desktop/brestovackoJezero2.jpg";
import brestovackoJezero3 from "../../../../../assets/images/JuznaIIstocnaSrbija/JablanickiOkrug/BrestovackoJezero/desktop/brestovackoJezero3.jpg";
import brestovackoJezero4 from "../../../../../assets/images/JuznaIIstocnaSrbija/JablanickiOkrug/BrestovackoJezero/desktop/brestovackoJezero4.jpg";
import brestovackoJezero11 from "../../../../../assets/images/JuznaIIstocnaSrbija/JablanickiOkrug/BrestovackoJezero/mobile/brestovackoJezeroM1.jpg";
import brestovackoJezero22 from "../../../../../assets/images/JuznaIIstocnaSrbija/JablanickiOkrug/BrestovackoJezero/mobile/brestovackoJezeroM2.jpg";
import brestovackoJezero33 from "../../../../../assets/images/JuznaIIstocnaSrbija/JablanickiOkrug/BrestovackoJezero/mobile/brestovackoJezeroM3.jpg";
import brestovackoJezero44 from "../../../../../assets/images/JuznaIIstocnaSrbija/JablanickiOkrug/BrestovackoJezero/mobile/brestovackoJezeroM4.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { jablanickiOkrugPathRoutes } from "./JablanickiOkrugPathRoutes";

export const BrestovackoJezero = () => {
  const navigate = useNavigate();

  return (
    <div className="placeBackground">
      <ScrollToTop />
      <FaArrowLeft
        className="arrowLeft"
        onClick={() => navigate(jablanickiOkrugPathRoutes.home)}

      />
      <header></header>
      <img srcSet={`${brestovackoJezero11} 400w, ${brestovackoJezero1} `} alt="Brestovačko jezero 1" />

      <h2>Brestovačko jezero</h2>

      <p style={{ paddingTop: "50px" }}>
        Brestovačko, Bojničko, Bubličko i Magaško jezero predstavljaju različite
        nazive za veštačku akumulaciju koja se nalazi u selu Brestovac,
        otprilike 10 kilometara zapadno od Bojnika. Jezero je smešteno u
        podnožju planine Radan na visini od 400 metara nadmorske visine.
        Napravljeno je krajem 1970-ih godina pregrađivanjem Puste reke u njenom
        gornjem toku. Koristi se za snabdevanje vodom naselja Lebane i Bojnik.
      </p>

      <img srcSet={`${brestovackoJezero22} 400w, ${brestovackoJezero2} `} alt="Brestovačko jezero 2" />

      <p>
        Brestovačko jezero prostire se na dužini od 2,8 kilometara i širini od
        500 metara. Najveća dubina jezera je 28 metara, dok prosečna dubina
        iznosi 12 metara. Površina jezera je oko 75 hektara. Obalu jezera čine
        brojna poluostrva, jedan rt (istureni deo kopna) i dva zaliva. Voda u
        jezeru dolazi iz Puste reke, koja izvire na planini Radan.
      </p>

      <img srcSet={`${brestovackoJezero33} 400w, ${brestovackoJezero3} `} alt="Brestovačko jezero 3" />

      <p>
        Brestovačko jezero je bogato različitim vrstama riba, među kojima se
        nalaze som, šaran, klen, amur, štuka, babuška, bodorka, belica i
        deverika. Ova akumulacija privlači brojne ribolovce tokom cele godine.
        Tokom letnjih meseci, jezero postaje popularno odredište za kupače, jer
        su dani topli, što ga čini savršenim mestom za uživanje u kupanju. Na
        obali je uređen parking, kao i sportski tereni. Takođe, na plaži je
        dozvoljeno kampovanje.
      </p>

      <img srcSet={`${brestovackoJezero44} 400w, ${brestovackoJezero4} `} alt="Brestovačko jezero 4" />

      <p>
        Brestovačko jezero je pristupačno iz dva pravca. Ako dolazite iz Niša,
        put vas vodi preko Doljevca i Žitorađe, a do jezera se dolazi skretanjem
        sa autoputa kod naselja Brestovac, pre nego što se stigne do Leskovca. S
        druge strane, ako dolazite iz pravca Prokuplja, potrebno je preći prevor
        Beli kamen.
      </p>
    </div>
  );
};
