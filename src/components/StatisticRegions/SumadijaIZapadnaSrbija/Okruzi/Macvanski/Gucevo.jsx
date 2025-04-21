import gucevo1 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MacvanskiOkrug/Gucevo/gucevo1.jpg";
import gucevo2 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MacvanskiOkrug/Gucevo/gucevo2.jpg";
import gucevo3 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MacvanskiOkrug/Gucevo/gucevo3.jpg";
import gucevo4 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MacvanskiOkrug/Gucevo/gucevo4.jpg";
import gucevo5 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MacvanskiOkrug/Gucevo/gucevo5.jpg";
import gucevo6 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MacvanskiOkrug/Gucevo/gucevo6.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { macvanskiOkrugPathRoutes } from "./MacvanskiOkrugPathRoutes";

export const Gucevo = () => {
  const navigate = useNavigate();

  return (
    <div className="placeBackground">
      <ScrollToTop />
      <FaArrowLeft className="arrowLeft" onClick={() => navigate(macvanskiOkrugPathRoutes.home)} />
      <header></header>
      <img src={gucevo1} alt="Gučevo 1" />

      <h2>Planina Gučevo</h2>

      <p style={{ paddingTop: "50px" }}>
        Planina Gučevo se nalazi u blizini Loznice, iznad Banje Koviljače. Deo
        je zapadnog dijela podrinjsko-valjevskih planina i uzdiže se iz doline
        reke Drine, prostirući se ka jugoistoku u pravcu Dinarskog sistema. Od
        Beograda i Novog Sada udaljena je 142 km, dok je od Valjeva i Užica na
        razdaljini od 70 km. Na severnoj strani, planina se prostire 15 km, a
        Drina je sa zapadne i severozapadne strane polukružno okružuje. Najviši
        vrh Gučeva je Crni vrh, koji se uspinje do 779 metara nadmorske visine.
        Ova planina je formirana kroz rasedanje terena, prodor magmatskih stena,
        kao i prisustvo termomineralnih voda, koje koristi Banja Koviljača.
      </p>

      <img src={gucevo2} alt="Gučevo 2" />

      <p>
        Gučevo je šumovita planina prekrivena gustim šumama graba, hrasta,
        bukve, javora i crnog bora. Na ovom području nastanjuju se različite
        vrste divljači, poput zeca, lisice, vuka i srne, dok je prisutno i mnogo
        ptica. Obronci planine su ponekad prekinuti livadama. Jugoistočni deo
        planine, poznat kao Kulište, sastoji se od palezojskih škriljaca, na
        kojima su nastali krečnjaci sa slojevima antimona. Severozapadni deo
        Gučeva formiran je od peščara i konglomerata, a na njima leže krečnjaci,
        sve do samog vrha planine. Mnogi potoci sa Gučeva slivaju se prema Jadru
        i Drini. Planina Gučevo je postala poznata u istoriji nakon Prvog
        svetskog rata, kada su se na njenim padinama odigrali prvi rovovski
        okršaji u svetu.
      </p>

      <img src={gucevo3} alt="Spomen-kosturnica na Gučevu" />

      <p>
        Jedno od značajnih mesta na Gučevu je Spomen-kosturnica, u kojoj su
        sahranjeni posmrtni ostaci srpskih i austrougarskih vojnika, koji su
        poginuli 8. septembra 1914. godine, tokom početka Prvog svetskog rata, u
        Bitki na Drini koja je trajala 55 dana. Austrougarska vojska započela je
        izgradnju Spomen piramide sa kosturnicom na ovom platou tokom rata, ali
        je nije dovršila. Godine 1929, Udruženje rezervnih oficira i ratnika
        prikupilo je 3200 posmrtnih ostataka, koji su pronađeni na Gučevu, i
        smestilo ih u zajedničku kosturnicu. Spomenik je piramidalnog oblika,
        visok 16,85 metara, i sastavljen je od kamenih blokova. Osnova piramide
        je kvadratna, sa ispustima na sve četiri strane, što stvara oblik krsta
        u osnovi spomenika. Na zapadnoj strani piramide postavljen je lovorov
        venac od belog mermera sa krstom u sredini, dok na vrhu piramide stoji
        dvoglavi orao sa raširenim krilima, isklesan od belog mermera.
      </p>

      <img
        src={gucevo4}
        alt="spomenik ruskoj bolničarki Darji Aleksandrovnoj Korobkinoj"
      />

      <p>
        Na planini Gučevo, u blizini Loznice, postavljen je spomenik ruskoj
        bolničarki Darji Aleksandrovnoj Korobkinoj, koja je poginula dok je
        pomagali srpskim vojnicima tokom Prvog svetskog rata. „Ono što danas
        činimo na stotu godišnjicu završetka Prvog svetskog rata predstavlja
        spomenik časti i zahvalnosti Darji Aleksandrovnoj. Na Gučevu svako drvo
        simbolizuje slobodu, svaka bukva izrasla je iz krvi i patnji mnogih duša
        koje je ona svakodnevno lečila, obavezivala i pružala pomoć, i to čak
        sto pedeset puta dnevno“, izjavio je gradonačelnik Loznice.
      </p>

      <img src={gucevo6} alt="Banja Koviljača 2" />
      <p>
        Banja Koviljača smeštena je u zelenilu jednog od najvećih i najlepših
        parkova Srbije, na desnoj obali donjeg toka Drine, u podnožju planine
        Gučevo (779 m). Udaljena je 6 km od Loznice, 80 km od Valjeva i 144 km
        od Beograda. O poreklu Banje Koviljače postoji nekoliko legendi, ali je
        sigurno da su njene mineralne vode bile poznate lokalnom stanovništvu
        još u davnim vremenima. Arheološki nalazi ukazuju na prisustvo Rimljana
        na ovom području, u naselju Genesis, dok ostaci gradskih utvrđenja u
        okolini potvrđuju da su sumporovite vode jezera između podnožja Gučeva i
        Drine bile korišćene i u srednjem veku. Za početak organizovanog razvoja
        Banje Koviljače smatra se 1. avgust 1898. godine, kada je kralj
        Aleksandar I Obrenović izdao ukaz kojim je banja stavljena na
        raspolaganje "narodu okruga podrinjskog". Dalji razvoj Banja Koviljače
        kao prirodnog lečilišta povezivan je sa kraljem Petrom I Karađorđevićem,
        koji je i sam koristio njene usluge. Godine 1904. odlučeno je da se, na
        tadašnjoj austrougarskoj granici, podigne moderna evropska banja. Tada
        je započela intenzivna izgradnja: sagrađena je zgrada Uprave, hotel
        "Podrinje", formiran je novi banjski park sa stazama i alejama, a
        izgrađena je i pruga Šabac - Koviljača.
      </p>

      <img src={gucevo5} alt="Banja Koviljača 2" />
      <p>
        Nakon gotovo 150 godina postojanja, Banja Koviljača danas predstavlja
        jedan od najznačajnijih i najposećenijih balneoloških centara u Srbiji.
        Njena ogromna, zelena površina prostire se na 40 hektara i okružena je
        šumama graba, cera i bukve, koje čine vazduh čistim i osvežavajućim. U
        samom srcu parka nalazi se rondo sa fontanom, od koje se široke staze
        šire u osam pravaca. Stara zdanja vila, hotela i Kursalona, koja je
        prekrila patina vremena, zrače otmenom lepotom i uokviruju ovaj park.
        Ogromne krošnje stoletnih stabala pružaju hladovinu nad prostranim
        šetalistima, dok park krasi čak 80 vrsta drveća i žbunja, kao i 51 vrsta
        cveća, čineći ga pravim draguljem Banje Koviljače. Banja Koviljača, koja
        se smatra jednom od najlepših banja Balkana, smeštena je u zapadnom delu
        Srbije, u okruženju šumovite planine Gučevo i reke Drine, jedne od
        najdužih i vodom najbogatijih reka Balkana. Istorija Banje Koviljače je
        izuzetno bogata i seže još u vreme Ilira, Rimljana i Turaka, pa sve do
        današnjih dana. Tokom 20-ih i 30-ih godina prošlog veka, banja je
        postala ne samo lečilište, već i mondensko odredište. U tom periodu
        izgrađeni su luksuzni hoteli i vile, a park je prelepim stazama povezao
        sve banjske objekte u jednu celinu. Staze za šetanje, zajedno sa
        senovitim trim stazama na planini Gučevo, pružaju poseban ugođaj za sve
        rekreativce. Poseta Banji Koviljači, uz njene prirodne lepote, ostavlja
        bez daha i širi horizonte misli.
      </p>
    </div>
  );
};
