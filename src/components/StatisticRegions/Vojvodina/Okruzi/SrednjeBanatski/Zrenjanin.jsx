import zrenjanin1 from "../../../../../assets/images/Vojvodina/SrednjeBanatskiOkrug/Zrenjanin/desktop/zrenjanin4.jpg";
import zrenjanin2 from "../../../../../assets/images/Vojvodina/SrednjeBanatskiOkrug/Zrenjanin/desktop/zrenjanin2.jpg";
import zrenjanin3 from "../../../../../assets/images/Vojvodina/SrednjeBanatskiOkrug/Zrenjanin/desktop/zrenjanin3.jpg";
import zrenjanin4 from "../../../../../assets/images/Vojvodina/SrednjeBanatskiOkrug/Zrenjanin/desktop/zrenjanin5.jpg";
import zrenjanin5 from "../../../../../assets/images/Vojvodina/SrednjeBanatskiOkrug/Zrenjanin/desktop/zrenjanin6.jpg";
import zrenjanin6 from "../../../../../assets/images/Vojvodina/SrednjeBanatskiOkrug/Zrenjanin/desktop/zrenjanin7.jpg";
import zrenjanin11 from "../../../../../assets/images/Vojvodina/SrednjeBanatskiOkrug/Zrenjanin/mobile/Mzrenjanin4.jpg";
import zrenjanin22 from "../../../../../assets/images/Vojvodina/SrednjeBanatskiOkrug/Zrenjanin/mobile/Mzrenjanin2.jpg";
import zrenjanin33 from "../../../../../assets/images/Vojvodina/SrednjeBanatskiOkrug/Zrenjanin/mobile/Mzrenjanin3.jpg";
import zrenjanin44 from "../../../../../assets/images/Vojvodina/SrednjeBanatskiOkrug/Zrenjanin/mobile/Mzrenjanin5.jpg";
import zrenjanin55 from "../../../../../assets/images/Vojvodina/SrednjeBanatskiOkrug/Zrenjanin/mobile/Mzrenjanin6.jpg";
import zrenjanin66 from "../../../../../assets/images/Vojvodina/SrednjeBanatskiOkrug/Zrenjanin/mobile/Mzrenjanin7.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { srednjeBanatskiPathRoutes } from "./SrednjeBanatskiPathRoutes";

