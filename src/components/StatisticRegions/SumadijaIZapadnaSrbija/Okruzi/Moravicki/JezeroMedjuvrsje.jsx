import medjuvrsje1 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/JezeroMedjuvrsje/desktop/jezeroMedjuvrsje1.jpg";
import medjuvrsje2 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/JezeroMedjuvrsje/desktop/jezeroMedjuvrsje2.jpg";
import medjuvrsje3 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/JezeroMedjuvrsje/desktop/jezeroMedjuvrsje3.jpg";
import medjuvrsje4 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/JezeroMedjuvrsje/desktop/jezeroMedjuvrsje4.jpg";
import medjuvrsje5 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/JezeroMedjuvrsje/desktop/jezeroMedjuvrsje5.jpg";
import medjuvrsje11 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/JezeroMedjuvrsje/mobile/MjezeroMedjuvrsje1.jpg";
import medjuvrsje22 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/JezeroMedjuvrsje/mobile/MjezeroMedjuvrsje2.jpg";
import medjuvrsje33 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/JezeroMedjuvrsje/mobile/MjezeroMedjuvrsje3.jpg";
import medjuvrsje44 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/JezeroMedjuvrsje/mobile/MjezeroMedjuvrsje4.jpg";
import medjuvrsje55 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/JezeroMedjuvrsje/mobile/MjezeroMedjuvrsje5.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { moravickiOkrugPathRoutes } from "./MoravickiOkrugPathRoutes";

export const JezeroMedjuvrsje = () => {
  const navigate = useNavigate();

  return (
    <div className="placeBackground">
      <ScrollToTop />
      <FaArrowLeft className="arrowLeft" onClick={() => navigate(moravickiOkrugPathRoutes.home)} />
      <header></header>
      <img srcSet={`${medjuvrsje11} 400w, ${medjuvrsje1} `} alt="Jezero Međuvršje" />

      <h2 style={{ color: "white" }}>Međuvršje</h2>

      <p style={{ paddingTop: "50px" }}>
        Međuvršje je najveće veštačko jezero na Zapadnoj Moravi, smešteno na
        izlazu iz Ovčarsko-kablarske klisure. Nastalo je izgradnjom betonske
        brane za potrebe male hidroelektrane Međuvršje, uzvodno od železničkog
        mosta, na trasi nekadašnje pruge uskog koloseka Užice–Čačak. Ukupna
        zapremina akumulacije iznosi 18,5 miliona m³, dok je zapremina korisnog
        prostora oko 5,6 miliona m³. Nadmorska visina jezera je 273 m, a najveća
        dubina, koja se nalazi neposredno kod temeljnog propusta, iznosi oko 20
        m.
      </p>

      <img srcSet={`${medjuvrsje22} 400w, ${medjuvrsje2} `} alt="Jezero Medjuvrsje" />

      <p>
        U erozivnom proširenju kod ušća Banjskog potoka, u gornjem delu jezera
        Međuvršje, uređeno je kamp naselje. Nedaleko se nalazi motelski kompleks
        sa benzinskom pumpom. Malo dalje smešteni su turističko-ugostiteljski
        objekti i kupališta Ovčar Banje, koja je poznata po termomineralnim
        izvorima i dugoj tradiciji banjskog lečenja.
      </p>

      <img srcSet={`${medjuvrsje33} 400w, ${medjuvrsje3} `} alt="OvcarskoKablarska klisura" />

      <p>
        Ovčar Banja je centar zdravstveno-lečilišnog turizma. Pored jezera je
        izgrađeno nekoliko desetina vikend kuća. Na jezeru je popularan vikend
        turizam i sportski ribolov, dok su planine i pećine omiljena mesta za
        planinare i speleologe. Svake treće nedelje u julu, od 2005. godine,
        organizuje se jednodnevna Ovčarsko-kablarska regata turističko-zabavnog
        karaktera, koja dodatno obogaćuje turističku ponudu ovog kraja Srbije.
      </p>

      <img srcSet={`${medjuvrsje44} 400w, ${medjuvrsje4} `} alt="Jezero Medjuvrsje 2" />

      <p>
        U priobalju jezera Međuvršje, sa obe strane, smešteni su poznati, dobro
        restaurirani i zakonom zaštićeni manastiri. To su: Vavedenje,
        Vaznesenje, Preobraženje, Sretenje, Sveta Trojica, Blagoveštenje,
        Ilinje, Jovanje, Nikolje i Uspenje. Iako su skromni po dimenzijama,
        arhitektonskim konstrukcijama, freskama, ikonama, riznicama,
        ikonostasima, posedima i konacima, oni čine jedinstvenu celinu koja nosi
        naziv Srpska Sveta Gora.
      </p>

      <img srcSet={`${medjuvrsje55} 400w, ${medjuvrsje5} `} alt="Jezero u Moravičkom okrugu" />

      <p>
        Turisti mogu da uživaju u odmoru u restoranima-splavovima duž obale ili
        da plove čamcem po jezeru. Pored obale ovog jezera, a u blizini
        magistralnog puta Čačak—Ovčar Banja, turistima su na raspolaganju brojni
        restorani.
      </p>
    </div>
  );
};
