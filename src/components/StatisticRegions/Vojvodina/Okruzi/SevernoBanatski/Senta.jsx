import senta1 from "../../../../../assets/images/Vojvodina/SevernoBanatskiOkrug/Senta/senta2.jpg";
import senta2 from "../../../../../assets/images/Vojvodina/SevernoBanatskiOkrug/Senta/senta3.jpg";
import senta3 from "../../../../../assets/images/Vojvodina/SevernoBanatskiOkrug/Senta/senta4.jpg";
import senta4 from "../../../../../assets/images/Vojvodina/SevernoBanatskiOkrug/Senta/senta5.jpg";

import stevanSremac from "../../../../../assets/images/Vojvodina/SevernoBanatskiOkrug/Senta/spomenici/stevanSremac.jpg";
import jovanDjordjevic from "../../../../../assets/images/Vojvodina/SevernoBanatskiOkrug/Senta/spomenici/jovanDjordjevic.jpg";
import bistaTotIštvana from "../../../../../assets/images/Vojvodina/SevernoBanatskiOkrug/Senta/spomenici/bistaTotIštvana.jpg";
import svJovan from "../../../../../assets/images/Vojvodina/SevernoBanatskiOkrug/Senta/spomenici/svJovan.jpg";
import zrtve1944 from "../../../../../assets/images/Vojvodina/SevernoBanatskiOkrug/Senta/spomenici/zrtve1944.jpg";
import skeledzija from "../../../../../assets/images/Vojvodina/SevernoBanatskiOkrug/Senta/spomenici/statuaSkeledzije.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";

export const Senta = () => {
  const navigate = useNavigate();

  return (
    <div className="placeBackground">
      <ScrollToTop/>
      <FaArrowLeft className="arrowLeft" onClick={() => navigate(-1)} />
      <header></header>
      <img src={senta3} alt="Senta 1" />

      <h2>SENTA</h2>

      <p style={{ paddingTop: "80px", marginTop: "-10px" }}>
        Opština Senta nalazi se u Srbiji, u severnom delu Autonomne Pokrajine
        Vojvodine, 42 km južno od srpsko-mađarske granice, na desnoj obali reke
        Tise. Površina opštine Senta iznosi 283.5 km2 . U pravcu sever-jug
        najviše je široka 13 km, a u pravcu istok-zapad najveća dužina je 28,5
        km. Opštini Senta administrativno pripadaju još četiri naselja seoskog
        tipa: Gornji Breg, Bogaraš, Tornjoš i Kevi.
      </p>

      <img src={senta1} alt="Senta 2" />

      <p style={{ marginTop: "-10px" }}>
        Zgrada izgrađena u secesionom stilu koja gleda na glavni trg je glavna
        karakteristika panorame grada. Masivni toranj, visok skoro 50 metara,
        deluje pomalo romantično, međutim, u ukrasima nosi na sebi znakove
        secesije. Ukrasno stepenište i skupštinska sala su takođe u secesionom
        stilu. Spektakularniji unutrašnji prostor zgrade je bogato ukrašena
        galerija u stepeništu, koja sa unikatnim, fascinantnim rešenjima
        galeriju čini najlepšim delom zgrade. Iz tornja se pruža zadivljujući
        pogled na grad i njegovu okolinu.
      </p>

      <img src={senta2} alt="Senta 3" />

      <p style={{ marginTop: "-100px", position: "absolute", width: "100vw" }}>
        U Senti postoje nekoliko parkova i zelenih površina, među kojima se
        izdvaja Gradski park, popularno mesto za šetnje i odmor. Takođe, u
        centru Sente se nalazi manji park sa drvećem i klupama, idealan za
        opuštanje. Pored toga, područja uz reku Tisu nude prirodne prostore za
        šetanje i uživanje u prirodi. Ovi parkovi doprinose kvalitetu života u
        gradu i pružaju miran ambijent za lokalno stanovništvo.
      </p>

      <div className="manyImages">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            height: "900px",
          }}
        >
          <img
            src={stevanSremac}
            alt="Stevan Sremac"
            style={{ width: "1300px" }}
          />
          <div style={{ height: "104vh", overflow: "hidden" }}>
            <img src={zrtve1944} alt="Zrtve 1944" style={{ height: "50%" }} />

            <img
              src={bistaTotIštvana}
              alt="Bista Tot Istvana"
              style={{ height: "50%", marginTop: "-10px" }}
            />
          </div>

          <img
            src={jovanDjordjevic}
            alt="Jovan Djordjevic"
            style={{ width: "1300px", paddingTop: "50px" }}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: "-200px",
          }}
        >
          <img src={svJovan} alt="Sveti Jovan" />

          <img src={skeledzija} alt="Skeledzija" style={{ width: "240%" }} />
        </div>
      </div>

      <p style={{ marginTop: "-10px" }}>
        Na teritoriji grada, ali i cele opštine, može se naći srazmerno mali
        broj statua, odnosno spomenika. Statua Svetom Jovanu iz Nepomuka (delo
        Ištvana Tota, vajara) postavljena je 1914. godine na svoju današnju
        lokaciju, blizu ulaza na most. Druga statua koja prikazuje celu figuru
        je Skelerdžija (delo Šandora Dudaša) i nalazi se na keju na Tisinom
        obali, koju su 2006. godine otkrili predsednici Republike Srbije i
        Mađarske. Preko puta ove statue nalazi se poprsje poznatog srpskog
        književnika, Stevana Sremca, koji je rodom iz Sente. Na keju na obali
        reke Tise nalazi se još i poprsje osnivača Srpskog narodnog pozorišta u
        Novom Sadu i Beogradu, autora sadašnje srpske himne, Jovana Đorđevića,
        koji je takođe rodom iz Sente.
      </p>

      <img src={senta4} alt="Senta 4" />

      <p style={{ marginTop: "-10px" }}>
        Pravoslavna (srpska) Crkva Svetog Arhangela Mihaila je važan
        verski i kulturni spomenik grada. Izgrađena je u baroknom stilu, a njen
        početak izgradnje datira iz 18. veka, tačnije 1751. godine. Ova crkva je
        jedna od najstarijih u Senti i predstavlja značajan deo verske tradicije
        i istorije grada. Crkva je poznata po svom ikonostasu, koji je prvobitno
        izrađen 1782. godine, a kasnije je između 1859. i 1862. godine obnovljen
        i naslikan od strane Pavla Simića, jednog od najpoznatijih predstavnika
        srpskog romantičnog slikarstva.
      </p>
    </div>
  );
};