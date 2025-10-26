/* eslint-disable react/no-unknown-property */
/* eslint-disable no-useless-escape */
import rtanj1 from "../../../../../assets/images/JuznaIIstocnaSrbija/ZajecarskiOkrug/Rtanj/desktop/planinaRtanj1.jpg";
import rtanj2 from "../../../../../assets/images/JuznaIIstocnaSrbija/ZajecarskiOkrug/Rtanj/desktop/planinaRtanj2.jpg";
import rtanj3 from "../../../../../assets/images/JuznaIIstocnaSrbija/ZajecarskiOkrug/Rtanj/desktop/planinaRtanj3.jpg";
import rtanj4 from "../../../../../assets/images/JuznaIIstocnaSrbija/ZajecarskiOkrug/Rtanj/desktop/planinaRtanj4.jpg";
import rtanj5 from "../../../../../assets/images/JuznaIIstocnaSrbija/ZajecarskiOkrug/Rtanj/desktop/planinaRtanj5.jpg";
import rtanj6 from "../../../../../assets/images/JuznaIIstocnaSrbija/ZajecarskiOkrug/Rtanj/desktop/planinaRtanj6.jpg";
import rtanj11 from "../../../../../assets/images/JuznaIIstocnaSrbija/ZajecarskiOkrug/Rtanj/mobile/planinaRtanjM1.jpg";
import rtanj22 from "../../../../../assets/images/JuznaIIstocnaSrbija/ZajecarskiOkrug/Rtanj/mobile/planinaRtanjM2.jpg";
import rtanj33 from "../../../../../assets/images/JuznaIIstocnaSrbija/ZajecarskiOkrug/Rtanj/mobile/planinaRtanjM3.jpg";
import rtanj44 from "../../../../../assets/images/JuznaIIstocnaSrbija/ZajecarskiOkrug/Rtanj/mobile/planinaRtanjM4.jpg";
import rtanj55 from "../../../../../assets/images/JuznaIIstocnaSrbija/ZajecarskiOkrug/Rtanj/mobile/planinaRtanjM5.jpg";
import rtanj66 from "../../../../../assets/images/JuznaIIstocnaSrbija/ZajecarskiOkrug/Rtanj/mobile/planinaRtanjM6.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { zajecarskiOkrugPathRoutes } from "./ZajecarskiOkrugPathRoutes";
import { useContextAuth } from "../../../../../Context";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const PlaninaRtanj = () => {
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

        <title>{switchLanguage === 'rs' ? "Rtanj – Serbia’s Mysterious Pyramid | Serbia Wonders" : "Rtanj – Serbia’s Mysterious Pyramid | Serbia Wonders"}</title>
        <meta
          name="description"
          content={switchLanguage === 'rs' ?
            "Planina Rtanj, poznata kao srpska piramida, smeštena je u Istočnoj Srbiji, sa bogatom florom i faunom, speleološkim nalazištima i zanimljivom istorijom rudnika."
            :
            "Rtanj Mountain, known as the Serbian pyramid, is located in Eastern Serbia, boasting rich flora and fauna, caves, mining history, and unique natural features."
          }
        />
        <meta
          name="keywords"
          content={switchLanguage === 'rs' ?
            "Planina Rtanj, Rtanj, srpska piramida, Boljevac, Zaječarski okrug, flora i fauna, speleologija, rudnik, Greta Minh, priroda Srbije"
            :
            "Rtanj Mountain, Rtanj, Serbian pyramid, Boljevac, Zajecar district, flora and fauna, speleology, mining, Greta Minh, nature of Serbia"
          }
        />
        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/zajecarski-okrug/planina-rtanj`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/zajecarski-okrug/planina-rtanj"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/zajecarski-okrug/planina-rtanj"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/zajecarski-okrug/planina-rtanj"
        />

      </Helmet>


      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft className="arrowLeft" onClick={() => navigate(zajecarskiOkrugPathRoutes.home(switchLanguage))} />
        <header></header>
        <img srcSet={`${rtanj22} 450w, ${rtanj2} `} alt="Planina Rtanj 1" loading="lazy" />

        {switchLanguage === 'rs' ?
          (
            <>

              <h1>Planina Rtanj</h1>

              <section lang="sr">
                <p>
                  <strong>Istočna Srbija</strong> je poznata po bogatstvu prirodnih lepota, a među njima se ističe i planina <strong>Rtanj</strong>, često nazivana <em>„srpskom piramidom“</em>. Rtanj se uzdiže u blizini <strong>Boljevca</strong>, unutar <strong>Zaječarskog okruga</strong>, dostižući svoj najviši vrh, <strong>Šiljak</strong>, na <strong>1565 metara</strong> nadmorske visine. Njegov karakterističan oblik, široka i masivna baza koja se postepeno sužava u gotovo savršenu kupu, podstakao je mnoga verovanja da je Rtanj zapravo drevna piramida, što ga čini jednim od najzanimljivijih prirodnih fenomena u Srbiji.
                </p>
              </section>

              <img srcSet={`${rtanj11} 450w, ${rtanj1}`} alt="Planina Rtanj 2" loading="lazy" />

              <section lang="sr">
                <p>
                  Južna strana Rtnja odlikuje se blagim padinama i visoravni koja se postepeno spušta prema <strong>Sokobanji</strong>. Nasuprot tome, severni deo planine obiluje gustim šumama i prostranim pašnjacima, a takođe je bogat izvorima pitke vode. Zbog tih prirodnih karakteristika, upravo ovaj deo planine bio je najpogodniji za <strong>lovište</strong>, koje se prostire na oko <strong>6368 hektara</strong>. Na severnoj strani Rtnja nalazi se i oštar greben, dok se njegov najviši vrh, <strong>Šiljak</strong>, uzdiže na istočnom obodu grebena.
                </p>
              </section>

              <img srcSet={`${rtanj33} 450w, ${rtanj3}`} alt="Planina Rtanj 3" loading="lazy" />

              <section lang="sr">
                <p>
                  Istorija planine <strong>Rtanj</strong> usko je povezana sa bogatom jevrejskom porodicom <strong>Minh</strong>, koja je na ovoj planini posedovala rudnik kamenog uglja. Brinući o svojim radnicima, porodica je obezbedila stanove, otvorila škole, ambulantu, prvi bioskop i električnu centralu. Nakon što je <strong>Julius Minh</strong>, iz nepoznatih razloga, izvršio samoubistvo, vođenje rudnika preuzeli su njegova braća i supruga <strong>Greta</strong>.
                  <br /><br />
                  U znak sećanja na supruga, <strong>Greta Minh</strong> je podigla malu crkvu-kapelu na vrhu Rtnja, koju je gradilo hiljadu radnika. Kapela je osvećena <strong>1936. godine</strong>, ali je, nažalost, <strong>1992. godine</strong> srušena u potrazi za navodno sakrivenim blagom. Danas su od nje ostali samo tragovi.
                </p>
              </section>

              <img srcSet={`${rtanj44} 450w, ${rtanj4}`} alt="Planina Rtanj 4" loading="lazy" />

              <section lang="sr">
                <p>
                  Istraživanja su pokazala da se unutar planine <strong>Rtanj</strong> nalaze prostrane unutrašnje dvorane, dok su speleolozi do sada otkrili čak <strong>17 pećina</strong>. Nedaleko od samog vrha <strong>Šiljak</strong>, na udaljenosti od oko <strong>30 metara</strong>, smeštena je <em>„Jama na Šiljku“</em>. Ova jama proteže se u dužini od <strong>7 kilometara</strong>, dok je njena prvobitna dubina iznosila <strong>9 metara</strong>. Međutim, zbog bezbednosti speleologa, izvađeno je nekoliko kubika stena i zemlje, čime je njena dubina povećana na <strong>13 metara</strong>.
                </p>
              </section>

              <img srcSet={`${rtanj55} 450w, ${rtanj5}`} alt="Planina Rtanj 5" loading="lazy" />

              <section lang="sr">
                <p>
                  Rtanj se odlikuje tipičnom planinskom klimom, s toplim letima i zimama bogatim padavinama. Prosečna godišnja temperatura iznosi oko <strong>10 stepeni</strong>, što stvara povoljne uslove za razvoj biljnog sveta.
                  <br /><br />
                  Floru ove planine čine šume planinske bukve, hrasta i smrče, koja je ovde dospela zahvaljujući pošumljavanju. Pored toga, prisutna je i žbunasta vegetacija, kao i velike količine <em>„Rtanjskog čaja“</em>, endemične i lekovite biljke, čiji naziv ukazuje na njenu povezanost s ovom planinom.
                  <br /><br />
                  Rtanj je dom i brojnim reliktnim biljkama, među kojima se ističu <strong>jorgovan</strong>, <strong>orah</strong>, <strong>bela srebrna lipa</strong>, <strong>crni jasen</strong> i <strong>ruj</strong>. Takođe, značajno mesto u biljnom svetu Rtnja zauzima i <strong>srpska ramonda</strong>.
                </p>
              </section>

              <img srcSet={`${rtanj66} 450w, ${rtanj6}`} alt="Planina Rtanj 6" loading="lazy" />

              <section lang="sr">
                <p>
                  Fauna planine <strong>Rtanj</strong> izuzetno je raznolika i obuhvata sisare, gmizavce, vodozemce, ptice i ribe.
                  <br /><br />
                  Vodeni ekosistem Rtnja nastanjuju vrste poput <strong>potočne pastrmke</strong>, <strong>potočne mrene</strong> i <strong>krkuše</strong>, dok su u <strong>Vrmdžanskom jezeru</strong> otkrivene potpuno izolovane riblje populacije.
                  <br /><br />
                  Što se tiče ptica, do sada je na Rtnju zabeleženo <strong>89 vrsta</strong>. Gotovo polovina njih je zaštićena prema <em>Uredbi o zaštiti prirodnih retkosti</em>, dok ostatak čine ptice gnezdarice. Među značajnijim vrstama nalaze se <strong>sivi soko</strong>, <strong>suri orao</strong>, <strong>ušata i poljska ševa</strong>, <strong>prepelica</strong>, <strong>obična grmuša</strong>, <strong>rusi svračak</strong>, <strong>jelova senica</strong>, <strong>crna žuna</strong>, <strong>šumska sova</strong>, <strong>veliki detlić</strong>, <strong>plava i velika senica</strong>, kao i mnoge druge.
                </p>
              </section>


            </>
          )
          :
          (
            <>

              <h1>Rtanj Mountain</h1>

              <section lang="en"> <p> <strong>Eastern Serbia</strong> is known for its wealth of natural beauties, among which stands the mountain <strong>Rtanj</strong>, often called the <em>“Serbian pyramid”</em>. Rtanj rises near the town of <strong>Boljevac</strong>, within the <strong>Zaječar District</strong>, reaching its highest peak, <strong>Šiljak</strong>, at an altitude of <strong>1565 meters</strong> above sea level. Its characteristic shape, a wide and massive base gradually narrowing into an almost perfect cone, has inspired many beliefs that Rtanj is actually an ancient pyramid, making it one of the most interesting natural phenomena in Serbia. </p> </section>
              <img srcSet={`${rtanj11} 450w, ${rtanj1}`} alt="Mountain Rtanj 2" loading="lazy" />

              <section lang="en"> <p> The southern side of Rtanj features gentle slopes and a plateau that gradually descends towards <strong>Sokobanja</strong>. In contrast, the northern part of the mountain is abundant with dense forests and vast pastures, and is also rich in sources of drinking water. Due to these natural characteristics, this part of the mountain was most suitable for the <strong>hunting grounds</strong>, which cover approximately <strong>6368 hectares</strong>. On the northern side of Rtanj, there is also a sharp ridge, while its highest peak, <strong>Šiljak</strong>, rises on the eastern edge of the ridge. </p> </section>
              <img srcSet={`${rtanj33} 450w, ${rtanj3}`} alt="Mountain Rtanj 3" loading="lazy" />

              <section lang="en"> <p> The history of the mountain <strong>Rtanj</strong> is closely linked to the wealthy Jewish family <strong>Minh</strong>, who owned a coal mine on this mountain. Caring for their workers, the family provided housing, opened schools, a clinic, the first cinema, and an electric power plant. After <strong>Julius Minh</strong> committed suicide for unknown reasons, the management of the mine was taken over by his brothers and wife, <strong>Greta</strong>. <br /><br /> In memory of her husband, <strong>Greta Minh</strong> built a small church-chapel on the top of Rtanj, constructed by a thousand workers. The chapel was consecrated in <strong>1936</strong>, but unfortunately, it was destroyed in <strong>1992</strong> during a search for supposedly hidden treasure. Today, only traces of it remain. </p> </section>
              <img srcSet={`${rtanj44} 450w, ${rtanj4}`} alt="Mountain Rtanj 4" loading="lazy" />

              <section lang="en"> <p> Research has shown that inside the mountain <strong>Rtanj</strong> there are spacious internal chambers, while speleologists have so far discovered as many as <strong>17 caves</strong>. Not far from the very peak <strong>Šiljak</strong>, at a distance of about <strong>30 meters</strong>, lies the <em>“Pit on Šiljak”</em>. This pit extends for <strong>7 kilometers</strong>, while its original depth was <strong>9 meters</strong>. However, for the safety of speleologists, several cubic meters of rock and earth were removed, increasing its depth to <strong>13 meters</strong>. </p> </section>
              <img srcSet={`${rtanj55} 450w, ${rtanj5}`} alt="Mountain Rtanj 5" loading="lazy" />

              <section lang="en"> <p> Rtanj features a typical mountain climate, with warm summers and winters rich in precipitation. The average annual temperature is around <strong>10 degrees Celsius</strong>, creating favorable conditions for the development of plant life. <br /><br /> The flora of this mountain includes forests of mountain beech, oak, and spruce, which was introduced here through reforestation. In addition, there is shrub vegetation as well as large quantities of <em>“Rtanj tea”</em>, an endemic and medicinal plant whose name reflects its connection to this mountain. <br /><br /> Rtanj is also home to many relict plants, including <strong>lilac</strong>, <strong>walnut</strong>, <strong>white silver linden</strong>, <strong>black ash</strong>, and <strong>sumac</strong>. A significant place in Rtanj’s plant world is also occupied by the <strong>Serbian ramonda</strong>. </p> </section>
              <img srcSet={`${rtanj66} 450w, ${rtanj6}`} alt="Mountain Rtanj 6" loading="lazy" />

              <section lang="en"> <p> The fauna of the mountain <strong>Rtanj</strong> is extremely diverse and includes mammals, reptiles, amphibians, birds, and fish. <br /><br /> The aquatic ecosystem of Rtanj is inhabited by species such as <strong>brown trout</strong>, <strong>grayling</strong>, and <strong>barbel</strong>, while completely isolated fish populations have been discovered in <strong>Vrmdžan Lake</strong>. <br /><br /> Regarding birds, <strong>89 species</strong> have been recorded on Rtanj so far. Nearly half of them are protected under the <em>Regulation on the Protection of Natural Rarities</em>, while the rest are breeding birds. Among the more significant species are the <strong>goshawk</strong>, <strong>rough-legged buzzard</strong>, <strong>long-eared owl</strong> and <strong>red-backed shrike</strong>, <strong>quail</strong>, <strong>common whitethroat</strong>, <strong>red-backed shrike</strong>, <strong>coal tit</strong>, <strong>blackcap</strong>, <strong>tawny owl</strong>, <strong>great spotted woodpecker</strong>, <strong>blue tit</strong>, <strong>great tit</strong>, and many others. </p> </section>

            </>
          )}

      </div>
    </>
  );
};


export default PlaninaRtanj;