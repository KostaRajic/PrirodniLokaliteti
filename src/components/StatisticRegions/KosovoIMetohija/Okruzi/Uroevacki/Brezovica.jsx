import brezovica1 from "../../../../../assets/images/KosovoIMetohija/Urosevacki/Brezovica/brezovica1.jpg";
import brezovica2 from "../../../../../assets/images/KosovoIMetohija/Urosevacki/Brezovica/brezovica2.jpg";
import brezovica3 from "../../../../../assets/images/KosovoIMetohija/Urosevacki/Brezovica/brezovica3.jpg";
import brezovica4 from "../../../../../assets/images/KosovoIMetohija/Urosevacki/Brezovica/brezovica4.jpg";
import brezovica5 from "../../../../../assets/images/KosovoIMetohija/Urosevacki/Brezovica/brezovica5.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { urosevackiOkrugPathRoutes } from "./UrosevackiOkrugPathRoutes";

export const Brezovica = () => {
  const navigate = useNavigate();

  return (
    <div className="placeBackground">
      <ScrollToTop />
      <FaArrowLeft className="arrowLeft" onClick={() => navigate(urosevackiOkrugPathRoutes.home)} />
      <header></header>
      <img src={brezovica1} alt="Ski centar Brezovica 1" />

      <h2>Ski centar Brezovica</h2>

      <p style={{ paddingTop: "50px" }}>
        Ski centar Brezovica je poznata destinacija koja se nalazi na
        severozapadnoj strani planine Šara, u opštini Štrpce. Ovaj jedinstveni
        sportsko-rekreativni kompleks prostire se na nadmorskoj visini od 900 do
        2.500 metara. Udaljen je oko 60 km od Prištine i isto toliko od
        aerodroma u Skoplju. Takođe, od Soluna je 303 km, od Sofije (preko Niša)
        oko 355 km, a od Beograda 400 km. Sa svojom alpskom prirodom i
        visokoplaninskim pejzažima, Brezovica podseća na najpoznatije ski centre
        u Evropi, pružajući posetiocima izuzetno iskustvo na stazi i u prirodi.
      </p>

      <img src={brezovica2} alt="Ski centar Brezovica 2" />

      <p>
        Stoletne šume, prelepe livade i prostrani pašnjaci bogati su planinskim
        cvećem, lekovitim biljem i retkim vrstama divljači. Zbog visoke količine
        padavina i vododržljivih stena, u ovom području razvila se gusta rečna
        mreža, a brojni izvori i površinske vode čine ga izuzetno bogatim.
        Brojni izvori i potočići sa hladnom i kristalno čistom vodom dodaju
        posebnu lepotu i šarm ovom prirodnom okruženju.
      </p>

      <img src={brezovica3} alt="Ski centar Brezovica 3" />

      <p>
        Niži delovi ovog regiona karakterišu se župskom klimom, sa prijatnim
        dnevnim temperaturama i osvežavajućim noćima. Na višim delovima
        preovladava alpska klima, pa se sneg zadržava čak i do 280 dana u
        godini. Zanimljivo je da je moguće doživeti sva četiri godišnja doba u
        samo jednom danu, a čak i tokom letnjih meseci, u julu i avgustu,
        najviši delovi planine Šara mogu biti prekriveni snegom. Ovi povoljni
        klimatski uslovi čine područje savršenim za zimski turizam, sport i
        rekreaciju, pa je centar popularan među posetiocima tokom cele godine.
      </p>

      <img src={brezovica4} alt="Ski centar Brezovica 4" />

      <p>
        Tokom leta, posetioci Brezovice uživaju u neposrednom kontaktu sa
        prirodom kroz različite aktivnosti poput planinarenja, rekreacije,
        izleta, lova i ribolova, a imaju priliku i da istraže mnoge
        kulturno-istorijske spomenike ovog kraja. Turistički centar Brezovica je
        otvoren tokom čitave godine i pruža mogućnosti za organizovanje
        seminara, simpozijuma, kongresa i naučnih skupova.
      </p>

      <img src={brezovica5} alt="Ski centar Brezovica 5" />

      <p>
        Ski centar Brezovica je domaćin dva evropska prvenstva u alpskom
        skijanju, kao i devet državnih prvenstava. Svake godine (do 1999) bila
        je uključena trka u spustu i veleslalomu za muškarce, poznata kao "Inex
        - ski kup", koja je bila deo FIS kalendara. Na godišnjem nivou, Ski
        centar Brezovica beleži više od 103.000 noćenja u svim svojim objektima,
        dok se dodatnih 13.000 noćenja ostvaruje u drugim iznajmljenim
        objektima, među kojima se izdvaja "Dom penzionera", danas poznat kao
        hotel "Junior" na Brezovici.
      </p>
    </div>
  );
};
