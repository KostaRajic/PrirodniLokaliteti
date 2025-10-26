/* eslint-disable react/no-unknown-property */
/* eslint-disable no-useless-escape */
import josanica1 from "../../../../../assets/images/SumadijaIZapadnaSrbija/PomoravskiOkrug/ManastirJosanica/desktop/manastirJosanica1.jpg";
import josanica2 from "../../../../../assets/images/SumadijaIZapadnaSrbija/PomoravskiOkrug/ManastirJosanica/desktop/manastirJosanica2.jpg";
import josanica3 from "../../../../../assets/images/SumadijaIZapadnaSrbija/PomoravskiOkrug/ManastirJosanica/desktop/manastirJosanica3.jpg";
import josanica4 from "../../../../../assets/images/SumadijaIZapadnaSrbija/PomoravskiOkrug/ManastirJosanica/desktop/manastirJosanica4.jpg";
import josanica5 from "../../../../../assets/images/SumadijaIZapadnaSrbija/PomoravskiOkrug/ManastirJosanica/desktop/manastirJosanica5.jpg";
import josanica11 from "../../../../../assets/images/SumadijaIZapadnaSrbija/PomoravskiOkrug/ManastirJosanica/mobile/MmanastirJosanica1.jpg";
import josanica22 from "../../../../../assets/images/SumadijaIZapadnaSrbija/PomoravskiOkrug/ManastirJosanica/mobile/MmanastirJosanica2.jpg";
import josanica33 from "../../../../../assets/images/SumadijaIZapadnaSrbija/PomoravskiOkrug/ManastirJosanica/mobile/MmanastirJosanica3.jpg";
import josanica44 from "../../../../../assets/images/SumadijaIZapadnaSrbija/PomoravskiOkrug/ManastirJosanica/mobile/MmanastirJosanica4.jpg";
import josanica55 from "../../../../../assets/images/SumadijaIZapadnaSrbija/PomoravskiOkrug/ManastirJosanica/mobile/MmanastirJosanica5.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { pomoravskiOkrugPathRoutes } from "./PomoravskiOkrugPathRoutes";
import { useContextAuth } from "../../../../../Context";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const ManastirJosanica = () => {
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
            ? "Manastir Jošanica – Svetinja u podnožju Crnog Vrha kod Jagodine | Serbia Wonders"
            : "Jošanica Monastery – A Sacred Site Below Mount Crni Vrh near Jagodina | Serbia Wonders"}
        </title>

        <meta
          name="description"
          content={
            switchLanguage === 'rs'
              ? "Manastir Jošanica kod Jagodine potiče iz doba kneza Lazara i predstavlja značajno versko i istorijsko mesto. Sačuvan je autentičan živopis iz 15. veka, a hram posvećen Svetom Nikoli odiše moravskim stilom i monaškom tišinom klisure Crnog Vrha."
              : "Jošanica Monastery near Jagodina dates back to the era of Prince Lazar and is an important religious and historical site. Preserved frescoes from the 15th century and a church dedicated to St. Nicholas reflect the Morava architectural style and spiritual seclusion of Crni Vrh gorge."}
        />

        <meta
          name="keywords"
          content={
            switchLanguage === 'rs'
              ? "Manastir Jošanica, Crni Vrh, Jagodina, srednjovekovni manastiri, freske iz 15. veka, moravska arhitektura, Sveti Nikola, Josif Sinait, istorija Srbije"
              : "Jošanica Monastery, Crni Vrh, Jagodina, medieval monasteries, 15th-century frescoes, Morava architecture, St. Nicholas, Josif Sinait, Serbian history"}
        />

        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/sumadija-tekst-modal/sumadija-i-zapadna-srbija/pomoravski-okrug/manastir-josanica`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/sumadija-tekst-modal/sumadija-i-zapadna-srbija/pomoravski-okrug/manastir-josanica"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/sumadija-tekst-modal/sumadija-i-zapadna-srbija/pomoravski-okrug/manastir-josanica"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/sumadija-tekst-modal/sumadija-i-zapadna-srbija/pomoravski-okrug/manastir-josanica"
        />

      </Helmet>


      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft className="arrowLeft" onClick={() => navigate(pomoravskiOkrugPathRoutes.home(switchLanguage))} style={{ fill: 'white' }} />
        <header></header>
        <img srcSet={`${josanica11} 450w, ${josanica1} `} alt="Manastir Jošanica 1" />

        {switchLanguage === 'rs' ?
          (
            <>

              <h1 style={{ color: "white" }}>Manastir Jošanica</h1>

              <section lang="sr">
                <p>
                  <strong>Manastir Jošanica</strong>, koji se nalazi nedaleko od <strong>Jagodine</strong>, u podnožju <em>Crnog Vrha</em>, podignut je u vreme vladavine <strong>kneza Lazara</strong>. Prema legendi, manastir je povezan sa prepodobnim <em>Josom Sinaitom</em>, monahom koji se podvizavao u pećini ispod brda Šarenika, a kojeg je knez Lazar slučajno povredio u lovu. Iako legenda verovatno ima istorijskog temelja, ostaci ktitorske kompozicije ukazuju da je manastir sagradio lokalni velmoža koji se pred kraj života zamonašio. <strong>Turski popisi</strong> beleže manastir kao manastir Svetog Nikole 1521. i 1522. godine, a sredinom 16. veka u njemu su boravila dva monaha. Manastir je stradao krajem 17. veka, ali je obnovljen 1786. godine zahvaljujući jeromonahu Aksentiju Teodoroviću, prezviteru Jovanu Popoviću i knezovima Dobrosavu i Bošku. Tokom austro-turskog rata, manastir je spaljen od strane Turaka, ali je nakon <em>Svifstovskog mira</em> 1791. godine započela njegova obnova. Manastir je ponovo stradao tokom <strong>Prvog srpskog ustanka</strong>, a tokom <strong>Drugog srpskog ustanka 1815. godine</strong>, manastir je bio mesto susreta kneza Miloša i vladike Melentija sa velikim vezirkom Marašli Ali-pašom, kako bi se dogovorili o miru. Kao zahvalnost za doprinos u ratovima za slobodu, knez Miloš je 1832. godine poklonio manastiru tri zvona. Godine 1851. manastir je obnovljen, a priproda je dograđena, dok su manastirski konaci obnovljeni 1885. godine. U toku <em>Srpsko-Turskog rata 1876/77. godine</em>, u konacima je bila bolnica.
                </p>
              </section>

              <img srcSet={`${josanica22} 450w, ${josanica2} `} alt="Manastir Jošanica 2" />

              <section lang="sr">
                <p>
                  Manastirska crkva izgrađena je u duhu <strong>moravskog graditeljstva</strong>. Njena osnova je jednobrodna i produžena, sa glavnim kupolama. Mala kupola se nalazi iznad pronaosa, dok je crkva zasvedena poluobličastim svodom. Zbog lošeg stanja, priprota je srušena 1946. godine. Manastirski konaci podignuti su u 18. i 19. veku. Sačuvani zapis ukazuje da je crkva manastira Jošanica bila „izmolovana iznutra kao <em>Kalenić i Ljubostinja</em>“. Ovaj živopis je prekriven malterom u 19. veku. Fragmenti starog freskoslikarstva sa početka 15. veka očuvani su u oltarskoj apsidi i naosu crkve. U oltarskom delu prikazane su kompozicije: <em>Poklonjenje Jagnjetu</em> i <em>Bogorodica šira od neba</em>. U naosu je prikazan ciklus <strong>Hristovih muka</strong>. Posebno se izdvaja scena <em>Molitve u Getsimanskom vrtu</em>, naslikana na južnom zidu. Konservacija ovog slikarstva počela je 1969. godine. Ikonostas je naslikao akademski slikar <strong>Ilija Dimitrijević</strong> 1864. godine. Sa južne strane Jošaničkog hrama nalazi se grobnica porodice kneza <strong>Miloja Teodorovića</strong>, vojvode levačkog iz vremena Karađorđa.
                </p>
              </section>

              <img srcSet={`${josanica33} 450w, ${josanica3} `} alt="Manastir Jošanica 3" />

              <section lang="sr">
                <p>
                  Manastir Jošanica, smešten u klisuri istoimene rečice, nalazi se na priobrežju planine <strong>Crni Vrh</strong>, svega desetak kilometara zapadno od Jagodine. Najstariji izvori o nastanku manastira nisu sačuvani, ali narodna tradicija kao ktitora Jošanice vidi kneza Lazara. Prema jednoj legendi, u jošaničkoj crkvi su se venčali <strong>knez Lazar i kneginja Milica</strong>, dok prema drugoj, knez je sagradio crkvu radi iskupljenja greha jer je u lovu nenamerno pogodio puštinjaka Jošu – Jovana, koji se podvizavao u jošaničkoj klisuri. Istraživanja manastirske prošlosti, a posebno arhitekture i freskoslikarstva u crkvi, pokazuju da je jošanicki hram podigla jedna vlastelinska porodica, čiji su portreti delimično očuvani na južnom i zapadnom zidu priprote. Monaško groblje oko hrama, starije od današnje crkve, predstavlja dokaz da se na tom mestu nalazilo starije sakralno zdanje.
                </p>
              </section>

              <img srcSet={`${josanica44} 450w, ${josanica4} `} alt="Manastir Jošanica kod Crnog Vrha" />

              <section lang="sr">
                <p>
                  Činjenica da je hram bio <em>asketerion</em> – kolonija monaha anahoreta, zatim, ostaci vladarskih portreta na severnom zidu priprote, stilističke i ikonografske osobine živopisa, kao i mala ostava srebrnjaka pronađena u blizini manastira, ukazuju da je nastanak sadašnjeg hrama i njegovog zidnog slikarstva datiran između <strong>1430. i 1435. godine</strong>, dakle u prve godine vladavine moćnog i učenog srpskog despota <strong>Đurđa Brankovića</strong>. Pošto je crkva prvobitno bila posvećena <strong>Svetom Dimitriju</strong>, a u ktitorskoj kompoziciji ga grli sveti Dimitrije, verovatno je da je ktitor bio svetiteljev imenjak. U tom slučaju, kao ktitor Jošanice mogao bi se prepoznati <strong>Dimitrije Jakšić</strong>, član poznate plemićke porodice koja je, prema izvorima, sredinom XV veka zaista upravljala Jagodinom, da bi pred turskim napadima kasnije pobegla u Ugarsku.
                </p>
              </section>

              <img srcSet={`${josanica55} 450w, ${josanica5} `} alt="Manastir Jošanica kod Jagodine" />

              <section lang="sr">
                <p>
                  Manastir danas čine dva konaka i ekonomske zgrade, dok je jezgro manastira činjeno od crkve posvećene <strong>Svetom Nikoli</strong> i drvene zvonare. Crkvu okružuje starija nekropola iz <strong>XIII veka</strong>, što ukazuje na značajnu starost ovog lokaliteta. Sama crkva je pravougaona jednobrodna građevina sa polukružnom apsidom na istoku. Zidovi su napravljeni od lomljenog kamena, dok su svodovi i kupole uglavnom od opeka. Fasade su pažljivo obrađene klesanim i fugovanim kvaderima sige. U prostornoj strukturi, crkvu čine istovremeno sagrađeni naos i priprota, a nad njima su postavljene po jedne kupole. Zbog ovog rešenja sa dve kupole, jošanicka crkva spada u retki tip srednjovekovne arhitekture. Severna i južna fasada hrama ukrašene su trostrukom slepom arkadom, simbolom stanova pravednika, a prema ostatcima fresaka na južnoj fasadi, zna se da je crkva bila dodatno ukrašena slikama koje su imitirale skupo kamenorezačko i zidarsko umetničko umeće, sa ciljem da označe hram kao <em>Nebo na Zemlji</em>.
                </p>
              </section>


            </>
          )
          :
          (
            <>

              <h1 style={{ color: "white" }}>Jošanica Monastery</h1>

              <section lang="en"> <p> <strong>Jošanica Monastery</strong>, located near <strong>Jagodina</strong>, at the foot of <em>Crni Vrh</em> (Black Peak), was built during the reign of <strong>Prince Lazar</strong>. According to legend, the monastery is connected with the venerable <em>Joša Sinaita</em>, a monk who lived in a cave beneath the Šarenik hill, whom Prince Lazar accidentally wounded during a hunt. Although the legend likely has a historical basis, the remains of the founder’s composition indicate that the monastery was built by a local nobleman who became a monk late in life. <strong>Ottoman records</strong> list the monastery as the Monastery of Saint Nicholas in 1521 and 1522, and by the mid-16th century, two monks resided there. The monastery was damaged at the end of the 17th century but was rebuilt in 1786 thanks to the efforts of Hieromonk Aksentije Teodorović, Presbyter Jovan Popović, and the princes Dobrosav and Boško. During the Austro-Turkish war, the monastery was burned by the Turks, but after the <em>Peace of Sistova</em> in 1791, its restoration began. The monastery suffered damage again during the <strong>First Serbian Uprising</strong>, and during the <strong>Second Serbian Uprising in 1815</strong>, it was the site of a meeting between Prince Miloš and Bishop Melentije with the grand vizier Marašli Ali Pasha to negotiate peace. As a token of gratitude for their contributions to the wars for freedom, Prince Miloš gifted the monastery three bells in 1832. In 1851, the monastery was rebuilt and the narthex was added, while the monastery quarters were restored in 1885. During the <em>Serbo-Turkish War of 1876/77</em>, the quarters served as a hospital. </p> </section>
              <img srcSet={`${josanica22} 450w, ${josanica2} `} alt="Jošanica Monastery 2" />

              <section lang="en"> <p> The monastery church was built in the spirit of <strong>Morava architectural style</strong>. Its plan is single-nave and elongated, with main domes. A small dome is located above the narthex, while the church is vaulted with a semi-barrel vault. Due to poor condition, the narthex was demolished in 1946. The monastery quarters were built in the 18th and 19th centuries. A preserved record notes that the Jošanica church was “painted inside like <em>Kalenić and Ljubostinja</em>.” This fresco was covered with plaster in the 19th century. Fragments of old fresco painting from the early 15th century are preserved in the altar apse and the nave. In the altar part, compositions of <em>The Adoration of the Lamb</em> and <em>The Virgin Wider than the Heavens</em> are depicted. In the nave, the cycle of <strong>Christ’s Passion</strong> is shown. A special highlight is the scene of the <em>Prayer in the Garden of Gethsemane</em>, painted on the southern wall. Conservation of this painting began in 1969. The iconostasis was painted by academic painter <strong>Ilija Dimitrijević</strong> in 1864. On the southern side of the Jošanica church lies the tomb of the family of Prince <strong>Miloje Teodorović</strong>, a vojvoda from the time of Karađorđe. </p> </section>
              <img srcSet={`${josanica33} 450w, ${josanica3} `} alt="Jošanica Monastery 3" />

              <section lang="en"> <p> Jošanica Monastery, located in the gorge of the eponymous creek, sits on the slopes of <strong>Crni Vrh</strong> mountain, just about ten kilometers west of Jagodina. The oldest sources on the monastery’s founding have not been preserved, but folk tradition names Prince Lazar as the monastery’s founder. According to one legend, Prince Lazar and Princess Milica were married in the Jošanica church, while another legend says the prince built the church as atonement for accidentally wounding the hermit Joša – Jovan, who lived as a recluse in the Jošanica gorge. Research into the monastery’s past, especially its architecture and frescoes, indicates that the Jošanica temple was built by a noble family, whose portraits are partially preserved on the southern and western walls of the narthex. The monastic cemetery around the church, older than the current church, provides evidence that an older sacred building stood on the site. </p> </section>
              <img srcSet={`${josanica44} 450w, ${josanica4} `} alt="Jošanica Monastery near Crni Vrh" />

              <section lang="en"> <p> The fact that the church was an <em>ascetery</em> – a colony of anchorite monks – along with the remains of royal portraits on the northern wall of the narthex, stylistic and iconographic features of the frescoes, and a small hoard of silver coins found near the monastery, suggest that the current church and its wall paintings date from between <strong>1430 and 1435</strong>, i.e., the early years of the reign of the powerful and learned Serbian despot <strong>Đurađ Branković</strong>. Since the church was originally dedicated to <strong>Saint Demetrius</strong>, and the founder’s composition shows Saint Demetrius embracing him, it is probable that the founder was named after the saint. In that case, the founder of Jošanica could be identified as <strong>Dimitrije Jakšić</strong>, a member of a notable noble family that, according to sources, governed Jagodina in the mid-15th century before fleeing to Hungary ahead of Turkish invasions. </p> </section>
              <img srcSet={`${josanica55} 450w, ${josanica5} `} alt="Jošanica Monastery near Jagodina" />

              <section lang="en"> <p> Today, the monastery consists of two quarters and economic buildings, while the core of the monastery includes the church dedicated to <strong>Saint Nicholas</strong> and a wooden bell tower. The church is surrounded by an older necropolis dating back to the <strong>13th century</strong>, indicating the considerable antiquity of the site. The church itself is a rectangular single-nave building with a semi-circular apse to the east. The walls are made of rubble stone, while the vaults and domes are mainly constructed from brick. The facades are carefully finished with chiseled and jointed ashlar blocks. In terms of spatial structure, the church includes a simultaneously built nave and narthex, each topped with a dome. Because of this two-dome design, the Jošanica church belongs to a rare type of medieval architecture. The northern and southern facades of the church are decorated with a triple blind arcade, symbolizing the dwellings of the righteous. Based on the remains of frescoes on the southern facade, it is known that the church was further decorated with paintings imitating expensive stone carving and masonry artistic craftsmanship, aiming to represent the church as <em>Heaven on Earth</em>. </p> </section>
            </>
          )}


      </div>

    </>
  );
};


export default ManastirJosanica;