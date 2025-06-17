import pec1 from '../../../../../assets/images/KosovoIMetohija/Pecki/Pec/desktop/pec1.jpg'
import pec2 from '../../../../../assets/images/KosovoIMetohija/Pecki/Pec/desktop/pec2.jpg'
import pec3 from '../../../../../assets/images/KosovoIMetohija/Pecki/Pec/desktop/pec3.jpg'
import pec4 from '../../../../../assets/images/KosovoIMetohija/Pecki/Pec/desktop/pec4.jpg'
import pec11 from '../../../../../assets/images/KosovoIMetohija/Pecki/Pec/mobile/Mpec1.jpg'
import pec22 from '../../../../../assets/images/KosovoIMetohija/Pecki/Pec/mobile/Mpec2.jpg'
import pec33 from '../../../../../assets/images/KosovoIMetohija/Pecki/Pec/mobile/Mpec3.jpg'
import pec44 from '../../../../../assets/images/KosovoIMetohija/Pecki/Pec/mobile/Mpec4.jpg'


import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { peckiOkrugPathRoutes } from './PeckiOkrugPathRoutes';

export const Pec = () => {
  const navigate = useNavigate();

  return (
    <div className="placeBackground">
      <ScrollToTop />
      <FaArrowLeft className="arrowLeft" onClick={() => navigate(peckiOkrugPathRoutes.home)} />
      <header></header>
      <img srcSet={`${pec22} 400w, ${pec2} `} alt="Peć 1" />

      <h2>Peć</h2>

      <p style={{ paddingTop: "50px" }}>
        Pretpostavlja se da su grad osnovala drevna ilirska plemena, a nalazi se
        na strateškom položaju uz reku Bistricu, pritoku Belog Drima, istočno
        od Prokletija.
      </p>

      <img srcSet={`${pec11} 400w, ${pec1} `} alt="Peć 2" />

      <p>
        Grad je postao značajno vjersko središte srednjovjekovne Srbije pod
        vladavinom cara Stefana Dušana, koji ga je 1346. godine proglasio
        sedištem Srpske pravoslavne crkve. Ovaj status zadržao je sve do 1766.
        godine, kada je ukinuta Pećka patrijaršija. Grad i okolna područja i
        dalje imaju veliki značaj za pravoslavne Srbe; u njemu se nalazi
        patrijaršijski manastir sa četiri crkve ukrašene freskama, kao i
        biblioteka i riznica. Nedaleko, u Dečanima, nalazi se manastir Visoki
        Dečani iz 14. veka, koji je od strane UNESCO-a upisan na listu svetske
        baštine.
      </p>

      <img srcSet={`${pec33} 400w, ${pec3} `} alt="Peć 3" />

      <p>
        Grad je krajem 14. veka osvojio Otomanski imperij, što je dovelo do
        značajnih promena, uključujući promenu imena u Ipek. U grad se doselio
        veliki broj Turaka, čiji potomci i danas žive u tom području, a njihov
        uticaj je oblikovao lokalnu arhitekturu i ulice, dajući im specifičan
        orijentalni izgled. Islam je postao dominantna vera, a tokom ovog
        perioda sagrađen je veliki broj džamija, od kojih su mnoge sačuvane do
        danas. Jedna od najpoznatijih je Bajrakli džamija iz 15. veka, koja se
        nalazi u centru grada. Tokom otomanskog perioda, Peć je bio sedište
        Pećke patrijaršije.
        <br />
        <br />
        Krajem 19. veka, prema različitim izveštajima, u Peći su vladali
        bezakonje i nasilje muslimana nad hrišćanima. Korupcija je bila
        rasprostranjena i unutar pravoslavne crkve, o čemu svedoči dopis o
        trgovini ženama, koju je vodio protojerej pećki.
      </p>

      <img srcSet={`${pec44} 400w, ${pec4} `} alt="Peć 4" />

      <p>
        Otomanska vlast u Peći završena je tokom Prvog balkanskog rata, kada su
        grad zauzele crnogorske snage, nakon čega je Peć na kratko postao deo
        Crne Gore. Nakon završetka Prvog svetskog rata 1918. godine, grad je
        ušao u sastav novonastale Kraljevine SHS. U 20. veku, pod srpskom, a
        potom i jugoslovenskom vlašću, odnosi između većinskog albanskog i
        manjinskog srpskog stanovništva postajali su sve napetiji.
      </p>
    </div>
  );
};
