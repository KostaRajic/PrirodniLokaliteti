import mokraGora1 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/MokraGora/desktop/mokraGora1.jpg";
import mokraGora2 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/MokraGora/desktop/mokraGora2.jpg";
import mokraGora3 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/MokraGora/desktop/mokraGora3.jpg";
import mokraGora4 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/MokraGora/desktop/mokraGora4.jpg";
import mokraGora11 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/MokraGora/mobile/MmokraGora1.jpg";
import mokraGora22 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/MokraGora/mobile/MmokraGora2.jpg";
import mokraGora33 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/MokraGora/mobile/MmokraGora3.jpg";
import mokraGora44 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/MokraGora/mobile/MmokraGora4.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { zlatiborskiOkrugPathRoutes } from "./ZlatiborskiOkrugPahtRoutes";

export const MokraGora = () => {
  const navigate = useNavigate();

  return (
    <div className="placeBackground">
      <ScrollToTop />
      <FaArrowLeft className="arrowLeft" onClick={() => navigate(zlatiborskiOkrugPathRoutes.home)} />
      <header></header>
      <img srcSet={`${mokraGora11} 400w, ${mokraGora1} `} alt="Mokra Gora 1" />

      <h2>Mokra Gora</h2>

      <p style={{ paddingTop: "50px" }}>
        Mokra Gora je dolina u zapadnoj Srbiji, smeštena između planina Tare i
        Zlatibora. Sa severa se povezuje sa Zborištem, najvišim vrhom Tare, dok
        na jugu prelazi u Zlatibor. Park prirode „Šargan – Mokra gora“ prostire
        se na površini od 10.813 hektara. Ovaj kraj karakteriše uzburkan reljef,
        sa duboko uklesanim, strmim dolinama i klisurama reka Beli Rzav, Crni
        Rzav i Kamiške reke. Iznad njih uzdižu se mnogobrojni vrhovi i prevoji.
        Među najvrednijim prirodnim pojavama izdvajaju se Hajdučka i Crvena
        pećina, a posebno impresivan je vodopad Skakavac. Region je bogat
        mineralnim izvorima, a najpoznatiji među njima je izvor Bele vode.
      </p>

      <img srcSet={`${mokraGora22} 400w, ${mokraGora2} `} alt="Mokra Gora 2" />

      <p>
        Kompleksi autohtonih šuma crnog i belog bora na serpentinama, koje
        prirodno čine stanište ovog područja, predstavljaju pravi dragulj. Ove
        šume, zajedno sa mozaicima planinskih livada i pašnjaka, čine bogat
        ekosistem zahvaljujući specifičnoj geološkoj strukturi i povoljnim
        klimatskim uslovima. Na ovom području raste više od 700 vrsta biljaka,
        među kojima se nalaze mnoge endemične i reliktne vrste. U bogatoj fauni
        Mokre Gore, posebno se izdvaja ornitofauna, sa 60 registrovanih vrsta,
        od kojih je 29 prirodnih retkosti. Ovdje se mogu uočiti veliki tetreb,
        orao zmijar, planinska senica, a među sisarima vuk, mrki medved, vidra i
        divlja mačka.
      </p>

      <img srcSet={`${mokraGora33} 400w, ${mokraGora3} `} alt="Mokra Gora 3" />

      <p>
        Mokra Gora i Šargan su kroz istoriju bile deo važnog putnog pravca, što
        potvrđuju ostatci starog rimskog kaldrmisanog puta i grobovi iz rimskog
        perioda. Danas, ovaj region je najpoznatiji po „Šarganskoj osmici“,
        pruzi uskog koloseka koja se ističe izuzetnim tehničkim rešenjem za
        savladavanje velikog uspona na malom prostoru. Duž pruge postavljeni su
        brojni eksponati, poput starih lokomotiva i vagona, koji su zaštićeni
        kao spomenici tehničke kulture, čineći ovaj prostor jedinstvenim muzejem
        pod otvorenim nebom. Još jedna značajna atrakcija je etno naselje
        „Drvengrad“, smešteno na uzvišenju Mećavnik, koje je sagrađeno prema
        ideji poznatog filmskog režisera Emira Kusturice.
      </p>

      <img srcSet={`${mokraGora44} 400w, ${mokraGora4} `} alt="Mokra Gora 4" />

      <p>
        Mokra Gora, idilično planinsko selo smešteno na jugozapadu Srbije između
        planina Tara i Zlatibor, savršeno je odredište za odmor sa porodicom i
        prijateljima. Ovaj očaravajući kraj, poznat po „Šarganskoj osmici“,
        svojoj netaknutoj prirodi, bogatoj istoriji i tradiciji gostoprimstva,
        nudi raznovrsne opcije za smeštaj koje zadovoljavaju sve vrste ukusa i
        budžeta. U Mokroj Gori možete birati između rustičnih drvenih kuća,
        modernih apartmana ili luksuznih vila, pružajući savršen smještaj za sve
        posetioce. Jedna od najvećih atrakcija ovog kraja je etno selo
        Drvengrad, ili Kustendorf, koje je izgradio poznati srpski reditelj Emir
        Kusturica. Ovo naselje privlači posetioce svojom jedinstvenom atmosferom
        i autentičnim izgledom.
      </p>

    </div>
  );
};
