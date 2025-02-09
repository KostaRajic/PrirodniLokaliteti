import ade1 from "../../../../../assets/images/Vojvodina/ZapadnoBackiOkrug/DunavskeAde/ade1.jpg";
import ade2 from "../../../../../assets/images/Vojvodina/ZapadnoBackiOkrug/DunavskeAde/ade2.jpg";
import ade3 from "../../../../../assets/images/Vojvodina/ZapadnoBackiOkrug/DunavskeAde/ade3.jpg";
import ade4 from "../../../../../assets/images/Vojvodina/ZapadnoBackiOkrug/DunavskeAde/ade4.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";

export const DunavskeAde = () => {
  const navigate = useNavigate();

  return (
    <div className="placeBackground">
      <ScrollToTop />
      <FaArrowLeft className="arrowLeft" onClick={() => navigate(-1)} />
      <header></header>
      <img src={ade4} alt="Dunavseke Ade 4" />
      <h2>Dunavseke Ade</h2>

      <p>
        Dunavske Ade u zapadnoj Bačkoj predstavljaju specifičan ekosistem koji
        se formirao u delti Dunava i njegovim pritokama, a karakterišu ih ostrva
        i rukavci reke. Ova područja su bogata prirodnim lepotama, raznovrsnim
        biljnim i životinjskim svetom, a mnoge ade su deo zaštićenih područja i
        prirodnih rezervata.
      </p>

      <img src={ade2} alt="Dunavseke Ade 2" />

      <p style={{ marginTop: "-10px" }}>
        Dunavske Ade su ključna staništa za ptice, posebno za migratorne vrste
        koje se zaustavljaju na ovom području tokom migracija. Zbog svoje
        specifične flore i faune, ovo područje je popularno među ljubiteljima
        prirode i posetiocima koji se bave pticama (birdwatching). Takođe, ade
        su i odlična destinacija za ljubitelje ribolova, jer Dunav nudi
        bogatstvo riba.
      </p>

      <img src={ade1} alt="Dunavseke Ade 1" />

      <p style={{ marginTop: "-10px" }}>
        Na zapadu Bačke, oblasti kao što su Ada Kopački rit i Ada Bajina,
        smanjuju šuplje rečne tokove i stvaraju brojne kanalčiće i močvarne
        površine, što doprinosi njihovoj biološkoj raznovrsnosti. Mnogi od tih
        otoka postali su popularni za rekreaciju, turizam i odmor, te su
        prepoznati kao mesta sa bogatom istorijom i tradicijom.
      </p>

      <img src={ade3} alt="Dunavseke Ade 3" />

      <p style={{ marginTop: "-10px" }}>
        Iako su Dunavske Ade u zapadnoj Bačkoj često nenaseljene, njihov značaj
        za ekologiju i turizam je veliki. One predstavljaju važno područje za
        očuvanje prirodnih resursa i pružaju miran ambijent za one koji žele da
        pobegnu od gradske vreve i uživaju u divljoj prirodi.
      </p>
    </div>
  );
};
