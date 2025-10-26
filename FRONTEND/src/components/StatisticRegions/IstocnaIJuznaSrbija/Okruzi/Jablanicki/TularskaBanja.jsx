/* eslint-disable react/no-unknown-property */
import tularskaBanja1 from "../../../../../assets/images/JuznaIIstocnaSrbija/JablanickiOkrug/TularskaBanja/desktop/tularskaBanja1.jpg";
import tularskaBanja2 from "../../../../../assets/images/JuznaIIstocnaSrbija/JablanickiOkrug/TularskaBanja/desktop/tularskaBanja2.jpg";
import tularskaBanja3 from "../../../../../assets/images/JuznaIIstocnaSrbija/JablanickiOkrug/TularskaBanja/desktop/tularskaBanja3.jpg";
import tularskaBanja4 from "../../../../../assets/images/JuznaIIstocnaSrbija/JablanickiOkrug/TularskaBanja/desktop/tularskaBanja4.jpg";
import tularskaBanja11 from "../../../../../assets/images/JuznaIIstocnaSrbija/JablanickiOkrug/TularskaBanja/mobile/tularskaBanjaM1.jpg";
import tularskaBanja22 from "../../../../../assets/images/JuznaIIstocnaSrbija/JablanickiOkrug/TularskaBanja/mobile/tularskaBanjaM2.jpg";
import tularskaBanja33 from "../../../../../assets/images/JuznaIIstocnaSrbija/JablanickiOkrug/TularskaBanja/mobile/tularskaBanjaM3.jpg";
import tularskaBanja44 from "../../../../../assets/images/JuznaIIstocnaSrbija/JablanickiOkrug/TularskaBanja/mobile/tularskaBanjaM4.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { jablanickiOkrugPathRoutes } from "./JablanickiOkrugPathRoutes";
import { useContextAuth } from "../../../../../Context";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const TularskaBanja = () => {
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

        <title>{switchLanguage === 'rs' ? "Tularska Banja – Prirodna lekovita voda juga Srbije | Serbia Wonders" : "Tularska Spa – Natural Healing Water of Southern Serbia | Serbia Wonders"}</title>
        <meta
          name="description"
          content={switchLanguage === 'rs' ?
            "Tularska Banja u opštini Medveđa poznata je po termalnim i mineralnim izvorima koji su otkriveni 2012. godine. Topla i hladna lekovita voda pomaže kod digestivnih i nervnih tegoba."
            :
            "Tularska Spa in the municipality of Medveđa is known for its thermal and mineral water sources discovered in 2012. Hot and cold springs are used for treating digestive and nervous disorders."
          }
        />
        <meta
          name="keywords"
          content={switchLanguage === 'rs' ?
            "Tularska Banja, Medveđa, termalna voda, mineralna voda, lekovita svojstva, gejzir, vulkansko poreklo, prirodna radioaktivnost, lečenje, izvori Srbije, banje juga Srbije"
            :
            "Tularska Spa, Medveđa, thermal water, mineral springs, healing water, geyser, volcanic origin, radioactivity, spas in Serbia, southern Serbia, natural therapy"
          }
        />
        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/branicevski-okrug/tularska-banja`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/branicevski-okrug/tularska-banja"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/branicevski-okrug/tularska-banja"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/branicevski-okrug/tularska-banja"
        />

      </Helmet>



      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft className="arrowLeft" onClick={() => navigate(jablanickiOkrugPathRoutes.home(switchLanguage))} style={{ fill: "white" }} />
        <header></header>
        <img srcSet={`${tularskaBanja33} 450w, ${tularskaBanja3} `} alt="Tularska Banja 1" loading="lazy" />

        {switchLanguage === 'rs' ?
          (
            <>


              <h1>Tularska Banja</h1>

              <section lang="sr">
                <p>
                  <strong>Tularska Banja</strong> se nalazi u opštini <strong>Medveđa</strong>, na jugu Srbije, u malom proširenju doline <strong>Tularske reke</strong>, pritoke reke <strong>Jablanice</strong>, na nadmorskoj visini od <strong>570 metara</strong>.
                  Lako je dostupna jer se nalazi pored puta <strong>Beograd—Priština</strong>. Od <strong>Leskovca</strong> je udaljena <strong>63 km</strong>, od <strong>Medveđe</strong> <strong>18 km</strong>, a od <strong>Sijarinske Banje</strong> <strong>15 km</strong>.
                  <br /><br />
                  Na području banje trenutno postoje <strong>dva izvora</strong>, koja su se pojavila <strong>2012. godine</strong> tokom geoloških ispitivanja.
                  Jedan izvor je <strong>topla voda</strong> temperature oko <strong>40°C</strong>, poznat kao <em>„mali gejzer”</em>, dok drugi izvor daje <strong>hladnu kiselu vodu</strong> u intervalu od <strong>23 minuta</strong>.
                  <br /><br />
                  Tularska Banja je poznata po <em>kvalitetu svoje vode</em>; čak je <strong>1932. godine</strong> proglašena za <strong>najbolju vodu u Jugoslaviji</strong>.
                </p>
              </section>

              <img srcSet={`${tularskaBanja22} 450w, ${tularskaBanja2}`} alt="Tularska Banja 2" loading="lazy" />

              <section lang="sr">
                <p>
                  U <strong>Tularskoj Banji</strong> nalazi se nekoliko <strong>izvora mineralnih voda</strong>.
                  Ovi izvori su rezultat <em>geoloških karakteristika</em> područja, posebno <strong>raseda</strong> koji omogućavaju pojavu vode iz razbijenog izvorišta.
                  Geološka istraživanja <strong>Lećkog andezitskog kompleksa</strong> ukazuju da se izvori pojavljuju u istočnom delu velike <em>vulkansko-tektonske strukture</em>,
                  koja uključuje i veliku <em>paleovulkansku kalderu</em>.
                  <br /><br />
                  Pet izvora <strong>kisele vode</strong> je <em>kaptirano</em> u česmu sa <em>nastrešnicom</em>.
                  Međutim, zbog ulaska <strong>obične vode</strong> u sabirni rezervoar dolazi do mešanja, što može smanjiti <strong>mineralizaciju</strong> i <strong>temperaturu lekovite vode</strong>.
                  Ukupna izdašnost ovih izvora iznosi oko <strong>9.000 litara za 24 časa</strong>, a temperatura vode je konstantna i iznosi <strong>15°C</strong>.
                  <em>Zimi voda ne mrzne</em>, niti se <em>sneg oko izvora zadržava</em>.
                  <br /><br />
                  Najjači izvor iz grupe <strong>termomineralnih voda</strong> je <em>primitivno kaptiran slani izvor</em>,
                  uz koji se nalazi još jedan izvor <strong>mineralne vode bele boje</strong> (krečljiva boja).
                </p>
              </section>

              <img srcSet={`${tularskaBanja11} 450w, ${tularskaBanja1}`} alt="Tularska Banja 3" loading="lazy" />

              <section lang="sr">
                <p>
                  Analize vode Tularske banje, koje je sproveo <strong>Marko T. Leko</strong>, pokazale su da je reč o <em>muriatičnom kiseljaku</em>
                  sa povećanim sadržajem <strong>natrijuma</strong>, <strong>kalcijuma</strong>, <strong>hlora</strong> i <strong>slobodne ugljene kiseline</strong>.
                  Kasnija ispitivanja su otkrila <em>blagu prirodnu radioaktivnost</em>, koja potiče od <strong>radona</strong> i <strong>radijuma</strong>.
                  <br /><br />
                  Stručnjaci <strong>V. Vujanović</strong> i <strong>M. Teofilović</strong> navode da se ova mineralna voda odlikuje značajnim sadržajem <strong>hidrokarbonata</strong>,
                  <strong>sulfata</strong>, <strong>hlora</strong>, <strong>kalcijuma</strong>, <strong>natrijuma</strong> i <strong>bromne kiseline</strong>,
                  što je svrstava među <em>najznačajnije vode vulkanskog porekla</em> u Srbiji.
                  Takođe, prisutne su i značajne količine <strong>magnezijuma</strong> i <strong>silicijum-dioksida</strong>, kao i povećan sadržaj
                  <strong>gvožđa</strong>, <strong>litijuma</strong>, <strong>cezijuma</strong> i <strong>stroncijuma</strong>, što dodatno doprinosi njenim <em>terapijskim svojstvima</em>.
                </p>
              </section>

              <img srcSet={`${tularskaBanja44} 450w, ${tularskaBanja4}`} alt="Tularska Banja 4" loading="lazy" />

              <section lang="sr">
                <p>
                  <strong>Lekovite vode Tularske Banje</strong> nisu dovoljno iskorišćene.
                  Savremeni <em>medicinski</em> i <em>turističko-ugostiteljski objekti</em> ovde ne postoje, pa lokalno stanovništvo vodu koristi za <strong>samoinicijativno lečenje</strong>
                  oboljenja <em>organa za varenje</em>, <em>poremećaja metabolizma</em>, <em>anemičnih stanja</em> i <em>nervnih oboljenja</em>.
                  <br /><br />
                  Najposećenija je kuća <strong>porodice Vukadinović</strong>, gde su se <strong>2012. godine</strong> pojavila dva izvora:
                  <br /><br />
                  <strong>Topli izvor:</strong> Temperatura vode iznosi oko <strong>40°C</strong>.
                  <br /><br />
                  <strong>Hladni izvor:</strong> Karakteriše ga <em>gejzirski fenomen</em>, s periodičnim izbijanjem vode na svakih <strong>23 minuta</strong>, pri temperaturi od <strong>23°C</strong>.
                  <br /><br />
                  Oba izvora su naknadno <em>kaptirana</em>; <strong>topli izvor</strong> se sliva u manji bazen, dok je <strong>hladni izvor</strong> priključen na <strong>cevovod</strong>.
                </p>
              </section>

            </>
          )
          :
          (
            <>

              <h1>Tular Spa</h1>

              <section lang="en">
                <p>
                  <strong>Tular Spa</strong> is located in the municipality of <strong>Medveđa</strong>, in southern Serbia, in a small widening of the valley of the <strong>Tularska River</strong>, a tributary of the <strong>Jablanica River</strong>, at an altitude of <strong>570 meters</strong>.
                  It is easily accessible as it lies next to the <strong>Belgrade—Priština</strong> road. It is <strong>63 km</strong> from <strong>Leskovac</strong>, <strong>18 km</strong> from <strong>Medveđa</strong>, and <strong>15 km</strong> from <strong>Sijarinska Banja</strong>.
                  <br /><br />
                  Currently, the spa area has <strong>two springs</strong> that appeared during geological surveys in <strong>2012</strong>.
                  One spring is <strong>thermal water</strong> at about <strong>40°C</strong>, known as the <em>"small geyser"</em>, while the other spring provides <strong>cold acidic water</strong> at intervals of <strong>23 minutes</strong>.
                  <br /><br />
                  Tularska Banja is known for the <em>quality of its water</em>; it was even declared the <strong>best water in Yugoslavia</strong> in <strong>1932</strong>.
                </p>
              </section>

              <img srcSet={`${tularskaBanja22} 450w, ${tularskaBanja2}`} alt="Tularska Banja 2" loading="lazy" />

              <section lang="en">
                <p>
                  Several <strong>mineral water springs</strong> are found in <strong>Tularska Banja</strong>.
                  These springs result from the <em>geological characteristics</em> of the area, especially <strong>faults</strong> that allow water to emerge from fractured sources.
                  Geological research of the <strong>Lekški andesitic complex</strong> indicates that the springs appear in the eastern part of a large <em>volcano-tectonic structure</em>,
                  which also includes a large <em>paleovolcanic caldera</em>.
                  <br /><br />
                  Five <strong>acidic water springs</strong> have been <em>captured</em> in a fountain with a <em>shelter</em>.
                  However, due to the inflow of <strong>ordinary water</strong> into the collection reservoir, mixing occurs, which may reduce the <strong>mineralization</strong> and <strong>temperature of the healing water</strong>.
                  The total output of these springs is about <strong>9,000 liters per 24 hours</strong>, and the water temperature is constant at <strong>15°C</strong>.
                  The water <em>does not freeze in winter</em>, nor does <em>snow accumulate around the springs</em>.
                  <br /><br />
                  The strongest spring among the <strong>thermo-mineral waters</strong> is a <em>primitive captured saline spring</em>,
                  next to which there is another spring of <strong>white mineral water</strong> (chalky color).
                </p>
              </section>

              <img srcSet={`${tularskaBanja11} 450w, ${tularskaBanja1}`} alt="Tularska Banja 3" loading="lazy" />

              <section lang="en">
                <p>
                  Water analyses of Tularska Banja, conducted by <strong>Marko T. Leko</strong>, showed that it is a <em>muriatic acid water</em>
                  with increased levels of <strong>sodium</strong>, <strong>calcium</strong>, <strong>chlorine</strong>, and <strong>free carbonic acid</strong>.
                  Later studies revealed <em>mild natural radioactivity</em> stemming from <strong>radon</strong> and <strong>radium</strong>.
                  <br /><br />
                  Experts <strong>V. Vujanović</strong> and <strong>M. Teofilović</strong> point out that this mineral water is characterized by significant contents of <strong>bicarbonates</strong>,
                  <strong>sulfates</strong>, <strong>chlorides</strong>, <strong>calcium</strong>, <strong>sodium</strong>, and <strong>bromic acid</strong>,
                  placing it among the <em>most important volcanic-origin waters</em> in Serbia.
                  It also contains significant amounts of <strong>magnesium</strong> and <strong>silicon dioxide</strong>, as well as elevated levels of
                  <strong>iron</strong>, <strong>lithium</strong>, <strong>cesium</strong>, and <strong>strontium</strong>, which further enhance its <em>therapeutic properties</em>.
                </p>
              </section>

              <img srcSet={`${tularskaBanja44} 450w, ${tularskaBanja4}`} alt="Tularska Banja 4" loading="lazy" />

              <section lang="en">
                <p>
                  The <strong>healing waters of Tularska Banja</strong> are underutilized.
                  Modern <em>medical</em> and <em>tourist-hospitality facilities</em> do not currently exist here, so the local population uses the water for <strong>self-initiated treatment</strong>
                  of disorders related to the <em>digestive system</em>, <em>metabolic disorders</em>, <em>anemia</em>, and <em>nervous diseases</em>.
                  <br /><br />
                  The most visited place is the house of the <strong>Vukadinović family</strong>, where two springs appeared in <strong>2012</strong>:
                  <br /><br />
                  <strong>Warm spring:</strong> The water temperature is around <strong>40°C</strong>.
                  <br /><br />
                  <strong>Cold spring:</strong> It features a <em>geyser phenomenon</em>, with periodic water bursts every <strong>23 minutes</strong>, at a temperature of <strong>23°C</strong>.
                  <br /><br />
                  Both springs were later <em>captured</em>; the <strong>warm spring</strong> flows into a small pool, while the <strong>cold spring</strong> is connected to a <strong>pipeline</strong>.
                </p>
              </section>


            </>
          )}

      </div>

    </>
  );
};

export default TularskaBanja;