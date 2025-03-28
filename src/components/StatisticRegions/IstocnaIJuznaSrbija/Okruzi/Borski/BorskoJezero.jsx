import borskoJezero1 from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/BorskoJezero/borskoJezero1.jpg";
import borskoJezero2 from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/BorskoJezero/borskoJezero2.jpg";
import borskoJezero3 from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/BorskoJezero/borskoJezero3.jpg";
import borskoJezero4 from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/BorskoJezero/borskoJezero4.jpg";
import borskoJezero5 from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/BorskoJezero/borskoJezero5.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";

export const BorskoJezero = () => {
  const navigate = useNavigate();

  return (
    <div className="placeBackground">
      <ScrollToTop />
      <FaArrowLeft
        className="arrowLeft"
        onClick={() => navigate(-1)}
        style={{ fill: "white" }}
      />
      <header></header>
      <img src={borskoJezero1} alt="Borsko Jezero 1" />

      <h2>Borsko Jezero</h2>

      <p style={{ paddingTop: "50px" }}>
        Borsko jezero je veštačko jezero koje je nastalo 1959. godine podizanjem
        brane i akumulacijom voda rečice Valja Žoni, Marecovе reke i dela sliva
        Zlotske reke. Jezero se nalazi u podnožju planine Crni vrh, u blizini
        Bora. Voda iz jezera prvenstveno je namenjena za potrebe
        Rudarsko-topioničarskog basena, ali takođe doprinosi i razvoju turizma.
      </p>

      <img src={borskoJezero2} alt="Borsko Jezero 2" />

      <p>
        Tokom leta, turisti provode vreme na Borskom jezeru. Svake godine se u
        jezero pušta nekoliko tona riblje mladji kako bi se poboljšao riblji
        fond. Tokom sezone, koja traje od početka maja do kraja septembra,
        temperatura vode dostiže čak 26 stepeni, što je idealno za kupanje.
      </p>

      <img src={borskoJezero3} alt="Borsko Jezero 3" />

      <p>
        Zimi je jezero potpuno prekriveno ledom. Najviši vodostaji javljaju se u
        proleće, dok su najniži krajem leta i početkom jeseni. Razlika između
        maksimalnog i minimalnog vodostaja prelazi 10 metara, što nepovoljno
        utiče na biljni i životinjski svet jezera. Korišćenjem priliva vode iz
        Zlotske reke, nivo jezera se tokom godine održava na oko 2 metra ispod
        preliva.
      </p>

      <img src={borskoJezero4} alt="Borsko Jezero 4" />

      <p>
        Borsko jezero je okruženo listopadnim i četinarskim šumama, prirodnim
        zelenim proplancima i livadama na nadmorskoj visini od 438 metara. Uz
        obalu jezera izgrađeni su hoteli „Metalurg“, „Jezero“, „Vertigo City“ i
        vile, dok su na oko 200 metara od jezera smeštena velika vikend naselja.
        Na samoj obali jezera turistima je na raspolaganju i autokamp kapaciteta
        oko 300 prikolica. Kamp se nalazi na udaljenosti od 1 kilometra od
        hotela „Jezero“ u pravcu Žagubice.
      </p>

      <img src={borskoJezero5} alt="Borsko Jezero 5" />
      <p>
        Na obali Borskog jezera izgrađene su četiri veće plaže, kao i nekoliko
        manjih. Kupači na glavnoj plaži tokom celokupne sezone imaju nadzor
        spasilaca. Sportistima je tokom letnje sezone na raspolaganju kompleks
        sportskih terena kod hotela „Jezero“. Ovaj kompleks uključuje terene za
        košarku, fudbal, rukomet, odbojku (običnu i na pesku) i tenis. <br />
        <br />
        Treniračke staze obuhvataju celo jezero, počinju od plaže Tropski bar,
        prolaze pored hotela „Jezero“, Glavne plaže, hotela „Metalurg“,
        autokampa, različitih četinarskih i listopadnih šuma, pašnjaka i livada,
        te završavaju kod brane na Borskom jezeru. Staze se povezuju sa trasom
        Crnovrške pruge koja vodi do Bora. Na Glavnoj plaži moguće je iznajmiti
        čamce i pedaline, kao i uživati u različitim vodenim sadržajima.
      </p>
    </div>
  );
};
