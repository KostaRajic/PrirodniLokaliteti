/* eslint-disable react/no-unknown-property */
import sajkaska1 from "../../../../../assets/images/Vojvodina/JuznoBackiOkrug/SajkaskaOblast/desktop/srp koviljsko petrovaradinski rit.jpg";
import sajkaska2 from "../../../../../assets/images/Vojvodina/JuznoBackiOkrug/SajkaskaOblast/desktop/titelskiBreg.jpg";
import sajkaska3 from "../../../../../assets/images/Vojvodina/JuznoBackiOkrug/SajkaskaOblast/desktop/manastirSvetihArhangela.jpg";
import sajkaska4 from "../../../../../assets/images/Vojvodina/JuznoBackiOkrug/SajkaskaOblast/desktop/kapadokija.jpg";
import sajkaska5 from "../../../../../assets/images/Vojvodina/JuznoBackiOkrug/SajkaskaOblast/desktop/krcedinska ada.jpg";
import sajkaska11 from "../../../../../assets/images/Vojvodina/JuznoBackiOkrug/SajkaskaOblast/mobile/Msrp koviljsko petrovaradinski rit.jpg";
import sajkaska22 from "../../../../../assets/images/Vojvodina/JuznoBackiOkrug/SajkaskaOblast/mobile/MtitelskiBreg.jpg";
import sajkaska33 from "../../../../../assets/images/Vojvodina/JuznoBackiOkrug/SajkaskaOblast/mobile/MmanastirSvetihArhangela.jpg";
import sajkaska44 from "../../../../../assets/images/Vojvodina/JuznoBackiOkrug/SajkaskaOblast/mobile/Mkapadokija.jpg";
import sajkaska55 from "../../../../../assets/images/Vojvodina/JuznoBackiOkrug/SajkaskaOblast/mobile/Mkrcedinska ada.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { JuznoBackiPathRoutes } from "./JuznoBackiPathRoutes";
import { useContextAuth } from "../../../../../Context";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const SajkaskaOblast = () => {
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
            ? 'Šajkaška oblast | Prirodno i istorijsko blago Vojvodine'
            : 'Šajkaška Region | Natural and Historical Treasure of Vojvodina'}
        </title>

        <meta
          name="description"
          content={
            switchLanguage === 'rs'
              ? 'Šajkaška oblast je istorijski značajan region Vojvodine, poznat po Titelskom bregu, manastiru u Kovilju, Krčedinskoj adi i Specijalnom rezervatu prirode. Mesto susreta kulture, prirode i tradicije.'
              : 'The Šajkaška region is a historically significant area of Vojvodina, known for Titel Hill, Kovilj Monastery, Krčedin Island, and the Nature Reserve. A place where culture, nature, and tradition meet.'
          }
        />

        <meta
          name="keywords"
          content={
            switchLanguage === 'rs'
              ? 'Šajkaška, Titelski breg, Kovilj, manastir, Krčedinska ada, priroda, turizam, Vojvodina, Koviljsko-petrovaradinski rit, balon let, istorija, Srbija'
              : 'Šajkaška, Titel Hill, Kovilj Monastery, Krčedin Island, nature, tourism, Vojvodina, Kovilj-Petrovaradin Marsh, hot air balloon, history, Serbia'
          }
        />

        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/juzno-backi/sajkaska-oblast`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/juzno-backi/sajkaska-oblast"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/juzno-backi/sajkaska-oblast"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/juzno-backi/sajkaska-oblast"
        />
      </Helmet>

      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft className="arrowLeft" onClick={() => navigate(JuznoBackiPathRoutes.home(switchLanguage))} />
        <header></header>
        <img srcSet={`${sajkaska11} 450w, ${sajkaska1} `} alt="Šajkaška oblast" />

        {switchLanguage === 'rs' ?
          (
            <>
              <h2>Šajkaška oblast</h2>

              <section lang="sr">
                <p>
                  <strong>Šajkaška oblast</strong> je bila i <em>srce stvaranja Srpske Vojvodine</em>. U toku <strong>revolucije 1848. godine</strong>, Šajkaška je bila <em>ključ organizovanja srpske odbrane</em> od <strong>mađarskih napada</strong> — i to ne samo zbog generacija Srba koje su <em>stasavale za vojnički poziv</em> u tim krajevima, već i zbog njihovog <em>specifičnog vojnog umeća</em> i <strong>izuzetnog geografskog položaja</strong>.
                </p>
                <p>
                  Jedan od brojnih lokaliteta u ovoj oblasti je <strong>Specijalni Rezervat Prirode "Koviljsko - petrovaradanski rit"</strong>, koji je lociran u neposrednoj blizini <strong>autoputa E75</strong>, u <em>jugoistočnom delu Bačke</em> i manjim delom u <em>Sremu</em>.
                  <em>Barsko-močvarni</em> i <em>šumski ekosistemi</em> ovog rezervata posebno su značajni zbog velikog broja <strong>ptica</strong>, među kojima se ističu <strong>crna roda</strong> i <strong>orao belorepan</strong> — obe vrste sa <em>statusom prirodne retkosti</em>.
                </p>
                <p>
                  Okolina rezervata je čuvena po <em>velikom broju parova roda</em> koji se <strong>vraćaju svakog proleća</strong> u sve većem broju, što dodatno doprinosi <em>ekološkom značaju</em> i <em>prirodnom bogatstvu Šajkaške</em>.
                </p>
              </section>
              <img srcSet={`${sajkaska22} 450w, ${sajkaska2} `} alt="Titelski Breg" />

              <section lang="sr">
                <p>
                  <strong>Titelski breg</strong> je <em>lesna zaravan</em> i <em>breg</em> u pokrajini <strong>Vojvodina</strong>, na severu <strong>Srbije</strong>. Nalazi se u <em>jugoistočnoj Bačkoj</em> (u regiji <strong>Šajkaška</strong>), između gradića <strong>Titela</strong> na jugu, sela <strong>Lok</strong>, <strong>Vilovo</strong> i <strong>Šajkaš</strong> na jugozapadu, sela <strong>Mošorin</strong> na severu i reke <strong>Tisa</strong> na istoku.
                </p>
                <p>
                  <strong>Nadmorska visina</strong> Titelskog brega iznosi <strong>128 metara</strong>, a pruža se u pravcu <em>severozapad–jugoistok</em>. Geomorfološki gledano, Titelski breg je <em>lesna zaravan</em> nastala <strong>navejavanjem lesa</strong> tokom <em>pleistocena</em>. Dug je <strong>18 kilometara</strong>, a širok oko <strong>7,5 kilometara</strong>.
                </p>
                <p>
                  Naginut je ka <em>jugoistoku</em>, a iznad <strong>Tise</strong> se uzdiže <strong>strmi odsek visine 60 metara</strong>. U njemu se zapaža <strong>šest smeđih zona</strong>, što ukazuje na to da je zaravan formirana u <em>šest etapa</em>.
                </p>
                <p>
                  Breg predstavlja <em>interesantnu geomorfološku formu</em>, jer je to <strong>jedino prirodno uzvišenje u Bačkoj</strong>, pokrajini koja je u većini <em>ravničarska</em>.
                </p>
              </section>
              <img srcSet={`${sajkaska33} 450w, ${sajkaska3} `} alt="Manastir Svetih Arhangela" />


              <section lang="sr">
                <p>
                  <strong>Manastir Svetog Arhangela Mihaila u Kovilju</strong> je jedan od <em>najstarijih</em> i <em>najznačajnijih manastira</em> u <strong>Srbiji</strong>. Nalazi se u blizini <strong>Novog Sada</strong>, u selu <strong>Kovilj</strong>, na <em>levoj obali reke Dunav</em>, i pripada <strong>Eparhiji bačkoj</strong> <em>Srpske pravoslavne crkve</em>.
                </p>
                <p>
                  Tačnih podataka o <em>osnivanju manastira</em> nema, ali neki izvori navode da je osnovan u <strong>14. veku</strong>, za vreme <em>vladavine kralja Stefana Dušana</em>. Podignut je u čast <strong>Svetih Arhanđela Mihaila i Gavrila</strong>, koji se <em>slave 26. jula</em>.
                </p>
                <p>
                  Danas, <strong>manastir u Kovilju</strong> je <em>aktivan manastir</em>, u kojem se i dalje živi <em>monaškim životom</em>. Manastir posećuju i <strong>turisti</strong> i <strong>vernici</strong>, koji dolaze da se <em>pomole</em> i učestvuju u <em>bogosluženjima</em>.
                </p>
              </section>

              <img srcSet={`${sajkaska44} 450w, ${sajkaska4} `} alt="Srpska kapadokija" />

              <section lang="sr">
                <p>
                  Dobrodošli u <strong>„Srpsku Kapadokiju“</strong>, novu <em>turističku atrakciju</em> u Srbiji, koja donosi duh <em>egzotike</em> u naše krajeve. Zamislite trenutak kada se uzdižete, osećaj <em>slobode</em> dok lagano prelazite preko <strong>ritova</strong>, <strong>reke</strong>, <strong>rukavaca</strong> i <strong>polja</strong> dok sunčevi zraci obasjavaju ovaj prelepi pejzaž ispod vas.
                </p>
                <p>
                  <em>Letenje balonom</em> nije samo putovanje, to je <em>jedinstveni doživljaj</em> koji omogućava da svet posmatrate iz sasvim nove perspektive i koji će zauvek ostati u vašem sećanju.
                </p>
                <p>
                  Postanite deo ove <em>jedinstvene avanture</em> i doživite <strong>letenje balonom</strong> iznad prelepe <strong>Krčedinske ade</strong>.
                </p>
              </section>

              <img
                srcSet={`${sajkaska55} 450w, ${sajkaska5} `}
                alt="Krcedinska Ada"
              />

              <section lang="sr">
                <p>
                  <strong>Krčedinska ada</strong> je prirodno rečno ostrvo, nastalo na prostoru takozvanog <strong>koviľsko-petrovaradinskog rita</strong>, netaknute prirode pod zaštitom države Srbije. Nalazi se u <strong>rukavcu</strong> koji se proteže preko puta <strong>Krčedina</strong>, u dunavskom toku. Po svojoj površini spada u grupu <em>najvećih Dunavskih ada</em>.
                </p>
                <p>
                  <strong>Krčedinska ada</strong> je svojvrstan <em>raj za domaće životinje</em>. Na tom ostrvu usred Dunava slobodno živi i kreće se na stotine <em>domaćih životinja</em>. Ljudi brinu o njima, svakodnevno ih obilaze i donose zalihe hrane.
                </p>
              </section>

            </>
          )
          :
          (

            <>
              <h2>The Šajkaška Area</h2>

              <section lang="en">
                <p>
                  <strong>The Šajkaška region</strong> was also the <em>heart of the creation of Serbian Vojvodina</em>. During the <strong>1848 revolution</strong>, Šajkaška was the <em>key organizer of the Serbian defense</em> against <strong>Hungarian attacks</strong> — not only because of generations of Serbs who <em>grew up for military service</em> in these parts, but also due to their <em>specific military skills</em> and <strong>exceptional geographic position</strong>.
                </p>
                <p>
                  One of the many locations in this region is the <strong>Special Nature Reserve "Koviljsko - Petrovaradin Rit"</strong>, located near the <strong>E75 highway</strong>, in the <em>southeastern part of Bačka</em> and partly in <em>Srem</em>.
                  The <em>marsh and forest ecosystems</em> of this reserve are especially important due to the large number of <strong>birds</strong>, among which the <strong>black stork</strong> and <strong>white-tailed eagle</strong> stand out — both species with <em>the status of natural rarity</em>.
                </p>
                <p>
                  The surroundings of the reserve are famous for the <em>large number of stork pairs</em> that <strong>return every spring</strong> in growing numbers, which further contributes to the <em>ecological significance</em> and <em>natural richness of Šajkaška</em>.
                </p>
              </section>
              <img srcSet={`${sajkaska22} 450w, ${sajkaska2} `} alt="Titelski Breg" />

              <section lang="en">
                <p>
                  <strong>Titelski breg</strong> is a <em>loess plateau</em> and <em>hill</em> in the province of <strong>Vojvodina</strong>, in northern <strong>Serbia</strong>. It is located in <em>southeastern Bačka</em> (in the <strong>Šajkaška region</strong>), between the town of <strong>Titel</strong> to the south, the villages of <strong>Lok</strong>, <strong>Vilovo</strong>, and <strong>Šajkaš</strong> to the southwest, the village of <strong>Mošorin</strong> to the north, and the river <strong>Tisa</strong> to the east.
                </p>
                <p>
                  The <strong>altitude</strong> of Titelski breg is <strong>128 meters</strong>, and it stretches in the <em>northwest–southeast</em> direction. Geomorphologically, Titelski breg is a <em>loess plateau</em> formed by <strong>loess deposition</strong> during the <em>Pleistocene</em>. It is <strong>18 kilometers long</strong> and about <strong>7.5 kilometers wide</strong>.
                </p>
                <p>
                  It is slanted toward the <em>southeast</em>, and above the <strong>Tisa</strong> river rises a <strong>steep 60-meter section</strong>. Six <strong>brown zones</strong> can be observed within it, indicating that the plateau formed in <em>six stages</em>.
                </p>
                <p>
                  The hill represents an <em>interesting geomorphological feature</em>, as it is the <strong>only natural elevation in Bačka</strong>, a province that is mostly <em>flatland</em>.
                </p>
              </section>
              <img srcSet={`${sajkaska33} 450w, ${sajkaska3} `} alt="Manastir Svetih Arhangela" />

              <section lang="en">
                <p>
                  <strong>The Monastery of Saint Archangel Michael in Kovilj</strong> is one of the <em>oldest</em> and <em>most significant monasteries</em> in <strong>Serbia</strong>. It is located near <strong>Novi Sad</strong>, in the village of <strong>Kovilj</strong>, on the <em>left bank of the Danube River</em>, and belongs to the <strong>Bačka Eparchy</strong> of the <em>Serbian Orthodox Church</em>.
                </p>
                <p>
                  There are no exact records about the <em>founding of the monastery</em>, but some sources claim it was established in the <strong>14th century</strong> during the <em>reign of King Stefan Dušan</em>. It was built in honor of the <strong>Holy Archangels Michael and Gabriel</strong>, celebrated on <em>July 26</em>.
                </p>
                <p>
                  Today, the <strong>Kovilj monastery</strong> is an <em>active monastery</em> where monastic life continues. The monastery is visited by both <strong>tourists</strong> and <strong>worshippers</strong>, who come to <em>pray</em> and participate in <em>services</em>.
                </p>
              </section>
              <img srcSet={`${sajkaska44} 450w, ${sajkaska4} `} alt="Serbian Cappadocia" />

              <section lang="en">
                <p>
                  Welcome to <strong>"Serbian Cappadocia"</strong>, a new <em>tourist attraction</em> in Serbia that brings a spirit of <em>exoticism</em> to our region. Imagine the moment when you rise, feeling <em>freedom</em> as you gently glide over <strong>marshes</strong>, <strong>rivers</strong>, <strong>channels</strong>, and <strong>fields</strong> while the sun’s rays illuminate the beautiful landscape below you.
                </p>
                <p>
                  <em>Hot air ballooning</em> is not just a journey, but a <em>unique experience</em> that allows you to see the world from a completely new perspective and will forever remain in your memory.
                </p>
                <p>
                  Become part of this <em>unique adventure</em> and experience <strong>hot air ballooning</strong> over the beautiful <strong>Krčedinska Ada</strong>.
                </p>
              </section>

              <img
                srcSet={`${sajkaska55} 450w, ${sajkaska5} `}
                alt="Krcedinska Ada"
              />


              <section lang="en">
                <p>
                  <strong>Krčedinska Ada</strong> is a natural river island, formed in the area of the so-called <strong>Koviljsko-Petrovaradin Rit</strong>, a pristine nature reserve protected by the Serbian government. It is located in a <strong>river arm</strong> stretching across from <strong>Krčedin</strong>, within the Danube river flow. In terms of size, it is among the <em>largest Danube islands</em>.
                </p>
                <p>
                  <strong>Krčedinska Ada</strong> is a unique <em>paradise for domestic animals</em>. Hundreds of <em>domestic animals</em> freely live and roam on this island in the middle of the Danube. People take care of them, visiting daily and bringing food supplies.
                </p>
              </section>


            </>


          )
        }

      </div >
    </>
  );
};


export default SajkaskaOblast;