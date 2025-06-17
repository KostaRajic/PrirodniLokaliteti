import jelovarnik1 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RasinskiOrkug/VodopadJelovarnik/desktop/jelovarnik1.jpg";
import jelovarnik2 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RasinskiOrkug/VodopadJelovarnik/desktop/jelovarnik2.jpg";
import jelovarnik3 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RasinskiOrkug/VodopadJelovarnik/desktop/jelovarnik3.jpg";
import jelovarnik4 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RasinskiOrkug/VodopadJelovarnik/desktop/jelovarnik4.jpg";
import jelovarnik5 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RasinskiOrkug/VodopadJelovarnik/desktop/jelovarnik5.jpg";
import jelovarnik11 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RasinskiOrkug/VodopadJelovarnik/mobile/Mjelovarnik1.jpg";
import jelovarnik22 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RasinskiOrkug/VodopadJelovarnik/mobile/Mjelovarnik2.jpg";
import jelovarnik33 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RasinskiOrkug/VodopadJelovarnik/mobile/Mjelovarnik3.jpg";
import jelovarnik44 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RasinskiOrkug/VodopadJelovarnik/mobile/Mjelovarnik4.jpg";
import jelovarnik55 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RasinskiOrkug/VodopadJelovarnik/mobile/Mjelovarnik5.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { rasinskiOkrugPathRoutes } from "./RasinskiOkrugPathRoutes";

export const VodopadJelovarnik = () => {
  const navigate = useNavigate();

  return (
    <div className="placeBackground">
      <ScrollToTop />
      <FaArrowLeft
        className="arrowLeft"
        onClick={() => navigate(rasinskiOkrugPathRoutes.home)}
        style={{ fill: "white" }}
      />
      <header></header>
      <img srcSet={`${jelovarnik11} 400w, ${jelovarnik1} `} alt="Vodopad Jelovarnik 1" />

      <h2 style={{ color: "white" }}>Vodopad Jelovarnik</h2>

      <p style={{ paddingTop: "50px" }}>
        Jelovarnik je očaravajući vodopad smešten na planini Kopaonik u Srbiji.
        Sa visinom od oko 71 metar, jedan je od najviših vodopada u zemlji i
        predstavlja spektakularan prizor koji oduzima dah svim posetiocima.
        Smesten je na istočnom delu planine, nedaleko od popularnog turističkog
        naselja Brzeće. Da biste došli do vodopada, potrebno je da prođete kroz
        šumu i pratite nekoliko staza koje vode do samog vodopada. Okružen
        bogatom vegetacijom, Jelovarnik je ujedno i dom raznovrsnih biljnih
        vrsta, uključujući borove i hrastove šume, što doprinosi njegovom
        posebnom šarmu.
      </p>

      <img srcSet={`${jelovarnik22} 400w, ${jelovarnik2} `} alt="Vodopad Jelovarnik 2" />

      <p>
        Kako se približavate vodopadu, osećate snagu vode koja se obrušava niz
        stene. Voda stvara impozantan vodeni zid, a magla i sprej koji se šire
        oko vodopada dodatno pojačavaju doživljaj. Ovaj prizor je zaista
        očaravajuć, naročito tokom toplijih meseci kada vodopad postaje još
        moćniji zbog topljenja snega.
      </p>

      <img srcSet={`${jelovarnik33} 400w, ${jelovarnik3} `} alt="Vodopad Jelovarnik 3" />

      <p>
        Jelovarnik privlači ljubitelje prirode, planinare i fotografe koji žele
        da istraže ovaj prirodni biser. Avanturisti mogu da se popnu do vrha
        vodopada i uživaju u zadivljujućem pogledu na okolne planine i doline.
        Mnogi posetioci se zadrže na obližnjim stenama, gde se opuštaju i dive
        se netaknutoj lepoti prirode.
      </p>

      <img srcSet={`${jelovarnik44} 400w, ${jelovarnik4} `} alt="Vodopad Jelovarnik 4" />

      <p>
        Pored samog vodopada, okolna područja Jelovarnika nude mnoge druge
        prirodne lepote. Planinarske staze vode do drugih očaravajućih lokacija,
        a posetioci mogu uživati u piknicima i kampovanju, okruženi netaknutom
        prirodom.
      </p>

      <img srcSet={`${jelovarnik55} 400w, ${jelovarnik5} `} alt="Vodopad Jelovarnik 5" />

      <p>
        Obilazak vodopada Jelovarnik na Kopaoniku je iskustvo koje ne treba
        propustiti ako ste u Srbiji. Ovaj zadivljujući prirodni fenomen nudi
        spokoj i očaravajuću lepotu koja ostavlja dubok utisak na svakog
        posetioca.
      </p>
    </div>
  );
};
