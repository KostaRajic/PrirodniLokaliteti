/* eslint-disable react/no-unknown-property */
import apatin1 from "../../../../../assets/images/Vojvodina/ZapadnoBackiOkrug/ApatinITerminalneVode/desktop/Apatin1.jpg";
import apatin2 from "../../../../../assets/images/Vojvodina/ZapadnoBackiOkrug/ApatinITerminalneVode/desktop/Apatin2.jpg";
import apatin3 from "../../../../../assets/images/Vojvodina/ZapadnoBackiOkrug/ApatinITerminalneVode/desktop/Apatin3.jpg";
import apatin5 from "../../../../../assets/images/Vojvodina/ZapadnoBackiOkrug/ApatinITerminalneVode/desktop/Apatin5.jpg";
import apatin6 from "../../../../../assets/images/Vojvodina/ZapadnoBackiOkrug/ApatinITerminalneVode/desktop/Apatin6.jpg";
import apatin11 from "../../../../../assets/images/Vojvodina/ZapadnoBackiOkrug/ApatinITerminalneVode/mobile/MApatin1.jpg";
import apatin22 from "../../../../../assets/images/Vojvodina/ZapadnoBackiOkrug/ApatinITerminalneVode/mobile/MApatin2.jpg";
import apatin33 from "../../../../../assets/images/Vojvodina/ZapadnoBackiOkrug/ApatinITerminalneVode/mobile/MApatin3.jpg";
import apatin55 from "../../../../../assets/images/Vojvodina/ZapadnoBackiOkrug/ApatinITerminalneVode/mobile/MApatin5.jpg";
import apatin66 from "../../../../../assets/images/Vojvodina/ZapadnoBackiOkrug/ApatinITerminalneVode/mobile/MApatin6.jpg";

import apatinM1 from "../../../../../assets/images/Vojvodina/ZapadnoBackiOkrug/ApatinITerminalneVode/muzeji/CrkvaSvApostola.jpg";
import apatinM2 from "../../../../../assets/images/Vojvodina/ZapadnoBackiOkrug/ApatinITerminalneVode/muzeji/MuzejPodunavskihNemaca.jpg";
import apatinM3 from "../../../../../assets/images/Vojvodina/ZapadnoBackiOkrug/ApatinITerminalneVode/muzeji/NikolaTesla.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { useEffect, useState } from "react";
import { zapadnoBackiPathRoutes } from "./ZapadnoBackiPathRoutes";
import { useContextAuth } from "../../../../../Context";
import { Helmet } from "react-helmet-async";

