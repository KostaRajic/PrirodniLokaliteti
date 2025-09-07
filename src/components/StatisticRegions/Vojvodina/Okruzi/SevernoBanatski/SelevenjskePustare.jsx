/* eslint-disable react/no-unknown-property */
import pustare1 from "../../../../../assets/images/Vojvodina/SevernoBanatskiOkrug/SelevenjskePustare/desktop/selevnskePustare1.jpg";
import pustare2 from "../../../../../assets/images/Vojvodina/SevernoBanatskiOkrug/SelevenjskePustare/desktop/selevnskePustare2.jpg";
import pustare3 from "../../../../../assets/images/Vojvodina/SevernoBanatskiOkrug/SelevenjskePustare/desktop/selevnskePustare4.jpg";
import pustare4 from "../../../../../assets/images/Vojvodina/SevernoBanatskiOkrug/SelevenjskePustare/desktop/selevnskePustare5.jpg";
import pustare5 from "../../../../../assets/images/Vojvodina/SevernoBanatskiOkrug/SelevenjskePustare/desktop/selevnskePustare6.jpg";
import pustare11 from "../../../../../assets/images/Vojvodina/SevernoBanatskiOkrug/SelevenjskePustare/mobile/MselevnskePustare1.jpg";
import pustare22 from "../../../../../assets/images/Vojvodina/SevernoBanatskiOkrug/SelevenjskePustare/mobile/MselevnskePustare2.jpg";
import pustare33 from "../../../../../assets/images/Vojvodina/SevernoBanatskiOkrug/SelevenjskePustare/mobile/MselevnskePustare4.jpg";
import pustare44 from "../../../../../assets/images/Vojvodina/SevernoBanatskiOkrug/SelevenjskePustare/mobile/MselevnskePustare5.jpg";
import pustare55 from "../../../../../assets/images/Vojvodina/SevernoBanatskiOkrug/SelevenjskePustare/mobile/MselevnskePustare6.jpg";


