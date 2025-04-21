import resavskaPecina1 from "../../../../../assets/images/SumadijaIZapadnaSrbija/PomoravskiOkrug/ResavskaPecina/resavskaPecina1.jpg";
import resavskaPecina2 from "../../../../../assets/images/SumadijaIZapadnaSrbija/PomoravskiOkrug/ResavskaPecina/resavskaPecina2.jpg";
import resavskaPecina3 from "../../../../../assets/images/SumadijaIZapadnaSrbija/PomoravskiOkrug/ResavskaPecina/resavskaPecina3.jpg";
import resavskaPecina4 from "../../../../../assets/images/SumadijaIZapadnaSrbija/PomoravskiOkrug/ResavskaPecina/resavskaPecina4.jpg";
import resavskaPecina5 from "../../../../../assets/images/SumadijaIZapadnaSrbija/PomoravskiOkrug/ResavskaPecina/resavskaPecina5.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { pomoravskiOkrugData } from "./pomoravskiOkrugData";
import { pomoravskiOkrugPathRoutes } from "./PomoravskiOkrugPathRoutes";

export const ResavskaPecina = () => {
  const navigate = useNavigate();

  return (
    <div className="placeBackground">
      <ScrollToTop />
      <FaArrowLeft
        className="arrowLeft"
        onClick={() => navigate(pomoravskiOkrugPathRoutes.home)}
        style={{ fill: "white" }}
      />
      <header></header>
      <img src={resavskaPecina1} alt="Resavska Pećina 1" />

      <h2 style={{ color: "white" }}>Resavska Pećina</h2>

      <p style={{ paddingTop: "50px" }}>
        Resavska pećina je jedna od najvažnijih turističkih pećina u Srbiji.
        Nalazi se u centralnoj Srbiji, u oblasti Gornje Resave, na Divljakovčkom
        polju, ispod venca Babine glave, a pripada opštini Despotovac, tačnije
        ataru sela Jelovac. Udaljena je 152 km od Beograda, 20 km od Despotovca,
        a oko 5 km od sela Jelovac. Njena nadmorska visina iznosi 483 metra.
        Površina predviđena za zaštitu je 10,87 hektara i obuhvata neposrednu
        okolinu pećine, na padini koja se spušta sa 120 metara iznad ulaza do
        dna Divljakovčke uvale. Obuhvata ukupno 14 i po katastarskih parcela.
      </p>

      <img src={resavskaPecina2} alt="Resavska Pećina 2" />

      <p>
        Resavska pećina je višenamenski speleološki objekat ukupne dužine
        istraženih kanala od oko 400 metara, sa visinskom razlikom između ulaza
        i najnižeg dela pećine (Bobanova dvorana) od oko 30 metara. Ukupna
        dužina Resavske pećine iznosi 2.800 metara, a nastala je erozivnim
        delovanjem nekadašnjeg vodenog toka koji je bio razvijen u Divljačkom
        uvati pri višem nivou njegovog dna, koji je tada ulazio u pećinu na
        mestu današnjeg ulaza. Pećina nema stalni ili povremeni vodeni tok, a
        aktivnost kapljica vode zavisi od padavina na površini. Svi delovi
        pećine, osim Ulazne dvorane, bogati su kristalnom kalcitnom
        orna­men­tikom. Zastupljene su gotovo sve vrste pećinskih ukrasa
        kitnjastih formi, od masivnih stubova stalagmita i stalaktita, do malih
        kadi­ca sa perlama na pećinskom dnu. Neke grupe stalagmita ili kolona
        dobile su posebna imena kao što su "Košnice", "Deda i baba", "Porodica
        Taran" i drugi.
      </p>

      <img src={resavskaPecina3} alt="Resavska Pećina 3" />

      <p>
        Za pećinu su znali samo stočari koji su se sklanjali od nevremena sa
        stadima ovaca. Jedan od stočara je 1962. godine otkrio pećinu u saradnji
        sa planinarima iz Svilajnca. Njeno izvorno ime bilo je Divljakovčka
        pećina, po krasnom polju u kojem se nalazi. Detaljno su je istraživali
        novosadski speleolozi, na čelu sa dr. Jovanom Petrovićem. Radovi na
        uređenju pećine trajali su 10 godina, a pećina je zvanično otvorena za
        posetioce 22. aprila 1972. godine. Smatra se jednom od najstarije
        istraženih pećina. Dužina pećine je 4.500 metara, od čega je istraženo
        2.850 metara, dok je deo namenjen turističkim obilascima dugačak oko 800
        metara.
      </p>

      <img src={resavskaPecina5} alt="Resavska Pećina 4" />

      <p>
        Temperatura u pećini je konstantna i iznosi 7 °C, dok vlažnost vazduha
        varira između 80% i 100%. Starost nakita koji se nalazi u pećini
        procenjuje se na 45 miliona godina. Unutrašnjost pećine je bogata
        brojnim i raznovrsnim dvoranama, kanalima, galerijama, stubovima,
        stalaktitima, stalagmita, draperijama i okamenjenim vodopadima. Zbog
        bogatstva i raznolikosti nakita, Resavsku pećinu često nazivaju i
        „Resavska lepotica“.
      </p>

      <img src={resavskaPecina4} alt="Resavska Pećina 5" />

      <p>
        Nakit pećine počinje već od samog ulaza, koji se nalazi na nadmorskoj
        visini od 485 m. On nastaje rastvaranjem kalcijum-karbonata, a boja
        zavisi od minerala kroz koje voda prolazi. Nakit se pojavljuje u tri
        boje: crvenoj, žutoj i beloj. Najdominantnija je crvena, koja potiče od
        oksida gvožđa, bela potiče od kristalnog kalcijuma, a žuta od prisustva
        gline. Pećina se prostire na četiri nivoa, a za turističke posete
        uređeni su samo delovi prva dva nivoa. U gornjoj galeriji obilaže se
        četiri dvorane: Dvorana sraslih stubova ili kolona, Dvorana košnica,
        Predvorja istorije, Kristalna dvorana.
      </p>
    </div>
  );
};
