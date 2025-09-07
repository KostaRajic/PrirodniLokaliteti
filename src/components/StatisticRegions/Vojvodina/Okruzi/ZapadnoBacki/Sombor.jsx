/* eslint-disable react/no-unknown-property */
import sombor1 from "../../../../../assets/images/Vojvodina/ZapadnoBackiOkrug/Sombor/desktop/Sombor1.jpg";
import sombor2 from "../../../../../assets/images/Vojvodina/ZapadnoBackiOkrug/Sombor/desktop/Sombor2.jpg";
import sombor3 from "../../../../../assets/images/Vojvodina/ZapadnoBackiOkrug/Sombor/desktop/Sombor3.jpg";
import laza from "../../../../../assets/images/Vojvodina/ZapadnoBackiOkrug/Sombor/Spomenici/desktop/laza.jpg";
import jovan from "../../../../../assets/images/Vojvodina/ZapadnoBackiOkrug/Sombor/Spomenici/desktop/jovan.jpg";
import spomen1999 from "../../../../../assets/images/Vojvodina/ZapadnoBackiOkrug/Sombor/Spomenici/desktop/spomen1999.jpg";
import sombor5 from "../../../../../assets/images/Vojvodina/ZapadnoBackiOkrug/Sombor/desktop/Sombor5.jpg";
import sombor11 from "../../../../../assets/images/Vojvodina/ZapadnoBackiOkrug/Sombor/mobile/MSombor1.jpg";
import sombor22 from "../../../../../assets/images/Vojvodina/ZapadnoBackiOkrug/Sombor/mobile/MSombor2.jpg";
import sombor33 from "../../../../../assets/images/Vojvodina/ZapadnoBackiOkrug/Sombor/mobile/MSombor3.jpg";
import laza1 from "../../../../../assets/images/Vojvodina/ZapadnoBackiOkrug/Sombor/Spomenici/mobile/Mlaza.jpg";
import jovan1 from "../../../../../assets/images/Vojvodina/ZapadnoBackiOkrug/Sombor/Spomenici/mobile/Mjovan.jpg";
import spomen19991 from "../../../../../assets/images/Vojvodina/ZapadnoBackiOkrug/Sombor/Spomenici/mobile/Mspomen1999.jpg";
import sombor55 from "../../../../../assets/images/Vojvodina/ZapadnoBackiOkrug/Sombor/mobile/MSombor5.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { zapadnoBackiPathRoutes } from "./ZapadnoBackiPathRoutes";
import { useContextAuth } from "../../../../../Context";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const Sombor = () => {
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
            ? "Sombor | Grad kulture i tradicije u Vojvodini | Serbia Wonders"
            : "Sombor | City of Culture and Tradition in Vojvodina | Serbia Wonders"}
        </title>

        <meta
          name="description"
          content={
            switchLanguage === "rs"
              ? "Sombor je grad u severozapadnoj Vojvodini, poznat po bogatoj istoriji, arhitekturi, kulturnim manifestacijama i prirodnim lepotama. Idealna destinacija za ljubitelje tradicije i kulture."
              : "Sombor is a city in northwest Vojvodina, known for its rich history, architecture, cultural events, and natural beauty. An ideal destination for lovers of tradition and culture."
          }
        />

        <meta
          name="keywords"
          content={
            switchLanguage === "rs"
              ? "Sombor, Vojvodina, Srbija, istorija, kultura, arhitektura, turizam, poljoprivreda, spomenici"
              : "Sombor, Vojvodina, Serbia, history, culture, architecture, tourism, agriculture, monuments"
          }
        />

        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/zapadno-backi/sombor`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/zapadno-backi/sombor"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/zapadno-backi/sombor"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/zapadno-backi/sombor"
        />
      </Helmet>


      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft className="arrowLeft" onClick={() => navigate(zapadnoBackiPathRoutes.home(switchLanguage))} />
        <header></header>
        <img srcSet={`${sombor11} 450w, ${sombor1} `} alt="Sombor 1" />

        <h2>Sombor</h2>

        {switchLanguage === 'rs' ?
          (
            <>

              <section lang="sr">
                <p>
                  <strong>Sombor</strong> je grad u severozapadnom delu <strong>Srbije</strong>, u <strong>Vojvodini</strong>, smešten na
                  zapadnoj granici sa <strong>Mađarskom</strong>. Poznat je po svojoj bogatoj istoriji,
                  tradiciji i kulturnom nasleđu. Grad se prvi put spominje u <strong>12. veku</strong>, a
                  tokom srednjeg veka razvijao se kao <em>trgovačko i administrativno središte</em>.
                  Danas je Sombor jedan od važnijih gradova u Vojvodini i ima status opštine sa značajnom ulogom u regionalnom razvoju.
                </p>
              </section>

              <img srcSet={`${sombor22} 450w, ${sombor2} `} alt="sombor 2" />

              <section lang="sr">
                <p>
                  Arhitektura grada odražava bogatu prošlost, sa brojnim zgradama u
                  <strong>baroknom</strong>, <strong>klasicističkom</strong> i <strong>secesijskom stilu</strong>. Grad je poznat po svom
                  trgu, spomenicima i zgradama koje svedoče o značajnim istorijskim periodima. Sombor je i kulturni centar,
                  domaćin mnogim manifestacijama, koncertima i izložbama, a grad i okolna sela imaju bogatu tradiciju u
                  muzici, folkloru i likovnoj umetnosti.
                </p>
              </section>

              <img srcSet={`${sombor33} 450w, ${sombor3} `} alt="sombor 3" />

              <section lang="sr">
                <p>
                  Sombor je okružen plodnim poljima, a <strong>poljoprivreda</strong> i <strong>stočarstvo</strong> imaju
                  veliku ulogu u privredi grada. Takođe, priroda i mirna atmosfera čine ga
                  atraktivnim za turizam, a blizina granice sa Mađarskom doprinosi
                  njegovoj strateškoj važnosti. Sombor je grad koji spaja tradiciju,
                  kulturu i prirodne lepote, pružajući svojim posetiocima jedinstven doživljaj.
                </p>
              </section>

              <div className="displayFlex">
                <div>
                  <img srcSet={`${laza1} 450w, ${laza} `} alt="Laza Kostić" />
                  <p>Spomenik Lazi Kostiću</p>
                </div>
                <div>
                  <img srcSet={`${jovan1} 450w, ${jovan} `} alt="Jovan Dučić" />
                  <p>Spomenik Jovanu Dučiću</p>
                </div>
                <div>
                  <img srcSet={`${spomen19991} 450w, ${spomen1999} `} alt="Spomen 1999" />
                  <p>Spomenik žrtvama NATO agresiji 1999.</p>
                </div>
              </div>

              <img srcSet={`${sombor55} 450w, ${sombor5} `} alt="sombor 5" />

              <section lang="sr">
                <p>
                  Sombor je grad koji spaja tradiciju, kulturu i prirodne lepote,
                  pružajući svojim posetiocima jedinstven doživljaj.
                </p>
              </section>


            </>
          )
          :
          (
            <>

              <section lang="en">
                <p>
                  <strong>Sombor</strong> is a city in the northwestern part of <strong>Serbia</strong>, in <strong>Vojvodina</strong>,
                  located on the western border with <strong>Hungary</strong>. It is known for its rich history,
                  tradition, and cultural heritage. The city was first mentioned in the <strong>12th century</strong> and
                  during the Middle Ages developed as a <em>commercial and administrative center</em>.
                  Today, Sombor is one of the important cities in Vojvodina and holds the status of a municipality
                  with a significant role in regional development.
                </p>
              </section>

              <img srcSet={`${sombor22} 450w, ${sombor2} `} alt="sombor 2" />

              <section lang="en">
                <p>
                  The city’s architecture reflects its rich past, with numerous buildings in
                  <strong>Baroque</strong>, <strong>Classicist</strong>, and <strong>Secessionist styles</strong>. Sombor is famous for its
                  main square, monuments, and buildings that testify to significant historical periods. It is also a cultural center,
                  hosting many events, concerts, and exhibitions, while the city and surrounding villages have a rich tradition in
                  music, folklore, and visual arts.
                </p>
              </section>

              <img srcSet={`${sombor33} 450w, ${sombor3} `} alt="sombor 3" />

              <section lang="en">
                <p>
                  Sombor is surrounded by fertile fields, with <strong>agriculture</strong> and <strong>livestock farming</strong> playing
                  a major role in the city’s economy. Additionally, the natural environment and peaceful atmosphere make it
                  attractive for tourism, and its proximity to the Hungarian border adds to its strategic importance.
                  Sombor is a city that combines tradition, culture, and natural beauty,
                  offering its visitors a unique experience.
                </p>
              </section>

              <div className="displayFlex">
                <div>
                  <img srcSet={`${laza1} 450w, ${laza} `} alt="Laza Kostić" />
                  <p>Monument to Laza Kostić</p>
                </div>
                <div>
                  <img srcSet={`${jovan1} 450w, ${jovan} `} alt="Jovan Dučić" />
                  <p>Monument to Jovan Dučić</p>
                </div>
                <div>
                  <img srcSet={`${spomen19991} 450w, ${spomen1999} `} alt="Spomen 1999" />
                  <p>Monument to the victims of the 1999 NATO aggression</p>
                </div>
              </div>

              <img srcSet={`${sombor55} 450w, ${sombor5} `} alt="sombor 5" />

              <section lang="en">
                <p>
                  Sombor is a city that combines tradition, culture, and natural beauty,
                  offering its visitors a unique experience.
                </p>
              </section>

            </>
          )}


      </div>
    </>
  );
};


export default Sombor;