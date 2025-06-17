import manastirBodjani1 from "../../../../../assets/images/Vojvodina/ZapadnoBackiOkrug/ManastirBodjani/desktop/ManastirBodjani1.jpg";
import manastirBodjani2 from "../../../../../assets/images/Vojvodina/ZapadnoBackiOkrug/ManastirBodjani/desktop/ManastirBodjani2.jpg";
import manastirBodjani3 from "../../../../../assets/images/Vojvodina/ZapadnoBackiOkrug/ManastirBodjani/desktop/ManastirBodjani3.jpg";
import manastirBodjani4 from "../../../../../assets/images/Vojvodina/ZapadnoBackiOkrug/ManastirBodjani/desktop/ManastirBodjani4.jpg";
import manastirBodjani11 from "../../../../../assets/images/Vojvodina/ZapadnoBackiOkrug/ManastirBodjani/mobile/MManastirBodjani1.jpg";
import manastirBodjani22 from "../../../../../assets/images/Vojvodina/ZapadnoBackiOkrug/ManastirBodjani/mobile/MManastirBodjani2.jpg";
import manastirBodjani33 from "../../../../../assets/images/Vojvodina/ZapadnoBackiOkrug/ManastirBodjani/mobile/MManastirBodjani3.jpg";
import manastirBodjani44 from "../../../../../assets/images/Vojvodina/ZapadnoBackiOkrug/ManastirBodjani/mobile/MManastirBodjani4.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { zapadnoBackiPathRoutes } from "./ZapadnoBackiPathRoutes";

export const ManastirBodjani = () => {
  const navigate = useNavigate();

  return (
    <div className="placeBackground">
      <ScrollToTop/>
      <FaArrowLeft className="arrowLeft" onClick={() => navigate(zapadnoBackiPathRoutes.home)} />
      <header></header>
      <img srcSet={`${manastirBodjani11} 400w, ${manastirBodjani1} `} alt="manastir Bodjani 1" />
        <h2>Manastir Bođani</h2>

      <p>
        Manastir Bođani je srpski pravoslavni manastir koji se nalazi u blizini
        sela Bođani, na severu Srbije, u Vojvodini. Posvećen je Vavedenju
        Presvete Bogorodice i predstavlja jedno od značajnijih verskih i
        kulturnih mesta u ovom regionu.
      </p>

      <img srcSet={`${manastirBodjani33} 400w, ${manastirBodjani3} `} alt="manastir Bodjani 3" />

      <p>
        Udaljen je 15 km zapadno od Bača, u pravcu Dunava. Kompleks čine crkva,
        konaci i prateći ekonomski objekti. Nekoliko puta je razaran i
        obnavljan, a u doba Rakozijeve bune bio je spaljen do temelja. Prvi
        manastir izgradio je trgovac Bogdan iz Dalmacije 1478. godine.
      </p>

      <img srcSet={`${manastirBodjani22} 400w, ${manastirBodjani2} `} alt="manastir Bodjani 2" />

      <p>
        Veliki konak i crkva u Bođanima sagrađeni su u baroknom stilu, a živopis
        je slikao poznati zograf toga doba Kristofor Žefarović. U konaku se
        nekada nalazio i bogat, stručno uređen Muzej posvećen upravo ovom
        umetniku, sa mnogim starinskim gravurama, uljanim slikama, crkvenim
        posudama, štamparskom presom i drugim raritetima.
      </p>

      <img srcSet={`${manastirBodjani44} 400w, ${manastirBodjani4} `} alt="manastir Bodjani 4" />

      <p>
        U posedu manastira je i nekoliko hektara zemlje pod šumom i voćnjacima,
        i dvorište sa dosta cveća i drveća. U okviru konaka nalazi se mala
        kapela sa česmom u sećanje na Bogdana, prvog ktitora. Osećaj duhovnosti,
        vere i istorijskog značaja oseti se u svakom kutku ovog manastira, koji
        treba posetiti.
      </p>
    </div>
  );
};
