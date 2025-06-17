import beljanica1 from "../../../../../assets/images/JuznaIIstocnaSrbija/BranicevskiOkrug/PlaninaBeljanica/desktop/beljanica1.jpg";
import beljanica2 from "../../../../../assets/images/JuznaIIstocnaSrbija/BranicevskiOkrug/PlaninaBeljanica/desktop/beljanica2.jpg";
import beljanica3 from "../../../../../assets/images/JuznaIIstocnaSrbija/BranicevskiOkrug/PlaninaBeljanica/desktop/beljanica3.jpg";
import beljanica4 from "../../../../../assets/images/JuznaIIstocnaSrbija/BranicevskiOkrug/PlaninaBeljanica/desktop/beljanica4.jpg";
import beljanica5 from "../../../../../assets/images/JuznaIIstocnaSrbija/BranicevskiOkrug/PlaninaBeljanica/desktop/beljanica5.jpg";
import beljanica11 from "../../../../../assets/images/JuznaIIstocnaSrbija/BranicevskiOkrug/PlaninaBeljanica/mobile/beljanicaM1.jpg";
import beljanica22 from "../../../../../assets/images/JuznaIIstocnaSrbija/BranicevskiOkrug/PlaninaBeljanica/mobile/beljanicaM2.jpg";
import beljanica33 from "../../../../../assets/images/JuznaIIstocnaSrbija/BranicevskiOkrug/PlaninaBeljanica/mobile/beljanicaM3.jpg";
import beljanica44 from "../../../../../assets/images/JuznaIIstocnaSrbija/BranicevskiOkrug/PlaninaBeljanica/mobile/beljanicaM4.jpg";
import beljanica55 from "../../../../../assets/images/JuznaIIstocnaSrbija/BranicevskiOkrug/PlaninaBeljanica/mobile/beljanicaM5.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { branicevskiOkrugPathRoutes } from "./BranicevskiOkrugPathRoutes";

export const PlaninaBeljanica = () => {
  const navigate = useNavigate();

  return (
    <div className="placeBackground">
      <ScrollToTop />
      <FaArrowLeft
        className="arrowLeft"
        onClick={() => navigate(branicevskiOkrugPathRoutes.home)}
      />
      <header></header>
      <img srcSet={`${beljanica22} 400w, ${beljanica2} `} alt="Planina Beljanica 1" />

      <h2>Planina Beljanica</h2>

      <p style={{ paddingTop: "50px" }}>
        Beljanica je jedna od najvećih krečnjačkih planina istočne Srbije.
        Nalazi se između sliva reke Mlave i Žagubičke kotline na severu i sliva
        reke Resave na jugu. Proteže se od zapada ka istoku u dužini od 24 km,
        sa prosečnom širinom od oko 12 km. Obuhvata površinu od 309 km², od čega
        246 km² čini izražen kraški reljef u krečnjacima.
        <br />
        <br /> Severni deo planine je visoravan sa brojnim vrtačama, uvalama i
        slepim dolinama (Busovata, Rečke sa ponorom dubokim 150 m). Južni deo
        čini stjenovit, krečnjački greben Beljanica (1.339 m), koji strmim
        odsekom pada u klisuru reke Čemernice, desne pritoke reke Resave. U
        grebenu se nalaze mnoge pećine, od kojih je najveća Velika Atula (560
        m). U podnožju grebena nalaze se Malo i Veliko vrelo, dok se u podnožju
        severnog oboda nalazi Vrelo Mlave kod Žagubice.
      </p>

      <img srcSet={`${beljanica11} 400w, ${beljanica1} `} alt="Planina Beljanica 2" />

      <p>
        Beljanica je planina bogata vodom, sa brojnim podzemnim i površinskim
        tokovima. Posebno su zanimljivi površinski tokovi sa velikim brojem reka
        i potoka ponornica. Voda u svim tokovima je čista i može se piti
        direktno iz vodotoka.
        <br />
        <br />
        Beljanica je u speleološkim krugovima poznata kao izuzetno bogata
        speleološkim objektima. Najpoznatija pećina je Resavska pećina, koja je
        uređena za pojedinačne i grupne posete i otvorena tokom cele godine.
        Pored Resavske pećine, na Beljanici postoji veliki broj pećina bogatih
        svim vrstama pećinskog nakita.
      </p>

      <img srcSet={`${beljanica33} 400w, ${beljanica3} `} alt="Planina Beljanica 3" />

      <p>
        Pećine izuzetne lepote su Jelarče, Pionirska pećina, Vlaška pećina i
        Ivkov ponor, a posebno se izdvajaju Izviđačka pećina, koja po vremenu
        nastanka i bogatstvu nakitom ne zaostaje za Resavskom pećinom, i Velika
        Atula, kao speleološki objekat od posebnog značaja.
      </p>

      <img srcSet={`${beljanica44} 400w, ${beljanica4} `} alt="Planina Beljanica 4" />

      <p>
        Zapravo, Velika Atula nije do kraja istražena, a najnovija istraživanja
        su otkrila postojanje produžetka zapadnog kanala. U poslednjim
        istraživanjima pećinske faune, otkrivene su posebne vrste
        nepigmentisanih stonoga, koje su nova vrsta za nauku.
        <br />
        <br />
        Lepotu planine Beljanice upotpunjuju kanjoni reka Resave i Kločanice.
        <br />
        <br />
        Na visinama preko 700 m nalazi se veliki broj koliba u kojima žive
        meštani okolnih sela, koji prave sir izuzetnog kvaliteta.
      </p>

      <img srcSet={`${beljanica55} 400w, ${beljanica5} `} alt="Planina Beljanica 5" />
      <p>
        Vršni deo planine čine pašnjaci. Sam vrh (1.339 m) je stenovit, a zbog
        svoje beline, iznad padina prekrivenih bukovim i hrastovim šumama,
        pretpostavlja se da je planina dobila ime. Na južnoj padini planine
        nalazi se vodopad Veliki buk.
        <br />
        <br />
        Mikroklima Beljanice je čista kontinentalna, pa je zimi neophodna zimska
        oprema za motorna vozila.
      </p>
    </div>
  );
};
