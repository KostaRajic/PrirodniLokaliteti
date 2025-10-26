/* eslint-disable react/no-unknown-property */
/* eslint-disable no-useless-escape */
import banjska1 from "../../../../../assets/images/KosovoIMetohija/Mitrovacki/ManastirBanjska/desktop/banjska1.jpg";
import banjska2 from "../../../../../assets/images/KosovoIMetohija/Mitrovacki/ManastirBanjska/desktop/banjska2.jpg";
import banjska3 from "../../../../../assets/images/KosovoIMetohija/Mitrovacki/ManastirBanjska/desktop/banjska3.jpg";
import banjska4 from "../../../../../assets/images/KosovoIMetohija/Mitrovacki/ManastirBanjska/desktop/banjska4.jpg";
import banjska11 from "../../../../../assets/images/KosovoIMetohija/Mitrovacki/ManastirBanjska/mobile/Mbanjska1.jpg";
import banjska22 from "../../../../../assets/images/KosovoIMetohija/Mitrovacki/ManastirBanjska/mobile/Mbanjska2.jpg";
import banjska33 from "../../../../../assets/images/KosovoIMetohija/Mitrovacki/ManastirBanjska/mobile/Mbanjska3.jpg";
import banjska44 from "../../../../../assets/images/KosovoIMetohija/Mitrovacki/ManastirBanjska/mobile/Mbanjska4.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { mitrovackiOkrugPathRoutes } from "./MitrovackiOkrugPathRoutes";
import { useContextAuth } from "../../../../../Context";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const ManastirBanjska = () => {
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

        <title>{switchLanguage === 'rs' ? "Manastir Banjska – Zadužbina kralja Milutina | Serbia Wonders" : "Banjska Monastery – Foundation of King Milutin | Serbia Wonders"}</title>
        <meta
          name="description"
          content={switchLanguage === 'rs' ?
            "Manastir Banjska je zadužbina kralja Milutina iz 14. veka, remek-delo raškog stila i duhovno središte Nemanjićke Srbije. Poznat po arhitekturi, freskama i 'banjskom zlatu'."
            :
            "Banjska Monastery is a 14th-century Serbian Orthodox endowment of King Milutin, built in the Raška style. Known for its lavish decoration, 'Banjska gold', and historical importance."
          }
        />
        <meta
          name="keywords"
          content={switchLanguage === 'rs' ?
            "Manastir Banjska, kralj Milutin, raški stil, crkva Svetog Stefana, Danilo Drugi, banjsko zlato, freske, srednjovekovni manastiri, Nemanjići, Teodora, kraljica, Dušan Silni"
            :
            "Banjska Monastery, King Milutin, Raška style, St. Stephen Church, Danilo II, Banjska gold, Serbian medieval monasteries, Queen Teodora, Emperor Dušan"
          }
        />
        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/mitrovacki-okrug/manatir-banjska`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/mitrovacki-okrug/manatir-banjska"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/mitrovacki-okrug/manatir-banjska"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/mitrovacki-okrug/manatir-banjska"
        />

      </Helmet>


      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft className="arrowLeft" onClick={() => navigate(mitrovackiOkrugPathRoutes.home(switchLanguage))} />
        <header></header>
        <img srcSet={`${banjska11} 450w, ${banjska1} `} alt="Crkva Svetog Stefana Manastir Banjska" loading="lazy" />

        {switchLanguage === 'rs' ?
          (
            <>

              <h1>Manastir Banjska</h1>

              <section lang="sr">
                <p>
                  Crkva <strong>Svetog Stefana</strong> izgrađena je na mestu starijeg uništenog hrama, a
                  tokom druge polovine <em>13. veka</em>, za vreme oca kralja Milutina, kralja
                  Uroša I, ovde je bilo sedište <strong>Banjske episkopije</strong>. Kralj Milutin je
                  episkopiju pretvorio u igumaniju "<em>na opštežilište monasima</em>". Oko
                  podizanja svoje zadužbine, kralj Milutin se, nakon saveta sa svojom
                  majkom, tada već monahinjom <strong>Jelenom</strong>, bratom <strong>Dragutinom</strong> i arhiepiskopom
                  <strong>Savom III</strong>, obratio <strong>Danilu Drugom</strong>, koji je kasnije postao prvi banjski
                  iguman i srpski arhiepiskop. Danilo je bio blizak kraljev saradnik i
                  poverenik, književnik, čovek velikog znanja i izgrađenog ukusa, jedan od
                  najprosvećenijih ljudi tog vremena među Srbima. Danilov životopisac kaže
                  da je kralj Milutin u Banjskoj, skupljajući "<em>mnogo svoje bogatstvo i
                    svoja imanja</em>", postavio Danila, koji je teško napustio Hilandar, za
                  čuvara kraljevske riznice.
                </p>
              </section>

              <img srcSet={`${banjska22} 450w, ${banjska2} `} alt="Manastir Banjska 2" loading="lazy" />

              <section lang="sr">
                <p>
                  Zidanje crkve posvećene <strong>Svetom Stefanu</strong>, zaštitniku svih Nemanjića i
                  verovatno prvoj srpskoj slavi, započelo je krajem <em>1312. godine</em>. Po
                  izričitoj želji kralja, novo zdanje trebalo je biti podignuto "<em>na sliku
                    Svete Bogorodice Studeničke</em>". Pokušavajući da u gradnji imituju više od
                  vek i po stariju <strong>Studenicu</strong>, grobnu crkvu osnivača dinastije, Stefana
                  Nemanje (<strong>Svetog Simeona</strong>), graditelji su se ponašali prilično slobodno,
                  pa je uzor u stvari bio samo sledjen u osnovnim crtama. "<em>Banjska najviše
                    prati svoj uzor u obradi fasada skupocenim kamenom i u arhitektonskom
                    ukrasu</em>", kako tvrde istoričari umetnosti.
                </p>
              </section>

              <img srcSet={`${banjska33} 450w, ${banjska3} `} alt="Manastir Banjska 3" loading="lazy" />

              <section lang="sr">
                <p>
                  Po svojoj arhitekturi, <strong>manastir Banjska</strong> spada u grupu crkava raškog
                  stila. Priprata je imala dve kule (zvonike) na zapadnoj strani. Crkva je
                  bila obložena blokovima crvenog, plavog i belog mermera. Pored toga,
                  fasada hrama Sv. Stefana bila je bogato ukrašena skulpturama i kamenim
                  plastikama. "<em>To je bila snažna, visoka, elegantna trobrodna crkva sa
                    visokim poprečnim brodom i kupolom u sredini. Na njenim širokim i ravnim
                    fasadama smenjivale su se trobojne površine kamena sa raskošnim
                    reljefima koji su pokrivali okvire prozora i portala. Spoj jedinstvenog
                    koloriteta i mekanog, toplog reljefa raške tradicije davao je banjskim
                    fasadama svečani izgled, po kojima bi im mogle biti ravne samo toskanske
                    fasade sijenjske katedrale.</em>"
                  <br />
                  Glavni ponos Banjske bilo je čuveno "<strong>banjsko zlato</strong>", opevano u narodnoj
                  pesmi i opisano u onovremenim putopisima. Činili su ga tanki zlatni
                  listići kojima je bila obložena pozadina fresaka, takođe po uzoru na
                  manastire <strong>Studenicu</strong>, <strong>Mileševu</strong> i <strong>Sopoćane</strong>. Danas je od tog živopisa
                  očuvano samo nekoliko izbledelih fragmenata.
                </p>
              </section>



              <img srcSet={`${banjska44} 450w, ${banjska4} `} alt="Manastir Banjska 4" loading="lazy" />

              <section lang="sr">
                <p>
                  Kada se kralj Milutin <em>1321. godine упокојио у свом двору у Неродимљу</em>, a
                  arhiepiskop <strong>Danilo</strong> preneo njegovo telo u <strong>Banjsku</strong>, crkva je velikog
                  zadužbinara dočekala u punom sjaju svoje impozantne arhitekture,
                  oduhovljene raskošnim fresko-slikarstvom i crkvenom umetnošću. U
                  <strong>Banjskoj</strong> je, u severnoj kapeli, kasnije sahranjena i kraljica <strong>Teodora</strong>,
                  supruga <strong>Stefana Dečanskog</strong> i majka cara <strong>Dušana</strong>, zbog čega je car <strong>Dušan</strong>,
                  povodom svog krunisanja <em>1346. godine</em>, već bogatoj Banjskoj darovao novim
                  posjedima putem povelje.
                </p>
              </section>

            </>
          )
          :
          (
            <>

              <h1>Banjska Monastery</h1>

              <section lang="en">
                <p>
                  The Church of <strong>Saint Stefan</strong> was built on the site of an older destroyed temple, and
                  during the second half of the <em>13th century</em>, under the reign of King Milutin's father, King
                  Uroš I, it served as the seat of the <strong>Banjska Diocese</strong>. King Milutin transformed
                  the diocese into a monastery "<em>as a common dwelling for monks</em>". Around
                  the establishment of his endowment, King Milutin, after consulting with his
                  mother, by then already a nun <strong>Jelena</strong>, his brother <strong>Dragutin</strong>, and Archbishop
                  <strong>Sava III</strong>, turned to <strong>Danilo II</strong>, who later became the first abbot of Banjska
                  and Serbian archbishop. Danilo was a close royal collaborator and
                  confidant, a writer, a man of great knowledge and cultivated taste, one of
                  the most enlightened people of that time among the Serbs. Danilo’s biographer says
                  that King Milutin, gathering "<em>much of his wealth and properties</em>" in Banjska,
                  appointed Danilo, who reluctantly left Hilandar, as
                  the keeper of the royal treasury.
                </p>
              </section>

              <img srcSet={`${banjska22} 450w, ${banjska2} `} alt="Banjska Monastery 2" loading="lazy" />

              <section lang="en">
                <p>
                  The construction of the church dedicated to <strong>Saint Stefan</strong>, protector of all the Nemanjić dynasty and
                  probably the first Serbian patron saint, began at the end of <em>1312</em>. By
                  the explicit wish of the king, the new building was to be erected "<em>in the image of
                    the Holy Mother of God of Studenica</em>". Trying to imitate in construction more than
                  a century and a half older Studenica, the burial church of the dynasty’s founder, Stefan
                  Nemanja (<strong>Saint Simeon</strong>), the builders acted rather freely,
                  so the model was actually followed only in basic outlines. "<em>Banjska mostly
                    follows its model in the processing of facades with precious stone and architectural
                    decoration</em>", according to art historians.
                </p>
              </section>

              <img srcSet={`${banjska33} 450w, ${banjska3} `} alt="Banjska Monastery 3" loading="lazy" />

              <section lang="en">
                <p>
                  By its architecture, <strong>Banjska Monastery</strong> belongs to the group of churches in the Raška style.
                  The narthex had two towers (bell towers) on the western side. The church was
                  faced with blocks of red, blue, and white marble. Moreover,
                  the facade of the Church of St. Stefan was richly decorated with sculptures and stone
                  reliefs. "<em>It was a strong, tall, elegant three-naved church with
                    a high transept and a dome in the middle. On its wide and flat
                    facades, tri-colored stone surfaces alternated with lavish
                    reliefs that covered the window and portal frames. The combination of a unique
                    color scheme and the soft, warm relief of the Raška tradition gave Banjska’s
                    facades a festive appearance, comparable only to the Tuscan
                    facades of the Siena Cathedral.</em>"
                  <br />
                  The main pride of Banjska was the famous "<strong>Banjska gold</strong>", celebrated in folk
                  songs and described in contemporary travel accounts. It consisted of thin gold
                  leafs that covered the background of the frescoes, also modeled after
                  the monasteries <strong>Studenica</strong>, <strong>Mileševa</strong>, and <strong>Sopoćani</strong>. Today, only a few faded fragments
                  of that painting remain.
                </p>
              </section>

              <img srcSet={`${banjska44} 450w, ${banjska4} `} alt="Banjska Monastery 4" loading="lazy" />

              <section lang="en">
                <p>
                  When King Milutin <em>passed away in 1321 in his court at Nerodimlje</em>,
                  and Archbishop <strong>Danilo</strong> transferred his body to <strong>Banjska</strong>, the church of the great
                  benefactor received him in full glory of its imposing architecture,
                  enlivened by lavish fresco painting and church art. In
                  <strong>Banjska</strong>, in the northern chapel, Queen <strong>Teodora</strong>, wife of <strong>Stefan Dečanski</strong>
                  and mother of Emperor <strong>Dušan</strong>, was later buried. Because of this, Emperor <strong>Dušan</strong>,
                  on the occasion of his coronation in <em>1346</em>, granted Banjska new
                  estates through a charter.
                </p>
              </section>


            </>
          )}

      </div>
    </>
  );
};


export default ManastirBanjska;