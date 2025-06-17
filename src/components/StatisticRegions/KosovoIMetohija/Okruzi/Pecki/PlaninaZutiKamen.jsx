import zutiKamen1 from "../../../../../assets/images/KosovoIMetohija/Pecki/ZutiKamen/desktop/zutiKamen1.jpg";
import zutiKamen2 from "../../../../../assets/images/KosovoIMetohija/Pecki/ZutiKamen/desktop/zutiKamen2.jpg";
import zutiKamen3 from "../../../../../assets/images/KosovoIMetohija/Pecki/ZutiKamen/desktop/zutiKamen3.jpg";
import zutiKamen4 from "../../../../../assets/images/KosovoIMetohija/Pecki/ZutiKamen/desktop/zutiKamen4.jpg";
import zutiKamen11 from "../../../../../assets/images/KosovoIMetohija/Pecki/ZutiKamen/mobile/MzutiKamen1.jpg";
import zutiKamen22 from "../../../../../assets/images/KosovoIMetohija/Pecki/ZutiKamen/mobile/MzutiKamen2.jpg";
import zutiKamen33 from "../../../../../assets/images/KosovoIMetohija/Pecki/ZutiKamen/mobile/MzutiKamen3.jpg";
import zutiKamen44 from "../../../../../assets/images/KosovoIMetohija/Pecki/ZutiKamen/mobile/MzutiKamen4.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { peckiOkrugPathRoutes } from "./PeckiOkrugPathRoutes";

export const PlaninaZutiKamen = () => {
  const navigate = useNavigate();

  return (
    <div className="placeBackground">
      <ScrollToTop />
      <FaArrowLeft className="arrowLeft" onClick={() => navigate(peckiOkrugPathRoutes.home)} />
      <header></header>
      <img srcSet={`${zutiKamen22} 400w, ${zutiKamen2} `} alt="Planina Žuti Kamen 1" />

      <h2>Planina Žuti Kamen</h2>

      <p style={{ paddingTop: "50px" }}>
        Planina Žuti Kamen je planina koja se nalazi u jugozapadnom delu Srbije,
        u blizini granice sa Crnom Gorom. Ova planina je deo Prokletija,
        planinskog venca koji se prostire kroz Albaniju, Crnu Goru i Srbiju.
        Žuti Kamen je smešten u južnom delu Srbije, u opštini Peć, te se smatra
        jednim od značajnih planinskih masiva u ovom regionu.
      </p>

      <img srcSet={`${zutiKamen11} 400w, ${zutiKamen1} `} alt="Planina Žuti Kamen 2" />

      <p>
        Planina Žuti Kamen je poznata po svojoj impresivnoj visini i oštrim,
        krševitim padinama. Najviši vrh ove planine je vrh Žuti Kamen, koji se
        uzdiže na visinu od 2.522 metara nadmorske visine. Planina se prostire
        duž južnih padina, a njen reljef karakterišu visoke i strme litice, uske
        doline, kao i brojne vrtače i krška polja. Ovaj region je prepoznatljiv
        po tome što ima izrazito suvu klimu, što stvara specifične ekološke
        uslove.
      </p>

      <img srcSet={`${zutiKamen33} 400w, ${zutiKamen3} `} alt="Planina Žuti Kamen 3" />

      <p>
        Flora planine Žuti Kamen obuhvata raznovrsne biljke, od kojih su mnoge
        endemične vrste koje se mogu naći samo u ovom regionu. U nižim predelima
        raste bor, jela, smrča, kao i bukva, dok se na višim visinama pojavljuju
        travnate površine i planinske livade. Bogatstvo biljnih vrsta čini ovo
        područje interesantnim za biologe i ekologa.
      </p>

      <img srcSet={`${zutiKamen44} 400w, ${zutiKamen4} `} alt="Planina Žuti Kamen 4" />

      <p>
        Žuti Kamen je još uvek relativno netaknuti i nedovoljno istraženi
        turistički region. Međutim, njegova netaknuta priroda, divlji pejzaži i
        visoke planine privlače ljubitelje planinarenja, prirode i
        avanturističkog turizma. U planinskim predelima oko Žutog Kamena moguće
        je pešačiti, planinariti i uživati u tišini prirode.
      </p>
    </div>
  );
};
