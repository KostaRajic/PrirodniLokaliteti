/* eslint-disable react/no-unknown-property */
import goc1 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RaskiOkrug/PlaninaGoc/desktop/planinaGoc1.jpg";
import goc2 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RaskiOkrug/PlaninaGoc/desktop/planinaGoc2.jpg";
import goc3 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RaskiOkrug/PlaninaGoc/desktop/planinaGoc3.jpg";
import goc4 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RaskiOkrug/PlaninaGoc/desktop/planinaGoc4.jpg";
import goc5 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RaskiOkrug/PlaninaGoc/desktop/planinaGoc5.jpg";
import goc6 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RaskiOkrug/PlaninaGoc/desktop/planinaGoc6.jpg";
import goc11 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RaskiOkrug/PlaninaGoc/mobile/MplaninaGoc1.jpg";
import goc22 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RaskiOkrug/PlaninaGoc/mobile/MplaninaGoc2.jpg";
import goc33 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RaskiOkrug/PlaninaGoc/mobile/MplaninaGoc3.jpg";
import goc44 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RaskiOkrug/PlaninaGoc/mobile/MplaninaGoc4.jpg";
import goc55 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RaskiOkrug/PlaninaGoc/mobile/MplaninaGoc5.jpg";
import goc66 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RaskiOkrug/PlaninaGoc/mobile/MplaninaGoc6.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { raskiOkrugPathRoutes } from "./RaskiOkrugPathRoutes";
import { useContextAuth } from "../../../../../Context";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const PlaninaGoc = () => {
  const navigate = useNavigate();
  const { switchLanguage } = useContextAuth();
  const { lang } = useParams;

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
            ? "Planina Goč – Zeleni biser centralne Srbije | Srbija Wonders"
            : "Mount Goč – The Green Gem of Central Serbia | Serbia Wonders"}
        </title>

        <meta
          name="description"
          content={
            switchLanguage === 'rs'
              ? "Planina Goč, smeštena iznad Vrnjačke Banje, poznata je po čistoj prirodi, lekovitom bilju, izvorima pijaće vode i ski-stazama za rekreaciju. Idealan spoj prirode, zdravlja i aktivnog odmora."
              : "Mount Goč, located above Vrnjačka Banja, is known for its pristine nature, medicinal herbs, clean water springs, and ski slopes. A perfect blend of nature, wellness, and recreation."}
        />

        <meta
          name="keywords"
          content={
            switchLanguage === 'rs'
              ? "Planina Goč, Vrnjačka Banja, ski staze Goč, jezero Salište, pešačke staze, lekovita priroda, banjski turizam, centralna Srbija"
              : "Mount Goč, Vrnjačka Banja, Goč ski slopes, Lake Salište, hiking trails, medicinal nature, spa tourism, central Serbia"}
        />

        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/sumadija-tekst-modal/sumadija-i-zapadna-srbija/raski-okrug/planina-goc`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/sumadija-tekst-modal/sumadija-i-zapadna-srbija/raski-okrug/planina-goc"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/sumadija-tekst-modal/sumadija-i-zapadna-srbija/raski-okrug/planina-goc"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/sumadija-tekst-modal/sumadija-i-zapadna-srbija/raski-okrug/planina-goc"
        />
      </Helmet>


      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft className="arrowLeft" onClick={() => navigate(raskiOkrugPathRoutes.home(switchLanguage))} style={{ fill: 'white' }} />
        <header></header>
        <img srcSet={`${goc11} 450w, ${goc1} `} alt="Planina Goč 1" />

        {switchLanguage === 'rs' ?
          (
            <>

              <h1 style={{ color: "white" }}>Planina Goč</h1>

              <section lang="sr">
                <p>
                  Južno od <strong>Zapadne Morave</strong>, iznad <strong>Vrnjačke Banje</strong>, uzdiže se <strong>planina Goč</strong>.
                  To je <em>niža planina</em> sa najvišim vrhom <strong>Ljutken (1216 m)</strong>, koja je izvor mnogih potoka i reka koje teku prema
                  <strong> Zapadnoj Moravi</strong> i <strong>Rasini</strong>, čineći krajolik Goča <em>posebnim i atraktivnim</em>.
                  Planina Goč, koja se nalazi na <strong>13 km</strong> od Vrnjačke Banje, popularno je <em>izletište</em> i omiljeno
                  odredište za posetioce ovog kraja.
                </p>
              </section>

              <img srcSet={`${goc22} 450w, ${goc2}`} alt="Planina Goč 2" />

              <section lang="sr">
                <p>
                  Goč je prekriven uglavnom <strong>bukovim, jelovim i borovim šumama</strong>, pružajući <em>lep i miran ambijent</em>, kao i <strong>lekovite prednosti</strong>.
                  Procene govore da na Goču raste oko <strong>650 biljnih vrsta</strong>, od kojih je više od <strong>200 lekovitih i aromatičnih</strong>.
                  Planina je bogata izvorima <strong>čiste pijaće vode</strong> – postoji oko <strong>250 izvora</strong>, od kojih su <strong>Sokoljska</strong> i
                  <strong> Gvozdačka</strong> poribljeni. Na tim izvorima nalaze se očuvane <strong>vodenice</strong>. <em>Jezero Salište</em>, koje se sja poput
                  planinskog oka, predstavlja pravi <strong>dragulj</strong>, iako je kupanje u njemu <em>zabranjeno</em>.
                </p>
              </section>

              <img srcSet={`${goc33} 450w, ${goc3}`} alt="Planina Goč 3" />

              <section lang="sr">
                <p>
                  <em>Netaknuta priroda</em>, savršen spoj <strong>blage klime</strong>, <strong>čistog vazduha</strong> i <strong>bogate vegetacije</strong>,
                  pozitivno utiče na zdravlje, pomažući u borbi protiv <strong>anemičnosti</strong>, jačanju <strong>imuniteta</strong> i oporavku
                  <strong> nervnog sistema</strong>. Ovi faktori čine Goč idealnim mestom za <strong>šetnje</strong>, <strong>planinarenje</strong>,
                  <strong> piknike</strong> i <strong>sportski turizam</strong>. Zimi je Goč prekriven <strong>snežnom belinom</strong>.
                  Ovde se nalaze uređene <strong>ski-staze</strong> namenjene <em>početnicima i rekreativcima</em>, sa kompletnom infrastrukturom:
                  <strong> žičarama</strong>, <strong>ski-liftovima</strong> i <strong>školom skijanja</strong>. Posebno je atraktivna <strong>ski-staza Krst</strong>,
                  koja se nalazi samo <strong>desetak kilometara</strong> od Vrnjačke Banje. Kombinovanjem <em>opuštanja u banjskim wellness centrima</em>,
                  možete uživati u <strong>ski-aktivnostima</strong> na Goču za svega <strong>pola sata</strong>.
                </p>
              </section>

              <img srcSet={`${goc44} 450w, ${goc4}`} alt="Planina Goč 4" />

              <section lang="sr">
                <p>
                  Goč nudi <strong>idealne terene za visinske pripreme sportista</strong>. Zbog svojih blagodeti, lekari sve češće preporučuju
                  boravak na ovoj planini osobama koje imaju probleme sa <strong>kardiovaskularnim sistemom</strong>, <strong>disajnim organima</strong>
                  ili su pod <em>psihičkim stresom</em>. Za ljubitelje istorije, Goč je i značajno <strong>arheološko nalazište</strong>.
                  Na ovoj planini se nalazi <strong>rimsko groblje</strong>, gde su bili sahranjivani <em>Sasi</em> – germanski rudari koji su
                  radili u Srbiji za vreme <strong>vladavine dinastije Nemanjića</strong>.
                </p>
              </section>

              <img srcSet={`${goc55} 450w, ${goc5}`} alt="Planina Goč 5" />

              <section lang="sr">
                <p>
                  Goč je <strong>lako dostupan</strong> zahvaljujući više različitih prilaznih puteva. Postoji <em>stari put</em> koji vodi preko
                  <strong> Stanišinaca</strong> i nešto je duži, ali je <strong>manje strm</strong> i bez serpentina u poređenju sa <em>novim putem</em>
                  koji direktno vodi do ski staza na <strong>banjskoj strani planine</strong>. Ova pogodnost čini Goč <strong>atraktivnim odredištem</strong>
                  za turiste, a zahvaljujući <strong>blizini Vrnjačke Banje</strong> i <strong>dobroj putnoj infrastrukturi</strong>, predstavlja odličnu
                  opciju za <strong>jednodnevne izlete</strong> posetilaca koji borave u ovom banjskom centru.
                </p>
              </section>

              <img srcSet={`${goc66} 450w, ${goc6}`} alt="Planina Goč 6" />

              <section lang="sr">
                <p>
                  Na Goču postoji <strong>pet jasno označenih staza za pešačenje</strong>: <strong>žuta</strong>, <strong>zelena</strong>, <strong>braon</strong>,
                  <strong> plava</strong> i <strong>crvena</strong>. Početne tačke svih staza nalaze se kod <strong>hotela ‘Piramida’</strong> i kod
                  <strong> nastavne baze Šumarskog fakulteta Gvozdac</strong>. Staze su prilagođene <em>različitim nivoima kondicije</em>, pa su pogodne kako
                  za one koji žele <strong>kraće šetnje</strong>, tako i za <strong>ljubitelje dužih planinskih tura</strong>.
                </p>
              </section>


            </>
          )
          :
          (
            <>

              <h1 style={{ color: "white" }}>Mount Goč</h1>

              <section lang="en">
                <p>
                  South of the <strong>Western Morava</strong>, above <strong>Vrnjačka Banja</strong>, rises <strong>Mount Goč</strong>.
                  It is a <em>low mountain</em> with its highest peak <strong>Ljutken (1216 m)</strong>, which is the source of many streams and rivers flowing toward
                  the <strong>Western Morava</strong> and <strong>Rasina</strong>, making the landscape of Goč <em>unique and attractive</em>.
                  Mount Goč, located only <strong>13 km</strong> from Vrnjačka Banja, is a popular <em>excursion spot</em> and a favorite destination for visitors to this region.
                </p>
              </section>

              <img srcSet={`${goc22} 450w, ${goc2}`} alt="Mount Goč 2" />

              <section lang="en">
                <p>
                  Goč is mostly covered with <strong>beech, fir, and pine forests</strong>, offering a <em>beautiful and peaceful atmosphere</em>, as well as <strong>healing benefits</strong>.
                  Estimates suggest that around <strong>650 plant species</strong> grow on Goč, of which more than <strong>200 are medicinal and aromatic</strong>.
                  The mountain is rich in <strong>fresh drinking water sources</strong> – about <strong>250 springs</strong> exist, two of which, <strong>Sokoljska</strong> and
                  <strong> Gvozdačka</strong>, are stocked with fish. Preserved <strong>watermills</strong> can be found at these springs.
                  <em>Lake Salište</em>, which glistens like a mountain eye, is a true <strong>gem</strong>, although swimming in it is <em>prohibited</em>.
                </p>
              </section>

              <img srcSet={`${goc33} 450w, ${goc3}`} alt="Mount Goč 3" />

              <section lang="en">
                <p>
                  <em>Untouched nature</em>, a perfect combination of <strong>mild climate</strong>, <strong>clean air</strong>, and <strong>rich vegetation</strong>,
                  positively affects health, helping to combat <strong>anemia</strong>, strengthen the <strong>immune system</strong>, and support <strong>nervous system recovery</strong>.
                  These factors make Goč an ideal place for <strong>walks</strong>, <strong>hiking</strong>, <strong>picnics</strong>, and <strong>sports tourism</strong>.
                  In winter, Goč is covered in <strong>snowy whiteness</strong>. There are well-maintained <strong>ski slopes</strong> here, intended for <em>beginners and recreational skiers</em>,
                  with complete infrastructure: <strong>ski lifts</strong>, <strong>cable cars</strong>, and a <strong>ski school</strong>.
                  Especially attractive is the <strong>Krst ski slope</strong>, located just <strong>ten kilometers</strong> from Vrnjačka Banja.
                  By combining <em>relaxation in spa wellness centers</em>, you can enjoy <strong>ski activities</strong> on Goč in just <strong>half an hour</strong>.
                </p>
              </section>

              <img srcSet={`${goc44} 450w, ${goc4}`} alt="Mount Goč 4" />

              <section lang="en">
                <p>
                  Goč offers <strong>ideal terrain for high-altitude sports training</strong>. Due to its benefits, doctors increasingly recommend staying on this mountain to people with
                  <strong>cardiovascular problems</strong>, <strong>respiratory conditions</strong>, or those under <em>mental stress</em>.
                  For history lovers, Goč is also an important <strong>archaeological site</strong>. On this mountain lies a <strong>Roman cemetery</strong>,
                  where <em>Saxons</em> – German miners who worked in Serbia during the <strong>reign of the Nemanjić dynasty</strong> – were buried.
                </p>
              </section>

              <img srcSet={`${goc55} 450w, ${goc5}`} alt="Mount Goč 5" />

              <section lang="en">
                <p>
                  Goč is <strong>easily accessible</strong> thanks to several approach roads. There is an <em>old road</em> that goes through <strong>Stanišinci</strong> which is longer,
                  but <strong>less steep</strong> and without switchbacks compared to the <em>new road</em> that leads directly to the ski slopes on the <strong>spa side of the mountain</strong>.
                  This convenience makes Goč a <strong>popular tourist destination</strong>, and thanks to its <strong>proximity to Vrnjačka Banja</strong> and <strong>good road infrastructure</strong>,
                  it is an excellent option for <strong>day trips</strong> for visitors staying in this spa resort.
                </p>
              </section>

              <img srcSet={`${goc66} 450w, ${goc6}`} alt="Mount Goč 6" />

              <section lang="en">
                <p>
                  Goč features <strong>five clearly marked hiking trails</strong>: <strong>yellow</strong>, <strong>green</strong>, <strong>brown</strong>,
                  <strong> blue</strong>, and <strong>red</strong>. The starting points for all trails are located near the <strong>Hotel Piramida</strong> and
                  the <strong>Forestry Faculty's teaching base Gvozdac</strong>. The trails are suitable for <em>different fitness levels</em>, making them ideal both
                  for those seeking <strong>short walks</strong> and for <strong>fans of longer mountain hikes</strong>.
                </p>
              </section>


            </>
          )}
      </div>
    </>
  );
};


export default PlaninaGoc;