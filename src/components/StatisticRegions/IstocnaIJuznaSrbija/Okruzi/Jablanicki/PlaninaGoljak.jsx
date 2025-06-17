import goljak1 from "../../../../../assets/images/JuznaIIstocnaSrbija/JablanickiOkrug/Goljak/desktop/goljak1.jpg";
import goljak2 from "../../../../../assets/images/JuznaIIstocnaSrbija/JablanickiOkrug/Goljak/desktop/goljak2.jpg";
import goljak3 from "../../../../../assets/images/JuznaIIstocnaSrbija/JablanickiOkrug/Goljak/desktop/goljak3.jpg";
import goljak4 from "../../../../../assets/images/JuznaIIstocnaSrbija/JablanickiOkrug/Goljak/desktop/goljak4.jpg";
import goljak5 from "../../../../../assets/images/JuznaIIstocnaSrbija/JablanickiOkrug/Goljak/desktop/goljak5.jpg";
import goljak6 from "../../../../../assets/images/JuznaIIstocnaSrbija/JablanickiOkrug/Goljak/desktop/goljak6.jpg";
import goljak11 from "../../../../../assets/images/JuznaIIstocnaSrbija/JablanickiOkrug/Goljak/mobile/goljakM1.jpg";
import goljak22 from "../../../../../assets/images/JuznaIIstocnaSrbija/JablanickiOkrug/Goljak/mobile/goljakM2.jpg";
import goljak33 from "../../../../../assets/images/JuznaIIstocnaSrbija/JablanickiOkrug/Goljak/mobile/goljakM3.jpg";
import goljak44 from "../../../../../assets/images/JuznaIIstocnaSrbija/JablanickiOkrug/Goljak/mobile/goljakM4.jpg";
import goljak55 from "../../../../../assets/images/JuznaIIstocnaSrbija/JablanickiOkrug/Goljak/mobile/goljakM5.jpg";
import goljak66 from "../../../../../assets/images/JuznaIIstocnaSrbija/JablanickiOkrug/Goljak/mobile/goljakM6.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { jablanickiOkrugPathRoutes } from "./JablanickiOkrugPathRoutes";

export const PlaninaGoljak = () => {
  const navigate = useNavigate();

  return (
    <div className="placeBackground">
      <ScrollToTop />
      <FaArrowLeft className="arrowLeft" onClick={() => navigate(jablanickiOkrugPathRoutes.home)} />
      <header></header>
      <img srcSet={`${goljak11} 400w, ${goljak1} `} alt="Planina Goljak 1" />

      <h2>Planina Goljak</h2>

      <p style={{ paddingTop: "50px" }}>
        Planina Goljak se nalazi na administrativnoj granici Srbije i Kosova i
        Metohije. Prostire se većim delom u opštini Medveđa, na istoku do reke
        Veternice, preko koje je Kukavica, dok je na zapadu kosovska planina
        Prugovac i Batlavasno jezero. Na severu se nalaze Lebane i Jablanička
        kotlina, a na jugu Kosovsko Pomoravlje. Geološki sastav je raznovrstan,
        a dominiraju graniti i gnejsevi.
      </p>

      <img srcSet={`${goljak55} 400w, ${goljak5} `} alt="Planina Goljak 2" />

      <p>
        Planinu odlikuju zaobljeni oblici, padine prekrivene šumama i mnoge
        prirodne i ljudske atrakcije: Ćorov vodopad, veoma izazovan planinarski
        paleovulkan koji nosi ime Mrkonjski vis (1014 m), Sijarinska banja sa
        izvorima vode temperature 72°C, kao i tragovi rudarskih aktivnosti.
      </p>

      <img srcSet={`${goljak33} 400w, ${goljak3} `} alt="Planina Goljak 3" />

      <p>
        Do najvišeg vrha Lisica (1184 m) lako se dolazi iz pravca manastira
        Bogorodice Brainske (manastir Mala Braina), koji se nalazi 2 km zapadno
        od puta Leskovac – Medveđa – Priština. Ukupna dužina puta do vrha je
        nešto više od 7 km, uz visinsku razliku od više od 450 metara. Od
        manastira ka selu Gubavce, a zatim dalje prema vrhu, vodi kolski put
        koji postaje sve lošiji kako se napreduje, da bi na kraju postao gotovo
        neprepoznatljiv.
      </p>

      <img srcSet={`${goljak44} 400w, ${goljak4} `} alt="Planina Goljak 4" />

      <p>
        Puta vodi kroz šumu bukve i hrasta sve do livade i izvora koji se nalazi
        oko 500 metara od vrha. Dalje se nastavlja kroz šumu, a sam vrh je
        pokriven livadom i delimično obraslim grmljem. Na ravnom vrhu nalazi se
        geodetsko betonsko obeležje, koje je sada gotovo u potpunosti okruženo
        gustom žbunovinom. Sa Lisice se pruža lep pogled na Kosovo.
      </p>

      <img srcSet={`${goljak22} 400w, ${goljak2} `} alt="Ćorov vodopad" />

      <p>
        Ćorov vodopad se nalazi na Ćorovom potoku u ataru sela Petrilje, u
        opštini Medveđa na jugu Srbije. Potok je dug svega 500 metara, a po
        rečima najstarijih meštana, nikada nije presušio. Zbog svog kratkog toka
        i minimalnog uticaja ljudi na prirodu, ova izvorska voda je izuzetno
        čista i pogodna za piće.
        <br />
        <br />
        Vodopad je visok 18 metara i nalazi se oko 300 metara od magistralnog
        puta M9, koji povezuje Leskovac i Prištinu. Udaljen je 8 kilometara od
        Medveđe i 7 kilometara od Sijarinske Banje.
        <br />
        <br />U blizini vodopada nalazi se malo jezero u kojem ribolovci mogu
        uloviti različite vrste riba, poput karaša, babuške, kruške i klena.
        <br />
        <br />U proleće 2017. godine, uz pomoć dobrovoljnog rada i materijalnih
        sredstava zaposlenih u Turističkoj organizaciji opštine Medveđa, uređen
        je lokalitet oko vodopada. Izgrađeni su pešački mostovi i staze koje
        vode do vodopada, a postavljena je i putna signalizacija kako bi
        posetioci lakše pronašli ovu prirodnu atrakciju.
      </p>

      <img srcSet={`${goljak66} 400w, ${goljak6} `} alt="Sijarinska Banja" />

      <p>
        Sijarinska Banja je gradsko naselje u opštini Medveđa, u Jablaničkom
        okrugu, na jugu Srbije. Nalazi se na 52 km od Leskovca i 330 km od
        Beograda, na ukrštanju puteva Leskovac–Priština, na obalama reka Banjske
        i Jablanice, u podnožju planine Goljak. Bašta je smeštena u klisuri,
        okružena bujnom vegetacijom, sa povoljnim subalpskim klimatskim
        uslovima.
        <br />
        <br />
        Bašta se ponosi sa 18 izvora mineralne vode različitog hemijskog sastava
        i temperatura od 32 do 72°C. Posebnu atrakciju predstavljaju gejziri
        tople vode, jedinstveni u Evropi, čiji vodeni stub doseže visinu od 8
        metara. Pored njih, tu je i novije izgrađeni kompleks manjih bazena i
        fontana.
      </p>
    </div>
  );
};
