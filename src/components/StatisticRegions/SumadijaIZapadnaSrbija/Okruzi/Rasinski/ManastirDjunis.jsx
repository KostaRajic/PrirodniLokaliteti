import djunis1 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RasinskiOrkug/ManastirDjunis/desktop/djunis1.jpg";
import djunis2 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RasinskiOrkug/ManastirDjunis/desktop/djunis2.jpg";
import djunis3 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RasinskiOrkug/ManastirDjunis/desktop/djunis3.jpg";
import djunis4 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RasinskiOrkug/ManastirDjunis/desktop/djunis4.jpg";
import djunis5 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RasinskiOrkug/ManastirDjunis/desktop/djunis5.jpg";
import djunis11 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RasinskiOrkug/ManastirDjunis/mobile/Mdjunis1.jpg";
import djunis22 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RasinskiOrkug/ManastirDjunis/mobile/Mdjunis2.jpg";
import djunis33 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RasinskiOrkug/ManastirDjunis/mobile/Mdjunis3.jpg";
import djunis44 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RasinskiOrkug/ManastirDjunis/mobile/Mdjunis4.jpg";
import djunis55 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RasinskiOrkug/ManastirDjunis/mobile/Mdjunis5.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { rasinskiOkrugPathRoutes } from "./RasinskiOkrugPathRoutes";

export const ManastirDjunis = () => {
  const navigate = useNavigate();

  return (
    <div className="placeBackground">
      <ScrollToTop />
      <FaArrowLeft
        className="arrowLeft"
        onClick={() => navigate(rasinskiOkrugPathRoutes.home)}
        style={{ fill: "white" }}
      />
      <header></header>
      <img srcSet={`${djunis11} 400w, ${djunis1} `} alt="Manastir Đunis 1" />

      <h2 style={{ color: "white" }}>Manastir Đunis</h2>

      <p style={{ paddingTop: "50px" }}>
        U selu Đunis, nekoliko kilometara od Kruševca, nalazi se manastir
        Pokrova Presvete Bogorodice. Manastir je sagrađen na mestu gde se
        Presveta Bogorodica javila devojčici Milojki Jocić 24. jula 1898.
        godine. Milojka je tada imala 13 godina i radila je na polju sa svojim
        sestrama. Dok je išla po vodu, kod izvora je ugledala Presvetu
        Bogorodicu, koja joj je rekla da će se na tom mestu isceljivati mnogi
        bolesnici i da tu treba podići crkvu. Vest o ovom događaju brzo se
        proširila, pa su mnogi bolesni i nevoljni počeli da dolaze na ovo mesto,
        gde su pronalazili isceljenje. Godine 1934, po blagoslovu svetog vladike
        Nikolaja Velimirovića, episkopa žičkog, na ovom mestu podignut je drveni
        hram posvećen Pokrovu Presvete Bogorodice.
      </p>

      <img srcSet={`${djunis22} 400w, ${djunis2} `} alt="Manastir Đunis 2" />

      <p>
        Godine 1977. započeta je izgradnja velikog hrama, ali je zbog zabrane
        tadašnjih vlasti radovi obustavljeni 1985. godine. Izgradnja je
        nastavljena 1993. godine, a u potpunosti završena 2001. godine. Hram je
        u celosti oslikan freskama, dok su u okviru manastirskog kompleksa
        podignuti novi konaci i pomoćne zgrade. Godine 1997. porušena je drvena
        crkva brvnara, a na njenom mestu izgrađena je nova crkva od čvrstog
        materijala, koja je osvećena 1998. godine, na stogodišnjicu ukazanja
        Presvete Bogorodice.
      </p>

      <img srcSet={`${djunis33} 400w, ${djunis3} `} alt="Manastir Đunis 3" />

      <p>
        Godine 1964, odlukom Svetog Arhijerejskog Sabora Srpske Pravoslavne
        Crkve, ova svetinja dobija status manastira kao metoh manastira Svetog
        Romana u Đunisu. Prvobitno je bio muški manastir, a prvi iguman bio je
        Kliment. Godine 1968, manastir je preobražen u ženski. Duhovni staratelj
        manastira bio je arhimandrit Kornelije, a kasnije shiguman Andrej. Prva
        igumanija, Minodora, okupila je u ovoj svetinji veliko sestrinstvo.
      </p>

      <img srcSet={`${djunis44} 400w, ${djunis4} `} alt="Manastir Đunis 4" />

      <p>
        Ikonostas u velikoj crkvi izradila je ikonopisna škola manastira Žiča,
        dok su živopis hrama oslikali umetnici Antonios Stergiou, Slobodan
        Janićijević iz Jagodine i profesor Dragimir Jašović. Na ploči
        postavljenoj na hramu zapisano je: „Blagoizvoljenjem Oca, sadejstvom
        Sina i blagodaću Duha Svetoga sazida se ovaj hram Pokrova Presvete
        Bogorodice u Đunisu, od 1977. do 1983. godine. Živopisa se ktitorskom
        zaslugom gospodina Zlatka Marjanovića, zlatara beogradskog, od 1993. do
        2000. godine, u vreme episkopa niškog g. g. Irineja, igumanije Minodore
        sa sestrama i jeromonaha Pavla. Osvećenje obavljeno godine 2001,
        septembra 16/3.“
      </p>

      <img srcSet={`${djunis55} 400w, ${djunis5} `} alt="Manastir Đunis 5" />

      <p>
        Na dan Pokrova Presvete Bogorodice u manastiru se održava veliki sabor,
        na koji dolazi mnoštvo vernika iz zemlje i inostranstva. Kod izvora se
        služi akatist Presvetoj Bogorodici, dok se u hramu održava sveta
        Liturgija. U manastiru se svakodnevno događaju čudesna isceljenja
        bolesnika.
      </p>
    </div>
  );
};
