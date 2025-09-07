/* eslint-disable react/no-unknown-property */
/* eslint-disable no-useless-escape */
import peckaPatrijarsija1 from '../../../../../assets/images/KosovoIMetohija/Pecki/PeckaPatrijarsija/desktop/peckaPatrijarsija1.jpg'
import peckaPatrijarsija2 from '../../../../../assets/images/KosovoIMetohija/Pecki/PeckaPatrijarsija/desktop/peckaPatrijarsija2.jpg'
import peckaPatrijarsija3 from '../../../../../assets/images/KosovoIMetohija/Pecki/PeckaPatrijarsija/desktop/peckaPatrijarsija3.jpg'
import peckaPatrijarsija4 from '../../../../../assets/images/KosovoIMetohija/Pecki/PeckaPatrijarsija/desktop/peckaPatrijarsija4.jpg'
import peckaPatrijarsija11 from '../../../../../assets/images/KosovoIMetohija/Pecki/PeckaPatrijarsija/mobile/MpeckaPatrijarsija1.jpg'
import peckaPatrijarsija22 from '../../../../../assets/images/KosovoIMetohija/Pecki/PeckaPatrijarsija/mobile/MpeckaPatrijarsija2.jpg'
import peckaPatrijarsija33 from '../../../../../assets/images/KosovoIMetohija/Pecki/PeckaPatrijarsija/mobile/MpeckaPatrijarsija3.jpg'
import peckaPatrijarsija44 from '../../../../../assets/images/KosovoIMetohija/Pecki/PeckaPatrijarsija/mobile/MpeckaPatrijarsija4.jpg'


import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { peckiOkrugPathRoutes } from './PeckiOkrugPathRoutes';
import { useContextAuth } from '../../../../../Context'
import { Helmet } from "react-helmet-async";
import { useEffect } from 'react'

