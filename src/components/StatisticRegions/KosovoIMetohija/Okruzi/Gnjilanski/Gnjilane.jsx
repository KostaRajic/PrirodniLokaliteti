import gnjilane1 from "../../../../../assets/images/KosovoIMetohija/Gnjilanski/Gnjilane/desktop/gnjilane1.jpg";
import gnjilane2 from "../../../../../assets/images/KosovoIMetohija/Gnjilanski/Gnjilane/desktop/gnjilane2.jpg";
import gnjilane3 from "../../../../../assets/images/KosovoIMetohija/Gnjilanski/Gnjilane/desktop/gnjilane3.jpg";
import gnjilane4 from "../../../../../assets/images/KosovoIMetohija/Gnjilanski/Gnjilane/desktop/gnjilane4.jpg";
import gnjilane5 from "../../../../../assets/images/KosovoIMetohija/Gnjilanski/Gnjilane/desktop/gnjilane5.jpg";
import gnjilane6 from "../../../../../assets/images/KosovoIMetohija/Gnjilanski/Gnjilane/desktop/gnjilane6.jpg";
import gnjilane11 from "../../../../../assets/images/KosovoIMetohija/Gnjilanski/Gnjilane/mobile/Mgnjilane1.jpg";
import gnjilane22 from "../../../../../assets/images/KosovoIMetohija/Gnjilanski/Gnjilane/mobile/Mgnjilane2.jpg";
import gnjilane33 from "../../../../../assets/images/KosovoIMetohija/Gnjilanski/Gnjilane/mobile/Mgnjilane3.jpg";
import gnjilane44 from "../../../../../assets/images/KosovoIMetohija/Gnjilanski/Gnjilane/mobile/Mgnjilane4.jpg";
import gnjilane55 from "../../../../../assets/images/KosovoIMetohija/Gnjilanski/Gnjilane/mobile/Mgnjilane5.jpg";
import gnjilane66 from "../../../../../assets/images/KosovoIMetohija/Gnjilanski/Gnjilane/mobile/Mgnjilane6.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { gnjilanskiOkrugPathRoutes } from "./GnjilanskiOkrugPathRoutes";

