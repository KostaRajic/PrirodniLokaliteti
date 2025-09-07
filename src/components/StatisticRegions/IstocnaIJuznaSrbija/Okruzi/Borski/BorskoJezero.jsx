/* eslint-disable react/no-unknown-property */
import borskoJezero1 from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/BorskoJezero/desktop/borskoJezero1.jpg";
import borskoJezero2 from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/BorskoJezero/desktop/borskoJezero2.jpg";
import borskoJezero3 from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/BorskoJezero/desktop/borskoJezero3.jpg";
import borskoJezero4 from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/BorskoJezero/desktop/borskoJezero4.jpg";
import borskoJezero5 from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/BorskoJezero/desktop/borskoJezero5.jpg";
import borskoJezero11 from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/BorskoJezero/mobile/borskoJezeroM1.jpg";
import borskoJezero22 from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/BorskoJezero/mobile/borskoJezeroM2.jpg";
import borskoJezero33 from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/BorskoJezero/mobile/borskoJezeroM3.jpg";
import borskoJezero44 from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/BorskoJezero/mobile/borskoJezeroM4.jpg";
import borskoJezero55 from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/BorskoJezero/mobile/borskoJezeroM5.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { borskiOkrugPathRoutes } from "./BorskiOkrugPathRoutes";
import { useContextAuth } from "../../../../../Context";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const BorskoJezero = () => {
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

        <title>{switchLanguage === 'rs' ? "Borsko Jezero – Turistički Biser Istočne Srbije | Serbia Wonders" : "Borsko Lake – The Tourist Jewel of Eastern Serbia | Serbia Wonders"}</title>
        <meta
          name="description"
          content={switchLanguage === 'rs' ?
            "Borsko jezero – veštačko jezero u podnožju Crnog vrha kod Bora, idealno za letnji turizam, kupanje, kampovanje, sport i odmor u prirodi. Letnja sezona, plaže, hoteli, autokamp i sportski tereni."
            :
            "Bor Lake – an artificial lake at the foot of Crni Vrh near Bor, ideal for summer tourism, swimming, camping, sports, and relaxing in nature. Summer season, beaches, hotels, campground, and sports fields."
          }
        />
        <meta
          name="keywords"
          content={switchLanguage === 'rs' ?
            "Borsko jezero, Bor, turizam u Srbiji, letovanje u Srbiji, jezera Srbija, kupanje, kampovanje, hoteli, Crni vrh, sportski tereni, pedaline, vikend naselja, priroda Srbije"
            :
            "Bor Lake, Bor, tourism in Serbia, summer vacation in Serbia, lakes in Serbia, swimming, camping, hotels, Crni Vrh, sports fields, pedal boats, weekend homes, nature of Serbia"
          }
        />
        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/borski-okrug/borsko-jezero`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/borski-okrug/borsko-jezero"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/borski-okrug/borsko-jezero"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/borski-okrug/borsko-jezero"
        />

      </Helmet>



      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft
          className="arrowLeft"
          onClick={() => navigate(borskiOkrugPathRoutes.home(switchLanguage))}
          style={{ fill: "white" }}
        />
        <header></header>
        <img srcSet={`${borskoJezero11} 450w, ${borskoJezero1} `} alt="Borsko Jezero 1" loading="lazy" />

        {switchLanguage === 'rs' ?
          (
            <>

              <h2>Borsko Jezero</h2>

              <section lang="sr">
                <p>
                  <strong>Borsko jezero</strong> je veštačko jezero koje je nastalo <em>1959. godine</em> podizanjem
                  brane i akumulacijom voda rečice <strong>Valja Žoni</strong>, <strong>Marecove reke</strong> i dela sliva
                  <strong>Zlotske reke</strong>. Jezero se nalazi u podnožju planine <strong>Crni vrh</strong>, u blizini
                  <strong>Bora</strong>. Voda iz jezera prvenstveno je namenjena za potrebe
                  <strong>Rudarsko-topioničarskog basena</strong>, ali takođe doprinosi i razvoju turizma.
                </p>
              </section>

              <img srcSet={`${borskoJezero22} 450w, ${borskoJezero2}`} alt="Borsko Jezero 2" loading="lazy" />

              <section lang="sr">
                <p>
                  Tokom leta, turisti provode vreme na <strong>Borskom jezeru</strong>. Svake godine se u
                  jezero pušta nekoliko tona <em>riblje mladji</em> kako bi se poboljšao riblji
                  fond. Tokom sezone, koja traje od početka maja do kraja septembra,
                  temperatura vode dostiže čak <strong>26 stepeni</strong>, što je idealno za kupanje.
                </p>
              </section>

              <img srcSet={`${borskoJezero33} 450w, ${borskoJezero3}`} alt="Borsko Jezero 3" loading="lazy" />

              <section lang="sr">
                <p>
                  Zimi je jezero potpuno prekriveno ledom. Najviši vodostaji javljaju se u
                  proleće, dok su najniži krajem leta i početkom jeseni. Razlika između
                  maksimalnog i minimalnog vodostaja prelazi <strong>10 metara</strong>, što nepovoljno
                  utiče na biljni i životinjski svet jezera. Korišćenjem priliva vode iz
                  <strong>Zlotske reke</strong>, nivo jezera se tokom godine održava na oko <em>2 metra ispod preliva</em>.
                </p>
              </section>

              <img srcSet={`${borskoJezero44} 450w, ${borskoJezero4}`} alt="Borsko Jezero 4" loading="lazy" />

              <section lang="sr">
                <p>
                  <strong>Borsko jezero</strong> je okruženo listopadnim i četinarskim šumama, prirodnim
                  zelenim proplancima i livadama na nadmorskoj visini od <strong>438 metara</strong>. Uz
                  obalu jezera izgrađeni su hoteli <em>„Metalurg“</em>, <em>„Jezero“</em>, <em>„Vertigo City“</em> i
                  vile, dok su na oko <strong>200 metara</strong> od jezera smeštena velika vikend naselja.
                  Na samoj obali jezera turistima je na raspolaganju i <strong>autokamp</strong> kapaciteta
                  oko <strong>300 prikolica</strong>. Kamp se nalazi na udaljenosti od <strong>1 kilometra</strong> od
                  hotela <em>„Jezero“</em> u pravcu <strong>Žagubice</strong>.
                </p>
              </section>

              <img srcSet={`${borskoJezero55} 450w, ${borskoJezero5}`} alt="Borsko Jezero 5" loading="lazy" />

              <section lang="sr">
                <p>
                  Na obali <strong>Borskog jezera</strong> izgrađene su četiri veće plaže, kao i nekoliko
                  manjih. Kupači na glavnoj plaži tokom celokupne sezone imaju nadzor
                  spasilaca. Sportistima je tokom letnje sezone na raspolaganju kompleks
                  sportskih terena kod hotela <em>„Jezero“</em>. Ovaj kompleks uključuje terene za
                  košarku, fudbal, rukomet, odbojku (običnu i na pesku) i tenis. <br /><br />
                  Trenažerke staze obuhvataju celo jezero, počinju od plaže <em>Tropski bar</em>,
                  prolaze pored hotela <em>„Jezero“</em>, Glavne plaže, hotela <em>„Metalurg“</em>,
                  autokampa, različitih četinarskih i listopadnih šuma, pašnjaka i livada,
                  te završavaju kod brane na <strong>Borskom jezeru</strong>. Staze se povezuju sa trasom
                  <strong>Crnovrške pruge</strong> koja vodi do <strong>Bora</strong>. Na Glavnoj plaži moguće je iznajmiti
                  čamce i pedaline, kao i uživati u različitim vodenim sadržajima.
                </p>
              </section>


            </>
          )
          :
          (
            <>

              <h2>Borsko Lake</h2>

              <section lang="en">
                <p>
                  <strong>Borsko Lake</strong> is an artificial lake created in <em>1959</em> by constructing
                  a dam and accumulating waters from the stream <strong>Valja Žoni</strong>, the <strong>Marecova River</strong>, and part of the
                  <strong>Zlotska River</strong> basin. The lake is located at the foot of the <strong>Crni vrh</strong> mountain, near
                  the town of <strong>Bor</strong>. The water from the lake is primarily intended to meet the needs of the
                  <strong>Mining and Smelting Basin</strong>, but it also contributes to tourism development.
                </p>
              </section>

              <img srcSet={`${borskoJezero22} 450w, ${borskoJezero2}`} alt="Borsko Lake 2" loading="lazy" />

              <section lang="en">
                <p>
                  During summer, tourists spend time at <strong>Borsko Lake</strong>. Every year, several tons of <em>fish fry</em> are released into
                  the lake to improve the fish stock. During the season, which lasts from early May to late September,
                  the water temperature reaches up to <strong>26 degrees Celsius</strong>, making it ideal for swimming.
                </p>
              </section>

              <img srcSet={`${borskoJezero33} 450w, ${borskoJezero3}`} alt="Borsko Lake 3" loading="lazy" />

              <section lang="en">
                <p>
                  In winter, the lake is completely covered with ice. The highest water levels occur in
                  spring, while the lowest are at the end of summer and the beginning of autumn. The difference between
                  the maximum and minimum water levels exceeds <strong>10 meters</strong>, which adversely
                  affects the lake's plant and animal life. By using the inflow from the
                  <strong>Zlotska River</strong>, the lake level is maintained throughout the year at about <em>2 meters below the overflow</em>.
                </p>
              </section>

              <img srcSet={`${borskoJezero44} 450w, ${borskoJezero4}`} alt="Borsko Lake 4" loading="lazy" />

              <section lang="en">
                <p>
                  <strong>Borsko Lake</strong> is surrounded by deciduous and coniferous forests, natural
                  green clearings, and meadows at an altitude of <strong>438 meters</strong>. Along
                  the lake shore, hotels <em>“Metalurg”</em>, <em>“Jezero”</em>, <em>“Vertigo City”</em>, and villas have been built, while
                  large weekend settlements are located about <strong>200 meters</strong> from the lake.
                  On the very shore of the lake, tourists also have access to a <strong>campground</strong> with a capacity
                  of about <strong>300 trailers</strong>. The camp is located approximately <strong>1 kilometer</strong> from
                  the hotel <em>“Jezero”</em> towards <strong>Žagubica</strong>.
                </p>
              </section>

              <img srcSet={`${borskoJezero55} 450w, ${borskoJezero5}`} alt="Borsko Lake 5" loading="lazy" />

              <section lang="en">
                <p>
                  On the shore of <strong>Borsko Lake</strong>, four larger beaches and several smaller ones have been built.
                  Swimmers at the main beach have lifeguard supervision throughout the entire season.
                  During the summer season, athletes have access to a complex of sports fields near the hotel <em>“Jezero”</em>.
                  This complex includes courts for basketball, football, handball, volleyball (both regular and beach), and tennis. <br /><br />
                  Training trails surround the entire lake, starting from the <em>Tropical Bar</em> beach,
                  passing by the hotel <em>“Jezero”</em>, the Main Beach, the hotel <em>“Metalurg”</em>,
                  the campground, various coniferous and deciduous forests, pastures, and meadows,
                  and ending at the dam on <strong>Borsko Lake</strong>. The trails connect with the route of the
                  <strong>Crnovrška railway</strong> that leads to <strong>Bor</strong>. At the Main Beach, it is possible to rent
                  boats and pedal boats, as well as enjoy various water activities.
                </p>
              </section>


            </>
          )}

      </div>
    </>
  );
};


export default BorskoJezero;