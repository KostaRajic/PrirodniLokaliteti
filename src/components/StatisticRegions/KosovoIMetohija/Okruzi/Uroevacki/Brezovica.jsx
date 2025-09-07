/* eslint-disable react/no-unknown-property */
/* eslint-disable no-useless-escape */
import brezovica1 from "../../../../../assets/images/KosovoIMetohija/Urosevacki/Brezovica/desktop/brezovica1.jpg";
import brezovica2 from "../../../../../assets/images/KosovoIMetohija/Urosevacki/Brezovica/desktop/brezovica2.jpg";
import brezovica3 from "../../../../../assets/images/KosovoIMetohija/Urosevacki/Brezovica/desktop/brezovica3.jpg";
import brezovica4 from "../../../../../assets/images/KosovoIMetohija/Urosevacki/Brezovica/desktop/brezovica4.jpg";
import brezovica5 from "../../../../../assets/images/KosovoIMetohija/Urosevacki/Brezovica/desktop/brezovica5.jpg";
import brezovica11 from "../../../../../assets/images/KosovoIMetohija/Urosevacki/Brezovica/mobile/Mbrezovica1.jpg";
import brezovica22 from "../../../../../assets/images/KosovoIMetohija/Urosevacki/Brezovica/mobile/Mbrezovica2.jpg";
import brezovica33 from "../../../../../assets/images/KosovoIMetohija/Urosevacki/Brezovica/mobile/Mbrezovica3.jpg";
import brezovica44 from "../../../../../assets/images/KosovoIMetohija/Urosevacki/Brezovica/mobile/Mbrezovica4.jpg";
import brezovica55 from "../../../../../assets/images/KosovoIMetohija/Urosevacki/Brezovica/mobile/Mbrezovica5.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { urosevackiOkrugPathRoutes } from "./UrosevackiOkrugPathRoutes";
import { Helmet } from "react-helmet-async";
import { useContextAuth } from "../../../../../Context";
import { useEffect } from "react";

