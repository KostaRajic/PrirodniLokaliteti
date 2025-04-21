import celije1 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RasinskiOrkug/JezeroCelije/celije1.jpg";
import celije2 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RasinskiOrkug/JezeroCelije/celije2.jpg";
import celije3 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RasinskiOrkug/JezeroCelije/celije3.jpg";
import celije4 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RasinskiOrkug/JezeroCelije/celije4.jpg";
import celije5 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RasinskiOrkug/JezeroCelije/celije5.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { rasinskiOkrugPathRoutes } from "./RasinskiOkrugPathRoutes";

export const JezeroCelije = () => {
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
      <img src={celije1} alt="Jezero Ćelije 1" />

      <h2 style={{ color: "white" }}>Jezero Ćelije</h2>

      <p style={{ paddingTop: "50px" }}>
        Jezero Ćelije se nalazi u centralnom delu Srbije, oko 22 kilometra od
        Kruševca. Nastalo je 1972. godine pregrađivanjem reke Rasine i
        izgradnjom brane visoke 55 metara. Brana se nalazi na spoju Rasinske
        kotline i Zlatarske klisure. Potpuna akumulacija ovog jezera je završena
        1979. godine. Među lokalnim stanovništvom, ovo jezero je poznato i kao
        Zlatno jezero.
      </p>

      <img src={celije2} alt="Jezero Ćelije 2" />

      <p>
        Jezero Ćelije prvobitno je izgrađeno kako bi služilo zaštiti Đerdapa od
        nanosa nastalih erozijom, čime je postalo deo sistema očuvanja njegove
        akumulacije. U godinama nakon izgradnje, ustanovljeno je da je voda u
        jezeru izuzetnog kvaliteta, pa je, pored svoje prvobitne funkcije,
        počelo da se koristi i za vodosnabdevanje oko 200.000 stanovnika
        Kruševca i okolnih naselja. Godine 1977. Jezero Ćelije je proglašeno
        izvorištem regionalnog i međunarodnog značaja za vodosnabdevanje prvog
        ranga.
      </p>

      <img src={celije3} alt="Jezero Ćelije 3" />

      <p>
        Jezero je napravljeno na mestu gde je nekada postojalo naselje Zlatari,
        koje je delimično potopljeno, dok su neki delovi naselja pomereni.
        Potopljeni su groblje i crkva, a prema pričama meštana, koji često
        borave na jezeru, ponekad se može videti krst na površini vode, za koji
        se veruje da potiče sa vrha crkve. Ovaj prizor izaziva nelagodu među
        njima, a ujedno je inspiracija za brojne priče i legende. Jedna od njih
        tvrdi da će u jezeru biti utopljeno onoliko ljudi koliko je grobova
        potopljeno. Jezero je dobilo svoje ime po naselju Ćelije koje se nalazi
        na njegovim obalama.
      </p>

      <img src={celije4} alt="Jezero Ćelije 4" />

      <p>
        Prema prvobitnim planovima, očekivalo se da jezero bude u funkciji 50
        godina, što bi značilo da bi u 2021. godini počelo da se zatrpava.
        Međutim, s obzirom na to da grad Kruševac i okolna područja nemaju
        alternativne izvore vodosnabdevanja, preduzimaju napore da pronađu
        rešenje za produžetak života jezera za još 40 godina. Jedan od faktora
        koji negativno utiče na dugoročnu održivost jezera su otpadne vode koje
        se ispuštaju u reku Rasinu iz gradova uzvodno od jezera.
      </p>

      <img src={celije5} alt="Jezero Ćelije 5" />

      <p>
        Jezero Ćelije se nalazi na nadmorskoj visini od 277 metara, a njegova
        površina iznosi 2,85 kvadratnih kilometara, dok je ukupna površina sliva
        oko 600 kvadratnih kilometara. Celokupna površina jezera je 3 kvadratna
        kilometra, a dužina njegove obale pri normalnom vodostaju je 21,7
        kilometara, s veoma razuđenim obalama. Prosečna dubina jezera je 14
        metara, dok je maksimalna izmerena dubina 41 metar. Nekadašnji srednji
        godišnji proticaj reke Rasine kroz jezero bio je 6 kubnih metara u
        sekundi, ali se, kako je reka Rasina opadala, protok smanjio na 4,5
        kubnih metara u sekundi. U prošlosti je jezero akumuliralo oko 41 milion
        kubnih metara vode u sekundi, dok je sada ta količina smanjena na 38
        miliona.
      </p>
    </div>
  );
};