export const Zrenjanin = () => {
  const navigate = useNavigate();

  return (
    <div className="placeBackground">
      <ScrollToTop/>
      <FaArrowLeft className="arrowLeft" onClick={() => navigate(srednjeBanatskiPathRoutes.home)} />
      <header></header>
      <img srcSet={`${zrenjanin11} 400w, ${zrenjanin1} `} alt="Zrenjanin 1" />

      <h2>Zrenjanin</h2>

      <p>
        Zrenjanin, poznat je i kao grad na Begeju, grad mostova, grad sporta,
        kao multinacionalna i multikonfesionalna sredina, zanimljive
        arhitekture, grad živopisnog okruženja, sa četiri reke i kanalskom
        mrežom DTD, posećenih turističkih manifestacija... Posetite nas i
        uverite se!
      </p>

      <img srcSet={`${zrenjanin22} 400w, ${zrenjanin2} `} alt="Katedrala Sv. Ivana Nepomuka" />

      <p>
        Katedrala Sv. Ivana Nepomuka u Zrenjaninu je jedna od najznačajnijih
        religioznih i arhitektonskih građevina u gradu. Smeštena je u centru
        Zrenjanina, na glavnom trgu, i predstavlja dominirajući spomenik.
        Katedrala je izgrađena u neogotičkom stilu, sa visokim tornjem koji se
        uzdiže nad gradom, a njena konstrukcija započela je 1903. godine i
        završena 1909. godine. Posvećena je sv. Ivanu Nepomuku, češkom
        svetitelju i mučeniku, koji je zaštitnik Beograda i jedan od
        najpoznatijih svetitelja u katoličkoj crkvi. Unutrašnjost katedrale je
        uređena s prelepim vitražima i skulpturama koje dodaju na
        veličanstvenosti ovog hrama. Katedrala je važan deo istorije i duhovnog
        života Zrenjanina, kao i simbol verske tolerancije, budući da je grad
        multinacionalan.
      </p>

      <img srcSet={`${zrenjanin33} 400w, ${zrenjanin3} `} alt="Narodni muzej Zrenjanin" />

      <p>
        Narodni muzej Zrenjanin otvorio je svoja vrata za posetioce davne 1911.
        godine. Zavičajnog tipa i kompleksnog karaktera, Muzej čuva bogato
        kulturno nasleđe Banata iz oblasti prirode, arheologije, etnologije,
        umetnosti i istorije. Najreprezentativniji predmeti nalaze se na stalnoj
        postavci, a Muzej raspolaže i sa tri izložbena prostora u prizemlju
        zgrade gde se smenjuju tematske izložbe i odigravaju prateći programi.
      </p>

      <img srcSet={`${zrenjanin44} 400w, ${zrenjanin4} `} alt="Županijski park" />
      <p>
        Županijski park, poznat i kao Gradska bašta, jedan je od najlepših
        parkova u Zrenjaninu. Smešten je u centru grada i predstavlja oazu
        zelenila i mira. Park je osnovan u 19. veku, a njegovo uređenje obuhvata
        širok spektar biljnih vrsta, uključujući drveće, cvetne aranžmane i
        bašte. U Županijskom parku nalazi se i veoma lep paviljon, kao i
        nekoliko statua i drugih dekorativnih elemenata koji dodaju na lepoti
        ovog prostora. Park je popularno mesto za šetnje i opuštanje, ali i za
        različite kulturne i društvene događaje. Zahvaljujući svojoj lokaciji i
        značaju, Županijski park je jedan od simbola Zrenjanina i važan deo
        njegovog gradskog života.
      </p>

      <img
        srcSet={`${zrenjanin55} 400w, ${zrenjanin5} `}
        alt="Zrenjanin 5"
      />
      <p>
        Zrenjanin je često nazivana "grad mostova" zbog velikog broja mostova
        koji prelaze reke i kanale u gradu i okolini, što mu daje poseban
        karakter i lepotu. Mostovi su ne samo funkcionalni elementi, već i važan
        deo gradske istorije i arhitekture, čineći Zrenjanin prepoznatljivim.
        Izraz "Mala Amerika" se ponekad koristi kao simbol Zrenjanina zbog
        njegove industrijske prošlosti i razvoja koji je podsećao na američke
        gradove iz 19. i 20. veka. Ovaj nadimak upućuje na brzi ekonomski
        napredak i urbanizaciju, koji su oblikovali gradski život i atmosferu
        Zrenjanina.
      </p>

      <img
        srcSet={`${zrenjanin66} 400w, ${zrenjanin6} `}
        alt="Zrenjanin 6"
      />
      <p>
        Carska bara je jedno od najznačajnijih prirodnih dobara u Zrenjaninu i
        okolini, a takođe i jedno od najvećih močvarnih područja u Srbiji.
        Nalazi se na jugoistočnom delu grada i predstavlja jedan od
        najznačajnijih prirodnih rezervoara biodiverziteta u ovom delu Evrope.
        Ovo zaštićeno područje je dom velikog broja biljnih i životinjskih
        vrsta, među kojima su mnoge vrste ptica, kao što su patke, labudovi i
        razne vodene ptice, što ga čini popularnim mestom za ornitologe i
        ljubitelje prirode. Pored ornitološke vrednosti, ova bara ima i značajnu
        ulogu u zaštiti voda i regulisanju mikro-klime regiona. Carska bara je
        takođe popularno mesto za rekreaciju, šetnje i posmatranje prirode, a
        njene lepote privlače brojne posetioce koji žele da uživaju u tišini i
        mirnom okruženju.
      </p>
    </div>
  );
};
