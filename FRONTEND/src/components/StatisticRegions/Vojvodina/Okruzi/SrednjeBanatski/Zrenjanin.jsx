/* eslint-disable react/no-unknown-property */
import zrenjanin1 from "../../../../../assets/images/Vojvodina/SrednjeBanatskiOkrug/Zrenjanin/desktop/zrenjanin4.jpg";
import zrenjanin2 from "../../../../../assets/images/Vojvodina/SrednjeBanatskiOkrug/Zrenjanin/desktop/zrenjanin2.jpg";
import zrenjanin3 from "../../../../../assets/images/Vojvodina/SrednjeBanatskiOkrug/Zrenjanin/desktop/zrenjanin3.jpg";
import zrenjanin4 from "../../../../../assets/images/Vojvodina/SrednjeBanatskiOkrug/Zrenjanin/desktop/zrenjanin5.jpg";
import zrenjanin5 from "../../../../../assets/images/Vojvodina/SrednjeBanatskiOkrug/Zrenjanin/desktop/zrenjanin6.jpg";
import zrenjanin6 from "../../../../../assets/images/Vojvodina/SrednjeBanatskiOkrug/Zrenjanin/desktop/zrenjanin7.jpg";
import zrenjanin11 from "../../../../../assets/images/Vojvodina/SrednjeBanatskiOkrug/Zrenjanin/mobile/Mzrenjanin4.jpg";
import zrenjanin22 from "../../../../../assets/images/Vojvodina/SrednjeBanatskiOkrug/Zrenjanin/mobile/Mzrenjanin2.jpg";
import zrenjanin33 from "../../../../../assets/images/Vojvodina/SrednjeBanatskiOkrug/Zrenjanin/mobile/Mzrenjanin3.jpg";
import zrenjanin44 from "../../../../../assets/images/Vojvodina/SrednjeBanatskiOkrug/Zrenjanin/mobile/Mzrenjanin5.jpg";
import zrenjanin55 from "../../../../../assets/images/Vojvodina/SrednjeBanatskiOkrug/Zrenjanin/mobile/Mzrenjanin6.jpg";
import zrenjanin66 from "../../../../../assets/images/Vojvodina/SrednjeBanatskiOkrug/Zrenjanin/mobile/Mzrenjanin7.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { srednjeBanatskiPathRoutes } from "./SrednjeBanatskiPathRoutes";
import { useContextAuth } from "../../../../../Context";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const Zrenjanin = () => {
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
            ? 'Zrenjanin | Grad mostova, kulture i prirode | Serbia Wonders'
            : 'Zrenjanin | City of Bridges, Culture, and Nature | Serbia Wonders'}
        </title>

        <meta
          name="description"
          content={
            switchLanguage === 'rs'
              ? 'Zrenjanin, grad mostova na Begeju, nudi bogato kulturno nasleđe, znamenitosti poput katedrale, muzeja i parkova, te prirodna blaga poput Carske bare.'
              : 'Zrenjanin, the city of bridges on the Begej River, offers rich cultural heritage, landmarks like the cathedral, museum and parks, as well as natural treasures like Carska Bara.'
          }
        />

        <meta
          name="keywords"
          content={
            switchLanguage === 'rs'
              ? 'Zrenjanin, grad na Begeju, mostovi Zrenjanina, Katedrala Sv. Ivana Nepomuka, Narodni muzej Zrenjanin, Županijski park, Carska bara, priroda Banata, Vojvodina turizam'
              : 'Zrenjanin, city on the Begej, Zrenjanin bridges, Cathedral of St. John of Nepomuk, Zrenjanin National Museum, County Park, Carska Bara, Banat nature, Vojvodina tourism'
          }
        />

        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/srednje-banatski/zrenjanin`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/srednje-banatski/zrenjanin"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/srednje-banatski/zrenjanin"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/srednje-banatski/zrenjanin"
        />
      </Helmet>


      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft className="arrowLeft" onClick={() => navigate(srednjeBanatskiPathRoutes.home(switchLanguage))} />
        <header></header>
        <img srcSet={`${zrenjanin11} 450w, ${zrenjanin1} `} alt="Zrenjanin 1" />

        <h1>Zrenjanin</h1>

        {switchLanguage === 'rs' ?
          (

            <>
              <section lang="sr">
                <p>
                  <strong>Zrenjanin</strong>, poznat je i kao <em>grad na Begeju</em>, grad mostova, grad sporta, kao multinacionalna i multikonfesionalna sredina, zanimljive arhitekture, grad živopisnog okruženja, sa četiri reke i kanalskom mrežom DTD, posećenih turističkih manifestacija...
                  <strong>Posetite nas i uverite se!</strong>
                </p>
              </section>

              <img srcSet={`${zrenjanin22} 450w, ${zrenjanin2} `} alt="Katedrala Sv. Ivana Nepomuka" />

              <section lang="sr">
                <p>
                  <strong>Katedrala Sv. Ivana Nepomuka</strong> u Zrenjaninu je jedna od najznačajnijih religioznih i arhitektonskih građevina u gradu. Smeštena je u centru Zrenjanina, na glavnom trgu, i predstavlja dominirajući spomenik. Katedrala je izgrađena u <em>neogotičkom stilu</em>, sa visokim tornjem koji se uzdiže nad gradom, a njena konstrukcija započela je <strong>1903. godine</strong> i završena <strong>1909. godine</strong>. Posvećena je sv. Ivanu Nepomuku, češkom svetitelju i mučeniku, koji je <em>zaštitnik Beograda</em> i jedan od najpoznatijih svetitelja u katoličkoj crkvi. Unutrašnjost katedrale je uređena s prelepim vitražima i skulpturama koje dodaju na veličanstvenosti ovog hrama. Katedrala je važan deo istorije i duhovnog života Zrenjanina, kao i simbol <strong>verske tolerancije</strong>, budući da je grad <em>multinacionalan</em>.
                </p>
              </section>

              <img srcSet={`${zrenjanin33} 450w, ${zrenjanin3} `} alt="Narodni muzej Zrenjanin" />

              <section lang="sr">
                <p>
                  <strong>Narodni muzej Zrenjanin</strong> otvorio je svoja vrata za posetioce davne <strong>1911. godine</strong>. Zavičajnog tipa i kompleksnog karaktera, Muzej čuva bogato kulturno nasleđe Banata iz oblasti <em>prirode</em>, <em>arheologije</em>, <em>etnologije</em>, <em>umetnosti</em> i <em>istorije</em>. Najreprezentativniji predmeti nalaze se na stalnoj postavci, a Muzej raspolaže i sa tri izložbena prostora u prizemlju zgrade gde se smenjuju tematske izložbe i odigravaju prateći programi.
                </p>
              </section>

              <img srcSet={`${zrenjanin44} 450w, ${zrenjanin4} `} alt="Županijski park" />

              <section lang="sr">
                <p>
                  <strong>Županijski park</strong>, poznat i kao <em>Gradska bašta</em>, jedan je od najlepših parkova u Zrenjaninu. Smešten je u centru grada i predstavlja oazu zelenila i mira. Park je osnovan u <strong>19. veku</strong>, a njegovo uređenje obuhvata širok spektar biljnih vrsta, uključujući <em>drveće</em>, <em>cvetne aranžmane</em> i <em>bašte</em>. U Županijskom parku nalazi se i veoma lep paviljon, kao i nekoliko statua i drugih dekorativnih elemenata koji dodaju na lepoti ovog prostora. Park je popularno mesto za šetnje i opuštanje, ali i za različite kulturne i društvene događaje. Zahvaljujući svojoj lokaciji i značaju, Županijski park je jedan od simbola Zrenjanina i važan deo njegovog gradskog života.
                </p>
              </section>

              <img
                srcSet={`${zrenjanin55} 450w, ${zrenjanin5} `}
                alt="Zrenjanin 5"
              />

              <section lang="sr">
                <p>
                  <strong>Zrenjanin</strong> je često nazivana <em>"grad mostova"</em> zbog velikog broja mostova koji prelaze reke i kanale u gradu i okolini, što mu daje poseban karakter i lepotu. Mostovi su ne samo funkcionalni elementi, već i važan deo gradske istorije i arhitekture, čineći Zrenjanin prepoznatljivim. Izraz <em>"Mala Amerika"</em> se ponekad koristi kao simbol Zrenjanina zbog njegove industrijske prošlosti i razvoja koji je podsećao na američke gradove iz <strong>19. i 20. veka</strong>. Ovaj nadimak upućuje na brzi ekonomski napredak i urbanizaciju, koji su oblikovali gradski život i atmosferu Zrenjanina.
                </p>
              </section>

              <img
                srcSet={`${zrenjanin66} 450w, ${zrenjanin6} `}
                alt="Zrenjanin 6"
              />

              <section lang="sr">
                <p>
                  <strong>Carska bara</strong> je jedno od najznačajnijih prirodnih dobara u Zrenjaninu i okolini, a takođe i jedno od najvećih močvarnih područja u Srbiji. Nalazi se na <em>jugoistočnom delu grada</em> i predstavlja jedan od najznačajnijih prirodnih rezervoara biodiverziteta u ovom delu Evrope. Ovo zaštićeno područje je dom velikog broja biljnih i životinjskih vrsta, među kojima su mnoge vrste ptica, kao što su <em>patke</em>, <em>labudovi</em> i razne vodene ptice, što ga čini popularnim mestom za ornitologe i ljubitelje prirode. Pored ornitološke vrednosti, ova bara ima i značajnu ulogu u zaštiti voda i regulisanju mikro-klime regiona. Carska bara je takođe popularno mesto za rekreaciju, šetnje i posmatranje prirode, a njene lepote privlače brojne posetioce koji žele da uživaju u tišini i mirnom okruženju.
                </p>
              </section>

            </>
          )
          :
          (
            <>
              <section lang="en">
                <p>
                  <strong>Zrenjanin</strong> is also known as the <em>city on the Begej</em>, city of bridges, city of sports, as a multinational and multi-confessional environment, interesting architecture, a city with a vivid environment, with four rivers and the DTD canal network, popular tourist events...
                  <strong>Visit us and see for yourself!</strong>
                </p>
              </section>

              <img srcSet={`${zrenjanin22} 450w, ${zrenjanin2} `} alt="Cathedral of St. John of Nepomuk" />

              <section lang="en">
                <p>
                  <strong>The Cathedral of St. John of Nepomuk</strong> in Zrenjanin is one of the most significant religious and architectural buildings in the city. It is located in the center of Zrenjanin, on the main square, and represents a dominant monument. The cathedral was built in the <em>Neo-Gothic style</em>, with a tall tower rising above the city, and its construction began in <strong>1903</strong> and was completed in <strong>1909</strong>. It is dedicated to St. John of Nepomuk, a Czech saint and martyr, who is the patron saint of Belgrade and one of the most famous saints in the Catholic Church. The interior of the cathedral is decorated with beautiful stained glass and sculptures that add to the grandeur of this temple. The cathedral is an important part of the history and spiritual life of Zrenjanin, as well as a symbol of <strong>religious tolerance</strong>, since the city is <em>multinational</em>.
                </p>
              </section>

              <img srcSet={`${zrenjanin33} 450w, ${zrenjanin3} `} alt="National Museum Zrenjanin" />

              <section lang="en">
                <p>
                  <strong>The National Museum Zrenjanin</strong> opened its doors to visitors back in <strong>1911</strong>. Of a regional type and complex character, the Museum preserves the rich cultural heritage of Banat in the fields of <em>nature</em>, <em>archaeology</em>, <em>ethnology</em>, <em>art</em>, and <em>history</em>. The most representative items are on permanent display, and the Museum also has three exhibition spaces on the ground floor where thematic exhibitions alternate and accompanying programs take place.
                </p>
              </section>

              <img srcSet={`${zrenjanin44} 450w, ${zrenjanin4} `} alt="County Park" />

              <section lang="en">
                <p>
                  <strong>County Park</strong>, also known as the <em>City Garden</em>, is one of the most beautiful parks in Zrenjanin. It is located in the city center and represents an oasis of greenery and peace. The park was established in the <strong>19th century</strong>, and its landscaping includes a wide range of plant species, including <em>trees</em>, <em>flower arrangements</em>, and <em>gardens</em>. The County Park also features a very beautiful pavilion, as well as several statues and other decorative elements that add to the beauty of this space. The park is a popular place for walks and relaxation, as well as for various cultural and social events. Thanks to its location and importance, the County Park is one of the symbols of Zrenjanin and an important part of its urban life.
                </p>
              </section>

              <img srcSet={`${zrenjanin55} 450w, ${zrenjanin5} `} alt="Zrenjanin 5" />

              <section lang="en">
                <p>
                  <strong>Zrenjanin</strong> is often called the <em>"city of bridges"</em> due to the large number of bridges crossing the rivers and canals in the city and surrounding area, which gives it a special character and beauty. The bridges are not only functional elements but also an important part of the city's history and architecture, making Zrenjanin recognizable. The term <em>"Little America"</em> is sometimes used as a symbol of Zrenjanin because of its industrial past and development that resembled American cities from the <strong>19th and 20th centuries</strong>. This nickname points to the rapid economic progress and urbanization that shaped the city's life and atmosphere.
                </p>
              </section>

              <img srcSet={`${zrenjanin66} 450w, ${zrenjanin6} `} alt="Zrenjanin 6" />

              <section lang="en">
                <p>
                  <strong>Carska bara</strong> is one of the most significant natural treasures in Zrenjanin and its surroundings, as well as one of the largest swamp areas in Serbia. It is located in the <em>southeastern part of the city</em> and represents one of the most important natural reservoirs of biodiversity in this part of Europe. This protected area is home to a large number of plant and animal species, including many bird species such as <em>ducks</em>, <em>swans</em>, and various waterfowl, making it a popular place for ornithologists and nature lovers. Besides its ornithological value, this marsh plays an important role in water protection and regulation of the region's microclimate. Carska bara is also a popular place for recreation, walks, and nature observation, and its beauties attract numerous visitors who want to enjoy the silence and peaceful environment.
                </p>
              </section>


            </>
          )}
      </div>
    </>
  );
};


export default Zrenjanin;