/* eslint-disable react/no-unknown-property */
import mokraGora1 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/MokraGora/desktop/mokraGora1.jpg";
import mokraGora2 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/MokraGora/desktop/mokraGora2.jpg";
import mokraGora3 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/MokraGora/desktop/mokraGora3.jpg";
import mokraGora4 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/MokraGora/desktop/mokraGora4.jpg";
import mokraGora11 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/MokraGora/mobile/MmokraGora1.jpg";
import mokraGora22 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/MokraGora/mobile/MmokraGora2.jpg";
import mokraGora33 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/MokraGora/mobile/MmokraGora3.jpg";
import mokraGora44 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/MokraGora/mobile/MmokraGora4.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { zlatiborskiOkrugPathRoutes } from "./ZlatiborskiOkrugPahtRoutes";
import { useContextAuth } from "../../../../../Context";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const MokraGora = () => {
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
            ? "Mokra Gora | Park prirode Šargan - Mokra Gora, Šarganska osmica i Drvengrad"
            : "Mokra Gora | Nature Park Šargan - Mokra Gora, Sargan Eight & Drvengrad"}
        </title>

        <meta
          name="description"
          content={
            switchLanguage === 'rs'
              ? "Mokra Gora, smeštena između Tare i Zlatibora, poznata je po Šarganskoj osmici, prirodnim lepotama i etno selu Drvengrad. Idealna destinacija za odmor i avanturu."
              : "Mokra Gora, located between Tara and Zlatibor mountains, is famous for the Sargan Eight railway, untouched nature, and the Drvengrad ethno village. A perfect destination for rest and exploration."
          }
        />

        <meta
          name="keywords"
          content={
            switchLanguage === 'rs'
              ? "Mokra Gora, Šarganska osmica, Drvengrad, Kustendorf, Šargan, Park prirode, Tara, Zlatibor, ekoturizam, priroda Srbije, Šargan-Mokra Gora"
              : "Mokra Gora, Sargan Eight, Drvengrad, Kustendorf, Sargan, Nature Park, Tara, Zlatibor, ecotourism, Serbia nature, Sargan-Mokra Gora"
          }
        />

        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/sumadija-tekst-modal/sumadija-i-zapadna-srbija/zlatiborski-okrug/mokra-gora`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/sumadija-tekst-modal/sumadija-i-zapadna-srbija/zlatiborski-okrug/mokra-gora"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/sumadija-tekst-modal/sumadija-i-zapadna-srbija/zlatiborski-okrug/mokra-gora"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/sumadija-tekst-modal/sumadija-i-zapadna-srbija/zlatiborski-okrug/mokra-gora"
        />
      </Helmet>


      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft className="arrowLeft" onClick={() => navigate(zlatiborskiOkrugPathRoutes.home(switchLanguage))} />
        <header></header>
        <img srcSet={`${mokraGora11} 450w, ${mokraGora1} `} alt="Mokra Gora 1" loading="lazy" />

        <h2>Mokra Gora</h2>

        {switchLanguage === 'rs' ?
          (
            <>

              <section lang="sr">
                <p>
                  <strong>Mokra Gora</strong> je dolina u <strong>zapadnoj Srbiji</strong>, smeštena između planina
                  <strong>Tare</strong> i <strong>Zlatibora</strong>. Sa severa se povezuje sa <strong>Zborištem</strong>,
                  najvišim vrhom Tare, dok na jugu prelazi u Zlatibor. <strong>Park prirode „Šargan – Mokra gora“</strong>
                  prostire se na površini od <strong>10.813 hektara</strong>. Ovaj kraj karakteriše
                  <em>uzburkan reljef</em>, sa duboko uklesanim, strmim dolinama i klisurama reka
                  <strong>Beli Rzav</strong>, <strong>Crni Rzav</strong> i <strong>Kamiška reka</strong>. Iznad njih uzdižu se
                  mnogobrojni vrhovi i prevoji. Među najvrednijim prirodnim pojavama izdvajaju se
                  <strong>Hajdučka i Crvena pećina</strong>, a posebno impresivan je <strong>vodopad Skakavac</strong>.
                  Region je bogat <em>mineralnim izvorima</em>, a najpoznatiji među njima je
                  <strong>izvor Bele vode</strong>.
                </p>
              </section>

              <img srcSet={`${mokraGora22} 450w, ${mokraGora2} `} alt="Mokra Gora 2" loading="lazy" />

              <section lang="sr">
                <p>
                  Kompleksi <strong>autohtonih šuma crnog i belog bora</strong> na serpentinama, koje prirodno
                  čine stanište ovog područja, predstavljaju <em>pravi dragulj</em>. Ove šume, zajedno sa
                  mozaicima <strong>planinskih livada i pašnjaka</strong>, čine bogat ekosistem zahvaljujući
                  <em>specifičnoj geološkoj strukturi</em> i <em>povoljnim klimatskim uslovima</em>. Na ovom
                  području raste više od <strong>700 vrsta biljaka</strong>, među kojima se nalaze mnoge
                  <em>endemične</em> i <em>reliktne vrste</em>. U bogatoj fauni Mokre Gore, posebno se izdvaja
                  <strong>ornitofauna</strong>, sa <strong>60 registrovanih vrsta</strong>, od kojih je <strong>29 prirodnih retkosti</strong>.
                  Ovdje se mogu uočiti <strong>veliki tetreb</strong>, <strong>orao zmijar</strong>, <strong>planinska senica</strong>, a među
                  sisarima <strong>vuk</strong>, <strong>mrki medved</strong>, <strong>vidra</strong> i <strong>divlja mačka</strong>.
                </p>
              </section>

              <img srcSet={`${mokraGora33} 450w, ${mokraGora3} `} alt="Mokra Gora 3" loading="lazy" />

              <section lang="sr">
                <p>
                  <strong>Mokra Gora</strong> i <strong>Šargan</strong> su kroz istoriju bile deo <em>važnog putnog pravca</em>,
                  što potvrđuju ostatci <strong>starog rimskog kaldrmisanog puta</strong> i <strong>grobovi iz rimskog perioda</strong>.
                  Danas, ovaj region je najpoznatiji po <strong>„Šarganskoj osmici“</strong>, pruzi <em>uskog koloseka</em>
                  koja se ističe <strong>izuzetnim tehničkim rešenjem</strong> za savladavanje velikog uspona na
                  malom prostoru. Duž pruge postavljeni su brojni <strong>eksponati</strong>, poput starih
                  lokomotiva i vagona, koji su <em>zaštićeni kao spomenici tehničke kulture</em>, čineći
                  ovaj prostor <strong>jedinstvenim muzejom na otvorenom</strong>. Još jedna značajna atrakcija je
                  <strong>etno naselje „Drvengrad“</strong>, smešteno na uzvišenju <strong>Mećavnik</strong>, koje je sagrađeno prema
                  ideji poznatog filmskog reditelja <strong>Emira Kusturice</strong>.
                </p>
              </section>

              <img srcSet={`${mokraGora44} 450w, ${mokraGora4} `} alt="Mokra Gora 4" loading="lazy" />

              <section lang="sr">
                <p>
                  <strong>Mokra Gora</strong>, idilično planinsko selo smešteno na jugozapadu Srbije između
                  planina <strong>Tara</strong> i <strong>Zlatibor</strong>, savršeno je odredište za <em>odmor sa porodicom i prijateljima</em>.
                  Ovaj očaravajući kraj, poznat po <strong>„Šarganskoj osmici“</strong>, svojoj
                  <em>netaknutoj prirodi</em>, <em>bogatoj istoriji</em> i <em>tradiciji gostoprimstva</em>, nudi
                  raznovrsne opcije za smeštaj koje zadovoljavaju sve vrste ukusa i budžeta.
                  U Mokroj Gori možete birati između <strong>rustičnih drvenih kuća</strong>, <strong>modernih apartmana</strong> ili
                  <strong>luksuznih vila</strong>, pružajući savršen smeštaj za sve posetioce. Jedna od najvećih
                  atrakcija ovog kraja je <strong>etno selo Drvengrad</strong>, ili <strong>Kustendorf</strong>, koje je izgradio
                  poznati srpski reditelj <strong>Emir Kusturica</strong>. Ovo naselje privlači posetioce svojom
                  <em>jedinstvenom atmosferom</em> i <em>autentičnim izgledom</em>.
                </p>
              </section>

            </>
          )
          :
          (
            <>

              <section lang="en"> <p> <strong>Mokra Gora</strong> is a valley in <strong>western Serbia</strong>, located between the mountains of <strong>Tara</strong> and <strong>Zlatibor</strong>. To the north, it connects with <strong>Zborište</strong>, the highest peak of Tara, while in the south it transitions into Zlatibor. The <strong>“Šargan – Mokra Gora” Nature Park</strong> spans an area of <strong>10,813 hectares</strong>. This region is characterized by a <em>rugged terrain</em>, with deeply carved, steep river valleys and gorges of the <strong>Beli Rzav</strong>, <strong>Crni Rzav</strong>, and <strong>Kamiška River</strong>. Rising above them are numerous peaks and mountain passes. Among the most valuable natural features are the <strong>Hajdučka and Crvena Caves</strong>, while the <strong>Skakavac Waterfall</strong> stands out as particularly impressive. The region is rich in <em>mineral springs</em>, the most famous being the <strong>Bela Voda spring</strong>. </p> </section>
              <img srcSet={`${mokraGora22} 450w, ${mokraGora2}`} alt="Mokra Gora 2" loading="lazy" />

              <section lang="en"> <p> The complexes of <strong>native black and white pine forests</strong> growing on serpentine soils, which naturally inhabit this area, are a <em>true gem</em>. These forests, together with a mosaic of <strong>mountain meadows and pastures</strong>, create a rich ecosystem due to the <em>specific geological structure</em> and <em>favorable climate conditions</em>. More than <strong>700 plant species</strong> grow in this area, including many <em>endemic</em> and <em>relict species</em>. Among the rich fauna of Mokra Gora, the <strong>birdlife</strong> stands out, with <strong>60 registered species</strong>, <strong>29 of which are natural rarities</strong>. Notable species include the <strong>capercaillie</strong>, <strong>short-toed snake eagle</strong>, and <strong>willow tit</strong>, while among mammals there are <strong>wolves</strong>, <strong>brown bears</strong>, <strong>otters</strong>, and <strong>wildcats</strong>. </p> </section>
              <img srcSet={`${mokraGora33} 450w, ${mokraGora3}`} alt="Mokra Gora 3" loading="lazy" />

              <section lang="en"> <p> <strong>Mokra Gora</strong> and <strong>Šargan</strong> have historically been part of an <em>important transportation route</em>, as evidenced by remains of an <strong>ancient Roman cobblestone road</strong> and <strong>Roman-era graves</strong>. Today, this region is best known for the <strong>“Šargan Eight”</strong>, a <em>narrow-gauge railway</em> remarkable for its <strong>ingenious engineering</strong> that overcomes a steep incline in a small area. Along the railway, many <strong>exhibits</strong> such as old locomotives and railcars are placed, which are <em>protected as technical cultural monuments</em>, making this area a <strong>unique open-air museum</strong>. Another major attraction is the <strong>ethno village “Drvengrad”</strong>, located on the <strong>Mećavnik</strong> hill, built according to the vision of the renowned film director <strong>Emir Kusturica</strong>. </p> </section>
              <img srcSet={`${mokraGora44} 450w, ${mokraGora4}`} alt="Mokra Gora 4" loading="lazy" />

              <section lang="en"> <p> <strong>Mokra Gora</strong>, an idyllic mountain village nestled in southwestern Serbia between the <strong>Tara</strong> and <strong>Zlatibor</strong> mountains, is a perfect destination for a <em>vacation with family and friends</em>. This enchanting region, known for the <strong>“Šargan Eight”</strong>, its <em>unspoiled nature</em>, <em>rich history</em>, and <em>tradition of hospitality</em>, offers a wide variety of accommodation options to suit all tastes and budgets. In Mokra Gora, visitors can choose from <strong>rustic wooden houses</strong>, <strong>modern apartments</strong>, or <strong>luxurious villas</strong>, offering perfect lodging for all types of travelers. One of the region’s greatest attractions is the <strong>ethno village Drvengrad</strong>, also known as <strong>Kustendorf</strong>, built by the famous Serbian director <strong>Emir Kusturica</strong>. The village draws visitors with its <em>unique atmosphere</em> and <em>authentic appearance</em>. </p> </section>


            </>
          )}

      </div>
    </>
  );
};


export default MokraGora;