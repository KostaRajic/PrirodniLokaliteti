import rtanj1 from "../../../../../assets/images/JuznaIIstocnaSrbija/ZajecarskiOkrug/Rtanj/desktop/planinaRtanj1.jpg";
import rtanj2 from "../../../../../assets/images/JuznaIIstocnaSrbija/ZajecarskiOkrug/Rtanj/desktop/planinaRtanj2.jpg";
import rtanj3 from "../../../../../assets/images/JuznaIIstocnaSrbija/ZajecarskiOkrug/Rtanj/desktop/planinaRtanj3.jpg";
import rtanj4 from "../../../../../assets/images/JuznaIIstocnaSrbija/ZajecarskiOkrug/Rtanj/desktop/planinaRtanj4.jpg";
import rtanj5 from "../../../../../assets/images/JuznaIIstocnaSrbija/ZajecarskiOkrug/Rtanj/desktop/planinaRtanj5.jpg";
import rtanj6 from "../../../../../assets/images/JuznaIIstocnaSrbija/ZajecarskiOkrug/Rtanj/desktop/planinaRtanj6.jpg";
import rtanj11 from "../../../../../assets/images/JuznaIIstocnaSrbija/ZajecarskiOkrug/Rtanj/mobile/planinaRtanjM1.jpg";
import rtanj22 from "../../../../../assets/images/JuznaIIstocnaSrbija/ZajecarskiOkrug/Rtanj/mobile/planinaRtanjM2.jpg";
import rtanj33 from "../../../../../assets/images/JuznaIIstocnaSrbija/ZajecarskiOkrug/Rtanj/mobile/planinaRtanjM3.jpg";
import rtanj44 from "../../../../../assets/images/JuznaIIstocnaSrbija/ZajecarskiOkrug/Rtanj/mobile/planinaRtanjM4.jpg";
import rtanj55 from "../../../../../assets/images/JuznaIIstocnaSrbija/ZajecarskiOkrug/Rtanj/mobile/planinaRtanjM5.jpg";
import rtanj66 from "../../../../../assets/images/JuznaIIstocnaSrbija/ZajecarskiOkrug/Rtanj/mobile/planinaRtanjM6.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { zajecarskiOkrugPathRoutes } from "./ZajecarskiOkrugPathRoutes";

