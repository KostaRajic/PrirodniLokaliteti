import skadarlija1 from "../../../assets/images/Beograd/Skadarlija/desktop/skadarllija1.jpg";
import skadarlija2 from "../../../assets/images/Beograd/Skadarlija/desktop/skadarllija2.jpg";
import skadarlija3 from "../../../assets/images/Beograd/Skadarlija/desktop/skadarllija3.jpg";
import skadarlija4 from "../../../assets/images/Beograd/Skadarlija/desktop/skadarllija4.jpg";
import skadarlija5 from "../../../assets/images/Beograd/Skadarlija/desktop/skadarllija5.jpg";
import skadarlija6 from "../../../assets/images/Beograd/Skadarlija/desktop/skadarllija6.jpg";
import skadarlija11 from "../../../assets/images/Beograd/Skadarlija/mobile/skadarllijaM1.jpg";
import skadarlija22 from "../../../assets/images/Beograd/Skadarlija/mobile/skadarllijaM2.jpg";
import skadarlija33 from "../../../assets/images/Beograd/Skadarlija/mobile/skadarllijaM3.jpg";
import skadarlija44 from "../../../assets/images/Beograd/Skadarlija/mobile/skadarllijaM4.jpg";
import skadarlija55 from "../../../assets/images/Beograd/Skadarlija/mobile/skadarllijaM5.jpg";
import skadarlija66 from "../../../assets/images/Beograd/Skadarlija/mobile/skadarllijaM6.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../ScrollToTop";
import { beogradPathRoutes } from "./BeogradPathRoutes";

