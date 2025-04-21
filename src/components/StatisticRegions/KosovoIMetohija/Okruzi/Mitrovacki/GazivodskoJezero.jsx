import gazivode1 from "../../../../../assets/images/KosovoIMetohija/Mitrovacki/GazivodskoJezero/gazivodskoJezero1.jpg";
import gazivode2 from "../../../../../assets/images/KosovoIMetohija/Mitrovacki/GazivodskoJezero/gazivodskoJezero2.jpg";
import gazivode3 from "../../../../../assets/images/KosovoIMetohija/Mitrovacki/GazivodskoJezero/gazivodskoJezero3.jpg";
import gazivode4 from "../../../../../assets/images/KosovoIMetohija/Mitrovacki/GazivodskoJezero/gazivodskoJezero4.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { mitrovackiOkrugPathRoutes } from "./MitrovackiOkrugPathRoutes";

export const GazivodskoJezero = () => {
  const navigate = useNavigate();

  return (
    <div className="placeBackground">
      <ScrollToTop />
      <FaArrowLeft className="arrowLeft" onClick={() => navigate(mitrovackiOkrugPathRoutes.home)} style={{fill: "white"}} />
      <header></header>
      <img src={gazivode1} alt="Gazivodsko Jezero 1" />

      <h2>Gazivodsko Jezero</h2>

      <p style={{ paddingTop: "50px" }}>
        Gazivode je veštačko jezero u Srbiji. Nastalo je 1977. godine
        pregradnjom reke Ibri u njenom gornjem toku na severu Kosova i Metohije.
        Poznata je turistička destinacija, a najveći broj posetilaca dolazi
        tokom plivanja za Bogojavljenski krst.
      </p>

      <img src={gazivode2} alt="Gazivodsko Jezero 2" />

      <p>
        Beogradska firma Hidrotehnika-Hidroenergetika je od 1973. do 1977.
        godine, u ataru sela Gazivode, izgradila jednu od najvećih brana sa
        glinenom osnovom u Evropi, prema projektu firme "Energoprojekt" iz
        Beograda. Istoimeno jezero se nalazi u opštini Tutin, u jugozapadnoj
        Srbiji, kao i u opštini Zubin Potok, na severu Kosova i Metohije. Iznad
        jezera prostiru se planine Mokra gora, u čijem se podnožju nalaze
        manastiri Crna Reka i Rogozna. Jezero je dugačko 24 kilometra, visina
        brane iznosi 107 metara, dok je u osnovi široka 460, a duga 408 metara.
        Glavna namena ovog jezera je navodnjavanje Kosovske nizije, ali ima i
        manju hidroelektranu koja se nalazi u istoimenom naselju.
      </p>

      <img src={gazivode3} alt="Gazivodsko Jezero 3" />

      <p>
        Kanali preusmeravaju vodu iz Gazivoda do Gračaničkog jezera, koja se
        koristi za snabdevanje grada Prištine. Voda iz ovog hidrosistema takođe
        se koristi za neophodno hlađenje u TE Obilić. Most preko jezera izgrađen
        je u periodu od 1987. do 1989. godine.
        <br />
        <br />
        Iako uz jezero nema ugostiteljskih objekata, veliki broj ljudi posećuje
        ovo jezero. Tokom cele godine prisutan je veliki broj ribara, jer je
        jezero izuzetno bogato ribom. Leta, jezero posećuju i kupači iz
        obližnjih sela, Zubinog Potoka, Kosovske Mitrovice, Novog Pazara, pa čak
        i iz udaljenijih delova Kosova i Metohije.
      </p>

      <img src={gazivode4} alt="Gazivodsko Jezero 4" />

      <p>
        Tokom 2017. i 2018. godine, međunarodni tim arheologa i naučnika
        sprovedio je niz podvodnih istraživanja. Otkrili su više spomenika
        srednjovekovne srpske kulture na dnu jezera Gazivode. Najvažniji među
        njima su: ostaci palate srpske srednjovekovne kraljice Jelene Anžujske,
        ostaci manastira Čkilje, zvonik iz 13. veka, dve srednjovekovne crkve,
        devet rimskih nekropola.
        <br />
        <br />
        Među podvodnim otkrićima nalaze se i ostaci škole za dame, kao i delovi
        dvorca u potopljenom selu Brnjaci, odakle je Jelena Anžujska upravljala
        teritorijama tadašnje Zete, Trebinja, Plava i Pojibarja.
      </p>
    </div>
  );
};
