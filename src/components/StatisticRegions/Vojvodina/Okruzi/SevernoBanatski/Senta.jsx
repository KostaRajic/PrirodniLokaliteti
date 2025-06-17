import senta1 from "../../../../../assets/images/Vojvodina/SevernoBanatskiOkrug/Senta/desktop/senta2.jpg";
import senta2 from "../../../../../assets/images/Vojvodina/SevernoBanatskiOkrug/Senta/desktop/senta3.jpg";
import senta3 from "../../../../../assets/images/Vojvodina/SevernoBanatskiOkrug/Senta/desktop/senta4.jpg";
import senta4 from "../../../../../assets/images/Vojvodina/SevernoBanatskiOkrug/Senta/desktop/senta5.jpg";
import senta11 from "../../../../../assets/images/Vojvodina/SevernoBanatskiOkrug/Senta/mobile/Msenta2.jpg";
import senta22 from "../../../../../assets/images/Vojvodina/SevernoBanatskiOkrug/Senta/mobile/Msenta3.jpg";
import senta33 from "../../../../../assets/images/Vojvodina/SevernoBanatskiOkrug/Senta/mobile/Msenta4.jpg";
import senta44 from "../../../../../assets/images/Vojvodina/SevernoBanatskiOkrug/Senta/mobile/Msenta5.jpg";

import stevanSremac from "../../../../../assets/images/Vojvodina/SevernoBanatskiOkrug/Senta/spomenici/mobile/MstevanSremac2.jpg";
import jovanDjordjevic from "../../../../../assets/images/Vojvodina/SevernoBanatskiOkrug/Senta/spomenici/mobile/MjovanDjordjevic2.jpg";
import bistaTotIštvana from "../../../../../assets/images/Vojvodina/SevernoBanatskiOkrug/Senta/spomenici/mobile/MbistaTotIštvana2.jpg";
import svJovan from "../../../../../assets/images/Vojvodina/SevernoBanatskiOkrug/Senta/spomenici/mobile/MsvJovan2.jpg";
import zrtve1944 from "../../../../../assets/images/Vojvodina/SevernoBanatskiOkrug/Senta/spomenici/mobile/Mzrtve19442.jpg";
import skeledzija from "../../../../../assets/images/Vojvodina/SevernoBanatskiOkrug/Senta/spomenici/mobile/MstatuaSkeledzije2.jpg";
import stevanSremac1 from "../../../../../assets/images/Vojvodina/SevernoBanatskiOkrug/Senta/spomenici/mobile/MstevanSremac2.jpg";
import jovanDjordjevic1 from "../../../../../assets/images/Vojvodina/SevernoBanatskiOkrug/Senta/spomenici/mobile/MjovanDjordjevic2.jpg";
import bistaTotIštvana1 from "../../../../../assets/images/Vojvodina/SevernoBanatskiOkrug/Senta/spomenici/mobile/MbistaTotIštvana2.jpg";
import svJovan1 from "../../../../../assets/images/Vojvodina/SevernoBanatskiOkrug/Senta/spomenici/mobile/MsvJovan2.jpg";
import zrtve19441 from "../../../../../assets/images/Vojvodina/SevernoBanatskiOkrug/Senta/spomenici/mobile/Mzrtve19442.jpg";
import skeledzija1 from "../../../../../assets/images/Vojvodina/SevernoBanatskiOkrug/Senta/spomenici/mobile/MstatuaSkeledzije2.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { useEffect, useRef, useState } from "react";
import { severnoBanatskiPathRoutes } from "./SevernoBanatskiPathRoutes";

