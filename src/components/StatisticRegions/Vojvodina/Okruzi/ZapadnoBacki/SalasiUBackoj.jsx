import salasi1 from "../../../../../assets/images/Vojvodina/ZapadnoBackiOkrug/SalasiUBackoj/desktop/Salasi1.jpg";
import salasi4 from "../../../../../assets/images/Vojvodina/ZapadnoBackiOkrug/SalasiUBackoj/desktop/Salasi4.jpg";
import salasi2 from "../../../../../assets/images/Vojvodina/ZapadnoBackiOkrug/SalasiUBackoj/desktop/Salasi2.jpg";
import salasi3 from "../../../../../assets/images/Vojvodina/ZapadnoBackiOkrug/SalasiUBackoj/desktop/Salasi3.jpg";
import salasi11 from "../../../../../assets/images/Vojvodina/ZapadnoBackiOkrug/SalasiUBackoj/mobile/MSalasi1.jpg";
import salasi44 from "../../../../../assets/images/Vojvodina/ZapadnoBackiOkrug/SalasiUBackoj/mobile/MSalasi4.jpg";
import salasi22 from "../../../../../assets/images/Vojvodina/ZapadnoBackiOkrug/SalasiUBackoj/mobile/MSalasi2.jpg";
import salasi33 from "../../../../../assets/images/Vojvodina/ZapadnoBackiOkrug/SalasiUBackoj/mobile/MSalasi3.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { zapadnoBackiPathRoutes } from "./ZapadnoBackiPathRoutes";

export const SalasiUBackoj = () => {
  const navigate = useNavigate();

  return (
    <div className="placeBackground">
      <ScrollToTop/>
      <FaArrowLeft className="arrowLeft" onClick={() => navigate(zapadnoBackiPathRoutes.home)} />
      <header></header>
      <img srcSet={`${salasi33} 400w, ${salasi3} `} alt="Salaši u Bačkoj 1" />
        <h2>Salaši u Bačkoj</h2>


      <p>
        Salaši u Bačkoj su tradicionalna seoska imanja, karakteristična za ovu
        vojvođansku regiju. Ovi salaši su uglavnom porodična domaćinstva koja su
        se bavila poljoprivredom, stočarstvom i proizvodnjom hrane, ali su tokom
        vremena postali i značajna turistička destinacija, koja pruža uvid u
        tradiciju, kulturu i način života ovog kraja.
      </p>

      <img srcSet={`${salasi11} 400w, ${salasi1} `} alt="Salaši u Bačkoj 2" />

      <p>
        Salaši su specifični zbog svoje arhitekture, koja obuhvata porodične
        kuće, pomoćne objekte i štale. Mnogi salaši su očuvali svoju originalnu
        gradnju, ali su adaptirani za turističke svrhe, pa posetioci mogu
        uživati u autentičnom ambijentu, domaćoj hrani, vinima, kao i raznim
        manifestacijama i događanjima.
      </p>

      <img srcSet={`${salasi44} 400w, ${salasi4} `} alt="Salaši u Bačkoj 3" />

      <p>
        U Bačkoj je mnogo salaša koji se bave stočarstvom, a popularne su i
        voćnjake i vinogradi. Salaši su često smešteni u idiličnom okruženju,
        okruženi poljima, rekama i šumama, što ih čini popularnim mestima za
        seoski turizam, biciklističke ture, jahanje i druge aktivnosti u
        prirodi.
      </p>

      <img srcSet={`${salasi22} 400w, ${salasi2} `} alt="Salaši u Bačkoj 4" />

      <p>
        Bačka je poznata po specifičnom etnološkom nasleđu, a salaši su jedan od
        najslikovitijih segmenata tog kulturnog nasleđa. Na salašima se često
        održavaju tradicionalni festivali i manifestacije, kao što su jela sa
        roštilja, žetve i berbe, što privlači posetioce i turiste željne
        autentičnog iskustva.
      </p>
    </div>
  );
};
