/* eslint-disable react/no-unknown-property */
import djakovica1 from "../../../../../assets/images/KosovoIMetohija/Djakovicki/Djakovica/desktop/djakovica1.jpg";
import djakovica2 from "../../../../../assets/images/KosovoIMetohija/Djakovicki/Djakovica/desktop/djakovica2.jpg";
import djakovica3 from "../../../../../assets/images/KosovoIMetohija/Djakovicki/Djakovica/desktop/djakovica3.jpg";
import djakovica4 from "../../../../../assets/images/KosovoIMetohija/Djakovicki/Djakovica/desktop/djakovica4.jpg";
import djakovica5 from "../../../../../assets/images/KosovoIMetohija/Djakovicki/Djakovica/desktop/djakovica5.jpg";
import djakovica11 from "../../../../../assets/images/KosovoIMetohija/Djakovicki/Djakovica/mobile/Mdjakovica1.jpg";
import djakovica22 from "../../../../../assets/images/KosovoIMetohija/Djakovicki/Djakovica/mobile/Mdjakovica2.jpg";
import djakovica33 from "../../../../../assets/images/KosovoIMetohija/Djakovicki/Djakovica/mobile/Mdjakovica3.jpg";
import djakovica44 from "../../../../../assets/images/KosovoIMetohija/Djakovicki/Djakovica/mobile/Mdjakovica4.jpg";
import djakovica55 from "../../../../../assets/images/KosovoIMetohija/Djakovicki/Djakovica/mobile/Mdjakovica5.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { djakovickiOkrugPathRoutes } from "./DjakovickiOkrugPathRoutes";
import { useContextAuth } from "../../../../../Context";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const Djakovica = () => {
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

        <title>{switchLanguage === 'rs' ? "Đakovica – Kulturno i Istorijsko Središte Metohije | Serbia Wonders" : "Đakovica (Gjakova) – Cultural and Historical Center of Metohija | Serbia Wonders"}</title>
        <meta
          name="description"
          content={switchLanguage === 'rs' ?
            "Đakovica je istorijski značajan grad u Metohiji, poznat po Hadum džamiji, crkvi Uspenja Bogorodice, staroj čaršiji i burnoj prošlosti. Središte zanatstva, religije i kulture na Kosovu i Metohiji."
            :
            "Gjakova, also known as Đakovica, is a historically important city in Metohija, featuring Hadum Mosque, the Church of the Dormition of the Virgin, and an old bazaar. A crossroads of crafts, culture, and religion."
          }
        />
        <meta
          name="keywords"
          content={switchLanguage === 'rs' ?
            "Đakovica, Gjakova, Kosovo i Metohija, Pećki okrug, Hadum džamija, Crkva Uspenja Bogorodice, čaršija Đakovice, istorija Đakovice, manastir Dečani, kulturno nasleđe Metohije"
            :
            "Gjakova, Đakovica, Kosovo and Metohija, Pec District, Hadum Mosque, Orthodox Church Gjakova, Decani Monastery, old bazaar, Serbian heritage, cultural landmarks Kosovo"
          }
        />
        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/djakovicki-okrug/djakovica`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/djakovicki-okrug/djakovica"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/djakovicki-okrug/djakovica"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/djakovicki-okrug/djakovica"
        />
      </Helmet>


      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft className="arrowLeft" onClick={() => navigate(djakovickiOkrugPathRoutes.home(switchLanguage))} />
        <header></header>
        <img srcSet={`${djakovica11} 450w, ${djakovica1} `} alt="Đakovica 1" loading="lazy" />

        <h2>Đakovica</h2>

        {switchLanguage === 'rs' ?
          (
            <>

              <section lang="sr">
                <p>
                  <strong>Gjakova</strong> je grad i administrativno sedište opštine Gjakova u južnom delu
                  Kosova i Metohije, koje pripada <strong>Pećkom okrugu</strong>. Gradska površina obuhvata
                  tri katastarske opštine: <strong>Đakovica-varoš</strong> (254 ha), <strong>Đakovica-van varoš</strong>
                  (2.227 ha) i <strong>Sadik-agin zid</strong> (299 ha). Grad je smešten u donjem delu
                  <strong>Metohije</strong>, okružen dolinama reka <em>Belog Drima</em>, <em>Ribnika (Erenik)</em>,
                  <em>Krene</em> i <em>Miruše</em>. Okolna brda i planine čine ga impresivnim, sa vrhovima
                  <strong>Prokletija</strong>, <strong>Paštrika</strong> i <strong>Koritnika</strong>.
                </p>
              </section>

              <img srcSet={`${djakovica22} 450w, ${djakovica2} `} alt="Đakovica 2" loading="lazy" />

              <section lang="sr">
                <p>
                  Grad je ime dobio po manje poznatom vlastelinu i vazalu <strong>Vuka Brankovića</strong>,
                  <strong>Jakovu</strong>, koji je imao posede u tom području. Očuvan je njegov novac sa
                  natpisom <em>"Iakov"</em>, od kojeg je izvedeno ime <strong>Đakov</strong>. Đakovica se kao
                  gradsko naselje razvila u <strong>srednjem veku</strong>. Njena geografska pozicija bila je
                  veoma pogodna za razvoj <em>zanatstva</em> i <em>trgovine</em>. U <strong>19. veku</strong>, grad se prostirao
                  na obe obale reke, a <strong>1900. godine</strong> bilo je čak <strong>12 mostova</strong>. U turskom popisu iz
                  <strong>1485. godine</strong>, Đakovica se pominje kao selo sa 67 domaćinstava i seoskim popom.
                  Većina ličnih imena bila su srpska, izuzev dva albanskog porekla.
                </p>
              </section>

              <img srcSet={`${djakovica33} 450w, ${djakovica3} `} alt="Đakovica 3" loading="lazy" />

              <section lang="sr">
                <p>
                  Od <strong>16. veka</strong>, u vreme obnovljene <strong>Pećke patrijaršije</strong>, u Đakovici je postojala
                  <strong>Crkva Uspenja Bogorodice</strong>, metoh manastira <strong>Dečani</strong>. Ktitor crkve bio je
                  <strong>Stefan Uroš III Dečanski</strong>. Iz nje potiče zvono sa grčkim natpisom, koje se danas
                  čuva u manastiru Dečani. Crkva je mala, prizemna, pravougaona, a konak predstavlja
                  primer stare gradske kuće iz <strong>19. veka</strong>. U njoj je bila smeštena vredna zbirka ikona
                  i crkvenih predmeta iz <strong>18. i 19. veka</strong>. Posebnu umetničku vrednost ima okovana
                  ikona <em>Uspenja Bogorodice</em> iz <strong>17. veka</strong>. Crkva je <strong>1967. godine</strong> registrovana kao
                  spomenik kulture.
                </p>
              </section>

              <img srcSet={`${djakovica44} 450w, ${djakovica4} `} alt="Đakovica 4" loading="lazy" />

              <section lang="sr">
                <p>
                  Razvoj grada može se pratiti od kraja <strong>16. veka</strong>, kada je sagrađena
                  <strong>Hadum-džamija</strong>, najstarija očuvana građevina. Oko nje je formirana čaršija.
                  U sklopu kompleksa nalaze se i <em>mekteb</em>, <em>biblioteka</em> i manje groblje. Kasnije su
                  dodati <em>hanovi</em> i <em>tursko kupatilo</em> (sada srušeno). Urbani kompleks stare čaršije
                  upisan je <strong>1955. godine</strong> u registar spomenika kulture Srbije.
                </p>
              </section>

              <img srcSet={`${djakovica55} 450w, ${djakovica5} `} alt="Đakovica 5" loading="lazy" />

              <section lang="sr">
                <p>
                  U Đakovici je bilo sedište <em>kaimakama</em> i <em>suda</em>, a tu su se nalazile i kasarna,
                  pošta, telegraf i opštinska zgrada. Čaršija je bila podeljena na više delova:
                  na desnoj obali reke nalazile su se <strong>Glavna</strong> i <strong>Žitna</strong>, a na levoj <strong>Mala</strong>,
                  <strong>Drvarska</strong>, <strong>Ćerimova</strong> i <strong>Marvna</strong>. Godine <strong>1900.</strong> na obali reke postojala je
                  fabrika za <em>tabakanje kože</em> i nekoliko <em>prostih mlinova</em>. U <strong>18. veku</strong> radila je
                  <strong>srpska pravoslavna Bogoslovija</strong>.
                </p>
              </section>


            </>
          )
          :
          (
            <>

              <section lang="en">
                <p>
                  <strong>Gjakova</strong> is a town and the administrative center of the Gjakova municipality in the southern part of
                  Kosovo and Metohija, belonging to the <strong>Peć District</strong>. The urban area includes
                  three cadastral zones: <strong>Đakovica-town</strong> (254 ha), <strong>Đakovica-outside town</strong>
                  (2,227 ha), and <strong>Sadik-aga's wall</strong> (299 ha). The town is located in the lower part of
                  <strong>Metohija</strong>, surrounded by the valleys of the <em>White Drin</em>, <em>Ribnik (Erenik)</em>,
                  <em>Krena</em>, and <em>Miruša</em> rivers. The surrounding hills and mountains make it impressive,
                  with peaks of the <strong>Prokletije</strong>, <strong>Paštrik</strong>, and <strong>Koritnik</strong> mountains.
                </p>
              </section>

              <img srcSet={`${djakovica22} 450w, ${djakovica2} `} alt="Gjakova 2" loading="lazy" />

              <section lang="en">
                <p>
                  The town was named after a lesser-known nobleman and vassal of <strong>Vuk Branković</strong>,
                  <strong>Jakov</strong>, who held estates in the area. His coin with the inscription <em>"Iakov"</em>
                  has been preserved, from which the name <strong>Đakov</strong> is derived. Gjakova developed
                  as an urban settlement in the <strong>Middle Ages</strong>. Its geographical position was very
                  favorable for the development of <em>crafts</em> and <em>trade</em>. In the <strong>19th century</strong>, the town
                  extended on both sides of the river, and by <strong>1900</strong>, there were as many as
                  <strong>12 well-built bridges</strong>. In the extensive Ottoman census of <strong>1485</strong>, Gjakova is
                  mentioned as a village with 67 households and a village priest. Most personal names
                  in the census were Serbian, except for two likely of Albanian origin.
                </p>
              </section>

              <img srcSet={`${djakovica33} 450w, ${djakovica3} `} alt="Gjakova 3" loading="lazy" />

              <section lang="en">
                <p>
                  Since the <strong>16th century</strong>, during the restoration of the <strong>Patriarchate of Peć</strong>,
                  Gjakova had the <strong>Church of the Dormition of the Virgin</strong>, a metochion of the
                  <strong>Dečani Monastery</strong>. The church's patron was <strong>Stefan Uroš III Dečanski</strong>. A large
                  bell with a Greek inscription, now kept in the treasury of the Dečani Monastery,
                  likely originated from this church. It is a small, single-story, rectangular building,
                  and its parish house is a fine example of a 19th-century city home. The church housed
                  a valuable collection of icons and religious objects from the <strong>18th and 19th centuries</strong>.
                  Of particular artistic value is a decorated icon of the <em>Dormition of the Virgin</em>
                  from the <strong>17th century</strong>. In <strong>1967</strong>, the church was registered as a cultural monument.
                </p>
              </section>

              <img srcSet={`${djakovica44} 450w, ${djakovica4} `} alt="Gjakova 4" loading="lazy" />

              <section lang="en">
                <p>
                  The development of the town can be traced back to the late <strong>16th century</strong>, when
                  the oldest preserved structure, the <strong>Hadum Mosque</strong>, was built, around which
                  a bazaar formed. The complex also includes a <em>mekteb</em> (Islamic elementary school),
                  <em>library</em>, and a small cemetery. Later, <em>inns</em> were added for merchants and travelers,
                  as well as a <em>Turkish bath</em>, which has since been demolished. The urban complex of the
                  old bazaar was inscribed in the Register of Cultural Monuments of Serbia in <strong>1955</strong>.
                </p>
              </section>

              <img srcSet={`${djakovica55} 450w, ${djakovica5} `} alt="Gjakova 5" loading="lazy" />

              <section lang="en">
                <p>
                  Gjakova was home to the offices of the <em>kaimakam</em> (district governor) and a <em>court</em>,
                  along with barracks, a post office, a telegraph station, and a municipal building.
                  The bazaar was divided into several sections: on the right riverbank were the
                  <strong>Main</strong> and <strong>Grain</strong> quarters, while on the left were <strong>Small</strong>,
                  <strong>Woodworkers’</strong>, <strong>Ćerim's</strong>, and <strong>Cattle</strong> quarters. By <strong>1900</strong>, a leather processing
                  factory and several simple mills operated along the river. In the <strong>18th century</strong>,
                  a <strong>Serbian Orthodox Theological Seminary</strong> operated in the area.
                </p>
              </section>


            </>
          )}

      </div>
    </>
  );
};


export default Djakovica;