export const Senta = () => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);
  

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="placeBackground">
      <ScrollToTop />
      <FaArrowLeft className="arrowLeft" onClick={() => navigate(severnoBanatskiPathRoutes.home)} />
      <header></header>
      <img srcSet={`${senta33} 400w, ${senta3} `} alt="Senta 1" />

      <h2>Senta</h2>

      <p>
        Opština Senta nalazi se u Srbiji, u severnom delu Autonomne Pokrajine
        Vojvodine, 42 km južno od srpsko-mađarske granice, na desnoj obali reke
        Tise. Površina opštine Senta iznosi 283.5 km2 . U pravcu sever-jug
        najviše je široka 13 km, a u pravcu istok-zapad najveća dužina je 28,5
        km. Opštini Senta administrativno pripadaju još četiri naselja seoskog
        tipa: Gornji Breg, Bogaraš, Tornjoš i Kevi.
      </p>

      <img srcSet={`${senta11} 400w, ${senta1} `} alt="Senta 2" />

      <p>
        Zgrada izgrađena u secesionom stilu koja gleda na glavni trg je glavna
        karakteristika panorame grada. Masivni toranj, visok skoro 50 metara,
        deluje pomalo romantično, međutim, u ukrasima nosi na sebi znakove
        secesije. Ukrasno stepenište i skupštinska sala su takođe u secesionom
        stilu. Spektakularniji unutrašnji prostor zgrade je bogato ukrašena
        galerija u stepeništu, koja sa unikatnim, fascinantnim rešenjima
        galeriju čini najlepšim delom zgrade. Iz tornja se pruža zadivljujući
        pogled na grad i njegovu okolinu.
      </p>

      <img srcSet={`${senta22} 400w, ${senta2} `} alt="Senta 3" />

      <p>
        U Senti postoje nekoliko parkova i zelenih površina, među kojima se
        izdvaja Gradski park, popularno mesto za šetnje i odmor. Takođe, u
        centru Sente se nalazi manji park sa drvećem i klupama, idealan za
        opuštanje. Pored toga, područja uz reku Tisu nude prirodne prostore za
        šetanje i uživanje u prirodi. Ovi parkovi doprinose kvalitetu života u
        gradu i pružaju miran ambijent za lokalno stanovništvo.
      </p>

      {isMobile ? (
        <div
          className="fourImages"
          style={{ padding: "20px", gap: "50px" }}

        >
          <div>
            <img srcSet={`${jovanDjordjevic1} 400w, ${jovanDjordjevic} `} alt="Jovan Djordjevic" />
            <p style={{ padding: "20px", textAlign: "center" }}>
              Jovam Đorđević
            </p>
          </div>
          <div>
            <img srcSet={`${svJovan1} 400w, ${svJovan} `} alt="Sveti Jovan" />
            <p style={{ padding: "20px", textAlign: "center" }}>Sveti Jovan</p>
          </div>
          <div>
            <img srcSet={`${skeledzija1} 400w, ${skeledzija} `} alt="Skeledzija" />
            <p style={{ padding: "20px", textAlign: "center" }}>Skeledžija</p>
          </div>
          <div>
            <img srcSet={`${stevanSremac1} 400w, ${stevanSremac} `} alt="Stevan Sremac" />
            <p style={{ padding: "20px", textAlign: "center" }}>
              Stevan Sremac
            </p>
          </div>
          <div>
            <img srcSet={`${zrtve19441} 400w, ${zrtve1944} `} alt="Zrtve 1944" />
            <p style={{ padding: "20px", textAlign: "center" }}>
              Žrtve u drugom svetskom ratu
            </p>
          </div>
          <div>
            <img srcSet={`${bistaTotIštvana1} 400w, ${bistaTotIštvana} `} alt="Bista Tot Istvana" />
            <p style={{ padding: "20px", textAlign: "center" }}>
              Bista Tot Ištvana
            </p>
          </div>
        </div>
      ) : (
        <>
          <div className="fourImages" style={{ padding: "20px", gap: "100px" }}>
            <div style={{ width: "20vw" }}>
              <img srcSet={`${jovanDjordjevic1} 400w, ${jovanDjordjevic} `} alt="Jovan Djordjevic" />
              <p style={{ padding: "20px", textAlign: "center" }}>
                Žrtve u drugom svetskom ratu
              </p>
            </div>
            <div style={{ width: "20vw" }}>
              <img srcSet={`${svJovan1} 400w, ${svJovan} `} alt="Sveti Jovan" />
              <p style={{ padding: "20px", textAlign: "center" }}>
                Žrtve u drugom svetskom ratu
              </p>
            </div>
            <div style={{ width: "20vw" }}>
              <img srcSet={`${skeledzija1} 400w, ${skeledzija} `} alt="Skeledzija" />
              <p style={{ padding: "20px", textAlign: "center" }}>
                Žrtve u drugom svetskom ratu
              </p>
            </div>
          </div>
          <div className="fourImages" style={{ padding: "20px", gap: "100px" }}>
            <div style={{ width: "20vw" }}>
              <img srcSet={`${stevanSremac1} 400w, ${stevanSremac} `} alt="Stevan Sremac" />
              <p style={{ padding: "20px", textAlign: "center" }}>
                Stevan Sremac
              </p>
            </div>
            <div style={{ width: "20vw" }}>
              <img srcSet={`${zrtve19441} 400w, ${zrtve1944} `} alt="Zrtve 1944" />
              <p style={{ padding: "20px", textAlign: "center" }}>
                Žrtve u drugom svetskom ratu
              </p>
            </div>
            <div style={{ width: "20vw" }}>
              <img srcSet={`${bistaTotIštvana1} 400w, ${bistaTotIštvana} `} alt="Bista Tot Istvana" />
              <p style={{ padding: "20px", textAlign: "center" }}>
                Bista Tot Ištvana
              </p>
            </div>
          </div>
        </>
      )}

      <p>
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

      <img srcSet={`${senta44} 400w, ${senta4} `} alt="Senta 4" />

      <p>
        Pravoslavna (srpska) Crkva Svetog Arhangela Mihaila je važan verski i
        kulturni spomenik grada. Izgrađena je u baroknom stilu, a njen početak
        izgradnje datira iz 18. veka, tačnije 1751. godine. Ova crkva je jedna
        od najstarijih u Senti i predstavlja značajan deo verske tradicije i
        istorije grada. Crkva je poznata po svom ikonostasu, koji je prvobitno
        izrađen 1782. godine, a kasnije je između 1859. i 1862. godine obnovljen
        i naslikan od strane Pavla Simića, jednog od najpoznatijih predstavnika
        srpskog romantičnog slikarstva.
      </p>
    </div>
  );
};
