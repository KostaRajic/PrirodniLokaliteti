/* eslint-disable react/no-unknown-property */
/* eslint-disable no-useless-escape */
import gazimestan1 from "../../../../../assets/images/KosovoIMetohija/Pristinski/Gazimestan/desktop/gazimestan1.jpg";
import gazimestan2 from "../../../../../assets/images/KosovoIMetohija/Pristinski/Gazimestan/desktop/gazimestan2.jpg";
import gazimestan3 from "../../../../../assets/images/KosovoIMetohija/Pristinski/Gazimestan/desktop/gazimestan3.jpg";
import gazimestan4 from "../../../../../assets/images/KosovoIMetohija/Pristinski/Gazimestan/desktop/gazimestan4.jpg";
import gazimestan11 from "../../../../../assets/images/KosovoIMetohija/Pristinski/Gazimestan/mobile/Mgazimestan1.jpg";
import gazimestan22 from "../../../../../assets/images/KosovoIMetohija/Pristinski/Gazimestan/mobile/Mgazimestan2.jpg";
import gazimestan33 from "../../../../../assets/images/KosovoIMetohija/Pristinski/Gazimestan/mobile/Mgazimestan3.jpg";
import gazimestan44 from "../../../../../assets/images/KosovoIMetohija/Pristinski/Gazimestan/mobile/Mgazimestan4.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { pristinskiOkrugPathRoutes } from "./PristinskiOkrugPathRoutes";
import { useContextAuth } from "../../../../../Context";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const Gazimestan = () => {
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

        <title>{switchLanguage === 'rs' ? "Gazimestan – Memorijal Kosovske bitke | Serbia Wonders" : "Gazimestan – Memorial of the Battle of Kosovo | Serbia Wonders"}</title>
        <meta
          name="description"
          content={switchLanguage === 'rs' ?
            "Gazimestan je memorijalni kompleks podignut u znak sećanja na Kosovsku bitku iz 1389. godine, smešten blizu Prištine, simbol srpske istorije i kulture."
            :
            "Gazimestan is a memorial complex commemorating the 1389 Battle of Kosovo, located near Pristina, symbolizing Serbian history and culture."
          }
        />
        <meta
          name="keywords"
          content={switchLanguage === 'rs' ?
            "Gazimestan, Kosovska bitka, Kosovo polje, knez Lazar, spomenik kosovskim junacima, Priština, Srbija, Srbija Wonders, istorija Balkana"
            :
            "Gazimestan, Battle of Kosovo, Kosovo Field, Prince Lazar, monument to Kosovo heroes, Pristina, Serbia, Serbia Wonders, Balkan history"
          }
        />
        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/pristinski-okrug/gazimestan`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/pristinski-okrug/gazimestan"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/pristinski-okrug/gazimestan"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/pristinski-okrug/gazimestan"
        />

      </Helmet>


      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft className="arrowLeft" onClick={() => navigate(pristinskiOkrugPathRoutes.home(switchLanguage))} style={{ fill: 'white' }} />
        <header></header>
        <img srcSet={`${gazimestan11} 450w, ${gazimestan1} `} alt="Gazimestan 1" loading="lazy" />

        <h2>Gazimestan</h2>

        {switchLanguage === 'rs' ?
          (
            <>


              <section lang="sr">
                <p>
                  <strong>Gazimestan</strong> je memorijalni kompleks podignut u znak sećanja na <em>Kosovsku bitku (1389)</em>, koji se nalazi oko 6–7 kilometara jugoistočno od stvarnog bojišta poznatog kao <strong>Kosovo polje</strong>. Dostupan je sa auto-puta <strong>Priština–Kosovska Mitrovica</strong>, na 5 km severozapadno od Prištine. Svake godine na <em>Vidovdan, 28. juna</em>, održava se pomen kod spomenika, koji je ukrašen likom kneza <strong>Lazara</strong>, koji je predvodio srpsku vojsku u Kosovskom boju.
                </p>

                <p>
                  Kao istorijski prostor, odnosno centralno mesto sukoba srpske i turske vojske, predstavlja jedinstvenu celinu u kojoj se nalaze: spomenik kosovskim junacima u obliku srednjovekovne kule, podignut 1953. godine po projektu <strong>Aleksandra Deroka</strong>, <em>Muratovo turbe</em> i <em>Gazimestan turbe</em> (Barjaktarovo turbe). Na uzvišenju je Spomenik kosovskim junacima, dok je kilometar prema selu Lazarovu <em>Muratovo turbe</em>, a na jugu, na 500 metara, Barjaktarovo turbe.
                </p>
              </section>

              <img srcSet={`${gazimestan22} 450w, ${gazimestan2} `} alt="Gazimestan 2" loading="lazy" />


              <section lang="sr">
                <p>
                  Područje spomeničkog kompleksa Gazimestana, Plandišta, Treševine i Lazarova, graniči se na severnoj strani sa prostorom Bakšija; na severoistočnoj strani sa Brnjičkom rekom; na istočnoj strani granicu čine naselje Donja Brnjica i prostor Ravnište; na južnoj strani su prostor i naselje Orlović; na zapadnoj strani su prostori Široko polje i Mazgit sa naseljem Gornji Mazgit. Put za Prištinu na zapadnoj strani delimično graniči, a delimično prolazi kroz ovu celinu. Centralno mesto čini kula visine 25 metara, u čijoj su unutrašnjosti ispisani stihovi epskih pesama kosovskog ciklusa. Na vrhu kule je platforma sa koje se pruža pogled na prostor <strong>Kosovske bitke</strong>.
                </p>

                <p>
                  Kompleks Gazimestana sa spomenicima i božurima bio je pod zaštitom države do 1999. godine. Iako ga od tada čuvaju međunarodne snage, neki Albanci na tom području podižu građevinske objekte. U blizini spomenika nalazi se privatna ergela konja i konjički klub, koji koristi terene Gazimestana kao hipodrom.
                </p>
              </section>

              <img srcSet={`${gazimestan33} 450w, ${gazimestan3} `} alt="Gazimestan 3" loading="lazy" />

              <section lang="sr">
                <p>
                  Srbi se svake godine na <em>Vidovdan</em> okupljaju kod Spomenika kosovskim junacima na Gazimestanu, a Srpska pravoslavna crkva održava pomen.
                </p>

                <p>
                  Na Vidovdan <em>28. juna 2012.</em> kod spomenika se okupilo 10.000 Srba, a besedu je držao Patrijarh srpski <strong>Irinej</strong>. Tokom te svečanosti došlo je do incidenta kada je Kosovska policija naredila posetiocima da skinu majice sa ćiriličnim natpisima ili bilo čim što podseća na Srbiju.
                </p>
              </section>

              <img srcSet={`${gazimestan44} 450w, ${gazimestan4} `} alt="Gazimestan 4" loading="lazy" />

              <section lang="sr">
                <p>
                  <strong>Kosovski boj</strong>, poznat i kao <em>Kosovska bitka</em>, odigrao se <em>28. juna 1389.</em> godine na Kosovu polju između vojske srpskog vladara kneza <strong>Lazara Hrebeljanovića</strong> i vojske osmanskog sultana <strong>Murata I</strong>. Bitka je bila odlučujuća u borbi između Srbije i Osmanskog carstva. Iako su obe strane pretrpele velike gubitke, nije bilo jasnog pobednika, ali je označila početak osmanske dominacije na Balkanu. Knez Lazar je poginuo tokom bitke, a sultan Murat je ubijen, što je dodatno pojačalo simbolički značaj ovog događaja u istoriji Balkana.
                </p>
              </section>


            </>
          )
          :
          (
            <>

              <section lang="en">
                <p>
                  <strong>Gazimestan</strong> is a memorial complex built in remembrance of the <em>Battle of Kosovo (1389)</em>, located about 6–7 kilometers southeast of the actual battlefield known as <strong>Kosovo Field</strong>. It is accessible from the <strong>Pristina–Kosovska Mitrovica</strong> highway, 5 km northwest of Pristina. Every year on <em>Vidovdan, June 28</em>, a commemorative ceremony is held at the monument, which is adorned with the likeness of Prince <strong>Lazar</strong>, who led the Serbian army in the Battle of Kosovo.
                </p>

                <p>
                  As a historical site and central place of the conflict between the Serbian and Turkish armies, it represents a unique complex which includes: the monument to the Kosovo heroes in the form of a medieval tower, built in 1953 based on the design by <strong>Aleksandar Deroko</strong>, <em>Murat's Tomb</em>, and <em>Gazimestan Tomb</em> (Barjaktaro's Tomb). On the hilltop stands the Monument to the Kosovo heroes, while a kilometer towards the village of Lazarovo is Murat's Tomb, and to the south, 500 meters away, is Barjaktaro's Tomb.
                </p>
              </section>

              <img srcSet={`${gazimestan22} 450w, ${gazimestan2} `} alt="Gazimestan 2" loading="lazy" />


              <section lang="en">
                <p>
                  The area of the Gazimestan monument complex, including Plandište, Treševina, and Lazarovo, borders to the north with the Bakšija area; to the northeast with the Brnjica River; to the east with the settlement of Donja Brnjica and the Ravnište area; to the south with the area and settlement of Orlović; and to the west with the Široko polje and Mazgit areas, including the settlement of Gornji Mazgit. The road to Pristina on the western side partially borders and partially runs through this area. The central feature is a 25-meter-high tower, inside which are inscribed verses from epic poems of the Kosovo cycle. On top of the tower is a platform offering a view over the Kosovo battlefield area.
                </p>

                <p>
                  The Gazimestan complex with its monuments and peonies was under state protection until 1999. Although it has been guarded by international forces since then, some Albanians in the area have built construction structures. Near the monument, there is a private horse stud farm and an equestrian club that uses the Gazimestan grounds as a hippodrome.
                </p>
              </section>

              <img srcSet={`${gazimestan33} 450w, ${gazimestan3} `} alt="Gazimestan 3" loading="lazy" />


              <section lang="en">
                <p>
                  Every year on <em>Vidovdan</em>, Serbs gather at the Monument to the Kosovo heroes at Gazimestan, and the Serbian Orthodox Church holds a memorial service.
                </p>

                <p>
                  On Vidovdan, <em>June 28, 2012</em>, around 10,000 Serbs gathered at the monument, with a speech given by Serbian Patriarch <strong>Irinej</strong>. During the ceremony, an incident occurred when the Kosovo police ordered visitors to remove shirts bearing Cyrillic inscriptions or anything resembling Serbia.
                </p>
              </section>

              <img srcSet={`${gazimestan44} 450w, ${gazimestan4} `} alt="Gazimestan 4" loading="lazy" />


              <section lang="en">
                <p>
                  The <strong>Battle of Kosovo</strong>, also known as the <em>Kosovo Battle</em>, took place on <em>June 28, 1389</em>, on Kosovo Field between the army of the Serbian ruler Prince <strong>Lazar Hrebeljanović</strong> and the Ottoman Sultan <strong>Murad I</strong>. The battle was decisive in the struggle between Serbia and the Ottoman Empire. Although both sides suffered heavy losses, there was no clear victor, but it marked the beginning of Ottoman dominance in the Balkans. Prince Lazar was killed during the battle, and Sultan Murad was assassinated, which further intensified the symbolic significance of this event in Balkan history.
                </p>
              </section>


            </>
          )}

      </div>
    </>
  );
};


export default Gazimestan;