export const PlaninaRtanj = () => {
  const navigate = useNavigate();

  return (
    <div className="placeBackground">
      <ScrollToTop />
      <FaArrowLeft className="arrowLeft" onClick={() => navigate(zajecarskiOkrugPathRoutes.home)} />
      <header></header>
      <img srcSet={`${rtanj22} 400w, ${rtanj2} `} alt="Planina Rtanj 1" />

      <h2>Planina Rtanj</h2>

      <p style={{ paddingTop: "50px" }}>
        Istočna Srbija je poznata po bogatstvu prirodnih lepota, a među njima se
        ističe i planina Rtanj, često nazivana „srpskom piramidom“. Rtanj se
        uzdiže u blizini Boljevca, unutar Zaječarskog okruga, dostižući svoj
        najviši vrh, Šiljak, na 1565 metara nadmorske visine. Njegov
        karakterističan oblik, široka i masivna baza koja se postepeno sužava u
        gotovo savršenu kupu, podstakao je mnoga verovanja da je Rtanj zapravo
        drevna piramida, što ga čini jednim od najzanimljivijih prirodnih
        fenomena u Srbiji.
      </p>

      <img srcSet={`${rtanj11} 400w, ${rtanj1} `} alt="Planina Rtanj 2" />

      <p>
        Južna strana Rtnja odlikuje se blagim padinama i visoravni koja se
        postepeno spušta prema Sokobanji. Nasuprot tome, severni deo planine
        obiluje gustim šumama i prostranim pašnjacima, a takođe je bogat
        izvorima pitke vode. Zbog tih prirodnih karakteristika, upravo ovaj deo
        planine bio je najpogodniji za lovište, koje se prostire na oko 6368
        hektara. Na severnoj strani Rtnja nalazi se i oštar greben, dok se
        njegov najviši vrh, Šiljak, uzdiže na istočnom obodu grebena.
      </p>

      <img srcSet={`${rtanj33} 400w, ${rtanj3} `} alt="Planina Rtanj 3" />

      <p>
        Istorija planine Rtanj usko je povezana sa bogatom jevrejskom porodicom
        Minh, koja je na ovoj planini posedovala rudnik kamenog uglja. Brinući o
        svojim radnicima, porodica je obezbedila stanove, otvorila škole,
        ambulantu, prvi bioskop i električnu centralu. Nakon što je Julius Minh,
        iz nepoznatih razloga, izvršio samoubistvo, vođenje rudnika preuzeli su
        njegova braća i supruga Greta.
        <br />
        <br />U znak sećanja na supruga, Greta Minh je podigla malu crkvu-kapelu
        na vrhu Rtnja, koju je gradilo hiljadu radnika. Kapela je osvećena 1936.
        godine, ali je, nažalost, 1992. godine srušena u potrazi za navodno
        sakrivenim blagom. Danas su od nje ostali samo tragovi.
      </p>

      <img srcSet={`${rtanj44} 400w, ${rtanj4} `} alt="Planina Rtanj 4" />

      <p>
        Istraživanja su pokazala da se unutar planine Rtanj nalaze prostrane
        unutrašnje dvorane, dok su speleolozi do sada otkrili čak 17 pećina.
        Nedaleko od samog vrha Šiljak, na udaljenosti od oko 30 metara, smeštena
        je „Jama na Šiljku“. Ova jama proteže se u dužini od 7 kilometara, dok
        je njena prvobitna dubina iznosila 9 metara. Međutim, zbog bezbednosti
        speleologa, izvađeno je nekoliko kubika stena i zemlje, čime je njena
        dubina povećana na 13 metara.
      </p>

      <img srcSet={`${rtanj55} 400w, ${rtanj5} `} alt="Planina Rtanj 5" />

      <p>
        Rtanj se odlikuje tipičnom planinskom klimom, s toplim letima i zimama
        bogatim padavinama. Prosečna godišnja temperatura iznosi oko 10 stepeni,
        što stvara povoljne uslove za razvoj biljnog sveta.
        <br />
        <br />
        Floru ove planine čine šume planinske bukve, hrasta i smrče, koja je
        ovde dospela zahvaljujući pošumljavanju. Pored toga, prisutna je i
        žbunasta vegetacija, kao i velike količine „Rtanjskog čaja“, endemične i
        lekovite biljke, čiji naziv ukazuje na njenu povezanost s ovom planinom.
        <br />
        <br />
        Rtanj je dom i brojnim reliktnim biljkama, među kojima se ističu
        jorgovan, orah, bela srebrna lipa, crni jasen i ruj. Takođe, značajno
        mesto u biljnom svetu Rtnja zauzima i srpska ramonda.
      </p>

      <img srcSet={`${rtanj66} 400w, ${rtanj6} `} alt="Planina Rtanj 6" />

      <p>
        Fauna planine Rtanj izuzetno je raznolika i obuhvata sisare, gmizavce,
        vodozemce, ptice i ribe.
        <br />
        <br />
        Vodeni ekosistem Rtnja nastanjuju vrste poput potočne pastrmke, potočne
        mrene i krkuše, dok su u Vrmdžanskom jezeru otkrivene potpuno izolovane
        riblje populacije.
        <br />
        <br />
        Što se tiče ptica, do sada je na Rtnju zabeleženo 89 vrsta. Gotovo
        polovina njih je zaštićena prema Uredbi o zaštiti prirodnih retkosti,
        dok ostatak čine ptice gnezdarice. Među značajnijim vrstama nalaze se
        sivi soko, suri orao, ušata i poljska ševa, prepelica, obična grmuša,
        rusi svračak, jelova senica, crna žuna, šumska sova, veliki detlić,
        plava i velika senica, kao i mnoge druge.
      </p>
    </div>
  );
};
