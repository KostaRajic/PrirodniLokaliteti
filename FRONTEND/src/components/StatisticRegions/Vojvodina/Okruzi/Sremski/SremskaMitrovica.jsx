/* eslint-disable react/no-unknown-property */
import sMitrovica1 from "../../../../../assets/images/Vojvodina/SremskiOkrug/SremskaMitrovica/desktop/sMitrovica5.jpg";
import sMitrovica2 from "../../../../../assets/images/Vojvodina/SremskiOkrug/SremskaMitrovica/desktop/sMitrovica2.jpg";
import sMitrovica3 from "../../../../../assets/images/Vojvodina/SremskiOkrug/SremskaMitrovica/desktop/sMitrovica3.jpg";
import sMitrovica4 from "../../../../../assets/images/Vojvodina/SremskiOkrug/SremskaMitrovica/desktop/sMitrovica4.jpg";
import sMitrovica5 from "../../../../../assets/images/Vojvodina/SremskiOkrug/SremskaMitrovica/desktop/sMitrovica8.jpg";
import sMitrovica6 from "../../../../../assets/images/Vojvodina/SremskiOkrug/SremskaMitrovica/desktop/sMitrovica6.jpg";
import sMitrovica7 from "../../../../../assets/images/Vojvodina/SremskiOkrug/SremskaMitrovica/desktop/sMitrovica7.jpg";
import sMitrovica11 from "../../../../../assets/images/Vojvodina/SremskiOkrug/SremskaMitrovica/mobile/MsMitrovica5.jpg";
import sMitrovica22 from "../../../../../assets/images/Vojvodina/SremskiOkrug/SremskaMitrovica/mobile/MsMitrovica2.jpg";
import sMitrovica33 from "../../../../../assets/images/Vojvodina/SremskiOkrug/SremskaMitrovica/mobile/MsMitrovica3.jpg";
import sMitrovica44 from "../../../../../assets/images/Vojvodina/SremskiOkrug/SremskaMitrovica/mobile/MsMitrovica4.jpg";
import sMitrovica55 from "../../../../../assets/images/Vojvodina/SremskiOkrug/SremskaMitrovica/mobile/MsMitrovica8.jpg";
import sMitrovica66 from "../../../../../assets/images/Vojvodina/SremskiOkrug/SremskaMitrovica/mobile/MsMitrovica6.jpg";
import sMitrovica77 from "../../../../../assets/images/Vojvodina/SremskiOkrug/SremskaMitrovica/mobile/MsMitrovica7.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { sremskiOkrugPathRoutes } from "./SremskiOkrugPathRoutes";
import { useContextAuth } from "../../../../../Context";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const SremskaMitrovica = () => {
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
            ? "Sremska Mitrovica | Istorija i Priroda Srema | Serbia Wonders"
            : "Sremska Mitrovica | History & Nature of Srem | Serbia Wonders"}
        </title>

        <meta
          name="description"
          content={
            switchLanguage === "rs"
              ? "Sremska Mitrovica nudi jedinstvenu kombinaciju istorije i prirode, sa bogatim arheološkim nalazištima, muzejima i prelepim gradskim plažama uz reku Savu."
              : "Sremska Mitrovica offers a unique blend of history and nature, featuring rich archaeological sites, museums, and beautiful city beaches along the Sava river."
          }
        />

        <meta
          name="keywords"
          content={
            switchLanguage === "rs"
              ? "Sremska Mitrovica, Srem, istorija, Rim, arheologija, Muzej Srema, Sirmium, gradska plaža, priroda"
              : "Sremska Mitrovica, Srem, history, Rome, archaeology, Srem Museum, Sirmium, city beach, nature"
          }
        />

        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/sremski-okrug/sremska-mitrovica`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/sremski-okrug/sremska-mitrovica"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/sremski-okrug/sremska-mitrovica"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/sremski-okrug/sremska-mitrovica"
        />
      </Helmet>


      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft className="arrowLeft" onClick={() => navigate(sremskiOkrugPathRoutes.home(switchLanguage))} />
        <header></header>
        <img srcSet={`${sMitrovica77} 450w, ${sMitrovica7} `} alt="Sremska Mitrovica 1" />

        <h1>Sremska Mitrovica</h1>

        {switchLanguage === 'rs' ?
          (
            <>

              <section lang="sr">
                <p>
                  Ukoliko planirate putovanje na kojem ćete u isto vreme moći da osetite
                  <strong>dodir istorije i prirode</strong>, onda ste na <em>pravom putu u Sremsku Mitrovicu</em>.
                  <strong>Sremska Mitrovica</strong>, <em>neodoljiva duša Srema</em>, pruža svakom gostu mogućnost
                  da pronađe <strong>svoju posebnu priču</strong>. Ovde se epohe stapaju poput <em>melodije</em>
                  koja se pred vašim očima proteže kroz <strong>umetnost, ukuse i pejzaže</strong>.
                  Bez obzira da li ste odabrali da istražite <em>tragove prošlih vremena</em> ili da se
                  <em>prepustite prirodi</em>, svuda ćete naći <strong>zadivljujuću lepotu</strong> i
                  <strong>pregršt iskustava</strong> koja čekaju da ih doživite.
                </p>
              </section>

              <img srcSet={`${sMitrovica33} 450w, ${sMitrovica3} `} alt="Sremska Mitrovica Muzej Srema" />

              <section lang="sr">
                <p>
                  <strong>Muzej Srema</strong> u Sremskoj Mitrovici čuva i prikazuje <em>kulturno nasleđe ovog regiona</em>,
                  sa <strong>bogatim zbirkama</strong> iz oblasti <em>arheologije</em>, <em>etnologije</em> i <em>istorije</em>.
                  Osnovan <strong>1954. godine</strong>, muzej se fokusira na <strong>arheološke nalaze iz Rimskog perioda</strong>,
                  posebno iz <em>antičkog Sirmijuma</em>, kao i na <strong>tradiciju</strong> i <em>svakodnevni život naroda Srema</em>.
                  Pored toga, muzej ima i <strong>istorijske zbirke</strong> koje se odnose na <em>srednji vek</em>,
                  <em>noviji period</em> i <strong>značajne događaje iz prošlosti ovog kraja</strong>.
                </p>
              </section>


              <img srcSet={`${sMitrovica55} 450w, ${sMitrovica5} `} alt="Ruinе ekonomskog dela Carske palate" />

              <section lang="sr">
                <p>
                  <strong>Ruine ekonomskog dela Carske palate</strong> iz doba <em>starog Rima</em> nalaze se u
                  <strong>gradskom središtu Sremske Mitrovice</strong>, na <em>arheološkom lokalitetu Sirmijum</em>.
                  Ovaj deo palate obuhvata ostatke <strong>raznih zgrada, skladišta, radionica</strong> i drugih objekata
                  koji su služili za <em>ekonomsku funkciju grada</em> tokom rimskog perioda.
                  Ove ruine pružaju <strong>uvek dragocen uvid</strong> u organizaciju i <em>svakodnevni život</em>
                  u jednom od <strong>najvažnijih rimskih gradova</strong>, a <em>arhitektonski ostaci</em> govore o
                  <strong>velikoj moći i bogatstvu Sirmijuma</strong> u to vreme.
                </p>
              </section>

              <img srcSet={`${sMitrovica44} 450w, ${sMitrovica4} `} alt="Fontana Kameni cvet Sremska Mitrovica" />

              <section lang="sr">
                <p>
                  <strong>Fontana Kameni cvet</strong> se nalazi u <em>centru gradskog parka</em> u neposrednoj blizini
                  <strong>Srpskog doma u Sremskoj Mitrovici</strong>. Napravljena je <strong>1946. godine</strong>, autora
                  <em>Ruskinje Irine Nepokojčicke</em>, prve poznate žene arhitekte u Sremskoj Mitrovici. Vodoskok je postavljen
                  na mestu nekadašnje <strong>„carske lipe”</strong>, koju je zasadila <em>Petrovaradinska imovna opština 1879. godine</em>
                  kao spomen na <strong>srebrni jubilej (pir) carskog bračnog para</strong> – cara Franje Josifa i caricu Jelisavetu.
                  <strong>Gradski park</strong>, koji je u vreme <em>Vojne granice</em> služio kao vežbalište Petrovaradinskog puka,
                  egzercirište i kao <em>Paradenplatz</em>. Pretpostavlja se da je park svoj današnji prepoznatljiv oblik dobio
                  <strong>70-tih godina 19. veka</strong>, nakon razvojačenja Vojne krajine. Tada su u njemu postavljeni i <strong>beli kameni rimski spomenici</strong>
                  koji su predstavljali začetak budućeg lapidarijuma.
                </p>
              </section>

              <img srcSet={`${sMitrovica22} 450w, ${sMitrovica2} `} alt="Gradska plaža u Sremskoj Mitrovici" />

              <section lang="sr">
                <p>
                  <strong>Gradska plaža</strong> u Sremskoj Mitrovici je jedno od <em>omiljenih mesta za opuštanje i uživanje</em>,
                  posebno tokom <strong>toplih letnjih meseci</strong>. Smeštena uz <em>reku Savu</em>, ova plaža nudi
                  <strong>savršen ambijent</strong> za <em>ljubitelje prirode, rekreacije</em>, kao i svih onih koji žele da
                  uživaju u <strong>osvežavajućoj vodi</strong> i <em>mirnom okruženju</em>.
                </p>
              </section>

              <img
                srcSet={`${sMitrovica66} 450w, ${sMitrovica6} `}
                alt="Gradska plaža u Sremskoj Mitrovici 2"
              />

              <section lang="sr">
                <p>
                  Plaža je opremljena za <strong>udoban boravak</strong>, sa velikim brojem <em>ležaljki</em>, <em>suncobrana</em>,
                  i <strong>staza za šetnje uz obalu</strong>. Pored toga, tu su i <em>sadržaji za decu</em>, kao i <strong>prostor za sport i rekreaciju</strong>.
                  Ljubitelji vodenih sportova mogu uživati u različitim aktivnostima, kao što su <em>vožnja čamcem</em>, <em>kajakom</em>,
                  ili čak <em>vožnja biciklom duž obale reke</em>. Za ljubitelje sportova, tu su i <strong>teren za odbojku na pesku</strong>,
                  kao i prostori za druge aktivnosti poput <em>joge</em> ili <em>aerobika na otvorenom</em>. U blizini plaže nalazi se i nekoliko
                  <strong>kafića i restorana</strong> koji nude <em>osveženje</em>, kao i mogućnost da uživate u <strong>lokalnim specijalitetima</strong>
                  dok se opuštate.
                </p>
              </section>

              <img
                srcSet={`${sMitrovica11} 450w, ${sMitrovica1} `}
                alt="Imperijalna palata u Sirmijumu"
              />

              <section lang="sr">
                <p>
                  <strong>Imperijalna palata u Sirmijumu</strong> je značajan <em>arheološki lokalitet</em> u Sremskoj Mitrovici,
                  koji predstavlja ostatke impozantne palate iz <strong>rimskog perioda</strong>. Sirmium (današnja Sremska Mitrovica)
                  je bio jedan od najvažnijih gradova <strong>Rimskog carstva</strong>, i tokom 3. i 4. veka je služio kao prestonica
                  <em>Zapadnog rimskog carstva</em> pod vladavinom careva iz dinastije <strong>Prevalitana</strong> i drugih značajnih
                  rimskih vladara. Arheološki ostaci palate uključuju fragmente <em>zidova, podova</em>, i raznih građevinskih struktura,
                  a značajan deo palate je bio ukrašen <strong>raskošnim mozaicima i zidnim slikama</strong>. Mozaik podovi koji su pronađeni
                  na ovom lokalitetu, sa raznim scenama i geometrijskim oblicima, svedoče o <em>visokom nivou umetnosti i izrade</em>
                  koji su bili prisutni u ovom periodu.
                </p>
              </section>

            </>
          )
          :
          (
            <>

              <section lang="en">
                <p>
                  If you are planning a trip where you can simultaneously feel the <strong>touch of history and nature</strong>, then you are on the <em>right path to Sremska Mitrovica</em>.
                  <strong>Sremska Mitrovica</strong>, the <em>irresistible soul of Srem</em>, offers every visitor the opportunity to find <strong>their own special story</strong>.
                  Here, epochs merge like a <em>melody</em> that unfolds before your eyes through <strong>art, flavors, and landscapes</strong>.
                  Whether you choose to explore <em>traces of past times</em> or to <em>surrender to nature</em>, everywhere you will find <strong>astonishing beauty</strong> and a <strong>plethora of experiences</strong> waiting to be lived.
                </p>
              </section>

              <img srcSet={`${sMitrovica33} 450w, ${sMitrovica3} `} alt="Sremska Mitrovica Museum of Srem" />

              <section lang="en">
                <p>
                  The <strong>Museum of Srem</strong> in Sremska Mitrovica preserves and showcases the <em>cultural heritage of this region</em>,
                  with <strong>rich collections</strong> in the fields of <em>archaeology</em>, <em>ethnology</em>, and <em>history</em>.
                  Founded in <strong>1954</strong>, the museum focuses on <strong>archaeological finds from the Roman period</strong>,
                  especially from <em>ancient Sirmium</em>, as well as on the <strong>tradition</strong> and <em>everyday life of the Srem people</em>.
                  In addition, the museum holds <strong>historical collections</strong> related to the <em>Middle Ages</em>,
                  <em>modern times</em>, and <strong>significant events from the past of this region</strong>.
                </p>
              </section>

              <img srcSet={`${sMitrovica55} 450w, ${sMitrovica5} `} alt="Ruins of the economic part of the Imperial Palace" />

              <section lang="en">
                <p>
                  The <strong>ruins of the economic section of the Imperial Palace</strong> from the <em>ancient Roman era</em> are located in the
                  <strong>city center of Sremska Mitrovica</strong>, on the <em>archaeological site of Sirmium</em>.
                  This part of the palace includes remains of <strong>various buildings, warehouses, workshops</strong>, and other structures
                  that served the <em>economic function of the city</em> during the Roman period.
                  These ruins provide a <strong>valuable insight</strong> into the organization and <em>daily life</em>
                  in one of the <strong>most important Roman cities</strong>, and the <em>architectural remains</em> testify to
                  the <strong>great power and wealth of Sirmium</strong> at that time.
                </p>
              </section>

              <img srcSet={`${sMitrovica44} 450w, ${sMitrovica4} `} alt="Kameni cvet Fountain Sremska Mitrovica" />

              <section lang="en">
                <p>
                  The <strong>Kameni cvet Fountain</strong> is located in the <em>center of the city park</em>, near
                  the <strong>Serbian Home in Sremska Mitrovica</strong>. It was built in <strong>1946</strong> by the author
                  <em>Russian architect Irina Nepokojčicka</em>, the first known female architect in Sremska Mitrovica. The fountain was placed
                  on the site of the former <strong>“imperial linden tree”</strong>, planted by the <em>Petrovaradin Property Municipality in 1879</em>
                  as a memorial to the <strong>silver jubilee (wedding anniversary) of the imperial couple</strong> – Emperor Franz Joseph and Empress Elisabeth.
                  The <strong>city park</strong>, which during the <em>Military Frontier</em> era served as the training ground for the Petrovaradin regiment,
                  a drill ground and as <em>Paradenplatz</em>. It is believed that the park acquired its current recognizable shape
                  in the <strong>1870s</strong>, after the disbandment of the Military Frontier. At that time, white stone Roman monuments
                  were placed there, marking the beginning of the future lapidarium.
                </p>
              </section>

              <img srcSet={`${sMitrovica22} 450w, ${sMitrovica2} `} alt="City Beach in Sremska Mitrovica" />

              <section lang="en">
                <p>
                  The <strong>city beach</strong> in Sremska Mitrovica is one of the <em>favorite places for relaxation and enjoyment</em>,
                  especially during the <strong>warm summer months</strong>. Located by the <em>Sava River</em>, this beach offers
                  a <strong>perfect atmosphere</strong> for <em>nature lovers, recreation enthusiasts</em>, as well as for all those who want to
                  enjoy the <strong>refreshing water</strong> and <em>peaceful surroundings</em>.
                </p>
              </section>

              <img
                srcSet={`${sMitrovica66} 450w, ${sMitrovica6} `}
                alt="City Beach in Sremska Mitrovica 2"
              />

              <section lang="en">
                <p>
                  The beach is equipped for a <strong>comfortable stay</strong>, with many <em>sun loungers</em>, <em>umbrellas</em>,
                  and <strong>walking paths along the shore</strong>. In addition, there are <em>children’s facilities</em> and <strong>spaces for sports and recreation</strong>.
                  Water sports enthusiasts can enjoy various activities, such as <em>boating</em>, <em>kayaking</em>,
                  or even <em>bicycling along the riverbank</em>. For sports lovers, there is a <strong>sandy volleyball court</strong>,
                  as well as spaces for other activities like <em>yoga</em> or <em>outdoor aerobics</em>. Near the beach, there are several
                  <strong>cafés and restaurants</strong> offering <em>refreshments</em>, as well as the opportunity to enjoy <strong>local specialties</strong>
                  while relaxing.
                </p>
              </section>

              <img
                srcSet={`${sMitrovica11} 450w, ${sMitrovica1} `}
                alt="Imperial Palace in Sirmium"
              />

              <section lang="en">
                <p>
                  The <strong>Imperial Palace in Sirmium</strong> is a significant <em>archaeological site</em> in Sremska Mitrovica,
                  representing the remains of an impressive palace from the <strong>Roman period</strong>. Sirmium (today’s Sremska Mitrovica)
                  was one of the most important cities of the <strong>Roman Empire</strong>, and during the 3rd and 4th centuries served as the capital
                  of the <em>Western Roman Empire</em> under the rule of emperors from the <strong>Prevalitana dynasty</strong> and other notable
                  Roman rulers. The archaeological remains of the palace include fragments of <em>walls, floors</em>, and various building structures,
                  and a significant part of the palace was decorated with <strong>luxurious mosaics and wall paintings</strong>. The mosaic floors found
                  at this site, featuring various scenes and geometric shapes, testify to the <em>high level of art and craftsmanship</em>
                  present during this period.
                </p>
              </section>

            </>

          )}

      </div>
    </>
  );
};


export default SremskaMitrovica;