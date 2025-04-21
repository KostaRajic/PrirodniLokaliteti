import gazimestan1 from "../../../../../assets/images/KosovoIMetohija/Pristinski/Gazimestan/gazimestan1.jpg";
import gazimestan2 from "../../../../../assets/images/KosovoIMetohija/Pristinski/Gazimestan/gazimestan2.jpg";
import gazimestan3 from "../../../../../assets/images/KosovoIMetohija/Pristinski/Gazimestan/gazimestan3.jpg";
import gazimestan4 from "../../../../../assets/images/KosovoIMetohija/Pristinski/Gazimestan/gazimestan4.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { pristinskiOkrugPathRoutes } from "./PristinskiOkrugPathRoutes";

export const Gazimestan = () => {
  const navigate = useNavigate();

  return (
    <div className="placeBackground">
      <ScrollToTop />
      <FaArrowLeft className="arrowLeft" onClick={() => navigate(pristinskiOkrugPathRoutes.home)} style={{fill: 'white'}}/>
      <header></header>
      <img src={gazimestan1} alt="Gazimestan 1" />

      <h2>Gazimestan</h2>

      <p style={{ paddingTop: "50px" }}>
        Gazimestan je memorijalni kompleks podignut u znak sećanja na Kosovsku
        bitku (1389), koji se nalazi oko 6–7 kilometara jugoistočno od stvarnog
        bojišta poznatog kao Kosovo polje. Gazimestan je dostupan sa auto-puta
        Priština–Kosovska Mitrovica, na 5 km severozapadno od Prištine. Svake
        godine na Vidovdan, 28. juna, održava se pomen kod spomenika, koji je
        ukrašen likom kneza Lazara, koji je predvodio srpsku vojsku u Kosovskom
        boji.
        <br />
        <br />
        Kao istorijski prostor, odnosno centralno mesto sukoba srpske i turske
        vojske, predstavlja jedinstvenu celinu u kojoj se nalaze: spomenik
        kosovskim junacima, u obliku srednjovekovne kule, podignut 1953. godine
        po projektu Aleksandra Deroka, Muratovo turbe i Gazimestan turbe
        (Barjaktarovo turbe). Na uzvišenju se nalazi Spomenik kosovskim
        junacima, dok je kilometar prema selu Lazarovu Muratovo turbe, a na
        jugu, na 500 m, Barjaktarovo turbe.
      </p>

      <img src={gazimestan2} alt="Gazimestan 2" />

      <p>
        Područje spomeničkog kompleksa Gazimestana, Plandišta, Treševine i
        Lazarova, graniči se na severnoj strani sa prostorom Bakšija; na
        severoistočnoj strani sa Brnjičkom rekom; na istočnoj strani granicu
        čine naselje Donja Brnjica i prostor Ravnište; na južnoj strani je
        prostor i naselje Orlović; na zapadnoj strani su prostori Široko polje i
        Mazgit sa naseljem Gornji Mazgit. Put za Prištinu na zapadnoj strani
        delimično graniči, a delimično prolazi kroz ovu celinu. Centralno mesto
        čini kula visine 25 m, u čijoj su unutrašnjosti ispisani stihovi epskih
        pesama kosovskog ciklusa. Na vrhu kule je platforma sa koje se pruža
        pogled na prostor Kosovske bitke.
      </p>

      <img src={gazimestan3} alt="Gazimestan 3" />

      <p>
        Kompleks Gazimestana sa spomenicima i božurima bio je pod zaštitom
        države do 1999. godine. Iako ga od tada čuvaju međunarodne snage, neki
        Albanci na tom području podižu građevinske objekte. U blizini spomenika
        nalazi se privatna ergela konja i konjički klub, koji koristi terene
        Gazimestana kao hipodrom.
        <br />
        <br />
        Srbi se svake godine na Vidovdan okupljaju kod Spomenika kosovskim
        junacima na Gazimestanu, a Srpska pravoslavna crkva održava pomen.
        <br />
        <br />
        Na Vidovdan 28. juna 2012. kod spomenika se okupilo 10.000 Srba, a
        besedu je držao Patrijarh srpski Irinej. Na svečanosti 2012. godine
        dogodio se incident kada je Kosovska policija naredila posetiocima da
        skinu majice sa ćiriličnim natpisima ili bilo čim što podseća na Srbiju.
      </p>

      <img src={gazimestan4} alt="Kosovska bitka" />

      <p>
        Kosovski boj, poznata i kao Kosovska bitka, odigrala se 28. juna 1389.
        godine na Kosovu polju između vojske srpskog vladara kneza Lazara
        Hrebeljanovića i vojske osmanskog sultana sultana Murata I. Bitka je
        bila odlučujuća u borbi između Srbije i muslimanskog
        Osmanskog carstva. Iako su i Srbi i Turci pretrpeli velike gubitke,
        bitka nije imala odlučujuću pobedu, ali je označila početak osmanske
        dominacije na Balkanu. Knez Lazar je poginuo tokom bitke, a sultan Murat
        je ubijen, što je dodatno pojačalo simbolički značaj ove bitke u
        istoriji Balkana.
      </p>
    </div>
  );
};
