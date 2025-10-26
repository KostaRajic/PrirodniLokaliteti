/* eslint-disable react/no-unknown-property */
/* eslint-disable no-useless-escape */
import vranje1 from "../../../../../assets/images/JuznaIIstocnaSrbija/PcinjskiOkrug/Vranje/desktop/vranje1.jpg";
import vranje2 from "../../../../../assets/images/JuznaIIstocnaSrbija/PcinjskiOkrug/Vranje/desktop/vranje2.jpg";
import vranje3 from "../../../../../assets/images/JuznaIIstocnaSrbija/PcinjskiOkrug/Vranje/desktop/vranje3.jpg";
import vranje4 from "../../../../../assets/images/JuznaIIstocnaSrbija/PcinjskiOkrug/Vranje/desktop/vranje4.jpg";
import vranje5 from "../../../../../assets/images/JuznaIIstocnaSrbija/PcinjskiOkrug/Vranje/desktop/vranje5.jpg";
import vranje6 from "../../../../../assets/images/JuznaIIstocnaSrbija/PcinjskiOkrug/Vranje/desktop/vranje6.jpg";
import vranje7 from "../../../../../assets/images/JuznaIIstocnaSrbija/PcinjskiOkrug/Vranje/desktop/vranje7.jpg";
import vranje8 from "../../../../../assets/images/JuznaIIstocnaSrbija/PcinjskiOkrug/Vranje/desktop/vranje8.jpg";
import vranje9 from "../../../../../assets/images/JuznaIIstocnaSrbija/PcinjskiOkrug/Vranje/desktop/vranje9.jpg";
import vranje11 from "../../../../../assets/images/JuznaIIstocnaSrbija/PcinjskiOkrug/Vranje/mobile/vranjeM1.jpg";
import vranje22 from "../../../../../assets/images/JuznaIIstocnaSrbija/PcinjskiOkrug/Vranje/mobile/vranjeM2.jpg";
import vranje33 from "../../../../../assets/images/JuznaIIstocnaSrbija/PcinjskiOkrug/Vranje/mobile/vranjeM3.jpg";
import vranje44 from "../../../../../assets/images/JuznaIIstocnaSrbija/PcinjskiOkrug/Vranje/mobile/vranjeM4.jpg";
import vranje55 from "../../../../../assets/images/JuznaIIstocnaSrbija/PcinjskiOkrug/Vranje/mobile/vranjeM5.jpg";
import vranje66 from "../../../../../assets/images/JuznaIIstocnaSrbija/PcinjskiOkrug/Vranje/mobile/vranjeM6.jpg";
import vranje77 from "../../../../../assets/images/JuznaIIstocnaSrbija/PcinjskiOkrug/Vranje/mobile/vranjeM7.jpg";
import vranje88 from "../../../../../assets/images/JuznaIIstocnaSrbija/PcinjskiOkrug/Vranje/mobile/vranjeM8.jpg";
import vranje99 from "../../../../../assets/images/JuznaIIstocnaSrbija/PcinjskiOkrug/Vranje/mobile/vranjeM9.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { pcinjskiOkrugPathRoutes } from "./PcinjskiOkrugPathRoutes";
import { useContextAuth } from "../../../../../Context";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const Vranje = () => {
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

        <title>{switchLanguage === 'rs' ?
          "Vranje – Istorija, kultura i duša juga Srbije | Serbia Wonders"
          :
          "Vranje – History, Culture, and Soul of Southern Serbia | Serbia Wonders"
        }
        </title>
        <meta
          name="description"
          content={switchLanguage === 'rs' ?
            "Vranje je istorijski i kulturni centar juga Srbije, poznat po bogatom nasleđu, Borislavu Stankoviću, Sabornoj crkvi, Belom mostu i muzičkoj tradiciji. Grad koji spaja prošlost i sadašnjost."
            :
            "Vranje is a historic and cultural hub of southern Serbia, known for its Ottoman heritage, Beli Most, Borislav Stanković’s legacy, and traditional Serbian music. A place where history lives."
          }
        />
        <meta
          name="keywords"
          content={switchLanguage === 'rs' ?
            "Vranje, Borislav Stanković, Vranje istorija, Beli most, Narodni muzej Vranje, Saborna crkva, Vranje znamenitosti, kultura juga Srbije, Pčinjski okrug, južna Srbija"
            :
            "Vranje, Serbia, Borislav Stanković, Beli Most, National Museum of Vranje, Holy Trinity Church, Southern Serbia heritage, cultural tourism Serbia, Pčinja District"
          }
        />
        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/pcinjski-okrug/vranje`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/pcinjski-okrug/vranje"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/pcinjski-okrug/vranje"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/pcinjski-okrug/vranje"
        />

      </Helmet>

      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft className="arrowLeft" onClick={() => navigate(pcinjskiOkrugPathRoutes.home(switchLanguage))} />
        <header></header>
        <img srcSet={`${vranje11} 450w, ${vranje1} `} alt="Vranje 1" loading="lazy" />

        <h1>Vranje</h1>

        {switchLanguage === 'rs' ?
          (
            <>

              <section lang="sr">
                <p>
                  <strong>Vranje</strong> je više puta bilo osvajano, pre nego što je <strong>1207. godine</strong> postalo
                  deo <em>Velikžupanijske Srbije</em>. Kroz istoriju, <strong>Vranjem</strong> su vladale mnoge
                  srpske plemićke porodice, sve dok ga <strong>1455. godine</strong> nije pokorilo <em>Osmansko
                    carstvo</em>. Tokom osmanske vlasti, <strong>Vranje</strong> je imalo značajnu ulogu jer se
                  nalazilo na raskrsnici važnih puteva, a u jednom periodu bilo je i
                  sedište kadiluka. Grad je oslobođen <strong>31. januara 1878. godine</strong> i postao je
                  sedište moravskog sreza. Godine <strong>1904.</strong> <em>Vranje</em> je pogodio zemljotres, koji
                  je prouzrokovao značajnu štetu na infrastrukturi.
                </p>
              </section>

              <img srcSet={`${vranje22} 450w, ${vranje2}`} alt="Vranje 2" loading="lazy" />

              <section lang="sr">
                <p>
                  Tokom <strong>Prvog svetskog rata</strong>, <strong>Vranje</strong> je bilo okupirano od strane <em>Kraljevine Bugarske</em>, a nakon završetka rata postalo je deo <em>Kraljevine Jugoslavije</em>,
                  da bi od <strong>1929. godine</strong> pripadalo <em>Varadarskoj banovini</em>. U <strong>Drugom svetskom
                    ratu</strong>, <strong>Vranje</strong> je ponovo okupirala <em>Kraljevina Bugarska</em>, a nakon
                  oslobođenja postaje sedište <strong>Pčinjskog okruga</strong>. Tada počinje njegov
                  industrijski i urbanistički razvoj, a grad postaje <strong>tekstilni, drvni i
                    metalurški centar</strong> unutar <em>SFRJ</em>.
                </p>
              </section>

              <img srcSet={`${vranje33} 450w, ${vranje33}`} alt="Vranje 3" loading="lazy" />

              <section lang="sr">
                <p>
                  Grad je poznat po <strong>muzici i trubačkim orkestrima</strong>, kao i po delima čuvenog
                  srpskog realističkog pisca <strong>Borislava Stankovića</strong>. U <strong>Vranju</strong> se nalaze
                  brojne institucije i spomenici posvećeni njegovom imenu. Grad je domaćin
                  mnogim manifestacijama, među kojima su najpoznatije <em>Stari dani</em>, <em>Borina nedelja</em> i <em>Borini pozorišni dani</em>. <strong>Vranje</strong> je prvi grad na Balkanu koji je
                  <em>UNESCO</em> proglasio <strong>gradom muzike</strong>. Takođe, <strong>Vranje</strong> je sedište <em>Eparhije vranjske</em> i <strong>4. brigade Vojske Srbije</strong>.
                </p>
              </section>

              <img srcSet={`${vranje44} 450w, ${vranje4}`} alt="Vranje 4" loading="lazy" />

              <section lang="sr">
                <p>
                  Ime grada <strong>Vranje</strong> potiče iz davne prošlosti, iako je kroz istoriju,
                  naročito nakon oslobođenja od Turaka, bilo konfuzija i nesuglasica oko
                  naziva. Postoje tvrdnje da je <strong>Vranje</strong> tokom vremena nosilo i više drugih
                  imena. <strong>Vranjanci</strong> su uvek koristili ime <strong>Vranje</strong>, koje se prvi put pominje
                  u vreme <em>Stefana Dečanskog</em>. Ovo ime odnosilo se isključivo na naseljeno
                  mesto, dok je srednjovekovna župa nosila naziv <strong>Vranja</strong>. To je izazivalo
                  zabunu, naročito u drugoj polovini <strong>19. veka</strong>, kada su mnogi naučnici
                  počeli da istražuju grad. Pokazalo se da je u to vreme <strong>Vranje</strong> zvanično
                  nosilo naziv <strong>Vranja</strong>. U srednjovekovnim darovnim poveljama i drugim
                  dokumentima grad je pominjan kao <strong>Vranja</strong>, <strong>Vranija</strong>, <strong>Vrania</strong>, <strong>Vrajna</strong>, <strong>Viran</strong> i <strong>Viranja</strong>. Kako će se grad zvati, zavisilo je i od jezika na kojem su
                  pisani dokumenti. „Da bi zabuna bila veća, pojavile su se i legende koje
                  govore da je <strong>Vranje</strong> bilo poznato kao <em>Vrana</em>, <em>Golubinje</em> ili <em>Golubićeva</em>“
                  piše <strong>Miodrag Pešić</strong> u svojoj knjizi <em>„Vranje“</em>.
                </p>
              </section>

              <img srcSet={`${vranje55} 450w, ${vranje5}`} alt="Vranje 5" loading="lazy" />

              <section lang="sr">
                <p>
                  <strong>Vranje</strong> je ekonomski, politički i kulturni centar <em>Pčinjskog okruga</em>, koji
                  obuhvata opštine <strong>Bosilegrad</strong>, <strong>Bujanovac</strong>, <strong>Vladičin Han</strong>, <strong>Preševo</strong>,
                  <strong>Surdulicu</strong>, <strong>Trgovište</strong> i grad <strong>Vranje</strong>. Grad se nalazi u severozapadnom delu
                  <em>Vranjske kotline</em>, na levoj obali <strong>Južne Morave</strong>. Reka i grad su povezani
                  magistralnim putem i železničkom prugom, koji na severu vode ka:
                  <strong>Leskovcu</strong> (70 km), <strong>Nišu</strong> (110 km) i <strong>Beogradu</strong> (347 km), a na jugu ka:
                  <strong>Kumanovu</strong> (56 km), <strong>Skoplju</strong> (91 km) i <strong>Solunu</strong> (354 km).
                  <br />
                  <br />
                  <strong>Vranje</strong> je smešteno u podnožju planina <strong>Pljačkovice</strong> (1231 m), <strong>Krstilovice</strong>
                  (1154 m) i <strong>Pržare</strong> (731 m). Od granice sa <strong>Bugarskom</strong> udaljeno je 70 km, a
                  od <strong>Severne Makedonije</strong> 40 km.
                </p>
              </section>

              <img srcSet={`${vranje88} 450w, ${vranje8}`} alt="Narodni muzej u Vranju" loading="lazy" />

              <section lang="sr">
                <p>
                  <strong>Narodni muzej u Vranju</strong> osnovan je <strong>1960. godine</strong> u staroj zgradi <em>Selamluk</em>
                  (jednoj od zgrada kompleksa <em>Pašinih konaka</em>), ukazom <strong>Narodnog odbora
                    sreza Vranja</strong> kao Muzej narodnoslobodilačkog rata.
                  <br />
                  <br />
                  Vremenom, kako su se zbirke formirale i uvećavale, prerastao je u muzej
                  kompleksnog tipa, te je odlukom <strong>SO Vranje</strong> <strong>1992. godine</strong> preimenovan u
                  <strong>Narodni muzej u Vranju</strong>. Osnivanjem <strong>Muzeja kuće Bore Stankovića</strong> <strong>1967.
                    godine</strong> i <strong>Galerije Narodnog muzeja</strong> <strong>1995. godine</strong>, postali su sastavni deo
                  <strong>Narodnog muzeja u Vranju</strong>.
                  <br />
                  <br />
                  Od svog osnivanja do danas, muzej je postao mesto dinamičnih izložbenih
                  sezona, kako savremenog stvaralaštva, tako i drugih tematskih izložbi i
                  prikladnih gradskih programa.
                  <br />
                  <br />
                  Od <strong>2003. godine</strong>, u sastav muzeja ulazi i <strong>stari Hamam</strong>.
                  <br />
                  <br />
                  Pod upravom muzeja od <strong>2019. godine</strong> nalazi se i <strong>Pribojićeva kuća</strong>, koja
                  ima funkciju administrativnog centra.
                  <br />
                  <br />
                  Od <strong>2021. godine</strong>, zgrada <em>Haremluka</em> je pod upravom <strong>Narodnog muzeja Vranje</strong>,
                  čime je čitav kompleks <em>Pašinih konaka</em> (sa zgradama <em>Selamluka</em> i <em>Haremluka</em>) kompletiran.
                </p>
              </section>


              <img srcSet={`${vranje99} 450w, ${vranje9}`} alt="Saborna crkva Svete Trojice u Vranju" loading="lazy" />
              <section lang="sr">
                <p>
                  <strong>Saborna crkva Svete Trojice u Vranju</strong> je glavni i najveći pravoslavni
                  hram u ovom gradu, kao i centralna crkva <em>Vranjske eparhije Srpske
                    pravoslavne crkve</em>. Ona je proglašena za <strong>nepokretno kulturno dobro</strong>,
                  spomenik kulture. Današnji <strong>Saborni hram</strong> je izgrađen na mestu prethodne
                  crkve.
                  <br /><br />
                  Krajem <strong>18.</strong> i početkom <strong>19. veka</strong>, <strong>Vranje</strong> je doživelo privredni uspon, što
                  je pratilo buđenje građanske i srpske nacionalne svesti, ali i obnovu
                  verskog života nakon ukidanja <em>Pećke patrijaršije</em>.
                  <br /><br />
                  Velika Saborna crkva je izgrađena uz pomoć vranjskog paše <strong>Huseina</strong>,
                  „<em>velikog prijatelja Srba</em>“, što je izazvalo nezadovoljstvo domaćih
                  Turčina. Turci i Arnauti iz okolnih sela su <strong>1843. godine</strong>, na <em>Spasovdan</em>,
                  opljačkali hrišćane i oskrnavili crkve u varoši.
                  <br /><br />
                  Pod uticajem međunarodne javnosti i diplomatskih predstavnika, kao i na
                  zahtev Vranjanaca, <em>Porta</em> je pohvatala i kaznila pobunjenike. Carska
                  komisija je procenila štetu nanetu srušenoj Sabornoj crkvi. Pošto šteta
                  nije bila nadoknađena, Vranjanci su sami, iz svojih sredstava i radom,
                  podigli novu crkvu, najverovatnije na temeljima prethodne. Crkva je
                  građena od <strong>1858.</strong> do <strong>1860. godine</strong>, a njen graditelj bio je <strong>Andreja
                    Damjanov</strong>, iz poznate mijačke porodice, poreklom iz <em>Tresočnja</em> u debarskom
                  kraju. Njegov brat je izradio oltarsku pregradu.
                  <br /><br />
                </p>
              </section>

              <img srcSet={`${vranje66} 450w, ${vranje6}`} alt="Kuća Bore Stankovića" loading="lazy" />

              <section lang="sr">
                <p>
                  <strong>Kuća Bore Stankovića</strong> nalazi se u <strong>Vranju</strong>, u <em>Babi Zlatinoj ulici broj 9</em>, u
                  nekadašnjoj Donjoj mali, na placu koji je kupila Borina baka, po kojoj
                  je ulica i dobila ime. Ovaj objekat je značajan jer se upravo u ovoj
                  kući rodio pisac <strong>Borisav Stanković</strong>. Kuća Bore Stankovića ima status
                  spomenika kulture od velikog značaja. Izgrađena je <strong>1855. godine</strong> i nalazi
                  se u <em>Babi Zlatinoj ulici</em>, koja je dobila ime po Boriinoj baki sa očeve
                  strane. Kuću je podigla "<em>baba Zlata</em>". Početkom <strong>20. veka</strong>, opština je
                  otkupila kuću, rekonstruisala je i od tipično vranjskog domaćinstva
                  napravila muzejski objekat. Danas je u ovoj kući smešten muzej koji
                  pripada <strong>Narodnom muzeju u Vranju</strong>.
                </p>

              </section>

              <img srcSet={`${vranje77} 450w, ${vranje7}`} alt="Beli most u Vranju" loading="lazy" />

              <section lang="sr">
                <p>
                  <strong>Beli most</strong>, poznat i kao <em>most ljubavi</em>, izgrađen je <strong>1844. godine</strong> u <strong>Vranju</strong>.
                  Most se nalazi iznad <strong>Vranjske reke</strong>, u ulici <em>Devet Jugovića</em>, i prikazan
                  je na grbu grada <strong>Vranja</strong>. Smatra se <strong>nepokretnim kulturnim dobrom</strong> i
                  spomenikom kulture.
                  <br /><br />
                  Legenda kaže da je most podigla majka Turkinje <strong>Ajše</strong> u spomen nesrećnoj
                  ljubavi njene ćerke i srpskog pastira <strong>Stojana</strong>.
                  <br /><br />
                  Po rođenju ćerke Ajše, <strong>Selim-begu</strong> su proročice predvideo da će se ona
                  zaljubiti u Srbina. Iako je otac pokušavao da zatvori ćerku kako bi
                  sprečio proročanstvo, nije uspeo u tome.
                  <br /><br />
                  Kada je zatekao <strong>Stojana</strong> i <strong>Ajšu</strong> zagrljene kraj reke pokušao je da ubije
                  srpskog pastira. Međutim, usmrtio je sopstvenu ćerku koja je svojim
                  telom zaštitila mladića kojeg je volela. Nakon toga je i <strong>Stojan</strong> svojim
                  nožem oduzeo sebi život.
                  <br /><br />
                  Na mestu gde se odigrao događaj, podignut je most, a na
                  most je postavljena ploča, tzv. <em>tarih</em>, na kojoj na turskom i arapskom
                  jeziku stoji natpis: „<strong>Proklet neka je onaj koji rastavi što ljubav
                    sastavi</strong>“.
                </p>
              </section>


            </>
          )
          :
          (
            <>

              <section lang="en"> <p> <strong>Vranje</strong> was conquered multiple times before it became part of <em>the Grand Principality of Serbia</em> in <strong>1207</strong>. Throughout history, many Serbian noble families ruled over <strong>Vranje</strong> until it was conquered by the <em>Ottoman Empire</em> in <strong>1455</strong>. During Ottoman rule, <strong>Vranje</strong> played an important role as it was located at the crossroads of significant roads and was, for a period, the seat of a kadiluk (administrative district). The city was liberated on <strong>January 31, 1878</strong> and became the center of the Morava district. In <strong>1904</strong>, <em>Vranje</em> was hit by an earthquake that caused significant damage to its infrastructure. </p> </section>

              <img srcSet={`${vranje22} 450w, ${vranje2}`} alt="Vranje 2" loading="lazy" />

              <section lang="en"> <p> During <strong>World War I</strong>, <strong>Vranje</strong> was occupied by the <em>Kingdom of Bulgaria</em>, and after the war ended, it became part of the <em>Kingdom of Yugoslavia</em>. From <strong>1929</strong>, it belonged to the <em>Vardar Banovina</em>. In <strong>World War II</strong>, <strong>Vranje</strong> was again occupied by the <em>Kingdom of Bulgaria</em>. After liberation, it became the seat of the <strong>Pčinja District</strong>. This marked the beginning of its industrial and urban development, with the city becoming a <strong>textile, wood, and metallurgical center</strong> within the <em>SFRY</em> (Socialist Federal Republic of Yugoslavia). </p> </section>

              <img srcSet={`${vranje33} 450w, ${vranje33}`} alt="Vranje 3" loading="lazy" />


              <section lang="en"> <p> The city is known for its <strong>music and brass bands</strong>, as well as the works of the famous Serbian realist writer <strong>Borislav Stanković</strong>. In <strong>Vranje</strong>, there are numerous institutions and monuments dedicated to his name. The city hosts many events, the most famous being <em>Old Days</em>, <em>Bora’s Week</em>, and <em>Bora’s Theatre Days</em>. <strong>Vranje</strong> was the first city in the Balkans to be proclaimed a <em>UNESCO City of Music</em>. Additionally, <strong>Vranje</strong> is the seat of the <em>Eparchy of Vranje</em> and the <strong>4th Brigade of the Serbian Army</strong>. </p> </section>

              <img srcSet={`${vranje44} 450w, ${vranje4}`} alt="Vranje 4" loading="lazy" />

              <section lang="en"> <p> The name of the city <strong>Vranje</strong> dates back to ancient times, although throughout history—especially after liberation from the Turks—there was confusion and disagreement about the name. There are claims that <strong>Vranje</strong> carried several other names over time. The <strong>Vranje</strong> residents have always used the name <strong>Vranje</strong>, which was first mentioned during the time of <em>Stefan Dečanski</em>. This name referred exclusively to the inhabited settlement, while the medieval district was called <strong>Vranja</strong>. This caused confusion, especially in the second half of the <strong>19th century</strong>, when many scholars began researching the city. It was found that at that time, the city officially bore the name <strong>Vranja</strong>. In medieval charters and other documents, the city was mentioned as <strong>Vranja</strong>, <strong>Vranija</strong>, <strong>Vrania</strong>, <strong>Vrajna</strong>, <strong>Viran</strong>, and <strong>Viranja</strong>. The city’s name depended on the language of the documents. “To add to the confusion, legends appeared saying that <strong>Vranje</strong> was also known as <em>Vrana</em>, <em>Golubinje</em>, or <em>Golubićeva</em>,” writes <strong>Miodrag Pešić</strong> in his book <em>“Vranje”</em>. </p> </section>

              <img srcSet={`${vranje55} 450w, ${vranje5}`} alt="Vranje 5" loading="lazy" />

              <section lang="en"> <p> <strong>Vranje</strong> is the economic, political, and cultural center of the <em>Pčinja District</em>, which includes the municipalities of <strong>Bosilegrad</strong>, <strong>Bujanovac</strong>, <strong>Vladičin Han</strong>, <strong>Preševo</strong>, <strong>Surdulica</strong>, <strong>Trgovište</strong>, and the city of <strong>Vranje</strong>. The city is located in the northwestern part of the <em>Vranje Basin</em>, on the left bank of the <strong>South Morava River</strong>. The river and city are connected by a main road and railway that lead north to <strong>Leskovac</strong> (70 km), <strong>Niš</strong> (110 km), and <strong>Belgrade</strong> (347 km), and south to <strong>Kumanovo</strong> (56 km), <strong>Skopje</strong> (91 km), and <strong>Thessaloniki</strong> (354 km). <br /><br /> <strong>Vranje</strong> is situated at the foot of the <strong>Pljačkovica</strong> (1231 m), <strong>Krstilovica</strong> (1154 m), and <strong>Pržar</strong> (731 m) mountains. It is 70 km from the border with <strong>Bulgaria</strong> and 40 km from <strong>North Macedonia</strong>. </p> </section>

              <img srcSet={`${vranje88} 450w, ${vranje8}`} alt="National Museum in Vranje" loading="lazy" />

              <section lang="en">
                <p> The <strong>National Museum in Vranje</strong> was founded in <strong>1960</strong> in the old <em>Selamluk</em> building (one of the buildings in the <em>Paša's Konak</em> complex) by decree of the <strong>People’s Committee of the Vranje District</strong> as a Museum of the National Liberation War. <br /><br /> Over time, as the collections were formed and expanded, it grew into a complex-type museum and was renamed the <strong>National Museum in Vranje</strong> by decision of the <strong>Municipal Assembly of Vranje</strong> in <strong>1992</strong>. The establishment of the <strong>Bora Stanković House Museum</strong> in <strong>1967</strong> and the <strong>Gallery of the National Museum</strong> in <strong>1995</strong> became part of the National Museum in Vranje. <br /><br /> Since its foundation, the museum has become a place for dynamic exhibition seasons, showcasing both contemporary creations and other thematic exhibitions and suitable city programs. <br /><br /> Since <strong>2003</strong>, the old Hammam has been part of the museum. <br /><br /> Since <strong>2019</strong>, the museum also manages the <strong>Pribojević House</strong>, which functions as an administrative center. <br /><br /> Since <strong>2021</strong>, the <em>Harem Building</em> is under the management of the <strong>National Museum of Vranje</strong>, completing the entire <em>Paša's Konak</em> complex (with the <em>Selamluk</em> and <em>Harem</em> buildings). </p> </section> <section lang="en"> <img srcSet={`${vranje99} 450w, ${vranje9}`} alt="Cathedral Church of the Holy Trinity in Vranje" loading="lazy" /> <p> The <strong>Cathedral Church of the Holy Trinity in Vranje</strong> is the main and largest Orthodox church in the city, as well as the central church of the <em>Vranje Eparchy of the Serbian Orthodox Church</em>. It has been declared a <strong>cultural monument and immovable cultural heritage site</strong>. The current cathedral was built on the site of a previous church. <br /><br /> At the end of the <strong>18th</strong> and beginning of the <strong>19th century</strong>, <strong>Vranje</strong> experienced economic growth, accompanied by the awakening of civic and Serbian national consciousness, as well as the revival of religious life after the abolition of the <em>Patriarchate of Peć</em>. <br /><br /> The large cathedral was built with the help of the Vranje pasha <strong>Husein</strong>, a "<em>great friend of the Serbs</em>", which caused dissatisfaction among the local Turks. In <strong>1843</strong>, on <em>Spasovdan</em> (Ascension Day), Turks and Albanians from nearby villages plundered Christians and desecrated churches in the town. <br /><br /> Under the influence of international public opinion and diplomatic representatives, and at the request of the citizens of Vranje, the <em>Porta</em> arrested and punished the rebels. The imperial commission assessed the damage caused to the destroyed Cathedral Church. Since the damage was not compensated, the citizens of Vranje rebuilt the new church themselves, most likely on the foundations of the previous one. The church was built from <strong>1858 to 1860</strong>, and its builder was <strong>Andreja Damjanov</strong> from the well-known Mijak family, originally from <em>Tresočnje</em> in the Debar region. His brother made the iconostasis. <br /><br /> </p>
              </section>

              <img srcSet={`${vranje66} 450w, ${vranje6}`} alt="Bora Stanković’s House" loading="lazy" />

              <section lang="en">
                <p> The <strong>Bora Stanković House</strong> is located in <strong>Vranje</strong>, at <em>Baba Zlata Street number 9</em>, in the former Donja Mala, on a plot purchased by Bora’s grandmother, after whom the street was named. This building is significant because the writer <strong>Borisav Stanković</strong> was born here. The Bora Stanković House has the status of a cultural monument of great importance. It was built in <strong>1855</strong> and is located on <em>Baba Zlata Street</em>, named after Bora’s grandmother on his father's side. The house was built by "<em>grandma Zlata</em>". At the beginning of the <strong>20th century</strong>, the municipality bought the house, reconstructed it, and transformed it from a typical Vranje household into a museum. Today, the house hosts a museum that is part of the <strong>National Museum in Vranje</strong>. </p>
              </section>

              <img srcSet={`${vranje77} 450w, ${vranje7}`} alt="White Bridge in Vranje" loading="lazy" />

              <section lang="en">
                <p> The <strong>White Bridge</strong>, also known as the <em>Bridge of Love</em>, was built in <strong>1844</strong> in <strong>Vranje</strong>. The bridge is located above the <strong>Vranje River</strong>, on <em>Devet Jugovića Street</em>, and is depicted on the city’s coat of arms. It is considered an <strong>immovable cultural heritage site</strong> and a cultural monument. <br /><br /> Legend says the bridge was built by the mother of a Turkish woman named <strong>Ajša</strong> in memory of the tragic love between her daughter and a Serbian shepherd named <strong>Stojan</strong>. <br /><br /> Upon the birth of Ajša, <strong>Selim-beg</strong> was foretold by soothsayers that she would fall in love with a Serb. Although the father tried to keep his daughter locked away to prevent the prophecy, he failed. <br /><br /> When he found <strong>Stojan</strong> and <strong>Ajša</strong> embracing by the river, he tried to kill the Serbian shepherd. However, he ended up killing his own daughter, who used her body to protect the young man she loved. Afterward, <strong>Stojan</strong> took his own life with a knife. <br /><br /> The bridge was erected at the site of this event, and a plaque called <em>tarih</em> was placed on the bridge, bearing an inscription in Turkish and Arabic: "<strong>Cursed be anyone who separates what love has united</strong>." </p>
              </section>


            </>
          )}

      </div >
    </>
  );
};


export default Vranje;