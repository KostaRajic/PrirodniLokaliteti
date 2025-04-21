import rujan1 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/ManastirRujan/manastirRujan1.jpg";
import rujan2 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/ManastirRujan/manastirRujan2.jpg";
import rujan3 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/ManastirRujan/manastirRujan3.jpg";
import rujan4 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/ManastirRujan/manastirRujan4.jpg";
import rujan6 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/ManastirRujan/manastirRujan6.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { zlatiborskiOkrugPathRoutes } from "./ZlatiborskiOkrugPahtRoutes";

export const ManastirRujan = () => {
  const navigate = useNavigate();

  return (
    <div className="placeBackground">
      <ScrollToTop />
      <FaArrowLeft className="arrowLeft" onClick={() => navigate(zlatiborskiOkrugPathRoutes.manastirRujan)} />
      <header></header>
      <img src={rujan1} alt="Manastir Rujan 1" />

      <h2>Manastir Rujan</h2>

      <p style={{ paddingTop: "50px" }}>
        Manastir Rujan je obnovljeni manastir iz 15. veka koji danas pripada
        Eparhiji žičkoj Srpske pravoslavne crkve. Nalazi se u selu Vrutci, kod
        Užica, na desnoj obali istoimenog jezera. Manastirski hram posvećen je
        Svetom Velikomučeniku Georgiju. Ime Rujan potiče od biljke ruj koja
        raste u dolini reke Đetinje. Po njoj su ime dobili i oblast i sam
        manastir – Rujno.
      </p>

      <img src={rujan2} alt="Manastir Rujan 2" />

      <p>
        Manastir ima poseban značaj za srpsku kulturu i istoriju, jer je upravo
        u njemu nastala prva štamparija u srednjovekovnoj Srbiji. U toj
        štampariji je 1537. godine završeno štampanje Četvorojevanđelja,
        poznatog kao Rujansko četvorojevanđelje. Ovaj posao je izveo, kako sam
        za sebe kaže, „grešni i ubog umom, bogat grehom, Hristu rab monah
        Teodosije“. Zbog nedostatka alata, materijala i novca za izlivanje
        metalnih slova, siromašni monasi iz Rujna su slova rezali od drveta.
      </p>

      <img src={rujan3} alt="Manastir Rujno 3" />

      <p>
        Verovalo se da su monasi iz Rujna izrezivali celu stranicu izjedna na
        drvenoj ploči, ali savremena istraživanja sugerišu da su ipak rezali i
        slagali slovo po slovo. Na taj način, drvenu stranicu su otiskivali na
        hartiji, koja je verovatno bila mletačkog porekla. Pojedini istraživači
        ističu da su neka od tih slova imala oble, nejednake i prilično grube
        oblike, dok su druga bila „uža, ujednačenija i elegantnija“. Drugi
        istraživači identifikuju čak četiri različita tipa slova, što ukazuje na
        mogućnost da su uz monaha Teodosija radila još tri monaha, od kojih je
        svaki imao svoj prepoznatljiv stil rezbarenja drveta.
      </p>

      <img src={rujan4} alt="Manastir Rujno 4" />

      <p>
        Rujansko četvorojevanđelje štampano je u dve boje – crvenoj i crnoj.
        Prvo su se bojenjem i otiskivanjem radila crna slova, a zatim su se
        posebno bojala i otiskivala crvena. U ovoj knjizi, ukoričenoj u drvene
        korice obložene kožom, crvena boja nije krasila samo pojedina slova, već
        je ceo kraj oko crkve i manastira bio obojen crvenilom. Ime Rujno potiče
        od biljke ruj, ili rujevina, koja je rasla širom ovog kraja i svojim
        crvenim nijansama obojila i pejzaž i oblake. Rujevina se koristila za
        pravljenje crvene boje, kojom su verovatno bojena i slova monaha
        Teodosija. Jedini potpuno sačuvan primerak Rujanskog četvorojevanđelja
        čuva se u Nacionalnoj biblioteci u Pragu, kao deo Šafarikove zbirke, i
        sadrži ukupno 300 listova. Drugi primerak, delimično oštećen i sa 296
        listova, nalazi se u Ruskoj nacionalnoj biblioteci u Sankt Peterburgu.
      </p>

      <img src={rujan6} alt="Manastir Rujno 5" />
      <p>
        Nacionalna biblioteka Srbije je posedovala jedan primerak Rujanskog
        četvorojevanđelja, ali je on uništen u bombardovanju Beograda 1941.
        godine. Samo jedan odlomak od 92 lista čuva se u muzeju Srpske akademije
        nauka i umetnosti. Pretpostavlja se da su Turci srušili manastir Rujno
        oko 1567. godine. Ubrzo nakon toga, otkrili su štampariju, spalili je, a
        manastir uništili. Preživeli monasi su pobegli u manastir Raču. Prema
        jednom zapisu iz 1857. godine, od manastirske crkve je ostao samo kamen
        časne trpeze, dok su stubovi odneseni i ugrađeni u zgradu medrese
        (muslimanske srednje škole) u Užicu. Nakon izgradnje brane „Vrutci” na
        Đetinji 1980. godine, manastir je potopljen formiranjem veštačkog jezera
        Vrutci. Manastir je obnovljen u periodu od 2004. do 2006. godine, kada
        je osveštan i naseljen monasima.
      </p>
    </div>
  );
};
