import kanjiza1 from "../../../../../assets/images/Vojvodina/SevernoBanatskiOkrug/KanjizaITerminalneVode/Kanjiza1.jpg";
import kanjiza2 from "../../../../../assets/images/Vojvodina/SevernoBanatskiOkrug/KanjizaITerminalneVode/Kanjiza3.jpg";
import kanjiza3 from "../../../../../assets/images/Vojvodina/SevernoBanatskiOkrug/KanjizaITerminalneVode/Kanjiza4.jpg";
import kanjiza4 from "../../../../../assets/images/Vojvodina/SevernoBanatskiOkrug/KanjizaITerminalneVode/Kanjiza5.jpg";
import kanjiza5 from "../../../../../assets/images/Vojvodina/SevernoBanatskiOkrug/KanjizaITerminalneVode/Kanjiza6.jpg";


import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";

export const Kanjiza = () => {
  const navigate = useNavigate();

  return (
    <div className="placeBackground">
      <ScrollToTop/>
      <FaArrowLeft className="arrowLeft" onClick={() => navigate(-1)} />
      <header></header>
      <img src={kanjiza2} alt="Kanjiza 1" />

      <h2>
        KANJIŽA I TERMALNE VODE
      </h2>

      <p style={{ paddingTop: "50px",marginTop: "-10px"  }}>
        Opština Kanjiža se nalazi na severnom delu Srbije, na granici sa
        Mađarskom. Pokriva površinu od 400 km² na kojoj živi 24.995 stanovnika u
        13 naseljenih mesta (Adorjan, Velebit, Doline, Zimonjić, Kanjiža, Male
        Pijace, Mali Pesak, Martonoš, Novo Selo, Orom, Totovo Selo, Trešnjevac,
        Horgoš).
      </p>

      <img src={kanjiza3} alt="Kanjiza 2" />

      <p style={{ marginTop: "-10px" }}>
        Grad Kanjiža kao centar opštine se više ističe kao središte regionalnog
        značaja, čemu doprinose blizina reke Tise i graničnog prelaza Horgoš.
      </p>

      <img src={kanjiza4} alt="Kanjiza 3" />

      <p style={{ marginTop: "-10px" }}>
        Upućenost na reku znači mnogo za slikovitost pejzaža, plovidbu, sportski
        ribolov, turizam i druge delatnosti. Bogato zemljište, gline, nafta,
        zemni gas i termalne vode su prirodna blaga na kojima se zasnivaju
        dominantne privredne grane u opštini: poljoprivreda sa proizvodnjom
        hrane, industrija građevinskog materijala, rehabilitacioni i rekreacioni
        turizam.
      </p>

      <img src={kanjiza1} alt="Kanjiza 4" />
      <p style={{ marginTop: "-10px" }}>
        Festival Vetrenjača u Oromu je jedinstveni događaj koji slavi tradiciju
        i kulturno nasleđe ovog kraja. Tokom festivala, posetioci mogu uživati u
        različitim manifestacijama, koncertima i radionicama, dok se posebno
        ističu izložbe i prikazi starih vetrenjača, koje su deo lokalne
        tradicije. Ovaj festival okuplja ljubitelje folklora, umetnosti i
        istorije, pružajući uvid u bogatu kulturnu baštinu Oroma i okolnih
        naselja.
      </p>

      <img src={kanjiza5} alt="Kanjiza 4" />
      <p style={{ marginTop: "-10px" }}>
        Kajakaška regata u Kanjiži je popularna manifestacija koja okuplja
        ljubitelje kajakarenja i avanturističkog turizma. Takmičari i
        rekreativci plove rekama i kanalima, uživajući u prirodnim lepotama ovog
        regiona. Regata je prilika da se promovišu sportske aktivnosti, ali i da
        se skrene pažnja na značaj očuvanja prirodnih resursa.
      </p>
    </div>
  );
};
