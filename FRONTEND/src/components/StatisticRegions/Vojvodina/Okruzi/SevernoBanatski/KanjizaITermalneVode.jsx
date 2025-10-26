/* eslint-disable react/no-unknown-property */
import kanjiza1 from "../../../../../assets/images/Vojvodina/SevernoBanatskiOkrug/KanjizaITerminalneVode/desktop/Kanjiza1.jpg";
import kanjiza2 from "../../../../../assets/images/Vojvodina/SevernoBanatskiOkrug/KanjizaITerminalneVode/desktop/Kanjiza3.jpg";
import kanjiza3 from "../../../../../assets/images/Vojvodina/SevernoBanatskiOkrug/KanjizaITerminalneVode/desktop/Kanjiza4.jpg";
import kanjiza4 from "../../../../../assets/images/Vojvodina/SevernoBanatskiOkrug/KanjizaITerminalneVode/desktop/Kanjiza5.jpg";
import kanjiza5 from "../../../../../assets/images/Vojvodina/SevernoBanatskiOkrug/KanjizaITerminalneVode/desktop/Kanjiza6.jpg";
import kanjiza11 from "../../../../../assets/images/Vojvodina/SevernoBanatskiOkrug/KanjizaITerminalneVode/mobile/MKanjiza1.jpg";
import kanjiza22 from "../../../../../assets/images/Vojvodina/SevernoBanatskiOkrug/KanjizaITerminalneVode/mobile/MKanjiza3.jpg";
import kanjiza33 from "../../../../../assets/images/Vojvodina/SevernoBanatskiOkrug/KanjizaITerminalneVode/mobile/MKanjiza4.jpg";
import kanjiza44 from "../../../../../assets/images/Vojvodina/SevernoBanatskiOkrug/KanjizaITerminalneVode/mobile/MKanjiza5.jpg";
import kanjiza55 from "../../../../../assets/images/Vojvodina/SevernoBanatskiOkrug/KanjizaITerminalneVode/mobile/MKanjiza6.jpg";


