/* eslint-disable react/no-unknown-property */
/* eslint-disable no-useless-escape */
import sicevackaKlisura1 from "../../../../../assets/images/JuznaIIstocnaSrbija/NisavskiOkrug/SicevackaKlisura/desktop/sicevackaKlisura1.jpg";
import sicevackaKlisura2 from "../../../../../assets/images/JuznaIIstocnaSrbija/NisavskiOkrug/SicevackaKlisura/desktop/sicevackaKlisura2.jpg";
import sicevackaKlisura3 from "../../../../../assets/images/JuznaIIstocnaSrbija/NisavskiOkrug/SicevackaKlisura/desktop/sicevackaKlisura3.jpg";
import sicevackaKlisura4 from "../../../../../assets/images/JuznaIIstocnaSrbija/NisavskiOkrug/SicevackaKlisura/desktop/sicevackaKlisura4.jpg";
import sicevackaKlisura5 from "../../../../../assets/images/JuznaIIstocnaSrbija/NisavskiOkrug/SicevackaKlisura/desktop/sicevackaKlisura5.jpg";
import sicevackaKlisura11 from "../../../../../assets/images/JuznaIIstocnaSrbija/NisavskiOkrug/SicevackaKlisura/mobile/sicevackaKlisuraM1.jpg";
import sicevackaKlisura22 from "../../../../../assets/images/JuznaIIstocnaSrbija/NisavskiOkrug/SicevackaKlisura/mobile/sicevackaKlisuraM2.jpg";
import sicevackaKlisura33 from "../../../../../assets/images/JuznaIIstocnaSrbija/NisavskiOkrug/SicevackaKlisura/mobile/sicevackaKlisuraM3.jpg";
import sicevackaKlisura44 from "../../../../../assets/images/JuznaIIstocnaSrbija/NisavskiOkrug/SicevackaKlisura/mobile/sicevackaKlisuraM4.jpg";
import sicevackaKlisura55 from "../../../../../assets/images/JuznaIIstocnaSrbija/NisavskiOkrug/SicevackaKlisura/mobile/sicevackaKlisuraM5.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { nisavskiOkrugPathRoutes } from "./NisavskiOkrugPathRoutes";
import { useContextAuth } from "../../../../../Context";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const SicevackaKlisura = () => {
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

        <title>{switchLanguage === 'rs' ? "Sićevačka klisura – prirodna lepota Južne Srbije | Serbia Wonders" : "Sićevo Gorge – The Natural Beauty of Southern Serbia | Serbia Wonders"}</title>
        <meta
          name="description"
          content={switchLanguage === 'rs' ?
            "Sićevačka klisura je spektakularna rečna dolina Nišave, poznata po svojoj jedinstvenoj geologiji, flori i fauni. Nalazi se 14 km istočno od Niša i predstavlja jednu od najlepših prirodnih atrakcija Srbije."
            :
            "Sićevo Gorge is a spectacular river valley of the Nišava, known for its unique geology, flora, and fauna. Located 14 km east of Niš, it is one of Serbia’s most beautiful natural attractions."
          }
        />
        <meta
          name="keywords"
          content={switchLanguage === 'rs' ?
            "Sićevačka klisura, Nišava, Južna Srbija, priroda Srbije, kanjoni Srbije, park prirode, turističke destinacije, Niš"
            :
            "Sićevo Gorge, Nišava, Southern Serbia, nature of Serbia, Serbian canyons, nature park, tourist destinations, Niš"
          }
        />
        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/nisavski-okrug/sicevacka-klisura`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/nisavski-okrug/sicevacka-klisura"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/nisavski-okrug/sicevacka-klisura"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/nisavski-okrug/sicevacka-klisura"
        />

      </Helmet>



      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft className="arrowLeft" onClick={() => navigate(nisavskiOkrugPathRoutes.home(switchLanguage))} />
        <header></header>
        <img srcSet={`${sicevackaKlisura11} 450w, ${sicevackaKlisura1} `} alt="Sićevačka klisura 1" loading="lazy" />

        {switchLanguage === 'rs' ?
          (
            <>

              <h1>Sićevačka klisura</h1>

              <section lang="sr">
                <p>
                  <strong>Sićevačka klisura</strong> je deo rečne doline <strong>Nišave</strong>, nastala intenzivnim usađivanjem njenog vodenog toka u stenovitu masu, između severnih ogranaka <strong>Suve planine</strong> i južnih ogranaka <strong>Svrljiških planina</strong>. Nalazi se <strong>14 km istočno od Niša</strong>, između sela <strong>Prosek</strong> i naselja <strong>Dolac</strong>. Duga je oko <strong>17 km</strong> i spaja <strong>Nišku kotlinu</strong> sa <strong>Belopalanačkom kotlinom</strong>, predstavljajući najkraću vezu između srednjeg i donjeg <em>Ponišavlja</em>.
                </p>
              </section>

              <img srcSet={`${sicevackaKlisura22} 450w, ${sicevackaKlisura2}`} alt="Sićevačka klisura 2" loading="lazy" />

              <section lang="sr">
                <p>
                  Klisura je podeljena na dve geografske celine: gornju — <strong>Crnčansko-gradištanski kanjon</strong> i donju — <strong>Ostrovičku klisuru</strong>. Gornji deo je uži i više liči na kanjon, dok je donji širi sa blagim padinama. Oivičena je <strong>Svrljiškim planinama</strong> sa severa i obroncima <strong>Suve planine</strong> sa juga.
                </p>
              </section>

              <section lang="sr">
                <p>
                  Kroz Sićevačku klisuru prolaze i <strong>železnička pruga</strong> (izgrađena 1886/87) i <strong>međunarodni magistralni put E-80</strong> (izgrađen 1964). Pruga je deo svetske železničke magistrale <em>London—Pariz—Beograd—Niš—Sofija—Istanbul</em>, a put E-80 deo je panevropskog Koridora 10 koji povezuje <em>Salcburg</em> i <em>Istanbul</em>.
                </p>
              </section>

              <img srcSet={`${sicevackaKlisura33} 450w, ${sicevackaKlisura3}`} alt="Sićevačka klisura 3" loading="lazy" />

              <section lang="sr">
                <p>
                  Zbog svoje jedinstvene geologije, flore i faune, <strong>Sićevačka klisura</strong> je 2000. godine proglašena <strong>Parkom prirode II kategorije</strong>. Ovo zaštićeno područje obuhvata raznovrsne ekosisteme, sa brojnim endemskim, reliktnim i retkim vrstama biljaka i životinja.
                </p>
              </section>

              <img srcSet={`${sicevackaKlisura44} 450w, ${sicevackaKlisura4}`} alt="Sićevačka klisura 4" loading="lazy" />

              <section lang="sr">
                <p>
                  Klisura se prostire na geotektonski rasjednutom terenu, što je omogućilo proces <strong>krasifikacije</strong> krečnjaka. Na istočnom obodu nalazi se <strong>Kunovička površ</strong>, pejzažno i morfološki specifična celina. Sa severa je graniči <strong>Suva planina</strong>, a sa juga <strong>Svrljiške planine</strong>. Sićevačka klisura je, posle Đerdapske, najduža probijena klisura u Srbiji.
                </p>
              </section>

              <img srcSet={`${sicevackaKlisura55} 450w, ${sicevackaKlisura5}`} alt="Sićevačka klisura 5" loading="lazy" />

              <section lang="sr">
                <p>
                  U najužem delu, <strong>Gradištanskom kanjonu</strong>, klisura dostiže dubinu od <strong>260 do 360 metara</strong>. Ovaj kanjonski deo dug je <strong>7 km</strong> i usečen je između planinskih vrhova <strong>Oblik</strong> (901 m) i <strong>Pleš</strong> (1327 m). Donji deo, kod <strong>manastira Svete Petke Iverice</strong>, dostiže najveću dubinu. Klisura je formirana duž glavnog <strong>nišavskog rasjeda</strong>, koji je oblikovao i <strong>Nišku</strong> i <strong>Belopalanačku kotlinu</strong>.
                </p>
              </section>


            </>
          )
          :
          (
            <>

              <h1>Sićevačka Gorge</h1>

              <section lang="en">
                <p>
                  <strong>Sićevačka Gorge</strong> is part of the river valley of the <strong>Nišava River</strong>, formed by the intense incision of its watercourse into rocky terrain, located between the northern branches of the <strong>Suva Planina</strong> and the southern branches of the <strong>Svrljig Mountains</strong>. It is situated <strong>14 km east of Niš</strong>, between the village of <strong>Prosek</strong> and the settlement of <strong>Dolac</strong>. The gorge is approximately <strong>17 km long</strong> and connects the <strong>Niš Basin</strong> with the <strong>Bela Palanka Basin</strong>, representing the shortest link between the central and lower <em>Ponišavlje</em> region.
                </p>
              </section>

              <img srcSet={`${sicevackaKlisura22} 450w, ${sicevackaKlisura2}`} alt="Sićevačka Gorge 2" loading="lazy" />

              <section lang="en">
                <p>
                  The gorge is divided into two geographical sections: the upper — <strong>Crnčansko-Gradištanski Canyon</strong> and the lower — <strong>Ostrovička Gorge</strong>. The upper part is narrower and resembles a canyon more closely, while the lower part is wider with gentle slopes. It is bordered by the <strong>Svrljig Mountains</strong> to the north and the slopes of <strong>Suva Planina</strong> to the south.
                </p>
              </section>

              <section lang="en">
                <p>
                  Through the Sićevačka Gorge run both a <strong>railway line</strong> (built in 1886/87) and the <strong>E-80 international highway</strong> (built in 1964). The railway is part of the global rail route <em>London—Paris—Belgrade—Niš—Sofia—Istanbul</em>, while the E-80 is part of the Pan-European Corridor 10, connecting <em>Salzburg</em> and <em>Istanbul</em>.
                </p>
              </section>

              <img srcSet={`${sicevackaKlisura33} 450w, ${sicevackaKlisura3}`} alt="Sićevačka Gorge 3" loading="lazy" />

              <section lang="en">
                <p>
                  Due to its unique geology, flora, and fauna, <strong>Sićevačka Gorge</strong> was declared a <strong>Category II Nature Park</strong> in 2000. This protected area encompasses diverse ecosystems, home to numerous endemic, relict, and rare plant and animal species.
                </p>
              </section>

              <img srcSet={`${sicevackaKlisura44} 450w, ${sicevackaKlisura4}`} alt="Sićevačka Gorge 4" loading="lazy" />

              <section lang="en">
                <p>
                  The gorge lies on a geotectonic fault zone, which enabled the process of <strong>karstification</strong> of the limestone formations. On its eastern edge lies the expansive <strong>Kunovička Surface</strong>, a distinct geomorphological and landscape unit. It is bordered by <strong>Suva Planina</strong> to the north and the <strong>Svrljig Mountains</strong> to the south. After the Đerdap Gorge, this is the longest breakthrough gorge in Serbia.
                </p>
              </section>

              <img srcSet={`${sicevackaKlisura55} 450w, ${sicevackaKlisura5}`} alt="Sićevačka Gorge 5" loading="lazy" />

              <section lang="en">
                <p>
                  In its narrowest part, the <strong>Gradištanski Canyon</strong>, the gorge reaches a depth of <strong>260 to 360 meters</strong>. This canyon section is <strong>7 km long</strong>, carved between the mountain peaks <strong>Oblik</strong> (901 m) on the left and <strong>Pleš</strong> (1327 m) on the right. The lower part, near the <strong>Monastery of Saint Petka Iverica</strong>, reaches the greatest depth. The gorge was formed along the main <strong>Nišava fault line</strong>, which also shaped the <strong>Niš</strong> and <strong>Bela Palanka</strong> basins.
                </p>
              </section>


            </>
          )}

      </div>
    </>
  );
};


export default SicevackaKlisura;