/* eslint-disable react/no-unknown-property */
import ravanica1 from "../../../../../assets/images/SumadijaIZapadnaSrbija/PomoravskiOkrug/ManastirRavanica/desktop/manastirRavanica1.jpg";
import ravanica2 from "../../../../../assets/images/SumadijaIZapadnaSrbija/PomoravskiOkrug/ManastirRavanica/desktop/manastirRavanica2.jpg";
import ravanica3 from "../../../../../assets/images/SumadijaIZapadnaSrbija/PomoravskiOkrug/ManastirRavanica/desktop/manastirRavanica3.jpg";
import ravanica4 from "../../../../../assets/images/SumadijaIZapadnaSrbija/PomoravskiOkrug/ManastirRavanica/desktop/manastirRavanica4.jpg";
import ravanica5 from "../../../../../assets/images/SumadijaIZapadnaSrbija/PomoravskiOkrug/ManastirRavanica/desktop/manastirRavanica5.jpg";
import ravanica11 from "../../../../../assets/images/SumadijaIZapadnaSrbija/PomoravskiOkrug/ManastirRavanica/mobile/MmanastirRavanica1.jpg";
import ravanica22 from "../../../../../assets/images/SumadijaIZapadnaSrbija/PomoravskiOkrug/ManastirRavanica/mobile/MmanastirRavanica2.jpg";
import ravanica33 from "../../../../../assets/images/SumadijaIZapadnaSrbija/PomoravskiOkrug/ManastirRavanica/mobile/MmanastirRavanica3.jpg";
import ravanica44 from "../../../../../assets/images/SumadijaIZapadnaSrbija/PomoravskiOkrug/ManastirRavanica/mobile/MmanastirRavanica4.jpg";
import ravanica55 from "../../../../../assets/images/SumadijaIZapadnaSrbija/PomoravskiOkrug/ManastirRavanica/mobile/MmanastirRavanica5.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { pomoravskiOkrugPathRoutes } from "./PomoravskiOkrugPathRoutes";
import { useContextAuth } from "../../../../../Context";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const ManastirRavanica = () => {
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
            ? "Manastir Ravanica – Zadužbina kneza Lazara i kolevka moravske škole | Srbija Wonders"
            : "Ravanica Monastery – Endowment of Prince Lazar and Cradle of Morava Style | Serbia Wonders"}
        </title>

        <meta
          name="description"
          content={
            switchLanguage === 'rs'
              ? "Manastir Ravanica, zadužbina kneza Lazara iz XIV veka, simbol je duhovnosti, otpora i umetnosti. Smešten pod Kučajem, Ravanica je kolevka moravske arhitekture i važno mesto srpskog identiteta."
              : "Ravanica Monastery, the 14th-century legacy of Prince Lazar, stands as a symbol of spirituality, resistance, and artistry. Nestled beneath Mount Kučaj, Ravanica is the birthplace of the Morava architectural style and a vital monument of Serbian identity."}
        />

        <meta
          name="keywords"
          content={
            switchLanguage === 'rs'
              ? "Manastir Ravanica, knez Lazar, moravska škola, Kosovska bitka, srpski manastiri, srednjovekovna Srbija, freske, srpska istorija, kulturna baština"
              : "Ravanica Monastery, Prince Lazar, Morava school, Battle of Kosovo, Serbian monasteries, medieval Serbia, frescoes, Serbian history, cultural heritage"}
        />

        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/sumadija-tekst-modal/sumadija-i-zapadna-srbija/pomoravski-okrug/manatir-ravanica`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/sumadija-tekst-modal/sumadija-i-zapadna-srbija/pomoravski-okrug/manatir-ravanica"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/sumadija-tekst-modal/sumadija-i-zapadna-srbija/pomoravski-okrug/manatir-ravanica"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/sumadija-tekst-modal/sumadija-i-zapadna-srbija/pomoravski-okrug/manatir-ravanica"
        />

      </Helmet>


      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft
          className="arrowLeft"
          onClick={() => navigate(pomoravskiOkrugPathRoutes.home(switchLanguage))}
          style={{ fill: "white" }}
        />
        <header></header>
        <img srcSet={`${ravanica11} 450w, ${ravanica1} `} alt="Manastir Ravanica 1" />

        {switchLanguage === 'rs' ?
          (
            <>

              <h1 style={{ color: "white" }}>Manastir Ravanica</h1>

              <section lang="sr">
                <p>
                  <strong>Manastir Ravanica</strong>, sa crkvom <em>Vaznesenja Gospodnjeg</em>, predstavlja
                  zadužbinu srpskog vladara <strong>kneza Lazara</strong> i podignut je između sedamdesetih
                  i osamdesetih godina <strong>XIV veka</strong>. O podizanju ovog manastira sačuvane su
                  dve katorske povelje, obe u obliku kasnijih prepisanih verzija. Prema
                  takozvanom bolońskom prepisu, ravanička povelja je izdana <strong>1376/77. godine</strong>,
                  dok prema vrdničkom prepisu datira iz <strong>1381. godine</strong>. Ipak, na
                  osnovu žitija svetog Romila, koji je živeo u neposrednoj blizini
                  Ravanice i bio je sahranjen u manastiru nakon svoje smrti <strong>1375. godine</strong>,
                  može se zaključiti da je manastirska imovina već postojala, ali
                  verovatno ne u potpunosti kao završen manastirski kompleks. S obzirom na
                  vreme izgradnje i stalnu pretnju od turskih hordi, Ravanica je građena
                  kao <em>utvrđeni grad</em>. Prvo je počela gradnja <em>pirga</em>, a zatim je formisan
                  odbrambeni pojas, povezan sa kulama. Ovaj manastirski kompleks, koji je
                  obuhvatao crkvu, pirg, moćnu utvrdu sa sedam kula, trpezariju, ćelije i
                  neophodne ekonomske i upravne zgrade, morao je nastajati tokom mnogih
                  godina, kao i svi drugi ugledni manastiri.
                </p>
              </section>

              <img srcSet={`${ravanica22} 450w, ${ravanica2} `} alt="Manastir Ravanica 2" />

              <section lang="sr">
                <p>
                  <strong>Kosovska bitka (1389.)</strong> u kojoj su oba vladara izgubila život,
                  simbolizuje vitežki podvig i hrabar, uspešan napad na cara Murata I. Taj
                  podvig srpskog viteza legendarno ime - <strong>Miloša Obilića</strong> - bio je poznat i
                  u zapadnoj Evropi. Međutim, u tom trenutku izvršen je još jedan podvig,
                  koji je poznat i čuvan samo među Srbima. Tadašnji srpski vladar, knez
                  <strong>Lazar Hrebeljanović</strong>, kasnije uzdignut na carsko dostojanstvo, u
                  istorijskim izvorima je prikazan kao ličnost idealnog vladara, koja je,
                  nakon dvadesetogodišnje krize bezvlašća nakon smrti cara Dušana, morala
                  biti ispunjena duhom harmonije između dva vida autoriteta: države i
                  crkve. U presudnom trenutku, potpuno svestan turske nadmoćnosti, knez
                  svojim postupkom daje primer budućim generacijama. On polaže zakletvu sa
                  Bogom i opredeljuje se za <em>Carstvo nebesko</em>, birajući mučeničku smrt u
                  borbi sa nadmoćnim neprijateljem. Kosovsko tlo postaje zavetno. Oni koji
                  ostaju, sa zakletvom koja se prenosi na naredna pokoljenja, polažu život
                  za <strong>hrišćansku veru</strong>, koja je poistovećena sa nacionalnim identitetom.
                  Kosovsku zemlju su Srbi smatrali <em>svetim tlom</em>, gde nevernici odstupaju
                  pred primerima mučeništva, što je zapisano u književnim delima i
                  sačuvano u narodnoj poeziji i predanjima.
                </p>
              </section>

              <img srcSet={`${ravanica33} 450w, ${ravanica3} `} alt="Manastir Ravanica 3" />

              <section lang="sr">
                <p>
                  U skladu sa svojim stvarnim položajem, knez Lazar ističe svoju
                  samostalnost - samodržavnost, nazivajući sebe <strong>„gospodarom zemlje srpske“</strong>
                  i to <em>„po milosti Božjoj“</em>, te postaje Stefan: <strong>„Stefan knez Lazar“</strong>. On se
                  pojavljuje kao krunisani vladar, neposredni naslednik Nemanjića – deo
                  savremenika ga je tako prihvatao, a potomstvo ga je videlo u toj svetlu
                  kroz istoriju. Nakon pogibije kneza Lazara na Kosovu <strong>28. juna (na Vidovdan) 1389. godine</strong>,
                  i prenosa njegovih moštiju iz crkve Vaznesenja u
                  Prištini u Ravanicu <strong>1392. godine</strong>, gde se i danas nalaze, manastir
                  postaje mesto hodočašća i centar oko kojeg se stvorio kult kneza Lazara,
                  kosovskog mučenika, kao i njegovih saboraca. Ravanica je od posebnog
                  značaja u negovanju prepisivačke delatnosti i razvoju srpske
                  književnosti i pismenosti sve do kraja <strong>XVII veka</strong>. Tu je stvorena
                  tradicija manastira kao kulturnog centra u kojem se negovala pisana
                  književnost, a oko manastira je cvetalo i usmeno stvaralaštvo. Mnoge,
                  ako ne i najpoznatije narodne pesme posvećene Kosovu i kosovskim
                  junacima nastale su upravo uz Ravanicu. Čini se da je Ravanica već tada
                  bila i neka vrsta monaške škole, ali se tek od <strong>XVII veka</strong> poznaju imena
                  pojedinih učitelja, daskala, koji su delovali tamo.
                </p>
              </section>

              <img srcSet={`${ravanica44} 450w, ${ravanica4} `} alt="Manastir Ravanica 4" />

              <section lang="sr">
                <p>
                  Zbog svoje neumorne aktivnosti u očuvanju narodnog duha i otpora,
                  ravaničko bratstvo je često dolazilo u sukobe sa turskim vlastima.
                  Manastir Ravanica je rušen i paljen <strong>1396., 1398.</strong> i <strong>1436. godine</strong>. Nakon
                  konačnog sloma srpske države, Turci su potpuno razrušili Ravanicu i
                  odneli svu njenu imovinu, uključujući srebro i zlato. Tokom Koćine
                  krajine <strong>1686/7. godine</strong>, crkva je pretrpela ozbiljna oštećenja, uništene
                  su manastirske zgrade, konaci i utvrđenja, a veći broj monaha je
                  pogubljen. Preživeli monasi su morali da pobegnu iz manastira i Srbije
                  <strong>1689-1690. godine</strong>, pridružujući se velikoj seobi Srba pod patrijarhom
                  <strong>Arsenijem III Čarnojevićem</strong>. Pešice su se povukli sve do Senta, u blizini
                  Budimpešte. U toj bijegoj su nosili ne samo Lazareve mošti, već i
                  neophodne liturgijske predmete, deo rukopisnih knjiga i dragoceni
                  <em>Jefimijin pokrov knezu Lazaru</em>.
                </p>
              </section>

              <img srcSet={`${ravanica55} 450w, ${ravanica5} `} alt="Manastir Ravanica 5" />

              <section lang="sr">
                <p>
                  Ravanička crkva, prema svojim arhitektonskim i umetničkim
                  karakteristikama, označava početak razvoja <strong>moravske škole</strong>. Crkva je
                  jedinstveno arhitektonsko rešenje koje spaja svetogorsku tradiciju
                  trolisne osnove i model krsta sa pet kupola, koji je postao popularan u
                  vreme kralja <strong>Milutina</strong>. Trolisna osnova postavila je temelj za dalji
                  razvoj prostorne koncepcije crkvenih objekata. Zidana je kombinacijom
                  kamena i opeke, sa dekoracijama od keramoplastike i bogatom reljefnom
                  plastikom, što je dodatno obogatilo njen izgled.
                </p>
              </section>


            </>
          )
          :
          (
            <>

              <h1 style={{ color: "white" }}>Ravanica Monastery</h1>

              <section lang="en"> <p> <strong>Ravanica Monastery</strong>, with the church of <em>The Ascension of the Lord</em>, represents the endowment of the Serbian ruler <strong>Prince Lazar</strong> and was built between the seventies and eighties of the <strong>14th century</strong>. Two charters concerning the construction of this monastery have been preserved, both in the form of later copied versions. According to the so-called Bologna transcript, the Ravanica charter was issued in <strong>1376/77</strong>, while according to the Vrdnik transcript it dates from <strong>1381</strong>. However, based on the life of Saint Romil, who lived near Ravanica and was buried in the monastery after his death in <strong>1375</strong>, it can be concluded that the monastic property already existed, but probably not yet as a completed monastic complex. Considering the time of construction and the constant threat from Turkish hordes, Ravanica was built as a <em>fortified town</em>. Construction began with the <em>pyrgos</em> (tower), followed by the formation of a defensive belt connected with towers. This monastic complex, which included the church, pyrgos, a powerful fortress with seven towers, a refectory, cells, and necessary economic and administrative buildings, had to develop over many years, as did all other prestigious monasteries. </p> </section>
              <img srcSet={`${ravanica22} 450w, ${ravanica2} `} alt="Ravanica Monastery 2" />

              <section lang="en"> <p> The <strong>Battle of Kosovo (1389)</strong>, in which both rulers lost their lives, symbolizes a knightly feat and a brave, successful attack on Sultan Murad I. This feat of the Serbian knight, the legendary figure named <strong>Miloš Obilić</strong>, was known also in Western Europe. However, at that moment, another feat was accomplished, known and preserved only among Serbs. The then Serbian ruler, Prince <strong>Lazar Hrebeljanović</strong>, later elevated to imperial dignity, is portrayed in historical sources as an ideal ruler, who, after a twenty-year crisis of power vacuum following the death of Emperor Dušan, had to be filled with the spirit of harmony between two types of authority: the state and the church. At the crucial moment, fully aware of the Turkish superiority, the prince sets an example for future generations with his actions. He swears an oath to God and commits himself to the <em>Heavenly Kingdom</em>, choosing a martyr's death in battle against the superior enemy. Kosovo soil becomes a covenant. Those who remain, with an oath passed down to subsequent generations, lay down their lives for the <strong>Christian faith</strong>, which is equated with national identity. The Kosovo land was regarded by Serbs as <em>holy ground</em>, where infidels retreat before examples of martyrdom, which is recorded in literary works and preserved in folk poetry and tradition. </p> </section>
              <img srcSet={`${ravanica33} 450w, ${ravanica3} `} alt="Ravanica Monastery 3" />

              <section lang="en"> <p> According to his real position, Prince Lazar emphasized his independence — sovereignty, calling himself <strong>“Lord of the Serbian land”</strong> and that <em>“by the grace of God”</em>, thus becoming Stefan: <strong>“Stefan Prince Lazar”</strong>. He appears as a crowned ruler, a direct successor of the Nemanjić dynasty – some contemporaries accepted him as such, and his descendants viewed him in that light throughout history. After the death of Prince Lazar on Kosovo on <strong>June 28 (Vidovdan) 1389</strong>, and the transfer of his relics from the Church of the Ascension in Priština to Ravanica in <strong>1392</strong>, where they still rest today, the monastery became a pilgrimage site and the center around which a cult of Prince Lazar, the Kosovo martyr, as well as his comrades, developed. Ravanica holds special importance in fostering transcription activities and the development of Serbian literature and literacy until the end of the <strong>17th century</strong>. There, the tradition of the monastery as a cultural center nurturing written literature was established, while oral creativity also flourished around the monastery. Many, if not the most famous, folk songs dedicated to Kosovo and Kosovo heroes originated precisely near Ravanica. It appears that Ravanica was already a kind of monastic school, but only from the <strong>17th century</strong> do we know the names of individual teachers, instructors, who worked there. </p> </section>
              <img srcSet={`${ravanica44} 450w, ${ravanica4} `} alt="Ravanica Monastery 4" />

              <section lang="en"> <p> Due to its tireless activity in preserving the national spirit and resistance, the Ravanica brotherhood often came into conflict with the Turkish authorities. The Ravanica Monastery was destroyed and burned in <strong>1396, 1398</strong> and <strong>1436</strong>. After the final collapse of the Serbian state, the Turks completely ruined Ravanica and took all its property, including silver and gold. During Kočina Krajina in <strong>1686/7</strong>, the church suffered serious damage, the monastic buildings, quarters, and fortifications were destroyed, and many monks were executed. The surviving monks had to flee the monastery and Serbia between <strong>1689-1690</strong>, joining the great Serbian migration under Patriarch <strong>Arsenije III Čarnojević</strong>. They retreated on foot all the way to Senta, near Budapest. During this escape, they carried not only Lazar’s relics but also necessary liturgical items, some manuscript books, and the precious <em>Jefimija’s veil of Prince Lazar</em>. </p> </section>
              <img srcSet={`${ravanica55} 450w, ${ravanica5} `} alt="Ravanica Monastery 5" />

              <section lang="en"> <p> Architecturally and artistically, the Ravanica church marks the beginning of the development of the <strong>Morava School</strong>. The church is a unique architectural solution that combines the Athonite tradition of a trefoil base and a cross-in-square model with five domes, which became popular during the reign of King <strong>Milutin</strong>. The trefoil base laid the foundation for further development of the spatial concept of church buildings. It was built using a combination of stone and brick, with decorations made of ceramic plastic and rich relief sculpture, which further enriched its appearance. </p> </section>

            </>
          )}



      </div>
    </>
  );
};


export default ManastirRavanica;