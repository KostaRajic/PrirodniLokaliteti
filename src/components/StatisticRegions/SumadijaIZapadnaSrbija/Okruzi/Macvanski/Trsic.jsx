/* eslint-disable react/no-unknown-property */
/* eslint-disable no-useless-escape */
import trsic1 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MacvanskiOkrug/Trsic/desktop/trsic1.jpg";
import trsic2 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MacvanskiOkrug/Trsic/desktop/trsic2.jpg";
import trsic3 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MacvanskiOkrug/Trsic/desktop/trsic3.jpg";
import trsic4 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MacvanskiOkrug/Trsic/desktop/trsic4.jpg";
import trsic5 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MacvanskiOkrug/Trsic/desktop/trsic5.jpg";
import trsic6 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MacvanskiOkrug/Trsic/desktop/trsic6.jpg";
import trsic11 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MacvanskiOkrug/Trsic/mobile/Mtrsic1.jpg";
import trsic22 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MacvanskiOkrug/Trsic/mobile/Mtrsic2.jpg";
import trsic33 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MacvanskiOkrug/Trsic/mobile/Mtrsic3.jpg";
import trsic44 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MacvanskiOkrug/Trsic/mobile/Mtrsic4.jpg";
import trsic55 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MacvanskiOkrug/Trsic/mobile/Mtrsic5.jpg";
import trsic66 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MacvanskiOkrug/Trsic/mobile/Mtrsic6.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { macvanskiOkrugPathRoutes } from "./MacvanskiOkrugPathRoutes";
import { useContextAuth } from "../../../../../Context";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const Trsic = () => {
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
            ? "Tršić – Rodno mesto Vuka Karadžića i srpske pismenosti | Serbia Wonders"
            : "Tršić – Birthplace of Vuk Karadžić and Serbian Literacy | Serbia Wonders"}
        </title>

        <meta
          name="description"
          content={
            switchLanguage === 'rs'
              ? "Tršić, rodno mesto Vuka Karadžića, jedno je od najznačajnijih kulturno-istorijskih mesta u Srbiji. Posetite Vukovu spomen-kuću, etno-kompleks, radionice starih zanata i uživajte u prirodi i tradiciji."
              : "Tršić, the birthplace of Vuk Karadžić, is one of Serbia’s most important cultural and historical sites. Visit Vuk’s memorial house, the ethno complex, traditional craft workshops, and enjoy nature and heritage."
          }
        />

        <meta
          name="keywords"
          content={
            switchLanguage === 'rs'
              ? "Tršić, Vuk Karadžić, Vukova kuća, Vukov sabor, etno selo Azbuka, Muzej jezika i pisma, crkva brvnara, srpska kultura, srpska tradicija, Loznica, Srbija"
              : "Tršić, Vuk Karadžić, Vuk’s House, Vukov Sabor, Azbuka ethno village, Museum of Language and Script, wooden church, Serbian culture, tradition, Loznica, Serbia"
          }
        />

        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/sumadija-tekst-modal/sumadija-i-zapadna-srbija/macvanski-okrug/trsic`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/sumadija-tekst-modal/sumadija-i-zapadna-srbija/macvanski-okrug/trsic"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/sumadija-tekst-modal/sumadija-i-zapadna-srbija/macvanski-okrug/trsic"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/sumadija-tekst-modal/sumadija-i-zapadna-srbija/macvanski-okrug/trsic"
        />

      </Helmet>



      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft className="arrowLeft" onClick={() => navigate(macvanskiOkrugPathRoutes.home(switchLanguage))} />
        <header></header>
        <img srcSet={`${trsic11} 450w, ${trsic1} `} alt="Tršić Vukova Kuća" />


        <h2>Tršić</h2>

        {switchLanguage === 'rs' ?
          (
            <>

              <section lang="sr">
                <p>
                  <strong>Tršić</strong>, seosko naselje <em>dinarskog tipa</em>, udaljeno je <strong>7 km</strong> od
                  <strong>Loznice</strong> na putu ka <strong>Valjevu</strong>. Poznato je kao <strong>rodno mesto</strong>
                  reformatora srpskog jezika, <strong>Vuka Stefanovića Karadžića</strong>. <em>Značajno mesto Tršić</em>, odnosno
                  spomen-kuća Vuka, prvi je <strong>muzej na otvorenom</strong> u Kraljevini Jugoslaviji. Podignut je
                  <strong>17. septembra 1933. godine</strong> na inicijativu Odbora za podizanje spomen-obeležja. Sredstva su
                  prikupljana širom zemlje, a najviše su doprineli <em>učenici</em> i <strong>Ministarstva prosvete i finansija</strong>.
                  Obnovljena kuća oslikava <em>život srpskog seljaka s kraja 19. veka</em> i Vukov <em>rad i misiju</em>.
                  U njenom dvorištu održan je i prvi <strong>Vukov sabor</strong>, manifestacija koja se i danas
                  neprekidno organizuje kao <strong>najstariji kulturni događaj</strong> ovog tipa u Srbiji.
                </p>
              </section>

              <img srcSet={`${trsic22} 450w, ${trsic2}`} alt="Tršić Vukova Kuća 2" />

              <section lang="sr">
                <p>
                  Kompleks zauzima <strong>5,3 hektara</strong>, a objekti su preneti iz okolnih sela radi očuvanja
                  <em>autentične arhitekture</em>. Danas se pod zaštitom nalazi <strong>35 objekata</strong> — kuće,
                  <strong>vajati</strong>, <strong>kačare</strong>, <strong>mlekare</strong>, <strong>vodenice</strong>, <strong>ambari</strong>, kao i
                  <strong>crkva-brvnara</strong> i <strong>magaza</strong>. U okviru kompleksa nalaze se:
                  <em>Muzej jezika i pisma</em>, <strong>Kuća pisaca</strong>, izložba <em>"Vuk i nauka"</em>, radionice starih zanata,
                  apartmani, suvenirnica i <strong>Vukova spomen-kuća</strong>. Ceo prostor odiše
                  <em>tradicijom i kulturnim duhom prošlih vremena</em>.
                </p>
              </section>

              <img srcSet={`${trsic66} 450w, ${trsic6}`} alt="Tršić Vukova Kuća 3" />

              <section lang="sr">
                <p>
                  <strong>Vukova spomen-kuća</strong> je <strong>1979. godine</strong> proglašena
                  <em>kulturnim dobrom od izuzetnog značaja</em>. Tokom <strong>1987. godine</strong>, povodom
                  <strong>200 godina od Vukovog rođenja</strong>, izgrađeni su novi objekti: <strong>Muzej Vukovih sabora</strong>,
                  <em>opančarska i krojačka radionica</em>, <strong>galerija</strong>, <em>biljna apoteka</em>,
                  <strong>knjižara</strong> i <strong>Kuća pisaca</strong>. Te godine u dvorištu je postavljen i dodatni
                  <strong>vajat</strong>. Godine <strong>2002.</strong> Tršić je dobio status <strong>znamenitog mesta</strong>,
                  a <strong>2004.</strong> sagrađena je <strong>crkva-brvnara posvećena Arhangelu Mihailu</strong>,
                  po uzoru na <em>crkve iz 19. veka</em>, čime je dodatno obogaćen <em>kulturno-istorijski značaj</em> kompleksa.
                </p>
              </section>

              <img srcSet={`${trsic33} 450w, ${trsic3}`} alt="Tršić Vukova Kuća 3" />

              <section lang="sr">
                <p>
                  Etno-kompleks Tršić, kao <strong>čuvar srpske baštine</strong>, uveliko ostvaruje
                  svoj <em>turistički potencijal</em>. Jedan od najposećenijih sadržaja je <strong>etno-selo Azbuka</strong>,
                  koje nudi <em>autentičan ugođaj podrinjskog kraja</em>. Spoj <em>očaravajuće prirode</em> i
                  <strong>gostoprimstva domaćina</strong> omogućava posetiocima da se oslobode
                  <em>stresa savremenog života</em> i uživaju u <strong>miru i tišini</strong>.
                </p>
              </section>

              <img srcSet={`${trsic44} 450w, ${trsic4}`} alt="Tršić Vukova Kuća 4" />

              <section lang="sr">
                <p>
                  <strong>Priroda Tršića</strong> nudi brojne mogućnosti za <em>šetnje</em>, <em>istraživanje</em> i
                  <em>uživanje u čistom vazduhu</em>. <strong>Etno-arhitektura</strong> se savršeno uklapa u ambijent,
                  čineći ovo mesto pravim <strong>kutkom mira i duhovnog odmora</strong>. Tršić nije samo
                  <em>kulturno nasleđe</em>, već i <em>oaza povezanosti sa prirodom</em>.
                </p>
              </section>

              <img srcSet={`${trsic55} 450w, ${trsic5}`} alt="Tršić Vukova Kuća 5" />

              <section lang="sr">
                <p>
                  Svake godine <strong>Vukovu kuću</strong> posećuju <strong>deca i nastavnici</strong> iz svih krajeva Srbije,
                  pretvarajući Tršić u <em>veselo i živopisno mesto</em>. Etno-kompleks je otvoren tokom cele godine,
                  a posetioci mogu <em>šetati stazama uz rečicu Žeraviju</em> i uživati u <em>hladu krošnji</em> koje
                  <strong>okružuju ovo autentično selo</strong>. Tršić ostaje <strong>važna destinacija za sve koji žele
                    da spoje znanje, tradiciju i prirodu</strong>.
                </p>
              </section>


            </>
          )
          :
          (
            <>

              <section lang="en">
                <p>
                  <strong>Tršić</strong>, a rural settlement of the <em>Dinaric type</em>, is located <strong>7 km</strong> from
                  <strong>Loznica</strong> on the road to <strong>Valjevo</strong>. It is known as the <strong>birthplace</strong>
                  of the Serbian language reformer, <strong>Vuk Stefanović Karadžić</strong>. The <em>Significant Place Tršić</em>,
                  namely Vuk’s memorial house, was the first <strong>open-air museum</strong> in the Kingdom of Yugoslavia. It was
                  established on <strong>September 17, 1933</strong> at the initiative of the Committee for raising the monument.
                  Funds were collected throughout the country, with the greatest contributions from <em>students</em> and the
                  <strong>Ministries of Education and Finance</strong>. The restored house reflects the <em>life of a Serbian peasant at the end of the 19th century</em>
                  and Vuk’s <em>work and mission</em>. The first <strong>Vuk Gathering</strong> was held in its yard, a festival
                  that is still held continuously as the <strong>oldest cultural event</strong> of its kind in Serbia.
                </p>
              </section>

              <img srcSet={`${trsic22} 450w, ${trsic2}`} alt="Tršić Vuk House 2" />

              <section lang="en">
                <p>
                  The complex covers <strong>5.3 hectares</strong>, and its buildings were relocated from surrounding villages to preserve
                  the <em>authentic architecture</em>. Today, <strong>35 buildings</strong> are protected — houses,
                  <strong>vajats</strong>, <strong>kačaras</strong>, <strong>dairies</strong>, <strong>watermills</strong>, <strong>barns</strong>, as well as
                  a <strong>log church</strong> and a <strong>magazine</strong>. The complex includes:
                  the <em>Museum of Language and Script</em>, the <strong>House of Writers</strong>, the exhibition <em>"Vuk and Science"</em>,
                  workshops for traditional crafts, guest apartments, a souvenir shop, and the <strong>Vuk Memorial House</strong>.
                  The entire area exudes <em>tradition and the cultural spirit of past times</em>.
                </p>
              </section>

              <img srcSet={`${trsic66} 450w, ${trsic6}`} alt="Tršić Vuk House 3" />

              <section lang="en">
                <p>
                  The <strong>Vuk Memorial House</strong> was declared a <em>cultural monument of exceptional importance</em> in
                  <strong>1979</strong>. In <strong>1987</strong>, marking the <strong>200th anniversary of Vuk’s birth</strong>,
                  new structures were built: the <strong>Museum of Vuk’s Gatherings</strong>,
                  <em>opanak (traditional shoe) and tailoring workshops</em>, a <strong>gallery</strong>, a <em>herbal pharmacy</em>,
                  a <strong>bookstore</strong>, and the <strong>House of Writers</strong>. That year, an additional
                  <strong>vajat</strong> was added to the yard. In <strong>2002</strong>, Tršić was designated a
                  <strong>notable place</strong>, and in <strong>2004</strong>, the <strong>log church dedicated to Archangel Michael</strong> was built,
                  modeled after <em>19th-century churches</em>, further enriching the <em>cultural-historical significance</em> of the complex.
                </p>
              </section>

              <img srcSet={`${trsic33} 450w, ${trsic3}`} alt="Tršić Vuk House 3" />

              <section lang="en">
                <p>
                  The Tršić ethno-complex, as a <strong>guardian of Serbian heritage</strong>, is increasingly realizing
                  its <em>tourism potential</em>. One of the most visited attractions is the <strong>Azbuka ethno-village</strong>,
                  offering an <em>authentic experience of the Podrinje region</em>. The combination of <em>captivating nature</em> and
                  <strong>hospitality of the locals</strong> allows visitors to relieve
                  <em>the stresses of modern life</em> and enjoy <strong>peace and quiet</strong>.
                </p>
              </section>

              <img srcSet={`${trsic44} 450w, ${trsic4}`} alt="Tršić Vuk House 4" />

              <section lang="en">
                <p>
                  <strong>The nature of Tršić</strong> offers numerous opportunities for <em>walking</em>, <em>exploring</em>, and
                  <em>enjoying fresh air</em>. The <strong>ethno-architecture</strong> perfectly fits the environment,
                  making this place a true <strong>corner of peace and spiritual rest</strong>. Tršić is not only
                  <em>a cultural heritage site</em> but also <em>a haven of connection with nature</em>.
                </p>
              </section>

              <img srcSet={`${trsic55} 450w, ${trsic5}`} alt="Tršić Vuk House 5" />

              <section lang="en">
                <p>
                  Every year, the <strong>Vuk Memorial House</strong> is visited by <strong>children and teachers</strong> from all parts of Serbia,
                  turning Tršić into a <em>lively and colorful place</em>. The ethno-complex is open year-round,
                  and visitors can <em>walk the trails along the Žeravija stream</em> and enjoy the <em>shade of the tree canopy</em> that
                  <strong>surrounds this authentic village</strong>. Tršić remains an <strong>important destination for all who want
                    to combine knowledge, tradition, and nature</strong>.
                </p>
              </section>


            </>
          )}
      </div>
    </>
  );
};


export default Trsic;