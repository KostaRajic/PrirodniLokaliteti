/* eslint-disable react/no-unknown-property */
import krusedol1 from "../../../../../assets/images/Vojvodina/JuznoBackiOkrug/ManastirKrusedol/desktop/krusedol2.jpg";
import krusedol2 from "../../../../../assets/images/Vojvodina/JuznoBackiOkrug/ManastirKrusedol/desktop/krusedol3.jpg";
import krusedol3 from "../../../../../assets/images/Vojvodina/JuznoBackiOkrug/ManastirKrusedol/desktop/krusedol4.jpg";
import krusedol4 from "../../../../../assets/images/Vojvodina/JuznoBackiOkrug/ManastirKrusedol/desktop/krusedol5.jpg";
import krusedol5 from "../../../../../assets/images/Vojvodina/JuznoBackiOkrug/ManastirKrusedol/desktop/krusedol6.jpg";
import krusedol6 from "../../../../../assets/images/Vojvodina/JuznoBackiOkrug/ManastirKrusedol/desktop/krusedol7.jpg";
import krusedol11 from "../../../../../assets/images/Vojvodina/JuznoBackiOkrug/ManastirKrusedol/mobile/krusedolM2.jpg";
import krusedol22 from "../../../../../assets/images/Vojvodina/JuznoBackiOkrug/ManastirKrusedol/mobile/krusedolM3.jpg";
import krusedol33 from "../../../../../assets/images/Vojvodina/JuznoBackiOkrug/ManastirKrusedol/mobile/krusedolM4.jpg";
import krusedol44 from "../../../../../assets/images/Vojvodina/JuznoBackiOkrug/ManastirKrusedol/mobile/krusedolM5.jpg";
import krusedol55 from "../../../../../assets/images/Vojvodina/JuznoBackiOkrug/ManastirKrusedol/mobile/krusedolM6.jpg";
import krusedol66 from "../../../../../assets/images/Vojvodina/JuznoBackiOkrug/ManastirKrusedol/mobile/krusedolM7.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { JuznoBackiPathRoutes } from "./JuznoBackiPathRoutes";
import { useContextAuth } from "../../../../../Context";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const ManastirKrusedol = () => {
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
            ? 'Manastir Krušedol | Duša Fruške gore i srpske duhovnosti'
            : 'Krušedol Monastery | Heart of Fruška Gora and Serbian Spirituality'}
        </title>

        <meta
          name="description"
          content={
            switchLanguage === 'rs'
              ? 'Manastir Krušedol, osnovan 1509. godine, jedan je od najznačajnijih pravoslavnih manastira na Fruškoj gori. Poznat je po svojoj istoriji, freskama i ulozi u očuvanju srpske kulture i vere.'
              : 'Founded in 1509, Krušedol Monastery is one of the most important Serbian Orthodox monasteries on Fruška Gora, known for its history, frescoes, and spiritual legacy.'
          }
        />

        <meta
          name="keywords"
          content={
            switchLanguage === 'rs'
              ? 'Manastir Krušedol, Fruška gora, pravoslavni manastiri, srpska istorija, kulturno nasleđe, freske, patrijarh Arsenije Čarnojević, duhovni turizam, verska mesta u Srbiji'
              : 'Krušedol Monastery, Fruška Gora, Serbian Orthodox monasteries, Serbian history, cultural heritage, frescoes, Patriarch Arsenije Čarnojević, spiritual tourism, religious sites in Serbia'
          }
        />

        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/juzno-backi/manastir-krusedol`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/juzno-backi/manastir-krusedol"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/juzno-backi/manastir-krusedol"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/juzno-backi/manastir-krusedol"
        />
      </Helmet>



      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft className="arrowLeft" onClick={() => navigate(JuznoBackiPathRoutes.home(switchLanguage))} />
        <header></header>
        <img srcSet={`${krusedol44} 450w, ${krusedol4} `} alt="Manastir Krusedol 1" />

        {switchLanguage === 'rs' ?
          (

            <>
              <h2>
                Manastir Krusedol
              </h2>

              <section lang="sr">
                <p>
                  <strong>Manastir Krušedol</strong> je jedan od <em>najvažnijih</em> i <em>najlepših manastira</em> na <strong>Fruškoj gori</strong>, u <strong>Vojvodini</strong>, <strong>Srbija</strong>. Smešten je u blizini grada <strong>Sremska Mitrovica</strong>, u opštini <strong>Ruma</strong>, i predstavlja značajnu tačku na <em>kulturnoj</em> i <em>verskoj mapi Srbije</em>. Manastir je deo grupe <strong>fruškogorskih manastira</strong>, koja je poznata po <em>bogatoj istoriji</em> i <em>duhovnoj tradiciji</em>.
                </p>
              </section>

              <img srcSet={`${krusedol22} 450w, ${krusedol2} `} alt="Manastir Krusedol 2" />

              <section lang="sr">
                <p>
                  <strong>Manastir Krušedol</strong> je osnovan u <em>16. veku</em>, <strong>1509. godine</strong>, i to najverovatnije od strane <strong>despotice Jelene</strong>, majke Despotovića. Manastir je imao značajnu ulogu u <em>duhovnom životu srpskog naroda</em>, naročito tokom <em>osmanske vladavine</em> u ovom delu Balkana. Kroz istoriju, manastir je bio <strong>sedište Srpske pravoslavne crkve</strong> i <em>grobnica mnogih značajnih ličnosti</em>. Manastir je bio i <em>sedeći manastir</em> za <strong>patrijarhe Srpske pravoslavne crkve</strong>, a u njemu su sahranjivani brojni <em>vladari</em>, <em>patrijarsi</em>, <em>duhovnici</em> i <em>plemići</em>, među kojima se izdvaja <strong>patrijarh Arsenije III Čarnojević</strong>.
                </p>
              </section>

              <img srcSet={`${krusedol33} 450w, ${krusedol3} `} alt="Manastir Krusedol 3" />

              <section lang="sr">
                <p>
                  Manastir je izgrađen u stilu <strong>srpskog srednjovekovnog manastira</strong>, sa kombinacijom <em>srpsko-vizantijskog</em> i <em>moravskog stila</em>. Najznačajniji deo manastira je <strong>crkva posvećena Svetoj Trojici</strong>, koja je središnji objekat kompleksa. Unutrašnjost crkve ukrašena je <em>prelepim freskama</em> i <em>ikonama</em>, među kojima su one koje prikazuju <em>scene iz života svetaca</em> i <em>istorijske ličnosti</em>.
                </p>
              </section>

              <img srcSet={`${krusedol11} 450w, ${krusedol1} `} alt="Manastir Krusedol 4" />

              <section lang="sr">
                <p>
                  <strong>Manastir Krušedol</strong> je od velikog značaja u <em>verskom</em> i <em>kulturnom</em> smislu. Bio je jedno od <em>najvažnijih mesta duhovnog okupljanja</em> i <em>prosvetiteljskih aktivnosti</em> u vreme <strong>osmanske okupacije</strong>. Manastir je značajno uticao na razvoj <em>kulture</em>, <em>obrazovanja</em> i <em>religioznosti</em> u regionu.
                </p>
              </section>

              <img
                srcSet={`${krusedol55} 450w, ${krusedol5} `}
                alt="Manastir Krusedol 5"
              />

              <section lang="sr">
                <p>
                  Manastir je poznat po svojim <strong>freskama</strong> koje su značajna <em>umetnička dela</em>. One prikazuju <em>scene iz života svetaca</em>, kao i <em>portrete srpskih vladara</em> i <em>duhovnih lidera</em>.
                </p>
              </section>

              <img
                srcSet={`${krusedol66} 450w, ${krusedol6} `}
                alt="Manastir Krusedol 5"
              />

              <section lang="sr">
                <p>
                  <strong>Manastir Krušedol</strong> je lako dostupan, smešten u blizini <strong>Sremske Mitrovice</strong> i <strong>Rume</strong>, a ujedno je deo jednog od <em>najlepših prirodnih okruženja</em> u Srbiji — <strong>Fruške gore</strong>. Posetioci mogu uživati u <em>šetnjama po okolnim šumama</em> i <em>istraživanju kulturnog i istorijskog nasleđa</em> manastira. Pored <em>duhovne vrednosti</em>, manastir je popularna destinacija za ljubitelje <em>istorije</em>, <em>umetnosti</em> i <em>kulture</em>. Manastir organizuje <strong>verske obrede</strong>, a pored toga, tokom godine se održavaju i različite <em>kulturne manifestacije</em> i <em>događaji</em>.
                </p>
              </section>


            </>

          )
          :
          (
            <>
              <h2>
                Krušedol Monastery
              </h2>

              <section lang="en">
                <p>
                  <strong>Krušedol Monastery</strong> is one of the <em>most important</em> and <em>most beautiful monasteries</em> on <strong>Fruška Gora</strong>, in <strong>Vojvodina</strong>, <strong>Serbia</strong>. It is located near the city of <strong>Sremska Mitrovica</strong>, in the <strong>Ruma municipality</strong>, and represents a significant landmark on the <em>cultural</em> and <em>religious map of Serbia</em>. The monastery is part of the group of <strong>Fruška Gora monasteries</strong>, known for their <em>rich history</em> and <em>spiritual tradition</em>.
                </p>
              </section>

              <img srcSet={`${krusedol22} 450w, ${krusedol2}`} alt="Krušedol Monastery view 2" />

              <section lang="en">
                <p>
                  <strong>Krušedol Monastery</strong> was founded in the <em>16th century</em>, in <strong>1509</strong>, most likely by <strong>Despotess Jelena</strong>, mother of the Despotović family. The monastery played a significant role in the <em>spiritual life of the Serbian people</em>, especially during <em>Ottoman rule</em> in this part of the Balkans. Throughout history, it served as the <strong>seat of the Serbian Orthodox Church</strong> and as a <em>burial site for many prominent figures</em>. It was also a <em>residential monastery</em> for <strong>Serbian Orthodox patriarchs</strong>, and many <em>rulers</em>, <em>patriarchs</em>, <em>clergy</em>, and <em>nobles</em> were buried here, including the notable <strong>Patriarch Arsenije III Čarnojević</strong>.
                </p>
              </section>

              <img srcSet={`${krusedol33} 450w, ${krusedol3}`} alt="Krušedol Monastery view 3" />

              <section lang="en">
                <p>
                  The monastery is built in the style of a <strong>medieval Serbian monastery</strong>, combining <em>Serbo-Byzantine</em> and <em>Morava styles</em>. The most prominent part of the monastery is the <strong>church dedicated to the Holy Trinity</strong>, which is the central building of the complex. The interior is decorated with <em>beautiful frescoes</em> and <em>icons</em>, some of which depict <em>scenes from the lives of saints</em> and <em>historical figures</em>.
                </p>
              </section>

              <img srcSet={`${krusedol11} 450w, ${krusedol1}`} alt="Krušedol Monastery interior" />

              <section lang="en">
                <p>
                  <strong>Krušedol Monastery</strong> holds great <em>religious</em> and <em>cultural significance</em>. It was one of the <em>key centers for spiritual gatherings</em> and <em>educational activity</em> during the <strong>Ottoman occupation</strong>. The monastery had a major influence on the development of <em>culture</em>, <em>education</em>, and <em>religious life</em> in the region.
                </p>
              </section>

              <img srcSet={`${krusedol55} 450w, ${krusedol5}`} alt="Krušedol Monastery detail 5" />

              <section lang="en">
                <p>
                  The monastery is well known for its <strong>frescoes</strong>, which are significant <em>works of art</em>. They depict <em>scenes from the lives of saints</em> as well as <em>portraits of Serbian rulers</em> and <em>spiritual leaders</em>.
                </p>
              </section>

              <img srcSet={`${krusedol66} 450w, ${krusedol6}`} alt="Krušedol Monastery detail 6" />

              <section lang="en">
                <p>
                  <strong>Krušedol Monastery</strong> is easily accessible, located near <strong>Sremska Mitrovica</strong> and <strong>Ruma</strong>, and is part of one of the <em>most beautiful natural environments</em> in Serbia — <strong>Fruška Gora</strong>. Visitors can enjoy <em>walking through the surrounding forests</em> and <em>exploring the monastery's cultural and historical heritage</em>. In addition to its <em>spiritual value</em>, the monastery is a popular destination for lovers of <em>history</em>, <em>art</em>, and <em>culture</em>. It hosts <strong>religious services</strong> and various <em>cultural events</em> and <em>festivals</em> throughout the year.
                </p>
              </section>
            </>

          )}
      </div>
    </>
  );
};


export default ManastirKrusedol;