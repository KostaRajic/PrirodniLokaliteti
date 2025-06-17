import zlatibor1 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/Zlatibor/desktop/zlatibor1.jpg";
import zlatibor2 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/Zlatibor/desktop/zlatibor2.jpg";
import zlatibor3 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/Zlatibor/desktop/zlatibor3.jpg";
import zlatibor4 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/Zlatibor/desktop/zlatibor4.jpg";
import zlatibor5 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/Zlatibor/desktop/zlatibor5.jpg";
import zlatibor11 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/Zlatibor/mobile/Mzlatibor1.jpg";
import zlatibor22 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/Zlatibor/mobile/Mzlatibor2.jpg";
import zlatibor33 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/Zlatibor/mobile/Mzlatibor3.jpg";
import zlatibor44 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/Zlatibor/mobile/Mzlatibor4.jpg";
import zlatibor55 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/Zlatibor/mobile/Mzlatibor5.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { zlatiborskiOkrugPathRoutes } from "./ZlatiborskiOkrugPahtRoutes";

export const PlaninaZlatibor = () => {
  const navigate = useNavigate();

  return (
    <div className="placeBackground">
      <ScrollToTop />
      <FaArrowLeft className="arrowLeft" onClick={() => navigate(zlatiborskiOkrugPathRoutes.home)} />
      <header></header>
      <img srcSet={`${zlatibor11} 400w, ${zlatibor1} `} alt="Planina Zlatibor 1" />

      <h2>Planina Zlatibor</h2>

      <p style={{ paddingTop: "50px" }}>
        Padine Zlatibora su najizraženije u istočnom i severoistočnom delu
        planine. Ovdje, niz planinske vrhove poput Savinog brda (1.132 m), Grude
        (1.140 m), Ćavika (1.018 m) i Obadovog brda (948 m), spuštaju se prema
        čajetinskoj Gradini (1.160 m). Od Gradine, prema jugu, počinje istočna
        granica Zlatibora, koja je takođe oblikovana strmim padinama ispod
        Pjevčaka (1.040 m), Bojišta (1.066 m) i Savičića glave (977 m), što
        uključuje i Alin Potok kao deo zlatiborske visoravni.
      </p>

      <img srcSet={`${zlatibor22} 400w, ${zlatibor2} `} alt="Planina Zlatibor 2" />

      <p>
        Prema jugu, padine Zlatibora se šire do izvorišta Ljubiške reke, gde
        prelaze u planinski masiv Murtenice. Sa zlatiborske visoravni, prema
        istoku, izdižu se njeni delovi u obliku rtova ili režnjeva, među kojima
        se izdvaja venac Murtenice sa najvišim vrhom Brijač (1.480 m). Prema
        jugozapadu, zlatiborska visoravan je karakterisana dugim i visokim
        grebenom Tornika, koji se prostire više od 10 km. On počinje kod Borove
        glave (1.147 m) i postepeno se uspinje prema severozapadu, dosežući
        najveće visine na Ravnom Torniku (1.431 m) i Velikom Torniku (1.496 m).
        Zapadna granica Zlatibora prati dolinu Jablanice, prolazi pored Crnog
        Rzava, oko kilometar nizvodno od ušća Ribnice, pa se preko Lisičine
        (1.067 m), Lupoglava (1.092 m) i Bara uzdiže do Viogora (1.281 m),
        najveće tačke Semegnjevske gore, čime se zatvaraju granice Zlatibora u
        geomorfološkom smislu.
      </p>

      <img srcSet={`${zlatibor55} 400w, ${zlatibor5} `} alt="Planina Zlatibor 3" />

      <p>
        Ime Zlatibor prvi put se zvanično pominje u okviru nove administrativne
        podela Srbije 1885. godine. Tokom srednjeg veka, ovaj region pripadao je
        župi Rujno, deo administrativne oblasti Raška, a sam Zlatibor nosio je
        to ime. U osamnaestom veku, ime Zlatibor postaje sve češće u upotrebi.
        Postoje tri različita predanja o poreklu ovog imena, ali je očigledno da
        je nastalo spajanjem reči "zlato" i "bor", iako još nije jasno na koji
        tačno način. Zlatibor se odlikuje bogatom vegetacijom, a livade su
        najdominantniji ekosistem, sa čak 120 različitih vrsta trava, od kojih
        mnoge poseduju lekovita svojstva. Do visine od 600 metara, prevladavaju
        listopadne vrste, dok iznad ove visine dominiraju četinari. Nekada je
        cela teritorija Zlatibora bila prekrivena šumama, ali je intenzivna seča
        u prošlosti značajno promenila ovaj pejzaž.
      </p>

      <img
        srcSet={`${zlatibor44} 400w, ${zlatibor4} `}
        alt="Planina Zlatibor 4"
      />

      <p>
        Reke Zlatibora deo su crnomorskog sliva. Iako prirodna jezera na
        Zlatiboru ne postoje, izgrađeno je mnogo veštačkih jezera, koja služe i
        za potrebe turizma i snabdevanja vodom. Voda iz zlatiborskih mineralnih
        izvora ima lekovita svojstva i pomaže u lečenju očnih i kožnih bolesti.
        Najpoznatiji izvori su: Bele vode u Mokroj Gori, banja Vala u Rožanstvu
        i spomen-česma na Oku. Zlatibor ima subalpsku klimu, sa prosečnom
        godišnjom temperaturom od oko 7,5 stepeni. Najhladniji mesec je januar,
        dok su avgust i meseci oko njega najtopliji. Klima Zlatibora je pogodna
        za lečenje bronhijalne astme i drugih alergijskih bolesti.
      </p>

      <img srcSet={`${zlatibor33} 400w, ${zlatibor3} `} alt="Planina Zlatibor 5" />
      <p>
        Životinjski svet Zlatibora je izuzetno bogat i raznovrstan. Tradicija
        "Zlatiborske hajke na vuka" podrazumeva godišnje smanjenje broja vukova,
        koji su se u prošlosti prekomerno množili. Lisice, zečevi, jarebice i
        veverice uobičajena su pojava, čak i u blizini naseljenih područja.
        Zlatibor je jedino mesto gde se još uvek mogu sresti beloglavi sup i
        orao krstaš, dve vrste ptica koje su na ivici izumiranja.
      </p>
    </div>
  );
};