const PeckaPatrijarsija = () => {
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

        <title>{switchLanguage === 'rs' ? "Pećka Patrijaršija – Srpska pravoslavna svetinja | Serbia Wonders" : "Patriarchate of Peć – Serbian Orthodox Sanctuary | Serbia Wonders"}</title>
        <meta
          name="description"
          content={switchLanguage === 'rs' ?
            "Pećka Patrijaršija je manastirski kompleks sa četiri crkve, sedište Srpske patrijaršije od 1924. godine, bogat istorijom od 13. do 16. veka."
            :
            "The Pec Patriarchate is a monastic complex with four churches, the seat of the Serbian Patriarchate since 1924, rich in history from the 13th to 16th centuries."
          }
        />
        <meta
          name="keywords"
          content={switchLanguage === 'rs' ?
            "Pećka Patrijaršija, Srpska patrijaršija, manastir Peć, crkva Svetih Apostola, arhiepiskop Danilo Drugi, pravoslavna svetinja, Kosovo"
            :
            "Pec Patriarchate, Serbian Patriarchate, Pec monastery, Church of the Holy Apostles, Archbishop Danilo II, Orthodox sanctuary, Kosovo"
          }
        />
        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/pecki-okrug/pecka-patrijarsija`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/pecki-okrug/pecka-patrijarsija"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/pecki-okrug/pecka-patrijarsija"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/pecki-okrug/pecka-patrijarsija"
        />

      </Helmet>


      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft className="arrowLeft" onClick={() => navigate(peckiOkrugPathRoutes.home(switchLanguage))} style={{ fill: "white" }} />
        <header></header>
        <img srcSet={`${peckaPatrijarsija11} 450w, ${peckaPatrijarsija1} `} alt="Pećka Patrijaršija 1" loading="lazy" />

        {switchLanguage === 'rs' ?
          (
            <>


              <h2>Pećka Patrijaršija</h2>

              <section lang="sr">
                <p>
                  Od trenutka kada je prvi patrijarh u okviru <strong>Srpske patrijaršije</strong>, koja je
                  tada obnovljena, ustoličen <strong>1924. godine</strong> u manastiru <strong>Pećka patrijaršija</strong>,
                  svaki naredni je ustoličen upravo u toj <strong>svetinji</strong>, nadomak <strong>Peći</strong>.
                  <br /><br />
                  U <strong>klisuri reke</strong> <em>Pećke Bistrice</em> nekada su se nalazile <strong>pećine</strong>, koje
                  su koristili monasi. Upravo zahvaljujući tim pećinama, obližnji grad <strong>Peć</strong>
                  dobio je naziv, ali i <strong>Pećka patrijaršija</strong>. <strong>Manastirski kompleks</strong> sačinjen je
                  od <strong>četiri crkve</strong>, koje su građene u periodu dužem više od jednog veka –
                  tačnije, od <strong>30-ih godina 13. veka</strong> do <strong>polovine narednog</strong>.
                </p>
              </section>

              <img srcSet={`${peckaPatrijarsija22} 450w, ${peckaPatrijarsija2}`} alt="Pećka Patrijaršija 2" loading="lazy" />

              <section lang="sr">
                <p>
                  Osim <em>“zajedničke spoljne priprate na zapadnoj strani”</em>, u okviru
                  kompleksa <strong>manastira Pećka patrijaršija</strong> nalazi se <strong>crkva Svetih Apostola</strong>,
                  koja se smatra <strong>glavnom</strong>, kao i <strong>crkva posvećena Svetom Dimitriju</strong>. Tu je i
                  <strong>Bogorodičina crkva</strong>, ali i svetinja koja je manja od ostalih i
                  posvećena je <strong>Svetom Nikoli</strong>.
                  <br /><br />
                  <strong>Polovinom 14. veka</strong> ovaj manastirski kompleks postaje <strong>patrijaršija</strong>, i to
                  nakon što je iz <strong>Žiče</strong> upravo tu i zvanično preneto sedište tadašnje
                  <strong>arhiepiskopije</strong>. <strong>Patrijarh Makarije</strong>, rođeni brat <strong>Mehmed paše Sokolovića</strong>,
                  bio je prvi patrijarh nakon <em>obnove patrijaršije</em>, što se zbilo u <strong>drugoj polovini 16. veka</strong>.
                </p>
              </section>

              <img srcSet={`${peckaPatrijarsija33} 450w, ${peckaPatrijarsija3}`} alt="Pećka Patrijaršija 3" loading="lazy" />

              <section lang="sr">
                <p>
                  Budući da je <strong>prva među četiri svetinje</strong> podignuta, <strong>crkva Svetih Apostola</strong>
                  se smatra glavnom crkvom <strong>Pećke patrijaršije</strong> i funkcionisala je najpre kao
                  <strong>metoh manastira Žiča</strong>. Zbog svog naziva, smatra se da je trebalo da
                  funkcioniše kao <strong>grobna crkva</strong>, u koju će biti sahranjivani <strong>arhiepiskopi</strong>.
                  <br /><br />
                  Zahvaljujući <strong>nasledniku Svetog Save</strong>, <strong>arhiepiskopu Arseniju Prvom</strong>, nikla
                  je ova značajna <strong>bogomolja</strong>. Zanimljivo je pomenuti da je fasada <strong>crkve
                    Svetih Apostola</strong> bila istovetne, <strong>crvene boje</strong> kao i fasada manastira <strong>Žiča</strong>.
                </p>
              </section>

              <img srcSet={`${peckaPatrijarsija44} 450w, ${peckaPatrijarsija4}`} alt="Pećka Patrijaršija 4" loading="lazy" />

              <section lang="sr">
                <p>
                  Osim <strong>patrijarha Arsenija Prvog</strong>, u ovoj svetinji <strong>manastira Pećka
                    patrijaršija</strong> nalaze se i <strong>grobnice</strong> još dvojice arhiepiskopa – <strong>Joanikija
                      Drugog</strong> i <strong>Save Drugog</strong>.
                  <br /><br />
                  Oko <strong>veka docnije</strong> niče i <strong>crkva posvećena Svetom Dimitriju</strong>, i to zaslugom
                  <strong>arhiepiskopa Nikodima</strong>. U njoj se danas nalaze i <strong>mošti</strong> dvojice
                  patrijarha – <strong>Jefrema</strong> i <strong>Save Četvrtog</strong>.
                  <br /><br />
                  Nasuprot te crkve, oko <strong>1330. godine</strong>, podignuta je i <strong>Bogorodičina crkva</strong>.
                  U pitanju je <em>crkva Bogorodice Odigitrije</em>, odnosno <em>Bogorodice Putevoditeljke</em>.
                  <strong>Pećki arhiepiskop Danilo Drugi</strong> smatra se zaslužnim za gradnju te svetinje,
                  budući da je on bio taj koji je naredio njenu izgradnju. U toj crkvi se, u
                  <strong>mermernom sarkofagu ružičaste boje</strong>, nalaze i <strong>njegove mošti</strong>.
                  <br /><br />
                  Takođe, zaslugom <strong>arhiepiskopa Danila Drugog</strong> podignuta je i <strong>omanja crkva
                    posvećena Svetom Nikoli</strong>, kao i <strong>priprata</strong>.
                </p>
              </section>


            </>
          )
          :
          (
            <>


              <h2>Patriarchate of Peć</h2>

              <section lang="en">
                <p>
                  From the moment the first patriarch within the <strong>Serbian Patriarchate</strong>, which had then been restored, was enthroned in <strong>1924</strong> in the <strong>Patriarchate of Peć</strong> monastery, every subsequent patriarch has been enthroned in that very <strong>holy site</strong>, near <strong>Peć</strong>.
                  <br /><br />
                  In the <strong>gorge of the Pećka Bistrica River</strong>, there were once <strong>caves</strong> used by monks. Thanks to these caves, the nearby town of <strong>Peć</strong> received its name, as did the <strong>Patriarchate of Peć</strong>. The <strong>monastic complex</strong> consists of <strong>four churches</strong>, built over a period of more than a century — more precisely, from the <strong>1230s</strong> to the <strong>mid-14th century</strong>.
                </p>
              </section>

              <img srcSet={`${peckaPatrijarsija22} 450w, ${peckaPatrijarsija2}`} alt="Patriarchate of Peć 2" loading="lazy" />

              <section lang="en">
                <p>
                  Besides the <em>"shared outer narthex on the western side"</em>, the <strong>Patriarchate of Peć monastery</strong> complex includes the <strong>Church of the Holy Apostles</strong>, considered the <strong>main church</strong>, as well as the <strong>church dedicated to Saint Demetrius</strong>. There is also the <strong>Church of the Holy Mother of God</strong>, and a smaller sanctuary <strong>dedicated to Saint Nicholas</strong>.
                  <br /><br />
                  In the <strong>mid-14th century</strong>, this monastic complex became a <strong>patriarchate</strong> after the seat of the then <strong>archbishopric</strong> was officially transferred there from <strong>Žiča</strong>. <strong>Patriarch Makarije</strong>, the brother of <strong>Mehmed Pasha Sokolović</strong>, was the first patriarch following the <em>restoration of the patriarchate</em>, which occurred in the <strong>second half of the 16th century</strong>.
                </p>
              </section>

              <img srcSet={`${peckaPatrijarsija33} 450w, ${peckaPatrijarsija3}`} alt="Patriarchate of Peć 3" loading="lazy" />

              <section lang="en">
                <p>
                  As the <strong>first of the four sanctuaries</strong> built, the <strong>Church of the Holy Apostles</strong> is considered the main church of the <strong>Patriarchate of Peć</strong> and initially functioned as a <strong>dependency of the Žiča Monastery</strong>. Because of its name, it is believed to have been intended as a <strong>burial church</strong> for <strong>archbishops</strong>.
                  <br /><br />
                  Thanks to the <strong>successor of Saint Sava</strong>, <strong>Archbishop Arsenije I</strong>, this significant <strong>church</strong> was established. Interestingly, the <strong>facade of the Church of the Holy Apostles</strong> had the same <strong>red color</strong> as the facade of the <strong>Žiča Monastery</strong>.
                </p>
              </section>

              <img srcSet={`${peckaPatrijarsija44} 450w, ${peckaPatrijarsija4}`} alt="Patriarchate of Peć 4" loading="lazy" />

              <section lang="en">
                <p>
                  In addition to <strong>Patriarch Arsenije I</strong>, the <strong>Patriarchate of Peć Monastery</strong> also contains the <strong>tombs</strong> of two more archbishops — <strong>Joanikije II</strong> and <strong>Sava II</strong>.
                  <br /><br />
                  About <strong>a century later</strong>, the <strong>church dedicated to Saint Demetrius</strong> was built, thanks to <strong>Archbishop Nikodim</strong>. It now houses the <strong>relics</strong> of two patriarchs — <strong>Jefrem</strong> and <strong>Sava IV</strong>.
                  <br /><br />
                  Opposite that church, around <strong>1330</strong>, the <strong>Church of the Holy Mother of God</strong> was built. Specifically, it is the <em>Church of the Virgin Hodegetria</em>, also known as the <em>Virgin Guide</em>. <strong>Archbishop Danilo II of Peć</strong> is credited with the construction of this sanctuary, as he was the one who ordered its building. In that church, in a <strong>pink marble sarcophagus</strong>, lie his <strong>relics</strong>.
                  <br /><br />
                  Thanks to <strong>Archbishop Danilo II</strong>, a <strong>smaller church dedicated to Saint Nicholas</strong> and a <strong>narthex</strong> were also built.
                </p>
              </section>


            </>
          )}

      </div>
    </>
  );
};


export default PeckaPatrijarsija;