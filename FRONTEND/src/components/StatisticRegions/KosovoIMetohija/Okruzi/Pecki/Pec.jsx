/* eslint-disable react/no-unknown-property */
/* eslint-disable no-useless-escape */
import pec1 from '../../../../../assets/images/KosovoIMetohija/Pecki/Pec/desktop/pec1.jpg'
import pec2 from '../../../../../assets/images/KosovoIMetohija/Pecki/Pec/desktop/pec2.jpg'
import pec3 from '../../../../../assets/images/KosovoIMetohija/Pecki/Pec/desktop/pec3.jpg'
import pec4 from '../../../../../assets/images/KosovoIMetohija/Pecki/Pec/desktop/pec4.jpg'
import pec11 from '../../../../../assets/images/KosovoIMetohija/Pecki/Pec/mobile/Mpec1.jpg'
import pec22 from '../../../../../assets/images/KosovoIMetohija/Pecki/Pec/mobile/Mpec2.jpg'
import pec33 from '../../../../../assets/images/KosovoIMetohija/Pecki/Pec/mobile/Mpec3.jpg'
import pec44 from '../../../../../assets/images/KosovoIMetohija/Pecki/Pec/mobile/Mpec4.jpg'


import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { peckiOkrugPathRoutes } from './PeckiOkrugPathRoutes';
import { useContextAuth } from '../../../../../Context'
import { Helmet } from "react-helmet-async";
import { useEffect } from 'react'

