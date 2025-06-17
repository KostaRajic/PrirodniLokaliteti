import zavojskoJezero1 from "../../../../../assets/images/JuznaIIstocnaSrbija/PirotskiOkrug/ZavojskoJezero/desktop/zavojskoJezero1.jpg";
import zavojskoJezero2 from "../../../../../assets/images/JuznaIIstocnaSrbija/PirotskiOkrug/ZavojskoJezero/desktop/zavojskoJezero2.jpg";
import zavojskoJezero3 from "../../../../../assets/images/JuznaIIstocnaSrbija/PirotskiOkrug/ZavojskoJezero/desktop/zavojskoJezero3.jpg";
import zavojskoJezero4 from "../../../../../assets/images/JuznaIIstocnaSrbija/PirotskiOkrug/ZavojskoJezero/desktop/zavojskoJezero4.jpg";
import zavojskoJezero5 from "../../../../../assets/images/JuznaIIstocnaSrbija/PirotskiOkrug/ZavojskoJezero/desktop/zavojskoJezero5.jpg";
import zavojskoJezero11 from "../../../../../assets/images/JuznaIIstocnaSrbija/PirotskiOkrug/ZavojskoJezero/mobile/zavojskoJezeroM1.jpg";
import zavojskoJezero22 from "../../../../../assets/images/JuznaIIstocnaSrbija/PirotskiOkrug/ZavojskoJezero/mobile/zavojskoJezeroM2.jpg";
import zavojskoJezero33 from "../../../../../assets/images/JuznaIIstocnaSrbija/PirotskiOkrug/ZavojskoJezero/mobile/zavojskoJezeroM3.jpg";
import zavojskoJezero44 from "../../../../../assets/images/JuznaIIstocnaSrbija/PirotskiOkrug/ZavojskoJezero/mobile/zavojskoJezeroM4.jpg";
import zavojskoJezero55 from "../../../../../assets/images/JuznaIIstocnaSrbija/PirotskiOkrug/ZavojskoJezero/mobile/zavojskoJezeroM5.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { pirotskiOkrugPathRoutes } from "./PirotskiOkrugPathRoutes";

export const ZavojskoJezero = () => {
  const navigate = useNavigate();

  return (
    <div className="placeBackground">
      <ScrollToTop />
      <FaArrowLeft className="arrowLeft" onClick={() => navigate(pirotskiOkrugPathRoutes.home)} />
      <header></header>
      <img srcSet={`${zavojskoJezero11} 400w, ${zavojskoJezero1} `} alt="Zavaojsko jezero 1" />

      <h2>Zavaojsko jezero</h2>

      <p style={{ paddingTop: "50px" }}>
        Zavojsko jezero je veštačko jezero koje se nalazi u jugoistočnom delu
        Srbije, 17 km severoistočno od Pirota, na srednjem toku reke Visočice.
        Nastalo je 1963. godine, kada je veliko klizište stvorilo prirodnu
        branu, koja je kasnije povećana izgradnjom veštačke brane.
        <br />
        <br />
        Zavojsko jezero je omiljeno izletište Piroćanaca i Nišlija.
      </p>

      <img srcSet={`${zavojskoJezero22} 400w, ${zavojskoJezero2} `} alt="Zavaojsko jezero 2" />

      <p>
        Zavojsko jezero se nalazi u jugoistočnom delu Srbije, oko 17 km severno
        od Pirota. Smešteno je na Staroj planini, u delu zvanom Visok, na
        srednjem toku reke Visočice. Savremena veštačka brana se nalazi oko 1 km
        nizvodno od nekadašnjeg sela Zavoj, koje je potopljeno stvaranjem jezera
        i po kojem je jezero dobilo ime. Prilazi Zavojskom jezeru su reke
        Visočica, Gostuška reka i Belska reka, dok je jedini izlaz iz jezera
        reke Visočica. Velika količina vode iz jezera se kroz tunel odvodi do
        Hidroelektrane Pirot, koja je koristi za pokretanje generatora. U
        okolini i blizu jezera nalaze se sela: Pakleštica, Bela i Gostuša.
      </p>

      <img srcSet={`${zavojskoJezero33} 400w, ${zavojskoJezero3} `} alt="Zavaojsko jezero 3" />

      <p>
        Zavojsko jezero je urvinsko jezero koje je nastalo koluvijalnim procesom
        i, zajedno sa Jovačkim jezerima, predstavlja jedinstveni fenomen te
        vrste na teritoriji Srbije. Prirodna brana je nastala nakon obilnih
        padavina tokom zime 1963. godine. Padine Stare planine počele su da
        klize, a velike količine zemlje su pregrabile reku. Do toga je došlo
        zbog iskrčenja šuma i erozije zemljišta koja je nastala usled naglog
        otapanja snega koji je obilno padao te zime. Meštani nisu pridavali
        veliku pažnju toj pojavi, jer se nešto slično dešavalo i ranije nakon
        padavina, pa su smatrali da će i ovaj put sve proći bez većih posledica.
      </p>

      <img
        srcSet={`${zavojskoJezero44} 400w, ${zavojskoJezero4} `}
        alt="Zavaojsko jezero 4"
      />

      <p>
        Međutim, desetak dana nakon toga, u noći između 23. i 24. februara,
        izvorima doline potekla je bujica rastresite i vlažne zemlje usled
        velikog klizanja. Najveće pomeranje tla desilo se 25. februara. Masa tla
        koja je klizila bila je duga 1,3 km i širine od 160 do 220 m, što je
        predstavljalo zapreminu od oko 240.000 m³. Prirodna brana bila je visoka
        preko 50 m, a njena nestabilnost pretila je da izazove njen probijanje i
        naglo izlivanje akumulirane vode, čime bi bila potopljena sva naselja
        nizvodno; postojale su tvrdnje da bi čak i Niš mogao biti ugrožen. Brzom
        reakcijom vojske, prirodna brana je probijena, što je omogućilo njeno
        nadvišenje i izgradnju veštačke brane koja postoji i danas.
        <br />
        <br />
        Voda ovog jezera se danas koristi za pokretanje generatora
        Hidroelektrane Pirot.
      </p>

      <img srcSet={`${zavojskoJezero55} 400w, ${zavojskoJezero5} `} alt="Zavaojsko jezero 5" />

      <p>
        Temperatura vode nije detaljno pratena; prilikom nastanka, temperatura
        vode kretala se između 4 i 5 °C, dok je tokom leta površinski sloj imao
        temperaturu i do 20 °C. Jezero je isušeno 1965. godine zbog nemogućnosti
        prirodne brane da zadrži veliku količinu vode, pa je zbog toga
        projektovano njeno nadvišenje do visine od 75 m, odnosno do visinske
        kote od 615 m. Novom branom trebalo je omogućiti akumulaciju oko 147
        miliona m³ korisne vode i ukupnu količinu od oko 160 miliona m³.
        Projektovana površina je bila oko 5,53 km², a dužina 16,35 km. To je
        podrazumevalo maksimalnu dubinu od 60 m i obim od 40 km. Jezero je
        trebalo da prima vodu iz Visočice i Toplodolske reke. Toplodolska reka
        trebala je povećati dotok vode za 36 miliona m³ godišnje, a predviđeni
        protok kroz jezero bio je 10,4 m³/s. Zahvat vode za hidroelektranu
        projektovan je 3 km uzvodno od brane, zajedno sa tunelom prečnika 2,6 m
        i dužine 7,5 km, kao i cevovodom dužine 1,45 km do samih turbina.
        Planirana je proizvodnja električne energije od 149 GWh godišnje.
      </p>
    </div>
  );
};
