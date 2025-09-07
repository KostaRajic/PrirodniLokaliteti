/* eslint-disable react/no-unknown-property */
import skadarlija1 from "../../../assets/images/Beograd/Skadarlija/desktop/skadarllija1.jpg";
import skadarlija2 from "../../../assets/images/Beograd/Skadarlija/desktop/skadarllija2.jpg";
import skadarlija3 from "../../../assets/images/Beograd/Skadarlija/desktop/skadarllija3.jpg";
import skadarlija4 from "../../../assets/images/Beograd/Skadarlija/desktop/skadarllija4.jpg";
import skadarlija5 from "../../../assets/images/Beograd/Skadarlija/desktop/skadarllija5.jpg";
import skadarlija6 from "../../../assets/images/Beograd/Skadarlija/desktop/skadarllija6.jpg";
import skadarlija11 from "../../../assets/images/Beograd/Skadarlija/mobile/skadarllijaM1.jpg";
import skadarlija22 from "../../../assets/images/Beograd/Skadarlija/mobile/skadarllijaM2.jpg";
import skadarlija33 from "../../../assets/images/Beograd/Skadarlija/mobile/skadarllijaM3.jpg";
import skadarlija44 from "../../../assets/images/Beograd/Skadarlija/mobile/skadarllijaM4.jpg";
import skadarlija55 from "../../../assets/images/Beograd/Skadarlija/mobile/skadarllijaM5.jpg";
import skadarlija66 from "../../../assets/images/Beograd/Skadarlija/mobile/skadarllijaM6.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../ScrollToTop";
import { beogradPathRoutes } from "./BeogradPathRoutes";
import { useContextAuth } from "../../../Context";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const Skadarlija = () => {
  const navigate = useNavigate();
  const { switchLanguage } = useContextAuth();
  const { lang } = useParams();


  useEffect(() => {
    if (lang !== switchLanguage) {

      const newPath = window.location.pathname.replace(/^\/[^\/]+/, `/${switchLanguage}`);
      navigate(newPath, { replace: true });
    }
  }, [switchLanguage, lang, navigate]);


  return (
    <>

      <Helmet>

        <title>{switchLanguage === 'rs' ? "Skadarlija – Boemsko Srce Beograda | Serbia Wonders" : "Skadarlija – The Bohemian Heart of Belgrade | Serbia Wonders"}</title>
        <meta
          name="description"
          content={switchLanguage === 'rs' ?
            "Skadarlija – poznata boemska četvrt Beograda sa bogatom istorijom, autentičnim kafanama, umetničkom atmosferom i tradicionalnom srpskom kuhinjom."
            :
            "Skadarlija – the iconic bohemian quarter of Belgrade, known for its traditional taverns, rich cultural history, and artistic spirit."
          }
        />
        <meta
          name="keywords"
          content={switchLanguage === 'rs' ?
            "Skadarlija, Beograd, boemska četvrt, kafane, Tri šešira, Dva jelena, boemija, srpska kuhinja, kultura, umetnost, istorija Beograda, Skadarska ulica, srpski pisci, glumci"
            :
            "Skadarlija, Belgrade, bohemian quarter, kafanas, Tri sesira, Dva jelena, Serbian food, culture, art, Belgrade history, Skadarska street"
          }
        />
        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/beograd/skadarlija`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/beograd/skadarlija"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/beograd/skadarlija"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/beograd/skadarlija"
        />


      </Helmet>

      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft className="arrowLeft" onClick={() => navigate(beogradPathRoutes.home(switchLanguage))} style={{ fill: 'white' }} />
        <header></header>
        <img srcSet={`${skadarlija11} 450w, ${skadarlija1} `} alt="Sakadrlija 1" loading="lazy" />

        <h2 style={{ color: 'white' }}>Skadarlija</h2>

        {switchLanguage === 'rs' ?
          (
            <>

              <section lang='sr'>
                <p>
                  Skadarlija se danas u turističkim vodičima često opisuje kao <strong>boemska četvrt Beograda</strong>, koja je nekada bila omiljeno okupljalište najpoznatijih srpskih pisaca, glumaca, slikara i svih onih koji su uživali u nekonvencionalnim društvenim susretima. Danas je, međutim, poznata i po <strong>restoranima koji nude vrhunske specijalitete</strong>. Istorija Skadarlije počinje u prvim decenijama prošlog veka, kada je, usled izgradnje zgrade Uprave fondova, srušena kafana <em>„Dardaneli“</em>, koja je stajala preko puta Narodnog pozorišta. Posetioci ove kafane – glumci, književnici, pevači i novinari – svoju novu boemsku oazu pronašli su u <em>Skadarskoj ulici</em>, koja im je delovala kao deo Beograda sa dušom.
                </p>
              </section>

              <img srcSet={`${skadarlija66} 450w, ${skadarlija6}`} alt="Skadarlija 2" loading="lazy" />

              <section lang='sr'>
                <p>
                  Prema podacima iz <strong>1901. godine</strong>, Skadarlija je sve do sredine 19. veka bila gotovo nenaseljena periferija Beograda, smeštena između <em>„varoši u šancu“</em> i naselja Palilula. Naseljavanje je počelo spontano, a šanac koji je delio grad od okoline vremenom je zatrpan. Prvi stanovnici pojavljuju se oko <strong>1825. godine</strong>, a među prvima su bili Romi, zbog čega je kvart bio poznat kao <em>Šićan-mala</em> – ciganska mahala.
                </p>
              </section>

              <img srcSet={`${skadarlija33} 450w, ${skadarlija3}`} alt="Skadarlija 3" loading="lazy" />

              <section lang='sr'>
                <p>
                  U drugoj polovini 19. veka, Skadarlija dobija urbani karakter izgradnjom kvalitetnijih kuća i višespratnica. Trend gradnje usporava tokom <strong>Prvog svetskog rata</strong>, te Skadarlija zadržava pretežno prizemnu gradnju. Među najstarijim objektima je <strong>„Štihina kuća“</strong>, povezana s kafanom <em>„Tri šešira“</em>, otvorenom <strong>1864. godine</strong>. Pre toga, tu je bila radionica šeširdžije Dimovića, koji je iznad ulaza okačio tri plehana šešira – otuda i naziv kafane.
                </p>
              </section>

              <img srcSet={`${skadarlija44} 450w, ${skadarlija4}`} alt="Skadarlija 4" loading="lazy" />

              <section lang='sr'>
                <p>
                  Skadarliju su naseljavali <strong>zanatlije, trgovci i ugostitelji</strong>, a mnogi su zarađivali izdajući stanove. Kroz njenu sredinu je prolazio otvoreni kanal, koji je tokom kiša postajao vodotok i delio <em>Dorćol</em> od <em>Palilule</em>. Leva strana, s kafanom „Tri šešira“, pripadala je Dorćolu, a desna, sa kafanom <strong>„Dva jelena“</strong> (otvorena oko <strong>1862. godine</strong>), Paliluli. Skadarlija se prvi put pojavljuje na planu grada <strong>1854. godine</strong>, a 1867. i u planu Emilijana Josimovića. Ime <em>Skadarska ulica</em> dobija 1872. godine, a tokom austrougarske okupacije zvala se kratko <em>Ružina ulica</em>. U kućama na broju 36 (restoran „Ima dana“) i broju 27 (kuća Katarine Hristodulo) živela su poznata imena srpske glume i umetnosti.
                </p>
              </section>

              <img srcSet={`${skadarlija55} 450w, ${skadarlija5}`} alt="Skadarlija 5" loading="lazy" />

              <section lang='sr'>
                <p>
                  Šetnja Skadarlijom je pravo <strong>putovanje kroz vreme</strong>, u jednom od najlepših i najboemskijih delova Beograda. Kamenim ulicama, okruženim starim kućama, restoranima i kafanama, oseća se duh prošlih vremena. Iako danas turistički centar, Skadarlija je zadržala svoj šarm. <em>Drvene terase, starinske fasade, umetničke instalacije</em> i mirisi tradicionalne hrane čine ovu ulicu autentičnim mestom susreta istorije, kulture i boemskog duha.
                </p>
              </section>

              <img srcSet={`${skadarlija22} 450w, ${skadarlija2}`} alt="Skadarlija 6" loading="lazy" />

              <section lang='sr'>
                <p>
                  Kafane i restorani Skadarlije oduvek su bili <strong>srce boemskog života</strong> Beograda. U njima su se okupljali umetnici, intelektualci, pisci i glumci. Ova mesta nisu bila samo za jelo i piće, već i <em>centri kulturnih dešavanja i razmene ideja</em>. Ambijent kafana bio je tradicionalan, sa drvenim stolovima i starinskim nameštajem. U njihovim zidovima odzvanjali su razgovori o umetnosti, spontani nastupi i pesme. Danas, iako modernizovane, ove kafane još uvek nude <strong>autentičan doživljaj srpske tradicije</strong> i ostaju nezaobilazan deo beogradske kulture.
                </p>
              </section>


            </>
          )
          :
          (
            <>

              <section lang='en'> <p> Today, Skadarlija is often described in tourist guides as the <strong>bohemian quarter of Belgrade</strong>, once a favorite gathering place of Serbia’s most famous writers, actors, painters, and all those who enjoyed unconventional social encounters. Today, however, it is also well known for its <strong>restaurants offering top-quality specialties</strong>. The history of Skadarlija began in the early decades of the last century, when the famous tavern <em>“Dardaneli”</em>, located across from the National Theatre, was demolished to make way for the building of the Fund Administration. The visitors of that tavern — actors, writers, singers, and journalists — found a new bohemian oasis in <em>Skadarska Street</em>, which they saw as a part of Belgrade with a soul. </p> </section>
              <img srcSet={`${skadarlija66} 450w, ${skadarlija6}`} alt="Skadarlija 2" loading="lazy" />

              <section lang='en'> <p> According to data from <strong>1901</strong>, Skadarlija remained almost uninhabited until the mid-19th century, located between the <em>“town within the trench”</em> and the Palilula neighborhood. Settlement began spontaneously, and the trench that separated the city from its surroundings was eventually filled in. The first inhabitants appeared around <strong>1825</strong>, and among the earliest were Roma people, which is why the area was once known as <em>Šićan-mala</em> — the Gypsy quarter. </p> </section>
              <img srcSet={`${skadarlija33} 450w, ${skadarlija3}`} alt="Skadarlija 3" loading="lazy" />

              <section lang='en'> <p> In the second half of the 19th century, Skadarlija began to take on a more urban character, with the construction of better-quality houses and multi-story buildings. Construction slowed during <strong>World War I</strong>, and Skadarlija retained mostly ground-floor structures. One of the oldest buildings is the <strong>“Štiha House”</strong>, connected to the tavern <em>“Three Hats”</em>, which opened in <strong>1864</strong>. Before that, it was the workshop of the hat maker Dimović, who hung three tin hats above the entrance — thus giving the tavern its name. </p> </section>
              <img srcSet={`${skadarlija44} 450w, ${skadarlija4}`} alt="Skadarlija 4" loading="lazy" />

              <section lang='en'> <p> Skadarlija was inhabited by <strong>craftsmen, merchants, and innkeepers</strong>, and many earned income by renting out rooms. An open canal ran through the middle of the street, which became a stream during rains, separating <em>Dorćol</em> from <em>Palilula</em>. The left side, with the tavern “Three Hats,” belonged to Dorćol, while the right side, with the tavern <strong>“Two Deer”</strong> (opened around <strong>1862</strong>), belonged to Palilula. Skadarlija first appeared on a city plan in <strong>1854</strong>, and again in 1867 on the plan by Emilijan Josimović. The street received the name <em>Skadarska Street</em> in 1872, and during Austro-Hungarian occupation it was briefly renamed <em>Ružina Street</em>. Famous figures from Serbian theater and art lived at No. 36 (restaurant “Ima dana”) and No. 27 (house of Katarina Hristodulo). </p> </section>
              <img srcSet={`${skadarlija55} 450w, ${skadarlija5}`} alt="Skadarlija 5" loading="lazy" />

              <section lang='en'> <p> Walking through Skadarlija is a true <strong>journey through time</strong>, in one of the most beautiful and most bohemian parts of Belgrade. Along its cobbled streets, surrounded by old houses, restaurants, and taverns, you can feel the spirit of the past. Although now a tourist center, Skadarlija has preserved its charm. <em>Wooden terraces, vintage facades, artistic installations</em>, and the aromas of traditional food make this street an authentic meeting point of history, culture, and bohemian spirit. </p> </section>
              <img srcSet={`${skadarlija22} 450w, ${skadarlija2}`} alt="Skadarlija 6" loading="lazy" />

              <section lang='en'> <p> The taverns and restaurants of Skadarlija have always been the <strong>heart of Belgrade’s bohemian life</strong>. They were gathering places for artists, intellectuals, writers, and actors. These venues were not just for eating and drinking, but also <em>centers of cultural events and idea exchange</em>. The ambiance of the taverns was traditional, with wooden tables and old-fashioned furniture. Their walls echoed with conversations about art, spontaneous performances, and songs. Today, although modernized, these taverns still offer an <strong>authentic experience of Serbian tradition</strong> and remain an essential part of Belgrade’s cultural identity. </p> </section>

            </>
          )}

      </div>

    </>
  );
};

export default Skadarlija;