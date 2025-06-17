import vodopadMirusa1 from "../../../../../assets/images/KosovoIMetohija/Prizrenski/VodopadMirusa/desktop/vodopadMirusa1.jpg";
import vodopadMirusa2 from "../../../../../assets/images/KosovoIMetohija/Prizrenski/VodopadMirusa/desktop/vodopadMirusa2.jpg";
import vodopadMirusa3 from "../../../../../assets/images/KosovoIMetohija/Prizrenski/VodopadMirusa/desktop/vodopadMirusa3.jpg";
import vodopadMirusa4 from "../../../../../assets/images/KosovoIMetohija/Prizrenski/VodopadMirusa/desktop/vodopadMirusa4.jpg";
import vodopadMirusa11 from "../../../../../assets/images/KosovoIMetohija/Prizrenski/VodopadMirusa/mobile/MvodopadMirusa1.jpg";
import vodopadMirusa22 from "../../../../../assets/images/KosovoIMetohija/Prizrenski/VodopadMirusa/mobile/MvodopadMirusa2.jpg";
import vodopadMirusa33 from "../../../../../assets/images/KosovoIMetohija/Prizrenski/VodopadMirusa/mobile/MvodopadMirusa3.jpg";
import vodopadMirusa44 from "../../../../../assets/images/KosovoIMetohija/Prizrenski/VodopadMirusa/mobile/MvodopadMirusa4.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { prizrenskiOkrugPathRoutes } from "./PrizrenskiOkrugPathRoutes";

export const VodopadMirusa = () => {
  const navigate = useNavigate();

  return (
    <div className="placeBackground">
      <ScrollToTop />
      <FaArrowLeft
        className="arrowLeft"
        onClick={() => navigate(prizrenskiOkrugPathRoutes.home)}
        style={{ fill: "white" }}
      />
      <header></header>
      <img srcSet={`${vodopadMirusa44} 400w, ${vodopadMirusa4} `} alt="Vodopad Miruša 1" />

      <h2>Vodopad Miruša</h2>

      <p style={{ paddingTop: "50px" }}>
        U južnom delu planine Gremnik, na nadmorskoj visini od 572 metra,
        smešten je kanjon reke Miruše, koji sa svojim strmim liticama visine do
        200 metara, a okružen parkom prirode kojem pripada, čini predelo
        nestvarne lepote i predstavlja jednu od najlepših prirodnih znamenitosti
        Kosova i Metohije. „Miruša“ je područje koje se nalazi u Metohijskoj
        kotlini, na granici dva geografska kraja – Metohije i Prekoruplje,
        prostirući se na prostranoj površini u okviru Miruške kotline i Podrima,
        dolinskog kraja uz Belo Drim, na teritoriji opština Klina i Orahovac.
      </p>

      <img srcSet={`${vodopadMirusa22} 400w, ${vodopadMirusa2} `} alt="Vodopad Miruša 2" />

      <p>
        Miruša je leva pritoka Belog Drima, koja izvire u podnožju planine
        Crnoljeva, sa zapadne strane. Kanjon Miruše se prostire između Klina,
        Mališeva i Orahovca. Reka je iskopala kanjon dug 10 kilometara, sa 13
        jezera i 12 vodopada između njih, zbog čega je zaslužila naziv „Plitvice
        Metohije“, dok je narod još naziva i „Slapovi Miruše“. Najduže je treće
        jezero (70 metara), dok je najšire deseto jezero (50 metara). Ovaj
        kanjon, dugačak dva kilometra, prolazi kroz južne padine planine
        Gremnik, do vrha Zatrič, na nadmorskoj visini od 360 do 630 metara.
      </p>

      <img srcSet={`${vodopadMirusa33} 400w, ${vodopadMirusa3} `} alt="Vodopad Miruša 3" />

      <p>
        Celi region kanjona reke Miruše, dug 30 kilometara, bogat je brojnim
        planinskim jezerima, izvorima i rudnim bogatstvom, što doprinosi
        slikovitosti pejzaža čija lepota oduzima dah posmatraču. Park prirode
        prostire se na obe obale reke Miruše od samog početka kanjona. Voda je
        uvek ledeno hladna.
        <br />
        <br />
        Kroz Dušku pećinu, najveću od deset, protiče potok koji stvara jezerca,
        ponore i manje vodopade. Na vrhu krečnjačke litice Crvene stene nalaze
        se dve pećine u kojima su za vreme Turaka bila skloništa i isposnice
        srpskih monaha. U pećini Mala crkva pronađeni su ostaci srednjovekovne
        freske i kamenog podzida, dok u pećini Velika crkva postoje ostaci
        freske, oltara i molitvenika.
      </p>

      <img srcSet={`${vodopadMirusa11} 400w, ${vodopadMirusa1} `} alt="Vodopad Miruša 4" />

      <p>
        U specifičnom parku prirode koji je stvoren od strane reke Miruše i
        njenog kanjona, mogu se naći zaštićene biljne vrste kao što su kosovski
        božur i gorocvet.
        <br />
        <br />
        Najveća izmerena dubina jezera je devet metara, a najviši vodopad, koji
        se nalazi između šestog i sedmog jezera, ima visinu od 22 metra.
        <br />
        <br />
        U predelu gornjih jezera, posebnu atrakciju predstavljaju džinovski
        „lonci“ sa strmo uglačanim stranama. Kraj kanjona obiluje krasnim
        oblicima reljefa, kao što su vrtače, škripovi i pećine koje vertikalno
        preseku čitav zid kanjona.
        <br />
        <br />
        Kanjon reke Miruše je zaštićen Uredbom o zaštiti predela izuzetnih
        odlikа Vlade Republike Srbije, od 1998. godine.
      </p>
    </div>
  );
};
