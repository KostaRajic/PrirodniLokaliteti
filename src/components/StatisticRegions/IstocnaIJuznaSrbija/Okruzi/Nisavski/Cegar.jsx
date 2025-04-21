import cegar1 from "../../../../../assets/images/JuznaIIstocnaSrbija/NisavskiOkrug/Cegar/cegar1.jpg";
import cegar2 from "../../../../../assets/images/JuznaIIstocnaSrbija/NisavskiOkrug/Cegar/cegar2.jpg";
import cegar3 from "../../../../../assets/images/JuznaIIstocnaSrbija/NisavskiOkrug/Cegar/cegar3.jpg";
import cegar4 from "../../../../../assets/images/JuznaIIstocnaSrbija/NisavskiOkrug/Cegar/cegar4.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { nisavskiOkrugPathRoutes } from "./NisavskiOkrugPathRoutes";

export const Cegar = () => {
  const navigate = useNavigate();

  return (
    <div className="placeBackground">
      <ScrollToTop />
      <FaArrowLeft className="arrowLeft" onClick={() => navigate(nisavskiOkrugPathRoutes.home)} />
      <header></header>
      <img src={cegar1} alt="Čergar 1" />

      <h2>Čergar</h2>

      <p style={{ paddingTop: "50px" }}>
        Spomenik na brdu Čegar, u blizini Niša, podignut je na mestu gde se
        odigrala čuvena bitka iz Prvog srpskog ustanka, u znak sećanja na
        poginule vojnike i njihovog komandanta Stevana Sinđelića. Spomenik na
        Čegaru predstavlja nepokretno kulturno dobro kao značajno istorijsko
        mesto od izuzetnog značaja.
        <br />
        <br />
        Današnji spomenik, u obliku kule – simbola srpskog vojnog logora,
        podignut je povodom pedesetogodišnjice oslobođenja Niša od Osmanlijskog
        carstva, 1. juna 1927. godine. Prvobitni spomenik je ostao u niši novog,
        iznad kojeg je 1928. godine postavljeno bronzano poprsje Stevana
        Sinđelića, rad vajara Slavka Miletića.
      </p>

      <img src={cegar2} alt="Čergar 2" />

      <p>
        Nedaleko od sela Kameniца, severoistočno od Niša, nalazi se uzvišenje
        Čegar, poznato istorijsko mesto zbog bitke koja se odigrala tokom Prvog
        srpskog ustanka. Na platou ovog uzvišenja, gde je bio šanareski logor
        resavskog vojvode Stevana Sinđelića, 31. maja 1809. godine, odigrala se
        čuvena Čegarska bitka. Komandant srpskih ustaničkih snaga na Čegaru,
        Stevan Sinđelić, tada je izveo herojsku akciju. Pucanjem u barutanu,
        kada je većina srpskih branilaca bila poginula, pokušao je da zaustavi
        prodor Turaka koji su stalno napredovali. Nakon bitke, srpski branitelji
        su pretrpeli gubitke od 4.000 vojnika, dok su brojčano nadmoćniji turski
        odredi imali gubitke od čak 16.000 vojnika. Zbog toga je turski paša, u
        znak odmazde, iste godine naredio izgradnju Ćele kule od glava poginulih
        Srba na Čegaru, na ulazu u Niš.
      </p>

      <img src={cegar3} alt="Bitka na Čergru" />

      <p>
        Spomenik je izgrađen prema projektu ruskog arhitekte, emigranta Julijana
        Lj. Djupona. Arhitektura spomenika karakteristična je za period između
        dva svetska rata, kada su često spajani elementi romantizma sa
        dekorativnim osobinama nacionalne srednjovekovne arhitekture. Kula
        kvadratne osnove postavljena je na postament sa blagim kosim ivicama.
        Završni kubus na osmostranom tamburu predstavlja logičan završetak
        kompozicije. Dekoracija je bogata, ali nije preterana. Fasada kule, sa
        otvorima i kružnim rozorama, izvedena je u alternaciji opeke i maltera,
        dok je donji deo, sa pristupnim stepeništem, napravljen od kamena sa
        Niške tvrđave, tačnije sa Vinik kapije, koju je vojska 1927. godine
        srušila prilikom uvođenja železničke pruge.
        <br />
        <br />
        Bista Stevana Sinđelića postavljena je naknadno, umesto bareljefa sa
        njegovim likom, iznad kojeg je bila figura orla. Bista je delo niškog
        vajara hrvatskog porekla, Slavka Miletića.
      </p>

      <img src={cegar4} alt="Bitka na Čergru - spomenik" />

      <p>
        Osim što je služio za veličanje podviga nacionalnog heroja, spomenik je
        imao i snažan nacionalno-dinastički karakter, jer je povezivao herojske
        podvige vojvode Stevana Sinđelića sa činovima osvajanja Niša pod
        vladavinom kneza Milana Obrenovića.
      </p>
    </div>
  );
};
