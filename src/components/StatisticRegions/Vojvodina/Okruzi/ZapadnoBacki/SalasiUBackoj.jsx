/* eslint-disable react/no-unknown-property */
import salasi1 from "../../../../../assets/images/Vojvodina/ZapadnoBackiOkrug/SalasiUBackoj/desktop/Salasi1.jpg";
import salasi4 from "../../../../../assets/images/Vojvodina/ZapadnoBackiOkrug/SalasiUBackoj/desktop/Salasi4.jpg";
import salasi2 from "../../../../../assets/images/Vojvodina/ZapadnoBackiOkrug/SalasiUBackoj/desktop/Salasi2.jpg";
import salasi3 from "../../../../../assets/images/Vojvodina/ZapadnoBackiOkrug/SalasiUBackoj/desktop/Salasi3.jpg";
import salasi11 from "../../../../../assets/images/Vojvodina/ZapadnoBackiOkrug/SalasiUBackoj/mobile/MSalasi1.jpg";
import salasi44 from "../../../../../assets/images/Vojvodina/ZapadnoBackiOkrug/SalasiUBackoj/mobile/MSalasi4.jpg";
import salasi22 from "../../../../../assets/images/Vojvodina/ZapadnoBackiOkrug/SalasiUBackoj/mobile/MSalasi2.jpg";
import salasi33 from "../../../../../assets/images/Vojvodina/ZapadnoBackiOkrug/SalasiUBackoj/mobile/MSalasi3.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { zapadnoBackiPathRoutes } from "./ZapadnoBackiPathRoutes";
import { useContextAuth } from "../../../../../Context";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const SalasiUBackoj = () => {
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
            ? "Salaši u Bačkoj | Tradicionalna Vojvođanska Seoska Imanja | Serbia Wonders"
            : "Salaši in Bačka | Traditional Vojvodina Farmsteads | Serbia Wonders"}
        </title>

        <meta
          name="description"
          content={
            switchLanguage === "rs"
              ? "Salaši u Bačkoj su tradicionalna vojvođanska seoska imanja sa autentičnom arhitekturom, domaćom hranom i kulturnim manifestacijama, idealna destinacija za seoski turizam."
              : "Salaši in Bačka are traditional Vojvodina farmsteads featuring authentic architecture, homemade food, and cultural events, making them ideal rural tourism destinations."
          }
        />

        <meta
          name="keywords"
          content={
            switchLanguage === "rs"
              ? "Salaši, Bačka, Vojvodina, seoski turizam, tradicionalna imanja, poljoprivreda, kulturna baština"
              : "Salaši, Bačka, Vojvodina, rural tourism, traditional farmsteads, agriculture, cultural heritage"
          }
        />

        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/zapadno-backi/salasi-u-backoj`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/zapadno-backi/salasi-u-backoj"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/zapadno-backi/salasi-u-backoj"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/zapadno-backi/salasi-u-backoj"
        />
      </Helmet>


      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft className="arrowLeft" onClick={() => navigate(zapadnoBackiPathRoutes.home(switchLanguage))} />
        <header></header>
        <img srcSet={`${salasi33} 450w, ${salasi3} `} alt="Salaši u Bačkoj 1" />

        {switchLanguage === 'rs' ?
          (
            <>
              <h2>Salaši u Bačkoj</h2>

              <section lang="sr">
                <p>
                  <strong>Salaši u Bačkoj</strong> predstavljaju <em>tradicionalna seoska imanja</em> koja su
                  karakteristična za <strong>vojvođansku regiju</strong>. Ova domaćinstva su nekada bila
                  okrenuta <strong>poljoprivredi, stočarstvu</strong> i <strong>proizvodnji hrane</strong>, dok su danas i
                  značajna <em>turistička destinacija</em> koja čuva duh prošlih vremena.
                </p>
              </section>

              <img srcSet={`${salasi11} 450w, ${salasi1} `} alt="Salaši u Bačkoj 2" />

              <section lang="sr">
                <p>
                  Salaši se izdvajaju svojom <strong>autentičnom arhitekturom</strong> koja uključuje <strong>porodične kuće</strong>,
                  <strong>štale</strong> i druge <strong>pomoćne objekte</strong>. Mnogi su <em>očuvali svoju izvornu formu</em>, ali su
                  danas prilagođeni <em>turizmu</em> – nude <strong>domaću hranu</strong>, <strong>vina</strong> i
                  <strong>kulturno-zabavne manifestacije</strong>.
                </p>
              </section>

              <img srcSet={`${salasi44} 450w, ${salasi4} `} alt="Salaši u Bačkoj 3" />

              <section lang="sr">
                <p>
                  Na mnogim salašima i dalje se <strong>bavi stočarstvom</strong>, dok su drugi okruženi
                  <strong>voćnjacima</strong> i <strong>vinogradima</strong>. Smešteni su u <em>mirnom, prirodnom okruženju</em>,
                  što ih čini idealnim mestima za <strong>seoski turizam</strong>, <strong>biciklizam</strong>, <strong>jahanje</strong>
                  i druge <em>aktivnosti na otvorenom</em>.
                </p>
              </section>

              <img srcSet={`${salasi22} 450w, ${salasi2} `} alt="Salaši u Bačkoj 4" />

              <section lang="sr">
                <p>
                  <strong>Bačka</strong> je poznata po <em>etnološkom bogatstvu</em>, a salaši su jedan od najlepših izraza te
                  <strong>kulturne baštine</strong>. Često se organizuju <strong>tradicionalni festivali</strong> kao što su
                  <em>žetve</em>, <em>berbe</em> i <em>gastronomske manifestacije</em>, koje privlače turiste
                  željne <strong>autentičnog vojvođanskog iskustva</strong>.
                </p>
              </section>


            </>
          )
          :
          (
            <>

              <h2>Farmsteads in Bačka</h2>

              <section lang="en">
                <p>
                  <strong>Farmsteads in Bačka</strong> represent <em>traditional rural estates</em> characteristic of the
                  <strong>Vojvodina region</strong>. These households were once focused on
                  <strong>agriculture, livestock farming</strong>, and <strong>food production</strong>, but today they are also
                  an important <em>tourist destination</em> preserving the spirit of the past.
                </p>
              </section>

              <img srcSet={`${salasi11} 450w, ${salasi1} `} alt="Farmsteads in Bačka 2" />

              <section lang="en">
                <p>
                  Farmsteads are distinguished by their <strong>authentic architecture</strong>, which includes
                  <strong>family houses</strong>, <strong>barns</strong>, and other <strong>auxiliary buildings</strong>. Many have
                  <em>preserved their original form</em>, but have been adapted for <em>tourism</em> — offering
                  <strong>homemade food</strong>, <strong>wine</strong>, and <strong>cultural and entertainment events</strong>.
                </p>
              </section>

              <img srcSet={`${salasi44} 450w, ${salasi4} `} alt="Farmsteads in Bačka 3" />

              <section lang="en">
                <p>
                  Many farmsteads still engage in <strong>livestock farming</strong>, while others are surrounded by
                  <strong>orchards</strong> and <strong>vineyards</strong>. They are located in <em>peaceful natural settings</em>,
                  making them ideal spots for <strong>rural tourism</strong>, <strong>cycling</strong>, <strong>horseback riding</strong>,
                  and other <em>outdoor activities</em>.
                </p>
              </section>

              <img srcSet={`${salasi22} 450w, ${salasi2} `} alt="Farmsteads in Bačka 4" />

              <section lang="en">
                <p>
                  <strong>Bačka</strong> is known for its <em>ethnological richness</em>, and farmsteads are among the most vivid
                  expressions of that <strong>cultural heritage</strong>. <strong>Traditional festivals</strong> are often held, such as
                  <em>harvests</em>, <em>grape picking</em>, and <em>culinary events</em>, which attract tourists seeking an
                  <strong>authentic Vojvodinian experience</strong>.
                </p>
              </section>

            </>
          )}

      </div>
    </>
  );
};


export default SalasiUBackoj;