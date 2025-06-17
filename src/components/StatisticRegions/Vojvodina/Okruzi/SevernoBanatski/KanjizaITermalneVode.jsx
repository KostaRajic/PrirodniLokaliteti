import kanjiza1 from "../../../../../assets/images/Vojvodina/SevernoBanatskiOkrug/KanjizaITerminalneVode/desktop/Kanjiza1.jpg";
import kanjiza2 from "../../../../../assets/images/Vojvodina/SevernoBanatskiOkrug/KanjizaITerminalneVode/desktop/Kanjiza3.jpg";
import kanjiza3 from "../../../../../assets/images/Vojvodina/SevernoBanatskiOkrug/KanjizaITerminalneVode/desktop/Kanjiza4.jpg";
import kanjiza4 from "../../../../../assets/images/Vojvodina/SevernoBanatskiOkrug/KanjizaITerminalneVode/desktop/Kanjiza5.jpg";
import kanjiza5 from "../../../../../assets/images/Vojvodina/SevernoBanatskiOkrug/KanjizaITerminalneVode/desktop/Kanjiza6.jpg";
import kanjiza11 from "../../../../../assets/images/Vojvodina/SevernoBanatskiOkrug/KanjizaITerminalneVode/mobile/MKanjiza1.jpg";
import kanjiza22 from "../../../../../assets/images/Vojvodina/SevernoBanatskiOkrug/KanjizaITerminalneVode/mobile/MKanjiza3.jpg";
import kanjiza33 from "../../../../../assets/images/Vojvodina/SevernoBanatskiOkrug/KanjizaITerminalneVode/mobile/MKanjiza4.jpg";
import kanjiza44 from "../../../../../assets/images/Vojvodina/SevernoBanatskiOkrug/KanjizaITerminalneVode/mobile/MKanjiza5.jpg";
import kanjiza55 from "../../../../../assets/images/Vojvodina/SevernoBanatskiOkrug/KanjizaITerminalneVode/mobile/MKanjiza6.jpg";


import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { severnoBanatskiPathRoutes } from "./SevernoBanatskiPathRoutes";

export const Kanjiza = () => {
  const navigate = useNavigate();

  return (
    <div className="placeBackground">
      <ScrollToTop/>
      <FaArrowLeft className="arrowLeft" onClick={() => navigate(severnoBanatskiPathRoutes.home)} />
      <header></header>
      <img srcSet={`${kanjiza22} 400w, ${kanjiza2} `} alt="Kanjiza 1" />

      <h2>
        Kanjiža i Terminalne vode
      </h2>

      <p>
        Opština Kanjiža se nalazi na severnom delu Srbije, na granici sa
        Mađarskom. Pokriva površinu od 400 km² na kojoj živi 24.995 stanovnika u
        13 naseljenih mesta (Adorjan, Velebit, Doline, Zimonjić, Kanjiža, Male
        Pijace, Mali Pesak, Martonoš, Novo Selo, Orom, Totovo Selo, Trešnjevac,
        Horgoš).
      </p>

      <img srcSet={`${kanjiza33} 400w, ${kanjiza3} `} alt="Kanjiza 2" />

      <p>
        Grad Kanjiža kao centar opštine se više ističe kao središte regionalnog
        značaja, čemu doprinose blizina reke Tise i graničnog prelaza Horgoš.
      </p>

      <img srcSet={`${kanjiza44} 400w, ${kanjiza4} `} alt="Kanjiza 3" />

      <p>
        Upućenost na reku znači mnogo za slikovitost pejzaža, plovidbu, sportski
        ribolov, turizam i druge delatnosti. Bogato zemljište, gline, nafta,
        zemni gas i termalne vode su prirodna blaga na kojima se zasnivaju
        dominantne privredne grane u opštini: poljoprivreda sa proizvodnjom
        hrane, industrija građevinskog materijala, rehabilitacioni i rekreacioni
        turizam.
      </p>

      <img srcSet={`${kanjiza11} 400w, ${kanjiza1} `} alt="Kanjiza 4" />
      <p>
        Festival Vetrenjača u Oromu je jedinstveni događaj koji slavi tradiciju
        i kulturno nasleđe ovog kraja. Tokom festivala, posetioci mogu uživati u
        različitim manifestacijama, koncertima i radionicama, dok se posebno
        ističu izložbe i prikazi starih vetrenjača, koje su deo lokalne
        tradicije. Ovaj festival okuplja ljubitelje folklora, umetnosti i
        istorije, pružajući uvid u bogatu kulturnu baštinu Oroma i okolnih
        naselja.
      </p>

      <img srcSet={`${kanjiza55} 400w, ${kanjiza5} `} alt="Kanjiza 4" />
      <p>
        Kajakaška regata u Kanjiži je popularna manifestacija koja okuplja
        ljubitelje kajakarenja i avanturističkog turizma. Takmičari i
        rekreativci plove rekama i kanalima, uživajući u prirodnim lepotama ovog
        regiona. Regata je prilika da se promovišu sportske aktivnosti, ali i da
        se skrene pažnja na značaj očuvanja prirodnih resursa.
      </p>
    </div>
  );
};
