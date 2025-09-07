/* eslint-disable react/no-unknown-property */
import beljanica1 from "../../../../../assets/images/JuznaIIstocnaSrbija/BranicevskiOkrug/PlaninaBeljanica/desktop/beljanica1.jpg";
import beljanica2 from "../../../../../assets/images/JuznaIIstocnaSrbija/BranicevskiOkrug/PlaninaBeljanica/desktop/beljanica2.jpg";
import beljanica3 from "../../../../../assets/images/JuznaIIstocnaSrbija/BranicevskiOkrug/PlaninaBeljanica/desktop/beljanica3.jpg";
import beljanica4 from "../../../../../assets/images/JuznaIIstocnaSrbija/BranicevskiOkrug/PlaninaBeljanica/desktop/beljanica4.jpg";
import beljanica5 from "../../../../../assets/images/JuznaIIstocnaSrbija/BranicevskiOkrug/PlaninaBeljanica/desktop/beljanica5.jpg";
import beljanica11 from "../../../../../assets/images/JuznaIIstocnaSrbija/BranicevskiOkrug/PlaninaBeljanica/mobile/beljanicaM1.jpg";
import beljanica22 from "../../../../../assets/images/JuznaIIstocnaSrbija/BranicevskiOkrug/PlaninaBeljanica/mobile/beljanicaM2.jpg";
import beljanica33 from "../../../../../assets/images/JuznaIIstocnaSrbija/BranicevskiOkrug/PlaninaBeljanica/mobile/beljanicaM3.jpg";
import beljanica44 from "../../../../../assets/images/JuznaIIstocnaSrbija/BranicevskiOkrug/PlaninaBeljanica/mobile/beljanicaM4.jpg";
import beljanica55 from "../../../../../assets/images/JuznaIIstocnaSrbija/BranicevskiOkrug/PlaninaBeljanica/mobile/beljanicaM5.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { branicevskiOkrugPathRoutes } from "./BranicevskiOkrugPathRoutes";
import { useContextAuth } from '../../../../../Context'
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const PlaninaBeljanica = () => {
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

        <title>{switchLanguage === 'rs' ? "Planina Beljanica – Kraški biser Istočne Srbije | Serbia Wonders" : "Beljanica Mountain – The Karst Jewel of Eastern Serbia | Serbia Wonders"}</title>
        <meta
          name="description"
          content={switchLanguage === 'rs' ?
            "Planina Beljanica je jedna od najvećih krečnjačkih planina u istočnoj Srbiji. Poznata po speleološkim objektima, pećinama, izvorima i prirodnim lepotama kao što su Resavska pećina, Velika Atula i Vrelo Mlave."
            :
            "Beljanica is one of the largest limestone mountains in Eastern Serbia. Known for its caves, karst terrain, and pristine springs such as Resava Cave, Velika Atula, and Mlava Spring."
          }
        />
        <meta
          name="keywords"
          content={switchLanguage === 'rs' ?
            "Planina Beljanica, istočna Srbija, Resavska pećina, Velika Atula, Vrelo Mlave, speleologija, prirodne lepote, kraški reljef, kolibe, kanjoni, Resava, turizam u Srbiji"
            :
            "Beljanica Mountain, Eastern Serbia, Resava Cave, Velika Atula, Mlava Spring, speleology, nature, karst landscape, tourism in Serbia, Resava river, hiking"
          }
        />
        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/branicevski-okrug/planina-beljanica`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/branicevski-okrug/planina-beljanica"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/branicevski-okrug/planina-beljanica"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/branicevski-okrug/planina-beljanica"
        />


      </Helmet>



      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft
          className="arrowLeft"
          onClick={() => navigate(branicevskiOkrugPathRoutes.home(switchLanguage))}
        />
        <header></header>
        <img srcSet={`${beljanica22} 450w, ${beljanica2} `} alt="Planina Beljanica 1" loading="lazy" />

        {switchLanguage === 'rs' ?
          (
            <>

              <h2>Planina Beljanica</h2>

              <section lang="sr">
                <p>
                  <strong>Beljanica</strong> je jedna od najvećih krečnjačkih planina <strong>istočne Srbije</strong>.
                  Nalazi se između sliva reke <strong>Mlave</strong> i <strong>Žagubičke kotline</strong> na severu
                  i sliva reke <strong>Resave</strong> na jugu. Proteže se od zapada ka istoku u dužini
                  od <strong>24 km</strong>, sa prosečnom širinom od oko <strong>12 km</strong>. Obuhvata površinu
                  od <strong>309 km²</strong>, od čega <strong>246 km²</strong> čini izražen <em>kraški reljef</em> u krečnjacima.
                  <br /><br />
                  Severni deo planine je <em>visoravan</em> sa brojnim vrtačama, uvalama i slepim dolinama
                  (<strong>Busovata</strong>, <strong>Rečke</strong> sa ponorom dubokim <strong>150 m</strong>). Južni deo čini stjenovit,
                  krečnjački greben <strong>Beljanica</strong> (<strong>1.339 m</strong>), koji strmim odsekom pada u klisuru
                  reke <strong>Čemernice</strong>, desne pritoke reke Resave. U grebenu se nalaze mnoge pećine,
                  od kojih je najveća <strong>Velika Atula</strong> (<strong>560 m</strong>). U podnožju grebena nalaze se
                  <strong>Malo</strong> i <strong>Veliko vrelo</strong>, dok se u podnožju severnog oboda nalazi <strong>Vrelo Mlave</strong>
                  kod Žagubice.
                </p>
              </section>

              <img srcSet={`${beljanica11} 450w, ${beljanica1}`} alt="Planina Beljanica 2" loading="lazy" />

              <section lang="sr">
                <p>
                  <strong>Beljanica</strong> je planina bogata vodom, sa brojnim podzemnim i površinskim tokovima.
                  Posebno su zanimljivi <em>površinski tokovi</em> sa velikim brojem reka i potoka <strong>ponornica</strong>.
                  Voda u svim tokovima je <em>čista</em> i može se piti direktno iz vodotoka.
                  <br /><br />
                  Beljanica je u <strong>speleološkim krugovima</strong> poznata kao izuzetno bogata speleološkim objektima.
                  Najpoznatija pećina je <strong>Resavska pećina</strong>, koja je uređena za pojedinačne i grupne posete
                  i otvorena tokom cele godine. Pored nje, na Beljanici postoji veliki broj pećina
                  bogatih svim vrstama <em>pećinskog nakita</em>.
                </p>
              </section>

              <img srcSet={`${beljanica33} 450w, ${beljanica3}`} alt="Planina Beljanica 3" loading="lazy" />

              <section lang="sr">
                <p>
                  Pećine izuzetne lepote su <strong>Jelarče</strong>, <strong>Pionirska pećina</strong>, <strong>Vlaška pećina</strong>
                  i <strong>Ivkov ponor</strong>, a posebno se izdvajaju <strong>Izviđačka pećina</strong>, koja po vremenu nastanka
                  i bogatstvu nakitom ne zaostaje za <strong>Resavskom pećinom</strong>, i <strong>Velika Atula</strong>,
                  kao <em>speleološki objekat od posebnog značaja</em>.
                </p>
              </section>

              <img srcSet={`${beljanica44} 450w, ${beljanica4}`} alt="Planina Beljanica 4" loading="lazy" />

              <section lang="sr">
                <p>
                  Zapravo, <strong>Velika Atula</strong> nije do kraja istražena, a najnovija istraživanja su otkrila
                  postojanje <em>produžetka zapadnog kanala</em>. U poslednjim istraživanjima <strong>pećinske faune</strong>,
                  otkrivene su posebne vrste <strong>nepigmentisanih stonoga</strong>, koje su nova vrsta za nauku.
                  <br /><br />
                  Lepotu planine Beljanice upotpunjuju <strong>kanjoni</strong> reka <strong>Resave</strong> i <strong>Kločanice</strong>.
                  <br /><br />
                  Na visinama preko <strong>700 m</strong> nalazi se veliki broj <strong>koliba</strong> u kojima žive meštani
                  okolnih sela, koji prave <em>sir izuzetnog kvaliteta</em>.
                </p>
              </section>

              <img srcSet={`${beljanica55} 450w, ${beljanica5}`} alt="Planina Beljanica 5" loading="lazy" />

              <section lang="sr">
                <p>
                  Vršni deo planine čine <strong>pašnjaci</strong>. Sam vrh (<strong>1.339 m</strong>) je <em>stenovit</em>,
                  a zbog svoje <em>beline</em>, iznad padina prekrivenih <strong>bukovim</strong> i <strong>hrastovim šumama</strong>,
                  pretpostavlja se da je planina po tome i dobila ime.
                  Na južnoj padini planine nalazi se <strong>vodopad Veliki buk</strong>.
                  <br /><br />
                  Mikroklima Beljanice je <em>čista kontinentalna</em>, pa je zimi neophodna <strong>zimska oprema</strong>
                  za motorna vozila.
                </p>
              </section>


            </>
          )
          :
          (
            <>

              <h2>Mount Beljanica</h2>

              <section lang="en">
                <p>
                  <strong>Beljanica</strong> is one of the largest limestone mountains in <strong>eastern Serbia</strong>.
                  It is located between the <strong>Mlava River</strong> basin and the <strong>Žagubica Basin</strong> to the north,
                  and the <strong>Resava River</strong> basin to the south. It stretches from west to east
                  for <strong>24 km</strong>, with an average width of about <strong>12 km</strong>. It covers an area
                  of <strong>309 km²</strong>, of which <strong>246 km²</strong> is characterized by a prominent <em>karst relief</em> in limestone.
                  <br /><br />
                  The northern part of the mountain is a <em>plateau</em> with numerous sinkholes, depressions, and blind valleys
                  (<strong>Busovata</strong>, <strong>Rečke</strong> with a sinkhole <strong>150 m</strong> deep). The southern part consists of the rocky,
                  limestone ridge <strong>Beljanica</strong> (<strong>1,339 m</strong>), which descends steeply into the gorge of the
                  <strong>Čemernica River</strong>, a right tributary of the Resava. Many caves are located within the ridge,
                  the largest being <strong>Velika Atula</strong> (<strong>560 m</strong>). At the base of the ridge are
                  <strong>Malo</strong> and <strong>Veliko Vrelo</strong>, while at the base of the northern edge is the <strong>Mlava Spring</strong>
                  near Žagubica.
                </p>
              </section>

              <img srcSet={`${beljanica11} 450w, ${beljanica1}`} alt="Mount Beljanica 2" loading="lazy" />

              <section lang="en">
                <p>
                  <strong>Beljanica</strong> is a water-rich mountain, with numerous underground and surface watercourses.
                  Of particular interest are the <em>surface flows</em> with many rivers and <strong>sinking streams</strong>.
                  Water in all these flows is <em>clean</em> and can be drunk directly from the stream.
                  <br /><br />
                  Beljanica is well known in <strong>speleological circles</strong> for its abundance of cave systems.
                  The most famous is the <strong>Resava Cave</strong>, which is arranged for individual and group visits
                  and is open throughout the year. In addition to Resava, Beljanica has many caves
                  rich in all types of <em>cave formations</em>.
                </p>
              </section>

              <img srcSet={`${beljanica33} 450w, ${beljanica3}`} alt="Mount Beljanica 3" loading="lazy" />

              <section lang="en">
                <p>
                  Caves of exceptional beauty include <strong>Jelarče</strong>, <strong>Pionirska Cave</strong>, <strong>Vlaška Cave</strong>,
                  and <strong>Ivkov Ponor</strong>, with special mention of the <strong>Izviđačka Cave</strong>, which rivals
                  the <strong>Resava Cave</strong> in age and the richness of its formations, and <strong>Velika Atula</strong>,
                  as a <em>speleological site of special importance</em>.
                </p>
              </section>

              <img srcSet={`${beljanica44} 450w, ${beljanica4}`} alt="Mount Beljanica 4" loading="lazy" />

              <section lang="en">
                <p>
                  In fact, <strong>Velika Atula</strong> is not yet fully explored, and recent expeditions have discovered
                  a <em>continuation of the western channel</em>. Recent studies of the <strong>cave fauna</strong>
                  revealed unique species of <strong>non-pigmented centipedes</strong>, which are new to science.
                  <br /><br />
                  The beauty of Mount Beljanica is further enhanced by the <strong>gorges</strong> of the
                  <strong>Resava</strong> and <strong>Kločanica</strong> rivers.
                  <br /><br />
                  At elevations above <strong>700 m</strong>, there are numerous <strong>shepherd huts</strong>
                  where local villagers live and produce <em>high-quality cheese</em>.
                </p>
              </section>

              <img srcSet={`${beljanica55} 450w, ${beljanica5}`} alt="Mount Beljanica 5" loading="lazy" />

              <section lang="en">
                <p>
                  The summit area of the mountain consists of <strong>pastures</strong>. The peak itself (<strong>1,339 m</strong>) is <em>rocky</em>,
                  and due to its <em>whiteness</em>, rising above slopes covered in <strong>beech</strong> and <strong>oak forests</strong>,
                  it is believed that the mountain was named after this appearance.
                  On the southern slope of the mountain lies the <strong>Veliki Buk Waterfall</strong>.
                  <br /><br />
                  Beljanica’s microclimate is <em>purely continental</em>, and during winter <strong>winter equipment</strong>
                  for motor vehicles is necessary.
                </p>
              </section>


            </>
          )}

      </div>

    </>
  );
};


export default PlaninaBeljanica;