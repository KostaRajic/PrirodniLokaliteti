/* eslint-disable react/no-unknown-property */
import maglic1 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RaskiOkrug/TvrdjavaMaglic/desktop/maglic1.jpg";
import maglic2 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RaskiOkrug/TvrdjavaMaglic/desktop/maglic2.jpg";
import maglic3 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RaskiOkrug/TvrdjavaMaglic/desktop/maglic3.jpg";
import maglic4 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RaskiOkrug/TvrdjavaMaglic/desktop/maglic4.jpg";
import maglic5 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RaskiOkrug/TvrdjavaMaglic/desktop/maglic5.jpg";
import maglic11 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RaskiOkrug/TvrdjavaMaglic/mobile/Mmaglic1.jpg";
import maglic22 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RaskiOkrug/TvrdjavaMaglic/mobile/Mmaglic2.jpg";
import maglic33 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RaskiOkrug/TvrdjavaMaglic/mobile/Mmaglic3.jpg";
import maglic44 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RaskiOkrug/TvrdjavaMaglic/mobile/Mmaglic4.jpg";
import maglic55 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RaskiOkrug/TvrdjavaMaglic/mobile/Mmaglic5.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { raskiOkrugPathRoutes } from "./RaskiOkrugPathRoutes";
import { useContextAuth } from "../../../../../Context";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const TvrdjavaMaglic = () => {
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
            ? "Tvrđava Maglič – Tajanstveni srednjovekovni zamak Srbije | Srbija Wonders"
            : "Maglič Fortress – The Mysterious Medieval Castle of Serbia | Serbia Wonders"}
        </title>

        <meta
          name="description"
          content={
            switchLanguage === 'rs'
              ? "Tvrđava Maglič, smeštena iznad Ibra kod Kraljeva, jedna je od najbolje očuvanih srednjovekovnih tvrđava u Srbiji. Poznata po sedam kula, istoriji i fantastičnom pogledu, idealna je za izlet i kulturni turizam."
              : "Maglič Fortress, located above the Ibar River near Kraljevo, is one of the best-preserved medieval fortresses in Serbia. Known for its seven towers, rich history, and scenic views, it is perfect for cultural tourism and day trips."}
        />

        <meta
          name="keywords"
          content={
            switchLanguage === 'rs'
              ? "Tvrđava Maglič, srednjovekovne tvrđave Srbija, Kraljevo, Ibar, arhiepiskop Danilo II, istorijski turizam, tvrđave Srbije, srpski Kamelot"
              : "Maglič Fortress, medieval fortresses Serbia, Kraljevo, Ibar River, Archbishop Danilo II, historical tourism, Serbian Camelot"}
        />

        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/sumadija-tekst-modal/sumadija-i-zapadna-srbija/raski-okrug/tvrdjava-maglic`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/sumadija-tekst-modal/sumadija-i-zapadna-srbija/raski-okrug/tvrdjava-maglic"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/sumadija-tekst-modal/sumadija-i-zapadna-srbija/raski-okrug/tvrdjava-maglic"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/sumadija-tekst-modal/sumadija-i-zapadna-srbija/raski-okrug/tvrdjava-maglic"
        />
      </Helmet>


      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft className="arrowLeft" onClick={() => navigate(raskiOkrugPathRoutes.home(switchLanguage))} />
        <header></header>
        <img srcSet={`${maglic11} 450w, ${maglic1} `} alt="Kraljevo 1" />

        {switchLanguage === 'rs' ?
          (
            <>

              <h1 style={{ color: "white" }}>Tvrđava Maglič</h1>

              <section lang="sr">
                <p>
                  <strong>Maglič</strong> je jedna od <strong>najbolje očuvanih srednjovekovnih tvrđava u Srbiji</strong>, smeštena oko <strong>30 kilometara od Kraljeva</strong>.
                  Nalazi se na <strong>glavnom putu</strong> ka <em>Novom Pazaru, Crnoj Gori</em> i <em>Kosovu i Metohiji</em>.
                  Tvrđava je podignuta na <strong>visokoj steni</strong> iznad <em>Ibarske doline</em>, a do nje vodi uređena staza sa <em>klupama za odmor</em>.
                  Ime <strong>Maglič</strong> potiče od <em>magle</em> koja često obavija tvrđavu, dajući joj <strong>tajanstven izgled</strong>.
                  Poreklo tvrđave je i dalje <em>nepoznato</em>, ali se smatra da je izgrađena <strong>nakon mongolske invazije 1240. godine</strong>.
                  Prvi pisani tragovi potiču iz <strong>1337. godine</strong>, kada je <strong>arhiepiskop Danilo II</strong> podigao palate i ćelije na Magliču.
                </p>
              </section>

              <img srcSet={`${maglic22} 450w, ${maglic2}`} alt="Tvrđava Maglič - panorama" />

              <section lang="sr">
                <p>
                  <strong>Tvrđava Maglič</strong> sastoji se od <strong>sedam kula</strong> visine oko <strong>10 metara</strong>, dok glavna <strong>Donžon kula</strong>
                  doseže <strong>oko 20 metara</strong>. Opasana je <em>debelim zidinama</em> i nepravilnog je oblika zbog <strong>neravnog terena</strong>.
                  Dimenzije tvrđave su oko <strong>100 metara dužine</strong> i <strong>40 metara širine</strong>.
                  U njenoj unutrašnjosti nalaze se <em>dva dvorišta</em> – manji i veći – sa <strong>ruševinama crkve Svetog Đorđa</strong>, <strong>palatom</strong>,
                  <strong>pekarom</strong> i <strong>dvema cisternama za vodu</strong>.
                  Maglič je poznat i kao <em>srpski Kamelot</em>, a zbog <strong>očuvanog izgleda</strong> i <em>misteriozne atmosfere</em> često privlači <strong>filmske ekipe</strong>.
                  U njemu je sniman nastavak filma <em>„Ironclad“</em>, a filmska ekipa je bila oduševljena <strong>autentičnošću zidina</strong>.
                </p>
              </section>

              <img srcSet={`${maglic33} 450w, ${maglic3}`} alt="Unutrašnjost Magliča - arheološke ruševine" />

              <section lang="sr">
                <p>
                  <strong>Istorijski podaci</strong> o Magliču su prilično <em>oskudni</em>. Arheološka istraživanja su pokazala da je na ovom mestu postojala
                  <strong>starija utvrda</strong> iz <strong>kraja 11. ili početka 12. veka</strong>, kada je područje bilo pod <strong>Vizantijskim carstvom</strong>.
                  Verovatno je to bio <em>mali kastel</em> podignut na <em>prirodno zaštićenoj lokaciji</em>, karakterističnoj za graditeljstvo <strong>dinastije Komnina</strong>.
                  Ta prvobitna tvrđava je <strong>uništena u požaru</strong> i potom <em>napuštena</em>.
                  <br /><br />
                  Postoji više <strong>teorija</strong> o izgradnji današnje tvrđave. Jedna pretpostavlja da ju je podigao <strong>kralj Uroš I (1241/1242–1276)</strong>
                  nakon <em>mongolskih upada</em>, kako bi zaštitio dolinu Ibra i <strong>manastire Sopoćane i Studenicu</strong>.
                </p>
              </section>

              <img srcSet={`${maglic44} 450w, ${maglic4}`} alt="Ulaz u Maglič - pogled sa staze" />

              <section lang="sr">
                <p>
                  Druga teorija smešta izgradnju u <strong>početak 13. veka</strong>, za vreme <strong>Stefana Prvovenčanog (1196–1227)</strong>, sa ciljem
                  <strong>zaštite manastira Žiče i Studenice</strong>. Ipak, verovatnije je da je gradnja započela krajem 13. ili početkom 14. veka,
                  paralelno sa <strong>obnovom manastira Žiče</strong> nakon <strong>razaranja 1292. godine</strong>.
                  Novo utvrđenje bilo je <em>prostranije</em>, a stari ostaci su uklonjeni.
                  <br /><br />
                  Kako je <strong>srednjovekovna srpska država</strong> rasla, <strong>Maglič je izgubio strateški značaj</strong> i postao utvrđenje unutar teritorije.
                  Tokom <strong>14. veka</strong>, služio je kao <em>utočište arhiepiskopa Danila II (1324–1337)</em>, koji je izgradio <strong>palate</strong> i
                  iz Magliča <em>vodio crkvene i državne poslove</em>. U tvrđavi je bilo organizovano i <strong>prepisivanje crkvenih knjiga</strong>.
                </p>
              </section>

              <img srcSet={`${maglic55} 450w, ${maglic5}`} alt="Crkva u Kraljevu - verski spomenici u okolini Magliča" />

              <section lang="sr">
                <p>
                  <strong>Ne postoje precizni podaci</strong> o tome kada je Maglič <strong>paо pod tursku vlast</strong>, ali se pretpostavlja da je to bilo oko
                  <strong>1459. godine</strong>, kada je pripojen <em>Osmanskom carstvu</em>. Nakon osvajanja, tvrđava je bila <strong>sedište nahije</strong>.
                  Tokom <strong>borbi 1683. godine</strong>, ustanici su <strong>nakratko oslobodili Maglič</strong>, ali je posle sloma ustanka tvrđava napuštena.
                  Kasnije se pominje na <strong>austrijskim kartama iz 1718. godine</strong>.
                  Poslednju značajnu ulogu Maglič je imao tokom <strong>Drugog srpskog ustanka 1815. godine</strong>, kada su je koristili <em>srpski ustanici</em>.
                  <br /><br />
                  Maglič je podignut na <strong>uskoj zaravni</strong> na <em>stenovitom grebenu</em>, okružen <strong>Ibarskom rekom</strong> sa <strong>tri strane</strong>.
                  Njegovo zaleđe, naročito prema <strong>masivu Stolovi</strong> sa <strong>istočne i južne strane</strong>, ostaje <em>slabo pristupačno</em> i pusto.
                </p>
              </section>

            </>
          )
          :
          (
            <>

              <h1 style={{ color: "white" }}>Maglič Fortress</h1>

              <section lang="en">
                <p>
                  <strong>Maglič</strong> is one of the <strong>best-preserved medieval fortresses in Serbia</strong>, located about <strong>30 kilometers from Kraljevo</strong>.
                  It lies along the <strong>main road</strong> leading to <em>Novi Pazar, Montenegro</em>, and <em>Kosovo and Metohija</em>.
                  The fortress is perched on a <strong>high rock</strong> above the <em>Ibar River Valley</em>, accessible via a maintained path with <em>rest benches</em>.
                  The name <strong>Maglič</strong> comes from the <em>fog</em> that often envelops the fortress, giving it a <strong>mysterious appearance</strong>.
                  The origin of the fortress remains <em>unclear</em>, but it is believed to have been built <strong>after the Mongol invasion of 1240</strong>.
                  The first written record dates back to <strong>1337</strong>, when <strong>Archbishop Danilo II</strong> built palaces and monastic cells within Maglič.
                </p>
              </section>

              <img srcSet={`${maglic22} 450w, ${maglic2}`} alt="Maglič Fortress - panorama" />

              <section lang="en">
                <p>
                  <strong>Maglič Fortress</strong> consists of <strong>seven towers</strong> about <strong>10 meters high</strong>, while the main <strong>Donjon tower</strong>
                  reaches approximately <strong>20 meters</strong>. It is surrounded by <em>thick walls</em> and has an irregular shape due to the <strong>uneven terrain</strong>.
                  The fortress measures about <strong>100 meters in length</strong> and <strong>40 meters in width</strong>.
                  Inside, there are <em>two courtyards</em> – one smaller and one larger – containing the <strong>ruins of the Church of St. George</strong>, a <strong>palace</strong>,
                  <strong>bakery</strong>, and <strong>two water cisterns</strong>.
                  Maglič is also known as the <em>Serbian Camelot</em>, and its <strong>well-preserved structure</strong> and <em>mysterious atmosphere</em> often attract <strong>film crews</strong>.
                  A sequel to the film <em>“Ironclad”</em> was shot here, with the team impressed by the <strong>authenticity of the walls</strong>.
                </p>
              </section>

              <img srcSet={`${maglic33} 450w, ${maglic3}`} alt="Interior of Maglič - archaeological ruins" />

              <section lang="en">
                <p>
                  <strong>Historical data</strong> on Maglič is rather <em>scarce</em>. Archaeological research suggests that an <strong>older fortification</strong> stood on this site,
                  dating from the <strong>late 11th or early 12th century</strong>, when the area was under <strong>Byzantine rule</strong>.
                  It was likely a <em>small castle</em> built on a <em>naturally protected location</em>, typical of the <strong>Komnenos dynasty</strong>.
                  That original structure was <strong>destroyed by fire</strong> and later <em>abandoned</em>.
                  <br /><br />
                  Several <strong>theories</strong> exist regarding the construction of the current fortress. One suggests it was built by <strong>King Uroš I (1241/1242–1276)</strong>
                  after <em>Mongol invasions</em>, to protect the Ibar Valley and the <strong>monasteries of Sopoćani and Studenica</strong>.
                </p>
              </section>

              <img srcSet={`${maglic44} 450w, ${maglic4}`} alt="Entrance to Maglič - trail view" />

              <section lang="en">
                <p>
                  Another theory dates its construction to the <strong>early 13th century</strong>, during the reign of <strong>Stefan the First-Crowned (1196–1227)</strong>,
                  aimed at protecting the <strong>Žiča and Studenica monasteries</strong>.
                  However, it is more likely that construction began in the <strong>late 13th or early 14th century</strong>,
                  alongside the <strong>reconstruction of the Žiča Monastery</strong>, which had suffered major damage in <strong>1292</strong>.
                  The new fortress was <em>larger in scale</em>, while the old fortifications were removed.
                  <br /><br />
                  As the <strong>medieval Serbian state</strong> expanded, <strong>Maglič lost its strategic importance</strong> and became an internal stronghold.
                  During the <strong>14th century</strong>, it served as a <em>refuge for Archbishop Danilo II (1324–1337)</em>, who built <strong>palaces</strong> and
                  managed both <em>ecclesiastical and state affairs</em> from within the fortress. A <strong>scriptorium</strong> was also organized within its walls.
                </p>
              </section>

              <img srcSet={`${maglic55} 450w, ${maglic5}`} alt="Church in Kraljevo - religious monuments near Maglič" />

              <section lang="en">
                <p>
                  <strong>There are no exact records</strong> of when Maglič <strong>fell under Ottoman rule</strong>, but it is assumed to have occurred around
                  <strong>1459</strong>, when it was annexed into the <em>Ottoman Empire</em>. After the conquest, the fortress served as the <strong>center of a district (nahija)</strong>.
                  During the <strong>1683 uprising</strong>, rebels <strong>briefly liberated Maglič</strong>, but after the rebellion was crushed, it was abandoned.
                  It was later mentioned in <strong>Austrian maps from 1718</strong>.
                  Maglič last played a significant role during the <strong>Second Serbian Uprising in 1815</strong>, when it was used by <em>Serbian rebels</em>.
                  <br /><br />
                  The fortress was built on a <strong>narrow plateau</strong> atop a <em>rocky ridge</em>, surrounded on <strong>three sides by the Ibar River</strong>.
                  Its hinterland, especially toward the <strong>Stolovi mountain range</strong> to the <strong>east and south</strong>, remains <em>sparsely accessible</em> and remote.
                </p>
              </section>

            </>
          )}
      </div>
    </>
  );
};


export default TvrdjavaMaglic;