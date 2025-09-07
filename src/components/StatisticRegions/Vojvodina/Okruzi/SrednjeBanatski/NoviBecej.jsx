/* eslint-disable react/no-unknown-property */
import nbecej1 from "../../../../../assets/images/Vojvodina/SrednjeBanatskiOkrug/NoviBecej/desktop/novibecej2.jpg";
import nbecej2 from "../../../../../assets/images/Vojvodina/SrednjeBanatskiOkrug/NoviBecej/desktop/novibecej3.jpg";
import nbecej3 from "../../../../../assets/images/Vojvodina/SrednjeBanatskiOkrug/NoviBecej/desktop/novibecej4.jpg";
import nbecej4 from "../../../../../assets/images/Vojvodina/SrednjeBanatskiOkrug/NoviBecej/desktop/novibecej5.jpg";
import nbecej5 from "../../../../../assets/images/Vojvodina/SrednjeBanatskiOkrug/NoviBecej/desktop/novibecej6.jpg";
import nbecej11 from "../../../../../assets/images/Vojvodina/SrednjeBanatskiOkrug/NoviBecej/mobile/Mnovibecej2.jpg";
import nbecej22 from "../../../../../assets/images/Vojvodina/SrednjeBanatskiOkrug/NoviBecej/mobile/Mnovibecej3.jpg";
import nbecej33 from "../../../../../assets/images/Vojvodina/SrednjeBanatskiOkrug/NoviBecej/mobile/Mnovibecej4.jpg";
import nbecej44 from "../../../../../assets/images/Vojvodina/SrednjeBanatskiOkrug/NoviBecej/mobile/Mnovibecej5.jpg";
import nbecej55 from "../../../../../assets/images/Vojvodina/SrednjeBanatskiOkrug/NoviBecej/mobile/Mnovibecej6.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { srednjeBanatskiPathRoutes } from "./SrednjeBanatskiPathRoutes";
import { useContextAuth } from "../../../../../Context";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const NoviBecej = () => {
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
            ? 'Novi Bečej | Tamiš, istorija i priroda | Serbia Wonders'
            : 'Novi Bečej | Tamiš River, History and Nature | Serbia Wonders'}
        </title>

        <meta
          name="description"
          content={
            switchLanguage === 'rs'
              ? 'Novi Bečej je grad uz reku Tamiš sa bogatom istorijom, kulturnim nasleđem i prirodnim lepotama, idealan za rekreaciju, turizam i odmor.'
              : 'Novi Bečej is a town on the Tamiš River with rich history, cultural heritage, and natural beauty, ideal for recreation, tourism, and relaxation.'
          }
        />

        <meta
          name="keywords"
          content={
            switchLanguage === 'rs'
              ? 'Novi Bečej, Tamiš, Vojvodina, Biserno ostrvo, turizam, istorija, priroda, rekreacija, seoski turizam, kultura, crkva Svetog Đorđa, ekoturizam'
              : 'Novi Bečej, Tamiš, Vojvodina, Pearl Island, tourism, history, nature, recreation, rural tourism, culture, St. George church, ecotourism'
          }
        />

        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/srednje-banatski/novi-becej`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/srednje-banatski/novi-becej"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/srednje-banatski/novi-becej"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/srednje-banatski/novi-becej"
        />
      </Helmet>


      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft className="arrowLeft" onClick={() => navigate(srednjeBanatskiPathRoutes.home(switchLanguage))} />
        <header></header>
        <img srcSet={`${nbecej33} 450w, ${nbecej3} `} alt="Novi Bečej 1" />

        <h2>Novi Bečej</h2>

        {switchLanguage === 'rs' ?
          (
            <>
              <section lang="sr">
                <p>
                  Novi Bečej je grad i sedište opštine u Vojvodini, Srbija, smešten u severoistočnom delu pokrajine, u blizini granice sa Rumunijom.
                </p>
                <p>
                  Grad leži na reki <strong>Tamiš</strong>, koja je važan vodeni tok u ovom delu Srbije.
                </p>
              </section>

              <img srcSet={`${nbecej22} 450w, ${nbecej2} `} alt="Novi Bečej 2" />

              <section lang="sr">
                <p>
                  Grad je zvanično osnovan kao naselje u 18. veku, kada su prvi stanovnici naselili ovo područje.
                </p>
                <p>
                  Tokom 19. i 20. veka, Novi Bečej je doživeo značajan privredni razvoj, a posebno je bio poznat po poljoprivredi i stočarstvu.
                </p>
                <p>
                  Naziv mesta verovatno potiče od imena veleposedničke porodice <strong>Bechei (Wechey)</strong>, koja je ovde imala posede.
                </p>
                <p>
                  Prvi istorijski izvori koji pominju lokalitet s ovim imenom iz 11. veka odnose se na pristanište, verovatno skelu, koja je ovde postojala kontinuirano sve do kraja 20. veka.
                </p>
                <p>
                  Moguće je da ime ovog mesta potiče i od naziva <em>„Beč”</em>, što znači „zemljoposed”, ili da znači „utvrđenje na vodi”.
                </p>
              </section>

              <img srcSet={`${nbecej55} 450w, ${nbecej5} `} alt="Novi Bečej 3" />

              <section lang="sr">
                <p>
                  Novi Bečej je poznat po svojoj <strong>kulturnoj baštini</strong>. Grad se ponosi i očuvanim istorijskim spomenicima i tradicionalnim manifestacijama, kao i brojnim verskim objektima, kao što je <strong>crkva Sv. Đorđa</strong>, koja je deo lokalne istorijske baštine.
                </p>
                <p>
                  U poslednjim godinama, Novi Bečej se sve više razvija kao <strong>turistička destinacija</strong>, sa akcentom na <strong>prirodu</strong>, <strong>rekreaciju</strong> i <strong>seoski turizam</strong>.
                </p>
                <p>
                  Zbog svoje blizine velikim gradovima, kao što su <strong>Zrenjanin</strong> i <strong>Pančevo</strong>, kao i <strong>Rumuniji</strong>, grad privlači posetioce koji žele da uživaju u <em>mirnom okruženju</em> i <em>prirodnim lepotama</em>.
                </p>
              </section>

              <img srcSet={`${nbecej11} 450w, ${nbecej1} `} alt="Novi Bečej 4" />

              <section lang="sr">
                <p>
                  Privreda Novog Bečeja temelji se na <strong>poljoprivredi</strong>, ali u poslednje vreme raste i razvoj <strong>industrije</strong>.
                </p>
                <p>
                  Gradske vlasti ulažu u <strong>poboljšanje infrastrukture</strong>, što uključuje i povećanje kapaciteta za <strong>turizam</strong>, kao i razvoj <strong>preduzetništva</strong>.
                </p>
              </section>

              <img srcSet={`${nbecej44} 450w, ${nbecej4} `} alt="Novi Bečej 5" />

              <section lang="sr">
                <p>
                  <strong>Biserno ostrvo</strong> je smešteno u toku reke <strong>Tamiš</strong> i predstavlja jedno od omiljenih mesta za odmor i rekreaciju.
                </p>
                <p>
                  Ostrvo se odlikuje bogatstvom flore i faune, a često se koristi kao destinacija za ljubitelje prirode, ljubitelje ptica, kao i one koji uživaju u aktivnostima kao što su <strong>biciklizam</strong>, <strong>pešačenje</strong> i <strong>vožnja čamcem</strong>.
                </p>
                <p>
                  Biserno ostrvo, sa svojom <em>netaknutom prirodom</em>, ima ekološki značaj, jer pruža stanište za različite vrste biljaka i životinja.
                </p>
                <p>
                  Ova oblast je pod zaštitom, a to omogućava očuvanje <strong>biološke raznovrsnosti</strong>, te doprinosi očuvanju prirodnih resursa regiona.
                </p>
              </section>

            </>


          )
          :
          (
            <>
              <section lang="en">
                <p>
                  Novi Bečej is a town and municipality seat in Vojvodina, Serbia, located in the northeastern part of the province, near the border with Romania.
                </p>
                <p>
                  The town lies on the river <strong>Tamiš</strong>, which is an important waterway in this part of Serbia.
                </p>
              </section>

              <img srcSet={`${nbecej22} 450w, ${nbecej2} `} alt="Novi Bečej 2" />

              <section lang="en">
                <p>
                  The town was officially established as a settlement in the 18th century, when the first inhabitants settled in this area.
                </p>
                <p>
                  During the 19th and 20th centuries, Novi Bečej experienced significant economic development, especially known for agriculture and livestock breeding.
                </p>
                <p>
                  The name of the place probably originates from the name of the large landowning family <strong>Bechei (Wechey)</strong>, who owned estates here.
                </p>
                <p>
                  The earliest historical sources mentioning this locality by this name date back to the 11th century and refer to a pier, likely a ferry crossing, which existed continuously here until the end of the 20th century.
                </p>
                <p>
                  It is possible that the name of this place also comes from the term <em>"Beč"</em>, meaning "landowner," or it could mean "fortress on the water."
                </p>
              </section>

              <img srcSet={`${nbecej55} 450w, ${nbecej5} `} alt="Novi Bečej 3" />

              <section lang="en">
                <p>
                  Novi Bečej is known for its <strong>cultural heritage</strong>. The town takes pride in its preserved historical monuments and traditional events, as well as numerous religious sites, such as the <strong>St. George Church</strong>, which is part of the local historical heritage.
                </p>
                <p>
                  In recent years, Novi Bečej has increasingly developed as a <strong>tourist destination</strong>, focusing on <strong>nature</strong>, <strong>recreation</strong>, and <strong>rural tourism</strong>.
                </p>
                <p>
                  Due to its proximity to major cities such as <strong>Zrenjanin</strong> and <strong>Pančevo</strong>, as well as <strong>Romania</strong>, the town attracts visitors who want to enjoy a <em>peaceful environment</em> and <em>natural beauty</em>.
                </p>
              </section>

              <img srcSet={`${nbecej11} 450w, ${nbecej1} `} alt="Novi Bečej 4" />

              <section lang="en">
                <p>
                  The economy of Novi Bečej is based on <strong>agriculture</strong>, but recently there has been growth in the <strong>industrial sector</strong>.
                </p>
                <p>
                  The city authorities invest in <strong>infrastructure improvement</strong>, which includes increasing tourism capacity as well as developing <strong>entrepreneurship</strong>.
                </p>
              </section>

              <img srcSet={`${nbecej44} 450w, ${nbecej4} `} alt="Novi Bečej 5" />

              <section lang="en">
                <p>
                  <strong>Biserno Island</strong> is located on the river <strong>Tamiš</strong> and is one of the favorite spots for rest and recreation.
                </p>
                <p>
                  The island is characterized by its rich flora and fauna and is often used as a destination for nature lovers, bird watchers, and those who enjoy activities such as <strong>cycling</strong>, <strong>hiking</strong>, and <strong>boating</strong>.
                </p>
                <p>
                  Biserno Island, with its <em>untouched nature</em>, has ecological significance as it provides a habitat for various plant and animal species.
                </p>
                <p>
                  This area is protected, which allows the preservation of <strong>biological diversity</strong> and contributes to the conservation of the region’s natural resources.
                </p>
              </section>
            </>
          )}


      </div>
    </>
  );
};


export default NoviBecej;