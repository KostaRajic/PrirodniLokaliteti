/* eslint-disable no-useless-escape */
/* eslint-disable react/no-unknown-property */
import medjuvrsje1 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/JezeroMedjuvrsje/desktop/jezeroMedjuvrsje1.jpg";
import medjuvrsje2 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/JezeroMedjuvrsje/desktop/jezeroMedjuvrsje2.jpg";
import medjuvrsje3 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/JezeroMedjuvrsje/desktop/jezeroMedjuvrsje3.jpg";
import medjuvrsje4 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/JezeroMedjuvrsje/desktop/jezeroMedjuvrsje4.jpg";
import medjuvrsje5 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/JezeroMedjuvrsje/desktop/jezeroMedjuvrsje5.jpg";
import medjuvrsje11 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/JezeroMedjuvrsje/mobile/MjezeroMedjuvrsje1.jpg";
import medjuvrsje22 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/JezeroMedjuvrsje/mobile/MjezeroMedjuvrsje2.jpg";
import medjuvrsje33 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/JezeroMedjuvrsje/mobile/MjezeroMedjuvrsje3.jpg";
import medjuvrsje44 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/JezeroMedjuvrsje/mobile/MjezeroMedjuvrsje4.jpg";
import medjuvrsje55 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/JezeroMedjuvrsje/mobile/MjezeroMedjuvrsje5.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { moravickiOkrugPathRoutes } from "./MoravickiOkrugPathRoutes";
import { useContextAuth } from "../../../../../Context";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const JezeroMedjuvrsje = () => {
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
          {switchLanguage === 'rs'
            ? "Jezero Međuvršje – Najveće veštačko jezero na Zapadnoj Moravi | Serbia Wonders"
            : "Međuvršje Lake – The Largest Artificial Lake on Western Morava | Serbia Wonders"}
        </title>

        <meta
          name="description"
          content={
            switchLanguage === 'rs'
              ? "Jezero Međuvršje, smešteno na izlazu iz Ovčarsko-kablarske klisure, najveće je veštačko jezero na Zapadnoj Moravi. Poznato po kamp naselju, sportsko-rekreativnim sadržajima, blizini Ovčarske Banje i brojnim manastirima Srpske Svete Gore."
              : "Međuvršje Lake, located at the exit of the Ovčar-Kablar Gorge, is the largest artificial lake on the Western Morava River. Known for its camp site, sports and recreational facilities, proximity to Ovčar Banja spa, and the many monasteries of the Serbian Holy Mountain."
          }
        />

        <meta
          name="keywords"
          content={
            switchLanguage === 'rs'
              ? "Jezero Međuvršje, Ovčarsko-kablarska klisura, Zapadna Morava, kamp naselje, Ovčarska Banja, manastiri, Srpska Sveta Gora, hidroelektrana, sportski ribolov"
              : "Međuvršje Lake, Ovčar-Kablar Gorge, Western Morava, camp site, Ovčar Banja spa, monasteries, Serbian Holy Mountain, hydroelectric power plant, sport fishing"
          }
        />

        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/sumadija-tekst-modal/sumadija-i-zapadna-srbija/macvanski-okrug/jezero-medjuvrsje`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/sumadija-tekst-modal/sumadija-i-zapadna-srbija/macvanski-okrug/jezero-medjuvrsje"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/sumadija-tekst-modal/sumadija-i-zapadna-srbija/macvanski-okrug/jezero-medjuvrsje"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/sumadija-tekst-modal/sumadija-i-zapadna-srbija/macvanski-okrug/jezero-medjuvrsje"
        />


      </Helmet>



      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft className="arrowLeft" onClick={() => navigate(moravickiOkrugPathRoutes.home(switchLanguage))} />
        <header></header>
        <img srcSet={`${medjuvrsje11} 450w, ${medjuvrsje1} `} alt="Jezero Međuvršje" />

        {switchLanguage === 'rs' ?
          (
            <>

              <h1 style={{ color: "white" }}>Jezero Međuvršje</h1>

              <section lang="sr">
                <p>
                  <strong>Međuvršje</strong> je <strong>najveće veštačko jezero</strong> na <em>Zapadnoj Moravi</em>, smešteno na
                  izlazu iz <strong>Ovčarsko-kablarske klisure</strong>. Nastalo je izgradnjom <strong>betonske brane</strong> za potrebe
                  <em>male hidroelektrane Međuvršje</em>, uzvodno od železničkog mosta, na trasi nekadašnje <em>pruge uskog koloseka Užice–Čačak</em>.
                  Ukupna zapremina akumulacije iznosi <strong>18,5 miliona m³</strong>, dok je zapremina korisnog prostora oko <strong>5,6 miliona m³</strong>.
                  <em>Nadmorska visina</em> jezera je <strong>273 m</strong>, a <strong>najveća dubina</strong>, koja se nalazi neposredno kod temeljnog propusta,
                  iznosi oko <strong>20 m</strong>.
                </p>
              </section>

              <img srcSet={`${medjuvrsje22} 450w, ${medjuvrsje2}`} alt="Jezero Međuvršje" />

              <section lang="sr">
                <p>
                  U <em>erozivnom proširenju</em> kod ušća <strong>Banjskog potoka</strong>, u <strong>gornjem delu</strong> jezera Međuvršje,
                  uređeno je <strong>kamp naselje</strong>. Nedaleko se nalazi <em>motelski kompleks</em> sa <strong>benzinskom pumpom</strong>.
                  Malo dalje smešteni su <strong>turističko-ugostiteljski objekti</strong> i <em>kupališta</em> <strong>Ovčar Banje</strong>,
                  koja je poznata po <em>termomineralnim izvorima</em> i <strong>dugoj tradiciji banjskog lečenja</strong>.
                </p>
              </section>

              <img srcSet={`${medjuvrsje33} 450w, ${medjuvrsje3}`} alt="Ovčarsko-kablarska klisura" />

              <section lang="sr">
                <p>
                  <strong>Ovčar Banja</strong> je <em>centar zdravstveno-lečilišnog turizma</em>. Pored jezera je izgrađeno nekoliko desetina <strong>vikend kuća</strong>.
                  Na jezeru su popularni <strong>vikend turizam</strong> i <strong>sportski ribolov</strong>, dok su <em>planine i pećine</em> omiljena mesta za
                  <strong>planinare</strong> i <em>speleologe</em>. Svake <strong>treće nedelje u julu</strong>, počev od <strong>2005. godine</strong>,
                  organizuje se <strong>Ovčarsko-kablarska regata</strong> <em>turističko-zabavnog karaktera</em>, koja dodatno obogaćuje
                  <em>turističku ponudu</em> ovog kraja <strong>Srbije</strong>.
                </p>
              </section>

              <img srcSet={`${medjuvrsje44} 450w, ${medjuvrsje4}`} alt="Jezero Međuvršje 2" />

              <section lang="sr">
                <p>
                  U <em>priobalju jezera Međuvršje</em>, sa obe strane, smešteni su poznati, dobro restaurirani i <strong>zakonom zaštićeni manastiri</strong>.
                  To su: <strong>Vavedenje</strong>, <strong>Vaznesenje</strong>, <strong>Preobraženje</strong>, <strong>Sretenje</strong>, <strong>Sveta Trojica</strong>,
                  <strong>Blagoveštenje</strong>, <strong>Ilinje</strong>, <strong>Jovanje</strong>, <strong>Nikolje</strong> i <strong>Uspenje</strong>.
                  Iako su <em>skromni po dimenzijama</em>, <em>arhitektonskim konstrukcijama</em>, <em>freskama</em>, <em>ikonama</em>, <em>riznicama</em>,
                  <em>ikonostasima</em>, <em>posedima</em> i <em>konacima</em>, oni čine <strong>jedinstvenu celinu</strong> koja nosi naziv <strong>Srpska Sveta Gora</strong>.
                </p>
              </section>

              <img srcSet={`${medjuvrsje55} 450w, ${medjuvrsje5}`} alt="Jezero u Moravičkom okrugu" />

              <section lang="sr">
                <p>
                  <strong>Turisti</strong> mogu da uživaju u <em>odmoru</em> u <strong>restoranima-splavovima</strong> duž obale ili da <em>plove čamcem</em> po jezeru.
                  Pored obale ovog jezera, a u blizini <strong>magistralnog puta Čačak–Ovčar Banja</strong>, turistima su na raspolaganju brojni <strong>restorani</strong>.
                </p>
              </section>


            </>
          )
          :
          (
            <>

              <h1 style={{ color: "white" }}>Međuvršje Lake</h1>

              <section lang="en">
                <p>
                  <strong>Međuvršje</strong> is the <strong>largest artificial lake</strong> on the <em>West Morava River</em>, located at the exit of the
                  <strong>Ovčar-Kablar Gorge</strong>. It was created by building a <strong>concrete dam</strong> for the needs of the
                  <em>Međuvršje small hydroelectric power plant</em>, upstream from the railway bridge, on the route of the former <em>narrow-gauge railway Užice–Čačak</em>.
                  The total reservoir volume is <strong>18.5 million m³</strong>, while the usable storage volume is about <strong>5.6 million m³</strong>.
                  The lake's <em>elevation</em> is <strong>273 meters</strong>, and its <strong>maximum depth</strong>, located near the bottom outlet, is about <strong>20 meters</strong>.
                </p>
              </section>

              <img srcSet={`${medjuvrsje22} 450w, ${medjuvrsje2}`} alt="Lake Međuvršje" />

              <section lang="en">
                <p>
                  In the <em>erosion-broadened area</em> near the mouth of the <strong>Banj stream</strong>, in the <strong>upper part</strong> of Lake Međuvršje,
                  a <strong>camping area</strong> has been developed. Nearby is a <em>motel complex</em> with a <strong>gas station</strong>.
                  A bit further, there are <strong>tourist and hospitality facilities</strong> and <em>bathing areas</em> of <strong>Ovčar Banja</strong>,
                  known for its <em>thermal mineral springs</em> and a <strong>long tradition of spa treatments</strong>.
                </p>
              </section>

              <img srcSet={`${medjuvrsje33} 450w, ${medjuvrsje3}`} alt="Ovčar-Kablar Gorge" />

              <section lang="en">
                <p>
                  <strong>Ovčar Banja</strong> is a <em>center of health and wellness tourism</em>. Dozens of <strong>weekend cottages</strong> have been built near the lake.
                  <strong>Weekend tourism</strong> and <strong>sport fishing</strong> are popular on the lake, while the <em>mountains and caves</em> are favorite spots for
                  <strong>hikers</strong> and <em>speleologists</em>. Every <strong>third Sunday of July</strong>, since <strong>2005</strong>,
                  the <strong>Ovčar-Kablar Regatta</strong> is held — a <em>one-day recreational event</em> that further enriches the <em>tourist offer</em> of this region of <strong>Serbia</strong>.
                </p>
              </section>

              <img srcSet={`${medjuvrsje44} 450w, ${medjuvrsje4}`} alt="Lake Međuvršje 2" />

              <section lang="en">
                <p>
                  Along the <em>shoreline of Lake Međuvršje</em>, on both sides, are well-restored and <strong>legally protected monasteries</strong>.
                  These are: <strong>Vavedenje</strong>, <strong>Vaznesenje</strong>, <strong>Preobraženje</strong>, <strong>Sretenje</strong>, <strong>Holy Trinity</strong>,
                  <strong>Blagoveštenje</strong>, <strong>Ilinje</strong>, <strong>Jovanje</strong>, <strong>Nikolje</strong>, and <strong>Uspenje</strong>.
                  Although <em>modest in size</em>, <em>architectural structure</em>, <em>frescoes</em>, <em>icons</em>, <em>treasuries</em>,
                  <em>iconostases</em>, <em>landholdings</em>, and <em>monastic quarters</em>, they form a <strong>unique ensemble</strong> known as the <strong>Serbian Mount Athos</strong>.
                </p>
              </section>

              <img srcSet={`${medjuvrsje55} 450w, ${medjuvrsje5}`} alt="Lake in the Moravica District" />

              <section lang="en">
                <p>
                  <strong>Tourists</strong> can enjoy <em>relaxation</em> at <strong>floating restaurants</strong> along the shore or take a <em>boat ride</em> on the lake.
                  Along the lake’s shoreline, and near the <strong>main road Čačak–Ovčar Banja</strong>, a number of <strong>restaurants</strong> are available to visitors.
                </p>
              </section>


            </>
          )}


      </div>
    </>
  );
};


export default JezeroMedjuvrsje;