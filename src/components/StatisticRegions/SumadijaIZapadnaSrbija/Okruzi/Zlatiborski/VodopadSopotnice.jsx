/* eslint-disable react/no-unknown-property */
import sopotnice1 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/vodopadSopotice/desktop/sopotnice1.jpg";
import sopotnice2 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/vodopadSopotice/desktop/sopotnice2.jpg";
import sopotnice3 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/vodopadSopotice/desktop/sopotnice3.jpg";
import sopotnice4 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/vodopadSopotice/desktop/sopotnice4.jpg";
import sopotnice5 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/vodopadSopotice/desktop/sopotnice5.jpg";
import sopotnice6 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/vodopadSopotice/desktop/sopotnice6.jpg";
import sopotnice11 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/vodopadSopotice/mobile/Msopotnice1.jpg";
import sopotnice22 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/vodopadSopotice/mobile/Msopotnice2.jpg";
import sopotnice33 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/vodopadSopotice/mobile/Msopotnice3.jpg";
import sopotnice44 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/vodopadSopotice/mobile/Msopotnice4.jpg";
import sopotnice55 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/vodopadSopotice/mobile/Msopotnice5.jpg";
import sopotnice66 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/vodopadSopotice/mobile/Msopotnice6.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { zlatiborskiOkrugPathRoutes } from "./ZlatiborskiOkrugPahtRoutes";
import { useContextAuth } from "../../../../../Context";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const VodopadSopotnice = () => {
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
            ? 'Vodopad Sopotnice | Zaštićena priroda i čudo karsta'
            : 'Sopotnica Waterfall | Protected Nature and Karst Wonder'}
        </title>

        <meta
          name="description"
          content={
            switchLanguage === 'rs'
              ? 'Vodopadi Sopotnice, smešteni na padinama planine Jadovnik kod Prijepolja, predstavljaju zaštićeno prirodno dobro sa kaskadnim slapovima, vodenicama, bogatom florom i legendama koje prate njihovo poreklo.'
              : 'Sopotnica Waterfalls, located on the slopes of Mount Jadovnik near Prijepolje, are a protected natural site featuring cascading falls, old watermills, rich flora, and legends about their mystical origins.'
          }
        />

        <meta
          name="keywords"
          content={
            switchLanguage === 'rs'
              ? 'Vodopad Sopotnice, Sopotnica, vodopadi Srbija, prirodna lepota, karstni izvori, Jadovnik, Prijepolje, vodenice, sige, mahovine, planinski turizam, zaštićeno područje, ekoturizam, slapovi, legenda o vodi'
              : 'Sopotnica Waterfall, Serbia waterfalls, natural attraction, karst springs, Jadovnik mountain, Prijepolje, watermills, tufa formation, moss, eco-tourism, protected site, Serbia nature, waterfalls legend'
          }
        />

        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/sumadija-tekst-modal/sumadija-i-zapadna-srbija/zlatiborski-okrug/vodopad-sopotnice`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/sumadija-tekst-modal/sumadija-i-zapadna-srbija/zlatiborski-okrug/vodopad-sopotnice"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/sumadija-tekst-modal/sumadija-i-zapadna-srbija/zlatiborski-okrug/vodopad-sopotnice"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/sumadija-tekst-modal/sumadija-i-zapadna-srbija/zlatiborski-okrug/vodopad-sopotnice"
        />
      </Helmet>


      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft className="arrowLeft" onClick={() => navigate(zlatiborskiOkrugPathRoutes.home(switchLanguage))} style={{ fill: 'white' }} />
        <header></header>
        <img srcSet={`${sopotnice11} 450w, ${sopotnice1} `} alt="Vodopad Sopotnice 1" />

        {switchLanguage === 'rs' ?
          (
            <>

              <h2>Vodopad Sopotnice</h2>

              <section lang="sr">
                <p>
                  <strong>Vodopadi Sopotnice</strong> predstavljaju <em>zaštićeno prirodno područje</em> na jugozapadu Srbije, smešteno na reci <strong>Sopotnici</strong> koja teče kroz opštinu <strong>Prijepolje</strong>, na zapadnim obroncima planine <strong>Jadovnik</strong>. Ovo predeo je poznat po <em>izvanrednoj prirodnoj lepoti</em>, sa brojnim vodopadima nastalim spajanjem i razdvajanjem stalnih i povremenih <strong>karstnih izvora</strong> i vrela. Pored samih slapova, poseban šarm ovom kraju daju <strong>stare i obnovljene vodenice</strong>. Od 2005. godine, vodopadi Sopotnice su <strong>zaštićeni kao prirodno dobro</strong>, sa ukupnom površinom od <em>209,34 hektara</em>.
                </p>
              </section>

              <img srcSet={`${sopotnice33} 450w, ${sopotnice3} `} alt="Vodopad Sopotnice 2" loading="lazy" />

              <section lang="sr">
                <p>
                  Slapovi Sopotnice ili vodopadi Sopotnice nastali su zahvaljujući složenom <strong>hidrološkom sistemu</strong> koji čine brojna <em>karstna vrela i izvori</em>, od kojih su neki <strong>stalni</strong>, a neki <strong>povremeni</strong>. Ovi izvori formiraju tokove koji se međusobno spajaju, razdvajaju i stvaraju niz vodopada. Reka <strong>Sopotnica</strong> prolazi kroz <em>krečnjačke slojeve</em> planine Jadovnik, zbog čega je bogata rastvorenim <strong>kalcijum karbonatom</strong>. Kada voda izbija na površinu i prelazi preko stena, oslobađa se <em>ugljen-dioksid</em>, dok se kalcijum karbonat taloži na mahovinama i lišću, stvarajući poroznu stenu poznatu kao <strong>sigu</strong>.
                </p>
              </section>

              <img srcSet={`${sopotnice22} 450w, ${sopotnice2} `} alt="Vodopad Sopotnice 3" loading="lazy" />

              <section lang="sr">
                <p>
                  Reku Sopotnicu odlikuje velika <strong>visinska razlika</strong> između njenog ušća, koje se nalazi na <em>465 metara nadmorske visine</em>, i najvišeg izvora na <strong>1150 metara</strong>. Ova geološka specifičnost omogućila je formiranje brojnih slojeva sige preko kojih voda teče, stvarajući <em>impozantne vodopade</em>. U okolini vodopada nalaze se <strong>stare i rekonstruisane vodenice</strong>, koje daju poseban <em>etno-kulturni pečat</em> ovom području. <strong>Biodiverzitet Sopotnice</strong> uključuje bogatstvo mahovina i jetrenjača, što čini ovaj prostor <em>ekološki značajnim</em>.
                </p>
              </section>

              <img srcSet={`${sopotnice44} 450w, ${sopotnice4} `} alt="Vodopad Sopotnice 4" loading="lazy" />

              <section lang="sr">
                <p>
                  Najviši slap Sopotnice doseže visinu od približno <strong>25 metara</strong>, dok se ostali slapovi kaskadno nižu preko stena, stvarajući <em>impresivan pejzaž</em>. Širina slapova varira, ali zajedno čine kompleks koji se prostire na dužini od oko <strong>500 metara</strong>. Sopotnica je 2005. godine proglašena za <strong>zaštićeno prirodno dobro</strong> zbog svoje <em>ekološke i geomorfološke važnosti</em>. U okviru zaštitnih mera, posebna pažnja posvećena je očuvanju prirodnog okruženja i sprečavanju <strong>erozije tla</strong>. Lokalna zajednica, uz podršku ekologa i planinara, aktivno radi na očuvanju ovog <em>vrednog prirodnog resursa</em>.
                </p>
              </section>

              <img srcSet={`${sopotnice66} 450w, ${sopotnice6} `} alt="Vodopad Sopotnice 5" loading="lazy" />

              <section lang="sr">
                <p>
                  Slapovi Sopotnice nalaze se na jugozapadnim obroncima planine <strong>Jadovnik</strong>, u opštini <strong>Prijepolje</strong>, na jugozapadu Srbije. Okruženi su <em>gustom vegetacijom</em>, koja obuhvata <strong>listopadne i četinarske šume</strong>, pružajući utočište raznovrsnim <em>biljnim i životinjskim vrstama</em>. Ova lokacija omogućava posetiocima da dožive jedinstven spoj <strong>vodopada</strong>, <em>planinskog pejzaža</em> i bogatog prirodnog sveta.
                </p>
              </section>

              <img srcSet={`${sopotnice55} 450w, ${sopotnice5} `} alt="Vodopad Sopotnice 6" loading="lazy" />

              <section lang="sr">
                <p>
                  O nastanku <strong>Sopotničkih vodopada</strong> ispričane su mnoge <em>legende</em> koje prenose lokalni meštani. Jedna od njih govori o doseljenicima koji su iz <strong>bezvodne Pešteri</strong> stigli u selo <strong>Sopotnicu</strong>. Naselili su se pored izvora, ali je voda ubrzo presušila. Razočarani zbog nesreće koja ih je zadesila, odlučili su da krenu dalje u potrazi za vodom. Međutim, noć uoči odlaska, ispod Jadovnika se začuo <em>čudan glas</em> koji ih je upitao: „Birajte, ljudi, šta želite da vam poklonim – <strong>vodu ili sreću</strong>?“ Seljaci su uglas povikali: „Daj nam <strong>vodu</strong>, vodu nam daruj, a <em>sreću ćemo, ako Bog da, sami stvoriti</em>!“ Tako, prema legendi, voda poteče na sve strane.
                </p>
              </section>


            </>
          )
          :
          (
            <>

              <h2>Sopotnica Waterfall</h2>

              <section lang="en"> <p> <strong>Sopotnica Waterfalls</strong> represent a <em>protected natural area</em> in southwestern Serbia, located on the <strong>Sopotnica River</strong> which flows through the municipality of <strong>Prijepolje</strong>, on the western slopes of the <strong>Jadovnik</strong> mountain. This region is known for its <em>outstanding natural beauty</em>, with numerous waterfalls formed by the joining and splitting of permanent and intermittent <strong>karst springs</strong> and wells. Besides the waterfalls themselves, the area is charming due to the presence of <strong>old and restored watermills</strong>. Since 2005, the Sopotnica waterfalls have been <strong>protected as a natural asset</strong>, covering a total area of <em>209.34 hectares</em>. </p> </section>
              <img srcSet={`${sopotnice33} 450w, ${sopotnice3} `} alt="Sopotnica Waterfall 2" loading="lazy" />

              <section lang="en"> <p> The Sopotnica cascades or waterfalls were formed thanks to a complex <strong>hydrological system</strong> consisting of numerous <em>karst springs and wells</em>, some of which are <strong>permanent</strong>, while others are <strong>intermittent</strong>. These springs create streams that join, split, and form a series of waterfalls. The <strong>Sopotnica River</strong> flows through the <em>limestone layers</em> of the Jadovnik mountain, which makes it rich in dissolved <strong>calcium carbonate</strong>. When water emerges on the surface and flows over rocks, <em>carbon dioxide</em> is released, while calcium carbonate deposits on moss and leaves, creating a porous rock known as <strong>sinter</strong>. </p> </section>
              <img srcSet={`${sopotnice22} 450w, ${sopotnice2} `} alt="Sopotnica Waterfall 3" loading="lazy" />

              <section lang="en"> <p> The Sopotnica River is characterized by a large <strong>altitude difference</strong> between its mouth, located at <em>465 meters above sea level</em>, and its highest spring at <strong>1150 meters</strong>. This geological feature enabled the formation of numerous sinter layers over which the water flows, creating <em>impressive waterfalls</em>. Around the waterfalls are <strong>old and reconstructed watermills</strong>, which add a special <em>ethno-cultural charm</em> to the area. The <strong>biodiversity of Sopotnica</strong> includes a richness of mosses and liverworts, making this place <em>ecologically significant</em>. </p> </section>
              <img srcSet={`${sopotnice44} 450w, ${sopotnice4} `} alt="Sopotnica Waterfall 4" loading="lazy" />

              <section lang="en"> <p> The highest Sopotnica waterfall reaches a height of approximately <strong>25 meters</strong>, while other cascades descend over rocks, creating an <em>impressive landscape</em>. The width of the waterfalls varies, but together they form a complex stretching over about <strong>500 meters</strong>. In 2005, Sopotnica was declared a <strong>protected natural asset</strong> due to its <em>ecological and geomorphological importance</em>. Conservation measures focus on preserving the natural environment and preventing <strong>soil erosion</strong>. The local community, supported by ecologists and mountaineers, actively works on protecting this <em>valuable natural resource</em>. </p> </section>
              <img srcSet={`${sopotnice66} 450w, ${sopotnice6} `} alt="Sopotnica Waterfall 5" loading="lazy" />

              <section lang="en"> <p> The Sopotnica waterfalls are located on the southwestern slopes of the <strong>Jadovnik</strong> mountain, in the municipality of <strong>Prijepolje</strong>, in southwestern Serbia. They are surrounded by <em>dense vegetation</em>, which includes <strong>deciduous and coniferous forests</strong>, providing a refuge for diverse <em>plant and animal species</em>. This location offers visitors a unique combination of <strong>waterfalls</strong>, <em>mountain scenery</em>, and rich natural life. </p> </section>
              <img srcSet={`${sopotnice55} 450w, ${sopotnice5} `} alt="Sopotnica Waterfall 6" loading="lazy" />

              <section lang="en"> <p> Many <em>legends</em> about the origin of the <strong>Sopotnica Waterfalls</strong> have been passed down by local inhabitants. One of them tells of settlers who came from the <strong>waterless Pešter plateau</strong> to the village of <strong>Sopotnica</strong>. They settled near a spring, but the water soon dried up. Disappointed by the misfortune, they decided to move on in search of water. However, on the night before their departure, a <em>strange voice</em> was heard beneath Jadovnik asking: “Choose, people, what do you want me to give you – <strong>water or happiness</strong>?” The villagers shouted in unison: “Give us <strong>water</strong>, grant us water, and <em>if God wills, we will create happiness ourselves</em>!” And so, according to the legend, water flowed everywhere. </p> </section>

            </>
          )}

      </div>
    </>
  );
};


export default VodopadSopotnice;