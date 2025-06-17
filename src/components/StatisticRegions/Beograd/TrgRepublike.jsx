import trgRepublike1 from "../../../assets/images/Beograd/TrgRepublike/desktop/trgRepublike1.jpg";
import trgRepublike2 from "../../../assets/images/Beograd/TrgRepublike/desktop/trgRepublike2.jpg";
import trgRepublike3 from "../../../assets/images/Beograd/TrgRepublike/desktop/trgRepublike3.jpg";
import trgRepublike4 from "../../../assets/images/Beograd/TrgRepublike/desktop/trgRepublike4.jpg";
import trgRepublike5 from "../../../assets/images/Beograd/TrgRepublike/desktop/trgRepublike5.jpg";
import trgRepublike6 from "../../../assets/images/Beograd/TrgRepublike/desktop/trgRepublike6.jpg";
import trgRepublike11 from "../../../assets/images/Beograd/TrgRepublike/mobile/trgRepublikeM1.jpg";
import trgRepublike22 from "../../../assets/images/Beograd/TrgRepublike/mobile/trgRepublikeM2.jpg";
import trgRepublike33 from "../../../assets/images/Beograd/TrgRepublike/mobile/trgRepublikeM3.jpg";
import trgRepublike44 from "../../../assets/images/Beograd/TrgRepublike/mobile/trgRepublikeM4.jpg";
import trgRepublike55 from "../../../assets/images/Beograd/TrgRepublike/mobile/trgRepublikeM5.jpg";
import trgRepublike66 from "../../../assets/images/Beograd/TrgRepublike/mobile/trgRepublikeM6.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../ScrollToTop";
import { beogradPathRoutes } from "./BeogradPathRoutes";

