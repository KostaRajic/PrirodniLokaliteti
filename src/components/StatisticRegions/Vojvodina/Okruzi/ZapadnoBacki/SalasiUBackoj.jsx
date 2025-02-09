
import salasi1 from "../../../../../assets/images/Vojvodina/ZapadnoBackiOkrug/SalasiUBackoj/Salasi1.jpg";
import salasi4 from "../../../../../assets/images/Vojvodina/ZapadnoBackiOkrug/SalasiUBackoj/Salasi4.jpg";
import salasi2 from "../../../../../assets/images/Vojvodina/ZapadnoBackiOkrug/SalasiUBackoj/Salasi2.jpg";
import salasi3 from "../../../../../assets/images/Vojvodina/ZapadnoBackiOkrug/SalasiUBackoj/Salasi3.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";

export const SalasiUBackoj = () => {
  const navigate = useNavigate();

  return (
    <div className="placeBackground">
      <ScrollToTop/>
      <FaArrowLeft className="arrowLeft" onClick={() => navigate(-1)} />
      <header></header>
      <img src={salasi3} alt="Salaši u Bačkoj 1" />
        <h2>Salaši u Bačkoj</h2>


      <p>
        Salaši u Bačkoj su tradicionalna seoska imanja, karakteristična za ovu
        vojvođansku regiju. Ovi salaši su uglavnom porodična domaćinstva koja su
        se bavila poljoprivredom, stočarstvom i proizvodnjom hrane, ali su tokom
        vremena postali i značajna turistička destinacija, koja pruža uvid u
        tradiciju, kulturu i način života ovog kraja.
      </p>

      <img src={salasi1} alt="Salaši u Bačkoj 2" />

      <p style={{ marginTop: "-10px" }}>
        Salaši su specifični zbog svoje arhitekture, koja obuhvata porodične
        kuće, pomoćne objekte i štale. Mnogi salaši su očuvali svoju originalnu
        gradnju, ali su adaptirani za turističke svrhe, pa posetioci mogu
        uživati u autentičnom ambijentu, domaćoj hrani, vinima, kao i raznim
        manifestacijama i događanjima.
      </p>

      <img src={salasi4} alt="Salaši u Bačkoj 3" />

      <p style={{ marginTop: "-10px" }}>
        U Bačkoj je mnogo salaša koji se bave stočarstvom, a popularne su i
        voćnjake i vinogradi. Salaši su često smešteni u idiličnom okruženju,
        okruženi poljima, rekama i šumama, što ih čini popularnim mestima za
        seoski turizam, biciklističke ture, jahanje i druge aktivnosti u
        prirodi.
      </p>

      <img src={salasi2} alt="Salaši u Bačkoj 4" />

      <p style={{ marginTop: "-10px" }}>
        Bačka je poznata po specifičnom etnološkom nasleđu, a salaši su jedan od
        najslikovitijih segmenata tog kulturnog nasleđa. Na salašima se često
        održavaju tradicionalni festivali i manifestacije, kao što su jela sa
        roštilja, žetve i berbe, što privlači posetioce i turiste željne
        autentičnog iskustva.
      </p>
    </div>
  );
};
