/* eslint-disable react/no-unknown-property */
/* eslint-disable no-useless-escape */
import smederevo1 from "../../../../../assets/images/JuznaIIstocnaSrbija/PodunavskiOkrug/Smederevo/desktop/smederevo1.jpg";
import smederevo2 from "../../../../../assets/images/JuznaIIstocnaSrbija/PodunavskiOkrug/Smederevo/desktop/smederevo2.jpg";
import smederevo3 from "../../../../../assets/images/JuznaIIstocnaSrbija/PodunavskiOkrug/Smederevo/desktop/smederevo3.jpg";
import smederevo4 from "../../../../../assets/images/JuznaIIstocnaSrbija/PodunavskiOkrug/Smederevo/desktop/smederevo4.jpg";
import smederevo5 from "../../../../../assets/images/JuznaIIstocnaSrbija/PodunavskiOkrug/Smederevo/desktop/smederevo5.jpg";
import smederevo6 from "../../../../../assets/images/JuznaIIstocnaSrbija/PodunavskiOkrug/Smederevo/desktop/smederevo6.jpg";
import smederevo7 from "../../../../../assets/images/JuznaIIstocnaSrbija/PodunavskiOkrug/Smederevo/desktop/smederevo7.jpg";
import smederevo8 from "../../../../../assets/images/JuznaIIstocnaSrbija/PodunavskiOkrug/Smederevo/desktop/smederevo8.jpg";
import smederevo11 from "../../../../../assets/images/JuznaIIstocnaSrbija/PodunavskiOkrug/Smederevo/mobile/smederevoM1.jpg";
import smederevo22 from "../../../../../assets/images/JuznaIIstocnaSrbija/PodunavskiOkrug/Smederevo/mobile/smederevoM2.jpg";
import smederevo33 from "../../../../../assets/images/JuznaIIstocnaSrbija/PodunavskiOkrug/Smederevo/mobile/smederevoM3.jpg";
import smederevo44 from "../../../../../assets/images/JuznaIIstocnaSrbija/PodunavskiOkrug/Smederevo/mobile/smederevoM4.jpg";
import smederevo55 from "../../../../../assets/images/JuznaIIstocnaSrbija/PodunavskiOkrug/Smederevo/mobile/smederevoM5.jpg";
import smederevo66 from "../../../../../assets/images/JuznaIIstocnaSrbija/PodunavskiOkrug/Smederevo/mobile/smederevoM6.jpg";
import smederevo77 from "../../../../../assets/images/JuznaIIstocnaSrbija/PodunavskiOkrug/Smederevo/mobile/smederevoM7.jpg";
import smederevo88 from "../../../../../assets/images/JuznaIIstocnaSrbija/PodunavskiOkrug/Smederevo/mobile/smederevoM8.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { podunavskiOkrugPathRoutes } from "./PodunavskiOkrugPathRouts";
import { useContextAuth } from "../../../../../Context";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const Smederevo = () => {
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

        <title>{switchLanguage === 'rs' ? "Smederevo – Istorija, Tvrđava i Kulturne Atrakcije | Serbia Wonders" : "Smederevo – History, Fortress, and Cultural Attractions | Serbia Wonders"}</title>
        <meta
          name="description"
          content={switchLanguage === 'rs' ?
            "Smederevo je istorijski grad na obalama Dunava, nekadašnja prestonica Srpske despotovine sa znamenitostima kao što su Smederevska tvrđava, Muzej i Karađorđev dud."
            :
            "Smederevo is a historic city on the Danube, former capital of the Serbian Despotate, known for landmarks such as the Smederevo Fortress, Museum, and Karađorđe's Mulberry Tree."
          }
        />
        <meta
          name="keywords"
          content={switchLanguage === 'rs' ?
            "Smederevo, Smederevska tvrđava, Srpska despotovina, Dunav, Muzej u Smederevu, Vila Zlatni Breg, Karađorđev dud, Izletište Jugovo, istorija Srbije"
            :
            "Smederevo, Smederevo Fortress, Serbian Despotate, Danube, Smederevo Museum, Vila Zlatni Breg, Karađorđe's Mulberry, Jugovo Recreation Area, Serbian history"
          }
        />
        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/podunavski-okrug/smederevo`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/podunavski-okrug/smederevo"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/podunavski-okrug/smederevo"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/podunavski-okrug/smederevo"
        />

      </Helmet>



      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft
          className="arrowLeft"
          onClick={() => navigate(podunavskiOkrugPathRoutes.home(switchLanguage))}
          style={{ fill: "white" }}
        />
        <header></header>
        <img srcSet={`${smederevo11} 450w, ${smederevo1} `} alt="Smederevo 1" loading="lazy" />

        <h1>Smederevo</h1>

        {switchLanguage === 'rs' ?
          (
            <>

              <section lang="sr">
                <p>
                  <strong>Smederevo</strong> je gradsko naselje i sedište istoimene teritorijalne jedinice u Srbiji. To je administrativni centar <em>Podunavskog upravnog okruga</em>. Nalazi se na obalama <em>Dunava</em>, u severoistočnom delu Srbije. Grad je postao prestonica <strong>Srpske despotovine</strong> 1430. godine izgradnjom <em>Smederevske tvrđave</em>, koju je podigao despot <strong>Đurađ Branković</strong>. Danas je Smederevo veliki industrijski centar.
                </p>
              </section>

              <img srcSet={`${smederevo22} 450w, ${smederevo2}`} alt="Smederevo 2" loading="lazy" />

              <section lang="sr">
                <p>
                  Smederevo ima <strong>više stepsku nego umereno-kontinentalnu klimu</strong>. Srednja godišnja temperatura je <strong>11,4 °C</strong>. Najhladniji mesec je januar sa prosekom od <em>-0,6 °C</em>, dok je jul najtopliji sa <em>21,9 °C</em>. Najviše padavina ima u maju i junu, a najmanje u februaru. Prosečna godišnja količina padavina je oko <strong>650 mm</strong>.
                </p>
              </section>

              <img srcSet={`${smederevo33} 450w, ${smederevo3}`} alt="Smederevo 3" loading="lazy" />

              <section lang="sr">
                <p>
                  Prvi pisani trag o Smederevu potiče iz <strong>1019. godine</strong> u povelji cara <em>Vasilija II</em>. Grad je stekao značaj u 14. veku tokom povlačenja srpske države pred turskim osvajanjima. Nakon što je Beograd vraćen Ugarskoj 1427. godine, despot <strong>Đurađ Branković</strong> gradi tvrđavu i premešta prestonicu u Smederevo.
                </p>
              </section>

              <img srcSet={`${smederevo44} 450w, ${smederevo4}`} alt="Smederevo 4" loading="lazy" />

              <section lang="sr">
                <p>
                  Od 1430. do 1459. godine Smederevo je bilo prestonica <strong>Srpske despotovine</strong>. Nakon pada pod Turke, grad postaje sedište <em>Smederevskog sanžaka</em>. Pod Austrijskom vlašću 1806. godine, otvara se prva osnovna škola, a osniva se i <strong>Praviteljstvujušči sovjet</strong> pod vođstvom <em>Dositeja Obradovića</em>.
                </p>
              </section>

              <img srcSet={`${smederevo55} 450w, ${smederevo5}`} alt="Muzej u Smederevu" loading="lazy" />

              <section lang="sr">
                <p>
                  <strong>Muzej u Smederevu</strong> je kompleksna muzejska ustanova sa zbirkama iz oblasti <em>arheologije, istorije, umetnosti, prirodnih nauka i etnologije</em>. Osim čuvanja kulturnog nasleđa, muzej organizuje brojne izložbe, promocije i edukativne aktivnosti.
                </p>
              </section>

              <img srcSet={`${smederevo66} 450w, ${smederevo6}`} alt="Vila Zlatni Breg" loading="lazy" />

              <section lang="sr">
                <p>
                  <strong>Vila Zlatni Breg</strong>, poznata i kao <em>Kraljev vinograd</em>, nalazi se u naselju <em>Plavinac</em> s pogledom na Dunav. Podignuta je po želji kneza <strong>Miloša Obrenovića</strong> 1836. godine. Ispred vile nalazi se kamen <em>biňektaš</em>, a vila je kasnije bila luksuzno letovalište kralja <strong>Milana Obrenovića</strong>.
                </p>
              </section>

              <img srcSet={`${smederevo77} 450w, ${smederevo7}`} alt="Karađorđev dud" loading="lazy" />

              <section lang="sr">
                <p>
                  <strong>Karađorđev dud</strong> je istorijski i prirodni spomenik u Smederevu. Tu je <strong>8. novembra 1805.</strong> godine <em>Karađorđe</em> primio ključeve Smederevske tvrđave od turskog zapovednika <em>Muharema Guše</em>. Predaja je izvršena sa počastima, a Turci su se povukli niz Dunav.
                </p>
              </section>

              <img srcSet={`${smederevo88} 450w, ${smederevo8}`} alt="Izletište Jugovo" loading="lazy" />

              <section lang="sr">
                <p>
                  <strong>Izletište Jugovo</strong> se nalazi na jugoistočnim padinama <em>Avale</em>. Poznato je po prirodnoj lepoti, zelenilu i svežem vazduhu. Pored šetnji i piknika, nudi i sadržaje poput <em>akva parka, sportskih terena</em> i ugostiteljskih objekata. Idealno je mesto za odmor i rekreaciju van gradske gužve.
                </p>
              </section>


            </>
          )
          :
          (
            <>

              <section lang="en"> <p> <strong>Smederevo</strong> is an urban settlement and the administrative center of the territorial unit of the same name in Serbia. It serves as the administrative hub of the <em>Podunavlje District</em>. The city lies on the banks of the <em>Danube River</em>, in the northeastern part of Serbia. Smederevo became the capital of the <strong>Serbian Despotate</strong> in 1430 with the construction of the <em>Smederevo Fortress</em>, built by Despot <strong>Đurađ Branković</strong>. Today, Smederevo is a major industrial center. </p> </section>
              <img srcSet={`${smederevo22} 450w, ${smederevo2}`} alt="Smederevo 2" loading="lazy" />

              <section lang="en"> <p> Smederevo has a <strong>more steppe-like than moderately continental climate</strong>. The average annual temperature is <strong>11.4 °C</strong>. The coldest month is January, with an average of <em>-0.6 °C</em>, while July is the warmest, averaging <em>21.9 °C</em>. The most precipitation falls in May and June, and the least in February. The average annual precipitation is around <strong>650 mm</strong>. </p> </section>
              <img srcSet={`${smederevo33} 450w, ${smederevo3}`} alt="Smederevo 3" loading="lazy" />

              <section lang="en"> <p> The first written record of Smederevo dates back to the year <strong>1019</strong>, in a charter issued by Emperor <em>Basil II</em>. The city gained importance in the 14th century during the retreat of the Serbian state in the face of Ottoman expansion. After Belgrade was returned to Hungary in 1427, Despot <strong>Đurađ Branković</strong> built the fortress and moved the capital to Smederevo. </p> </section>
              <img srcSet={`${smederevo44} 450w, ${smederevo4}`} alt="Smederevo 4" loading="lazy" />

              <section lang="en"> <p> From 1430 to 1459, Smederevo was the capital of the <strong>Serbian Despotate</strong>. After falling under Ottoman rule, the city became the seat of the <em>Sanjak of Smederevo</em>. Under Austrian rule in 1806, the first elementary school was opened, and the <strong>Governing Council (Praviteljstvujušči sovjet)</strong> was established, led by <em>Dositej Obradović</em>. </p> </section>
              <img srcSet={`${smederevo55} 450w, ${smederevo5}`} alt="Museum in Smederevo" loading="lazy" />

              <section lang="en"> <p> The <strong>Museum in Smederevo</strong> is a comprehensive museum institution with collections in the fields of <em>archaeology, history, art, natural sciences, and ethnology</em>. In addition to preserving cultural heritage, the museum hosts numerous exhibitions, promotions, and educational programs. </p> </section>
              <img srcSet={`${smederevo66} 450w, ${smederevo6}`} alt="Villa Zlatni Breg" loading="lazy" />

              <section lang="en"> <p> <strong>Villa Zlatni Breg</strong>, also known as the <em>Royal Vineyard</em>, is located in the <em>Plavinac</em> district, overlooking the Danube. It was built in 1836 at the request of Prince <strong>Miloš Obrenović</strong>. In front of the villa stands a stone marker known as a <em>binjektaš</em>, and the villa later became a luxurious summer residence of King <strong>Milan Obrenović</strong>. </p> </section>
              <img srcSet={`${smederevo77} 450w, ${smederevo7}`} alt="Karađorđe’s Mulberry Tree" loading="lazy" />

              <section lang="en"> <p> <strong>Karađorđe’s Mulberry Tree</strong> is a historical and natural monument in Smederevo. On <strong>November 8, 1805</strong>, <em>Karađorđe</em> received the keys to the Smederevo Fortress from the Ottoman commander <em>Muharem Guša</em> at this site. The surrender was carried out with honors, and the Turks withdrew down the Danube. </p> </section>
              <img srcSet={`${smederevo88} 450w, ${smederevo8}`} alt="Jugovo Picnic Area" loading="lazy" />

              <section lang="en"> <p> The <strong>Jugovo Picnic Area</strong> is located on the southeastern slopes of <em>Avala</em>. It is known for its natural beauty, greenery, and fresh air. In addition to walks and picnics, it offers amenities such as an <em>aquapark, sports fields</em>, and dining facilities. It is an ideal place for relaxation and recreation away from the city crowds. </p> </section>

            </>
          )}

      </div>
    </>
  );
};


export default Smederevo;