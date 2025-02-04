import gostilje1 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/VodopadGostilje/vodopadGostilje1.jpg";
import gostilje2 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/VodopadGostilje/vodopadGostilje2.jpg";
import gostilje3 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/VodopadGostilje/vodopadGostilje3.jpg";
import gostilje4 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/VodopadGostilje/vodopadGostilje4.jpg";
import gostilje5 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/VodopadGostilje/vodopadGostilje5.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";

export const MokraGora = () => {
  const navigate = useNavigate();

  return (
    <div className="placeBackground">
      <ScrollToTop />
      <FaArrowLeft className="arrowLeft" onClick={() => navigate(-1)} />
      <header></header>
      <img src={gostilje2} alt="Mokra Gora 1" />

      <h2>MOKRA GORA</h2>

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

      <img src={gostilje5} alt="Mokra Gora 2" />

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

      <img src={gostilje3} alt="Mokra Gora 3" />

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

      <img src={gostilje4} alt="Mokra Gora 4" />

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

      <img src={gostilje1} alt="Mokra Gora 5" />
      <p>
        Ako ste strastveni ljubitelji prirode i avanturisti, Mokra Gora vam nudi
        širok izbor planinskih kuća i brvnara, smeštenih u blizini skijališta
        „Iver“ i planinarskih staza. Ovi objekti nude savršen mir i tišinu, kao
        i spektakularne poglede na okolne planinske vrhove i zelenilo. Za
        porodice sa decom, preporučujemo smeštaj u neposrednoj blizini
        železničke stanice Šarganska Osmica, poznate i kao „Ćira“. Ova
        istorijska uskotračna pruga pruža jedinstvenu priliku za vožnju starim
        parnim vozom, kroz kojeg možete uživati u prirodnim lepotama ovog kraja.
        Deca će biti oduševljena ovom avanturom, dok će roditelji ceniti udoban
        smeštaj u blizini ove popularne atrakcije. Bilo da planirate posetu sa
        prijateljima ili porodicom, Mokra Gora je pravo mesto za istraživanje
        čarobnog sveta prirode. Bez obzira na vrstu smeštaja koju izaberete,
        jedno je sigurno: ovde ćete stvoriti uspomene koje će vas pratiti tokom
        celog života.
      </p>
    </div>
  );
};