export const TrgRepublike = () => {
  const navigate = useNavigate();

  return (
    <div className="placeBackground">
      <ScrollToTop />
      <FaArrowLeft
        className="arrowLeft"
        onClick={() => navigate(beogradPathRoutes.home)}
        style={{ fill: "white" }}
      />
      <header></header>
      <img srcSet={`${trgRepublike11} 400w, ${trgRepublike1} `} alt="Trg Republike 1" />

      <h2 style={{ color: "white", top: "-30px" }}>Trg Republike</h2>

      <p style={{ paddingTop: "50px"}}>
        Glavni gradski trg prostire se između "Gradske kafane", bioskopa
        "Jadran", Narodnog pozorišta i Centralnog kluba Vojske Srbije. Danšnji
        izgled trga formiran je nakon rušenja Stambol-kapije 1866. godine i
        izgradnje Narodnog pozorišta 1869. godine. Stambol-kapija, koja je
        podignuta od strane Austrijanaca početkom 18. veka, nalazila se između
        spomenika knezu Mihailu i Narodnog pozorišta. Smatrana je najvećom i
        najlepšom kapijom iz perioda kada je grad bio opasan bedemima. Naziv je
        dobila jer je kroz nju prolazio put prema Carigradu (Istanbulu).
        Stambol-kapija je u narodu ostala zapamćena zbog toga što su Turci na
        prostoru ispred nje vršili stravične egzekucije "sirotinje" nabijanjem
        na kolac. Tokom borbi za Beograd 1806. godine, pred ovom kapijom je
        smrtno ranjen Vasa Čarapić, jedan od poznatih vojnih lidera iz Prvog
        srpskog ustanka.
      </p>

      <img srcSet={`${trgRepublike22} 400w, ${trgRepublike2} `} alt="Trg Republike  2" />

      <p>
        U čast ovog događaja, ulica u blizini je dobila njegovo ime, a
        postavljen je i spomenik. Nakon što je srpska vlast preuzela kontrolu i
        srušila Stambol-kapiju, prostor današnjeg Trga Republike ostao je
        neizgrađen dugi niz godina. Narodno pozorište je bilo jedina značajna
        građevina više od tri decenije. Tek 1882. godine, kada je podignut
        spomenik knezu Mihailu, počelo je postepeno urbanizovanje ovog trga. Na
        mestu današnjeg Narodnog muzeja stajala je duga prizemna zgrada u kojoj
        je bila smeštena i čuvena kafana "Dardaneli", koja je bila omiljeno
        mesto okupljanja umetnika. Zgrada je porušena 1903. godine, a na njenom
        mestu je izgrađena Uprava fondova, sadašnja zgrada Narodnog muzeja.
      </p>

      <img
        srcSet={`${trgRepublike66} 400w, ${trgRepublike6} `}
        alt="Narodni muzej"
      />
      <p>
        Narodni muzej u Beogradu je jedno od najvažnijih kulturnih i istorijskih
        odredišta u Srbiji. Muzej čuva bogatu zbirku umetničkih dela,
        arheoloških i istorijskih eksponata koji govore o kulturnom nasleđu
        Srbije i Balkana. Muzej je osnovan 1844. godine i njegova kolekcija
        obuhvata period od praistorije do savremenih umetničkih pravaca. Posebnu
        pažnju privlače dela srpskih umetnika, ali i međunarodne umetnosti.
        Kolekcija sadrži više od 400.000 eksponata, među kojima su
        najistaknutiji radovi slikara poput Paje Jovanovića, Uroša Predića i
        drugih velikana srpske umetnosti. Narodni muzej takođe ima bogatu zbirku
        arheoloških nalaza, uključujući predmete iz rimskog i srednjovekovnog
        perioda. Zbirka starih novčića, kao i eksponati iz perioda Otomanske i
        Austro-Ugarske vladavine, omogućavaju posetiocima da steknu dublje
        razumevanje istorije Srbije i regiona. Poseta Narodnom muzeju je
        obavezna za sve ljubitelje umetnosti, istorije i kulture. Osim što nudi
        mogućnost da se divite izložbenim predmetima, muzejski prostor takođe
        omogućava edukaciju o bogatoj prošlosti Srbije kroz interaktivne izložbe
        i prateće programe.
      </p>

      <img srcSet={`${trgRepublike44} 400w, ${trgRepublike4} `} alt="Narodno Pozorište" />

      <p>
        Narodno pozorište u Beogradu je jedan od najvažnijih kulturnih i
        istorijskih simbola grada, smešteno na Trgu Republike. Osnovano 1868.
        godine, ovo impozantno zdanje predstavlja centar srpske dramske,
        baletske i operne scene. Sa bogatom tradicijom, Narodno pozorište je
        domaćin brojnih premijera, i svakodnevno pruža program koji obuhvata
        različite umetničke žanrove, uključujući dramu, operu i balet. Zgrada je
        građena u stilu neorenesanse i otvorena je 1869. godine. Iako su tokom
        godina bile izvedene razne adaptacije, zgrada je i dalje prepoznatljiva
        po svojoj arhitektonskoj lepoti. Sama zgrada, zajedno sa okolnim
        prostorom, predstavlja značajan deo urbane baštine Beograda. Za turiste,
        poseta Narodnom pozorištu je nezaobilazna, jer se pored uživanja u
        umetnosti, mogu upoznati i sa istorijskim značajem ovog kulturnog
        centra. Posetioci mogu prisustvovati jednoj od predstava, ali i obići
        zgradu i istražiti njen arhitektonski šarm.
      </p>

      <img srcSet={`${trgRepublike33} 400w, ${trgRepublike3} `} alt="Kolarac" />

      <p>
        U malom parku pored Narodnog pozorišta, sve do Drugog svetskog rata,
        nalazile su se kafana i bioskop "Kolarac" (u zgradi koja je pripadala
        trgovcu i dobrotvoru Iliji Milosavljeviću Kolarcu). Palata "Riunione",
        koja danas sadrži bioskop "Jadran", izgrađena je 1930. godine. Do Drugog
        svetskog rata, prostor na kojem se danas nalazi Dom štampe bio je
        ispunjen starim prizemnim i jednospratnim zgradama sa trgovinama. Većina
        tih objekata uništena je tokom nemačkog bombardovanja 6. aprila 1941.
        godine. Nakon rata, uklonjene su tramvajska šina i okretnica, a na tom
        mestu je bio postavljen spomenik i grobnica borcima Crvene armije, koji
        su poginuli 1944. godine tokom oslobođenja Beograda. Njihovi posmrtni
        ostaci kasnije su premesti na Groblje oslobodilaca. Na ovom mestu je
        kasnije sagrađena zgrada Doma štampe, koja je postala i dom za "Gradsku
        kafanu" i Međunarodni pres-centar.
      </p>


      

      <img
        srcSet={`${trgRepublike55} 400w, ${trgRepublike5} `}
        alt="Trg Republike koncerti"
      />
      <p>
        Trg Republike je jedno od najpoznatijih i najposećenijih mesta u
        Beogradu, a često je domaćin različitih kulturnih i muzičkih
        manifestacija, uključujući i koncerte na otvorenom. Ovaj centralni
        gradski trg, sa svojim impresivnim zgradama, kao što su Narodno
        pozorište i Narodni muzej, pruža savršen ambijent za razne događaje.
        Koncerti koji se održavaju na Trgu Republike obuhvataju širok spektar
        muzičkih žanrova, od klasične muzike do pop i rock nastupa, privlačeći
        posetioce iz svih delova grada i sveta.
      </p>
    </div>
  );
};
