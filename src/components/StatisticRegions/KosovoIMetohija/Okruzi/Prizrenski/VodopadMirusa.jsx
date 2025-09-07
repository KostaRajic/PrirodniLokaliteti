/* eslint-disable react/no-unknown-property */
/* eslint-disable no-useless-escape */
import vodopadMirusa1 from "../../../../../assets/images/KosovoIMetohija/Prizrenski/VodopadMirusa/desktop/vodopadMirusa1.jpg";
import vodopadMirusa2 from "../../../../../assets/images/KosovoIMetohija/Prizrenski/VodopadMirusa/desktop/vodopadMirusa2.jpg";
import vodopadMirusa3 from "../../../../../assets/images/KosovoIMetohija/Prizrenski/VodopadMirusa/desktop/vodopadMirusa3.jpg";
import vodopadMirusa4 from "../../../../../assets/images/KosovoIMetohija/Prizrenski/VodopadMirusa/desktop/vodopadMirusa4.jpg";
import vodopadMirusa11 from "../../../../../assets/images/KosovoIMetohija/Prizrenski/VodopadMirusa/mobile/MvodopadMirusa1.jpg";
import vodopadMirusa22 from "../../../../../assets/images/KosovoIMetohija/Prizrenski/VodopadMirusa/mobile/MvodopadMirusa2.jpg";
import vodopadMirusa33 from "../../../../../assets/images/KosovoIMetohija/Prizrenski/VodopadMirusa/mobile/MvodopadMirusa3.jpg";
import vodopadMirusa44 from "../../../../../assets/images/KosovoIMetohija/Prizrenski/VodopadMirusa/mobile/MvodopadMirusa4.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { prizrenskiOkrugPathRoutes } from "./PrizrenskiOkrugPathRoutes";
import { useContextAuth } from "../../../../../Context";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const VodopadMirusa = () => {
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

        <title>{switchLanguage === 'rs' ? "Vodopad Miruša – Prirodni biser Kosova i Metohije | Serbia Wonders" : "Miruša Waterfall – Natural Jewel of Kosovo and Metohija | Serbia Wonders"}</title>
        <meta
          name="description"
          content={switchLanguage === 'rs' ?
            "Vodopad Miruša i kanjon reke Miruše predstavljaju prirodnu lepotu sa vodopadima, jezerima i stazama, poznate kao 'Plitvice Metohije'. Zaštićen je kao prirodni rezervat i idealna destinacija za ljubitelje prirode."
            :
            "Miruša Waterfall and the Miruša river canyon offer stunning natural beauty with waterfalls, lakes, and hiking trails, known as the 'Plitvice of Metohija'. Protected as a nature reserve, it's perfect for nature lovers."
          }
        />
        <meta
          name="keywords"
          content={switchLanguage === 'rs' ?
            "Vodopad Miruša, kanjon Miruše, Kosovo i Metohija, park prirode, prirodne znamenitosti, vodopadi, jezera, prirodni rezervat, turizam, Gremnik"
            :
            "Miruša Waterfall, Miruša Canyon, Kosovo and Metohija, nature park, natural landmarks, waterfalls, lakes, nature reserve, tourism, Gremnik"
          }
        />
        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/prizrenski-okrug/vodopad-mirusa`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/prizrenski-okrug/vodopad-mirusa"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/prizrenski-okrug/vodopad-mirusa"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/prizrenski-okrug/vodopad-mirusa"
        />

      </Helmet>


      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft
          className="arrowLeft"
          onClick={() => navigate(prizrenskiOkrugPathRoutes.home(switchLanguage))}
          style={{ fill: "white" }}
        />
        <header></header>
        <img srcSet={`${vodopadMirusa44} 450w, ${vodopadMirusa4} `} alt="Vodopad Miruša 1" loading="lazy" />

        {switchLanguage === 'rs' ?
          (
            <>

              <h2>Vodopad Miruša</h2>

              <section lang="sr">
                <p>
                  U južnom delu planine <strong>Gremnik</strong>, na nadmorskoj visini od <strong>572 metra</strong>,
                  smešten je kanjon reke <strong>Miruše</strong>, koji sa svojim strmim liticama visine do
                  <strong>200 metara</strong>, a okružen <strong>parkom prirode</strong> kojem pripada, čini predelo
                  nestvarne lepote i predstavlja jednu od najlepših prirodnih znamenitosti
                  <strong>Kosova i Metohije</strong>. <em>„Miruša“</em> je područje koje se nalazi u <strong>Metohijskoj
                    kotlini</strong>, na granici dva geografska kraja – <strong>Metohije</strong> i <strong>Prekoruplje</strong>,
                  prostirući se na prostranoj površini u okviru <strong>Miruške kotline</strong> i <strong>Podrima</strong>,
                  dolinskog kraja uz <strong>Beli Drim</strong>, na teritoriji opština <strong>Klina</strong> i <strong>Orahovac</strong>.
                </p>
              </section>

              <img srcSet={`${vodopadMirusa22} 450w, ${vodopadMirusa2}`} alt="Vodopad Miruša 2" loading="lazy" />

              <section lang="sr">
                <p>
                  <strong>Miruša</strong> je leva pritoka <strong>Belog Drima</strong>, koja izvire u podnožju planine
                  <strong>Crnoljeva</strong>, sa zapadne strane. Kanjon Miruše se prostire između <strong>Klina</strong>,
                  <strong>Mališeva</strong> i <strong>Orahovca</strong>. Reka je iskopala kanjon dug <strong>10 kilometara</strong>, sa
                  <strong>13 jezera</strong> i <strong>12 vodopada</strong> između njih, zbog čega je zaslužila naziv
                  <em>„Plitvice Metohije“</em>, dok je narod još naziva i <em>„Slapovi Miruše“</em>. Najduže je treće
                  jezero (<strong>70 metara</strong>), dok je najšire deseto jezero (<strong>50 metara</strong>). Ovaj
                  kanjon, dugačak <strong>2 kilometra</strong>, prolazi kroz južne padine planine
                  Gremnik, do vrha <strong>Zatrič</strong>, na nadmorskoj visini od <strong>360 do 630 metara</strong>.
                </p>
              </section>

              <img srcSet={`${vodopadMirusa33} 450w, ${vodopadMirusa3}`} alt="Vodopad Miruša 3" loading="lazy" />

              <section lang="sr">
                <p>
                  Celi region kanjona reke Miruše, dug <strong>30 kilometara</strong>, bogat je brojnim
                  planinskim jezerima, izvorima i rudnim bogatstvom, što doprinosi
                  slikovitosti pejzaža čija lepota oduzima dah posmatraču. <strong>Park prirode</strong>
                  prostire se na obe obale reke Miruše od samog početka kanjona. Voda je
                  uvek <em>ledeno hladna</em>.
                  <br /><br />
                  Kroz <strong>Dušku pećinu</strong>, najveću od deset, protiče potok koji stvara jezerca,
                  ponore i manje vodopade. Na vrhu krečnjačke litice <strong>Crvene stene</strong> nalaze
                  se dve pećine u kojima su za vreme <strong>Turaka</strong> bila skloništa i isposnice
                  <strong>srpskih monaha</strong>. U pećini <strong>Mala crkva</strong> pronađeni su ostaci srednjovekovne
                  freske i kamenog podzida, dok u pećini <strong>Velika crkva</strong> postoje ostaci
                  freske, oltara i molitvenika.
                </p>
              </section>

              <img srcSet={`${vodopadMirusa11} 450w, ${vodopadMirusa1}`} alt="Vodopad Miruša 4" loading="lazy" />

              <section lang="sr">
                <p>
                  U specifičnom <strong>parku prirode</strong> koji je stvoren od strane reke Miruše i
                  njenog kanjona, mogu se naći zaštićene biljne vrste kao što su <strong>kosovski
                    božur</strong> i <strong>gorocvet</strong>.
                  <br /><br />
                  Najveća izmerena <strong>dubina jezera</strong> je <strong>devet metara</strong>, a najviši vodopad, koji
                  se nalazi između šestog i sedmog jezera, ima visinu od <strong>22 metra</strong>.
                  <br /><br />
                  U predelu <strong>gornjih jezera</strong>, posebnu atrakciju predstavljaju džinovski
                  <em>„lonci“</em> sa strmo uglačanim stranama. Kraj kanjona obiluje <em>krasnim
                    oblicima reljefa</em>, kao što su <strong>vrtače</strong>, <strong>škripovi</strong> i <strong>pećine</strong> koje vertikalno
                  preseku čitav zid kanjona.
                  <br /><br />
                  Kanjon reke Miruše je zaštićen <strong>Uredbom o zaštiti predela izuzetnih
                    odlika Vlade Republike Srbije</strong>, od <strong>1998. godine</strong>.
                </p>
              </section>


            </>
          )
          :
          (
            <>

              <h2>Miruša Waterfall</h2>

              <section lang="en">
                <p>
                  In the southern part of the <strong>Gremnik Mountain</strong>, at an altitude of <strong>572 meters</strong>,
                  lies the canyon of the <strong>Miruša River</strong>. With its steep cliffs reaching up to
                  <strong>200 meters</strong> in height and surrounded by the <strong>nature park</strong> to which it belongs, it forms a landscape
                  of surreal beauty and represents one of the most beautiful natural landmarks of
                  <strong>Kosovo and Metohija</strong>. <em>"Miruša"</em> is an area located in the <strong>Metohija Basin</strong>, on the border of
                  two geographical regions – <strong>Metohija</strong> and <strong>Prekoruplje</strong>, stretching across a vast area
                  within the <strong>Miruša Basin</strong> and <strong>Podrima</strong>, a valley region along the <strong>White Drin River</strong>,
                  within the municipalities of <strong>Klina</strong> and <strong>Orahovac</strong>.
                </p>
              </section>

              <img srcSet={`${vodopadMirusa22} 450w, ${vodopadMirusa2}`} alt="Miruša Waterfall 2" loading="lazy" />

              <section lang="en">
                <p>
                  <strong>Miruša</strong> is a left tributary of the <strong>White Drin</strong>, originating at the foot of the
                  <strong>Crnoljeva Mountain</strong>, on its western side. The Miruša Canyon stretches between
                  <strong>Klina</strong>, <strong>Mališevo</strong>, and <strong>Orahovac</strong>. The river carved out a <strong>10-kilometer-long</strong> canyon,
                  featuring <strong>13 lakes</strong> and <strong>12 waterfalls</strong> between them, which earned it the nickname
                  <em>"Plitvice of Metohija"</em>, while locals also call it <em>"The Miruša Falls"</em>. The third lake is the longest
                  (<strong>70 meters</strong>), while the tenth lake is the widest (<strong>50 meters</strong>). This
                  <strong>2-kilometer-long</strong> canyon runs along the southern slopes of Gremnik Mountain,
                  reaching up to the <strong>Zatrič</strong> peak, at an altitude of <strong>360 to 630 meters</strong>.
                </p>
              </section>

              <img srcSet={`${vodopadMirusa33} 450w, ${vodopadMirusa3}`} alt="Miruša Waterfall 3" loading="lazy" />

              <section lang="en">
                <p>
                  The entire region of the <strong>Miruša River Canyon</strong>, spanning <strong>30 kilometers</strong>,
                  is rich in numerous mountain lakes, springs, and mineral resources, contributing
                  to the picturesque scenery whose beauty takes the viewer's breath away. The <strong>nature park</strong>
                  stretches along both banks of the Miruša River from the very beginning of the canyon.
                  The water is always <em>ice-cold</em>.
                  <br /><br />
                  Through <strong>Duška Cave</strong>, the largest of ten caves, flows a stream that forms
                  small lakes, sinkholes, and smaller waterfalls. At the top of the limestone cliff known as
                  <strong>Crvena Stena</strong> (Red Rock), there are two caves that served as shelters and hermitages
                  for <strong>Serbian monks</strong> during <strong>Ottoman rule</strong>. In the <strong>Small Church Cave</strong>, remains of a
                  medieval fresco and stone subwall were found, while in the <strong>Great Church Cave</strong>,
                  there are remnants of a fresco, altar, and prayer book.
                </p>
              </section>

              <img srcSet={`${vodopadMirusa11} 450w, ${vodopadMirusa1}`} alt="Miruša Waterfall 4" loading="lazy" />

              <section lang="en">
                <p>
                  In this unique <strong>nature park</strong> created by the Miruša River and its canyon, protected
                  plant species such as the <strong>Kosovo peony</strong> and <strong>adonis flower</strong> can be found.
                  <br /><br />
                  The greatest measured <strong>lake depth</strong> is <strong>nine meters</strong>, and the tallest waterfall,
                  located between the sixth and seventh lakes, has a height of <strong>22 meters</strong>.
                  <br /><br />
                  In the upper lake area, a special attraction are the giant <em>"pots"</em> with steep,
                  polished sides. The end of the canyon is rich in <em>karst landforms</em>, such as
                  <strong>sinkholes</strong>, <strong>grikes</strong>, and <strong>caves</strong> that vertically cut through the entire canyon wall.
                  <br /><br />
                  The Miruša River Canyon has been protected by the <strong>Decree on the Protection of
                    Landscapes of Exceptional Features by the Government of the Republic of Serbia</strong>,
                  since <strong>1998</strong>.
                </p>
              </section>

            </>

          )}

      </div>
    </>
  );
};

export default VodopadMirusa;