const Brezovica = () => {
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

        <title>{switchLanguage === 'rs' ? "Ski centar Brezovica – Planinski raj na Šari | Serbia Wonders" : "Brezovica Ski Resort – Mountain Paradise on Šar | Serbia Wonders"}</title>
        <meta
          name="description"
          content={switchLanguage === 'rs' ?
            "Ski centar Brezovica na planini Šara nudi vrhunske uslove za zimski turizam, sa dugim zimama i bogatom prirodom. Popularna destinacija za skijanje, planinarenje i rekreaciju na Kosovu i Metohiji."
            :
            "Ski Center Brezovica on Mount Šara offers excellent conditions for winter tourism, with long winters and rich nature. A popular destination for skiing, hiking, and recreation in Kosovo and Metohija."
          }
        />
        <meta
          name="keywords"
          content={switchLanguage === 'rs' ?
            "Ski centar Brezovica, Šara, zimski turizam, skijanje, planinarenje, Kosovo i Metohija, Štrpce, planinski pejzaži, Srbija"
            :
            "Ski Center Brezovica, Šara, winter tourism, skiing, hiking, Kosovo and Metohija, Štrpce, mountain landscapes, Serbia"
          }
        />
        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/urosevacki-okrug/brezovica`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/urosevacki-okrug/brezovica"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/urosevacki-okrug/brezovica"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/urosevacki-okrug/brezovica"
        />

      </Helmet>


      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft className="arrowLeft" onClick={() => navigate(urosevackiOkrugPathRoutes.home(switchLanguage))} />
        <header></header>
        <img srcSet={`${brezovica11} 450w, ${brezovica1} `} alt="Ski centar Brezovica 1" loading="lazy" />

        {switchLanguage === 'rs' ?
          (
            <>

              <h2>Ski centar Brezovica</h2>

              <section lang="sr">
                <p>
                  <strong>Ski centar Brezovica</strong> je poznata destinacija koja se nalazi na
                  severozapadnoj strani planine <strong>Šara</strong>, u opštini <strong>Štrpce</strong>. Ovaj jedinstveni
                  sportsko-rekreativni kompleks prostire se na nadmorskoj visini od <strong>900 do 2.500 metara</strong>.
                  Udaljen je oko <strong>60 km od Prištine</strong> i isto toliko od
                  aerodroma u Skoplju. Takođe, od Soluna je <strong>303 km</strong>, od Sofije (preko Niša)
                  oko <strong>355 km</strong>, a od Beograda <strong>400 km</strong>. Sa svojom alpskom prirodom i
                  visokoplaninskim pejzažima, Brezovica podseća na najpoznatije ski centre
                  u Evropi, pružajući posetiocima <em>izuzetno iskustvo</em> na stazi i u prirodi.
                </p>

                <img srcSet={`${brezovica22} 450w, ${brezovica2}`} alt="Ski centar Brezovica 2" loading="lazy" />

                <p>
                  Stogodišnje šume, prelepe livade i prostrani pašnjaci bogati su planinskim
                  cvećem, lekovitim biljem i retkim vrstama divljači. Zbog visoke količine
                  padavina i vododržljivih stena, u ovom području razvila se gusta rečna
                  mreža, a brojni izvori i površinske vode čine ga izuzetno bogatim.
                  Brojni izvori i potočići sa hladnom i kristalno čistom vodom dodaju
                  posebnu lepotu i šarm ovom prirodnom okruženju.
                </p>

                <img srcSet={`${brezovica33} 450w, ${brezovica3}`} alt="Ski centar Brezovica 3" loading="lazy" />

                <p>
                  Niži delovi ovog regiona karakterišu se <strong>župskom klimom</strong>, sa prijatnim
                  dnevnim temperaturama i osvežavajućim noćima. Na višim delovima
                  preovladava <strong>alpska klima</strong>, pa se sneg zadržava čak i do <strong>280 dana u godini</strong>.
                  Zanimljivo je da je moguće doživeti sva četiri godišnja doba u
                  samo jednom danu, a čak i tokom letnjih meseci, u julu i avgustu,
                  najviši delovi planine <strong>Šara</strong> mogu biti prekriveni snegom. Ovi povoljni
                  klimatski uslovi čine područje savršenim za <em>zimski turizam, sport i rekreaciju</em>, pa je centar popularan među posetiocima tokom cele godine.
                </p>

                <img srcSet={`${brezovica44} 450w, ${brezovica4}`} alt="Ski centar Brezovica 4" loading="lazy" />

                <p>
                  Tokom leta, posetioci Brezovice uživaju u neposrednom kontaktu sa
                  prirodom kroz različite aktivnosti poput <strong>planinarenja</strong>, rekreacije,
                  izleta, lova i ribolova, a imaju priliku i da istraže mnoge
                  kulturno-istorijske spomenike ovog kraja. Turistički centar Brezovica je
                  otvoren tokom cele godine i pruža mogućnosti za organizovanje
                  seminara, simpozijuma, kongresa i naučnih skupova.
                </p>

                <img srcSet={`${brezovica55} 450w, ${brezovica5}`} alt="Ski centar Brezovica 5" loading="lazy" />

                <p>
                  <strong>Ski centar Brezovica</strong> je domaćin dva evropska prvenstva u alpskom
                  skijanju, kao i devet državnih prvenstava. Svake godine (do 1999.) bila
                  je uključena trka u spustu i veleslalomu za muškarce, poznata kao <em>"Inex - ski kup"</em>,
                  koja je bila deo FIS kalendara. Na godišnjem nivou, Ski centar Brezovica beleži više od
                  <strong>103.000 noćenja</strong> u svim svojim objektima, dok se dodatnih <strong>13.000 noćenja</strong>
                  ostvaruje u drugim iznajmljenim objektima, među kojima se izdvaja <strong>"Dom penzionera"</strong>,
                  danas poznat kao hotel <strong>"Junior"</strong> na Brezovici.
                </p>
              </section>


            </>
          )
          :
          (
            <>

              <h2>Brezovica Ski Resort</h2>

              <section lang="en">
                <p>
                  <strong>Brezovica Ski Center</strong> is a well-known destination located on
                  the northwestern side of the <strong>Šara</strong> mountain, in the municipality of <strong>Štrpce</strong>.
                  This unique sports and recreational complex stretches at an altitude of <strong>900 to 2,500 meters</strong>.
                  It is about <strong>60 km away from Pristina</strong> and the same distance from
                  the airport in Skopje. Also, it is <strong>303 km from Thessaloniki</strong>, around <strong>355 km from Sofia</strong> (via Niš),
                  and <strong>400 km from Belgrade</strong>. With its alpine nature and
                  high-mountain landscapes, Brezovica resembles the most famous ski resorts
                  in Europe, offering visitors an <em>exceptional experience</em> on the slopes and in nature.
                </p>

                <img srcSet={`${brezovica22} 450w, ${brezovica2}`} alt="Brezovica Ski Center 2" loading="lazy" />

                <p>
                  Century-old forests, beautiful meadows, and vast pastures are rich with mountain
                  flowers, medicinal herbs, and rare species of wildlife. Due to the high amount
                  of precipitation and water-retentive rocks, a dense river network has developed
                  in this area, and numerous springs and surface waters make it exceptionally rich.
                  Many springs and streams with cold and crystal-clear water add
                  special beauty and charm to this natural environment.
                </p>

                <img srcSet={`${brezovica33} 450w, ${brezovica3}`} alt="Brezovica Ski Center 3" loading="lazy" />

                <p>
                  The lower parts of this region are characterized by a <strong>temperate continental climate</strong>,
                  with pleasant daytime temperatures and refreshing nights. In the higher parts,
                  an <strong>alpine climate</strong> prevails, with snow lasting up to <strong>280 days per year</strong>.
                  Interestingly, it is possible to experience all four seasons
                  in just one day, and even during the summer months, in July and August,
                  the highest parts of the <strong>Šara</strong> mountain can be covered with snow. These favorable
                  climatic conditions make the area perfect for <em>winter tourism, sports, and recreation</em>,
                  and the center is popular among visitors throughout the year.
                </p>

                <img srcSet={`${brezovica44} 450w, ${brezovica4}`} alt="Brezovica Ski Center 4" loading="lazy" />

                <p>
                  During the summer, visitors to Brezovica enjoy close contact with
                  nature through various activities such as <strong>hiking</strong>, recreation,
                  excursions, hunting, and fishing, and have the opportunity to explore many
                  cultural and historical monuments of this region. The Brezovica tourist center is
                  open year-round and provides opportunities for organizing
                  seminars, symposiums, congresses, and scientific gatherings.
                </p>

                <img srcSet={`${brezovica55} 450w, ${brezovica5}`} alt="Brezovica Ski Center 5" loading="lazy" />

                <p>
                  <strong>Brezovica Ski Center</strong> has hosted two European championships in alpine
                  skiing, as well as nine national championships. Every year (until 1999) it included
                  downhill and giant slalom races for men, known as the <em>"Inex - Ski Cup"</em>,
                  which was part of the FIS calendar. Annually, Brezovica Ski Center records more than
                  <strong>103,000 overnight stays</strong> in all its facilities, while an additional <strong>13,000 overnight stays</strong>
                  are made in other rented accommodations, including the <strong>"Retirement Home"</strong>,
                  now known as the <strong>"Junior"</strong> hotel in Brezovica.
                </p>
              </section>


            </>
          )}

      </div>
    </>
  );
};


export default Brezovica;