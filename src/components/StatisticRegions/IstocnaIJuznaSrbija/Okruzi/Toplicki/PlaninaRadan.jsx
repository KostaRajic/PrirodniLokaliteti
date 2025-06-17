import planinaRadan1 from "../../../../../assets/images/JuznaIIstocnaSrbija/ToplickiOkrug/PlaninaRadan/desktop/planinaRadan1.jpg";
import planinaRadan2 from "../../../../../assets/images/JuznaIIstocnaSrbija/ToplickiOkrug/PlaninaRadan/desktop/planinaRadan2.jpg";
import planinaRadan3 from "../../../../../assets/images/JuznaIIstocnaSrbija/ToplickiOkrug/PlaninaRadan/desktop/planinaRadan3.jpg";
import planinaRadan4 from "../../../../../assets/images/JuznaIIstocnaSrbija/ToplickiOkrug/PlaninaRadan/desktop/planinaRadan4.jpg";
import planinaRadan5 from "../../../../../assets/images/JuznaIIstocnaSrbija/ToplickiOkrug/PlaninaRadan/desktop/planinaRadan5.jpg";
import planinaRadan11 from "../../../../../assets/images/JuznaIIstocnaSrbija/ToplickiOkrug/PlaninaRadan/mobile/planinaRadanM1.jpg";
import planinaRadan22 from "../../../../../assets/images/JuznaIIstocnaSrbija/ToplickiOkrug/PlaninaRadan/mobile/planinaRadanM2.jpg";
import planinaRadan33 from "../../../../../assets/images/JuznaIIstocnaSrbija/ToplickiOkrug/PlaninaRadan/mobile/planinaRadanM3.jpg";
import planinaRadan44 from "../../../../../assets/images/JuznaIIstocnaSrbija/ToplickiOkrug/PlaninaRadan/mobile/planinaRadanM4.jpg";
import planinaRadan55 from "../../../../../assets/images/JuznaIIstocnaSrbija/ToplickiOkrug/PlaninaRadan/mobile/planinaRadanM5.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { toplickiOkurgPathRoutes } from "./ToplickiOkurgPathRoutes";

export const PlaninaRadan = () => {
  const navigate = useNavigate();

  return (
    <div className="placeBackground">
      <ScrollToTop />
      <FaArrowLeft className="arrowLeft" onClick={() => navigate(toplickiOkurgPathRoutes.home)} />
      <header></header>
      <img srcSet={`${planinaRadan11} 400w, ${planinaRadan1} `} alt="Planina Radan 1" />

      <h2>Planina Radan</h2>

      <p style={{ paddingTop: "50px" }}>
        Radan planina se nalazi na mestu gde se Vardarska zona susreće sa
        Srpsko-makedonskom masom, što je značajno za raznovrsnost njenog
        reljefa, složenost geološkog sastava i tektonske odnose. Nastala je
        rasedanjima, pripada velikim planinama Srpsko-makedonske mase i
        sastavljena je od magmatskih stena, pre svega andezita i vulkanogenih
        sedimenata. Nalazi se jugoistočno od Kuršumlije, zapadno od Lebana i
        Leskovca, a južno od Prokuplja.
      </p>

      <img srcSet={`${planinaRadan22} 400w, ${planinaRadan2} `} alt="Planina Radan 2" />
      <p>
        Razlikujemo Radan planinu u užem i širem smislu. Radan planinu u užem
        smislu čine Majdan planina, Ravna planina i Petrova gora. Pod Radan
        planinom u širem smislu podrazumevamo i Sokolovicu, Prolomsku planinu i
        Arbanaska planinu. Severozapadno od Prolom banje, u pravcu Kuršumlije,
        prostire se Sokolovica sa najvišim vrhom Radulovac (1050 m). Prolomsku
        planinu (Sokolov vis 1370 m) sa severa graniči dolina Prolomske reke,
        dok prevoj Gajtanska vrata deli Prolomsku planinu od Radana. Južno od
        sela Arbanaska, istočno od Prolom banje i severno od Radan planine
        nalazi se Arbanaska planina (Vijogor 1128 m).
      </p>

      <img srcSet={`${planinaRadan33} 400w, ${planinaRadan3} `} alt="Planina Radan 3" />

      <p>
        Prominencija Arbanaške planine (Vijogor 1128 m) u odnosu na matičnu
        Radan planinu iznosi samo 78 metara. Prominencija Prolomske planine
        (Sokolov vis 1370 m) u odnosu na Radan je 200 metara. Sokolovica
        (Radulovac 1050 m) je prema Radanu (Arbanaškoj planini kao delu Radana)
        prominentna samo 170 m. Ravnu planinu (1258 m) sa prominencijom od 28
        metara svakako smatramo delom Radana. Isto važi i za Majdan planinu
        (Vratnica Jokočića 1096 m), ovaj deo Radana ima prominenciju od samo 16
        m. Sve ovo nam govori da je u pitanju planina sa složenom morfologijom.
      </p>

      <img srcSet={`${planinaRadan44} 400w, ${planinaRadan4} `} alt="Planina Radan 4" />

      <p>
        Prostor Radan planine se prostire u južnoj Srbiji, obuhvatajući opštine
        Lebane, Bujnik, Medveđa, Kuršumlija i Prokuplje. Geografski pripada
        širem području južnog Pomoravlja. Planina pokriva gornje delove slivova
        reka Toplice, Puste reke i Jablanice, a njen pravac je izdžen SZO-JI.
      </p>

      <img srcSet={`${planinaRadan55} 400w, ${planinaRadan5} `} alt="Vodopad Soko Planina Radan" />

      <p>
        Vodopad Soko je udaljen svega par kilometara od Prolom Banje. Od puta od
        banje ka crkvi Lazarici i selu Dobra Voda udaljen je svega 650m, a do
        vodopada vodi prelepa i dobro obeležena šumska staza uz reku. Reka se na
        putu do vodopada prelazi nekoliko puta pa je preporuka krenuti u
        nepromočivoj obući. Kako se do vodopada brzo i lako stiže, sve više
        turista prilikom posete Prolom Banje i Topličkog kraja obiđu i ovu
        skrivenu lepotu Radan planine.
      </p>
    </div>
  );
};
