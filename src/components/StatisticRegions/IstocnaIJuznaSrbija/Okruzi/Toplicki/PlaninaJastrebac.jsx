import jastrebac1 from "../../../../../assets/images/JuznaIIstocnaSrbija/ToplickiOkrug/PlaninaJastrebac/jastrebac1.jpg";
import jastrebac2 from "../../../../../assets/images/JuznaIIstocnaSrbija/ToplickiOkrug/PlaninaJastrebac/jastrebac2.jpg";
import jastrebac3 from "../../../../../assets/images/JuznaIIstocnaSrbija/ToplickiOkrug/PlaninaJastrebac/jastrebac3.jpg";
import jastrebac4 from "../../../../../assets/images/JuznaIIstocnaSrbija/ToplickiOkrug/PlaninaJastrebac/jastrebac4.jpg";
import jastrebac5 from "../../../../../assets/images/JuznaIIstocnaSrbija/ToplickiOkrug/PlaninaJastrebac/jastrebac5.jpg";
import jastrebac6 from "../../../../../assets/images/JuznaIIstocnaSrbija/ToplickiOkrug/PlaninaJastrebac/jastrebac6.jpg";
import jastrebac7 from "../../../../../assets/images/JuznaIIstocnaSrbija/ToplickiOkrug/PlaninaJastrebac/jastrebac7.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";

