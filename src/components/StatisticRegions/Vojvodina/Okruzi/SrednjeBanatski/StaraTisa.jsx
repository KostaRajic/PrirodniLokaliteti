/* eslint-disable react/no-unknown-property */
import stisa1 from "../../../../../assets/images/Vojvodina/SrednjeBanatskiOkrug/StaraTisa/desktop/staraTisa2.jpg";
import stisa2 from "../../../../../assets/images/Vojvodina/SrednjeBanatskiOkrug/StaraTisa/desktop/staraTisa3.jpg";
import stisa3 from "../../../../../assets/images/Vojvodina/SrednjeBanatskiOkrug/StaraTisa/desktop/staraTisa4.jpg";
import stisa4 from "../../../../../assets/images/Vojvodina/SrednjeBanatskiOkrug/StaraTisa/desktop/staraTisa5.jpg";
import stisa11 from "../../../../../assets/images/Vojvodina/SrednjeBanatskiOkrug/StaraTisa/mobile/MstaraTisa2.jpg";
import stisa22 from "../../../../../assets/images/Vojvodina/SrednjeBanatskiOkrug/StaraTisa/mobile/MstaraTisa3.jpg";
import stisa33 from "../../../../../assets/images/Vojvodina/SrednjeBanatskiOkrug/StaraTisa/mobile/MstaraTisa4.jpg";
import stisa44 from "../../../../../assets/images/Vojvodina/SrednjeBanatskiOkrug/StaraTisa/mobile/MstaraTisa5.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { srednjeBanatskiPathRoutes } from "./SrednjeBanatskiPathRoutes";
import { useContextAuth } from "../../../../../Context";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const StaraTisa = () => {
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
            ? 'Park prirode Stara Tisa | Biserno ostrvo i prirodna raznovrsnost | Serbia Wonders'
            : 'Stara Tisa Nature Park | Pearl Island and Natural Diversity | Serbia Wonders'}
        </title>

        <meta
          name="description"
          content={
            switchLanguage === 'rs'
              ? 'Park prirode Stara Tisa kod Bisernog ostrva je najduža mrtvaja reke Tise, sa očuvanim prirodnim staništima i bogatstvom biljnih i životinjskih vrsta.'
              : 'Stara Tisa Nature Park near Pearl Island is the longest oxbow of the Tisa River, preserving natural habitats and rich biodiversity.'
          }
        />

        <meta
          name="keywords"
          content={
            switchLanguage === 'rs'
              ? 'Stara Tisa, park prirode, Biserno ostrvo, Tisa mrtvaja, prirodna staništa, flora i fauna, ekosistem Tise, ptice močvarice, priroda Vojvodine, Novi Bečej'
              : 'Stara Tisa, nature park, Pearl Island, Tisa oxbow, natural habitats, flora and fauna, Tisa ecosystem, wetland birds, Vojvodina nature, Novi Bečej'
          }
        />

        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/srednje-banatski/stara-tisa`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/srednje-banatski/stara-tisa"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/srednje-banatski/stara-tisa"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/srednje-banatski/stara-tisa"
        />
      </Helmet>


      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft className="arrowLeft" onClick={() => navigate(srednjeBanatskiPathRoutes.staraTisa(switchLanguage))} />
        <header></header>
        <img srcSet={`${stisa11} 450w, ${stisa1} `} alt="Stara Tisa 1" />

        {switchLanguage === 'rs' ?
          (
            <>
              <h2>Park prirode "Stara Tisa kod Bisernog ostrva"</h2>

              <section lang="sr">
                <p>
                  Park prirode <strong>«Stara Tisa kod Bisernog ostrva»</strong> je kao hidrološki objekat posebno značajan zbog svoje očuvanosti.
                </p>
                <p>
                  Dužina od <strong>23.706 km</strong> čini je najdužom mrtvajom uz ceo tok reke <strong>Tise</strong>.
                </p>
                <p>
                  <em>Stara (Mrtva) Tisa</em> je očuvala svoje prirodne vrednosti iz <strong>XIX veka</strong>, kada je odsečena od svog toka.
                </p>
                <p>
                  Najvažnije karakteristike prirodnih staništa su određene geografskim položajem, kao i geomorfološkim i hidrološkim osobinama područja.
                </p>
                <p>
                  Ova vodena, močvarna i šumska staništa su utočište za <strong>67 vrsta fitoplanktona</strong> i <strong>27 vrsta zooplanktona</strong>, <strong>148 taksona vaskularne flore</strong>, <strong>21 bilјnu zajednicu</strong>, <strong>1 vrstu maločekinjastih crva</strong>, veliki broj insekata, <strong>29 vrsta riba</strong>, <strong>9 vrsta vodozemaca</strong> i <strong>4 vrste gmizavaca</strong>, <strong>183 vrste ptica</strong> i <strong>27 vrsta sisara</strong>, od kojih su mnoge <em>ugrožene</em>.
                </p>
              </section>

              <img srcSet={`${stisa22} 450w, ${stisa2} `} alt="Stara Tisa 2" />

              <section lang="sr">
                <p>
                  Kao park prirode, <strong>Stara Tisa</strong> ima zaštitu koja omogućava očuvanje <strong>biodiverziteta</strong> i prirodnih vrednosti ovog područja.
                </p>
                <p>
                  Aktivnosti koje mogu <em>negativno uticati</em> na ekosistem, kao što su <strong>prekomerni lov</strong>, <strong>uništavanje staništa</strong> i <strong>zagađenje</strong>, regulisane su zakonodavstvom.
                </p>
              </section>

              <img srcSet={`${stisa33} 450w, ${stisa3} `} alt="Stara Tisa 3" />

              <section lang="sr">
                <p>
                  Park prirode je područje <strong>dobro očuvanih prirodnih vrednosti</strong> sa pretežno očuvanim prirodnim ekosistemima i živopisnim pejsažima, namenjeno očuvanju ukupne <strong>geološke</strong>, <strong>biološke</strong> i <strong>predeone raznovrsnosti</strong>, kao i zadovolјenju naučnih, obrazovnih, duhovnih, estetskih, kulturnih, turističkih, zdravstveno-rekreativnih potreba i ostalih delatnosti usklađenih sa tradicionalnim načinom života i načelima održivog razvoja.
                </p>
              </section>

              <img srcSet={`${stisa44} 450w, ${stisa4} `} alt="Stara Tisa 4" />

              <section lang="sr">
                <p>
                  Pored <strong>ekološke vrednosti</strong>, park prirode ima i <strong>socio-ekonomski značaj</strong> za lokalnu zajednicu. Kroz <em>održivi turizam</em> i <em>edukaciju</em>, park doprinosi podizanju svesti o zaštiti prirode i očuvanju <strong>biološke raznovrsnosti</strong>.
                </p>
              </section>


            </>
          )
          :
          (
            <>
              <h2>Nature Park "Stara Tisa near Biserno Island"</h2>

              <section lang="en">
                <p>
                  The nature park <strong>"Stara Tisa near Biserno Island"</strong> is particularly significant as a hydrological feature due to its well-preserved state.
                </p>
                <p>
                  Its length of <strong>23.706 km</strong> makes it the longest oxbow lake along the entire course of the <strong>Tisa River</strong>.
                </p>
                <p>
                  <em>Stara (Dead) Tisa</em> has preserved its natural values from the <strong>19th century</strong>, when it was cut off from its main course.
                </p>
                <p>
                  The most important characteristics of the natural habitats are determined by the geographic location, as well as the geomorphological and hydrological features of the area.
                </p>
                <p>
                  These aquatic, swampy, and forest habitats provide refuge for <strong>67 species of phytoplankton</strong> and <strong>27 species of zooplankton</strong>, <strong>148 taxa of vascular flora</strong>, <strong>21 plant community</strong>, <strong>1 species of oligochaete worms</strong>, a large number of insects, <strong>29 fish species</strong>, <strong>9 amphibian species</strong>, and <strong>4 reptile species</strong>, <strong>183 bird species</strong>, and <strong>27 mammal species</strong>, many of which are <em>endangered</em>.
                </p>
              </section>

              <img srcSet={`${stisa22} 450w, ${stisa2} `} alt="Stara Tisa 2" />

              <section lang="en">
                <p>
                  As a nature park, <strong>Stara Tisa</strong> is protected to enable the conservation of <strong>biodiversity</strong> and the natural values of this area.
                </p>
                <p>
                  Activities that can <em>negatively impact</em> the ecosystem, such as <strong>excessive hunting</strong>, <strong>habitat destruction</strong>, and <strong>pollution</strong>, are regulated by legislation.
                </p>
              </section>

              <img srcSet={`${stisa33} 450w, ${stisa3} `} alt="Stara Tisa 3" />

              <section lang="en">
                <p>
                  A nature park is an area of <strong>well-preserved natural values</strong> with predominantly intact natural ecosystems and picturesque landscapes, intended to preserve the overall <strong>geological</strong>, <strong>biological</strong>, and <strong>landscape diversity</strong>, as well as to satisfy scientific, educational, spiritual, aesthetic, cultural, tourist, health-recreational needs and other activities aligned with traditional lifestyles and principles of sustainable development.
                </p>
              </section>

              <img srcSet={`${stisa44} 450w, ${stisa4} `} alt="Stara Tisa 4" />

              <section lang="en">
                <p>
                  Besides its <strong>ecological value</strong>, the nature park also has <strong>socio-economic significance</strong> for the local community. Through <em>sustainable tourism</em> and <em>education</em>, the park contributes to raising awareness about nature conservation and the preservation of <strong>biological diversity</strong>.
                </p>
              </section>

            </>
          )}

      </div>
    </>
  );
};


export default StaraTisa;