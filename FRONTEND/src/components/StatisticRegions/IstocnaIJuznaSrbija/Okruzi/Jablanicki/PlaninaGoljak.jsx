/* eslint-disable react/no-unknown-property */
import goljak1 from "../../../../../assets/images/JuznaIIstocnaSrbija/JablanickiOkrug/Goljak/desktop/goljak1.jpg";
import goljak2 from "../../../../../assets/images/JuznaIIstocnaSrbija/JablanickiOkrug/Goljak/desktop/goljak2.jpg";
import goljak3 from "../../../../../assets/images/JuznaIIstocnaSrbija/JablanickiOkrug/Goljak/desktop/goljak3.jpg";
import goljak4 from "../../../../../assets/images/JuznaIIstocnaSrbija/JablanickiOkrug/Goljak/desktop/goljak4.jpg";
import goljak5 from "../../../../../assets/images/JuznaIIstocnaSrbija/JablanickiOkrug/Goljak/desktop/goljak5.jpg";
import goljak6 from "../../../../../assets/images/JuznaIIstocnaSrbija/JablanickiOkrug/Goljak/desktop/goljak6.jpg";
import goljak11 from "../../../../../assets/images/JuznaIIstocnaSrbija/JablanickiOkrug/Goljak/mobile/goljakM1.jpg";
import goljak22 from "../../../../../assets/images/JuznaIIstocnaSrbija/JablanickiOkrug/Goljak/mobile/goljakM2.jpg";
import goljak33 from "../../../../../assets/images/JuznaIIstocnaSrbija/JablanickiOkrug/Goljak/mobile/goljakM3.jpg";
import goljak44 from "../../../../../assets/images/JuznaIIstocnaSrbija/JablanickiOkrug/Goljak/mobile/goljakM4.jpg";
import goljak55 from "../../../../../assets/images/JuznaIIstocnaSrbija/JablanickiOkrug/Goljak/mobile/goljakM5.jpg";
import goljak66 from "../../../../../assets/images/JuznaIIstocnaSrbija/JablanickiOkrug/Goljak/mobile/goljakM6.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { jablanickiOkrugPathRoutes } from "./JablanickiOkrugPathRoutes";
import { useContextAuth } from "../../../../../Context";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const PlaninaGoljak = () => {
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

        <title>{switchLanguage === 'rs' ? "Planina Goljak – Ćorov vodopad, Lisica i Sijarinska banja | Serbia Wonders" : "Goljak Mountain – Ćorov Waterfall, Lisica, and Sijarinska Spa | Serbia Wonders"}</title>
        <meta
          name="description"
          content={switchLanguage === 'rs' ?
            "Planina Goljak na granici Srbije i Kosova poznata je po vrhu Lisica, Ćorovom vodopadu i Sijarinskoj banji sa gejzirima. Idealna je za planinarenje, odmor i prirodne atrakcije."
            :
            "Goljak Mountain, on the border of Serbia and Kosovo, is known for Lisica Peak, the Ćorov Waterfall, and Sijarinska Spa with Europe’s only thermal geysers. A perfect place for hiking and nature."
          }
        />
        <meta
          name="keywords"
          content={switchLanguage === 'rs' ?
            "Planina Goljak, Lisica, Ćorov vodopad, Sijarinska banja, Medveđa, Mrkonjski vis, Kosovo, Veternica, Južna Srbija, gejzir, banjski turizam, prirodne lepote, planinarenje, turističke atrakcije"
            :
            "Goljak Mountain, Lisica Peak, Ćorov Waterfall, Sijarinska Spa, Medveđa, Mrkonjski vis, Kosovo, Veternica, Southern Serbia, geysers, spa tourism, natural beauty, hiking, tourist attractions"
          }
        />
        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/branicevski-okrug/planina-goljak`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/branicevski-okrug/planina-goljak"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/branicevski-okrug/planina-goljak"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/branicevski-okrug/planina-goljak"
        />

      </Helmet>



      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft className="arrowLeft" onClick={() => navigate(jablanickiOkrugPathRoutes.home(switchLanguage))} />
        <header></header>
        <img srcSet={`${goljak11} 450w, ${goljak1} `} alt="Planina Goljak 1" loading="lazy" />

        {switchLanguage === 'rs' ?
          (
            <>

              <h1>Planina Goljak</h1>

              <section lang="sr">

                <p>
                  <strong>Planina Goljak</strong> se nalazi na administrativnoj granici <strong>Srbije</strong> i <strong>Kosova i Metohije</strong>.
                  Prostire se većim delom u <strong>opštini Medveđa</strong>, na istoku do reke <strong>Veternice</strong>, preko koje se nalazi <strong>Kukavica</strong>,
                  dok je na zapadu kosovska planina <strong>Prugovac</strong> i <strong>Batlavasno jezero</strong>. Na severu se nalaze <strong>Lebane</strong> i <strong>Jablanička kotlina</strong>,
                  a na jugu <strong>Kosovsko Pomoravlje</strong>. Geološki sastav je raznovrstan, a dominiraju <strong>graniti</strong> i <strong>gnejsevi</strong>.
                </p>
              </section>

              <img srcSet={`${goljak55} 450w, ${goljak5}`} alt="Planina Goljak 2" loading="lazy" />

              <section lang="sr">
                <p>
                  Planinu odlikuju <strong>zaobljeni oblici</strong>, padine prekrivene <strong>šumama</strong> i mnoge prirodne i ljudske atrakcije:
                  <strong>Ćorov vodopad</strong>, veoma izazovan planinarski <em>paleovulkan</em> koji nosi ime <strong>Mrkonjski vis</strong> (<strong>1014 m</strong>),
                  <strong>Sijarinska banja</strong> sa izvorima vode temperature <strong>72°C</strong>, kao i tragovi <strong>rudarskih aktivnosti</strong>.
                </p>
              </section>

              <img srcSet={`${goljak33} 450w, ${goljak3}`} alt="Planina Goljak 3" loading="lazy" />

              <section lang="sr">
                <p>
                  Do najvišeg vrha <strong>Lisica</strong> (<strong>1184 m</strong>) lako se dolazi iz pravca <strong>manastira Bogorodice Brainske</strong> (manastir <strong>Mala Braina</strong>),
                  koji se nalazi <strong>2 km zapadno</strong> od puta <strong>Leskovac – Medveđa – Priština</strong>. Ukupna dužina puta do vrha je nešto više od <strong>7 km</strong>,
                  uz visinsku razliku od preko <strong>450 metara</strong>. Od manastira ka selu <strong>Gubavce</strong>, a zatim dalje prema vrhu, vodi <strong>kolski put</strong>
                  koji postaje sve lošiji kako se napreduje, da bi na kraju postao gotovo <em>neprepoznatljiv</em>.
                </p>
              </section>

              <img srcSet={`${goljak44} 450w, ${goljak4}`} alt="Planina Goljak 4" loading="lazy" />

              <section lang="sr">
                <p>
                  Put vodi kroz <strong>šumu bukve i hrasta</strong> sve do <strong>livade i izvora</strong> koji se nalazi oko <strong>500 metara</strong> od vrha.
                  Dalje se nastavlja kroz šumu, a sam vrh je pokriven <strong>livadom</strong> i delimično obraslim <strong>grmljem</strong>.
                  Na ravnom vrhu nalazi se <strong>geodetsko betonsko obeležje</strong>, koje je sada gotovo u potpunosti okruženo gustom <strong>žbunovinom</strong>.
                  Sa <strong>Lisice</strong> se pruža lep <em>pogled na Kosovo</em>.
                </p>
              </section>

              <img srcSet={`${goljak22} 450w, ${goljak2}`} alt="Ćorov vodopad" loading="lazy" />

              <section lang="sr">
                <p>
                  <strong>Ćorov vodopad</strong> se nalazi na <strong>Ćorovom potoku</strong> u ataru sela <strong>Petrilje</strong>, u opštini <strong>Medveđa</strong> na jugu <strong>Srbije</strong>.
                  Potok je dug svega <strong>500 metara</strong>, a po rečima najstarijih meštana, nikada <em>nije presušio</em>.
                  Zbog svog kratkog toka i minimalnog uticaja ljudi na prirodu, ova <strong>izvorska voda</strong> je <strong>izuzetno čista</strong> i pogodna za <strong>piće</strong>.
                  <br /><br />
                  Vodopad je <strong>visok 18 metara</strong> i nalazi se oko <strong>300 metara</strong> od <strong>magistralnog puta M9</strong>, koji povezuje <strong>Leskovac</strong> i <strong>Prištinu</strong>.
                  Udaljen je <strong>8 km</strong> od <strong>Medveđe</strong> i <strong>7 km</strong> od <strong>Sijarinske Banje</strong>.
                  <br /><br />
                  U blizini vodopada nalazi se <strong>malo jezero</strong> u kojem ribolovci mogu uloviti različite vrste riba, poput <em>karaša</em>, <em>babuške</em>, <em>kruške</em> i <em>klena</em>.
                  <br /><br />
                  U <strong>proleće 2017. godine</strong>, uz pomoć <strong>dobrovoljnog rada</strong> i materijalne podrške zaposlenih u <strong>Turističkoj organizaciji opštine Medveđa</strong>,
                  uređen je <strong>lokalitet oko vodopada</strong>. Izgrađeni su <strong>pešački mostovi</strong> i <strong>staze</strong> koje vode do vodopada, a postavljena je i <strong>putna signalizacija</strong>
                  kako bi posetioci lakše pronašli ovu <em>prirodnu atrakciju</em>.
                </p>
              </section>

              <img srcSet={`${goljak66} 450w, ${goljak6}`} alt="Sijarinska Banja" loading="lazy" />

              <section lang="sr">
                <p>
                  <strong>Sijarinska Banja</strong> je <strong>gradsko naselje</strong> u opštini <strong>Medveđa</strong>, u <strong>Jablaničkom okrugu</strong>, na jugu <strong>Srbije</strong>.
                  Nalazi se na <strong>52 km</strong> od <strong>Leskovca</strong> i <strong>330 km</strong> od <strong>Beograda</strong>, na ukrštanju puteva <strong>Leskovac–Priština</strong>,
                  na obalama reka <strong>Banjske</strong> i <strong>Jablanice</strong>, u podnožju <strong>planine Goljak</strong>.
                  Banja je smeštena u <strong>klisuri</strong>, okružena bujnom <strong>vegetacijom</strong>, sa povoljnim <em>subalpskim klimatskim uslovima</em>.
                  <br /><br />
                  Banja se ponosi sa <strong>18 izvora mineralne vode</strong> različitog <em>hemijskog sastava</em> i temperatura od <strong>32 do 72°C</strong>.
                  Posebnu atrakciju predstavljaju <strong>gejziri tople vode</strong>, jedinstveni u <strong>Evropi</strong>, čiji <em>vodeni stub</em> doseže visinu od <strong>8 metara</strong>.
                  Pored njih, tu je i novije izgrađeni kompleks <strong>manjih bazena</strong> i <strong>fontana</strong>.
                </p>
              </section>


            </>
          )
          :
          (
            <>


              <h1>Mount Goljak</h1>

              <section lang="en">
                <p>
                  <strong>Mount Goljak</strong> is located on the administrative border between <strong>Serbia</strong> and <strong>Kosovo and Metohija</strong>.
                  It largely spans the <strong>Medveđa municipality</strong>, extending east to the <strong>Veternica River</strong> (beyond which lies <strong>Kukavica</strong>),
                  and to the west it borders Kosovo’s <strong>Prugovac Mountain</strong> and <strong>Batlavasno Lake</strong>. To the north are <strong>Lebane</strong> and the <strong>Jablanica Basin</strong>,
                  while to the south lies <strong>Kosovo Pomoravlje</strong>. Its geological composition is diverse, dominated by <strong>granite</strong> and <strong>gneiss</strong>.
                </p>
              </section>

              <img srcSet={`${goljak55} 450w, ${goljak5}`} alt="Mount Goljak 2" loading="lazy" />

              <section lang="en">
                <p>
                  The mountain features <strong>rounded shapes</strong>, slopes covered in <strong>forest</strong>, and numerous natural and human-made attractions: the <strong>Ćor Waterfall</strong>,
                  a challenging hiking <em>paleovolcano</em> named <strong>Mrkonjski Vis</strong> (<strong>1,014 m</strong>), <strong>Sijarinska Spa</strong> with water springs at <strong>72 °C</strong>,
                  and traces of <strong>mining activity</strong>.
                </p>
              </section>

              <img srcSet={`${goljak33} 450w, ${goljak3}`} alt="Mount Goljak 3" loading="lazy" />

              <section lang="en">
                <p>
                  The highest peak, <strong>Lisica</strong> (<strong>1,184 m</strong>), is easily accessible from the direction of the <strong>Mother of God Braina Monastery</strong> (also known as <strong>Mala Braina</strong>),
                  located about <strong>2 km west</strong> of the Leskovac–Medveđa–Priština road. The total hiking route to the summit is just over <strong>7 km</strong> long,
                  with an elevation gain of more than <strong>450 m</strong>. From the monastery toward the village of <strong>Gubavce</strong> and then up to the summit,
                  a <strong>dirt track</strong> leads the way, gradually deteriorating and becoming almost <em>unrecognizable</em>.
                </p>
              </section>

              <img srcSet={`${goljak44} 450w, ${goljak4}`} alt="Mount Goljak 4" loading="lazy" />

              <section lang="en">
                <p>
                  The trail passes through <strong>beech and oak forest</strong> to a <strong>meadow and spring</strong> about <strong>500 m</strong> from the peak.
                  From there it continues through forest, and the summit itself is covered with <strong>meadow</strong> and partly overgrown <strong>shrubbery</strong>.
                  On the flat summit stands a <strong>survey concrete marker</strong>, now almost completely surrounded by dense <strong>bushes</strong>.
                  From <strong>Lisica</strong> there is a beautiful <em>view of Kosovo</em>.
                </p>
              </section>

              <img srcSet={`${goljak22} 450w, ${goljak2}`} alt="Ćor Waterfall" loading="lazy" />

              <section lang="en">
                <p>
                  The <strong>Ćor Waterfall</strong> is located on the <strong>Ćor Stream</strong> in the vicinity of the village of <strong>Petrilje</strong>, in the <strong>Medveđa municipality</strong> in southern <strong>Serbia</strong>.
                  The stream is only <strong>500 m</strong> long, and according to the oldest locals it <em>never dries up</em>.
                  Due to its short course and minimal human impact on the environment, its <strong>spring water</strong> is exceptionally <strong>clean</strong> and suitable for <strong>drinking</strong>.
                  <br /><br />
                  The waterfall is <strong>18 m</strong> high and located about <strong>300 m</strong> from the main <strong>M9 highway</strong>, which connects <strong>Leskovac</strong> and <strong>Priština</strong>.
                  It is <strong>8 km</strong> from <strong>Medveđa</strong> and <strong>7 km</strong> from <strong>Sijarinska Spa</strong>.
                  <br /><br />
                  Nearby, there is a <strong>small lake</strong> where anglers can catch various fish species such as <em>crucian carp</em>, <em>bream</em>, <em>ruff</em>, and <em>dace</em>.
                  <br /><br />
                  In <strong>spring 2017</strong>, with the help of <strong>voluntary work</strong> and material support from staff of the <strong>Medveđa Tourist Organization</strong>,
                  the area around the waterfall was improved. <strong>Footbridges</strong> and <strong>paths</strong> were built leading to the waterfall, and <strong>signposts</strong> were installed
                  to help visitors locate this <em>natural attraction</em>.
                </p>
              </section>

              <img srcSet={`${goljak66} 450w, ${goljak6}`} alt="Sijarinska Spa" loading="lazy" />

              <section lang="en">
                <p>
                  <strong>Sijarinska Spa</strong> is an <strong>urban settlement</strong> in the <strong>Medveđa municipality</strong>, part of the <strong>Jablanica District</strong>, in southern <strong>Serbia</strong>.
                  It is located <strong>52 km</strong> from <strong>Leskovac</strong> and <strong>330 km</strong> from <strong>Belgrade</strong>, at the crossroads of the Leskovac–Priština road,
                  on the banks of the <strong>Banjska</strong> and <strong>Jablanica Rivers</strong>, at the foot of <strong>Mount Goljak</strong>.
                  The spa is nestled in a <strong>gorge</strong>, surrounded by lush <strong>vegetation</strong>, with favorable <em>sub-alpine climatic conditions</em>.
                  <br /><br />
                  The spa boasts <strong>18 mineral water springs</strong> of varying <em>chemical composition</em> and temperatures from <strong>32 to 72 °C</strong>.
                  A special attraction is the <strong>hot water geysers</strong>, unique in <strong>Europe</strong>, whose <em>water column</em> can reach up to <strong>8 m</strong>.
                  Additionally, a newly built complex of smaller <strong>pools</strong> and <strong>fountains</strong> is available.
                </p>
              </section>


            </>
          )}

      </div>

    </>
  );
};


export default PlaninaGoljak;