export const PlaninaJastrebac = () => {
  const navigate = useNavigate();

  return (
    <div className="placeBackground">
      <ScrollToTop />
      <FaArrowLeft className="arrowLeft" onClick={() => navigate(-1)} />
      <header></header>
      <img src={jastrebac1} alt="Planina Jasterbac 1" />

      <h2>Planina Jasterbac</h2>

      <p style={{ paddingTop: "50px" }}>
        Jastrebac je planina koja se nalazi u centralnom delu Srbije, između
        Niša, Aleksinca, Kruševca, Blaca i Prokuplja. Pripada rodopskom
        planinskom sistemu, što znači da je nastala usled rasedanja. Izgrađena
        je od paleozojskih škrilja i magmatskih stena.
      </p>

      <img src={jastrebac6} alt="Planina Jasterbac 2" />

      <p>
        Masiv Jastrepcu je odvojen od Kopaonika Jankovom klisurom na reci
        Blatašnici. Deli se na Veliki i Mali Jastrebac. Najviši vrhovi Velikog
        Jastrepcu (i celog masiva) su Velika Đulica (1.491 m), Pogled (1.481 m),
        Mala Đulica (1.429 m), Stracimir (1.394 m), Zmajevac (1.381 m) i drugi.
        Oni čine prirodnu granicu između Toplice i Pomoravlja. Na istočnoj
        strani masiva nalazi se Mali Jastrebac, odvojen od Velikog prevojem
        Grebac, sa najvišim vrhom Kupinjak (946 m). Greben je dug 42 km i od
        njega se odvajaju široke kose, a najistaknutiji su vrhovi Zmajevac i
        Bela stena prema severu. Prevojem Grebac prolazi put Prokuplje-Kruševac
        (preko Ribarške Banje).
      </p>

      <div className="flexColumn" style={{ display: "flex" }}>
        <p className="fruskaGoraParagh">
          Poznata, pre svega kao dobar orijentir putnicima, Jastrebačka Majorova
          česma nalazi se na prevoju Prokop (990 m), na glavnom grebenu
          Jastrepcu, na sredini Velikog Jastrepca, i prirodna je veza između
          severne i južne strane Jastrepca, Toplice i Pomoravlja.
          <br />
          Ovim putem je nekada prolazio Kruševački put.
          <br />U ovom delu Jastrepca postoji više prirodnih izvora, a
          najuređenija je upravo Majorova česma.
        </p>

        <img
          src={jastrebac7}
          alt="Majorova česma"
          className="fruskaGoraClassImg"
        />
      </div>

      <div
        className="flexColumn"
        style={{ display: "flex", paddingBottom: "50px" }}
      >
        <img
          src={jastrebac2}
          alt="Majorova česma 2"
          className="fruskaGoraClassImg"
        />

        <p className="fruskaGoraParagh">
          Kako je dobila ime?
          <br />
          Između dva svetska rata, na ovom mestu je „Obilićevo“ imalo prostore
          za testiranje bojevih i zaštitnih sredstava (Pomponi). Komandant
          Barutanskog bataljona Vojno-tehničkog zavoda „Obilićevo“ (od 23. maja
          do 23. oktobra 1937) bio je pešadijski major Velibor Milošević, koji
          je preminuo 26. aprila 1938. godine. U njegovu čast, na Prokopu je
          podignuta česma, a na njoj je ploča sa natpisom: U spomen pešadijskom
          majoru Veliboru Miloševiću (1889 – 1938) inžinjeri i majstor.
        </p>
      </div>

      <img src={jastrebac4} alt="Mečje štene" />

      <p>
        Omiljene planinarske rute uključuju one do „Bele Stene“ (1257 m),
        „Stracimira“ (1390 m), „Maznice“ (1140 m), kao i izlete do „Majorove
        česme“, česme „Dve sestre“, stare crkve Sv. Petke, „Doline breza“,
        srednjovekovnog utvrđenja „Gradaac“ i drugih. Kraj Lomničke reke i
        odmarališta u Ravništu nalazi se planinarski dom – „Limarev dom“ (521
        m), do kojeg se stiže iz Kruševca asfaltiranim putem u dužini od 22 km.
        <br />
        <br />
        Loviste „Veliki Jastrebac“ nazvano je po planini Veliki Jastrebac, čiju
        teritoriju pokriva većim delom. Od Kruševca je udaljeno 23 km. Loviste
        je osnovano 1948. godine, a još u 19. veku postojali su podaci o
        bogatstvu ove planine brojnim i autohtonim divljim životinjama.
      </p>

      <img src={jastrebac5} alt="Bresničko Jezero" />

      <p>
        Brestovačko jezero je veštačko jezero koje se nalazi na planini
        Jastrebac, u centralnom delu Srbije. Jezero je smešteno na nadmorskoj
        visini od oko 600 metara i predstavlja popularnu destinaciju za odmor i
        rekreaciju. Zbog svog položaja i prirodne lepote, Brestovačko jezero je
        omiljeno među ljubiteljima prirode i planinarenja.
        <br />
        <br />
        Ovo jezero je značajno ne samo zbog svoje lepote, već i kao izvor
        snabdevanja vodom, ali i zbog svoje blizine planinskih staza i
        izletišta. Pored toga, u okolini jezera se nalaze brojne atrakcije,
        uključujući planinarske staze, izvorima lekovite vode i razne prirodne
        znamenitosti.
      </p>

      <img src={jastrebac3} alt="Planina Jastrebac" />

      <p>
        Jastrebac se odlikuje bogatom listopadnom šumom, pretežno bukvom i
        četinarima. Po svojoj lepoti izdvajaju se rezervat belih breza, ali i
        mnogobrojni vodeni tokovi, izvori i potoci. U okolnim rekama i potocima
        mogu se naći rečni rakovi i slobodna pastrmka, što ukazuje na izuzetno
        čistu vodu. Za ljubitelje prirodne hrane, Jastrebac je bogat raznim
        vrstama samoniklog jestivog bilja, kao što su sremuš, kopriva, maslačak,
        divlje jagode, jabuke, kruške, te različite vrste jestivih gljiva, koje,
        uz pravilnu pripremu, predstavljaju izuzetno zdrav obrok.
        <br />
        <br />U podnožju Malog Jastrepca, sa jugoistočne strane, nalaze se
        Krajkovačko jezero i Oblačinsko jezero.
      </p>
    </div>
  );
};
