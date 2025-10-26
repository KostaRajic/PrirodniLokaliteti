/* eslint-disable react/no-unknown-property */
/* eslint-disable react/no-unescaped-entities */
import sokoGrad1 from "../../../../../assets/images/JuznaIIstocnaSrbija/ZajecarskiOkrug/SokoGrad/desktop/SokoGrad1.jpg";
import sokoGrad2 from "../../../../../assets/images/JuznaIIstocnaSrbija/ZajecarskiOkrug/SokoGrad/desktop/SokoGrad2.jpg";
import sokoGrad3 from "../../../../../assets/images/JuznaIIstocnaSrbija/ZajecarskiOkrug/SokoGrad/desktop/SokoGrad3.jpg";
import sokoGrad4 from "../../../../../assets/images/JuznaIIstocnaSrbija/ZajecarskiOkrug/SokoGrad/desktop/SokoGrad4.jpg";
import sokoGrad5 from "../../../../../assets/images/JuznaIIstocnaSrbija/ZajecarskiOkrug/SokoGrad/desktop/SokoGrad5.jpg";
import sokoGrad11 from "../../../../../assets/images/JuznaIIstocnaSrbija/ZajecarskiOkrug/SokoGrad/mobile/SokoGradM1.jpg";
import sokoGrad22 from "../../../../../assets/images/JuznaIIstocnaSrbija/ZajecarskiOkrug/SokoGrad/mobile/SokoGradM2.jpg";
import sokoGrad33 from "../../../../../assets/images/JuznaIIstocnaSrbija/ZajecarskiOkrug/SokoGrad/mobile/SokoGradM3.jpg";
import sokoGrad44 from "../../../../../assets/images/JuznaIIstocnaSrbija/ZajecarskiOkrug/SokoGrad/mobile/SokoGradM4.jpg";
import sokoGrad55 from "../../../../../assets/images/JuznaIIstocnaSrbija/ZajecarskiOkrug/SokoGrad/mobile/SokoGradM5.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { zajecarskiOkrugPathRoutes } from "./ZajecarskiOkrugPathRoutes";
import { useContextAuth } from "../../../../../Context";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const SokoGrad = () => {
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

        <title>{switchLanguage === 'rs' ? "Soko Grad – Srpski Srednjovekovni Grad kod Sokobanje | Serbia Wonders" : "Soko Grad – Serbian Medieval Fortress near Sokobanja | Serbia Wonders"}</title>
        <meta
          name="description"
          content={switchLanguage === 'rs' ?
            "Soko Grad je srednjovekovna tvrđava smeštena blizu Sokobanje, sa bogatom istorijom od Justinijana do Prvog srpskog ustanka. Otkrijte legende, utvrđenja i značaj ovog istorijskog lokaliteta."
            :
            "Soko Grad is a medieval fortress near Sokobanja with a rich history from Justinian to the First Serbian Uprising. Discover legends, fortifications, and the significance of this historic site."
          }
        />
        <meta
          name="keywords"
          content={switchLanguage === 'rs' ?
            "Soko Grad, srednjovekovni grad, tvrđava Sokobanja, srpska istorija, Stefan Nemanja, Stefan Lazarević, Hamuz-beg, hajduk Veljko Petrović, tvrđave u Srbiji"
            :
            "Soko Grad, medieval fortress, Sokobanja fortress, Serbian history, Stefan Nemanja, Stefan Lazarević, Hamuz-beg, hajduk Veljko Petrović, fortresses in Serbia"
          }
        />
        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/zajecarski-okrug/soko-grad`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/zajecarski-okrug/soko-grad"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/zajecarski-okrug/soko-grad"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/zajecarski-okrug/soko-grad"
        />
      </Helmet>



      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft className="arrowLeft" onClick={() => navigate(zajecarskiOkrugPathRoutes.home(switchLanguage))} style={{ fill: 'white' }} />
        <header></header>
        <img srcSet={`${sokoGrad44} 450w, ${sokoGrad4} `} alt="Srpski Srednjovekovni Grad 'Soko Grad' 1" loading="lazy" />

        {switchLanguage === 'rs' ?
          (
            <>

              <h1>Srpski Srednjovekovni Grad "Soko Grad"</h1>

              <section lang="sr">
                <p>
                  <strong>Sokograd</strong>, srednjovekovna tvrđava smeštena na svega <strong>2 km</strong> od Sokobanje, nosi sa sobom vekove istorije i tajni. Iako tačan datum njegovog nastanka nije poznat, pretpostavlja se da je izgrađen u vreme cara <strong>Justinijana</strong> kako bi služio kao odbrambeni bedem protiv Avara i Slovena.
                  <br /><br />
                  Ime Sokograd, poznat i kao <em>Sokolac</em>, vezuje se za njegove nekadašnje gospodare, za koje se veruje da su se bavili dresurom sokolova. Prema legendi, čak se i porez plaćao u dresiranim sokolovima, što je bilo poznato kao <strong>"sokolarina"</strong>. Danas, iznad ovog drevnog grada, sokolovi i dalje ponosno kruže, podsećajući na bogatu prošlost ove tvrđave.
                </p>

                <img srcSet={`${sokoGrad22} 450w, ${sokoGrad2}`} alt="Srpski Srednjovekovni Grad 'Soko Grad' 2" loading="lazy" />
              </section>

              <section lang="sr">
                <p>
                  Sokograd je podignut na izuzetno nepristupačnom terenu, što je predstavljalo izazov za njegove graditelje. Kako bi olakšali dopremanje građevinskog materijala, pregradili su reku <strong>Moravicu</strong> i stvorili veštačko jezero, koje im je omogućilo lakši transport kamena neophodnog za izgradnju tvrđave.
                  <br /><br />
                  Međutim, nakon izvesnog vremena, brana na Moravici je popustila, izazvavši snažan vodeni talas koji je uništio naselje nizvodno od nje. Mesto gde se nekada nalazilo to naselje danas nosi ime <strong>"Trebič"</strong>, dok se brdo preko kojeg se voda izlila naziva <strong>"Prevalac"</strong>.
                </p>

                <img srcSet={`${sokoGrad33} 450w, ${sokoGrad3}`} alt="Srpski Srednjovekovni Grad 'Soko Grad' 3" loading="lazy" />
              </section>

              <section lang="sr">
                <p>
                  Sokograd je bio prostrana i razuđena tvrđava, sastavljena od dva dela – gornjeg i donjeg grada. Donji grad je vremenom gotovo u potpunosti srušen, dok su u gornjem delu očuvane značajne građevine.
                  <br /><br />
                  Ulazak u gornji grad vodio je kroz kulu <em>"Motrilju"</em>, a unutar njegovih zidina i danas stoji kula sa puškarnicama. Pored nje, nalaze se još dve kule povezane bedemom, koje su imale i otvore za topove. U središtu grada, na teško pristupačnom uzvišenju, nalazila se glavna kula u kojoj je živeo gospodar tvrđave. Od te kule zidine su se spuštale ka reci Moravici, gde se prostirao donji grad. Na tom pristupačnijem terenu živelo je stanovništvo, a tu su bili smešteni i robovi.
                </p>

                <img srcSet={`${sokoGrad11} 450w, ${sokoGrad1}`} alt="Srpski Srednjovekovni Grad 'Soko Grad' 4" loading="lazy" />
              </section>

              <section lang="sr">
                <p>
                  Najbolje očuvani deo gornjeg grada je stara cisterna za vodu, a tokom istraživanja pronađeni su i ostaci keramičkih cevi koje su služile za prikupljanje i dovod kišnice.
                  <br /><br />
                  Istorijski podaci ukazuju na to da je Sokograd nekada bio važan vojni punkt i mesto za odmor konvoja koji su iz Evrope kretali ka Aziji. Prvi pisani pomen o ovoj tvrđavi datira iz <strong>11. veka</strong>, a <strong>1172. godine</strong> osvojio ju je <strong>Stefan Nemanja</strong>, nakon čega je postala deo srednjovekovne srpske države. Sokograd se kasnije pominje i u biografijama despota <strong>Stefana Lazarevića</strong> i <strong>Konstantina Filozofa</strong>, što potvrđuje njegov značaj kroz istoriju.
                </p>

                <img srcSet={`${sokoGrad55} 450w, ${sokoGrad5}`} alt="Srpski Srednjovekovni Grad 'Soko Grad' 5" loading="lazy" />
              </section>

              <section lang="sr">
                <p>
                  Početkom <strong>15. veka</strong>, Sokograd je pao pod tursku vlast. Sultan <strong>Musa</strong>, sin Bajazita, poznat kao <em>Musa Kesedžija</em>, <strong>1413. godine</strong> ugušio je pobunu <strong>Hamuz-bega</strong>, koji je tada upravljao gradom. Hamuz-beg je zarobljen i pogubljen, dok je lokalno stanovništvo raseljeno.
                  <br /><br />
                  Krajem <strong>17. veka</strong>, <strong>1689. godine</strong>, Sokograd su zajedno osvojili Srbi i Austrijanci, ali su ga sredinom <strong>18. veka</strong> Austrijanci nakratko zadržali pod svojom kontrolom. Tokom Prvog srpskog ustanka, <strong>1808. godine</strong>, hajduk <strong>Veljko Petrović</strong> uspeo je da zauzme grad, ali samo na kratko. Nakon toga, Sokograd je prepušten zubu vremena, ostavljajući iza sebe samo ruševine kao svedočanstvo o svojoj nekadašnjoj moći i značaju.
                </p>
              </section>

            </>
          )
          :
          (
            <>

              <h1>Serbian Medieval Town "Soko Grad"</h1>

              <section lang="en"> <p> <strong>Sokograd</strong>, a medieval fortress located just <strong>2 km</strong> from Sokobanja, carries centuries of history and secrets. Although the exact date of its founding is unknown, it is believed to have been built during the reign of Emperor <strong>Justinian</strong> to serve as a defensive barrier against the Avars and Slavs. <br /><br /> The name Sokograd, also known as <em>Sokolac</em>, is connected to its former rulers, who are believed to have practiced falconry. According to legend, taxes were even paid in trained falcons, known as <strong>"sokolarina"</strong>. Today, falcons still proudly soar above this ancient town, reminding us of the fortress’s rich past. </p>
                <img srcSet={`${sokoGrad22} 450w, ${sokoGrad2}`} alt="Serbian Medieval Town 'Soko Grad' 2" loading="lazy" />

              </section> <section lang="en"> <p> Sokograd was built on extremely inaccessible terrain, which posed a challenge for its builders. To facilitate the delivery of construction materials, they dammed the <strong>Moravica</strong> River and created an artificial lake, which allowed easier transport of the stone necessary for building the fortress. <br /><br /> However, after some time, the dam on the Moravica gave way, causing a powerful flood that destroyed the settlement downstream. The place where that settlement once stood is today called <strong>"Trebič"</strong>, while the hill over which the water spilled is called <strong>"Prevalac"</strong>. </p>
                <img srcSet={`${sokoGrad33} 450w, ${sokoGrad3}`} alt="Serbian Medieval Town 'Soko Grad' 3" loading="lazy" />

              </section> <section lang="en"> <p> Sokograd was a vast and sprawling fortress, consisting of two parts – the upper and the lower town. Over time, the lower town was almost completely destroyed, while significant buildings have been preserved in the upper town. <br /><br /> Entrance to the upper town was through the <em>"Motrilja"</em> tower, and within its walls, a tower with gunports still stands today. Next to it are two more towers connected by a wall, which also had openings for cannons. At the center of the town, on a difficult-to-access elevation, was the main tower where the lord of the fortress lived. From that tower, the walls descended toward the Moravica River, where the lower town was located. The population lived in that more accessible area, and slaves were also housed there. </p>
                <img srcSet={`${sokoGrad11} 450w, ${sokoGrad1}`} alt="Serbian Medieval Town 'Soko Grad' 4" loading="lazy" />

              </section> <section lang="en"> <p> The best-preserved part of the upper town is the old water cistern, and during excavations, remains of ceramic pipes used for collecting and directing rainwater were found. <br /><br /> Historical data indicate that Sokograd was once an important military post and a resting place for convoys traveling from Europe to Asia. The first written mention of this fortress dates back to the <strong>11th century</strong>, and in <strong>1172</strong>, it was conquered by <strong>Stefan Nemanja</strong>, after which it became part of the medieval Serbian state. Sokograd is also mentioned in the biographies of despots <strong>Stefan Lazarević</strong> and <strong>Konstantin the Philosopher</strong>, confirming its importance throughout history. </p>  </section>
              <img srcSet={`${sokoGrad55} 450w, ${sokoGrad5}`} alt="Serbian Medieval Town 'Soko Grad' 5" loading="lazy" />

              <section lang="en">
                <p>
                  At the beginning of the <strong>15th century</strong>, Sokograd fell under Ottoman rule. Sultan <strong>Musa</strong>, son of Bayezid, known as <em>Musa Kesedžija</em>, suppressed the rebellion of <strong>Hamuz-beg</strong>, who was then ruling the town, in <strong>1413</strong>. Hamuz-beg was captured and executed, while the local population was displaced.
                  <br /><br />
                  At the end of the <strong>17th century</strong>, in <strong>1689</strong>, Sokograd was jointly captured by Serbs and Austrians, but by the mid-<strong>18th century</strong>, the Austrians briefly held control over it. During the First Serbian Uprising, in <strong>1808</strong>, hajduk <strong>Veljko Petrović</strong> managed to capture the town, but only temporarily. After that, Sokograd was left to the ravages of time, leaving behind only ruins as a testimony to its former power and significance.
                </p>
              </section>

            </>
          )}

      </div>

    </>
  );
};


export default SokoGrad;