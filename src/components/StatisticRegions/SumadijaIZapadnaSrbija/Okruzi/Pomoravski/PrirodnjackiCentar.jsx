import prirodnjackiCentar1 from "../../../../../assets/images/SumadijaIZapadnaSrbija/PomoravskiOkrug/PrirodnjackiCentar/prirodnjackiCentar1.jpg";
import prirodnjackiCentar2 from "../../../../../assets/images/SumadijaIZapadnaSrbija/PomoravskiOkrug/PrirodnjackiCentar/prirodnjackiCentar2.jpg";
import prirodnjackiCentar3 from "../../../../../assets/images/SumadijaIZapadnaSrbija/PomoravskiOkrug/PrirodnjackiCentar/prirodnjackiCentar3.jpg";
import prirodnjackiCentar4 from "../../../../../assets/images/SumadijaIZapadnaSrbija/PomoravskiOkrug/PrirodnjackiCentar/prirodnjackiCentar4.jpg";
import prirodnjackiCentar5 from "../../../../../assets/images/SumadijaIZapadnaSrbija/PomoravskiOkrug/PrirodnjackiCentar/prirodnjackiCentar5.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { pomoravskiOkrugPathRoutes } from "./PomoravskiOkrugPathRoutes";

export const PrirodnjackiCentar = () => {
  const navigate = useNavigate();

  return (
    <div className="placeBackground">
      <ScrollToTop />
      <FaArrowLeft
        className="arrowLeft"
        onClick={() => navigate(pomoravskiOkrugPathRoutes.home)}
        style={{ fill: "white" }}
      />
      <header></header>
      <img src={prirodnjackiCentar1} alt="Prirodnjački Centar u Svilajncu 1" />

      <h2 style={{ color: "white" }}>Prirodnjački Centar u Svilajncu</h2>

      <p style={{ paddingTop: "50px" }}>
        Prirodnjački centar u Svilajncu je savršeno odredište za ugodno i
        zabavno popodne sa porodicom, nudeći sjajan spoj obrazovanja, nauke,
        zabave i turizma. Ovaj jedinstveni kompleks obuhvata prostrani izložbeni
        prostor sa devet stalnih postavki koje pokrivaju razne teme iz prirodnih
        nauka, kao i zabavni Dino park na otvorenom, u kojem se nalazi više od
        30 replika dinosaurusa u prirodnoj veličini.
      </p>

      <img src={prirodnjackiCentar2} alt="Prirodnjački Centar u Svilajncu 2" />

      <p>
        Osim već pomenutih, Prirodnjački centar nudi i razgledanje postavki kao
        što su Svet minerala i stena, Geološki vremeplov, Biodiverzitet i
        Geodiverzitet Srbije, Vulkan i Nebesko kamenje. Među najzanimljivijim
        postavkama, pored one koja se bavi životom i izumiranjem dinosaurusa,
        izdvaja se i postavka Mamut "Kika", koja privlači posebnu pažnju
        posetilaca.
      </p>

      <img src={prirodnjackiCentar3} alt="Prirodnjački Centar u Svilajncu 3" />

      <p>
        Izložba "Svet dinosaurusa" izaziva najveće interesovanje, naročito među
        najmlađim posetiocima, jer su u posebnom delu Prirodnjačkog centra
        postavljene replike dinosaurusa u prirodnoj veličini. Najveći deo centra
        zauzima Dino park, koji se prostire na tri hektara i sadrži tridesetak
        replika dinosaurusa u prirodnoj veličini. Pored toga, tu su suvenirnica,
        igraonica i maketa vulkana, čineći ovu lokaciju savršenim mestom za
        porodice.
      </p>

      <img src={prirodnjackiCentar4} alt="Prirodnjački Centar u Svilajncu 4" />

      <p>
        Ova jedinstvena institucija zapošljava veliki broj ljudi koji se
        svakodnevno brinu o održavanju objekta, kao i stručnog osoblja,
        uključujući vodiče za posetioce svih uzrasta, ali i pedagoge koji rade
        sa decom u igraonici.
      </p>

      <img src={prirodnjackiCentar5} alt="Prirodnjački Centar u Svilajncu 5" />

      <p>
        Prirodnjački centar je otvoren svaki dan, uključujući vikende i
        praznike, obično od 10 do 18 časova, dok tokom letnjih meseci, u julu i
        avgustu, radno vreme traje do 20 časova. Centar se nalazi na svega 7 km
        od auto-puta (E75), uz regionalni put Markovac-Svilajnac-Despotovac, u
        neposrednoj blizini kompleksa Sportskog-turističkog centra.
      </p>
    </div>
  );
};
