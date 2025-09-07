/* eslint-disable react/no-unknown-property */
import novoHopovo1 from "../../../../../assets/images/Vojvodina/SremskiOkrug/manastirNovoHopovo/desktop/novoHopovo2.jpg";
import novoHopovo2 from "../../../../../assets/images/Vojvodina/SremskiOkrug/manastirNovoHopovo/desktop/novoHopovo3.jpg";
import novoHopovo3 from "../../../../../assets/images/Vojvodina/SremskiOkrug/manastirNovoHopovo/desktop/novoHopovo4.jpg";
import novoHopovo4 from "../../../../../assets/images/Vojvodina/SremskiOkrug/manastirNovoHopovo/desktop/novoHopovo5.jpg";
import novoHopovo5 from "../../../../../assets/images/Vojvodina/SremskiOkrug/manastirNovoHopovo/desktop/novoHopovo6.jpg";
import novoHopovo11 from "../../../../../assets/images/Vojvodina/SremskiOkrug/manastirNovoHopovo/mobile/MnovoHopovo2.jpg";
import novoHopovo22 from "../../../../../assets/images/Vojvodina/SremskiOkrug/manastirNovoHopovo/mobile/MnovoHopovo3.jpg";
import novoHopovo33 from "../../../../../assets/images/Vojvodina/SremskiOkrug/manastirNovoHopovo/mobile/MnovoHopovo4.jpg";
import novoHopovo44 from "../../../../../assets/images/Vojvodina/SremskiOkrug/manastirNovoHopovo/mobile/MnovoHopovo5.jpg";
import novoHopovo55 from "../../../../../assets/images/Vojvodina/SremskiOkrug/manastirNovoHopovo/mobile/MnovoHopovo6.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { sremskiOkrugPathRoutes } from "./SremskiOkrugPathRoutes";
import { useContextAuth } from "../../../../../Context";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const ManastirNovoHopovo = () => {
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
          {switchLanguage === "rs"
            ? "Manastir Novo Hopovo | Istorija, Arhitektura i Duhovnost | Serbia Wonders"
            : "Novo Hopovo Monastery | History, Architecture & Spirituality | Serbia Wonders"}
        </title>

        <meta
          name="description"
          content={
            switchLanguage === "rs"
              ? "Manastir Novo Hopovo, značajni srpski manastir na Fruškoj gori, poznat po moravskoj arhitekturi i bogatoj duhovnoj tradiciji."
              : "Novo Hopovo Monastery, a significant Serbian monastery on Fruška Gora, known for Morava architectural style and rich spiritual heritage."
          }
        />

        <meta
          name="keywords"
          content={
            switchLanguage === "rs"
              ? "Manastir Novo Hopovo, Fruška gora, srpski manastiri, pravoslavlje, moravska škola, istorija, arhitektura"
              : "Novo Hopovo Monastery, Fruška Gora, Serbian monasteries, Orthodoxy, Morava school, history, architecture"
          }
        />

        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/sremski-okrug/novo-hopovo`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/sremski-okrug/novo-hopovo"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/sremski-okrug/novo-hopovo"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/sremski-okrug/novo-hopovo"
        />
        </Helmet>


        <div className="placeBackground">
          <ScrollToTop />
          <FaArrowLeft className="arrowLeft" onClick={() => navigate(sremskiOkrugPathRoutes.home(switchLanguage))} style={{ fill: 'white' }} />
          <header></header>
          <img srcSet={`${novoHopovo11} 450w, ${novoHopovo1} `} alt="Manastir Novo Hopovo 1" />

          {switchLanguage === 'rs' ?
            (
              <>
                <h2 style={{ color: 'white' }}>Manastir Novo Hopovo</h2>

                <section lang="sr">
                  <p>
                    Prema tradiciji, <strong>Sveti vladika Maksim</strong> postavio je temelje manastiru <strong>Novom Hopovu</strong> između <strong>1496. i 1502. godine</strong>.
                  </p>
                  <p>
                    Međutim, postoji tumačenje iz <strong>18. veka</strong>, zasnovano na životu <em>Svete Majke Angeline</em>, prema kojem prva zadužbina njenog sina nije bila <strong>Starog Hopovo</strong>, kako je to smatrao <strong>Dušan K. Petrović</strong>, već je to bio manastir na mestu današnjeg <strong>Novog Hopova</strong>, posvećen <strong>Svetom Nikoli</strong>.
                  </p>
                  <p>
                    U skladu sa savremenim razmišljanjima o istoriji <em>fruškogorskog monaštva</em>, pretpostavlja se da su prepisivanje <em>"Hopovskog mineja"</em> iz <strong>1541. godine</strong>, kao i <em>orahov kovčeg</em> u kojem su <strong>1555. godine</strong> bile netruležne mošti <strong>Svetog Teodora Tirona</strong>, vezani za budući <strong>Novi Hopovo</strong>.
                  </p>
                  <p>
                    S druge strane, <strong>M. Kosovač</strong> ukazuje na natpis na jednom kamenu, pronađenom prilikom zidanja nove crkve, koji kao osnivače manastira pominje <em>„bratsvo“</em> i <em>„dobre hrišćane“</em> iz <strong>1490. godine</strong>.
                  </p>
                  <p>
                    Ova svetinja se pominje u najstarijem <em>turskom popisu</em> iz <strong>1546. godine</strong>, dok se <strong>trideset godina kasnije</strong> spominju podaci o prilogu građana <strong>Laca</strong>, <strong>Marka</strong>, <strong>Joviše</strong> i <strong>Jovana Božanića</strong> iz <em>Gornjeg Kovina</em>, sa ostrva <em>Čepel</em>, kojim je podignut današnji hram posvećen <strong>Svetom Nikoli</strong>.
                  </p>
                  <p>
                    Na <em>tesanom kamenu</em> iznad zapadnih crkvenih vrata uklesana su njihova imena.
                  </p>
                </section>

                <img srcSet={`${novoHopovo22} 450w, ${novoHopovo2} `} alt="Manastir Novo Hopovo 2" />

                <section lang="sr">
                  <p>
                    Ovo crkveno zdanje, sa <strong>tri konhijalne osnove</strong> i <strong>dvanaestospranim kupolama</strong>
                    na <em>kvadratnom tamburu</em>, ukrašenom <em>slobodno stojećim kolonama</em> i <em>slepim arkadama</em>,
                    u svom arhitektonskom stilu jasno se oslanja na tradicije <strong>moravske škole</strong>.
                  </p>
                  <p>
                    Spolja, <strong>oltarska apsida</strong> ima <em>petostrani oblik</em>, dok su joj pridružene apside
                    <em>diakoniha</em> i <em>proscomidije</em>. <strong>Prostrana priprata</strong>, sa <em>poluobličastim svodom</em>,
                    ima <strong>pravougaoni oblik</strong>.
                  </p>
                  <p>
                    Impresivne arhitektonske ideje o <strong>crkvi Svetog Nikole</strong>, kao i njena veličanstvenost,
                    kasnije će značajno uticati na graditelje crkava u <strong>Nerađinu</strong>, <strong>Irišu</strong>,
                    <strong>Privinoj Glavi</strong> i <strong>Maloj Remeti</strong>.
                  </p>
                  <p>
                    Na trošak <strong>jermonaha Mitrofana</strong>, <em>oltar</em> i <em>naos</em> manastira <strong>Novi Hopovo</strong>
                    najverovatnije su oslikali <em>umetnici sa Svete Gore</em> <strong>1608. godine</strong>.
                  </p>
                  <p>
                    Oni su realizovali očekivani <em>herminijski sled</em>, sastavljen od <em>zona sa obaveznim ciklusima
                      prazničnih tema</em>, prikazima <strong>Hristovih dela i stradanja</strong>, kao i ključnim momentima iz
                    života <strong>Presvete Bogorodice</strong>, <strong>Svetog Jovana Krstitelja</strong>,
                    <strong>Svetog velikomučenika Ignjatija</strong>, <strong>proroka Danila</strong> i
                    <strong>Svetog velikomučenika Dimitrija</strong>.
                  </p>
                </section>

                <img srcSet={`${novoHopovo33} 450w, ${novoHopovo3} `} alt="Manastir Novo Hopovo 3" />

                <section lang="sr">
                  <p>
                    Tokom <strong>16. veka</strong>, <strong>Novi Hopovo</strong> je bilo jedno od najvažnijih duhovnih i
                    prosvetnih centara <strong>srpske Crkve</strong>, zbog čega su neki istoričari celu dijacezu
                    nazivali <em>„Hopovskom“</em>.
                  </p>
                  <p>
                    Kao <strong>druga mitropolitska rezidencija</strong>, manastir je služio tu funkciju puna dva veka –
                    u <strong>16. i 17. veku</strong>.
                  </p>
                  <p>
                    <em>"Protestantski prediktor"</em> i izaslanik <strong>habsburškog cara Maksimilijana II</strong>,
                    prilikom svog putovanja u <strong>Carigrad</strong> između <strong>1573. i 1578. godine</strong>,
                    zabeležio je kako su budući <strong>beogradski sveštenici</strong> upravo u Novom Hopovu sticali
                    svoje obrazovanje.
                  </p>
                  <p>
                    U ovom manastiru je <strong>1618. godine</strong> monah <strong>Efrem</strong> sa <em>Svete Gore</em>
                    prepisivao <strong>kanone</strong>, a <strong>1630. godine</strong> zlatar <strong>Neško Prolimleković</strong>
                    oklopio je jedno <em>„Jevanđelje“</em>.
                  </p>
                  <p>
                    Na zahtev <strong>daskala Jevrema Šišatovčanina</strong>, u ovoj monaškoj zajednici <strong>1675. godine</strong>
                    napisana je <em>služba Svetom Stefanu Štiljanoviću</em>.
                  </p>
                </section>

                <img srcSet={`${novoHopovo44} 450w, ${novoHopovo4} `} alt="Manastir Novo Hopovo 4" />

                <section lang="sr">
                  <p>
                    Tokom <strong>19. veka</strong>, graditeljska aktivnost <em>manastirske uprave</em> znatno je opala, što se ne može reći za
                    <strong>intelektualni rad</strong> ove obitelji.
                  </p>
                  <p>
                    Iguman <strong>Irinej (Radić)</strong> je <strong>1847. godine</strong> napisao <em>„Kratku istoriju o fruškogorskom opštežiteljnom manastiru Hopovu“</em>,
                    u kojoj pominje da se u <em>manastirskoj biblioteci</em> čuva <strong>šezdeset i četiri rukopisne knjige</strong>.
                  </p>
                  <p>
                    Takođe, od <strong>1815. do 1819. godine</strong>, kao i od <strong>1893. do 1899. godine</strong>, u manastiru je postojala
                    <strong>monaška škola</strong>.
                  </p>
                  <p>
                    <strong>Novi Hopovo</strong>, pod rukovodstvom arhimandrita <strong>dr Avgustina (Bošnjakovića)</strong>, u <strong>20. vek</strong> je ušlo sa:
                    <ul>
                      <li>imanjem od <strong>1.633 katastarska jutra</strong>,</li>
                      <li>bibliotekom koja je obuhvatala <strong>739 naslova</strong> (među kojima je bilo i petnaest rukopisnih <em>„Srbulja“</em>
                        iz <strong>15, 16. i 17. veka</strong>),</li>
                      <li>impozantnim arhivom, koji je bio pažljivo vođen od <strong>1699. godine</strong>.</li>
                    </ul>
                  </p>
                  <p>
                    U <strong>riznici manastira</strong> čuvali su se predmeti poput:
                    <ul>
                      <li><em>petohlebnice</em> iz <strong>1663. godine</strong>,</li>
                      <li><em>prestonog krsta</em> iz <strong>1654. godine</strong>,</li>
                      <li><em>srebrne darohranilice</em> iz <strong>1777. godine</strong>,</li>
                      <li><em>„Jevanđelja“</em> okovanih srebrom iz <strong>1609, 1735. i 1753. godine</strong>,</li>
                      <li><em>srebrnog kandila</em>, poklona mitropolita karlovačkog <strong>Jovana (Đorđevića)</strong> iz <strong>1771. godine</strong>,</li>
                      <li>srebrnog kandila sa gravurom: <em>„Dar barona Andreja od Šjaguňa, postružnika hopovskog, kasnije episkopa erdenskog, 1854.“</em></li>
                    </ul>
                  </p>
                </section>

                <img srcSet={`${novoHopovo55} 450w, ${novoHopovo5} `} alt="Manastir Novo Hopovo 5" />

                <section lang="sr">
                  <p>
                    U <strong>17. veku</strong>, <em>monasi iz Novog Hopova</em> prikupljali su milostinju po <strong>Rusiji</strong>, a čak su
                    <strong>1641. godine</strong> od cara <strong>Mihaila Romanova</strong> dobili <em>gramatu</em> koja im je dopuštala da
                    <strong>svake sedme ili osme godine</strong> ponovo dolaze u njegove zemlje.
                  </p>
                  <p>
                    <strong>Manastir</strong> je pretrpeo velika oštećenja tokom <em>habsburško-osmanskih ratova</em>, a <strong>1688. godine</strong>
                    <strong>turska vojska</strong> je spalila manastir, uprkos <strong>tri zaštitna fermana</strong> koja su predostrožni nastojatelji
                    isposlovali na <em>Porte</em>.
                  </p>
                  <p>
                    U tim nesrećnim godinama, <strong>svetinja</strong> je nekoliko puta opustela, jer su je <em>monasi napuštali</em>,
                    bežeći od opasnosti, ali i kako bi <strong>spasili dragocene relikvije</strong>.
                  </p>
                  <p>
                    Samo godinu dana nakon pomenutog razaranja, započeo je <strong>dug proces obnove</strong>, iako su monasi
                    ponovo bili primorani da <em>napuste manastir</em> tokom <strong>Seobe pod patrijarhom Arsenijem III</strong>,
                    kao i pred <strong>poraženom osmanskom vojskom 1716. godine</strong>.
                  </p>
                </section>



              </>
            )
            :
            (
              <>
                <h2 style={{ color: 'white' }}>Novo Hopovo Monastery</h2>

                <section lang="en">
                  <p>
                    According to tradition, <strong>Saint Bishop Maksim</strong> laid the foundations of the <strong>new Hopovo Monastery</strong> between <strong>1496 and 1502</strong>.
                  </p>
                  <p>
                    However, there is an interpretation from the <strong>18th century</strong>, based on the life of <em>Saint Mother Angelina</em>, suggesting that her son's first endowment was not the <strong>Old Hopovo Monastery</strong>—as believed by <strong>Dušan K. Petrović</strong>—but rather a monastery on the site of today’s <strong>New Hopovo</strong>, dedicated to <strong>Saint Nicholas</strong>.
                  </p>
                  <p>
                    In line with modern studies of <em>monasticism on Fruška Gora</em>, it is assumed that the copying of the <em>"Hopovo Menaion"</em> in <strong>1541</strong>, as well as the <em>walnut relic chest</em> containing the incorrupt relics of <strong>Saint Theodore the Tyron</strong> in <strong>1555</strong>, are connected to the future New Hopovo Monastery.
                  </p>
                  <p>
                    On the other hand, <strong>M. Kosovac</strong> points to an inscription on a stone discovered during the construction of the new church, which names the founders as the <em>"brotherhood"</em> and <em>"good Christians"</em> from <strong>1490</strong>.
                  </p>
                  <p>
                    This sanctuary is mentioned in the earliest <em>Ottoman census</em> from <strong>1546</strong>, and <strong>thirty years later</strong> records note donations by citizens <strong>Lac, Marko, Joviša, and Jovan Božanić</strong> from <em>Upper Kovin</em>, on the island of <em>Čepel</em>, which funded the current church dedicated to <strong>Saint Nicholas</strong>.
                  </p>
                  <p>
                    On a <em>carved stone</em> above the western church door, their names are inscribed.
                  </p>
                </section>

                <img srcSet={`${novoHopovo22} 450w, ${novoHopovo2}`} alt="Novo Hopovo Monastery 2" />

                <section lang="en">
                  <p>
                    This church structure, with its <strong>three conch-shaped foundations</strong> and <strong>twelve-sided domes</strong> on a <em>square drum</em> adorned with <em>freestanding columns</em> and <em>blind arcades</em>, clearly reflects the architectural traditions of the <strong>Moravian school</strong>.
                  </p>
                  <p>
                    Externally, the <strong>altar apse</strong> is <em>pentagonal</em>, with adjoining apses of the <em>diaconicon</em> and <em>prothesis</em>. The <strong>spacious narthex</strong>, with a <em>semi-shaped vault</em>, has a <strong>rectangular plan</strong>.
                  </p>
                  <p>
                    The impressive architectural concepts of the <strong>church of Saint Nicholas</strong> and its grandeur later significantly influenced builders of churches in <strong>Nerađin</strong>, <strong>Iriš</strong>, <strong>Privina Glava</strong>, and <strong>Mala Remeta</strong>.
                  </p>
                  <p>
                    At the expense of <strong>Hieromonk Mitrofan</strong>, the <em>altar</em> and <em>naos</em> of the <strong>New Hopovo Monastery</strong> were likely painted by <em>Mount Athos artists</em> in <strong>1608</strong>.
                  </p>
                  <p>
                    They executed the expected <em>hierarchical sequence</em>, composed of zones with obligatory cycles of festal themes, depictions of <strong>Christ’s deeds and sufferings</strong>, and key moments from the lives of <strong>the Most Holy Theotokos</strong>, <strong>Saint John the Baptist</strong>, <strong>Saint Ignatius the Great Martyr</strong>, <strong>the Prophet Daniel</strong>, and <strong>Saint Demetrius the Great Martyr</strong>.
                  </p>
                </section>

                <img srcSet={`${novoHopovo33} 450w, ${novoHopovo3}`} alt="Novo Hopovo Monastery 3" />

                <section lang="en">
                  <p>
                    During the <strong>16th century</strong>, <strong>New Hopovo</strong> was one of the most important spiritual and educational centers of the <strong>Serbian Church</strong>, prompting some historians to refer to the entire diocese as <em>"Hopovo"</em>.
                  </p>
                  <p>
                    Serving as the <strong>second metropolitan residence</strong>, the monastery held this role for two full centuries—in the <strong>16th and 17th centuries</strong>.
                  </p>
                  <p>
                    The <em>"Protestant predicator"</em> and envoy of the <strong>Habsburg Emperor Maximilian II</strong>, during his journey to <strong>Constantinople</strong> between <strong>1573 and 1578</strong>, noted that aspiring <strong>Belgrade clergy</strong> were educated at New Hopovo.
                  </p>
                  <p>
                    In <strong>1618</strong>, the monk <strong>Ephraim</strong> from <em>Mount Athos</em> copied <strong>canons</strong> at the monastery, and in <strong>1630</strong>, silversmith <strong>Neško Prolimleković</strong> bound a Gospel in metal.
                  </p>
                  <p>
                    At the request of teacher <strong>Jevrem Šišatovčanin</strong>, in <strong>1675</strong> the liturgical service for <em>Saint Stefan Štiljanović</em> was composed within this monastic community.
                  </p>
                </section>

                <img srcSet={`${novoHopovo44} 450w, ${novoHopovo4}`} alt="Novo Hopovo Monastery 4" />

                <section lang="en">
                  <p>
                    In the <strong>19th century</strong>, the construction activity of the <em>monastic administration</em> significantly declined, which cannot be said for their <strong>intellectual output</strong>.
                  </p>
                  <p>
                    Abbot <strong>Iriney (Radić)</strong> in <strong>1847</strong> wrote the <em>"Short History of the Fruška Gora Monastic Community of Hopovo"</em>, noting that the <em>monastery library</em> held <strong>sixty-four manuscript books</strong>.
                  </p>
                  <p>
                    Also, from <strong>1815 to 1819</strong> and from <strong>1893 to 1899</strong>, a <strong>monastic school</strong> operated in the monastery.
                  </p>
                  <p>
                    <strong>New Hopovo</strong>, under the guidance of Archimandrite <strong>Dr. Avgustin (Bošnjaković)</strong>, entered the <strong>20th century</strong> with:
                    <ul>
                      <li>an estate of <strong>1,633 cadastral acres</strong>,</li>
                      <li>a library containing <strong>739 titles</strong> (including fifteen manuscript <em>"srbulje"</em> from the <strong>15th, 16th, and 17th centuries</strong>),</li>
                      <li>an impressive archive, meticulously maintained since <strong>1699</strong>.</li>
                    </ul>
                  </p>
                  <p>
                    In the <strong>monastic treasury</strong>, they preserved items such as:
                    <ul>
                      <li>a <em>liturgical bread box</em> from <strong>1663</strong>,</li>
                      <li>a <em>altar cross</em> from <strong>1654</strong>,</li>
                      <li>a <em>silver darohranilica</em> from <strong>1777</strong>,</li>
                      <li><em>Gospels</em> bound in silver from <strong>1609, 1735, and 1753</strong>,</li>
                      <li>a <em>silver lamp</em> gifted by Metropolitan of Karlovci <strong>Jovan (Đorđević)</strong> in <strong>1771</strong>,</li>
                      <li>a silver lamp with the engraving: <em>"Gift of Baron Andrej of Šjagunj, erstwhile superior of Hopovo, later bishop of Erdnes, 1854."</em></li>
                    </ul>
                  </p>
                </section>

                <img srcSet={`${novoHopovo55} 450w, ${novoHopovo5}`} alt="Novo Hopovo Monastery 5" />

                <section lang="en">
                  <p>
                    In the <strong>17th century</strong>, <em>monks from New Hopovo</em> collected alms throughout <strong>Russia</strong>, and in <strong>1641</strong> received a <em>ukase</em> from Tsar <strong>Mikhail Romanov</strong>, permitting them to return to his lands every seventh or eighth year.
                  </p>
                  <p>
                    The <strong>monastery</strong> suffered significant damage during the <em>Habsburg–Ottoman wars</em>, and in <strong>1688</strong> the <strong>Turkish army</strong> burned it down, despite <strong>three protective firmans</strong> that the forward-thinking authorities had obtained from the Porte.
                  </p>
                  <p>
                    During those troubled years, the <strong>sacred site</strong> was deserted several times as <em>monks fled</em> to avoid danger and to <strong>save precious relics</strong>.
                  </p>
                  <p>
                    Just one year after the destruction, a <strong>long rebuilding process</strong> began, although the monks were again forced to <em>leave the monastery</em> during the <strong>Migration under Patriarch Arsenije III</strong>, and again ahead of the <strong>defeated Ottoman army in 1716</strong>.
                  </p>
                </section>


              </>

            )}

        </div >
      </>
      );
};


export default ManastirNovoHopovo;