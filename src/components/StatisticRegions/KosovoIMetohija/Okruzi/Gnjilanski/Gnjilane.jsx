/* eslint-disable react/no-unknown-property */
/* eslint-disable no-useless-escape */
import gnjilane1 from "../../../../../assets/images/KosovoIMetohija/Gnjilanski/Gnjilane/desktop/gnjilane1.jpg";
import gnjilane2 from "../../../../../assets/images/KosovoIMetohija/Gnjilanski/Gnjilane/desktop/gnjilane2.jpg";
import gnjilane3 from "../../../../../assets/images/KosovoIMetohija/Gnjilanski/Gnjilane/desktop/gnjilane3.jpg";
import gnjilane4 from "../../../../../assets/images/KosovoIMetohija/Gnjilanski/Gnjilane/desktop/gnjilane4.jpg";
import gnjilane5 from "../../../../../assets/images/KosovoIMetohija/Gnjilanski/Gnjilane/desktop/gnjilane5.jpg";
import gnjilane6 from "../../../../../assets/images/KosovoIMetohija/Gnjilanski/Gnjilane/desktop/gnjilane6.jpg";
import gnjilane11 from "../../../../../assets/images/KosovoIMetohija/Gnjilanski/Gnjilane/mobile/Mgnjilane1.jpg";
import gnjilane22 from "../../../../../assets/images/KosovoIMetohija/Gnjilanski/Gnjilane/mobile/Mgnjilane2.jpg";
import gnjilane33 from "../../../../../assets/images/KosovoIMetohija/Gnjilanski/Gnjilane/mobile/Mgnjilane3.jpg";
import gnjilane44 from "../../../../../assets/images/KosovoIMetohija/Gnjilanski/Gnjilane/mobile/Mgnjilane4.jpg";
import gnjilane55 from "../../../../../assets/images/KosovoIMetohija/Gnjilanski/Gnjilane/mobile/Mgnjilane5.jpg";
import gnjilane66 from "../../../../../assets/images/KosovoIMetohija/Gnjilanski/Gnjilane/mobile/Mgnjilane6.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { gnjilanskiOkrugPathRoutes } from "./GnjilanskiOkrugPathRoutes";
import { useContextAuth } from "../../../../../Context";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const Gnjilane = () => {
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

        <title>{switchLanguage === 'rs' ? "Gnjilane – Istorija, kultura i poreklo imena | Serbia Wonders" : "Gnjilane – History, Culture, and the Origin of the Name | Serbia Wonders"}</title>
        <meta
          name="description"
          content={switchLanguage === 'rs' ?
            "Gnjilane je grad u Kosovskom Pomoravlju sa bogatom istorijom koja počinje još u srednjem veku pod imenom Morava. Prvi put se pominje 1342. godine. Grad je poznat po crkvi Svetog Nikole, manastiru kod Boževca i starim školama."
            :
            "Gnjilane (Gjilan) is a city in the Kosovo Pomoravlje region with medieval origins. First mentioned in 1342 as Morava, the city developed around religious and educational institutions such as the Church of St. Nicholas and the monastery near Boževce."
          }
        />
        <meta
          name="keywords"
          content={switchLanguage === 'rs' ?
            "Gnjilane, istorija Gnjilana, Kosovo i Metohija, Morava, Vučitrnski sandžak, kralj Stefan Dušan, Sveti Nikola, Boževce, Srpske crkve, Prilepac, knez Lazar, albansko poreklo imena, Gjilan"
            :
            "Gnjilane, Gjilan, Kosovo Pomoravlje, Stefan Dušan, medieval Serbia, Morava, Vučitrn Sanjak, St. Nicholas Church, Boževce Monastery, Prilepac, Prince Lazar, etymology of Gjilan"
          }
        />
        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/gnjilanski-okrug/gnjilane`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/gnjilanski-okrug/gnjilane"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/gnjilanski-okrug/gnjilane"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/gnjilanski-okrug/gnjilane"
        />

      </Helmet>


      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft className="arrowLeft" onClick={() => navigate(gnjilanskiOkrugPathRoutes.home(switchLanguage))} />
        <header></header>
        <img srcSet={`${gnjilane11} 450w, ${gnjilane1} `} alt="Gnjilane1" loading="lazy" />

        <h2>Gnjilane</h2>

        {switchLanguage === 'rs' ?
          (
            <>

              <section lang="sr">
                <p>
                  Osmanski hroničar <strong>Evliya Čelebija</strong> pominje Moravu kao naselje u sastavu
                  <strong>Vučitrnskog sandžaka</strong>. U svojim zapisima navodi: „Sedamnaesti dan
                  putovanja iz Carigrada, prešao sam Vranje, Novo Brdo, Krivu Reku i Moravu.” Poreklo
                  imena <strong>Gnjilane</strong> ostaje predmet rasprave. Prema nekim albanskim izvorima, naziv grada potiče
                  od <strong>Bahti-bega Đinolija</strong> iz klana <strong>Đinaj</strong>, koji je oko 1750. godine naselio ovo područje.
                  Ipak, ne postoje čvrsti dokazi za ovu tvrdnju. Srpski izvori ime povezuju sa rečju
                  <em>„gnjilo”</em>, što znači trulo.
                </p>
              </section>

              <img srcSet={`${gnjilane22} 450w, ${gnjilane2}`} alt="Gnjilane 2" loading="lazy" />

              <section lang="sr">
                <p>
                  Gnjilane se nalazi u jugoistočnom delu <strong>Kosova i Metohije</strong>, u regionu <strong>Kosovskog Pomoravlja</strong>.
                  Predstavlja jednu od najvećih opština u pokrajini. Kroz ovo područje protiču tri manje reke –
                  <strong>Binačka Morava</strong>, <strong>Banja</strong> i <strong>Stanišorka</strong> – koje se ulivaju u Binačku Moravu kod sela Ugljare.
                  Grad je udaljen <strong>46 km od Prištine</strong>, <strong>27 km od Kosovske Kamenice</strong>,
                  <strong>22 km od Vitine</strong> i <strong>25 km od Novog Brda</strong>.
                </p>
              </section>

              <img srcSet={`${gnjilane33} 450w, ${gnjilane3}`} alt="Gnjilane 3" loading="lazy" />

              <section lang="sr">
                <p>
                  U srednjem veku Gnjilane je bilo poznato kao <strong>Morava</strong> i predstavljalo je važan trgovački centar.
                  Prvi pisani trag o naselju potiče iz <strong>1342. godine</strong>, kada ga je posetio kralj <strong>Stefan Dušan</strong>.
                  Ime „Gnjilane” prvi put se pojavljuje krajem 14. veka u <strong>povelji kneginje Milice</strong>.
                  U <em>osmanskom defteru iz 1455. godine</em> selo se beleži kao „Gnjilan”, sa <strong>41 srpskim domaćinstvom</strong>.
                </p>
              </section>

              <img srcSet={`${gnjilane44} 450w, ${gnjilane4}`} alt="Gnjilane 4" loading="lazy" />

              <section lang="sr">
                <p>
                  Još od srednjeg veka u Gnjilanu su postojale crkve, poput one posvećene <strong>Svetoj Petki</strong>.
                  <strong>Manastir Svetog Jovana</strong> kod sela <strong>Boževce</strong> imao je veliko bratstvo, što potvrđuje monaško groblje.
                  Turci (ili „Arbanasi”) su ga razorili 1780. godine, a na njegovom mestu je kasnije nastala varoš.
                  Godine <strong>1861</strong>. u centru Gnjilana sagrađena je crkva posvećena <strong>Svetom Nikoli</strong>.
                  Temelji su podignuti korišćenjem kamena sa <strong>brda Odžin Kamen</strong> i ostataka tvrđave <strong>Prilepac</strong>.
                </p>
              </section>

              <img srcSet={`${gnjilane55} 450w, ${gnjilane5}`} alt="Gnjilane 5" loading="lazy" />

              <section lang="sr">
                <p>
                  Crkva je više puta stradala u požarima, a 1892. godine je potpuno izgorela. Obnovljena je 1900. godine
                  i poslednji put 1983. godine. U njoj se danas čuva zbirka <em>ikona, knjiga i crkvenih predmeta</em>.
                  Srpska škola je podignuta <strong>1895. godine</strong>. Iako je požar koji je uništio crkvu ometao planove,
                  meštani su nastavili gradnju škole. Osnovano je i udruženje <strong>„Ljubav”</strong>, koje je brinulo o školi i učenicima.
                </p>
              </section>

              <img srcSet={`${gnjilane66} 450w, ${gnjilane6}`} alt="Gnjilane 6" loading="lazy" />

              <section lang="sr">
                <p>
                  Postoji više predanja o poreklu naziva Gnjilana. Prema jednoj legendi, ime potiče od <strong>kovača koji je pravio ognjila</strong>.
                  Druga predanja kažu da je teren bio močvaran i gnjio. Albansko predanje navodi da je <strong>Bahti-beg Džinić</strong>
                  osnovao Gnjilane 1750. godine, zbog čega se u albanskom jeziku koristi naziv <strong>Gjilan</strong> ili <strong>Gilan</strong>.
                  Prvi podaci o naselju potiču iz <strong>prve polovine 14. veka</strong>, kada ga je posetio <strong>car Stefan Dušan</strong>,
                  prešavši čuveni <em>Masketarev most</em> na reci <em>Dobruši</em>. U obližnjem <strong>Prilepcu</strong> rođen je <strong>knez Lazar</strong>,
                  koji se 1389. godine suprotstavio islamskom širenju u <em>boju na Kosovu</em>.
                </p>
              </section>

            </>
          )
          :
          (
            <>

              <section lang="en">
                <p>
                  The Ottoman chronicler <strong>Evliya Çelebi</strong> mentioned Morava as a settlement within the
                  <strong>Vučitrn Sanjak</strong>. In his records, he states: "On the seventeenth day
                  of my journey from Constantinople, I passed through Vranje, Novo Brdo, Kriva Reka, and Morava."
                  The origin of the name <strong>Gnjilane</strong> remains a matter of debate. According to some Albanian sources, the town's name
                  comes from <strong>Bahti Beg Gjinolli</strong> of the <strong>Gjinaj</strong> clan, who settled the area around 1750.
                  However, there is no solid evidence to support this claim. Serbian sources associate the name
                  with the word <em>"gnjilo"</em>, meaning rotten or decayed.
                </p>
              </section>

              <img srcSet={`${gnjilane22} 450w, ${gnjilane2}`} alt="Gnjilane 2" loading="lazy" />

              <section lang="en">
                <p>
                  Gnjilane is located in the southeastern part of <strong>Kosovo and Metohija</strong>, in the region of <strong>Kosovo Pomoravlje</strong>.
                  It is one of the largest municipalities in the province. Three small rivers run through the area —
                  <strong>Binačka Morava</strong>, <strong>Banja</strong>, and <strong>Stanišorka</strong> — all of which flow into the Binačka Morava near the village of Ugljare.
                  The town is <strong>46 km from Priština</strong>, <strong>27 km from Kosovska Kamenica</strong>,
                  <strong>22 km from Vitina</strong>, and <strong>25 km from Novo Brdo</strong>.
                </p>
              </section>

              <img srcSet={`${gnjilane33} 450w, ${gnjilane3}`} alt="Gnjilane 3" loading="lazy" />

              <section lang="en">
                <p>
                  In the Middle Ages, Gnjilane was known as <strong>Morava</strong> and served as an important trade center.
                  The first written record of the settlement dates back to <strong>1342</strong>, when King <strong>Stefan Dušan</strong> visited.
                  The name “Gnjilane” first appeared in the late 14th century in a <strong>charter of Princess Milica</strong>.
                  In an <em>Ottoman cadastral record (defter) from 1455</em>, the village is recorded as “Gnjilan,” with <strong>41 Serbian households</strong>.
                </p>
              </section>

              <img srcSet={`${gnjilane44} 450w, ${gnjilane4}`} alt="Gnjilane 4" loading="lazy" />

              <section lang="en">
                <p>
                  Since the Middle Ages, Gnjilane had several churches, including one likely dedicated to <strong>Saint Petka</strong>.
                  The <strong>Monastery of Saint John</strong>, near the village of <strong>Boževce</strong>, had a large brotherhood, as evidenced by the monastic cemetery.
                  It was destroyed by the Turks (or "Arnauts") in 1780, and the town was later established on its site.
                  In <strong>1861</strong>, a church dedicated to <strong>Saint Nicholas</strong> was built in the center of Gnjilane.
                  Its foundation stones were brought from <strong>Odžin Kamen hill</strong> and the ruins of the fortress <strong>Prilepac</strong>.
                </p>
              </section>

              <img srcSet={`${gnjilane55} 450w, ${gnjilane5}`} alt="Gnjilane 5" loading="lazy" />

              <section lang="en">
                <p>
                  The church suffered several fires and was completely destroyed in 1892. It was rebuilt by 1900
                  and last renovated in 1983. Today, it houses a collection of <em>icons, books, and liturgical items</em>.
                  The Serbian school was built in <strong>1895</strong>. Although the church fire disrupted plans,
                  locals continued with school construction. A humanitarian society called <strong>“Ljubav” (Love)</strong> was founded to support the school and students.
                </p>
              </section>

              <img srcSet={`${gnjilane66} 450w, ${gnjilane6}`} alt="Gnjilane 6" loading="lazy" />

              <section lang="en">
                <p>
                  There are several legends about the origin of Gnjilane’s name. According to one, it comes from a <strong>blacksmith who made fire strikers (ognjila)</strong>.
                  Another says the area was marshy and muddy — <em>“gnjilo”</em> meaning rotten or boggy.
                  An Albanian tradition claims that <strong>Bahti Beg Džinić</strong> founded Gnjilane in 1750, which is why Albanians now use the name <strong>Gjilan</strong> or <strong>Gilan</strong>.
                  The earliest records of a settlement in this area date to the <strong>first half of the 14th century</strong>, when <strong>Emperor Stefan Dušan</strong> visited,
                  crossing the famous <em>Masketar’s Bridge</em> on the <em>Dobruša River</em>. Nearby, in the fortress <strong>Prilepac</strong>,
                  <strong>Prince Lazar</strong> was born, who opposed Ottoman expansion in the <em>Battle of Kosovo in 1389</em>.
                </p>
              </section>

            </>
          )}

      </div>
    </>
  );
};


export default Gnjilane;