const Apatin = () => {
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
            ? "Apatin i Terminalne Vode | Priroda i Wellness u Vojvodini | Serbia Wonders"
            : "Apatin and Thermal Waters | Nature and Wellness in Vojvodina | Serbia Wonders"}
        </title>

        <meta
          name="description"
          content={
            switchLanguage === "rs"
              ? "Apatin, grad na obali Dunava, poznat po termalnim vodama, ribolovu i bogatoj vojvođanskoj tradiciji. Idealno mesto za ljubitelje prirode i wellness turizam."
              : "Apatin, a town on the banks of the Danube, known for thermal waters, fishing, and rich Vojvodina traditions. A perfect spot for nature lovers and wellness tourism."
          }
        />

        <meta
          name="keywords"
          content={
            switchLanguage === "rs"
              ? "Apatin, termalne vode, Dunav, ribolov, vojvođanska tradicija, wellness, priroda, Zapadna Bačka"
              : "Apatin, thermal waters, Danube, fishing, Vojvodina tradition, wellness, nature, West Bačka"
          }
        />

        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/zapadno-backi/apatin-i-terminalne-vode`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/zapadno-backi/apatin-i-terminalne-vode"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/zapadno-backi/apatin-i-terminalne-vode"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/zapadno-backi/apatin-i-terminalne-vode"
        />

      </Helmet>


      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft className="arrowLeft" onClick={() => navigate(zapadnoBackiPathRoutes.home(switchLanguage))} />

        <header></header>
        <img srcSet={`${apatin11} 450w, ${apatin1} `} alt="apatin1" />

        {switchLanguage === 'rs' ?
          (
            <>

              <h2>Apatin i Terminalne Vode</h2>

              <section lang="sr">
                <p>
                  <strong>Apatin</strong>, smešten na <em>severozapadu Srbije</em>, u <strong>Zapadno Bačkom okrugu</strong>, poznat je po svojoj <em>istoriji</em>, <em>prirodnim resursima</em> i <em>turističkim potencijalima</em>.
                </p>
                <p>
                  Grad leži na <strong>obali Dunava</strong>, što mu daje poseban značaj kao destinaciji za <em>ljubitelje prirode</em>, <em>reke</em> i <em>autentičnih vojvođanskih pejzaža</em>.
                </p>
              </section>

              <img srcSet={`${apatin22} 450w, ${apatin2} `} alt="apatin2" />

              <section lang="sr">
                <p>
                  <strong>Apatin</strong> je poznat po svojoj <strong>Apatinskoj pivari</strong>, jednoj od <em>najstarijih u regionu</em>, kao i <em>salašima u okolini</em> gde se mogu probati <em>tradicionalna jela</em> i uživati u <em>autentičnom vojvođanskom ambijentu</em>.
                </p>
                <p>
                  Pored toga, <em>manifestacije</em> i <em>festivali</em> dodatno obogaćuju <strong>turističku ponudu</strong>.
                  <strong>Apatin</strong> spaja <em>prirodne resurse</em>, <em>kulturno nasleđe</em> i <em>moderni turizam</em>, pružajući <strong>nezaboravno iskustvo</strong> svakom posetiocu.
                </p>
              </section>

              <div className="displayFlex">
                <div>
                  <img src={apatinM1} alt="Crkva Sv. Apostola" />
                  <p>Crkva svetih Apostola</p>
                </div>
                <div>
                  <img src={apatinM2} alt="Muzej podunavskih nemaca" />
                  <p>Muzej podunavskih nemaca</p>
                </div>
                <div>
                  <img src={apatinM3} alt="Nikola Tesla" />
                  <p>Spomenik Nikoli Tesli</p>
                </div>
              </div>

              <img srcSet={`${apatin55} 450w, ${apatin5} `} alt="apatin3" />

              <section lang="sr">
                <p>
                  <strong>Dunav</strong>, sa svojim <em>adama</em> i <em>rukavcima</em>, predstavlja <strong>srce prirodnih atrakcija Apatina</strong>.
                  Ova područja pružaju <em>idealne uslove</em> za <strong>ribolov</strong>, <em>plovidbu</em> i <em>uživanje u mirnim pejzažima</em>.
                </p>
                <p>
                  <strong>Riblji fond</strong> privlači <em>sportske ribolovce</em>, dok reka nudi <em>nezaboravne doživljaje</em> tokom <em>vožnje čamcem</em> ili <em>organizovanih tura</em>.
                </p>
                <p>
                  <em>Letnje manifestacije na Dunavu</em>, poput <strong>Ribarskih večeri</strong>, okupljaju <em>brojne posetioce</em> i promovišu <strong>tradiciju ovog kraja</strong>.
                  <strong>Biciklističke</strong> i <strong>pešačke staze</strong> kroz <em>okolinu Apatina</em> idealne su za <em>rekreativce</em> i <em>ljubitelje prirode</em>.
                </p>
              </section>

              <img srcSet={`${apatin33} 450w, ${apatin3} `} alt="apatin4" />

              <section lang="sr">
                <p>
                  Poseban značaj imaju <strong>termalne vode</strong>, poznate po svom <em>lekovitom sastavu</em> i <em>temperaturi od oko 50°C</em>.
                  Ove vode se koriste za <em>tretman reumatskih bolesti</em>, <em>problema sa mišićima i zglobovima</em>, kao i za <em>oporavak nakon povreda</em>.
                </p>
                <p>
                  Njihova <strong>lekovita svojstva</strong> čine ih osnovom <strong>zdravstvenog</strong> i <strong>wellness turizma</strong>.
                  <strong>Termalne vode</strong> privlače posetioce koji traže <em>opuštanje</em> i <em>poboljšanje opšteg zdravlja</em> u <em>prirodnom okruženju</em>.
                </p>
              </section>

              <img srcSet={`${apatin66} 450w, ${apatin6} `} alt="apatin4" />

              <section lang="sr">
                <p>
                  Posetite <strong>Apatin</strong>, grad na <em>obali Dunava</em>, gde se spajaju <em>prirodne lepote</em>, <strong>termalne vode</strong> i <em>bogata vojvođanska tradicija</em>, pružajući <strong>savršen odmor</strong> i <em>autentično iskustvo</em>.
                </p>
              </section>


            </>
          )
          :
          (
            <>

              <h2>Apatin and Thermal Waters</h2>

              <section lang="en">
                <p>
                  <strong>Apatin</strong>, located in the <em>northwest of Serbia</em>, in the <strong>West Bačka District</strong>, is known for its <em>history</em>, <em>natural resources</em>, and <em>tourist potentials</em>.
                </p>
                <p>
                  The town lies on the <strong>banks of the Danube</strong>, which gives it special significance as a destination for <em>nature lovers</em>, <em>river enthusiasts</em>, and <em>authentic Vojvodina landscapes</em>.
                </p>
              </section>

              <img srcSet={`${apatin22} 450w, ${apatin2} `} alt="apatin2" />

              <section lang="en">
                <p>
                  <strong>Apatin</strong> is famous for its <strong>Apatin Brewery</strong>, one of the <em>oldest in the region</em>, as well as the <em>farms in the surroundings</em> where you can taste <em>traditional dishes</em> and enjoy an <em>authentic Vojvodina atmosphere</em>.
                </p>
                <p>
                  Additionally, <em>events</em> and <em>festivals</em> further enrich the <strong>tourist offer</strong>.
                  <strong>Apatin</strong> combines <em>natural resources</em>, <em>cultural heritage</em>, and <em>modern tourism</em>, providing a <strong>memorable experience</strong> for every visitor.
                </p>
              </section>

              <div className="displayFlex">
                <div>
                  <img src={apatinM1} alt="Church of Holy Apostles" />
                  <p>Church of the Holy Apostles</p>
                </div>
                <div>
                  <img src={apatinM2} alt="Museum of Danube Germans" />
                  <p>Museum of Danube Germans</p>
                </div>
                <div>
                  <img src={apatinM3} alt="Nikola Tesla" />
                  <p>Nikola Tesla Monument</p>
                </div>
              </div>

              <img srcSet={`${apatin55} 450w, ${apatin5} `} alt="apatin3" />

              <section lang="en">
                <p>
                  The <strong>Danube</strong>, with its <em>islands</em> and <em>channels</em>, represents the <strong>heart of Apatin’s natural attractions</strong>.
                  These areas provide <em>ideal conditions</em> for <strong>fishing</strong>, <em>boating</em>, and <em>enjoying peaceful landscapes</em>.
                </p>
                <p>
                  The <strong>fish population</strong> attracts <em>sport fishermen</em>, while the river offers <em>unforgettable experiences</em> during <em>boat rides</em> or <em>organized tours</em>.
                </p>
                <p>
                  <em>Summer events on the Danube</em>, such as the <strong>Fishermen’s Evenings</strong>, gather <em>numerous visitors</em> and promote the <strong>tradition of the region</strong>.
                  <strong>Bicycle</strong> and <strong>hiking trails</strong> around <em>Apatin</em> are ideal for <em>recreationalists</em> and <em>nature lovers</em>.
                </p>
              </section>

              <img srcSet={`${apatin33} 450w, ${apatin3} `} alt="apatin4" />

              <section lang="en">
                <p>
                  Special importance is given to the <strong>thermal waters</strong>, known for their <em>healing composition</em> and <em>temperature of about 50°C</em>.
                  These waters are used for the <em>treatment of rheumatic diseases</em>, <em>muscle and joint problems</em>, as well as for <em>recovery after injuries</em>.
                </p>
                <p>
                  Their <strong>healing properties</strong> form the basis of <strong>health</strong> and <strong>wellness tourism</strong>.
                  <strong>Thermal waters</strong> attract visitors seeking <em>relaxation</em> and <em>improvement of general health</em> in a <em>natural environment</em>.
                </p>
              </section>

              <img srcSet={`${apatin66} 450w, ${apatin6} `} alt="apatin4" />

              <section lang="en">
                <p>
                  Visit <strong>Apatin</strong>, a town on the <em>banks of the Danube</em>, where <em>natural beauties</em>, <strong>thermal waters</strong>, and <em>rich Vojvodina tradition</em> combine to provide a <strong>perfect vacation</strong> and an <em>authentic experience</em>.
                </p>
              </section>


            </>

          )}

      </div>
    </>
  );
};


export default Apatin;