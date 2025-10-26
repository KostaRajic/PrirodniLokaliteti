/* eslint-disable react/no-unknown-property */
import kopovo1 from "../../../../../assets/images/Vojvodina/SrednjeBanatskiOkrug/SlanoKopovo/desktop/kopovo3.jpg";
import kopovo2 from "../../../../../assets/images/Vojvodina/SrednjeBanatskiOkrug/SlanoKopovo/desktop/kopovo2.jpg";
import kopovo3 from "../../../../../assets/images/Vojvodina/SrednjeBanatskiOkrug/SlanoKopovo/desktop/kopovo4.jpg";
import kopovo4 from "../../../../../assets/images/Vojvodina/SrednjeBanatskiOkrug/SlanoKopovo/desktop/kopovo5.jpg";
import kopovo5 from "../../../../../assets/images/Vojvodina/SrednjeBanatskiOkrug/SlanoKopovo/desktop/kopovo6.jpg";
import kopovo11 from "../../../../../assets/images/Vojvodina/SrednjeBanatskiOkrug/SlanoKopovo/mobile/Mkopovo3.jpg";
import kopovo22 from "../../../../../assets/images/Vojvodina/SrednjeBanatskiOkrug/SlanoKopovo/mobile/Mkopovo2.jpg";
import kopovo33 from "../../../../../assets/images/Vojvodina/SrednjeBanatskiOkrug/SlanoKopovo/mobile/Mkopovo4.jpg";
import kopovo44 from "../../../../../assets/images/Vojvodina/SrednjeBanatskiOkrug/SlanoKopovo/mobile/Mkopovo5.jpg";
import kopovo55 from "../../../../../assets/images/Vojvodina/SrednjeBanatskiOkrug/SlanoKopovo/mobile/Mkopovo6.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { srednjeBanatskiPathRoutes } from "./SrednjeBanatskiPathRoutes";
import { useContextAuth } from "../../../../../Context";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const SlanoKopovo = () => {
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
            ? 'Specijalni rezervat Slano Kopovo | Slatine i ptice močvarice | Serbia Wonders'
            : 'Special Nature Reserve Slano Kopovo | Salt Flats and Wetland Birds | Serbia Wonders'}
        </title>

        <meta
          name="description"
          content={
            switchLanguage === 'rs'
              ? 'Slano Kopovo u Novom Bečeju je jedinstveni slatinski rezervat prirode, stanište stotina vrsta ptica, uključujući ugrožene vrste sa Crvene liste.'
              : 'Slano Kopovo in Novi Bečej is a unique saline nature reserve, home to hundreds of bird species including endangered ones from the Red List.'
          }
        />

        <meta
          name="keywords"
          content={
            switchLanguage === 'rs'
              ? 'Slano Kopovo, Novi Bečej, rezervat prirode, slatine, ptice selice, zaštićeno područje, ornitologija, Crvena lista, Poština kopovo, migracija ptica, močvare Srbije'
              : 'Slano Kopovo, Novi Bečej, nature reserve, salt flats, migratory birds, protected area, ornithology, Red List, Poština kopovo, bird migration, Serbia wetlands'
          }
        />

        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/srednje-banatski/slano-kopovo`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/srednje-banatski/slano-kopovo"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/srednje-banatski/slano-kopovo"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/srednje-banatski/slano-kopovo"
        />
      </Helmet>


      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft className="arrowLeft" onClick={() => navigate(srednjeBanatskiPathRoutes.home(switchLanguage))} />
        <header></header>
        <img srcSet={`${kopovo11} 450w, ${kopovo1} `} alt="Slano Kopovo 1" />

        {switchLanguage === 'rs' ?
          (
            <>
              <h1>
                Specijalni rezervat prirode "Slano Kopovo"
              </h1>

              <section lang="sr">
                <p>
                  Specijalni rezervat prirode <strong>“Slano Kopovo”</strong> u Novom Bečeju, uredbom Vlade Republike Srbije iz 2011. godine, proglašen je za prirodno dobro od izuzetnog značaja prve kategorije.
                </p>
                <p>
                  Spada među poslednje očuvane bare na slatinama u Srbiji.
                </p>
                <p>
                  Reka slana akvatorija koja je očuvana do danas u kompleksu vodoplavnih terena Potisja.
                </p>
              </section>

              <img srcSet={`${kopovo22} 450w, ${kopovo2} `} alt="Slano Kopovo 2" />

              <section lang="sr">
                <p>
                  Ovo panonsko stanište odlikuje se slanim, blatnjavim barama i u zavisnosti od klimatskih uslova postaje jezero.
                </p>
                <p>
                  U toku letnjih meseci kada se voda povuče, <strong>Slano kopovo</strong> biva pokriveno belom skramom od nekoliko centimetara.
                </p>
                <p>
                  Jezero se snabdeva vodom iz atmosferskih taloga, površinskim pritičanjem vode i podzemnim vodama.
                </p>
                <p>
                  Najveća dubina jezera je oko 20 centimetara.
                </p>
              </section>

              <img srcSet={`${kopovo33} 450w, ${kopovo3} `} alt="Slano Kopovo 3" />

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

              <img srcSet={`${kopovo44} 450w, ${kopovo4} `} alt="Slano Kopovo 4" />

              <section lang="sr">
                <p>
                  Usled isparavanja i povlačenja vode iz najnižih prizemnih oblasti, dolazi do nagomilavanja slojeva soli i do nekoliko centimetara.
                </p>
                <p>
                  Povećano zagrevanje vazduha iznad jezera i razlika u temperaturi sa okolnih polja dovodi do optičkih i meteoroloških pojava u vidu fatamorgana ili iznenadne pojave vetrova.
                </p>
                <p>
                  Nalazi se na prosečnoj nadmorskoj visini od 80m, a rezervat čine dva bazena: <strong>Slano kopovo</strong> i <strong>Poština kopovo</strong>.
                </p>
              </section>

              <img srcSet={`${kopovo55} 450w, ${kopovo5} `} alt="Slano Kopovo 5" />

              <section lang="sr">
                <p>
                  Rezervat predstavlja jedno od <strong>najvažnijih stanica ptica</strong> u Srbiji i Evropi.
                </p>
                <p>
                  Veliki broj vrsta ptica sa <strong>svetske crvene liste ugroženih ptica</strong>, gnezdi se upravo na ovom području.
                </p>
                <p>
                  Ovo mesto je i značajna <em>migratorna stanica</em> za više stotina hiljada ptica vodenih staništa.
                </p>
                <p>
                  Zabeleženo je prisustvo više od <strong>200 vrsta ptica</strong>, od čega je <strong>73 vrste</strong> zabeleženo na <em>gnežđenju</em>.
                </p>
              </section>


            </>
          )
          :
          (
            <>
              <h1>
                Special Nature Reserve "Slano Kopovo"
              </h1>

              <section lang="en">
                <p>
                  The Special Nature Reserve <strong>“Slano Kopovo”</strong> in Novi Bečej was declared a natural asset of exceptional importance, first category, by the Government of the Republic of Serbia in 2011.
                </p>
                <p>
                  It is one of the last preserved marshes in the salt meadows of Serbia.
                </p>
                <p>
                  The saline river aquatory, preserved to this day, is part of the floodplain complex of the Tisa River Basin.
                </p>
              </section>

              <img srcSet={`${kopovo22} 450w, ${kopovo2} `} alt="Slano Kopovo 2" />

              <section lang="en">
                <p>
                  This Pannonian habitat is characterized by salty, muddy marshes and depending on climatic conditions, it becomes a lake.
                </p>
                <p>
                  During the summer months when the water recedes, <strong>Slano Kopovo</strong> is covered with a white crust several centimeters thick.
                </p>
                <p>
                  The lake is supplied with water from atmospheric precipitation, surface runoff, and underground waters.
                </p>
                <p>
                  The greatest depth of the lake is about 20 centimeters.
                </p>
              </section>

              <img srcSet={`${kopovo33} 450w, ${kopovo3} `} alt="Slano Kopovo 3" />

              <section lang="en">
                <p>
                  Novi Bečej is known for its <strong>cultural heritage</strong>. The town takes pride in its preserved historical monuments and traditional events, as well as numerous religious buildings, such as the <strong>Church of St. George</strong>, which is part of the local historical heritage.
                </p>
                <p>
                  In recent years, Novi Bečej has increasingly developed as a <strong>tourist destination</strong>, with an emphasis on <strong>nature</strong>, <strong>recreation</strong>, and <strong>rural tourism</strong>.
                </p>
                <p>
                  Due to its proximity to larger cities like <strong>Zrenjanin</strong> and <strong>Pančevo</strong>, as well as <strong>Romania</strong>, the town attracts visitors seeking to enjoy a <em>peaceful environment</em> and <em>natural beauty</em>.
                </p>
              </section>

              <img srcSet={`${kopovo44} 450w, ${kopovo4} `} alt="Slano Kopovo 4" />

              <section lang="en">
                <p>
                  Due to evaporation and the retreat of water from the lowest ground areas, layers of salt accumulate up to several centimeters.
                </p>
                <p>
                  Increased heating of the air above the lake and temperature differences with surrounding fields lead to optical and meteorological phenomena such as mirages or sudden gusts of wind.
                </p>
                <p>
                  It is situated at an average altitude of 80 meters, and the reserve consists of two basins: <strong>Slano Kopovo</strong> and <strong>Poština Kopovo</strong>.
                </p>
              </section>

              <img srcSet={`${kopovo55} 450w, ${kopovo5} `} alt="Slano Kopovo 5" />

              <section lang="en">
                <p>
                  The reserve represents one of the <strong>most important bird stations</strong> in Serbia and Europe.
                </p>
                <p>
                  A large number of bird species from the <strong>world's red list of endangered birds</strong> breed in this area.
                </p>
                <p>
                  This place is also an important <em>migratory station</em> for hundreds of thousands of waterbird species.
                </p>
                <p>
                  The presence of over <strong>200 bird species</strong> has been recorded, of which <strong>73 species</strong> have been observed breeding.
                </p>
              </section>

            </>
          )}

      </div>
    </>
  );
};


export default SlanoKopovo;