/* eslint-disable react/no-unknown-property */
import sopocani2 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RaskiOkrug/ManastirSopocani/desktop/manastirSopocani2.jpg";
import sopocani3 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RaskiOkrug/ManastirSopocani/desktop/manastirSopocani3.jpg";
import sopocani4 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RaskiOkrug/ManastirSopocani/desktop/manastirSopocani4.jpg";
import sopocani5 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RaskiOkrug/ManastirSopocani/desktop/manastirSopocani5.jpg";
import sopocani6 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RaskiOkrug/ManastirSopocani/desktop/manastirSopocani6.jpg";
import sopocani22 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RaskiOkrug/ManastirSopocani/mobile/MmanastirSopocani2.jpg";
import sopocani33 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RaskiOkrug/ManastirSopocani/mobile/MmanastirSopocani3.jpg";
import sopocani44 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RaskiOkrug/ManastirSopocani/mobile/MmanastirSopocani4.jpg";
import sopocani55 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RaskiOkrug/ManastirSopocani/mobile/MmanastirSopocani5.jpg";
import sopocani66 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RaskiOkrug/ManastirSopocani/mobile/MmanastirSopocani6.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { raskiOkrugPathRoutes } from "./RaskiOkrugPathRoutes";
import { useContextAuth } from "../../../../../Context";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const ManastirSopocani = () => {
  const navigate = useNavigate();
  const { switchLanguage } = useContextAuth();
  const { lang } = useParams;

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
            ? "Manastir Sopoćani – Dragulj raške umetnosti | Srbija Wonders"
            : "Sopoćani Monastery – Gem of the Raška Art Style | Serbia Wonders"}
        </title>

        <meta
          name="description"
          content={
            switchLanguage === 'rs'
              ? "Manastir Sopoćani, zadužbina kralja Uroša I iz 13. veka, predstavlja vrhunac raške arhitekture i srpske srednjovekovne umetnosti. Nalazi se u blizini Novog Pazara, u dolini reke Raške."
              : "The Sopoćani Monastery, an endowment of King Uroš I from the 13th century, represents the pinnacle of Raška-style architecture and Serbian medieval art. It is located near Novi Pazar, in the Raška river valley."}
        />

        <meta
          name="keywords"
          content={
            switchLanguage === 'rs'
              ? "Manastir Sopoćani, Uroš I, Raška škola, srednjovekovna umetnost, freske Sopoćani, srpska istorija, kulturno nasleđe, Novi Pazar, manastiri Srbije"
              : "Sopoćani Monastery, Uroš I, Raška style, medieval Serbian art, Sopocani frescoes, Serbian history, cultural heritage, Novi Pazar, Serbian monasteries"}
        />

        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/sumadija-tekst-modal/sumadija-i-zapadna-srbija/raski-okrug/manastir-djurdjevi-stupovi`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/sumadija-tekst-modal/sumadija-i-zapadna-srbija/raski-okrug/manastir-djurdjevi-stupovi"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/sumadija-tekst-modal/sumadija-i-zapadna-srbija/raski-okrug/manastir-djurdjevi-stupovi"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/sumadija-tekst-modal/sumadija-i-zapadna-srbija/raski-okrug/manastir-djurdjevi-stupovi"
        />
      </Helmet>


      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft className="arrowLeft" onClick={() => navigate(raskiOkrugPathRoutes.home(switchLanguage))} />
        <header></header>
        <img srcSet={`${sopocani22} 450w, ${sopocani2} `} alt="Manastir Sopoćani 1" />

        {switchLanguage === 'rs' ?
          (
            <>

              <h2 style={{ color: "white" }}>Manastir Sopoćani</h2>

              <section lang="sr">
                <p>
                  Manastir Sopoćani se nalazi blizu Novog Pazara, oko 16 km zapadno uz tok
                  reke Raške, po kojoj se srednjovekovna srpska država nazivala <strong>Raškom</strong>.
                  Među visokim i divljim brdima, sa strašnim kamenim liticama, u blizini
                  svoje prestonice Rasa, <em>kralj Uroš I (1243-1276)</em> podigao je hram Svetoj
                  Trojici, nad samim izvorom reke Raške. Naziv Sopoćani dolazi od
                  staroslovenske reči <strong>„sopot“</strong>, što znači <em>izvor</em>. Manastir je verovatno
                  izgrađen u sedmoj deceniji XIII veka, dok je na arhiepiskopskoj stolici
                  bio brat kralja Uroša, arhiepiskop Sava II, i predstavlja vrhunac
                  duhovnog i kulturnog stvaralaštva tog vremena. Planiran kao kraljeva
                  grobna crkva, manastir je već tokom gradnje dobio oblik i kao porodična
                  i kao grobnica za kraljeve najodanije ljude.
                </p>
              </section>


              <img srcSet={`${sopocani33} 450w, ${sopocani3} `} alt="Manastir Sopoćani 2" />

              <h3
                style={{
                  textAlign: "center",
                  color: "rgb(19 17 35)",
                  fontSize: "35px",
                  marginTop: "40px",
                  fontWeight: "500",
                }}
              >
                Kralj Uroš 1
              </h3>

              <section lang="sr">
                <p>
                  Kralj Uroš I, sin Stefana Prvovenčanog i unuk Nemanji, bio je <strong>vešt i
                    sposoban vladar</strong>.
                  <br />
                  <br /> Mudrom politikom učvrstio je granice svoje zemlje, sukobljavajući
                  se sa susedima ili sklapajući saveze sa njima. Ojačao je moć vladara,
                  razvijao crkvenu organizaciju i učvrstio kult <strong>Nemanji i Save</strong>, osnivače
                  dinastije i samostalne crkve. Tokom njegove vladavine, dolaskom nemačkih
                  rudara <em>"Sasa"</em> u Srbiju, otvoreni su rudnici srebra, bakra i olova, što
                  je unapredilo proizvodnju metala. To je povećalo trgovinski promet sa
                  Italijom putem primorskih gradova i ekonomsku snagu države. Takve
                  okolnosti stvorile su povoljne uslove za razvoj umetnosti.
                  <br />
                  <br />
                  Po želji Uroša, hilandarski jeromonah Domentijan napisao je žitija
                  Svetog Simeona i Svetog Save, dela koja pripadaju <strong>najvećim ostvarenjima
                    srpske srednjovekovne književnosti</strong>. Svetog kralja u plemenitim
                  nastojanjima pratili su ljudi oko njega: Sveti arhiepiskop Arsenije
                  podigao je crkvu Svetih Apostola u Peći i ukrasio je izuzetnim freskama,
                  kraljev rođak Stefan Vukanović sagradio je lepu crkvu u manastiru Morača
                  i ukrasio je još lepšim zidnim freskama, a njegova žena, Sveta kraljica
                  Jelena, započela je crkvu Blagoveštenja u manastiru Gradac, građevinu
                  skladnih proporcija koja spaja raške i gotičke oblike.
                </p>
              </section>


              <img srcSet={`${sopocani44} 450w, ${sopocani4} `} alt="Manastir Sopoćani 3" />

              <section lang="sr">
                <p>
                  Hram manastira Sopoćani posvećen je <strong>Svetoj Trojici</strong> i izgrađen je u duhu
                  ranije srpske arhitekture – svojom osnovom i prostorom gotovo doslovno
                  ponavlja Žiču, ali je nadmašuje veličinom i visinom. Sopoćanska crkva,
                  zidana pravilnim slaganjima kvadara od sige, ima izgled trobrodne
                  romaničke bazilike, sa masivnom kupolom iznad srednjeg dela naosa i
                  visokim zvonikom na zapadnoj strani. Građevina je stroge forme,
                  upečatljivih kontura i prostrane, dobro osvetljene unutrašnjosti.
                  Jednostavnost i skladnost u oblikovanju arhitektonskih masa,
                  karakteristična za spomenike raške škole XIII veka, sa naglašenim
                  izrazom horizontalnog mira u prostoru, dosledno je sprovedena u
                  konstrukciji celog zdanja. Neobičan sklop unutrašnjeg razuđenog prostora
                  sopoćanske arhitekture smelo i vešto je zasveden pod tri krova, od kojih
                  je srednji znatno uzvišeniji, jer pokriva glavni brod crkve. Visoka
                  kupola nalazi se na uskom, kockastom postolju.
                </p>
              </section>


              <img srcSet={`${sopocani55} 450w, ${sopocani5} `} alt="Manastir Sopoćani 4" />

              <section lang="sr">
                <p>
                  U skladu sa jednostavnim linijama prvobitno omalterisanih fasada, koje
                  su naglašavale monumentalnost građevine, odabrani su suptilni ukrasi
                  geometrijskog karaktera: dvostruke slepe arkade u podkupolnim vencima,
                  mermerne bifore na prozorima i četvorostruki portali od belog, finog i
                  poliranog mermera. Isto ti majstori izveli su i sve prvobitne
                  kamenoresačke radove u crkvi, o čemu danas svedoče sarkofazi, posuda za
                  osvećenu vodu (agiazma) i ostatci ikonosatne pregrade.
                  <br />
                  <br /> Crkva je jednobrodna, sa prostranim naosom i oltarom sa velikom
                  polukružnom apsidom. Dva prostora sa strane oltara imala su dvostruku
                  namenu: služili su kao protazis i đakoniikon, ali i kao odvojeni
                  paraklisi posvećeni Presvetoj Bogorodici i, verovatno, Svetom Savi. Levo
                  i desno od prostora ispod kupole nalaze se dve pravougaone pevnica, dok
                  je u zapadnom delu crkve prostrana priprata, iz koje se ulazi u
                  paraklise Svetog Stefana Prvomučitelja (na severnoj strani) i Svetog
                  Simeona Mirotocivog (Svetog Stefana Nemanjića) na južnoj strani.
                </p>
              </section>


              <img srcSet={`${sopocani66} 450w, ${sopocani6} `} alt="Manastir Sopoćani 5" />

              <section lang="sr">
                <p>
                  Drugi veliki ktitor manastira Sopoćani bio je <strong>Stefan Dušan</strong>, dok je još
                  bio kralj (1331-1346). U periodu oko 1340. godine, verovatno sa
                  tadašnjim arhiepiskopom Joanikijem II (kasnijim prvim srpskim
                  patrijarhom), sagradio je na zapadnoj strani crkve otvorenu pripratu, sa
                  visokim zvonikom ispred nje. Pre nego što je postao car 1346. godine,
                  ova priprata je ukrašena freskama koje su nosile nova shvatanja. Ostatak
                  izbledelih fresaka na tom delu sačuvao je portrete kralja Dušana,
                  njegove žene kraljice Jelene i njihovog sina, mladog kralja Uroša.{" "}
                  <br />
                  <br /> Sopoćanski hram je već krajem XVII veka bio uništen od strane
                  Turaka. Više od dva i po veka bio je napušten, a njegove srušene zidove
                  prekrio je gusti korov i drveće. Velike površine fresaka sa svodova i
                  kupole bile su potpuno uništene. Decenijama su bile izložene atmosferkim
                  uslovima, rastinju i drugim neprilikama, ali su sopoćanske freske
                  opstale zahvaljujući <em>izuzetnoj kvaliteti izrade</em>. Ipak, zlatni listići
                  koji su ih ukrašavali s vremenom su potpuno otpali. Ostali su samo crni
                  tragovi lepljivog materijala kojim je zlatni sloj bio prilepljen na
                  obojenu fresko podlogu.
                  <br />
                  <br /> Arhitektura Sopoćana je obnovljena od 1927. do 1929. godine. Tada
                  su ponovo zidani porušeni zidovi, svod i kupola, a crkva je pokrivena
                  crijepom. Obnovljeni hram je značajno stradao tokom Drugog svetskog
                  rata. Konzervatorsko-restauratorski radovi, koji su započeti 1948.
                  godine i trajali sve do danas, sa povremenim kraćim i dužim pauzama,
                  doprineli su tome da se arhitektura Sopoćana konsoliduje i osigura za
                  njihovo trajno održavanje, zaštitu i upotrebu.
                </p>
              </section>

            </>
          )
          :
          (
            <>

              <h2 style={{ color: "white" }}>Sopoćani Monastery</h2>

              <section lang="en">
                <p>
                  The Sopoćani Monastery is located near Novi Pazar, about 16 km west along the
                  Raška river, after which the medieval Serbian state was named <strong>Raška</strong>.
                  Among high and wild hills, with steep rocky cliffs, near
                  its capital Rasa, <em>King Uroš I (1243-1276)</em> built a church dedicated to the Holy
                  Trinity, right above the source of the Raška river. The name Sopoćani comes from
                  the Old Slavic word <strong>„sopot“</strong>, meaning <em>spring</em>. The monastery was probably
                  built in the seventh decade of the 13th century, during the tenure of
                  Archbishop Sava II, brother of King Uroš, and represents the pinnacle of
                  spiritual and cultural creation of that era. Planned as the king’s
                  burial church, during construction it took the form of both a family
                  church and a mausoleum for the king’s most loyal men.
                </p>
              </section>


              <img srcSet={`${sopocani33} 450w, ${sopocani3} `} alt="Sopoćani Monastery 2" />

              <h3
                style={{
                  textAlign: "center",
                  color: "rgb(19 17 35)",
                  fontSize: "35px",
                  marginTop: "40px",
                  fontWeight: "500",
                }}
              >
                King Uroš I
              </h3>

              <section lang="en">
                <p>
                  King Uroš I, son of Stefan the First-Crowned and grandson of Nemanja, was a <strong>skillful and
                    capable ruler</strong>.
                  <br />
                  <br /> Through wise policies, he secured the borders of his country,
                  clashing with neighbors or forming alliances with them. He strengthened the ruler’s
                  power, developed church organization, and reinforced the cult of <strong>Nemanja and Sava</strong>,
                  the founders of the dynasty and the independent church. During his reign,
                  with the arrival of German miners called <em>"Sasi"</em> in Serbia, mines for silver, copper,
                  and lead were opened, which advanced metal production. This increased trade
                  with Italy through coastal cities and the economic strength of the state.
                  These circumstances created favorable conditions for the development of art.
                  <br />
                  <br />
                  At Uroš’s request, the Hilandar monk Domentijan wrote the lives
                  of Saint Simeon and Saint Sava, works considered among the <strong>greatest achievements
                    of Serbian medieval literature</strong>. The holy king was supported in his noble
                  endeavors by those around him: Saint Archbishop Arsenije
                  built the Church of the Holy Apostles in Peć and decorated it with exquisite frescoes,
                  the king’s relative Stefan Vukanović built a beautiful church in the Morača monastery
                  and adorned it with even more beautiful wall frescoes, and his wife, Saint Queen
                  Jelena, started the Church of the Annunciation in the Gradac monastery, a building
                  of harmonious proportions combining Raška and Gothic styles.
                </p>
              </section>


              <img srcSet={`${sopocani44} 450w, ${sopocani4} `} alt="Sopoćani Monastery 3" />

              <section lang="en">
                <p>
                  The temple of the Sopoćani monastery is dedicated to the <strong>Holy Trinity</strong> and
                  was built in the spirit of earlier Serbian architecture – its foundation and space almost literally
                  repeat the Žiča monastery, but it surpasses it in size and height. The Sopoćani church,
                  built of regularly laid blocks of travertine, has the appearance of a three-nave
                  Romanesque basilica, with a massive dome above the central part of the nave and
                  a tall bell tower on the western side. The building is of strict form,
                  impressive contours, and spacious, well-lit interior.
                  Simplicity and harmony in the design of architectural masses,
                  characteristic of the Raška school monuments of the 13th century, with a pronounced
                  expression of horizontal calm in space, are consistently implemented in
                  the construction of the entire structure. The unusual arrangement of the
                  interior space of Sopoćani architecture is boldly and skillfully vaulted under three roofs, of which
                  the middle one is significantly higher, covering the main nave of the church. The high
                  dome rests on a narrow, cubic pedestal.
                </p>
              </section>


              <img srcSet={`${sopocani55} 450w, ${sopocani5} `} alt="Sopoćani Monastery 4" />

              <section lang="en">
                <p>
                  In accordance with the simple lines of the originally plastered facades, which
                  emphasized the monumentality of the building, subtle decorations of
                  geometric character were chosen: double blind arcades in the dome bases,
                  marble biforas on the windows, and quadruple portals of white, fine, and
                  polished marble. These same masters executed all the original
                  stone-carving works in the church, as evidenced today by sarcophagi, the vessel for
                  holy water (agiasma), and remains of the iconostasis.
                  <br />
                  <br /> The church is single-nave, with a spacious nave and an altar with a large
                  semicircular apse. Two spaces on either side of the altar had a dual
                  function: they served as prothesis and diaconicon, but also as separate
                  chapels dedicated to the Most Holy Theotokos and, probably, Saint Sava. Left
                  and right of the space beneath the dome are two rectangular vestries, while
                  in the western part of the church is a spacious narthex, from which one enters the
                  chapels of Saint Stephen the Protomartyr (on the northern side) and Saint
                  Simeon the Myrrh-streaming (Saint Stephen Nemanja) on the southern side.
                </p>
              </section>


              <img srcSet={`${sopocani66} 450w, ${sopocani6} `} alt="Sopoćani Monastery 5" />

              <section lang="en">
                <p>
                  The second great benefactor of the Sopoćani monastery was <strong>Stefan Dušan</strong>, while still
                  a king (1331-1346). Around 1340, probably together with
                  then Archbishop Joanikije II (later the first Serbian
                  patriarch), he built an open narthex on the western side of the church, with
                  a tall bell tower in front of it. Before becoming emperor in 1346,
                  this narthex was decorated with frescoes that brought new ideas. The remains
                  of faded frescoes on that part preserved portraits of King Dušan,
                  his wife Queen Jelena, and their son, the young King Uroš.
                  <br />
                  <br /> By the end of the 17th century, the Sopoćani temple was destroyed by
                  the Turks. For more than two and a half centuries it was abandoned, and its ruined walls
                  were covered by thick undergrowth and trees. Large areas of frescoes on the vaults and
                  dome were completely destroyed. For decades, they were exposed to atmospheric
                  conditions, vegetation, and other hardships, but the Sopoćani frescoes
                  survived thanks to their <em>exceptional quality of execution</em>. However, the gold leaf
                  that adorned them gradually fell off. Only black traces of the adhesive
                  material that held the gold layer to the painted fresco surface remain.
                  <br />
                  <br /> The architecture of Sopoćani was restored from 1927 to 1929. During this time,
                  the collapsed walls, vault, and dome were rebuilt, and the church was covered
                  with tiles. The restored temple suffered significant damage during World War II.
                  Conservation and restoration work, which began in 1948
                  and continues with occasional shorter and longer breaks,
                  contributed to consolidating and securing the architecture of Sopoćani for
                  its permanent maintenance, protection, and use.
                </p>
              </section>



            </>
          )}

      </div>
    </>
  );
};


export default ManastirSopocani;