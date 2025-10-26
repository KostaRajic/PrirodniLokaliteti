/* eslint-disable react/no-unknown-property */
/* eslint-disable no-useless-escape */
import svetaPetkaIverica1 from "../../../../../assets/images/JuznaIIstocnaSrbija/NisavskiOkrug/ManastirSvetkaPetkaIverica/desktop/manastirSvetaPetkaIverica1.jpg";
import svetaPetkaIverica2 from "../../../../../assets/images/JuznaIIstocnaSrbija/NisavskiOkrug/ManastirSvetkaPetkaIverica/desktop/manastirSvetaPetkaIverica2.jpg";
import svetaPetkaIverica3 from "../../../../../assets/images/JuznaIIstocnaSrbija/NisavskiOkrug/ManastirSvetkaPetkaIverica/desktop/manastirSvetaPetkaIverica3.jpg";
import svetaPetkaIverica4 from "../../../../../assets/images/JuznaIIstocnaSrbija/NisavskiOkrug/ManastirSvetkaPetkaIverica/desktop/manastirSvetaPetkaIverica4.jpg";
import svetaPetkaIverica11 from "../../../../../assets/images/JuznaIIstocnaSrbija/NisavskiOkrug/ManastirSvetkaPetkaIverica/mobile/manastirSvetaPetkaIvericaM1.jpg";
import svetaPetkaIverica22 from "../../../../../assets/images/JuznaIIstocnaSrbija/NisavskiOkrug/ManastirSvetkaPetkaIverica/mobile/manastirSvetaPetkaIvericaM2.jpg";
import svetaPetkaIverica33 from "../../../../../assets/images/JuznaIIstocnaSrbija/NisavskiOkrug/ManastirSvetkaPetkaIverica/mobile/manastirSvetaPetkaIvericaM3.jpg";
import svetaPetkaIverica44 from "../../../../../assets/images/JuznaIIstocnaSrbija/NisavskiOkrug/ManastirSvetkaPetkaIverica/mobile/manastirSvetaPetkaIvericaM4.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { nisavskiOkrugPathRoutes } from "./NisavskiOkrugPathRoutes";
import { useContextAuth } from "../../../../../Context";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const ManastirSvetaPetkaIverica = () => {
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

        <title>{switchLanguage === 'rs' ? "Manastir Sveta Petka Iverica – Sićevačka klisura | Serbia Wonders" : "Monastery of Saint Petka Iverica – Sićevo Gorge | Serbia Wonders"}</title>
        <meta
          name="description"
          content={switchLanguage === 'rs' ?
            "Manastir Sveta Petka Iverica u Sićevačkoj klisuri, osnovan od strane monaha sa Svete Gore. Poznat kao jedini vojni manastir u Srbiji, sagrađen u čast kralja Aleksandra Obrenovića."
            :
            "The Monastery of Saint Petka Iverica, located in the Sićevo Gorge near Niš, was founded by monks from Mount Athos. Known as Serbia’s only military monastery, built in honor of King Alexander Obrenović."
          }
        />
        <meta
          name="keywords"
          content={switchLanguage === 'rs' ?
            "Manastir Sveta Petka, Iverica, Sićevačka klisura, Aleksandar Obrenović, vojni manastir, Sveti Sava, pravoslavni manastiri, srpska pravoslavna crkva, istorija Srbije, manastiri kod Niša"
            :
            "Saint Petka Monastery, Iverica, Sićevo Gorge, Alexander Obrenović, military monastery, Orthodox monastery, Serbian history, Niš monasteries, Mount Athos monks"
          }
        />
        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/nisavski-okrug/manastir-sveta-petka-iverica`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/nisavski-okrug/manastir-sveta-petka-iverica"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/nisavski-okrug/manastir-sveta-petka-iverica"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/nisavski-okrug/manastir-sveta-petka-iverica"
        />

      </Helmet>



      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft className="arrowLeft" onClick={() => navigate(nisavskiOkrugPathRoutes.home(switchLanguage))} />
        <header></header>
        <img srcSet={`${svetaPetkaIverica11} 450w, ${svetaPetkaIverica1} `} alt="Manastir Sveta Petka Iverica 1" loading="lazy" />


        {switchLanguage === 'rs' ?
          (
            <>

              <h1>Manastir Sveta Petka Iverica</h1>

              <section lang="sr">
                <p> Manastir se nalazi u <em>Sićevačkoj klisuri</em>, na putu <em>Niš-Sofija</em>. Osnovali su ga monasi iz gruzijskog manastira <strong>Iviriona</strong> sa <em>Svete Gore</em>, zbog čega nosi ime <strong>Iverica</strong>. Tokom XIV veka, mnogi monasi su, bežeći od osmanske invazije, pronašli utočište u ovoj prelepoj klisuri, gde su formirali monašku zajednicu kojoj je pripadao i ovaj manastir. Crkva manastira izgrađena je u srpsko-vizantijskom stilu, a njen osnovni oblik je jednobrodna građevina sa polukružnom oltarskom apsidom. </p>
              </section>

              <img srcSet={`${svetaPetkaIverica22} 450w, ${svetaPetkaIverica2} `} alt="Manastir Sveta Petka Iverica 2" loading="lazy" />

              <section lang="sr">
                <p> Za crkvu <strong>Svete Petke</strong> vezane su mnoge zanimljive priče. 1896. godine, dok je inženjerska jedinica srpske vojske radila na izgradnji pruge i probijanju puta kroz <em>Sićevačku klisuru</em>, stigla je vest da je kralj <strong>Aleksandar I Obrenović</strong> jedva izbegao smrt u Francuskoj. Kao znak zahvalnosti Bogu za čudesno spasenje kralja, vojska je odlučila da na tom mestu podigne manastir. </p>
              </section>

              <div className="flexColumn" style={{ display: "flex", paddingBottom: "20px" }}>

                <img srcSet={`${svetaPetkaIverica33} 450w, ${svetaPetkaIverica3} `} alt="Manastir Sveta Petka Iverica 3" className="fruskaGoraClassImg" loading="lazy" />

                <p className="fruskaGoraParagh"> Na portalu crkve i danas se nalazi tabla sa natpisom: „U slavu srećnog spasenja vrhovnog komandanta Kraljevske srpske vojske, njegovog veličanstva Kralja Aleksandra, ovaj hram je iz temelja obnovljen, u zahvalnosti Svemogućem što je sačuvao dragoceni život našeg uzvišenog gospodara Srbije, kao i u znak dubokih osećanja prema njegovoj časnoj ličnosti. Potpisuju oficiri i vojnici inženjerijskih trupa.” </p>
              </div>

              <p> Pretpostavlja se da je crkva nastala u vreme <strong>Uroša Nejakog</strong>, iako njen tačan nastanak još uvek nije potpuno istražen. U tom periodu, <em>Sićevačka klisura</em> je bila utočište monasima koji su bežali od Osmanlijskog carstva, a dolazili su sa Balkana, sa <em>Svete Gore</em> i iz manastira <strong>Iviriona</strong>. Zbog toga je naziv <strong>Iverica</strong> dodat manastiru, jer se smatra da su ga osnovali monasi iz gruzijskog manastira. Turski popis sa kraja 16. veka pokazuje da je manastir tada bio u dobrom imovinskom stanju. Manastirski kompleks nalazi se na ulazu u <em>Gradištanski kanjon</em>. </p>

              <img srcSet={`${svetaPetkaIverica44} 450w, ${svetaPetkaIverica4} `} alt="Manastir Sveta Petka Iverica 4" loading="lazy" />

              <section lang="sr">
                <p> Ukazom kralja <strong>Aleksandra I Obrenovića</strong> od 19. februara 1901. godine, za starešinu manastira postavljen je vojni sveštenik. Nekoliko godina kasnije, manastir je dobio naziv „Kraljevski srpski vojni manastir <strong>Sv. Petka Iverica</strong>“. U istoriji srpske pravoslavne crkve, ovaj manastir je jedinstven primer „vojnog manastira“. </p>
              </section>


            </>
          )
          :
          (
            <>

              <h1>Monastery of Saint Petka Iverica</h1>

              <section lang="en">
                <p>
                  The monastery is located in the <em>Sićevo Gorge</em>, on the <em>Niš–Sofia</em> road. It was founded by monks from the Georgian monastery of <strong>Iviron</strong> on <em>Mount Athos</em>, which is why it bears the name <strong>Iverica</strong>. During the 14th century, many monks, fleeing the Ottoman invasion, found refuge in this beautiful gorge, where they formed a monastic community that included this monastery. The church of the monastery was built in the Serbian-Byzantine style, and its basic form is a single-nave structure with a semicircular altar apse.
                </p>
              </section>

              <img srcSet={`${svetaPetkaIverica22} 450w, ${svetaPetkaIverica2} `} alt="Monastery of Saint Petka Iverica 2" loading="lazy" />

              <section lang="en">
                <p>
                  Many interesting stories are associated with the church of <strong>Saint Petka</strong>. In 1896, while the engineering unit of the Serbian army was working on the construction of the railway and road through the <em>Sićevo Gorge</em>, news arrived that King <strong>Alexander I Obrenović</strong> had narrowly escaped death in France. As a sign of gratitude to God for the king's miraculous salvation, the army decided to build a monastery at that location.
                </p>
              </section>

              <div className="flexColumn" style={{ display: "flex", paddingBottom: "20px" }}>
                <img srcSet={`${svetaPetkaIverica33} 450w, ${svetaPetkaIverica3} `} alt="Monastery of Saint Petka Iverica 3" className="fruskaGoraClassImg" loading="lazy" />

                <p className="fruskaGoraParagh">
                  On the church portal, there is still a plaque with the inscription: “To the glory of the fortunate salvation of the supreme commander of the Royal Serbian Army, His Majesty King Alexander, this temple was rebuilt from the foundations, in gratitude to the Almighty for preserving the precious life of our exalted ruler of Serbia, and as a token of deep feelings toward his honorable person. Signed by officers and soldiers of the engineering corps.”
                </p>
              </div>

              <p>
                It is assumed that the church was built during the reign of <strong>Uroš the Weak</strong>, although its exact origin has not yet been fully researched. At that time, the <em>Sićevo Gorge</em> was a refuge for monks fleeing from the Ottoman Empire, coming from the Balkans, <em>Mount Athos</em>, and the monastery of <strong>Iviron</strong>. Because of this, the name <strong>Iverica</strong> was added to the monastery, as it is believed that it was founded by monks from the Georgian monastery. An Ottoman census from the late 16th century shows that the monastery was in good financial condition at that time. The monastery complex is located at the entrance to the <em>Gradištanski Canyon</em>.
              </p>

              <img srcSet={`${svetaPetkaIverica44} 450w, ${svetaPetkaIverica4} `} alt="Monastery of Saint Petka Iverica 4" loading="lazy" />

              <section lang="en">
                <p>
                  By decree of King <strong>Alexander I Obrenović</strong> on February 19, 1901, a military priest was appointed as the head of the monastery. A few years later, the monastery received the name “Royal Serbian Military Monastery of <strong>St. Petka Iverica</strong>.” In the history of the Serbian Orthodox Church, this monastery is a unique example of a “military monastery.”
                </p>
              </section>


            </>
          )
        }

      </div >
    </>
  );
};


export default ManastirSvetaPetkaIverica;