export const Gnjilane = () => {
  const navigate = useNavigate();

  return (
    <div className="placeBackground">
      <ScrollToTop />
      <FaArrowLeft className="arrowLeft" onClick={() => navigate(gnjilanskiOkrugPathRoutes.home)} />
      <header></header>
      <img srcSet={`${gnjilane11} 400w, ${gnjilane1} `} alt="Gnjilane1" />

      <h2>Gnjilane</h2>

      <p style={{ paddingTop: "50px" }}>
        Osmanski hroničar Evliya Čelebija pominje Moravu kao naselje u sastavu
        Vučitrnskog sandžaka. U svojim zapisima navodi: „Sedamnaesti dan
        putovanja iz Carigrada, prešao sam Vranje, Novo Brdo, Krivu Reku i
        Moravu.” Poreklo imena Gnjilane ostaje predmet rasprave. Prema nekim
        albanskim izvorima, naziv grada (koji je prvobitno bilo selo) potiče od
        Bahti-bega Đinolija (Bahti Beg Gjinolli) iz klana Đinaj (Gjinaj), koji
        je u 18. veku (oko 1750. godine) naselio ovo područje i vladao regionom
        Vučitrna, uključujući Malo Kosovo i Drenicu. Ipak, ne postoje čvrsti
        dokazi koji bi potvrdili ovu tvrdnju, niti se sa sigurnošću može reći ko
        su bili prvi stanovnici ili kada su se tačno naselili. S druge strane,
        srpski izvori ukazuju da ime Gnjilane potiče od srpske reči „gnjilo”,
        što znači trulo ili raspadnuto.
      </p>

      <img srcSet={`${gnjilane22} 400w, ${gnjilane2} `} alt="Gnjilane 2" />

      <p>
        Gnjilane se nalazi u jugoistočnom delu Kosova i Metohije, u regionu
        Kosovskog Pomoravlja. Predstavlja jednu od najvećih opština u pokrajini.
        Zahvaljujući povoljnom geografskom položaju, grad ima dobre saobraćajne
        veze sa ostalim delovima Kosmeta i šireg regiona. Kroz ovo područje
        protiču tri manje reke – Binačka Morava, Banja i Stanišorka – koje se
        ulivaju u Binačku Moravu, zapadno od sela Ugljare. Grad je udaljen 46
        kilometara od Prištine, 27 kilometara od Kosovske Kamenice, 22 kilometra
        od Vitine i oko 25 kilometara od Novog Brda. Opštine ovog regiona
        graniče se na jugoistoku sa Preševom (33 km) i Kumanovom (53 km), dok se
        na istoku graniče sa Bujanovcem (40 km).
      </p>

      <img srcSet={`${gnjilane33} 400w, ${gnjilane3} `} alt="Gnjilane 3" />

      <p>
        U srednjem veku grad je bio poznat pod imenom „Morava” i predstavljao je
        značajan trgovački i zanatski centar. Gnjilane su često posećivali
        srpski vladari, a prvi pisani trag o naselju potiče iz 1342. godine i
        vezan je za boravak kralja Stefana Dušana. Ime „Gnjilane” prvi put se
        pojavljuje krajem 14. veka, u povelji kneginje Milice, supruge kneza
        Lazara.
        <br />
        <br />U osmanskom katastarskom popisu — defteru iz 1455. godine, mesto
        se pominje kao „Gnjilan” i beleži se da selo ima 41 domaćinstvo sa
        srpskim stanovništvom, predvođeno jednim sveštenikom.
      </p>

      <img srcSet={`${gnjilane44} 400w, ${gnjilane4} `} alt="Gnjilane 4" />

      <p>
        Još od srednjeg veka u Gnjilanu je postojalo više crkava. Jedna od njih
        je verovatno bila posvećena Svetoj Petki, jer se mesto na kojem se
        nalazila i nakon njenog rušenja dugo zvalo „Petkovce”. Manastir Svetog
        Jovana, smešten na padini sela Boževce, imao je brojno bratstvo, što
        potvrđuju ostaci velikog monaškog groblja. Sredinom 18. veka, manastir
        su razorili Turci (ili „Arbanasi” 1780. godine), a na njegovom mestu
        kasnije je nastala današnja varoš.
        <br />
        <br />
        Godine 1861, na temeljima stare, manje crkve u centru Gnjilana,
        izgrađena je velika crkva posvećena Svetom Nikoli. U temelje su uzidani
        kameni blokovi koje su Srbi donosili iz sela Boževce kod Kosovske
        Kamenice. Kamenje je poticalo sa brda Odžin Kamen i predstavljalo
        ostatke nekadašnje crkve i tvrđave Prilepac, u kojoj je rođen knez Lazar
        Hrebeljanović.
      </p>

      <img srcSet={`${gnjilane55} 400w, ${gnjilane5} `} alt="Gnjilane 5" />

      <p>
        Crkva je više puta stradala u požarima, a jednom je potpuno izgorela. To
        se desilo 1892. godine, ali je već 1900. godine bila osvećena nakon
        potpune obnove. Poslednji put je obnovljena 1983. godine. Danas se u
        crkvi čuva lepa zbirka ikona, knjiga i crkvenih predmeta.
        <br />
        <br />
        Srpska škola – zgrada (dom prosvete) izgrađena je 1895. godine. Stara
        školska zgrada bila je niska i veoma oronula. Nova zgrada trebalo je da
        se gradi na mestu stare, kada je dobijen carski fermam i prikupljen
        materijal, ali je tada izgorela crkva (1892). Iako ih je ovo poremetilo,
        meštani Srbi su odlučili da nastave sa gradnjom škole, kako ne bi gubili
        vreme čekajući na obnovu crkve. Gradnja školske zgrade trajala je godinu
        dana, a opremanje i ukrašavanje unutrašnjosti nastavili su se i kasnije.
        Gnjilanci su povećali broj učitelja u skladu sa porastom broja školskih
        polaznika. Takođe, osnovali su humanitarno udruženje pod nazivom
        „Ljubav”, koje je stalno brinulo o školi i učenicima. U 1900. godini
        udruženje je imalo 60 redovnih članova, a broj članova i društveni
        kapital su stalno rasli.
      </p>

      <img srcSet={`${gnjilane66} 400w, ${gnjilane6} `} alt="Gnjilane 6" />

      <p>
        Postoji više predaja o poreklu naziva Gnjilana. Tokom šezdesetih godina
        20. veka zabeležena je i objavljena legenda o nastanku imena grada,
        prema kojoj je naziv potekao od kovača koji je pravio ognjila. Među
        starijim ljudima postojalo je verovanje da je mesto gde je danas centar
        grada bilo veoma močvarno, tj. gnjilo, sa puno blata, pa je ime Gnjilane
        nastalo od tog karakterističnog stanja. Prema predanju koje je
        najrasprostranjenije među Albancima, Gnjilane je 1750. godine osnovao
        Bahti-beg Džinić, zbog čega je kod njih u novije vreme naziv grada
        postao „Gjilan” (Điljan), dok je među starosedeocima Arbanasima sačuvan
        stariji naziv „Gilan” (Gilan), koji koriste i starosedeoci Turci. Ipak,
        prvi podaci o postojanju naseljenog mesta u ovom području pojavljuju se
        već u prvoj polovini 14. veka, za vreme vladavine cara Stefana Dušana.
        On je, prema zapisima, posetio Ružicu (kako se tada zvalo Gnjilane) oko
        1351. godine, prešao je preko čuvenog Masketarevog mosta na reci
        Dobruši, u centru grada, čime je trajno obeležio istoriju ovog srpskog
        mesta. U to vreme, u blizini Gnjilana, u utvrđenju Prilepac, rođen je
        knez Lazar Hrebeljanović, koji se 1389. godine u boji na Kosovu
        suprotstavio islamskom širenju.
      </p>
    </div>
  );
};
