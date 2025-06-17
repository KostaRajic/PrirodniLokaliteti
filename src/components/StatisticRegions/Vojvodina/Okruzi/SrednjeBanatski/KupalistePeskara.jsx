import peskara1 from "../../../../../assets/images/Vojvodina/SrednjeBanatskiOkrug/KupalistePeskara/desktop/peskara2.jpg";
import peskara2 from "../../../../../assets/images/Vojvodina/SrednjeBanatskiOkrug/KupalistePeskara/desktop/peskara3.jpg";
import peskara3 from "../../../../../assets/images/Vojvodina/SrednjeBanatskiOkrug/KupalistePeskara/desktop/peskara4.jpg";
import peskara4 from "../../../../../assets/images/Vojvodina/SrednjeBanatskiOkrug/KupalistePeskara/desktop/peskara5.jpg";
import peskara5 from "../../../../../assets/images/Vojvodina/SrednjeBanatskiOkrug/KupalistePeskara/desktop/peskara6.jpg";
import peskara11 from "../../../../../assets/images/Vojvodina/SrednjeBanatskiOkrug/KupalistePeskara/mobile/Mpeskara2.jpg";
import peskara22 from "../../../../../assets/images/Vojvodina/SrednjeBanatskiOkrug/KupalistePeskara/mobile/Mpeskara3.jpg";
import peskara33 from "../../../../../assets/images/Vojvodina/SrednjeBanatskiOkrug/KupalistePeskara/mobile/Mpeskara4.jpg";
import peskara44 from "../../../../../assets/images/Vojvodina/SrednjeBanatskiOkrug/KupalistePeskara/mobile/Mpeskara5.jpg";
import peskara55 from "../../../../../assets/images/Vojvodina/SrednjeBanatskiOkrug/KupalistePeskara/mobile/Mpeskara6.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { srednjeBanatskiPathRoutes } from "./SrednjeBanatskiPathRoutes";

export const KupalistePeskara = () => {
  const navigate = useNavigate();

  return (
    <div className="placeBackground">
      <ScrollToTop/>
      <FaArrowLeft className="arrowLeft" onClick={() => navigate(srednjeBanatskiPathRoutes.home)} style={{fill: 'white'}} />
      <header></header>
      <img srcSet={`${peskara55} 400w, ${peskara5} `} alt="Kupalište peskara 1" />

      <h2>Kupalište peskara</h2>

      <p>
        Kupalište je smešteno uz obalu Peskarske bare, odnosno, to je veće
        vodenoečnog područja koje se koristi za letnji odmor. Voda u ovom
        području je obično čista, a obala je uređena za prijatan boravak
        posetilaca. Plaža je uglavnom peskovita, odakle potiče i naziv
        "Peskara", a pruža dovoljno prostora za uživanje u sunčanju i kupanju.
      </p>

      <img srcSet={`${peskara22} 400w, ${peskara2} `} alt="Kupalište peskara 2" />

      <p>
        Kupalište je dobro opremljeno sa potrebnim sadržajima, uključujući
        ležaljke, tuševe, kafiće i restorane, kao i prodavnice sa potrebštinama
        za turiste. Na obali se nalaze i sportski tereni za različite aktivnosti
        poput odbojke na pesku, košarke, ili fudbala, što pruža mogućnosti za
        aktivno uživanje u prirodi.
      </p>

      <img srcSet={`${peskara33} 400w, ${peskara3} `} alt="Kupalište peskara 3" />

      <p>
        Pored kupanja, posetioci mogu uživati u različitim rekreativnim
        aktivnostima poput vožnje čamcem ili kajakom po jezeru, biciklističkim i
        pešačkim turama, ili pak opuštanju u prirodi. Peskara je popularno i
        lako dostupno odredište, što je čini pogodnom za dnevne izlete. Zbog
        svoje blizine Zrenjaninu i drugim većim gradovima Vojvodine, često je
        odredište za letnje vikende, ali i za dnevne odmore.
      </p>
        <img
          srcSet={`${peskara44} 400w, ${peskara4} `}
          alt="Kupalište peskara 4"
        />

        <p>
          Kupalište Peskara ima veliki značaj za lokalnu zajednicu jer privlači
          posetioce, podstičući razvoj turizma i povezane industrije. Takođe
          doprinosi promociji prirodnih lepotu i sportskih aktivnosti u regionu.
        </p>
      <div>
        <img srcSet={`${peskara11} 400w, ${peskara1} `} alt="Kupalište peskara 4" />

        <p>
          Kupalište Peskara je atraktivno odredište koje pruža posetiocima
          savršen spoj prirode, sporta i rekreacije, idealno za opuštanje i
          uživanje u letnjim mesecima. Zbog svoje blizine Zrenjaninu, lako je
          dostupno i predstavlja popularnu destinaciju za sve one koji žele da
          se opuste u prirodnom okruženju.
        </p>
      </div>
    </div>
  );
};