import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { severnoBanatskiPathRoutes } from "./SevernoBanatskiPathRoutes";
import { useContextAuth } from "../../../../../Context";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const SelevenjskePustare = () => {
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
            ? 'Specijalni rezervat prirode Selevenjske pustare | Raznolikost Vojvodine | Serbia Wonders'
            : 'Special Nature Reserve Selevenjske Pustare | Biodiversity of Vojvodina | Serbia Wonders'}
        </title>

        <meta
          name="description"
          content={
            switchLanguage === 'rs'
              ? 'Specijalni rezervat Selevenjske pustare u Vojvodini čuva jedinstvenu floru i faunu ravničarskog tipa, sa brojnim zaštićenim i ugroženim vrstama.'
              : 'Selevenjske Pustare Special Nature Reserve in Vojvodina preserves unique plains flora and fauna, featuring many protected and endangered species.'
          }
        />

        <meta
          name="keywords"
          content={
            switchLanguage === 'rs'
              ? 'Selevenjske pustare, rezervat prirode, Vojvodina, zaštićene biljke, ugrožene životinje, modrovrana, ravničarski predeli, prirodna baština Srbije'
              : 'Selevenjske Pustare, nature reserve, Vojvodina, protected plants, endangered animals, western jackdaw, plains habitats, Serbia natural heritage'
          }
        />

        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/severno-banatski/selevenjske-pustare`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/severno-banatski/selevenjske-pustare"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/severno-banatski/selevenjske-pustare"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/severno-banatski/selevenjske-pustare"
        />
      </Helmet>


      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft className="arrowLeft" onClick={() => navigate(severnoBanatskiPathRoutes.home(switchLanguage))} />
        <header></header>
        <img srcSet={`${pustare33} 450w, ${pustare3} `} alt="Selevenjske pustare 1" />

        {switchLanguage === 'rs' ?
          (
            <>
              <h2>
                Selevenjske pustare
              </h2>

              <section lang="sr">
                <p>
                  <strong>Specijalni rezervat prirode "Selevenjske pustare"</strong> nalazi se na severu <strong>Vojvodine</strong> uz samu državnu granicu sa <strong>Mađarskom</strong>. Prostire se između mesta <strong>Bački Vinogradi</strong> i <strong>Horgoš</strong>, na teritoriji opština <strong>Kanjiža</strong> i <strong>Subotica</strong>.
                </p>
                <p>
                  <strong>"Selevenjske pustare"</strong> stavljene su pod zaštitu kao posebna prirodna vrednost koju čini visoka raznolikost staništa <em>ravničarskog tipa</em> predela.
                </p>
              </section>

              <img srcSet={`${pustare11} 450w, ${pustare1} `} alt="Selevenjske pustare 2" />

              <section lang="sr">
                <p>
                  Ovi predeli ističu se svojim <strong>florističkim vrednostima</strong>. Za neke biljne vrste, rezervat je <em>jedino stanište u našoj zemlji</em> ili je jedno od malobrojnih postojećih nalazišta: <strong>22 vrste</strong> su zaštićene zakonom, a <strong>14</strong> se smatraju ugroženim po međunarodnim merilima.
                </p>
              </section>

              <img srcSet={`${pustare22} 450w, ${pustare2} `} alt="Selevenjske pustare 3" />

              <section lang="sr">
                <p>
                  <strong>Selevenjske pustare</strong> se sastoje iz <strong>10 delova</strong>, „ostrvskih“ celina okruženih poljoprivrednim površinama, njivama i voćnjacima. Od životinjskih vrsta u ovom rezervatu prirode prisutne su vrste od međunarodnog značaja, među kojima su <em>barska žaba</em>, <em>peščarski gušter</em>, <em>slepi miševi</em>, kao i neke retke ptice gnezdarice.
                </p>
              </section>

              <img srcSet={`${pustare55} 450w, ${pustare5} `} alt="Selevenjske pustare 4" />

              <section lang="sr">
                <p>
                  Jednu od značajnih prirodnih vrednosti rezervata <strong>“Selevenjske pustare”</strong> predstavlja ptica <em>modrovrana</em>. U Vojvodini se modrovrana gnezdila na veoma malom broju lokacija i njihov broj se, pre preduzimanja mera aktivne zaštite, smanjio na svega 20 parova. Danas je situacija drugačija. Najveći deo prirodnog dobra predstavljaju otvorena travnata staništa peščarskog, stepskog ili slatinskog tipa. <strong>Selevenjska šuma</strong>, jedini je deo rezervata pokriven šumskim rastinjem, koji je nastao sadnjom radi obogaćivanja tadašnjeg lovišta grofa Karasa.
                </p>
              </section>

              <img srcSet={`${pustare44} 450w, ${pustare4} `} alt="Selevenjske pustare 5" />

              <section lang="sr">
                <p>
                  Zasađene su vrste koje nisu deo prirodnog staništa, kao što su trenutno veoma rasprostranjen <em>koprivić</em>, i <em>crni borovi</em>, koji su ovde našli i novu primenu. Iako mala po površini, ova šuma pruža utočište sitnim životinjama, među kojima su istraživači pronašli brojne ugrožene vrste. Ovde žive retki insekti – leptiri i trčuljci, kao i u evropskim razmerama vredni primerci pojedinih vrsta gmizavaca i vodozemaca – barska žaba i peščarski gušter. <em>Riđi šumski mrav</em> gradi svoje mravinjake na rubu šume.
                </p>
              </section>

            </>
          )
          :
          (
            <>
              <h2>
                Selevenjske Pustare
              </h2>

              <section lang="en">
                <p>
                  The <strong>Special Nature Reserve "Selevenjske Pustare"</strong> is located in the northern part of <strong>Vojvodina</strong>, right along the state border with <strong>Hungary</strong>. It stretches between the settlements of <strong>Bački Vinogradi</strong> and <strong>Horgoš</strong>, within the municipalities of <strong>Kanjiža</strong> and <strong>Subotica</strong>.
                </p>
                <p>
                  The <strong>"Selevenjske Pustare"</strong> have been placed under protection as a unique natural value due to the high diversity of <em>lowland-type habitats</em> in the region.
                </p>
              </section>

              <img srcSet={`${pustare11} 450w, ${pustare1} `} alt="Selevenjske Pustare 2" />

              <section lang="en">
                <p>
                  These areas stand out for their <strong>floristic values</strong>. For some plant species, the reserve is the <em>only habitat in our country</em> or one of the few existing localities: <strong>22 species</strong> are protected by law, and <strong>14</strong> are considered endangered by international standards.
                </p>
              </section>

              <img srcSet={`${pustare22} 450w, ${pustare2} `} alt="Selevenjske Pustare 3" />

              <section lang="en">
                <p>
                  <strong>Selevenjske Pustare</strong> consist of <strong>10 parts</strong>, “island-like” units surrounded by agricultural lands, fields, and orchards. Among the animal species present in this nature reserve are internationally significant species, including the <em>marsh frog</em>, <em>sand lizard</em>, <em>bats</em>, as well as some rare nesting birds.
                </p>
              </section>

              <img srcSet={`${pustare55} 450w, ${pustare5} `} alt="Selevenjske Pustare 4" />

              <section lang="en">
                <p>
                  One of the significant natural values of the <strong>“Selevenjske Pustare”</strong> reserve is the bird <em>roller</em>. In Vojvodina, rollers nested at very few locations, and before active protection measures were taken, their number dropped to only 20 pairs. Today, the situation is different. Most of the natural heritage consists of open grassy habitats of sandy, steppe, or saline types. The <strong>Selevenjska Forest</strong> is the only part of the reserve covered with forest vegetation, created by planting to enrich the hunting grounds of Count Karasa.
                </p>
              </section>

              <img srcSet={`${pustare44} 450w, ${pustare4} `} alt="Selevenjske Pustare 5" />

              <section lang="en">
                <p>
                  Species that are not part of the natural habitat have been planted, such as the currently widespread <em>nettle</em> and <em>black pines</em>, which have also found new uses here. Although small in area, this forest provides shelter to small animals, among which researchers have found numerous endangered species. Rare insects live here – butterflies and ground beetles – as well as European valuable specimens of certain reptiles and amphibians – the marsh frog and sand lizard. The <em>red forest ant</em> builds its anthills at the forest edge.
                </p>
              </section>
            </>
          )}

      </div>
    </>
  );
};

export default SelevenjskePustare;