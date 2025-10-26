/* eslint-disable react/no-unknown-property */
/* eslint-disable no-useless-escape */
import beliDrimVodopad1 from "../../../../../assets/images/KosovoIMetohija/Pecki/VodopadBeliDrim/desktop/vodopadBeliDrim1.jpg";
import beliDrimVodopad2 from "../../../../../assets/images/KosovoIMetohija/Pecki/VodopadBeliDrim/desktop/vodopadBeliDrim2.jpg";
import beliDrimVodopad3 from "../../../../../assets/images/KosovoIMetohija/Pecki/VodopadBeliDrim/desktop/vodopadBeliDrim3.jpg";
import beliDrimVodopad4 from "../../../../../assets/images/KosovoIMetohija/Pecki/VodopadBeliDrim/desktop/vodopadBeliDrim4.jpg";
import beliDrimVodopad11 from "../../../../../assets/images/KosovoIMetohija/Pecki/VodopadBeliDrim/mobile/MvodopadBeliDrim1.jpg";
import beliDrimVodopad22 from "../../../../../assets/images/KosovoIMetohija/Pecki/VodopadBeliDrim/mobile/MvodopadBeliDrim2.jpg";
import beliDrimVodopad33 from "../../../../../assets/images/KosovoIMetohija/Pecki/VodopadBeliDrim/mobile/MvodopadBeliDrim3.jpg";
import beliDrimVodopad44 from "../../../../../assets/images/KosovoIMetohija/Pecki/VodopadBeliDrim/mobile/MvodopadBeliDrim4.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { peckiOkrugPathRoutes } from "./PeckiOkrugPathRoutes";
import { useContextAuth } from "../../../../../Context";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const VodopadBeliDrim = () => {
  const navigate = useNavigate();
  const { switchLanguage } = useContextAuth();
  const { lang } = useParams();

  useEffect(() => {
    if (lang && lang !== switchLanguage) {
      const newPath = window.location.pathname.replace(/^\/[^\/]+/, `/${switchLanguage}`);
      navigate(newPath, { replace: true });
    }
  }, [switchLanguage, lang, navigate]);



  return (
    <>

      <Helmet>

        <title>{switchLanguage === 'rs' ? "Vodopad Beli Drim – Prirodni dragulj Kosova | Serbia Wonders" : "White Drin Waterfall – Natural Gem of Kosovo | Serbia Wonders"}</title>
        <meta
          name="description"
          content={switchLanguage === 'rs' ?
            "Vodopad Beli Drim nastaje na reci Beli Drim, jednoj od glavnih reka na Kosovu i Metohiji. Poznat je po visokom vodopadu i netaknutoj prirodi."
            :
            "Beli Drim Waterfall forms on the Beli Drim River, one of the main rivers in Kosovo and Metohija. Known for its tall waterfall and pristine nature."
          }
        />
        <meta
          name="keywords"
          content={switchLanguage === 'rs' ?
            "Vodopad Beli Drim, Beli Drim, reka Drim, Peć, Metohija, Kosovo, priroda, vodopadi Srbije, planine Srbije, reka Drim, prirodni izvori"
            :
            "Beli Drim Waterfall, Beli Drim River, Drim River, Pec, Metohija, Kosovo, nature, Serbian waterfalls, Serbian mountains, Drim river, natural springs"
          }
        />
        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/pecki-okrug/vodopad-beli-drim`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/pecki-okrug/vodopad-beli-drim"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/pecki-okrug/vodopad-beli-drim"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/pecki-okrug/vodopad-beli-drim"
        />

      </Helmet>


      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft className="arrowLeft" onClick={() => navigate(peckiOkrugPathRoutes.home(switchLanguage))} style={{ fill: 'white' }} />
        <header></header>
        <img srcSet={`${beliDrimVodopad11} 450w, ${beliDrimVodopad1} `} alt="Vodopad Beli Drim 1" loading="lazy" />

        {switchLanguage === 'rs' ?
          (
            <>

              <h1>Vodopad Beli Drim</h1>

              <section lang="sr">
                <p>
                  <strong>Beli Drim</strong> je jedna od dve reke čijim spajanjem nastaje <strong>reka Drim</strong> u
                  <strong>Albaniji</strong>. Druga reka je <strong>Crni Drim</strong>. Ove dve reke se spajaju u
                  severoistočnoj Albaniji, kod grada <strong>Kukesa</strong>.
                  <br /><br />
                  Dužina Belog Drima je <strong>175 km</strong> (od toga <strong>156 km u Srbiji</strong> i <strong>19 km u Albaniji</strong>).
                  Izvire sa <strong>planine Žljeb</strong> u <strong>Metohiji</strong>, severno od <strong>Peći</strong>, i
                  protiče kroz <em>polukrašku regiju</em> Metohiju. U svom početnom delu, Beli Drim
                  je <em>ponornica</em>, koja izlazi kao snažan <strong>izvor</strong> i formira <strong>vodopad visine 25 metara</strong>
                  u blizini sela <strong>Radovac</strong>. Izvor reke nalazi se na nadmorskoj visini od <strong>580 m</strong>,
                  dok se spaja sa Crnim Drimom na visini od <strong>240,8 m</strong>.
                </p>
              </section>

              <img srcSet={`${beliDrimVodopad22} 450w, ${beliDrimVodopad2}`} alt="Vodopad Beli Drim 2" loading="lazy" />

              <section lang="sr">
                <p>
                  Beli Drim teče prema <strong>istoku</strong>, pored <strong>Pećke banje</strong>, a zatim prima vodu od
                  pritoke <strong>Istočke reke</strong>, nakon čega tok skreće ka <strong>jugu</strong>.
                  Dalje protiče kroz <em>plodnu i gusto naseljenu</em> oblast <strong>centralne Metohije</strong>, poznatu
                  i kao <strong>Podrimlje</strong>. Zanimljivo je da se veliki gradovi ovog područja, poput
                  <strong>Peći</strong>, <strong>Đakovice</strong> i <strong>Prizrena</strong>, nisu smestili direktno na obalu reke.
                  Najveće naselje koje leži uz Beli Drim je <strong>Kline</strong>.
                </p>
              </section>

              <img srcSet={`${beliDrimVodopad33} 450w, ${beliDrimVodopad3}`} alt="Vodopad Beli Drim 3" loading="lazy" />

              <section lang="sr">
                <p>
                  Beli Drim ima mnoge značajne <strong>pritoke</strong>: desne su <strong>Pećka Bistrica</strong>,
                  <strong>Dečanska Bistrica</strong> i <strong>Erenik</strong>, dok su leve <strong>Istočka reka</strong>,
                  <strong>Kline</strong>, <strong>Miruša</strong>, <strong>Rimnik</strong>, <strong>Topluga</strong> i
                  <strong>Prizrenska Bistrica</strong>.
                </p>
              </section>

              <img srcSet={`${beliDrimVodopad44} 450w, ${beliDrimVodopad4}`} alt="Vodopad Beli Drim 4" loading="lazy" />

              <section lang="sr">
                <p>
                  <strong>Sliv Belog Drima</strong> u Srbiji pokriva površinu od <strong>4.360 km²</strong>, dok je površina
                  albanskog dela sliva <strong>604 km²</strong>. U ovom delu toka nema naselja, a Beli Drim
                  prima levu pritoku – <strong>Plavsku reku</strong>, koja dolazi iz oblasti <strong>Gora</strong>.
                  <br /><br />
                  Tok Belog Drima <em>nije plovan</em>.
                </p>
              </section>

            </>
          )
          :
          (
            <>

              <h1>White Drin Waterfall</h1>

              <section lang="en">
                <p>
                  The <strong>White Drin</strong> is one of the two rivers that merge to form the <strong>Drin River</strong> in
                  <strong>Albania</strong>. The other river is the <strong>Black Drin</strong>. These two rivers merge in
                  northeastern Albania, near the town of <strong>Kukës</strong>.
                  <br /><br />
                  The White Drin is <strong>175 km long</strong> (with <strong>156 km in Serbia</strong> and <strong>19 km in Albania</strong>).
                  It springs from <strong>Mount Žljeb</strong> in <strong>Metohija</strong>, north of <strong>Peć</strong>, and flows through the
                  <em>semi-karst region</em> of Metohija. In its upper course, the White Drin is a <em>losing stream</em>,
                  which reemerges as a powerful <strong>spring</strong>, forming a <strong>25-meter-high waterfall</strong>
                  near the village of <strong>Radavac</strong>. The river’s source is located at an altitude of <strong>580 m</strong>,
                  while its confluence with the Black Drin is at <strong>240.8 m</strong> above sea level.
                </p>
              </section>

              <img srcSet={`${beliDrimVodopad22} 450w, ${beliDrimVodopad2}`} alt="White Drin Waterfall 2" loading="lazy" />

              <section lang="en">
                <p>
                  The White Drin flows <strong>eastward</strong>, past <strong>Pećka Banja</strong>, then receives water from the
                  <strong>Istočka River</strong>, after which it turns <strong>south</strong>.
                  Its course continues through the <em>fertile and densely populated</em> area of <strong>central Metohija</strong>,
                  also known as <strong>Podrimlje</strong>. Interestingly, the major cities in this region,
                  such as <strong>Peć</strong>, <strong>Đakovica</strong>, and <strong>Prizren</strong>, are not located directly on the riverbanks.
                  The largest settlement situated along the White Drin is <strong>Klinë</strong>.
                </p>
              </section>

              <img srcSet={`${beliDrimVodopad33} 450w, ${beliDrimVodopad3}`} alt="White Drin Waterfall 3" loading="lazy" />

              <section lang="en">
                <p>
                  The White Drin has several important <strong>tributaries</strong>: on the right, the <strong>Pećka Bistrica</strong>,
                  <strong>Dečanska Bistrica</strong>, and <strong>Erenik</strong>; and on the left, the <strong>Istočka River</strong>,
                  <strong>Klinë</strong>, <strong>Miruša</strong>, <strong>Rimnik</strong>, <strong>Topluga</strong>, and
                  <strong>Prizren Bistrica</strong>.
                </p>
              </section>

              <img srcSet={`${beliDrimVodopad44} 450w, ${beliDrimVodopad4}`} alt="White Drin Waterfall 4" loading="lazy" />

              <section lang="en">
                <p>
                  The <strong>White Drin watershed</strong> in Serbia covers an area of <strong>4,360 km²</strong>, while the
                  Albanian part covers <strong>604 km²</strong>. In this part of the river's course, there are no settlements.
                  The White Drin receives a left tributary – the <strong>Plavska River</strong>, which flows from the region of <strong>Gora</strong>.
                  <br /><br />
                  The White Drin is <em>not navigable</em>.
                </p>
              </section>

            </>
          )}

      </div>
    </>
  );
};


export default VodopadBeliDrim;