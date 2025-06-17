import manastirSvetihArhangela1 from "../../../../../assets/images/KosovoIMetohija/Prizrenski/ManastirSvetihArhangela/desktop/manastirSvetihArhangela1.jpg";
import manastirSvetihArhangela2 from "../../../../../assets/images/KosovoIMetohija/Prizrenski/ManastirSvetihArhangela/desktop/manastirSvetihArhangela2.jpg";
import manastirSvetihArhangela3 from "../../../../../assets/images/KosovoIMetohija/Prizrenski/ManastirSvetihArhangela/desktop/manastirSvetihArhangela3.jpg";
import manastirSvetihArhangela4 from "../../../../../assets/images/KosovoIMetohija/Prizrenski/ManastirSvetihArhangela/desktop/manastirSvetihArhangela4.jpg";
import manastirSvetihArhangela11 from "../../../../../assets/images/KosovoIMetohija/Prizrenski/ManastirSvetihArhangela/mobile/MmanastirSvetihArhangela1.jpg";
import manastirSvetihArhangela22 from "../../../../../assets/images/KosovoIMetohija/Prizrenski/ManastirSvetihArhangela/mobile/MmanastirSvetihArhangela2.jpg";
import manastirSvetihArhangela33 from "../../../../../assets/images/KosovoIMetohija/Prizrenski/ManastirSvetihArhangela/mobile/MmanastirSvetihArhangela3.jpg";
import manastirSvetihArhangela44 from "../../../../../assets/images/KosovoIMetohija/Prizrenski/ManastirSvetihArhangela/mobile/MmanastirSvetihArhangela4.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { prizrenskiOkrugPathRoutes } from "./PrizrenskiOkrugPathRoutes";

export const ManastirSvetihArhangela = () => {
  const navigate = useNavigate();

  return (
    <div className="placeBackground">
      <ScrollToTop />
      <FaArrowLeft className="arrowLeft" onClick={() => navigate(prizrenskiOkrugPathRoutes.home)} style={{fill: 'white'}}/>
      <header></header>
      <img srcSet={`${manastirSvetihArhangela11} 400w, ${manastirSvetihArhangela1} `} alt="Manastir Svetih Arhangela 1" />

      <h2>Manastir Svetih Arhangela</h2>

      <p style={{ paddingTop: "50px" }}>
        Ostaci manastira Svetih Arhangela, zadužbine najmoćnijeg srpskog
        srednjovekovnog vladara, kralja (a od 1346. godine cara) Dušana
        Nemanjića, nalaze se 3 km uzvodno od Prizrena, na levoj obali reke
        Bistrice koja na tom mestu pravi oštru krivinu oko ravnog platova
        trokutastog oblika. Donji grad (ili Dušanov, u užem smislu) izgrađen je
        na krčevini usred nekadašnjih gustih šuma, u blizini bogatih izvora, sa
        pogledom prema šarplaninskim vrhovima. U manastirski kompleks spada i
        obližnja tvrđava Višegrad, stariji deo svetoarhangelskog "grada", koja
        se nalazi na brdu iznad manastirskog lokaliteta i predstavlja utvrđenje
        koje je nekada služilo za odbranu. Ono potiče iz pre nemanjićkih
        vremena, a meštani ga zovu Gornji grad.
      </p>

      <img srcSet={`${manastirSvetihArhangela22} 400w, ${manastirSvetihArhangela2} `} alt="Manastir Svetih Arhangela 2" />

      <p>
        Odlučujući da sagradi manastir Svetih Arhangela kod Prizrena, Dušan je
        donio ovu odluku 1341/1342. godine, nakon čudesnog izlečenja od tada
        neizlečive bolesti, uz posredstvo Svetog Mihaila, iscelitelja i poznatog
        zaštitnika hrišćanskih cara. Carski manastir najpre je bio pravno
        zasnovan, a kasnije i izgrađen. Naime, kralj je 1343. godine simbolično
        "postavio kamen" za manastir i formirao njegovo bratstvo, sa igumanom na
        čelu. Na mestu koje je kralj Dušan odabrao za svoju zadužbinu, već je
        postojao stari, oronuli hram, čiji su temelji otkriveni u podu
        veličanstvene Dušanove crkve. Taj hram je morao biti razgrađen, teren
        očišćen, a materijal (drvo i kamen) za izgradnju novog manastira
        obezbeđen. Pripreme su završene tokom leta 1347. godine, a manastirska
        crkva je stavljena pod olovni krov 1349. godine. Okolna zdanja, kao i
        celokupni slikarski radovi, dovršeni su do 1352. godine. Manastir je bio
        toliko lep da je jedan letopisac iz XV veka napisao da ne veruje da
        postoji nešto slično pod suncem.
      </p>

      <img srcSet={`${manastirSvetihArhangela33} 400w, ${manastirSvetihArhangela3} `} alt="Manastir Svetih Arhangela 3" />

      <p>
        Prema arheološkim istraživanjima iz 1927. godine, sprovedenim pod
        rukovodstvom dr Radoslava Grujića, manastirsko naselje Svetih Arhangela,
        koje je obuhvatilo površinu od 6,5 hektara, imalo je osnovu nepravilnog,
        otprilike jednako krakog trougla. Naselje je bilo smešteno unutar
        odbrambenog zida koji ga je okruživao sa svih strana, a činile su ga
        sledeće jedinice:
        <br />
        <br />
        - Velika ili glavna crkva Svetih Arhangela, koja je bila centralna tačka
        unutrašnjeg prostora, sa carevom grobnicom
        <br />
        - Crkva Svetog Nikole, koja je u velikoj meri ličila na glavnu crkvu,
        ali je bila dvostruko manja, a bila je prva sagrađena
        <br />
        - Manastirska trpezarija sa kuhinjom
        <br />
        - Kraljevski konaci
        <br />
        - Monastički konaci
        <br />
        - Igumanija
        <br />
        - "Stup knjižni", tj. knjižara i pisarnica (skryptorijum)
        <br />
        - Bolnica
        <br />- Drugi prateći objekti manastirske ekonomije
      </p>

      <img srcSet={`${manastirSvetihArhangela44} 400w, ${manastirSvetihArhangela4} `} alt="Manastir Svetih Arhangela 4" />

      <p>
        Glavna crkva, posvećena Svetim Arhangelima, danas sačuvana samo u
        fragmentima, predstavlja poslednji veliki spomenik raške škole. Po svom
        arhitektonskom konceptu, ona obuhvata gotovo sve elemente raške škole,
        uz nagoveštaj moravske. Ova raskošna petokupolna građevina bila je
        monumentalno zdanje sa osnovom u obliku upisanog krsta, ali sa
        neobičajno suženim bočnim brodovima. Imala je pravougaoni oblik sa dužom
        stranom od 28,5 metara i kraćom od 16,7 metara. Na istočnoj strani
        nalazila se trodelna oltarska apsida. Veliko dvanaestospratno kupola
        hram je počivala na četiri luka koja su podržavali četiri stuba, dok su
        prema rekonstrukciji postojala i četiri manja bočna kupola. Smatra se da
        je slabo očuvani živopis u ovoj crkvi bio superiorniji u odnosu na onaj
        u Dečanima.
      </p>
    </div>
  );
};
