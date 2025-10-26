/* eslint-disable react/no-unknown-property */
import celije1 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RasinskiOrkug/JezeroCelije/desktop/celije1.jpg";
import celije2 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RasinskiOrkug/JezeroCelije/desktop/celije2.jpg";
import celije3 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RasinskiOrkug/JezeroCelije/desktop/celije3.jpg";
import celije4 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RasinskiOrkug/JezeroCelije/desktop/celije4.jpg";
import celije5 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RasinskiOrkug/JezeroCelije/desktop/celije5.jpg";
import celije11 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RasinskiOrkug/JezeroCelije/mobile/Mcelije1.jpg";
import celije22 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RasinskiOrkug/JezeroCelije/mobile/Mcelije2.jpg";
import celije33 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RasinskiOrkug/JezeroCelije/mobile/Mcelije3.jpg";
import celije44 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RasinskiOrkug/JezeroCelije/mobile/Mcelije4.jpg";
import celije55 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RasinskiOrkug/JezeroCelije/mobile/Mcelije5.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { rasinskiOkrugPathRoutes } from "./RasinskiOkrugPathRoutes";
import { useContextAuth } from "../../../../../Context";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const JezeroCelije = () => {
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
            ? "Jezero Ćelije – Veštačko jezero i izvor pijaće vode | Srbija Wonders"
            : "Ćelije Lake – Artificial Reservoir and Drinking Water Source | Serbia Wonders"}
        </title>

        <meta
          name="description"
          content={
            switchLanguage === 'rs'
              ? "Jezero Ćelije, izgrađeno 1972. godine na reci Rasini, predstavlja značajnu akumulaciju u centralnoj Srbiji, poznato po svojoj ulozi u vodosnabdevanju i prirodnoj lepoti."
              : "Ćelije Lake, built in 1972 on the Rasina River, is a major reservoir in central Serbia, known for its role in water supply and natural beauty."
          }
        />

        <meta
          name="keywords"
          content={
            switchLanguage === 'rs'
              ? "Jezero Ćelije, veštačko jezero, Rasina, Kruševac, vodosnabdevanje, Zlatno jezero, brana Ćelije, potopljeno selo Zlatari"
              : "Ćelije Lake, artificial lake, Rasina River, Kruševac, water supply, Golden Lake, Ćelije dam, submerged village Zlatari"
          }
        />
        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/sumadija-tekst-modal/sumadija-i-zapadna-srbija/rasinski-okrug/jezero-celije`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/sumadija-tekst-modal/sumadija-i-zapadna-srbija/rasinski-okrug/jezero-celije"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/sumadija-tekst-modal/sumadija-i-zapadna-srbija/rasinski-okrug/jezero-celije"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/sumadija-tekst-modal/sumadija-i-zapadna-srbija/rasinski-okrug/jezero-celije"
        />

      </Helmet>

      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft
          className="arrowLeft"
          onClick={() => navigate(rasinskiOkrugPathRoutes.home(switchLanguage))}
          style={{ fill: "white" }}
        />
        <header></header>
        <img srcSet={`${celije11} 450w, ${celije1} `} alt="Jezero Ćelije 1" />

        {switchLanguage === 'rs' ?
          (
            <>

              <h1 style={{ color: "white" }}>Jezero Ćelije</h1>

              <section lang="sr">
                <p>
                  <strong>Jezero Ćelije</strong> se nalazi u <em>centralnom delu Srbije</em>, oko <strong>22 kilometra</strong> od
                  <strong> Kruševca</strong>. Nastalo je 1972. godine pregrađivanjem reke <strong>Rasine</strong> i
                  izgradnjom brane visoke <strong>55 metara</strong>. Brana se nalazi na spoju <strong>Rasinske kotline</strong> i <strong>Zlatarske klisure</strong>.
                  Potpuna akumulacija ovog jezera je završena 1979. godine. Među lokalnim stanovništvom, ovo jezero je poznato i kao
                  <em>Zlatno jezero</em>.
                </p>
              </section>

              <img srcSet={`${celije22} 450w, ${celije2}`} alt="Jezero Ćelije 2" />

              <section lang="sr">
                <p>
                  Jezero Ćelije prvobitno je izgrađeno kako bi služilo zaštiti <strong>Đerdapa</strong> od nanosa nastalih erozijom, čime je postalo deo sistema očuvanja njegove akumulacije.
                  U godinama nakon izgradnje, ustanovljeno je da je voda u jezeru <strong>izuzetnog kvaliteta</strong>, pa je, pored svoje prvobitne funkcije,
                  počelo da se koristi i za vodosnabdevanje oko <strong>200.000 stanovnika</strong> Kruševca i okolnih naselja.
                  Godine 1977. Jezero Ćelije je proglašeno izvorištem <strong>regionalnog i međunarodnog značaja</strong> za vodosnabdevanje prvog ranga.
                </p>
              </section>

              <img srcSet={`${celije33} 450w, ${celije3}`} alt="Jezero Ćelije 3" />

              <section lang="sr">
                <p>
                  Jezero je napravljeno na mestu gde je nekada postojalo naselje <strong>Zlatari</strong>, koje je delimično potopljeno, dok su neki delovi naselja pomereni.
                  Potopljeni su groblje i crkva, a prema pričama meštana, koji često borave na jezeru, ponekad se može videti <em>krst na površini vode</em>,
                  za koji se veruje da potiče sa vrha crkve. Ovaj prizor izaziva nelagodu među njima, a ujedno je inspiracija za brojne priče i legende.
                  Jedna od njih tvrdi da će u jezeru biti utopljeno onoliko ljudi koliko je grobova potopljeno. Jezero je dobilo svoje ime po naselju <strong>Ćelije</strong> koje se nalazi na njegovim obalama.
                </p>
              </section>

              <img srcSet={`${celije44} 450w, ${celije4}`} alt="Jezero Ćelije 4" />

              <section lang="sr">
                <p>
                  Prema prvobitnim planovima, očekivalo se da jezero bude u funkciji <strong>50 godina</strong>, što bi značilo da bi u 2021. godini počelo da se zatrpava.
                  Međutim, s obzirom na to da grad <strong>Kruševac</strong> i okolna područja nemaju alternativne izvore vodosnabdevanja,
                  preduzimaju napore da pronađu rešenje za produžetak života jezera za još <strong>40 godina</strong>.
                  Jedan od faktora koji negativno utiče na dugoročnu održivost jezera su <strong>otpadne vode</strong> koje se ispuštaju u reku <strong>Rasinu</strong> iz gradova uzvodno od jezera.
                </p>
              </section>

              <img srcSet={`${celije55} 450w, ${celije5}`} alt="Jezero Ćelije 5" />

              <section lang="sr">
                <p>
                  Jezero Ćelije se nalazi na nadmorskoj visini od <strong>277 metara</strong>, a njegova površina iznosi <strong>2,85 kvadratnih kilometara</strong>,
                  dok je ukupna površina sliva oko <strong>600 kvadratnih kilometara</strong>. Celokupna površina jezera je <strong>3 kvadratna kilometra</strong>,
                  a dužina njegove obale pri normalnom vodostaju je <strong>21,7 kilometara</strong>, s veoma razuđenim obalama.
                  Prosečna dubina jezera je <strong>14 metara</strong>, dok je maksimalna izmerena dubina <strong>41 metar</strong>.
                  Nekadašnji srednji godišnji proticaj reke Rasine kroz jezero bio je <strong>6 kubnih metara u sekundi</strong>,
                  ali se, kako je reka Rasina opadala, protok smanjio na <strong>4,5 kubnih metara u sekundi</strong>.
                  U prošlosti je jezero akumuliralo oko <strong>41 milion kubnih metara vode</strong>, dok je sada ta količina smanjena na <strong>38 miliona</strong>.
                </p>
              </section>


            </>
          )
          :
          (
            <>

              <h1 style={{ color: "white" }}>Ćelije Lake</h1>

              <section lang="en">
                <p>
                  <strong>Ćelije Lake</strong> is located in the <em>central part of Serbia</em>, about <strong>22 kilometers</strong> from
                  <strong> Kruševac</strong>. It was formed in 1972 by damming the <strong>Rasina River</strong> and
                  constructing a dam 55 meters high. The dam is situated at the junction of the <strong>Rasina valley</strong> and the <strong>Zlatarska Gorge</strong>.
                  The lake reached full capacity in 1979. Among the local population, this lake is also known as
                  the <em>Golden Lake</em>.
                </p>
              </section>

              <img srcSet={`${celije22} 450w, ${celije2}`} alt="Ćelije Lake 2" />

              <section lang="en">
                <p>
                  Ćelije Lake was originally built to protect <strong>Đerdap</strong> from deposits caused by erosion, becoming part of the preservation system of its accumulation.
                  In the years following its construction, it was established that the water in the lake is of <strong>exceptional quality</strong>, so besides its original purpose,
                  it began to be used for supplying water to about <strong>200,000 residents</strong> of Kruševac and surrounding settlements.
                  In 1977, Ćelije Lake was declared a source of <strong>regional and international importance</strong> for first-class water supply.
                </p>
              </section>

              <img srcSet={`${celije33} 450w, ${celije3}`} alt="Ćelije Lake 3" />

              <section lang="en">
                <p>
                  The lake was created on the site of a former settlement called <strong>Zlatari</strong>, which was partially flooded, while some parts of the settlement were relocated.
                  A cemetery and church were submerged, and according to stories from locals who often spend time by the lake, a <em>cross sometimes appears on the water’s surface</em>,
                  believed to originate from the church steeple. This sight causes unease among them and also inspires numerous stories and legends.
                  One of these claims that as many people will drown in the lake as the number of submerged graves. The lake is named after the settlement <strong>Ćelije</strong> located on its shores.
                </p>
              </section>

              <img srcSet={`${celije44} 450w, ${celije4}`} alt="Ćelije Lake 4" />

              <section lang="en">
                <p>
                  According to the original plans, the lake was expected to be operational for <strong>50 years</strong>, which meant it would start silting up around 2021.
                  However, since the city of <strong>Kruševac</strong> and surrounding areas lack alternative water sources,
                  efforts are underway to find a solution to extend the lake’s lifespan by another <strong>40 years</strong>.
                  One factor negatively impacting the long-term sustainability of the lake is the <strong>wastewater</strong> discharged into the <strong>Rasina River</strong> from upstream cities.
                </p>
              </section>

              <img srcSet={`${celije55} 450w, ${celije5}`} alt="Ćelije Lake 5" />

              <section lang="en">
                <p>
                  Ćelije Lake is situated at an altitude of <strong>277 meters</strong>, with a surface area of <strong>2.85 square kilometers</strong>,
                  while the total catchment area is around <strong>600 square kilometers</strong>. The entire lake area is <strong>3 square kilometers</strong>,
                  and its shoreline length at normal water level is <strong>21.7 kilometers</strong>, with very indented banks.
                  The average depth of the lake is <strong>14 meters</strong>, while the maximum measured depth is <strong>41 meters</strong>.
                  The former average annual flow of the Rasina River through the lake was <strong>6 cubic meters per second</strong>,
                  but as the river decreased, the flow dropped to <strong>4.5 cubic meters per second</strong>.
                  In the past, the lake accumulated about <strong>41 million cubic meters of water</strong>, while now that amount has decreased to <strong>38 million</strong>.
                </p>
              </section>

            </>
          )}

      </div>

    </>
  );
};


export default JezeroCelije;