const Pec = () => {
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

        <title>{switchLanguage === 'rs' ? "Peć – Istorijski i verski centar Kosova | Serbia Wonders" : "Peć – Historical and Religious Center of Kosovo | Serbia Wonders"}</title>
        <meta
          name="description"
          content={switchLanguage === 'rs' ?
            "Peć je drevni grad na Kosovu, sedište Pećke patrijaršije i značajno versko i kulturno središte sa bogatom istorijom od srednjeg veka do danas."
            :
            "Pec is an ancient city in Kosovo, the seat of the Pec Patriarchate and an important religious and cultural center with a rich history from the Middle Ages to the present."
          }
        />
        <meta
          name="keywords"
          content={switchLanguage === 'rs' ?
            "Peć, Pećka patrijaršija, Visoki Dečani, Srpska pravoslavna crkva, otomanski period, Bajrakli džamija, Kosovo, Prokletije, istorija Peći, srpska baština"
            :
            "Pec, Pec Patriarchate, Visoki Decani, Serbian Orthodox Church, Ottoman period, Bajrakli Mosque, Kosovo, Prokletije, history of Pec, Serbian heritage"
          }
        />
        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/pecki-okrug/pec`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/pecki-okrug/pec"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/pecki-okrug/pec"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/pecki-okrug/pec"
        />

      </Helmet>


      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft className="arrowLeft" onClick={() => navigate(peckiOkrugPathRoutes.home(switchLanguage))} />
        <header></header>
        <img srcSet={`${pec22} 450w, ${pec2} `} alt="Peć 1" loading="lazy" />

        <h1>Peć</h1>

        {switchLanguage === 'rs' ?
          (
            <>

              <section lang="sr">
                <p>
                  Pretpostavlja se da su grad osnovala drevna <strong>ilirska plemena</strong>, a nalazi se
                  na <strong>strateškom položaju</strong> uz reku <em>Bistricu</em>, pritoku <em>Belog Drima</em>, istočno
                  od <strong>Prokletija</strong>.
                </p>
              </section>

              <img srcSet={`${pec11} 450w, ${pec1}`} alt="Peć 2" loading="lazy" />

              <section lang="sr">
                <p>
                  Grad je postao značajno <strong>vjersko središte srednjovjekovne Srbije</strong> pod
                  vladavinom cara <strong>Stefana Dušana</strong>, koji ga je <em>1346. godine</em> proglasio
                  sedištem <strong>Srpske pravoslavne crkve</strong>. Ovaj status zadržao je sve do <em>1766.
                    godine</em>, kada je ukinuta <strong>Pećka patrijaršija</strong>. Grad i okolna područja i
                  dalje imaju veliki značaj za <strong>pravoslavne Srbe</strong>; u njemu se nalazi
                  patrijaršijski manastir sa četiri crkve ukrašene freskama, kao i
                  biblioteka i riznica. Nedaleko, u Dečanima, nalazi se manastir <strong>Visoki Dečani</strong> iz <em>14. veka</em>, koji je od strane <strong>UNESCO-a</strong> upisan na listu <strong>svetske baštine</strong>.
                </p>
              </section>

              <img srcSet={`${pec33} 450w, ${pec3}`} alt="Peć 3" loading="lazy" />

              <section lang="sr">
                <p>
                  Grad je krajem <em>14. veka</em> osvojio <strong>Otomanski imperij</strong>, što je dovelo do
                  značajnih promena, uključujući promenu imena u <strong>Ipek</strong>. U grad se doselio
                  veliki broj <strong>Turaka</strong>, čiji potomci i danas žive u tom području, a njihov
                  uticaj je oblikovao lokalnu arhitekturu i ulice, dajući im specifičan
                  orijentalni izgled. <strong>Islam</strong> je postao dominantna vera, a tokom ovog
                  perioda sagrađen je veliki broj džamija, od kojih su mnoge sačuvane do
                  danas. Jedna od najpoznatijih je <strong>Bajrakli džamija</strong> iz <em>15. veka</em>, koja se
                  nalazi u centru grada. Tokom otomanskog perioda, Peć je bio sedište
                  <strong>Pećke patrijaršije</strong>.
                  <br /><br />
                  Krajem <em>19. veka</em>, prema različitim izveštajima, u Peći su vladali
                  bezakonje i nasilje muslimana nad hrišćanima. Korupcija je bila
                  rasprostranjena i unutar pravoslavne crkve, o čemu svedoči dopis o
                  trgovini ženama, koju je vodio <strong>protojerej pećki</strong>.
                </p>
              </section>

              <img srcSet={`${pec44} 450w, ${pec4}`} alt="Peć 4" loading="lazy" />

              <section lang="sr">
                <p>
                  Otomanska vlast u Peći završena je tokom <em>Prvog balkanskog rata</em>, kada su
                  grad zauzele <strong>crnogorske snage</strong>, nakon čega je Peć na kratko postao deo
                  <strong>Crne Gore</strong>. Nakon završetka <em>Prvog svetskog rata 1918. godine</em>, grad je
                  ušao u sastav novonastale <strong>Kraljevine SHS</strong>. U <em>20. veku</em>, pod srpskom, a
                  potom i jugoslovenskom vlašću, odnosi između većinskog <strong>albanskog</strong> i
                  manjinskog <strong>srpskog stanovništva</strong> postajali su sve napetiji.
                </p>
              </section>


            </>
          )
          :
          (
            <>

              <section lang="en">
                <p>
                  It is believed that the city was founded by ancient <strong>Illyrian tribes</strong>, and it is located in a <strong>strategic position</strong> along the <em>Bistrica</em> River, a tributary of the <em>White Drin</em>, east of the <strong>Prokletije Mountains</strong>.
                </p>
              </section>

              <img srcSet={`${pec11} 450w, ${pec1}`} alt="Peć 2" loading="lazy" />

              <section lang="en">
                <p>
                  The city became an important <strong>religious center of medieval Serbia</strong> during the reign of Emperor <strong>Stefan Dušan</strong>, who in <em>1346</em> proclaimed it the seat of the <strong>Serbian Orthodox Church</strong>. This status was maintained until <em>1766</em>, when the <strong>Patriarchate of Peć</strong> was abolished. The city and surrounding areas still hold great significance for <strong>Orthodox Serbs</strong>; it houses the patriarchal monastery with four churches adorned with frescoes, as well as a library and treasury. Nearby, in Dečani, is the <strong>Visoki Dečani Monastery</strong> from the <em>14th century</em>, which is inscribed by <strong>UNESCO</strong> on the <strong>World Heritage List</strong>.
                </p>
              </section>

              <img srcSet={`${pec33} 450w, ${pec3}`} alt="Peć 3" loading="lazy" />

              <section lang="en">
                <p>
                  At the end of the <em>14th century</em>, the city was conquered by the <strong>Ottoman Empire</strong>, which brought significant changes, including the renaming of the city to <strong>Ipek</strong>. A large number of <strong>Turks</strong> settled in the city, whose descendants still live in the area today. Their influence shaped local architecture and streets, giving them a distinct oriental appearance. <strong>Islam</strong> became the dominant religion, and during this period, many mosques were built, many of which have been preserved to this day. One of the most well-known is the <strong>Bajrakli Mosque</strong> from the <em>15th century</em>, located in the city center. During the Ottoman period, Peć was also the seat of the <strong>Patriarchate of Peć</strong>.
                  <br /><br />
                  At the end of the <em>19th century</em>, according to various reports, Peć was marked by lawlessness and violence by Muslims against Christians. Corruption was widespread even within the Orthodox Church, as evidenced by a report about human trafficking led by the <strong>protoiereus of Peć</strong>.
                </p>
              </section>

              <img srcSet={`${pec44} 450w, ${pec4}`} alt="Peć 4" loading="lazy" />

              <section lang="en">
                <p>
                  Ottoman rule in Peć ended during the <em>First Balkan War</em>, when the city was captured by <strong>Montenegrin forces</strong>, after which Peć briefly became part of <strong>Montenegro</strong>. After the end of <em>World War I in 1918</em>, the city became part of the newly formed <strong>Kingdom of Serbs, Croats and Slovenes (SHS)</strong>. In the <em>20th century</em>, under Serbian and later Yugoslav rule, relations between the majority <strong>Albanian</strong> and minority <strong>Serb population</strong> grew increasingly tense.
                </p>
              </section>


            </>
          )}

      </div>
    </>
  );
};


export default Pec;