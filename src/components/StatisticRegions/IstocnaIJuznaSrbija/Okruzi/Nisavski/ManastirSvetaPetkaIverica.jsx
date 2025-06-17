import svetaPetkaIverica1 from "../../../../../assets/images/JuznaIIstocnaSrbija/NisavskiOkrug/ManastirSvetkaPetkaIverica/desktop/manastirSvetaPetkaIverica1.jpg";
import svetaPetkaIverica2 from "../../../../../assets/images/JuznaIIstocnaSrbija/NisavskiOkrug/ManastirSvetkaPetkaIverica/desktop/manastirSvetaPetkaIverica2.jpg";
import svetaPetkaIverica3 from "../../../../../assets/images/JuznaIIstocnaSrbija/NisavskiOkrug/ManastirSvetkaPetkaIverica/desktop/manastirSvetaPetkaIverica3.jpg";
import svetaPetkaIverica4 from "../../../../../assets/images/JuznaIIstocnaSrbija/NisavskiOkrug/ManastirSvetkaPetkaIverica/desktop/manastirSvetaPetkaIverica4.jpg";
import svetaPetkaIverica11 from "../../../../../assets/images/JuznaIIstocnaSrbija/NisavskiOkrug/ManastirSvetkaPetkaIverica/mobile/manastirSvetaPetkaIvericaM1.jpg";
import svetaPetkaIverica22 from "../../../../../assets/images/JuznaIIstocnaSrbija/NisavskiOkrug/ManastirSvetkaPetkaIverica/mobile/manastirSvetaPetkaIvericaM2.jpg";
import svetaPetkaIverica33 from "../../../../../assets/images/JuznaIIstocnaSrbija/NisavskiOkrug/ManastirSvetkaPetkaIverica/mobile/manastirSvetaPetkaIvericaM3.jpg";
import svetaPetkaIverica44 from "../../../../../assets/images/JuznaIIstocnaSrbija/NisavskiOkrug/ManastirSvetkaPetkaIverica/mobile/manastirSvetaPetkaIvericaM4.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { nisavskiOkrugPathRoutes } from "./NisavskiOkrugPathRoutes";

export const ManastirSvetaPetkaIverica = () => {
  const navigate = useNavigate();

  return (
    <div className="placeBackground">
      <ScrollToTop />
      <FaArrowLeft className="arrowLeft" onClick={() => navigate(nisavskiOkrugPathRoutes.home)} />
      <header></header>
      <img srcSet={`${svetaPetkaIverica11} 400w, ${svetaPetkaIverica1} `} alt="Manastir Sveta Petka Iverica 1" />

      <h2>Manastir Sveta Petka Iverica</h2>

      <p style={{ paddingTop: "50px" }}>
        Manastir se nalazi u Sićevačkoj klisuri, na putu Niš-Sofija. Osnovali su
        ga monasi iz gruzijskog manastira Iviriona sa Svete Gore, zbog čega nosi
        ime Iverica. Tokom XIV veka, mnogi monasi su, bežeći od osmanske
        invazije, pronašli utočište u ovoj prelepoj klisuri, gde su formirali
        monašku zajednicu kojoj je pripadao i ovaj manastir. Crkva manastira
        izgrađena je u srpsko-vizantijskom stilu, a njen osnovni oblik je
        jednobrodna građevina sa polukružnom oltarskom apsidom.
      </p>

      <img srcSet={`${svetaPetkaIverica22} 400w, ${svetaPetkaIverica2} `} alt="Manastir Sveta Petka Iverica 2" />
      <p>
        Za crkvu Svete Petke vezane su mnoge zanimljive priče. 1896. godine, dok
        je inženjerska jedinica srpske vojske radila na izgradnji pruge i
        probijanju puta kroz Sićevačku klisuru, stigla je vest da je kralj
        Aleksandar I Obrenović jedva izbegao smrt u Francuskoj. Kao znak
        zahvalnosti Bogu za čudesno spasenje kralja, vojska je odlučila da na
        tom mestu podigne manastir.
      </p>

      <div
        className="flexColumn"
        style={{ display: "flex", paddingBottom: "20px" }}
      >
        <img
          srcSet={`${svetaPetkaIverica33} 400w, ${svetaPetkaIverica3} `}
          alt="Manastir Sveta Petka Iverica 3"
          className="fruskaGoraClassImg"
        />

        <p className="fruskaGoraParagh">
          Na portalu crkve i danas se nalazi tabla sa natpisom: „U slavu srećnog
          spasenja vrhovnog komandanta Kraljevske srpske vojske, njegovog
          veličanstva Kralja Aleksandra, ovaj hram je iz temelja obnovljen, u
          zahvalnosti Svemogućem što je sačuvao dragoceni život našeg uzvišenog
          gospodara Srbije, kao i u znak dubokih osećanja prema njegovoj časnoj
          ličnosti. Potpisuju oficiri i vojnici inženjerijskih trupa.”
        </p>
      </div>

      <p>
        Pretpostavlja se da je crkva nastala u vreme Uroša Nejakog, iako njen
        tačan nastanak još uvek nije potpuno istražen. U tom periodu, Sićevačka
        klisura je bila utočište monasima koji su bežali od Osmanlijskog
        carstva, a dolazili su sa Balkana, sa Svete Gore i iz manastira
        Iviriona. Zbog toga je naziv Iverica dodat manastiru, jer se smatra da
        su ga osnovali monasi iz gruzijskog manastira. Turski popis sa kraja 16.
        veka pokazuje da je manastir tada bio u dobrom imovinskom stanju.
        Manastirski kompleks nalazi se na ulazu u Gradištanski kanjon.
      </p>

      <img srcSet={`${svetaPetkaIverica44} 400w, ${svetaPetkaIverica4} `} alt="Manastir Sveta Petka Iverica 4" />

      <p>
        Ukazom kralja Aleksandra I Obrenovića od 19. februara 1901. godine, za
        starešinu manastira postavljen je vojni sveštenik. Nekoliko godina
        kasnije, manastir je dobio naziv „Kraljevski srpski vojni manastir Sv.
        Petka Iverica“. U istoriji srpske pravoslavne crkve, ovaj manastir je
        jedinstven primer „vojnog manastira“.
      </p>
    </div>
  );
};
