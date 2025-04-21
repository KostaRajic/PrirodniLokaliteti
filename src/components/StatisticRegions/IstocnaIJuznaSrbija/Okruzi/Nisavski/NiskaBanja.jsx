import niskaBanja1 from "../../../../../assets/images/JuznaIIstocnaSrbija/NisavskiOkrug/NiskaBanja/niskaBanja1.jpg";
import niskaBanja2 from "../../../../../assets/images/JuznaIIstocnaSrbija/NisavskiOkrug/NiskaBanja/niskaBanja2.jpg";
import niskaBanja3 from "../../../../../assets/images/JuznaIIstocnaSrbija/NisavskiOkrug/NiskaBanja/niskaBanja3.jpg";
import niskaBanja4 from "../../../../../assets/images/JuznaIIstocnaSrbija/NisavskiOkrug/NiskaBanja/niskaBanja4.jpg";
import niskaBanja5 from "../../../../../assets/images/JuznaIIstocnaSrbija/NisavskiOkrug/NiskaBanja/niskaBanja5.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { nisavskiOkrugPathRoutes } from "./NisavskiOkrugPathRoutes";

export const NiskaBanja = () => {
  const navigate = useNavigate();

  return (
    <div className="placeBackground">
      <ScrollToTop />
      <FaArrowLeft className="arrowLeft" onClick={() => navigate(nisavskiOkrugPathRoutes.home)} />
      <header></header>
      <img src={niskaBanja2} alt="Niška Banja 1" />

      <h2>Niška Banja</h2>

      <p style={{ paddingTop: "50px" }}>
        Niška Banja je naselje koje pripada gradskoj opštini Niška Banja u
        okviru grada Niša.
        <br />
        <br />
        Niška Banja spada u drugu grupu najrazvijenijih banja u Srbiji, zajedno
        sa Banjom Koviljačom, Bukovičkom Banjom i Mataruškom Banjom. Ove banje
        ostvaruju više od 100.000 noćenja godišnje, imaju razvijenu lečilišnu
        funkciju, solidnu infrastrukturnu osnovu i povoljan geografski položaj,
        zahvaljujući blizini saobraćajnih pravaca, gradskih naselja i drugih
        faktora.
      </p>

      <img src={niskaBanja1} alt="Niška Banja 2" />
      <p>
        Niška Banja se nalazi na jugoistoku Srbije, uz magistralni put
        Beograd–Niš–Sofija–Istanbul (poznat i kao nišavsko-marička magistrala),
        na udaljenosti od 10 km od Niša i 250 km od Beograda.
        <br />
        <br />
        Geografski, Niška Banja se prostire na geotektonskoj granici između
        kristalne rodopske mase i krečnjačkih planina istočne Srbije, na mestu
        gde se spajaju velike udoline Balkanskog poluostrva, na južnoj ivici
        široke i plitke Niške kotline. Smeštena je u podnožju i na padinama
        Koritnjaka, brda (808 m) i naselja istog imena, koji je deo kompozitne
        Nišavske doline i severozapadnog ogranka Suve planine (1.810 m), u
        severozapadnom podnožju Crnog kamena (867 m), jednog od vrhova ove
        planine.
      </p>

      <img src={niskaBanja3} alt="Niška Banja 3" />

      <p>
        Površina na kojoj se nalazi Niška Banja iznosi 6,43 km². Ovaj prostor
        graniči sa naseljima Prva Kutina na zapadu, Brzi Brod na severozapadu,
        Malča i Gornja Vrežina na severu, Radikina Bara (sa napuštenim selom
        Koritnjak) na jugu, Rautovo (u uskom pojasu u potesu „Manastirište“) na
        jugoistoku i Jelašnica na istoku.
        <br />
        <br />
        Infrastruktura banje smeštena je na širokoj i blago nagnutoj terasi koja
        je nastala tokom geološke prošlosti, akumulacijom bigra i delovanjem
        fluvijalnih i denudacionih procesa. Ova terasa se nalazi u podnožju
        krečnjačkog brda Koritnjaka, koje se strmo uzdiže iznad Niške Banje.
      </p>

      <img src={niskaBanja4} alt="Niška Banja 4" />

      <p>
        Na nadmorskoj visini od 248 m nalazi se centralni deo Niške Banje, koji
        obuhvata zgrade opštine, prateće institucije (banka, pošta, policija,
        osnovna škola itd.), lečilište, turističke i ugostiteljske objekte, kao
        i banjske parkove. Parkovi se prostiru na nekoliko hektara i sadrže
        fontane, lepo uređene travnjake, cvetne aleje, kao i drvorede bagrema,
        jasena, lipe, duda, oraha i crnog bora, kroz koje prolaze potočići sa
        termomineralnom vodom.
        <br />
        <br />
        Niži deo Niške Banje smesten je u dolini Nišave, gde se većina zemljišta
        koristi za gajenje žitarica i povrća. Ovdje se nalazi deo naselja uz
        Jelašnički put, kao i područje između magistralne pruge i puta
        Niš–Sofija, te levoj obali Nišave. Naselje Nikola Tesla, poznatije kao
        „Broj šest“, smešteno zapadno od Niške Banje, delimično pripada
        katastarskoj opštini Niška Banja, dok drugi deo spada u katastarsku
        opštinu Prva Kutina.
      </p>

      <img src={niskaBanja5} alt="Niška Banja 5" />

      <p>
        Niška Banja se nalazi na granici najstarije rodopske mase na Balkanskom
        poluostrvu i mlađih nabranih planina. Rodopska masa uključuje
        Seličevicu, dok mlađe nabranne planine predstavljaju Koritnjak.
        Izdizanjem rodopske mase, planina Seličevica je postala kopno još u
        paleozoiku. Novoformirano kopno bilo je okruženo morem, koje je u
        prošlosti prekrivalo prostor na kojem se danas nalazi Niška Banja.
        <br />
        <br />U okolini Niške Banje, na određenim delovima Suve planine,
        pronađeni su krečnjaci i laporci sa fosilima. Ovi fosili su pomogli da
        se utvrdi da ovi sedimenti potiču iz perioda jure, što ukazuje na
        transgresiju jurskih mora do oblasti u kojoj se sada nalazi Niška Banja.
      </p>
    </div>
  );
};
