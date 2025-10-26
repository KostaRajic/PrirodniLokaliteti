/* eslint-disable react/no-unknown-property */
import zlatibor1 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/Zlatibor/desktop/zlatibor1.jpg";
import zlatibor2 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/Zlatibor/desktop/zlatibor2.jpg";
import zlatibor3 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/Zlatibor/desktop/zlatibor3.jpg";
import zlatibor4 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/Zlatibor/desktop/zlatibor4.jpg";
import zlatibor5 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/Zlatibor/desktop/zlatibor5.jpg";
import zlatibor11 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/Zlatibor/mobile/Mzlatibor1.jpg";
import zlatibor22 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/Zlatibor/mobile/Mzlatibor2.jpg";
import zlatibor33 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/Zlatibor/mobile/Mzlatibor3.jpg";
import zlatibor44 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/Zlatibor/mobile/Mzlatibor4.jpg";
import zlatibor55 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/Zlatibor/mobile/Mzlatibor5.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { zlatiborskiOkrugPathRoutes } from "./ZlatiborskiOkrugPahtRoutes";
import { useContextAuth } from "../../../../../Context";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const PlaninaZlatibor = () => {
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
            ? "Planina Zlatibor | Klima, priroda, zdravlje i odmor u Srbiji"
            : "Zlatibor Mountain | Climate, nature, health and holiday in Serbia"}
        </title>

        <meta
          name="description"
          content={
            switchLanguage === 'rs'
              ? "Zlatibor je jedna od najpoznatijih planina Srbije, idealna za odmor, rekreaciju i lečenje. Uživajte u čistom vazduhu, subalpskoj klimi, bogatoj flori i fauni, kao i brojnim turističkim atrakcijama."
              : "Zlatibor is one of Serbia's most famous mountains, perfect for rest, recreation and health. Enjoy fresh air, subalpine climate, rich flora and fauna, and many tourist attractions."
          }
        />

        <meta
          name="keywords"
          content={
            switchLanguage === 'rs'
              ? "Zlatibor, planina Zlatibor, turizam Zlatibor, smeštaj Zlatibor, subalpska klima, hajka na vuka, Tornik, Murtenica, beloglavi sup, orao krstaš, lekoviti izvori Zlatibor, veštačka jezera"
              : "Zlatibor, Zlatibor mountain, tourism Serbia, Zlatibor accommodation, subalpine climate, wolf hunting tradition, Tornik, Murtenica, griffon vulture, imperial eagle, healing springs Serbia"
          }
        />

        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/sumadija-tekst-modal/sumadija-i-zapadna-srbija/zlatiborski-okrug/planina-zlatibor`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/sumadija-tekst-modal/sumadija-i-zapadna-srbija/zlatiborski-okrug/planina-zlatibor"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/sumadija-tekst-modal/sumadija-i-zapadna-srbija/zlatiborski-okrug/planina-zlatibor"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/sumadija-tekst-modal/sumadija-i-zapadna-srbija/zlatiborski-okrug/planina-zlatibor"
        />
      </Helmet>


      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft className="arrowLeft" onClick={() => navigate(zlatiborskiOkrugPathRoutes.home(switchLanguage))} />
        <header></header>
        <img srcSet={`${zlatibor11} 450w, ${zlatibor1} `} alt="Planina Zlatibor 1" loading="lazy" />

        {switchLanguage === 'rs' ?
          (
            <>

              <h1>Planina Zlatibor</h1>

              <section lang="sr">
                <p>
                  <strong>Padine Zlatibora</strong> su najizraženije u <strong>istočnom</strong> i <strong>severoistočnom delu planine</strong>.
                  Ovdje, niz planinske vrhove poput <strong>Savinog brda</strong> (1.132 m), <strong>Grude</strong> (1.140 m),
                  <strong>Ćavika</strong> (1.018 m) i <strong>Obadovog brda</strong> (948 m), spuštaju se prema čajetinskoj
                  <strong>Gradini</strong> (1.160 m). Od Gradine prema jugu počinje <strong>istočna granica Zlatibora</strong>, koja je oblikovana
                  strmim padinama ispod <strong>Pjevčaka</strong> (1.040 m), <strong>Bojišta</strong> (1.066 m) i <strong>Savičića glave</strong> (977 m).
                  U taj deo spada i <em>Alin Potok</em> kao deo <strong>zlatiborske visoravni</strong>.
                </p>
              </section>

              <img srcSet={`${zlatibor22} 450w, ${zlatibor2}`} alt="Planina Zlatibor 2" loading="lazy" />

              <section lang="sr">
                <p>
                  Prema jugu, padine se šire do <strong>izvorišta Ljubiške reke</strong>, gde prelaze u
                  <strong>planinski masiv Murtenice</strong>. Sa zlatiborske visoravni, prema istoku, izdižu se njeni delovi
                  u obliku rtova, među kojima se izdvaja venac <strong>Murtenice</strong> sa najvišim vrhom
                  <strong>Brijač</strong> (1.480 m). Prema jugozapadu se proteže <strong>greben Tornika</strong>, dug preko 10 km,
                  koji počinje kod <strong>Borove glave</strong> (1.147 m), a dostiže najviše tačke na <strong>Ravnom Torniku</strong>
                  (1.431 m) i <strong>Velikom Torniku</strong> (1.496 m). Zapadna granica planine prati <strong>dolina Jablanice</strong>,
                  prolazi pored <strong>Crnog Rzava</strong>, ispod <strong>ušća Ribnice</strong>, pa preko <strong>Lisičine</strong> (1.067 m),
                  <strong>Lupoglava</strong> (1.092 m) i <strong>Bara</strong> se uzdiže do <strong>Viogora</strong> (1.281 m), najvišeg dela
                  <strong>Semegnjevske gore</strong>, čime se zaokružuje geomorfološka celina Zlatibora.
                </p>
              </section>

              <img srcSet={`${zlatibor55} 450w, ${zlatibor5}`} alt="Planina Zlatibor 3" loading="lazy" />

              <section lang="sr">
                <p>
                  <strong>Zlatibor</strong> se prvi put zvanično pominje <strong>1885. godine</strong>, u okviru nove administrativne podele Srbije.
                  Tokom <strong>srednjeg veka</strong>, ovaj region je pripadao <strong>župi Rujno</strong>, oblasti <strong>Raška</strong>. Ime <strong>Zlatibor</strong>
                  nastalo je, prema predanju, spajanjem reči <em>„zlato“</em> i <em>„bor“</em>, mada tačno poreklo nije utvrđeno.
                  Planina je bogata <strong>vegetacijom</strong>, a <strong>livade</strong> predstavljaju dominantan ekosistem, sa preko
                  <strong>120 različitih vrsta trava</strong>, od kojih su mnoge <em>lekovite</em>. Ispod 600 m nadmorske visine
                  dominiraju <strong>listopadne vrste</strong>, dok više zone prekrivaju <strong>četinari</strong>. U prošlosti je
                  <strong>cela planina bila šumovita</strong>, ali je <strong>intenzivna seča</strong> promenila njen izgled.
                </p>
              </section>

              <img srcSet={`${zlatibor44} 450w, ${zlatibor4}`} alt="Planina Zlatibor 4" loading="lazy" />

              <section lang="sr">
                <p>
                  <strong>Reke Zlatibora</strong> pripadaju <strong>crnomorskom slivu</strong>. Iako nema prirodnih jezera, izgrađeno je više
                  <strong>veštačkih jezera</strong> u svrhe <strong>turizma</strong> i <strong>vodosnabdevanja</strong>. <strong>Mineralni izvori</strong> imaju
                  <em>lekovita svojstva</em> za lečenje očnih i kožnih bolesti. Najpoznatiji su:
                  <strong>Bele vode</strong> u <strong>Mokroj Gori</strong>, <strong>banja Vala</strong> u <strong>Rožanstvu</strong> i spomen-česma na <strong>Oku</strong>.
                  Zlatibor ima <strong>subalpsku klimu</strong>, sa prosečnom temperaturom od <strong>7,5°C</strong> godišnje. <strong>Januar</strong> je
                  najhladniji mesec, a <strong>avgust</strong> najtopliji. Klima je pogodna za lečenje <em>bronhijalne astme</em>
                  i <em>alergijskih bolesti</em>.
                </p>
              </section>

              <img srcSet={`${zlatibor33} 450w, ${zlatibor3}`} alt="Planina Zlatibor 5" loading="lazy" />

              <section lang="sr">
                <p>
                  <strong>Životinjski svet Zlatibora</strong> je bogat i raznovrstan. Tradicija <em>„Zlatiborske hajke na vuka“</em>
                  ima za cilj kontrolu broja <strong>vukova</strong>, koji su se ranije prekomerno množili. Uobičajene vrste su:
                  <strong>lisice</strong>, <strong>zečevi</strong>, <strong>jarebice</strong> i <strong>veverice</strong>, koje se često viđaju i u blizini
                  naselja. Zlatibor je jedino mesto u Srbiji gde se i dalje mogu sresti <em>beloglavi sup</em>
                  i <em>orao krstaš</em>, dve ugrožene vrste ptica na ivici izumiranja.
                </p>
              </section>

            </>
          )
          :
          (
            <>

              <h1>Zlatibor Mountain</h1>

              <section lang="en"> <p> The <strong>slopes of Zlatibor</strong> are most prominent in the <strong>eastern</strong> and <strong>northeastern parts of the mountain</strong>. Here, the terrain descends from mountain peaks such as <strong>Savin brdo</strong> (1,132 m), <strong>Gruda</strong> (1,140 m), <strong>Ćavik</strong> (1,018 m), and <strong>Obadovo brdo</strong> (948 m) toward the Čajetina area known as <strong>Gradina</strong> (1,160 m). From Gradina southward begins the <strong>eastern boundary of Zlatibor</strong>, shaped by steep slopes below <strong>Pjevčak</strong> (1,040 m), <strong>Bojište</strong> (1,066 m), and <strong>Savičića glava</strong> (977 m). This area also includes <em>Alin Potok</em>, as part of the <strong>Zlatibor plateau</strong>. </p> </section>
              <img srcSet={`${zlatibor22} 450w, ${zlatibor2}`} alt="Zlatibor Mountain 2" loading="lazy" />

              <section lang="en"> <p> To the south, the slopes extend to the <strong>source of the Ljubiška River</strong>, where they transition into the <strong>Murtenica mountain massif</strong>. From the Zlatibor plateau, its eastern sections rise like capes, most notably the <strong>Murtenica range</strong> with its highest peak, <strong>Brijač</strong> (1,480 m). To the southwest stretches the <strong>Tornik ridge</strong>, more than 10 km long, beginning near <strong>Borova Glava</strong> (1,147 m), and reaching its highest points at <strong>Ravni Tornik</strong> (1,431 m) and <strong>Veliki Tornik</strong> (1,496 m). The western boundary of the mountain follows the <strong>Jablanica valley</strong>, passes by the <strong>Crni Rzav</strong> River, below the <strong>Ribnica confluence</strong>, and over <strong>Lisičina</strong> (1,067 m), <strong>Lupoglav</strong> (1,092 m), and <strong>Bar</strong>, ascending to <strong>Viogor</strong> (1,281 m), the highest part of the <strong>Semegnjevo mountain</strong>, thus completing the geomorphological whole of Zlatibor. </p> </section>
              <img srcSet={`${zlatibor55} 450w, ${zlatibor5}`} alt="Zlatibor Mountain 3" loading="lazy" />

              <section lang="en"> <p> <strong>Zlatibor</strong> was officially mentioned for the first time in <strong>1885</strong>, as part of a new administrative division of Serbia. During the <strong>Middle Ages</strong>, this region belonged to the <strong>Rujno district</strong>, within the <strong>Raška area</strong>. According to legend, the name <strong>Zlatibor</strong> comes from the words <em>“gold”</em> and <em>“pine”</em>, although its exact origin is uncertain. The mountain is rich in <strong>vegetation</strong>, and <strong>meadows</strong> represent the dominant ecosystem, with over <strong>120 different grass species</strong>, many of which are <em>medicinal</em>. Below 600 m above sea level, <strong>deciduous species</strong> dominate, while higher elevations are covered with <strong>coniferous forests</strong>. In the past, the <strong>entire mountain was forested</strong>, but <strong>intensive logging</strong> has changed its appearance. </p> </section>
              <img srcSet={`${zlatibor44} 450w, ${zlatibor4}`} alt="Zlatibor Mountain 4" loading="lazy" />

              <section lang="en"> <p> The <strong>rivers of Zlatibor</strong> belong to the <strong>Black Sea basin</strong>. Although there are no natural lakes, several <strong>artificial lakes</strong> have been built for <strong>tourism</strong> and <strong>water supply</strong>. <strong>Mineral springs</strong> have <em>healing properties</em> for treating eye and skin conditions. The most well-known include: <strong>Bele Vode</strong> in <strong>Mokra Gora</strong>, <strong>Vala Spa</strong> in <strong>Rožanstvo</strong>, and the memorial spring at <strong>Oko</strong>. Zlatibor has a <strong>subalpine climate</strong>, with an average annual temperature of <strong>7.5°C</strong>. <strong>January</strong> is the coldest month, while <strong>August</strong> is the warmest. The climate is suitable for treating <em>bronchial asthma</em> and <em>allergic diseases</em>. </p> </section>
              <img srcSet={`${zlatibor33} 450w, ${zlatibor3}`} alt="Zlatibor Mountain 5" loading="lazy" />

              <section lang="en"> <p> The <strong>wildlife of Zlatibor</strong> is rich and diverse. The traditional <em>“Zlatibor Wolf Hunt”</em> aims to control the population of <strong>wolves</strong>, which used to multiply excessively. Common species include: <strong>foxes</strong>, <strong>hares</strong>, <strong>partridges</strong>, and <strong>squirrels</strong>, often seen near settlements. Zlatibor is the only place in Serbia where the <em>griffon vulture</em> and the <em>imperial eagle</em> can still be found—two endangered bird species on the brink of extinction. </p> </section>
            </>
          )}

      </div>
    </>
  );
};


export default PlaninaZlatibor;