import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { severnoBanatskiPathRoutes } from "./SevernoBanatskiPathRoutes";
import { useContextAuth } from "../../../../../Context";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const Kanjiza = () => {
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
            ? 'Kanjiža i Terminalne vode | Priroda, kultura i turizam severne Srbije | Serbia Wonders'
            : 'Kanjiža and Thermal Waters | Nature, Culture and Tourism in Northern Serbia | Serbia Wonders'}
        </title>

        <meta
          name="description"
          content={
            switchLanguage === 'rs'
              ? 'Opština Kanjiža na severu Srbije poznata po termalnim vodama, reci Tisi, festivalu Vetrenjača u Oromu i kajakaškoj regati. Turizam, priroda i kultura uz granicu sa Mađarskom.'
              : 'Kanjiža municipality in northern Serbia, famous for thermal waters, the Tisa river, Windmill Festival in Orom, and kayaking regatta. Tourism, nature and culture near the Hungarian border.'
          }
        />

        <meta
          name="keywords"
          content={
            switchLanguage === 'rs'
              ? 'Kanjiža, termalne vode, reka Tisa, festival Vetrenjača, kajakaška regata, turizam Kanjiža, priroda severne Srbije, opština Kanjiža, kultura Vojvodine'
              : 'Kanjiža, thermal waters, Tisa river, Windmill Festival, kayaking regatta, Kanjiža tourism, northern Serbia nature, Kanjiža municipality, Vojvodina culture'
          }
        />

        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/severno-banatski/kanjiza`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/severno-banatski/kanjiza"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/severno-banatski/kanjiza"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/severno-banatski/kanjiza"
        />
      </Helmet>


      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft className="arrowLeft" onClick={() => navigate(severnoBanatskiPathRoutes.home(switchLanguage))} />
        <header></header>
        <img srcSet={`${kanjiza22} 450w, ${kanjiza2} `} alt="Kanjiza 1" />
        {switchLanguage === 'rs' ?
          (
            <>
              <h1>
                Kanjiža i Terminalne vode
              </h1>

              <section lang="sr">
                <p>
                  <strong>Opština Kanjiža</strong> se nalazi na severnom delu <strong>Srbije</strong>, na granici sa <strong>Mađarskom</strong>. Pokriva površinu od <strong>400 km²</strong> na kojoj živi <strong>24.995 stanovnika</strong> u 13 naseljenih mesta (<em>Adorjan, Velebit, Doline, Zimonjić, Kanjiža, Male Pijace, Mali Pesak, Martonoš, Novo Selo, Orom, Totovo Selo, Trešnjevac, Horgoš</em>).
                </p>
              </section>

              <img srcSet={`${kanjiza33} 450w, ${kanjiza3} `} alt="Kanjiza 2" />

              <section lang="sr">
                <p>
                  <strong>Grad Kanjiža</strong>, kao centar opštine, ističe se kao središte regionalnog značaja, čemu doprinose blizina <strong>reke Tise</strong> i graničnog prelaza <strong>Horgoš</strong>.
                </p>
              </section>

              <img srcSet={`${kanjiza44} 450w, ${kanjiza4} `} alt="Kanjiza 3" />

              <section lang="sr">
                <p>
                  Upućenost na <strong>reku</strong> znači mnogo za slikovitost pejzaža, plovidbu, sportski ribolov, turizam i druge delatnosti. Bogato zemljište, gline, nafta, zemni gas i termalne vode su prirodna blaga na kojima se zasnivaju dominantne privredne grane u opštini: <strong>poljoprivreda sa proizvodnjom hrane</strong>, <strong>industrija građevinskog materijala</strong>, <strong>rehabilitacioni i rekreacioni turizam</strong>.
                </p>
              </section>

              <img srcSet={`${kanjiza11} 450w, ${kanjiza1} `} alt="Kanjiza 4" />

              <section lang="sr">
                <p>
                  <strong>Festival Vetrenjača u Oromu</strong> je jedinstveni događaj koji slavi tradiciju i kulturno nasleđe ovog kraja. Tokom festivala, posetioci mogu uživati u različitim manifestacijama, koncertima i radionicama, dok se posebno ističu izložbe i prikazi starih vetrenjača, koje su deo lokalne tradicije. Ovaj festival okuplja ljubitelje folklora, umetnosti i istorije, pružajući uvid u bogatu kulturnu baštinu Oroma i okolnih naselja.
                </p>
              </section>

              <img srcSet={`${kanjiza55} 450w, ${kanjiza5} `} alt="Kanjiza 4" />

              <section lang="sr">
                <p>
                  <strong>Kajakaška regata u Kanjiži</strong> je popularna manifestacija koja okuplja ljubitelje kajakarenja i avanturističkog turizma. Takmičari i rekreativci plove rekama i kanalima, uživajući u prirodnim lepotama ovog regiona. Regata je prilika da se promovišu sportske aktivnosti, ali i da se skrene pažnja na značaj očuvanja prirodnih resursa.
                </p>
              </section>

            </>
          )
          :
          (
            <>
              <h1>
                Kanjiža and Thermal Waters
              </h1>

              <section lang="en">
                <p>
                  <strong>The municipality of Kanjiža</strong> is located in the northern part of <strong>Serbia</strong>, near the border with <strong>Hungary</strong>. It covers an area of <strong>400 km²</strong> with a population of <strong>24,995 inhabitants</strong> living in 13 settlements (<em>Adorjan, Velebit, Doline, Zimonjić, Kanjiža, Male Pijace, Mali Pesak, Martonoš, Novo Selo, Orom, Totovo Selo, Trešnjevac, Horgoš</em>).
                </p>
              </section>

              <img srcSet={`${kanjiza33} 450w, ${kanjiza3} `} alt="Kanjiža 2" />

              <section lang="en">
                <p>
                  <strong>The town of Kanjiža</strong>, as the municipal center, stands out as a regional hub, benefiting from the proximity of the <strong>Tisa River</strong> and the <strong>Horgoš border crossing</strong>.
                </p>
              </section>

              <img srcSet={`${kanjiza44} 450w, ${kanjiza4} `} alt="Kanjiža 3" />

              <section lang="en">
                <p>
                  The connection to the <strong>river</strong> is significant for the picturesque landscape, navigation, sport fishing, tourism, and other activities. Rich soil, clay, oil, natural gas, and thermal waters are natural resources that form the basis of the municipality's dominant economic sectors: <strong>agriculture and food production</strong>, <strong>building materials industry</strong>, and <strong>rehabilitation and recreational tourism</strong>.
                </p>
              </section>

              <img srcSet={`${kanjiza11} 450w, ${kanjiza1} `} alt="Kanjiža 4" />

              <section lang="en">
                <p>
                  <strong>The Windmill Festival in Orom</strong> is a unique event celebrating the tradition and cultural heritage of the area. During the festival, visitors can enjoy various events, concerts, and workshops, with special emphasis on exhibitions and displays of old windmills, which are part of the local tradition. This festival gathers lovers of folklore, art, and history, offering insight into the rich cultural heritage of Orom and surrounding settlements.
                </p>
              </section>

              <img srcSet={`${kanjiza55} 450w, ${kanjiza5} `} alt="Kanjiža 4" />

              <section lang="en">
                <p>
                  <strong>The Kayak Regatta in Kanjiža</strong> is a popular event that brings together kayaking enthusiasts and adventure tourists. Competitors and amateurs navigate rivers and canals, enjoying the natural beauty of the region. The regatta is an opportunity to promote sports activities and raise awareness about the importance of preserving natural resources.
                </p>
              </section>
            </>
          )}
      </div>
    </>
  );
};


export default Kanjiza;