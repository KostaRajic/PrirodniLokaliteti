/* eslint-disable react/no-unknown-property */
/* eslint-disable no-useless-escape */
import gMilanovac1 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/GornjiMilanovac/desktop/gornjiMilanovac1.jpg";
import gMilanovac2 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/GornjiMilanovac/desktop/gornjiMilanovac2.jpg";
import gMilanovac3 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/GornjiMilanovac/desktop/gornjiMilanovac3.jpg";
import gMilanovac4 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/GornjiMilanovac/desktop/gornjiMilanovac4.jpg";
import gMilanovac5 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/GornjiMilanovac/desktop/gornjiMilanovac5.jpg";
import gMilanovac6 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/GornjiMilanovac/desktop/gornjiMilanovac6.jpg";
import gMilanovac7 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/GornjiMilanovac/desktop/gornjiMilanovac7.jpg";
import gMilanovac8 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/GornjiMilanovac/desktop/gornjiMilanovac8.jpg";
import gMilanovac11 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/GornjiMilanovac/mobile/MgornjiMilanovac1.jpg";
import gMilanovac22 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/GornjiMilanovac/mobile/MgornjiMilanovac2.jpg";
import gMilanovac33 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/GornjiMilanovac/mobile/MgornjiMilanovac3.jpg";
import gMilanovac44 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/GornjiMilanovac/mobile/MgornjiMilanovac4.jpg";
import gMilanovac55 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/GornjiMilanovac/mobile/MgornjiMilanovac5.jpg";
import gMilanovac66 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/GornjiMilanovac/mobile/MgornjiMilanovac6.jpg";
import gMilanovac77 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/GornjiMilanovac/mobile/MgornjiMilanovac7.jpg";
import gMilanovac88 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MoravickiOkrug/GornjiMilanovac/mobile/MgornjiMilanovac8.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { moravickiOkrugPathRoutes } from "./MoravickiOkrugPathRoutes";
import { useContextAuth } from "../../../../../Context";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const GornjiMilanovac = () => {
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
            ? "Gornji Milanovac – Istorija, priroda i znamenitosti Šumadije | Serbia Wonders"
            : "Gornji Milanovac – History, Nature, and Heritage of Šumadija | Serbia Wonders"}
        </title>

        <meta
          name="description"
          content={
            switchLanguage === 'rs'
              ? "Gornji Milanovac, smešten između Rudnika, Suvobora i Maljena, bogat je istorijom, prirodnim lepotama i kulturnim znamenitostima. Od Takova i ustanka iz 1815. godine, preko Spomen-parka Brdo mira, do crkve u Savincu, ovaj kraj odiše srpskim duhom i tradicijom."
              : "Gornji Milanovac, nestled between the Rudnik, Suvobor, and Maljen mountains, is rich in history, natural beauty, and cultural landmarks. From Takovo and the 1815 uprising, to the Peace Hill Memorial Park and the church in Savinac, this region embodies Serbian heritage and tradition."
          }
        />

        <meta
          name="keywords"
          content={
            switchLanguage === 'rs'
              ? "Gornji Milanovac, Takovo, Takovski ustanak, Rudnik, Suvobor, Maljen, Šumadija, Brdo mira, Spomen-park, crkva Sv. Nikole, Brusnica, Savinac, Ljubica Obrenović, Sv. Sava, istorija Srbije"
              : "Gornji Milanovac, Takovo, Second Serbian Uprising, Rudnik, Suvobor, Maljen, Šumadija, Peace Hill Memorial Park, Church of St. Nicholas, Brusnica, Savinac, Ljubica Obrenović, St. Sava, Serbian history"
          }
        />

        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/sumadija-tekst-modal/sumadija-i-zapadna-srbija/moravicki-okrug/gornji-milanovac`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/sumadija-tekst-modal/sumadija-i-zapadna-srbija/moravicki-okrug/gornji-milanovac"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/sumadija-tekst-modal/sumadija-i-zapadna-srbija/moravicki-okrug/gornji-milanovac"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/sumadija-tekst-modal/sumadija-i-zapadna-srbija/moravicki-okrug/gornji-milanovac"
        />

      </Helmet>



      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft
          className="arrowLeft"
          onClick={() => navigate(moravickiOkrugPathRoutes.home(switchLanguage))}
        />
        <header></header>
        <img srcSet={`${gMilanovac11} 450w, ${gMilanovac1} `} alt="Gornji Milanovac" />

        <h1>Gornji Milanovac</h1>

        {switchLanguage === 'rs' ?
          (
            <>

              <section lang="sr">
                <p>
                  <strong>Opština Gornji Milanovac</strong> pripada <em>Moravičkom okrugu</em>, koji se nalazi u
                  centralnom delu <strong>Republike Srbije</strong>, zajedno sa opštinama: Čačak, Lučani i
                  Ivanjica. Opština je smeštena na dodiru <strong>zapadne Srbije</strong>, <em>Gruže</em> i <em>Pomoravlja</em>,
                  u jugozapadnom delu <em>Šumadije</em>, podno planina <strong>Rudnik</strong>, <strong>Suvobor</strong> i <strong>Maljen</strong>.
                </p>
              </section>

              <img srcSet={`${gMilanovac77} 450w, ${gMilanovac7}`} alt="Gornji Milanovac" />

              <section lang="sr">
                <p>
                  <strong>Gornji Milanovac</strong> je najveće naselje u opštini i ima sve karakteristike modernog grada.
                  Od osnivanja se razvijao prema <em>urbanističkom planu</em>, sa širokim ulicama koje se uglavnom
                  seku pod pravim uglom. <strong>Centralni trg</strong> pruža pogled ka planinama <em>Rudnik</em>, <em>Ždrebanj</em> i <em>Vujan</em>,
                  što čini grad vizuelno upečatljivim. Grad se u početku razvijao na desnoj obali <em>Despotovice</em>,
                  a kasnije se širio i na levu stranu reke.
                </p>
              </section>

              <div className="displayFlexClassic">
                <img srcSet={`${gMilanovac33} 450w, ${gMilanovac3}`} alt="Takovo" style={{ padding: "50px", width: "47%" }} />
                <img srcSet={`${gMilanovac22} 450w, ${gMilanovac2}`} alt="Takovo 2" style={{ padding: "50px", width: "47%" }} />
              </div>

              <section lang="sr">
                <p>
                  U blizini se nalazi istorijsko naselje <strong>Takovo</strong>, simbol <em>otpora protiv Osmanskog carstva</em>.
                  <strong>Takovski ustanak</strong> iz 1815. godine predvodio je <strong>knez Miloš Obrenović</strong>, što je označilo
                  važan trenutak u borbi Srbije za slobodu. Ustanici su osvojili strateški važnu teritoriju, a
                  <em>Takovo</em> danas čuva sećanje na ovaj istorijski događaj putem spomen-obeležja.
                </p>
              </section>

              <img srcSet={`${gMilanovac44} 450w, ${gMilanovac4}`} alt="Gornji Milanovac 3" />

              <section lang="sr">
                <p>
                  Opština je podeljena grebenima <strong>Rudnik–Suvobor</strong> i <strong>Rudnik–Vujan</strong> na nekoliko
                  geografskih celina. Područje poznato kao <strong>Takovski kraj</strong> nekada je pripadalo <em>Rudničkoj nahiji</em>.
                  <em>Reljef</em> je oblikovan kombinacijom <em>tektonskih pokreta</em> i <em>fluvijalne erozije</em>, što je formiralo
                  jedinstvene geomorfološke oblike.
                </p>
              </section>

              <img srcSet={`${gMilanovac55} 450w, ${gMilanovac5}`} alt="Gornji Milanovac 4" />

              <section lang="sr">
                <p>
                  <strong>Crkva Svetog Nikole</strong> u selu <strong>Brusnica</strong> (Stara čaršija) je zadužbina <strong>Jovana Obrenovića</strong>,
                  podignuta <strong>1837. godine</strong>. Građena je kao <em>jednobrodna građevina</em> sa masivnim <strong>trospratnim zvonikom</strong>.
                  <em>Ikonostas</em> je oslikan 1851. godine u <em>stilizovanom baroku</em>, dok su prikazi <strong>svetog Nikole</strong> i
                  <strong>svetog Đorđa</strong> izvedeni tehnikom <em>al secco</em>. Crkva je restaurirana tokom 2005/06. godine.
                </p>
              </section>

              <img srcSet={`${gMilanovac88} 450w, ${gMilanovac8}`} alt="Gornji Milanovac 5" />

              <section lang="sr">
                <p>
                  <strong>Spomen-park Brdo mira</strong> u Gornjem Milanovcu zauzima površinu od oko <strong>4,5 hektara</strong> i sadrži
                  preko <strong>3000 stabala</strong>, posađenih od strane srednjoškolaca od <strong>1961. do 1966. godine</strong>.
                  <em>Otvoren je 2. oktobra 1962.</em>, kada su ga posetili <strong>Josip Broz Tito</strong> i <strong>Leonid Brežnjev</strong>.
                  Centralni deo parka je <strong>spomen-kosturnica</strong>, posvećena crvenoarmejcima i partizanima.
                  Park se i dalje dopunjava novim sadržajem i predstavlja <em>važan pejzažni i istorijski element</em> grada.
                </p>
              </section>

              <img srcSet={`${gMilanovac66} 450w, ${gMilanovac6}`} alt="Gornji Milanovac 6" />

              <section lang="sr">
                <p>
                  <strong>Savinac</strong> je poznato izletište u <em>zaseoku Šarani</em>, 4 km od Takova. Prema legendi,
                  <strong>Sv. Sava</strong> je prošao ovim mestom, a otisak kopita njegovog konja je i dalje vidljiv u kamenu.
                  Tu se nalaze izvori <strong>Svetinja</strong> i <strong>Mlačac</strong>. <em>Knez Miloš</em> se tu zakleo da će izgraditi crkvu
                  ukoliko pobedi Turke – što je i učinio <strong>1819. godine</strong>. Crkvu je obnovio <strong>1860.</strong> u znak
                  sećanja na suprugu <strong>Ljubiću</strong>. U njoj su sahranjene i <strong>Mina Vukomanović-Karadžić</strong>,
                  ćerka <strong>Vuka Karadžića</strong>, poznata srpska slikarka i književnica. Pored crkve nalazi se
                  poznati <strong>restoran "Kod Mića"</strong> i kafana iznad reke.
                </p>
              </section>


            </>
          )
          :
          (
            <>

              <section lang="en">
                <p>
                  <strong>The Municipality of Gornji Milanovac</strong> belongs to the <em>Moravica District</em>, located in
                  the central part of the <strong>Republic of Serbia</strong>, along with the municipalities of Čačak, Lučani, and
                  Ivanjica. The municipality lies at the crossroads of <strong>Western Serbia</strong>, <em>Gruža</em>, and <em>Pomoravlje</em>,
                  in the southwestern part of <em>Šumadija</em>, at the foothills of the <strong>Rudnik</strong>, <strong>Suvobor</strong>, and <strong>Maljen</strong> mountains.
                </p>
              </section>

              <img srcSet={`${gMilanovac77} 450w, ${gMilanovac7}`} alt="Gornji Milanovac" />

              <section lang="en">
                <p>
                  <strong>Gornji Milanovac</strong> is the largest settlement in the municipality and exhibits all the characteristics of a modern town.
                  Since its founding, it has developed according to an <em>urban plan</em>, with wide streets that mostly
                  intersect at right angles. The <strong>central square</strong> offers views of the <em>Rudnik</em>, <em>Ždrebanj</em>, and <em>Vujan</em> mountains,
                  enhancing the town's visual appeal. The town initially developed on the right bank of the <em>Despotovica River</em>,
                  and later expanded to the left side.
                </p>
              </section>

              <div className="displayFlexClassic">
                <img srcSet={`${gMilanovac33} 450w, ${gMilanovac3}`} alt="Takovo" style={{ padding: "50px", width: "47%" }} />
                <img srcSet={`${gMilanovac22} 450w, ${gMilanovac2}`} alt="Takovo 2" style={{ padding: "50px", width: "47%" }} />
              </div>

              <section lang="en">
                <p>
                  Nearby lies the historic village of <strong>Takovo</strong>, a symbol of <em>resistance against the Ottoman Empire</em>.
                  The <strong>Takovo Uprising</strong> of 1815 was led by <strong>Prince Miloš Obrenović</strong>, marking a significant
                  moment in Serbia’s struggle for freedom. The rebels captured strategically important territory, and
                  <em>Takovo</em> today preserves the memory of this historic event through memorial landmarks.
                </p>
              </section>

              <img srcSet={`${gMilanovac44} 450w, ${gMilanovac4}`} alt="Gornji Milanovac 3" />

              <section lang="en">
                <p>
                  The municipality is divided by the ridges of <strong>Rudnik–Suvobor</strong> and <strong>Rudnik–Vujan</strong> into several
                  geographical units. The area known as <strong>Takovo Region</strong> once belonged to the <em>Rudnik District (nahija)</em>.
                  The <em>relief</em> was shaped by a combination of <em>tectonic movements</em> and <em>fluvial erosion</em>, creating
                  unique geomorphological features.
                </p>
              </section>

              <img srcSet={`${gMilanovac55} 450w, ${gMilanovac5}`} alt="Gornji Milanovac 4" />

              <section lang="en">
                <p>
                  The <strong>Church of Saint Nicholas</strong> in the village of <strong>Brusnica</strong> (Old Bazaar) is the endowment of <strong>Jovan Obrenović</strong>,
                  built in <strong>1837</strong>. It was constructed as a <em>single-nave structure</em> with a massive <strong>three-story bell tower</strong>.
                  The <em>iconostasis</em> was painted in 1851 in the <em>late Baroque style</em>, while depictions of <strong>Saint Nicholas</strong> and
                  <strong>Saint George</strong> were painted using the <em>al secco</em> technique. The church was restored during 2005/06.
                </p>
              </section>

              <img srcSet={`${gMilanovac88} 450w, ${gMilanovac8}`} alt="Gornji Milanovac 5" />

              <section lang="en">
                <p>
                  The <strong>Peace Hill Memorial Park</strong> in Gornji Milanovac covers about <strong>4.5 hectares</strong> and contains
                  over <strong>3,000 trees</strong> planted by high school students from <strong>1961 to 1966</strong>.
                  It was <em>officially opened on October 2, 1962</em>, during a visit by <strong>Josip Broz Tito</strong> and <strong>Leonid Brezhnev</strong>.
                  The central part of the park is a <strong>memorial ossuary</strong>, dedicated to Red Army soldiers and Yugoslav partisans.
                  The park continues to expand with new elements and serves as an <em>important landscape and historical site</em> in the city.
                </p>
              </section>

              <img srcSet={`${gMilanovac66} 450w, ${gMilanovac6}`} alt="Gornji Milanovac 6" />

              <section lang="en">
                <p>
                  <strong>Savinac</strong> is a popular excursion spot located in the <em>Šarani hamlet</em>, 4 km from Takovo. According to legend,
                  <strong>Saint Sava</strong> once passed through this area, and the hoofprint of his horse is still visible in stone.
                  The mineral springs <strong>Svetinja</strong> and <strong>Mlačac</strong> are found here. <em>Prince Miloš</em> is said to have
                  vowed to build a church here if victorious over the Ottomans — which he fulfilled in <strong>1819</strong>.
                  He rebuilt the church in <strong>1860</strong> in memory of his wife <strong>Ljubica</strong>. Also buried here is <strong>Mina Vukomanović-Karadžić</strong>,
                  daughter of <strong>Vuk Karadžić</strong>, a notable Serbian painter and writer. Across from the church is a well-known
                  <strong>restaurant "Kod Mića"</strong> and a riverside tavern with scenic views.
                </p>
              </section>


            </>
          )}

      </div>
    </>
  );
};


export default GornjiMilanovac;