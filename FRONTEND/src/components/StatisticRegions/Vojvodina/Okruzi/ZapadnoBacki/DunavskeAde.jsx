/* eslint-disable react/no-unknown-property */
import ade1 from "../../../../../assets/images/Vojvodina/ZapadnoBackiOkrug/DunavskeAde/desktop/ade1.jpg";
import ade2 from "../../../../../assets/images/Vojvodina/ZapadnoBackiOkrug/DunavskeAde/desktop/ade2.jpg";
import ade3 from "../../../../../assets/images/Vojvodina/ZapadnoBackiOkrug/DunavskeAde/desktop/ade3.jpg";
import ade4 from "../../../../../assets/images/Vojvodina/ZapadnoBackiOkrug/DunavskeAde/desktop/ade4.jpg";
import ade11 from "../../../../../assets/images/Vojvodina/ZapadnoBackiOkrug/DunavskeAde/mobile/Made1.jpg";
import ade22 from "../../../../../assets/images/Vojvodina/ZapadnoBackiOkrug/DunavskeAde/mobile/Made2.jpg";
import ade33 from "../../../../../assets/images/Vojvodina/ZapadnoBackiOkrug/DunavskeAde/mobile/Made3.jpg";
import ade44 from "../../../../../assets/images/Vojvodina/ZapadnoBackiOkrug/DunavskeAde/mobile/Made4.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { zapadnoBackiPathRoutes } from "./ZapadnoBackiPathRoutes";
import { useContextAuth } from "../../../../../Context";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const DunavskeAde = () => {
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
        <title>
          {switchLanguage === "rs"
            ? "Dunavske Ade | Priroda i Zaštita Životne Sredine | Serbia Wonders"
            : "Danube Islands | Nature and Environmental Protection | Serbia Wonders"}
        </title>

        <meta
          name="description"
          content={
            switchLanguage === "rs"
              ? "Dunavske Ade u zapadnoj Bačkoj predstavljaju jedinstven ekosistem sa bogatim biljnim i životinjskim svetom, važan za ptice, ribolovce i ljubitelje prirode."
              : "Danube Islands in Western Bačka form a unique ecosystem rich in flora and fauna, important for birds, anglers, and nature lovers."
          }
        />

        <meta
          name="keywords"
          content={
            switchLanguage === "rs"
              ? "Dunavske Ade, zapadna Bačka, priroda, ptice, ribolov, ekologija, turizam, zaštićena područja"
              : "Danube Islands, Western Bačka, nature, birds, fishing, ecology, tourism, protected areas"
          }
        />

        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/zapadno-backi/dunavske-ade`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/zapadno-backi/dunavske-ade"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/zapadno-backi/dunavske-ade"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/zapadno-backi/dunavske-ade"
        />
      </Helmet>

      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft className="arrowLeft" onClick={() => navigate(zapadnoBackiPathRoutes.home(switchLanguage))} />
        <header></header>
        <img srcSet={`${ade44} 450w, ${ade4} `} alt="Dunavseke Ade 4" />

        {switchLanguage === 'rs' ?
          (
            <>

              <h1>Dunavseke Ade</h1>

              <section lang="sr">
                <p>
                  <strong>Dunavske Ade</strong> u <em>zapadnoj Bačkoj</em> predstavljaju <em>specifičan ekosistem</em> koji se formirao u delti <strong>Dunava</strong> i njegovim pritokama, a karakterišu ih <em>ostrva</em> i <em>rukavci reke</em>.
                </p>
                <p>
                  Ova područja su bogata <em>prirodnim lepotama</em>, raznovrsnim <em>biljnim</em> i <em>životinjskim svetom</em>, a mnoge ade su deo <strong>zaštićenih područja</strong> i <strong>prirodnih rezervata</strong>.
                </p>
              </section>

              <img srcSet={`${ade22} 450w, ${ade2} `} alt="Dunavseke Ade 2" />

              <section lang="sr">
                <p>
                  <strong>Dunavske Ade</strong> su <em>ključna staništa za ptice</em>, posebno za <em>migratorne vrste</em> koje se zaustavljaju na ovom području tokom migracija.
                </p>
                <p>
                  Zbog svoje <em>specifične flore i faune</em>, ovo područje je popularno među <strong>ljubiteljima prirode</strong> i posetiocima koji se bave <em>posmatranjem ptica (birdwatching)</em>.
                </p>
                <p>
                  Takođe, ade su i <strong>odlična destinacija</strong> za ljubitelje <em>ribolova</em>, jer <strong>Dunav</strong> nudi <em>bogatstvo riba</em>.
                </p>
              </section>

              <img srcSet={`${ade11} 450w, ${ade1} `} alt="Dunavseke Ade 1" />

              <section lang="sr">
                <p>
                  Na <em>zapadu Bačke</em>, oblasti kao što su <strong>Ada Kopački rit</strong> i <strong>Ada Bajina</strong>, smanjuju <em>šuplje rečne tokove</em> i stvaraju brojne <em>kanalčiće</em> i <em>močvarne površine</em>, što doprinosi njihovoj <strong>biološkoj raznovrsnosti</strong>.
                </p>
                <p>
                  Mnogi od tih otoka postali su popularni za <em>rekreaciju</em>, <em>turizam</em> i <em>odmor</em>, te su prepoznati kao mesta sa <strong>bogatom istorijom</strong> i <strong>tradicijom</strong>.
                </p>
              </section>

              <img srcSet={`${ade33} 450w, ${ade3} `} alt="Dunavseke Ade 3" />

              <section lang="sr">
                <p>
                  Iako su <strong>Dunavske Ade</strong> u <em>zapadnoj Bačkoj</em> često <em>nenaseljene</em>, njihov značaj za <strong>ekologiju</strong> i <strong>turizam</strong> je veliki.
                </p>
                <p>
                  One predstavljaju <em>važno područje</em> za očuvanje <strong>prirodnih resursa</strong> i pružaju <em>miran ambijent</em> za one koji žele da pobegnu od <strong>gradske vreve</strong> i uživaju u <em>divljoj prirodi</em>.
                </p>
              </section>

            </>

          )
          :
          (
            <>

              <h1>Danube River Islands</h1>

              <section lang="en">
                <p>
                  <strong>The Danube River Islands</strong> in <em>western Bačka</em> represent a <em>unique ecosystem</em> formed in the delta of the <strong>Danube</strong> and its tributaries, characterized by <em>islands</em> and <em>river branches</em>.
                </p>
                <p>
                  These areas are rich in <em>natural beauty</em>, diverse <em>plant</em> and <em>animal life</em>, and many of the islands are part of <strong>protected areas</strong> and <strong>nature reserves</strong>.
                </p>
              </section>

              <img srcSet={`${ade22} 450w, ${ade2}`} alt="Danube River Islands 2" />

              <section lang="en">
                <p>
                  <strong>The Danube Islands</strong> are <em>key habitats for birds</em>, especially <em>migratory species</em> that stop in this area during migration.
                </p>
                <p>
                  Due to their <em>distinct flora and fauna</em>, the area is popular among <strong>nature enthusiasts</strong> and visitors engaged in <em>birdwatching</em>.
                </p>
                <p>
                  The islands are also a <strong>great destination</strong> for <em>fishing enthusiasts</em>, as the <strong>Danube</strong> offers an <em>abundance of fish</em>.
                </p>
              </section>

              <img srcSet={`${ade11} 450w, ${ade1}`} alt="Danube River Islands 1" />

              <section lang="en">
                <p>
                  In the <em>west of Bačka</em>, areas such as <strong>Ada Kopački Rit</strong> and <strong>Ada Bajina</strong> reduce <em>hollow river flows</em> and create numerous <em>small canals</em> and <em>wetlands</em>, contributing to their <strong>biodiversity</strong>.
                </p>
                <p>
                  Many of these islands have become popular for <em>recreation</em>, <em>tourism</em>, and <em>relaxation</em>, and are recognized as places with a <strong>rich history</strong> and <strong>tradition</strong>.
                </p>
              </section>

              <img srcSet={`${ade33} 450w, ${ade3}`} alt="Danube River Islands 3" />

              <section lang="en">
                <p>
                  Although <strong>the Danube Islands</strong> in <em>western Bačka</em> are often <em>uninhabited</em>, their importance for <strong>ecology</strong> and <strong>tourism</strong> is significant.
                </p>
                <p>
                  They represent an <em>important area</em> for the preservation of <strong>natural resources</strong> and provide a <em>peaceful environment</em> for those seeking to escape <strong>urban noise</strong> and enjoy <em>wild nature</em>.
                </p>
              </section>

            </>
          )}

      </div>
    </>
  );
};


export default DunavskeAde;