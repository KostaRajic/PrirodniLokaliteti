/* eslint-disable react/no-unknown-property */
/* eslint-disable no-useless-escape */
import jastrebac1 from "../../../../../assets/images/JuznaIIstocnaSrbija/ToplickiOkrug/PlaninaJastrebac/desktop/jastrebac1.jpg";
import jastrebac2 from "../../../../../assets/images/JuznaIIstocnaSrbija/ToplickiOkrug/PlaninaJastrebac/desktop/jastrebac2.jpg";
import jastrebac3 from "../../../../../assets/images/JuznaIIstocnaSrbija/ToplickiOkrug/PlaninaJastrebac/desktop/jastrebac3.jpg";
import jastrebac4 from "../../../../../assets/images/JuznaIIstocnaSrbija/ToplickiOkrug/PlaninaJastrebac/desktop/jastrebac4.jpg";
import jastrebac5 from "../../../../../assets/images/JuznaIIstocnaSrbija/ToplickiOkrug/PlaninaJastrebac/desktop/jastrebac5.jpg";
import jastrebac6 from "../../../../../assets/images/JuznaIIstocnaSrbija/ToplickiOkrug/PlaninaJastrebac/desktop/jastrebac6.jpg";
import jastrebac7 from "../../../../../assets/images/JuznaIIstocnaSrbija/ToplickiOkrug/PlaninaJastrebac/desktop/jastrebac7.jpg";
import jastrebac11 from "../../../../../assets/images/JuznaIIstocnaSrbija/ToplickiOkrug/PlaninaJastrebac/mobile/jastrebacM1.jpg";
import jastrebac22 from "../../../../../assets/images/JuznaIIstocnaSrbija/ToplickiOkrug/PlaninaJastrebac/mobile/jastrebacM2.jpg";
import jastrebac33 from "../../../../../assets/images/JuznaIIstocnaSrbija/ToplickiOkrug/PlaninaJastrebac/mobile/jastrebacM3.jpg";
import jastrebac44 from "../../../../../assets/images/JuznaIIstocnaSrbija/ToplickiOkrug/PlaninaJastrebac/mobile/jastrebacM4.jpg";
import jastrebac55 from "../../../../../assets/images/JuznaIIstocnaSrbija/ToplickiOkrug/PlaninaJastrebac/mobile/jastrebacM5.jpg";
import jastrebac66 from "../../../../../assets/images/JuznaIIstocnaSrbija/ToplickiOkrug/PlaninaJastrebac/mobile/jastrebacM6.jpg";
import jastrebac77 from "../../../../../assets/images/JuznaIIstocnaSrbija/ToplickiOkrug/PlaninaJastrebac/mobile/jastrebacM7.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { toplickiOkurgPathRoutes } from "./ToplickiOkurgPathRoutes";
import { useContextAuth } from "../../../../../Context";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const PlaninaJastrebac = () => {
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

        <title>{switchLanguage === 'rs' ? "Planina Jastrebac – Prirodni Raj Centralne Srbije | Serbia Wonders" : "Mount Jastrebac – A Natural Paradise of Central Serbia | Serbia Wonders"}</title>
        <meta
          name="description"
          content={switchLanguage === 'rs' ?
            "Planina Jastrebac u centralnoj Srbiji poznata je po bogatoj flori i fauni, izvorima, vidikovcima i popularnim planinarskim stazama. Smeštena između Niša, Kruševca i Prokuplja, deo je rodopskog planinskog sistema."
            :
            "Jastrebac Mountain, located in central Serbia, is known for its rich flora and fauna, natural springs, scenic viewpoints, and popular hiking trails. It lies between Niš, Kruševac, and Prokuplje."
          }
        />
        <meta
          name="keywords"
          content={switchLanguage === 'rs' ?
            "Planina Jastrebac, Jastrebac, centralna Srbija, planinarske staze, priroda, Brestovačko jezero, Majorova česma, lovište Veliki Jastrebac"
            :
            "Jastrebac Mountain, hiking, nature, Brestovačko lake, Majorova spring, hunting grounds, Serbia"
          }
        />
        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/toplicki-okrug/planina-jastrebac`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/toplicki-okrug/planina-jastrebac"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/toplicki-okrug/planina-jastrebac"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/toplicki-okrug/planina-jastrebac"
        />

      </Helmet>



      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft className="arrowLeft" onClick={() => navigate(toplickiOkurgPathRoutes.home(switchLanguage))} />
        <header></header>
        <img srcSet={`${jastrebac11} 450w, ${jastrebac1} `} alt="Planina Jasterbac 1" loading="lazy" />

        {switchLanguage === 'rs' ?
          (
            <>

              <h2>Planina Jasterbac</h2>


              <section lang="sr">
                <p>
                  <strong>Jastrebac</strong> je planina koja se nalazi u centralnom delu Srbije, između <em>Niša</em>, <em>Aleksinca</em>, <em>Kruševca</em>, <em>Blaca</em> i <em>Prokuplja</em>. Pripada <strong>rodopskom planinskom sistemu</strong>, što znači da je nastala usled rasedanja. Izgrađena je od <strong>paleozojskih škrilja</strong> i <strong>magmatskih stena</strong>.
                </p>
              </section>

              <img srcSet={`${jastrebac66} 450w, ${jastrebac6}`} alt="Planina Jasterbac 2" loading="lazy" />

              <section lang="sr">
                <p>
                  Masiv <strong>Jastrepca</strong> je odvojen od <em>Kopaonika</em> <strong>Jankovom klisurom</strong> na reci <strong>Blatašnici</strong>. Deli se na <strong>Veliki</strong> i <strong>Mali Jastrebac</strong>. Najviši vrhovi <strong>Velikog Jastrepca</strong> (i celog masiva) su <strong>Velika Đulica</strong> (1.491 m), <strong>Pogled</strong> (1.481 m), <strong>Mala Đulica</strong> (1.429 m), <strong>Stracimir</strong> (1.394 m), <strong>Zmajevac</strong> (1.381 m) i drugi. Oni čine prirodnu granicu između <em>Toplice</em> i <em>Pomoravlja</em>. Na istočnoj strani masiva nalazi se <strong>Mali Jastrebac</strong>, odvojen od Velikog prevojem <strong>Grebac</strong>, sa najvišim vrhom <strong>Kupinjak</strong> (946 m). Greben je dug 42 km i od njega se odvajaju široke kose, a najistaknutiji su vrhovi <strong>Zmajevac</strong> i <strong>Bela stena</strong> prema severu. Prevojem <strong>Grebac</strong> prolazi put <em>Prokuplje-Kruševac</em> (preko <em>Ribarške Banje</em>).
                </p>
              </section>

              <section lang="sr" style={{ display: 'flex', flexDirection: 'column' }}>
                <p className="fruskaGoraParagh">
                  Poznata, pre svega kao dobar orijentir putnicima, <strong>Jastrebačka Majorova česma</strong> nalazi se na prevoju <strong>Prokop</strong> (990 m), na glavnom grebenu Jastrepcu, na sredini Velikog Jastrepca, i prirodna je veza između severne i južne strane Jastrepca, <em>Toplice</em> i <em>Pomoravlja</em>.
                  <br />
                  Ovim putem je nekada prolazio <em>Kruševački put</em>.
                  <br />
                  U ovom delu Jastrepca postoji više prirodnih izvora, a najuređenija je upravo <strong>Majorova česma</strong>.
                </p>


                <img
                  srcSet={`${jastrebac77} 450w, ${jastrebac7}`}
                  alt="Majorova česma"
                  className="fruskaGoraClassImg"
                  loading="lazy"
                />
              </section>

              <section lang="sr" style={{ display: 'flex', flexDirection: 'column', paddingBottom: '50px' }} >
                <img
                  srcSet={`${jastrebac22} 450w, ${jastrebac2}`}
                  alt="Majorova česma 2"
                  className="fruskaGoraClassImg"
                  loading="lazy"
                />

                <p className="fruskaGoraParagh">
                  Kako je dobila ime?
                  <br />
                  Između dva svetska rata, na ovom mestu je <em>„Obilićevo“</em> imalo prostore za testiranje bojevih i zaštitnih sredstava (<strong>Pomponi</strong>). Komandant <strong>Barutanskog bataljona</strong> Vojno-tehničkog zavoda <em>„Obilićevo“</em> (od 23. maja do 23. oktobra 1937) bio je pešadijski major <strong>Velibor Milošević</strong>, koji je preminuo 26. aprila 1938. godine. U njegovu čast, na <strong>Prokopu</strong> je podignuta česma, a na njoj je ploča sa natpisom: <em>U spomen pešadijskom majoru Veliboru Miloševiću (1889 – 1938)</em> inžinjeri i majstor.
                </p>
              </section>

              <img srcSet={`${jastrebac44} 450w, ${jastrebac4}`} alt="Mečje štene" loading="lazy" />

              <section lang="sr">
                <p>
                  Omiljene planinarske rute uključuju one do <strong>„Bele Stene“</strong> (1257 m), <strong>„Stracimira“</strong> (1390 m), <strong>„Maznice“</strong> (1140 m), kao i izlete do <strong>„Majorove česme“</strong>, česme <strong>„Dve sestre“</strong>, stare crkve <em>Sv. Petke</em>, <strong>„Doline breza“</strong>, srednjovekovnog utvrđenja <strong>„Gradaac“</strong> i drugih. Kraj Lomničke reke i odmarališta u Ravništu nalazi se planinarski dom – <strong>„Limarev dom“</strong> (521 m), do kojeg se stiže iz Kruševca asfaltiranim putem u dužini od 22 km.
                  <br /><br />
                  Loviste <strong>„Veliki Jastrebac“</strong> nazvano je po planini Veliki Jastrebac, čiju teritoriju pokriva većim delom. Od Kruševca je udaljeno 23 km. Loviste je osnovano 1948. godine, a još u 19. veku postojali su podaci o bogatstvu ove planine brojnim i autohtonim divljim životinjama.
                </p>
              </section>

              <img srcSet={`${jastrebac55} 450w, ${jastrebac5}`} alt="Bresničko Jezero" loading="lazy" />

              <section lang="sr">
                <p>
                  <strong>Brestovačko jezero</strong> je veštačko jezero koje se nalazi na planini <strong>Jastrebac</strong>, u centralnom delu Srbije. Jezero je smešteno na nadmorskoj visini od oko 600 metara i predstavlja popularnu destinaciju za odmor i rekreaciju. Zbog svog položaja i prirodne lepote, Brestovačko jezero je omiljeno među ljubiteljima prirode i planinarenja.
                  <br /><br />
                  Ovo jezero je značajno ne samo zbog svoje lepote, već i kao izvor snabdevanja vodom, ali i zbog svoje blizine planinskih staza i izletišta. Pored toga, u okolini jezera se nalaze brojne atrakcije, uključujući planinarske staze, izvorima lekovite vode i razne prirodne znamenitosti.
                </p>
              </section>

              <img srcSet={`${jastrebac33} 450w, ${jastrebac3}`} alt="Planina Jastrebac" loading="lazy" />

              <section lang="sr">
                <p>
                  <strong>Jastrebac</strong> se odlikuje bogatom listopadnom šumom, pretežno bukvom i četinarima. Po svojoj lepoti izdvajaju se rezervat <strong>belih breza</strong>, ali i mnogobrojni vodeni tokovi, izvori i potoci. U okolnim rekama i potocima mogu se naći rečni rakovi i slobodna pastrmka, što ukazuje na izuzetno čistu vodu. Za ljubitelje prirodne hrane, Jastrebac je bogat raznim vrstama samoniklog jestivog bilja, kao što su <strong>sremuš</strong>, <strong>kopriva</strong>, <strong>maslačak</strong>, <strong>divlje jagode</strong>, <strong>jabuke</strong>, <strong>kruške</strong>, te različite vrste jestivih gljiva, koje, uz pravilnu pripremu, predstavljaju izuzetno zdrav obrok.
                  <br /><br />
                  U podnožju Malog Jastrepca, sa jugoistočne strane, nalaze se <strong>Krajkovačko jezero</strong> i <strong>Oblačinsko jezero</strong>.
                </p>
              </section>


            </>
          )
          :
          (
            <>

              <h2>Jastrebac Mountain</h2>

              <section lang="en">
                <p> <strong>Jastrebac</strong> is a mountain located in the central part of Serbia, between <em>Nis</em>, <em>Aleksinac</em>, <em>Kruševac</em>, <em>Blace</em>, and <em>Prokuplje</em>. It belongs to the <strong>Rhodope mountain system</strong>, meaning it was formed due to faulting. It is composed of <strong>Paleozoic schists</strong> and <strong>igneous rocks</strong>.
                </p>
              </section>


              <img srcSet={`${jastrebac66} 450w, ${jastrebac6}`} alt="Jastrebac Mountain 2" loading="lazy" />

              <section lang="en"> <p> The <strong>Jastrebac massif</strong> is separated from <em>Kopaonik</em> by the <strong>Jankova Gorge</strong> on the <strong>Blatašnica River</strong>. It is divided into <strong>Great (Veliki) Jastrebac</strong> and <strong>Small (Mali) Jastrebac</strong>. The highest peaks of <strong>Great Jastrebac</strong> (and the entire massif) are <strong>Velika Đulica</strong> (1,491 m), <strong>Pogled</strong> (1,481 m), <strong>Mala Đulica</strong> (1,429 m), <strong>Stracimir</strong> (1,394 m), <strong>Zmajevac</strong> (1,381 m), and others. They form a natural boundary between <em>Toplica</em> and <em>Pomoravlje</em>. On the eastern side of the massif lies <strong>Small Jastrebac</strong>, separated from the Great by the <strong>Grebac Pass</strong>, with the highest peak <strong>Kupinjak</strong> (946 m). The ridge is 42 km long and broad slopes branch off from it, with the most prominent peaks being <strong>Zmajevac</strong> and <strong>Bela stena</strong> to the north. The <strong>Grebac Pass</strong> is traversed by the road <em>Prokuplje-Kruševac</em> (via <em>Ribarska Banja</em>). </p> </section>


              <section lang="en" style={{ display: 'flex', flexDirection: 'column' }}> <p className="fruskaGoraParagh"> Known primarily as a good landmark for travelers, the <strong>Jastrebačka Majorova česma (Major’s Fountain)</strong> is located at the <strong>Prokop Pass</strong> (990 m), on the main ridge of Jastrebac, in the middle of Great Jastrebac. It is a natural connection between the northern and southern sides of Jastrebac, <em>Toplica</em> and <em>Pomoravlje</em>. <br /> The <em>Kruševac Road</em> once passed this way. <br /> In this part of Jastrebac, there are several natural springs, the most developed being the <strong>Major’s Fountain</strong>. </p>
                <img
                  srcSet={`${jastrebac77} 450w, ${jastrebac7}`}
                  alt="Major's Fountain"
                  className="fruskaGoraClassImg"
                  loading="lazy"
                />

              </section>

              <section lang="en" style={{ display: 'flex', flexDirection: 'column', paddingBottom: '50px' }}> <img srcSet={`${jastrebac22} 450w, ${jastrebac2}`} alt="Major's Fountain 2" className="fruskaGoraClassImg" loading="lazy" /> <p className="fruskaGoraParagh"> How did it get its name? <br /> Between the two World Wars, the <em>“Obilićevo”</em> facility had spaces here for testing chemical warfare and protective agents (<strong>Pomponi</strong>). The commander of the <strong>Gunpowder Battalion</strong> of the Military-Technical Institute <em>“Obilićevo”</em> (from May 23 to October 23, 1937) was infantry major <strong>Velibor Milošević</strong>, who passed away on April 26, 1938. In his honor, a fountain was erected at <strong>Prokop</strong>, with a plaque inscribed: <em>In memory of infantry major Velibor Milošević (1889 – 1938), engineers and craftsmen.</em> </p> </section>
              <img srcSet={`${jastrebac44} 450w, ${jastrebac4}`} alt="Bear Cub" loading="lazy" />

              <section lang="en"> <p> Favorite hiking routes include those to <strong>“Bela Stena”</strong> (1257 m), <strong>“Stracimir”</strong> (1390 m), <strong>“Maznice”</strong> (1140 m), as well as trips to <strong>“Major’s Fountain”</strong>, the fountain of <strong>“Dve sestre”</strong> (Two Sisters), the old church of <em>St. Petka</em>, the <strong>“Valley of Birches”</strong>, the medieval fortress <strong>“Gradaac”</strong>, and others. Near the Lomnička River and the resort in Ravnište is the mountain lodge – <strong>“Limarev dom”</strong> (521 m), accessible from Kruševac by an asphalt road of 22 km. <br /><br /> The hunting ground <strong>“Veliki Jastrebac”</strong> is named after the mountain Great Jastrebac, covering most of its territory. It is located 23 km from Kruševac. The hunting ground was established in 1948, and even in the 19th century, there were records about the richness of this mountain in numerous native wild animals. </p> </section>
              <img srcSet={`${jastrebac55} 450w, ${jastrebac5}`} alt="Brestovačko Lake" loading="lazy" />

              <section lang="en"> <p> <strong>Brestovačko Lake</strong> is an artificial lake located on <strong>Jastrebac Mountain</strong>, in the central part of Serbia. The lake is situated at an altitude of about 600 meters and represents a popular destination for rest and recreation. Due to its location and natural beauty, Brestovačko Lake is favored among nature lovers and hikers. <br /><br /> This lake is important not only for its beauty but also as a water supply source, and because of its proximity to mountain trails and picnic areas. Additionally, many attractions are found around the lake, including hiking trails, springs with healing water, and various natural landmarks. </p> </section>
              <img srcSet={`${jastrebac33} 450w, ${jastrebac3}`} alt="Jastrebac Mountain" loading="lazy" />

              <section lang="en"> <p> <strong>Jastrebac</strong> is characterized by rich deciduous forests, mainly beech and conifers. Notable for its beauty are the <strong>white birch reserves</strong> as well as numerous streams, springs, and creeks. River crayfish and wild trout can be found in the surrounding rivers and streams, indicating exceptionally clean water. For lovers of natural food, Jastrebac is rich in various types of wild edible plants such as <strong>wild garlic</strong>, <strong>nettle</strong>, <strong>dandelion</strong>, <strong>wild strawberries</strong>, <strong>apples</strong>, <strong>pears</strong>, as well as various edible mushrooms, which, when properly prepared, make an exceptionally healthy meal. <br /><br /> At the foot of Small Jastrebac, on the southeastern side, are <strong>Krajkovačko Lake</strong> and <strong>Oblačinsko Lake</strong>. </p> </section>

            </>
          )}


      </div>
    </>
  );
};


export default PlaninaJastrebac;