export const Skadarlija = () => {
  const navigate = useNavigate();

  return (
    <div className="placeBackground">
      <ScrollToTop />
      <FaArrowLeft className="arrowLeft" onClick={() => navigate(beogradPathRoutes.home)} style={{fill: 'white'}}/>
      <header></header>
      <img srcSet={`${skadarlija11} 400w, ${skadarlija1} `} alt="Sakadrlija 1" />

      <h2 style={{color: 'white'}}>Skadarlija</h2>

      <p>
        Skadarlija se danas u turističkim vodičima često opisuje kao boemska
        četvrt Beograda, koja je nekada bila omiljeno okupljalište najpoznatijih
        srpskih pisaca, glumaca, slikara i svih onih koji su uživali u
        nekonvencionalnim društvenim susretima. Danas je, međutim, poznata i po
        restoranima koji nude vrhunske specijalitete. Istorija Skadarlije, koja
        se često spominje u turističkim brošurama i vodičima, počinje u prvim
        decenijama prošlog veka, kada je, usled izgradnje zgrade Uprave fondova,
        na mestu gde je ranije bila kafana „Dardaneli“ koja je stajala preko
        puta Narodnog pozorišta, srušen jedan od najomiljenijih beogradskih
        lokala. Posetioci ove kafane, među kojima su bili glumci, književnici,
        pevači i novinari, s tugom su gledali nestanak ovog kultnog mesta, a
        svoju novu boemsku oazu pronašli su u Skadarskoj ulici, koja im je
        delovala kao deo Beograda sa dušom koja se nije penjala u visine.
      </p>

      <img srcSet={`${skadarlija66} 400w, ${skadarlija6} `} alt="Sakadrlija 2" />

      <p>
        Prema podacima iz 1901. godine, Skadarlija je sve do sredine 19. veka
        bila gotovo nenaseljena periferija Beograda, smeštena između „varoši u
        šancu“ i naselja Palilula. Za razliku od područja uz reku Savi, koje je
        bilo izvan šanca, ovaj deo grada prema Paliluli počeo je da se naseljava
        spontano. Šanac, koji je prethodno delio grad od okolnih područja,
        vremenom je nestao, jer nije bio održavan, a meštani su ga zatrpavali i
        prilagođavali prema svojim potrebama. Prvi stanovnici Skadarlije
        pojavljuju se oko 1825. godine, a prvi koji su tu počeli da grade svoje
        kuće bili su Romi, zbog čega je ovaj deo grada u početku bio poznat pod
        imenom Šićan-mala, što je značilo ciganska mahala.
      </p>

      <img srcSet={`${skadarlija33} 400w, ${skadarlija3} `} alt="Sakadrlija 3" />

      <p>
        Samo polovinom 19. veka počelo je podizanje kvalitetnijih kuća u
        Skadarliji, čime je ovaj deo grada dobio urbani karakter. Počele su da
        se grade i više spratne zgrade, ali se taj trend usporio početkom Prvog
        svetskog rata, a usled određenih okolnosti, Skadarlija je zadržala
        pretežno prizemnu gradnju. Među najstarijim očuvanim zgradama u ovom
        delu grada je "Štihina kuća", koja je prilikom jedne rekonstrukcije
        povezana sa kafanom „Tri šešira“. Kuća je dobila ime po vlasniku Vladanu
        Štihi, a sagrađena je pre 1878. godine. Kafana „Tri šešira“ otvorena je
        1864. godine, a pre nego što je postala kafana, u tom prostoru je bila
        radionica za izradu šešira majstora Dimovića. Radionica je umesto
        natpisa na ulazu imala tri plehana šešira okačena, pa je tako i dobila
        ime koje je kafana zadržala.
      </p>

      <img srcSet={`${skadarlija44} 400w, ${skadarlija4} `} alt="Sakadrlija 4" />

      <p>
        Skadarliju su naseljavali različiti zanatlije, trgovci i ugostitelji, a
        mnogi su zarađivali izdajući stanove. U podacima o Skadarliji iz 19.
        veka spominje se otvoreni kanal koji je kroz njenu sredinu prolazio i
        tokom jačih kiša pretvarao se u buran vodotok. Ovaj kanal je
        predstavljao granicu između dorćolskog i palilulskog dela grada. Leva
        strana, na kojoj se nalazila kafana „Tri šešira“, pripadala je Dorćolu,
        dok je desna, sa kafanom „Dva jelena“, bila deo Palilule. Kafana „Dva
        jelena“ otvorena je oko 1862. godine. Skadarlija je prvi put ucrtana na
        planu grada 1854. godine, a 1867. godine nalazi se i na planu urbaniste
        Emilijana Josimovića. Zvanično ime Skadarska ulica, ovaj prostor je
        dobio sredinom 1872. godine, dok je tokom austrougarske okupacije kratko
        nosio naziv Ružina ulica. U nekim starim kućama koje i danas postoje,
        poput one u broju 36, gde se nalazi restoran „Ima dana“, kao i u kući
        Katarine Hristodulo na broju 27, živela su najpoznatija imena srpske
        glume i umetnosti sa kraja 19. i početka 20. veka.
      </p>

      <img
        srcSet={`${skadarlija55} 400w, ${skadarlija5} `}
        alt="Sakadrlija 5"
      />
      <p>
        Šetnja Skadarlijom je pravo putovanje kroz vreme, u jednom od najlepših
        i najboemskih delova Beograda. Kamenim ulicama, okruženim starim kućama,
        restoranima i kafanama, možete osetiti duh prošlih vremena, kada su se u
        ovom kvartu okupljali najpoznatiji umetnici, pisci i glumci. Iako je
        Skadarlija danas prepoznatljiv turistički centar, njen šarm nije
        umanjila ni moderna vremena. Šetajući kroz ovu šarmantnu ulicu, možete
        uživati u autentičnom ambijentu – drvenim terasama kafana, starinskim
        fasadama, i zidovima koji „pričaju“ priče o prošlim decenijama. Pored
        uživanja u arhitekturi, možete posetiti galerije i prodavnice suvenira,
        a na svakom koraku naići na umetničke instalacije ili predmete koji
        podsećaju na prošla vremena. Ponekad vas put može odvesti i do mirnijih
        delova Skadarlije, gde tišina nudi povremeni predah, ali uvek uz miris
        tradicionalne hrane koja dolazi iz kafana i restorana. Šetnja ovim
        krajem pruža iskustvo koje spaja istoriju, kulturu i boemski život, što
        je čini nezaboravnim delom Beograda.
      </p>

      <img
        srcSet={`${skadarlija22} 400w, ${skadarlija2} `}
        alt="Sakadrlija 5"
      />
      <p>
        Kafane i restorani Skadarlije oduvek su bili srce boemskog života
        Beograda, mesta gde su se sreli umetnici, intelektualci, pisci, glumci i
        pesnici. Ova ugostiteljska mesta nisu bila samo prostori za jelo i piće,
        već su bila i centar kulturnih događanja, neformalnih druženja i razmene
        ideja. Kafane su tokom istorije postale utočišta za one koji su tražili
        inspiraciju, umetnost i društvo, a mnogi su ih doživljavali kao drugi
        dom. Ambijent ovih kafana i restorana često je bio karakterističan, sa
        tradicionalnim enterijerima, drvenim stolovima, starinskim nameštajem i
        dimnjacima, koji su doprinosili posebnoj atmosferi. U njihovim zidovima
        odzvanjali su razgovori o književnosti, pozorištu i umetnosti, dok su se
        istovremeno odvijali spontani nastupi, čitanja poezije i pesme, koji su
        obeležavali duh tog vremena. Danas, ove kafane i restorani još uvek
        privlače posetioce, kako turiste, tako i lokalne stanovnike, nudeći im
        autentičan doživljaj srpske tradicije, uz vrhunske specijalitete i
        prijatnu atmosferu. Bez obzira na to što su se u nekim slučajevima
        promenili kroz decenije, ovi prostori i dalje nose pečat prošlih vremena
        i boemskog života, čineći ih nezaobilaznim delom beogradske kulture.
      </p>
    </div>
  );
};
