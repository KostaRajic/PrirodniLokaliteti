/* eslint-disable react/no-unknown-property */
import GP3 from "../../../../../assets/images/Vojvodina/ZapadnoBackiOkrug/GornjePodunavlje/desktop/GP3.jpg";
import GP1 from "../../../../../assets/images/Vojvodina/ZapadnoBackiOkrug/GornjePodunavlje/desktop/GP1.jpg";
import GP4 from "../../../../../assets/images/Vojvodina/ZapadnoBackiOkrug/GornjePodunavlje/desktop/GP4.jpg";
import GP2 from "../../../../../assets/images/Vojvodina/ZapadnoBackiOkrug/GornjePodunavlje/desktop/GP2.jpg";
import GP5 from "../../../../../assets/images/Vojvodina/ZapadnoBackiOkrug/GornjePodunavlje/desktop/GP5.jpg";
import GP33 from "../../../../../assets/images/Vojvodina/ZapadnoBackiOkrug/GornjePodunavlje/mobile/MGP3.jpg";
import GP11 from "../../../../../assets/images/Vojvodina/ZapadnoBackiOkrug/GornjePodunavlje/mobile/MGP1.jpg";
import GP44 from "../../../../../assets/images/Vojvodina/ZapadnoBackiOkrug/GornjePodunavlje/mobile/MGP4.jpg";
import GP22 from "../../../../../assets/images/Vojvodina/ZapadnoBackiOkrug/GornjePodunavlje/mobile/MGP2.jpg";
import GP55 from "../../../../../assets/images/Vojvodina/ZapadnoBackiOkrug/GornjePodunavlje/mobile/MGP5.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { zapadnoBackiPathRoutes } from "./ZapadnoBackiPathRoutes";
import { useContextAuth } from "../../../../../Context";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const GornjePodunavlje = () => {
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
            ? "Gornje Podunavlje | Specijalni Rezervat Prirode | Serbia Wonders"
            : "Upper Danube Floodplain | Special Nature Reserve | Serbia Wonders"}
        </title>

        <meta
          name="description"
          content={
            switchLanguage === "rs"
              ? "Gornje Podunavlje je specijalni rezervat prirode u Zapadno Bačkom okrugu, poznat po netaknutim močvarnim područjima, bogatom biljnim i životinjskim svetom i idealan za ekoturizam."
              : "Upper Danube Floodplain is a special nature reserve in Western Bačka District, known for pristine wetlands, rich flora and fauna, and ideal for ecotourism."
          }
        />

        <meta
          name="keywords"
          content={
            switchLanguage === "rs"
              ? "Gornje Podunavlje, rezervat prirode, Dunav, močvare, ekoturizam, ribolov, posmatranje ptica, Zapadna Bačka"
              : "Upper Danube Floodplain, nature reserve, Danube, wetlands, ecotourism, fishing, birdwatching, Western Bačka"
          }
        />

        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/zapadno-backi/gornje-podunavlje`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/zapadno-backi/gornje-podunavlje"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/zapadno-backi/gornje-podunavlje"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/zapadno-backi/gornje-podunavlje"
        />
      </Helmet>


      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft className="arrowLeft" onClick={() => navigate(zapadnoBackiPathRoutes.home(switchLanguage))} />
        <header></header>
        <img srcSet={`${GP55} 450w, ${GP5} `} alt="Gornje Podunavlje 1" />

        {switchLanguage === 'rs' ?
          (
            <>
              <h2>Gornje Podunavlje</h2>

              <section lang="sr">
                <p>
                  <strong>Gornje Podunavlje</strong> je <strong>specijalni rezervat prirode</strong> na <em>desnoj obali Dunava</em> u <strong>Zapadno Bačkom okrugu</strong>.
                </p>
                <p>
                  Proteže se na preko <em>20.000 hektara</em> i predstavlja jedno od <strong>najočuvanijih močvarnih područja u Srbiji</strong>.
                </p>
                <p>
                  Ovo područje je deo <strong>međunarodno značajnih močvara</strong> i uključeno je u mrežu <strong>zaštićenih područja Evrope</strong>.
                </p>
              </section>

              <img srcSet={`${GP11} 450w, ${GP1} `} alt="Gornje Podunavlje 2" />

              <section lang="sr">
                <p>
                  <strong>Gornje Podunavlje</strong> je <em>popularna destinacija za ekoturizam</em>.
                </p>
                <p>
                  Posetioci mogu uživati u <em>vožnji čamcima</em> kroz mrežu <strong>dunavskih rukavaca</strong>, <em>posmatranju ptica</em>, <em>planinarenju</em> i <em>biciklizmu</em>.
                </p>
                <p>
                  Ribolovci ovde pronalaze <strong>bogate riblje vode</strong>, dok ljubitelji prirode mogu istraživati <em>očuvane pejzaže</em> i uživati u <em>miru i tišini</em>.
                </p>
              </section>

              <img srcSet={`${GP44} 450w, ${GP4} `} alt="Gornje Podunavlje 3" />

              <section lang="sr">
                <p>
                  <em>Idealno je za porodice, istraživače i ekoturiste</em> koji žele da provedu vreme u <em>tišini i miru</em>, daleko od <strong>gradske vreve</strong>.
                </p>
                <p>
                  Ovaj <strong>prirodni biser</strong> pruža priliku da posetioci dožive <strong>Dunav</strong> na jedinstven način, kroz <em>plovidbu njegovim rukavcima</em> i <em>posmatranje bogate flore i faune</em>.
                </p>
              </section>

              <img srcSet={`${GP33} 450w, ${GP3} `} alt="Gornje Podunavlje 4" />

              <section lang="sr">
                <p>
                  Ovaj <strong>rezervat</strong> je pravi <strong>biser prirode</strong>, značajan ne samo za <em>očuvanje biodiverziteta</em>, već i za <em>promovisanje održivog turizma</em> i <em>podizanje svesti</em> o važnosti <strong>očuvanja prirodnih staništa</strong>.
                </p>
                <p>
                  <strong>Gornje Podunavlje</strong> je <em>idealno mesto</em> za <em>ljubitelje prirode</em>, <em>istraživače</em> i sve koji žele da se povežu sa <em>netaknutim okruženjem</em>.
                </p>
              </section>

              <img srcSet={`${GP22} 450w, ${GP2} `} alt="Gornje Podunavlje 5" />

              <section lang="sr">
                <p>
                  Istražite <strong>Gornje Podunavlje</strong>, oazu <em>netaknute prirode</em> uz <strong>Dunav</strong>, idealnu za <em>posmatranje ptica</em>, <em>vožnju čamcem</em> i uživanje u <em>miru močvarnih pejzaža</em>.
                </p>
              </section>


            </>
          )
          :
          (
            <>
              <h2>Upper Danube Floodplain</h2>

              <section lang="en">
                <p>
                  <strong>Upper Danube Floodplain</strong> is a <strong>special nature reserve</strong> on the <em>right bank of the Danube</em> in the <strong>West Bačka District</strong>.
                </p>
                <p>
                  It stretches over <em>20,000 hectares</em> and represents one of the <strong>best preserved wetland areas in Serbia</strong>.
                </p>
                <p>
                  This area is part of <strong>internationally important wetlands</strong> and included in the network of <strong>protected areas of Europe</strong>.
                </p>
              </section>

              <img srcSet={`${GP11} 450w, ${GP1} `} alt="Upper Danube Floodplain 2" />

              <section lang="en">
                <p>
                  <strong>Upper Danube Floodplain</strong> is a <em>popular ecotourism destination</em>.
                </p>
                <p>
                  Visitors can enjoy <em>boat rides</em> through the network of <strong>Danube branches</strong>, <em>birdwatching</em>, <em>hiking</em>, and <em>cycling</em>.
                </p>
                <p>
                  Anglers find <strong>rich fishing waters</strong> here, while nature lovers can explore <em>preserved landscapes</em> and enjoy <em>peace and quiet</em>.
                </p>
              </section>

              <img srcSet={`${GP44} 450w, ${GP4} `} alt="Upper Danube Floodplain 3" />

              <section lang="en">
                <p>
                  It is <em>ideal for families, researchers, and ecotourists</em> seeking to spend time in <em>silence and tranquility</em>, far from the <strong>city bustle</strong>.
                </p>
                <p>
                  This <strong>natural gem</strong> offers visitors the chance to experience the <strong>Danube</strong> in a unique way, through <em>navigation along its branches</em> and <em>observation of rich flora and fauna</em>.
                </p>
              </section>

              <img srcSet={`${GP33} 450w, ${GP3} `} alt="Upper Danube Floodplain 4" />

              <section lang="en">
                <p>
                  This <strong>reserve</strong> is a true <strong>natural gem</strong>, important not only for <em>biodiversity conservation</em>, but also for <em>promoting sustainable tourism</em> and <em>raising awareness</em> about the importance of <strong>preserving natural habitats</strong>.
                </p>
                <p>
                  <strong>Upper Danube Floodplain</strong> is an <em>ideal place</em> for <em>nature lovers</em>, <em>researchers</em>, and anyone wishing to connect with the <em>untouched environment</em>.
                </p>
              </section>

              <img srcSet={`${GP22} 450w, ${GP2} `} alt="Upper Danube Floodplain 5" />

              <section lang="en">
                <p>
                  Explore the <strong>Upper Danube Floodplain</strong>, an oasis of <em>untouched nature</em> by the <strong>Danube</strong>, ideal for <em>birdwatching</em>, <em>boat rides</em>, and enjoying the <em>peace of wetland landscapes</em>.
                </p>
              </section>

            </>
          )}

      </div>
    </>
  );
};


export default GornjePodunavlje;