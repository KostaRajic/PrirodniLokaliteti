/* eslint-disable react/no-unknown-property */
import krusevac1 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RasinskiOrkug/Krusevac/desktop/krusevac1.jpg";
import krusevac2 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RasinskiOrkug/Krusevac/desktop/krusevac2.jpg";
import krusevac3 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RasinskiOrkug/Krusevac/desktop/krusevac3.jpg";
import krusevac4 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RasinskiOrkug/Krusevac/desktop/krusevac4.jpg";
import krusevac5 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RasinskiOrkug/Krusevac/desktop/krusevac5.jpg";
import krusevac6 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RasinskiOrkug/Krusevac/desktop/krusevac6.jpg";
import krusevac7 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RasinskiOrkug/Krusevac/desktop/krusevac7.jpg";
import krusevac8 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RasinskiOrkug/Krusevac/desktop/krusevac8.jpg";
import krusevac9 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RasinskiOrkug/Krusevac/desktop/krusevac9.jpg";
import krusevac11 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RasinskiOrkug/Krusevac/mobile/Mkrusevac1.jpg";
import krusevac22 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RasinskiOrkug/Krusevac/mobile/Mkrusevac2.jpg";
import krusevac33 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RasinskiOrkug/Krusevac/mobile/Mkrusevac3.jpg";
import krusevac44 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RasinskiOrkug/Krusevac/mobile/Mkrusevac4.jpg";
import krusevac55 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RasinskiOrkug/Krusevac/mobile/Mkrusevac5.jpg";
import krusevac66 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RasinskiOrkug/Krusevac/mobile/Mkrusevac6.jpg";
import krusevac77 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RasinskiOrkug/Krusevac/mobile/Mkrusevac7.jpg";
import krusevac88 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RasinskiOrkug/Krusevac/mobile/Mkrusevac8.jpg";
import krusevac99 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RasinskiOrkug/Krusevac/mobile/Mkrusevac9.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { rasinskiOkrugPathRoutes } from "./RasinskiOkrugPathRoutes";
import { useContextAuth } from "../../../../../Context";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const Krusevac = () => {
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
            ? "Kruševac – Istorijski grad kneza Lazara | Srbija Wonders"
            : "Kruševac – Historic City of Prince Lazar | Serbia Wonders"}
        </title>

        <meta
          name="description"
          content={
            switchLanguage === 'rs'
              ? "Kruševac, nekadašnja prestonica kneza Lazara, danas je kulturni i administrativni centar Rasinskog okruga, bogat istorijom, spomenicima i tradicijom."
              : "Kruševac, once the capital of Prince Lazar, is now a cultural and administrative center of the Rasina District, rich in history, monuments, and tradition."
          }
        />

        <meta
          name="keywords"
          content={
            switchLanguage === 'rs'
              ? "Kruševac, knez Lazar, Lazarev grad, Crkva Lazarica, Vidovdan, Kosovo, Stefan Lazarević, istorija Srbije, Rasinski okrug"
              : "Kruševac, Prince Lazar, Lazar's Town, Lazarica Church, Vidovdan, Kosovo Battle, Stefan Lazarević, Serbian history, Rasina District"
          }
        />

        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/sumadija-tekst-modal/sumadija-i-zapadna-srbija/rasinski-okrug/krusevac`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/sumadija-tekst-modal/sumadija-i-zapadna-srbija/rasinski-okrug/krusevac"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/sumadija-tekst-modal/sumadija-i-zapadna-srbija/rasinski-okrug/krusevac"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/sumadija-tekst-modal/sumadija-i-zapadna-srbija/rasinski-okrug/krusevac"
        />
      </Helmet>


      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft className="arrowLeft" onClick={() => navigate(rasinskiOkrugPathRoutes.home(switchLanguage))} />
        <header></header>
        <img srcSet={`${krusevac22} 450w, ${krusevac2} `} alt="Krusevac 1" />

        <h1 style={{ color: "white" }}>Kruševac</h1>

        {switchLanguage === 'rs' ?
          (
            <>

              <section lang="sr">
                <p>
                  <strong>Kruševac</strong> je grad i sedište opštine sa istim imenom u Srbiji. On je
                  glavni administrativni centar <strong>Rasinskog okruga</strong>. Prema popisu
                  stanovništva iz <strong>2022. godine</strong>, grad ima <strong>68.119 stanovnika</strong>. Nalazi se u
                  dolini <em>Zapadnog Pomoravlja</em>, pored reke <strong>Rasine</strong>.
                  <br /><br />
                  Kruševac je važan <strong>ekonomski</strong>, <strong>kulturni</strong>, <strong>administrativni</strong>,
                  <strong>obrazovni</strong>, <strong>zdravstveni</strong>, <strong>informativni</strong> i <strong>sportski centar</strong> ovog regiona.
                  Grad obuhvata <strong>101 naselje</strong> i prostire se na površini od <strong>854 km²</strong>. U
                  prošlosti, Kruševac je bio prestonica srednjovekovnog vladara <strong>kneza Lazara</strong>.
                </p>
              </section>

              <img srcSet={`${krusevac11} 450w, ${krusevac1}`} alt="Krusevac Lazarev Grad" />

              <section lang="sr">
                <p>
                  Kada je srpski knez <strong>Lazar</strong> izabrao Kruševac kao mesto za odbranu
                  srednjovekovne Srbije od turskih osvajača, na tom prostoru je postojalo
                  samo malo naselje. Brzo nakon toga, knez je ojačao zidine, izgradio grad
                  i učinio ga svojom prestonicom.
                  <br /><br />
                  Ostatke zidina i kula srednjovekovne tvrđave možete videti na arheološkom nalazištu, u
                  <em>Lazarevom gradu</em> u Kruševcu. Upravo iz ovog grada je <strong>1389. godine</strong> knez
                  Lazar poveo srpsku vojsku u bitku na <strong>Kosovu</strong> kako bi odbranio svoju
                  zemlju od nadolazeće turske vojske. Spomenik posvećen Kosovskom boju
                  nalazi se na glavnom trgu u Kruševcu.
                </p>
              </section>

              <img srcSet={`${krusevac33} 450w, ${krusevac3}`} alt="Spomenik Despotu Stefanu Lazarevicu u Krusevcu" />

              <section lang="sr">
                <p>
                  Na <strong>Vidovdan 2020. godine</strong>, na Trgu „Kosturnica“ u Kruševcu, svečano je
                  otkriven Spomenik despotu <strong>Stefanu Lazareviću</strong>, sinu kneza Lazara, koji je
                  bio veliki vojni lider, ratnik, izuzetan diplomata, graditelj, ktitor,
                  ali i veliki poklonik umetnosti. Despot Stefan je prikazan na
                  propinjućem konju, držeći krst u ruci, koji je simbolično okrenut ka
                  <strong>Kosovu</strong>. Spomenik, sa postoljem, visok je <strong>devet metara</strong>, a njegov značaj
                  kao vladara, književnika i mecene umetnosti odražava se kroz stihove
                  njegove najpoznatije pesme <em>"Slovoljubve"</em> na severnoj strani, dok je na
                  južnoj strani postamenta prikazan grb Srbije. Autor ovog spomenika je dr
                  Boris Stajkovac.
                </p>
              </section>

              <img srcSet={`${krusevac44} 450w, ${krusevac4}`} alt="Krusevac 2" />

              <section lang="sr">
                <p>
                  Prema predaji, Kruševac je dobio ime po velikom rečnom kamenu, <em>korsu</em>,
                  kojim je grad uglavnom izgrađen. Nakon Kosovske bitke, Kruševac postaje
                  prestonica vazalne Srbije kojom upravlja kneginja Milica, a kasnije
                  despot Stefan, koji prestonicu seli u Beograd. Turci osvajaju Kruševac
                  <strong>1427. godine</strong>, nakon smrti despota Stefana. Od <strong>1444. godine</strong>, Kruševac je
                  pod vlašću Đurđa Brankovića, a Turci ga konačno osvajaju <strong>1454. godine</strong> i
                  preimenuju u <em>ALAŽA HISAR (Šareni grad)</em>. Tokom 17. i 18. veka, Kruševac
                  je nekoliko puta kratkotrajno oslobađan od turske vlasti. Za vreme Prvog
                  srpskog ustanka, grad je oslobođen <strong>1806. godine</strong>, a ostao je slobodan do
                  <strong>1809. godine</strong>. Iz ovog perioda potiče i naziv <em>„Čarapani“</em>, na koji su
                  Kruševljani ponosni. Nadimak su dobili 1806. godine, nakon napada na
                  Turke, kada su pokazali izuzetnu hrabrost i snalažljivost, izuvši obuću,
                  nečujno su se približili Turcima u samo čarapama i pobili ih.
                </p>
              </section>

              <img srcSet={`${krusevac55} 450w, ${krusevac5}`} alt="Crkva Lazarica" />

              <section lang="sr">
                <p>
                  <strong>Crkva Lazarica</strong>, koja se nalazi u samom jezgru Kruševca, zajedno sa
                  gradom, predstavlja najstariji i najvredniji kulturni spomenik u ovom
                  mestu. Podigao ju je knez Lazar kao crkvu u sklopu svoje nove
                  prestonice, posvećenu svom prvom sinu Stefanu, nasledniku trona.
                  Posvećena je arhiđakonu Stefanu, zaštitniku dinastije <strong>Nemanjića</strong>, pa je
                  izvorno nosila ime <em>Crkva svetog Prvomučenika Stefana</em>. Pretpostavlja se
                  da je izgrađena između <strong>1376. i 1380. godine</strong>.
                  <br /><br />
                  Ispred ove crkve osvećena je srpska vojska pre polaska na Kosovo.
                  <br /><br />
                  Lazarica je prva crkva u Srbiji koja je prošla kroz stručnu
                  restauraciju i konzervaciju, koja je obavljena u periodu od <strong>1904.</strong> do
                  <strong>1908. godine</strong> pod vođstvom arhitekte Pere J. Popovića. Pre toga, crkva je
                  nekoliko puta obnavljana amaterski tokom XIX veka, nakon što je grad
                  oslobođen od Turaka.
                </p>
              </section>

              <img srcSet={`${krusevac66} 450w, ${krusevac6}`} alt="Spomenik kosovskim junacima u Kruševcu" />

              <section lang="sr">
                <p>
                  Spomenik kosovskim junacima u Kruševcu je najpoznatije vajarsko delo
                  Đorđa Jovanovića. Ovaj spomenik, koji se nalazi na Trgu kosovskih
                  junaka, posvećen je junacima Kosovske bitke i postavljen je <strong>15. juna 1904. godine</strong>, kada ga je svečano otkrio kralj Petar I Karađorđević
                  povodom stogodišnjice Prvog srpskog ustanka. Kameni temeljac postavio je
                  kralj Aleksandar Obrenović <strong>1889. godine</strong>, povodom <strong>500. godišnjice
                    Kosovske bitke</strong>.
                  <br /><br />
                  Spomenik je oblikovan kao mermerna piramida
                  visine <strong>6 metara</strong>, sa skulpturama Vile i Boška Jugovića na vrhu, koje su
                  visoke <strong>4 metra</strong>. Ovaj spomenik je izveden u neoklasicističkom stilu i
                  sadrži jasne vajarske simbole.
                </p>
              </section>

              <img srcSet={`${krusevac77} 450w, ${krusevac7}`} alt="Narodni muzej Kruševac" />

              <section lang="sr">
                <p>
                  <strong>Narodni muzej u Kruševcu</strong> je regionalni muzej koji pokriva područje
                  Rasinskog okruga. Osnovan je <strong>19. decembra 1951. godine</strong>.
                  <br /><br />
                  Muzej se bavi prikupljanjem, očuvanjem, zaštitom i izlaganjem
                  pokretnih kulturnih dobara i ostataka materijalne kulture. Nalazi se u
                  kompleksu srednjovekovnog grada kneza Lazara Hrebeljanovića, u
                  neposrednoj blizini crkve Lazarice. U neoklasicističkoj zgradi bivše
                  gimnazije, koja je sagrađena <strong>1863. godine</strong> i ima secesijske dekorativne
                  elemente iz <strong>1908. godine</strong>, smeštena je stalna muzejska postavka koja
                  prikazuje istorijski i kulturni razvoj Kruševca i okolnih naselja.
                </p>
              </section>


            </>
          )
          :
          (
            <>

              <section lang="en">
                <p>
                  <strong>Kruševac</strong> is a city and the administrative center of the municipality with the same name in Serbia. It is the main administrative center of the <strong>Rasina District</strong>. According to the <strong>2022 census</strong>, the city has <strong>68,119 inhabitants</strong>. It is located in the valley of the <em>Western Morava River</em>, near the <strong>Rasina River</strong>.
                  <br /><br />
                  Kruševac is an important <strong>economic</strong>, <strong>cultural</strong>, <strong>administrative</strong>, <strong>educational</strong>, <strong>healthcare</strong>, <strong>informational</strong>, and <strong>sports center</strong> of this region. The city encompasses <strong>101 settlements</strong> and covers an area of <strong>854 km²</strong>. In the past, Kruševac was the capital of the medieval ruler <strong>Prince Lazar</strong>.
                </p>
              </section>

              <img srcSet={`${krusevac11} 450w, ${krusevac1}`} alt="Krusevac Lazar's City" />

              <section lang="en">
                <p>
                  When Serbian Prince <strong>Lazar</strong> chose Kruševac as the place to defend medieval Serbia from the Turkish invaders, there was only a small settlement in that area. Shortly after, the prince reinforced the walls, built the city, and made it his capital.
                  <br /><br />
                  The remains of the walls and towers of the medieval fortress can be seen at the archaeological site, in <em>Lazar's City</em> in Kruševac. From this city, in <strong>1389</strong>, Prince Lazar led the Serbian army to the Battle of <strong>Kosovo</strong> to defend his land against the advancing Turkish army. A monument dedicated to the Battle of Kosovo is located in the main square of Kruševac.
                </p>
              </section>

              <img srcSet={`${krusevac33} 450w, ${krusevac3}`} alt="Monument to Despot Stefan Lazarević in Kruševac" />

              <section lang="en">
                <p>
                  On <strong>Vidovdan (St. Vitus Day) 2020</strong>, at the "Kosturnica" Square in Kruševac, the Monument to Despot <strong>Stefan Lazarević</strong>, the son of Prince Lazar, was solemnly unveiled. He was a great military leader, warrior, distinguished diplomat, builder, ktitor, and a great patron of the arts. Despot Stefan is depicted on a rearing horse, holding a cross in his hand, symbolically turned towards <strong>Kosovo</strong>. The monument, including its pedestal, is <strong>nine meters tall</strong>, and its significance as a ruler, writer, and arts patron is reflected through verses from his most famous poem <em>"Slovoljubve"</em> on the northern side, while the Serbian coat of arms is shown on the southern side of the pedestal. The author of this monument is Dr. Boris Stajkovac.
                </p>
              </section>

              <img srcSet={`${krusevac44} 450w, ${krusevac4}`} alt="Kruševac 2" />

              <section lang="en">
                <p>
                  According to legend, Kruševac got its name from a large river stone, called <em>kors</em>, which was mainly used to build the city. After the Battle of Kosovo, Kruševac became the capital of the vassal Serbian state ruled by Princess Milica, and later Despot Stefan, who moved the capital to Belgrade. The Turks conquered Kruševac in <strong>1427</strong>, after the death of Despot Stefan. From <strong>1444</strong>, Kruševac was under the rule of Đurađ Branković, but the Turks finally took it over in <strong>1454</strong> and renamed it <em>ALAŽA HISAR (Colorful City)</em>. During the 17th and 18th centuries, Kruševac was temporarily liberated from Turkish rule several times. During the First Serbian Uprising, the city was liberated in <strong>1806</strong> and remained free until <strong>1809</strong>. The nickname <em>"Čarapani"</em> (meaning "Sock-wearers") originated in this period, and locals are proud of it. They earned this nickname in 1806 during an attack on the Turks when they bravely and cleverly took off their shoes, silently approached the Turks in socks only, and defeated them.
                </p>
              </section>

              <img srcSet={`${krusevac55} 450w, ${krusevac5}`} alt="Church of Lazarica" />

              <section lang="en">
                <p>
                  The <strong>Church of Lazarica</strong>, located in the very heart of Kruševac, along with the city itself, represents the oldest and most valuable cultural monument in this place. It was built by Prince Lazar as a church within his new capital, dedicated to his first son Stefan, the heir to the throne. It is dedicated to Archdeacon Stefan, the protector of the <strong>Nemanjić dynasty</strong>, and originally bore the name <em>Church of St. Stephen the Protomartyr</em>. It is assumed to have been built between <strong>1376 and 1380</strong>.
                  <br /><br />
                  The Serbian army was consecrated in front of this church before departing to Kosovo.
                  <br /><br />
                  Lazarica is the first church in Serbia to undergo professional restoration and conservation, carried out between <strong>1904</strong> and <strong>1908</strong> under the guidance of architect Pera J. Popović. Before that, the church had been restored amateurishly several times during the 19th century after the city was freed from the Turks.
                </p>
              </section>

              <img srcSet={`${krusevac66} 450w, ${krusevac6}`} alt="Monument to Kosovo Heroes in Kruševac" />

              <section lang="en">
                <p>
                  The Monument to Kosovo Heroes in Kruševac is the most famous sculptural work by Đorđe Jovanović. This monument, located at Kosovo Heroes Square, is dedicated to the heroes of the Battle of Kosovo and was erected on <strong>June 15, 1904</strong>, when it was solemnly unveiled by King Peter I Karađorđević on the occasion of the 100th anniversary of the First Serbian Uprising. The cornerstone was laid by King Aleksandar Obrenović in <strong>1889</strong>, on the 500th anniversary of the Battle of Kosovo.
                  <br /><br />
                  The monument is shaped as a marble pyramid <strong>6 meters</strong> high, with sculptures of Vila and Boško Jugović at the top, which are <strong>4 meters</strong> tall. This monument is executed in the neoclassical style and contains clear sculptural symbols.
                </p>
              </section>

              <img srcSet={`${krusevac77} 450w, ${krusevac7}`} alt="National Museum Kruševac" />

              <section lang="en">
                <p>
                  The <strong>National Museum in Kruševac</strong> is a regional museum covering the area of Rasina District. It was founded on <strong>December 19, 1951</strong>.
                  <br /><br />
                  The museum is engaged in collecting, preserving, protecting, and exhibiting movable cultural goods and remains of material culture. It is located within the complex of the medieval city of Prince Lazar Hrebeljanović, near the Church of Lazarica. In the neoclassical building of the former gymnasium, built in <strong>1863</strong> and featuring Secession decorative elements from <strong>1908</strong>, there is a permanent exhibition presenting the historical and cultural development of Kruševac and surrounding settlements.
                </p>
              </section>


            </>
          )}

      </div>
    </>
  );
};


export default Krusevac;