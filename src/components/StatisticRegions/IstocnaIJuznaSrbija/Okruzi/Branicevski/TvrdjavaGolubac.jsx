/* eslint-disable react/no-unknown-property */
import golubac1 from "../../../../../assets/images/JuznaIIstocnaSrbija/BranicevskiOkrug/TvrdjavaGolubac/desktop/golubac1.jpg";
import golubac2 from "../../../../../assets/images/JuznaIIstocnaSrbija/BranicevskiOkrug/TvrdjavaGolubac/desktop/golubac2.jpg";
import golubac3 from "../../../../../assets/images/JuznaIIstocnaSrbija/BranicevskiOkrug/TvrdjavaGolubac/desktop/golubac3.jpg";
import golubac4 from "../../../../../assets/images/JuznaIIstocnaSrbija/BranicevskiOkrug/TvrdjavaGolubac/desktop/golubac4.jpg";
import golubac5 from "../../../../../assets/images/JuznaIIstocnaSrbija/BranicevskiOkrug/TvrdjavaGolubac/desktop/golubac5.jpg";
import golubac6 from "../../../../../assets/images/JuznaIIstocnaSrbija/BranicevskiOkrug/TvrdjavaGolubac/desktop/golubac6.jpg";
import golubac11 from "../../../../../assets/images/JuznaIIstocnaSrbija/BranicevskiOkrug/TvrdjavaGolubac/mobile/golubacM1.jpg";
import golubac22 from "../../../../../assets/images/JuznaIIstocnaSrbija/BranicevskiOkrug/TvrdjavaGolubac/mobile/golubacM2.jpg";
import golubac33 from "../../../../../assets/images/JuznaIIstocnaSrbija/BranicevskiOkrug/TvrdjavaGolubac/mobile/golubacM3.jpg";
import golubac44 from "../../../../../assets/images/JuznaIIstocnaSrbija/BranicevskiOkrug/TvrdjavaGolubac/mobile/golubacM4.jpg";
import golubac55 from "../../../../../assets/images/JuznaIIstocnaSrbija/BranicevskiOkrug/TvrdjavaGolubac/mobile/golubacM5.jpg";
import golubac66 from "../../../../../assets/images/JuznaIIstocnaSrbija/BranicevskiOkrug/TvrdjavaGolubac/mobile/golubacM6.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { branicevskiOkrugPathRoutes } from "./BranicevskiOkrugPathRoutes";
import { useContextAuth } from "../../../../../Context";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const TvrdjavaGolubac = () => {
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

        <title>{switchLanguage === 'rs' ? "Tvrđava Golubac – Srednjovekovni Dragulj na Dunavu | Serbia Wonders" : "Golubac Fortress – A Medieval Jewel on the Danube | Serbia Wonders"}</title>
        <meta
          name="description"
          content={switchLanguage === 'rs' ?
            "Tvrđava Golubac je srednjovekovno utvrđenje izuzetnog značaja na obali Dunava, na ulazu u Đerdapsku klisuru. Danas potpuno obnovljena, predstavlja jednu od najposećenijih turističkih atrakcija Srbije."
            :
            "Golubac Fortress is a medieval fortification of great significance on the banks of the Danube River, guarding the entrance to the Đerdap Gorge. Now fully restored, it stands as one of Serbia's top historical and tourist landmarks."
          }
        />
        <meta
          name="keywords"
          content={switchLanguage === 'rs' ?
            "Tvrđava Golubac, Golubački grad, srednjovekovna tvrđava, Đerdapska klisura, Nacionalni park Đerdap, Dunav, Mihailo Obrenović, turistička atrakcija, srpska istorija, kulturno nasleđe"
            :
            "Golubac Fortress, medieval fort, Đerdap Gorge, Danube River, National Park Đerdap, Serbian history, cultural heritage, Mihailo Obrenović, Serbia tourism"
          }
        />
        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/branicevski-okrug/tvrdjava-golubac`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/branicevski-okrug/tvrdjava-golubac"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/branicevski-okrug/tvrdjava-golubac"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/branicevski-okrug/tvrdjava-golubac"
        />

      </Helmet>



      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft className="arrowLeft" onClick={() => navigate(branicevskiOkrugPathRoutes.home(switchLanguage))} />
        <header></header>
        <img srcSet={`${golubac11} 450w, ${golubac1} `} alt="Tvrđava Golubac 1" loading="lazy" />

        {switchLanguage === 'rs' ?
          (
            <>

              <h2>Tvrđava Golubac</h2>

              <section lang="sr">
                <p>
                  <strong>Golubački grad</strong> ili <strong>tvrđava Golubac</strong> je <em>srednjovekovna tvrđava</em> i <strong>spomenik kulture od izuzetnog značaja</strong>. Nalazi se u <strong>Nacionalnom parku Đerdap</strong>, na desnoj obali <strong>Dunava</strong>, oko <strong>4 km</strong> nizvodno od današnjeg naselja. Smeštena je na <strong>visokim liticama</strong>, na mestu gde se reka sužava, na samom ulazu u <strong>Đerdapsku klisuru</strong>.
                  <br /><br />
                  Tvrđava je građena <em>lepezasto</em> i sastoji se iz tri dela: <strong>prednjeg</strong>, <strong>zadnjeg</strong> i <strong>gornjeg grada (sa citadelom)</strong>. Čini je ukupno <strong>10 kula</strong> i <strong>dve velike kolske kapije</strong>. Ispred tvrđave se nalazilo <em>civilno naselje</em>, o čemu danas svedoče samo delimično istraženi ostaci objekata.
                  <br /><br />
                  <strong>Golubac</strong> ima burnu istoriju. Tokom srednjeg veka vođene su brojne <em>bitke za njegovu kontrolu</em>, naročito između <strong>Osmanskog carstva</strong> i <strong>Kraljevine Ugarske</strong>. Godine <strong>1867.</strong> turska posada napustila je Golubački grad, koji je zatim predat srpskom knezu <strong>Mihailu Obrenoviću</strong>. Danas je tvrđava <strong>popularna turistička atrakcija</strong> na Dunavu.
                  <br /><br />
                  <strong>Revitalizacija</strong> tvrđave započeta je <strong>2012. godine</strong>, kada su izgrađeni <em>obilaznica i tunel</em>, a potpuna obnova prvobitno je bila planirana do kraja <strong>2017. godine</strong>. Tvrđava je u potpunosti <strong>obnovljena</strong> i <em>svečano otvorena</em> <strong>29. marta 2019. godine</strong>. Njome upravlja <strong>Javno preduzeće „Golubački grad-tvrđava”</strong>.
                </p>
              </section>

              <img srcSet={`${golubac22} 450w, ${golubac2}`} alt="Tvrđava Golubac 2" loading="lazy" />

              <section lang="sr">
                <p>
                  <strong>Golubački grad-tvrđava</strong> nalazi se na desnoj obali <strong>Dunava</strong>, u opštini <strong>Golubac</strong>, na ulazu u područje <strong>Nacionalnog parka Đerdap</strong>. <strong>Ulazna kapija</strong> tvrđave predstavlja glavnu ulaznu tačku u nacionalni park sa zapadne strane, dok se istočno od bedema tvrđave nalazi <strong>prirodni rezervat Golubac</strong>.
                  <br /><br />
                  Osnova Golubačkog grada je <em>nepravilna</em> i u potpunosti prilagođena konfiguraciji terena. Usečen u stenu, predstavljao je jednu od <em>najtežih prepreka</em> za neprijatelje koji su dolazili sa severa. Najviše tačke utvrđenja, <strong>istočne i južne</strong>, bile su teško dostupne zbog stenovitog terena, dok je sa zapadne strane bio najlakši prilaz. Između zidova i kula postojala je veza, a iz svake kule moglo se izaći na <strong>odbrambeni zid</strong>.
                  <br /><br />
                  <strong>Golubac</strong> je bio opasan sa <strong>devet kula</strong>, uglavnom <em>četvrtastog oblika</em>. Ispred najnižeg dela utvrđenja nalazio se <strong>vodeni rov</strong>, preko kojeg se mostom, kroz kapiju, ulazilo u grad. Unutar grada postojala su <em>unutrašnja i spoljašnja utvrđenja</em>.
                  <br /><br />
                  Tvrđava je građena u obliku <em>lepeze</em> i sastoji se od tri dela: <strong>prednjeg</strong>, <strong>zadnjeg</strong> i <strong>gornjeg grada (sa citadelom)</strong>. Čini je ukupno <strong>10 kula</strong> i <strong>dve velike kolske kapije</strong>. Turci su kasnije ojačali kule otvorima za <strong>topove</strong> i dodali još jednu kulu (<strong>desetu</strong>) oko <strong>1480. godine</strong>. Ispred grada se nalazi <strong>prednji zid</strong>, koji je verovatno bio ispunjen vodom jer je bio povezan sa Dunavom. <strong>Golubac</strong> je bio povezan teškim lancem sa stenom <strong>Babakaj</strong>, koja i danas viri iz Dunava, čime je potpuno kontrolisao drumski i rečni saobraćaj kroz Đerdapsku klisuru.
                  <br /><br />
                  Ispred tvrđave se nalazilo <em>civilno naselje</em>, o čemu danas svedoče delimično istraženi ostaci građevina.
                </p>
              </section>

              <img srcSet={`${golubac33} 450w, ${golubac3}`} alt="Tvrđava Golubac 3" loading="lazy" />

              <section lang="sr">
                <p>
                  <strong>Srednjovekovni Golubac</strong> nastao je na ostacima starijeg <strong>rimskog utvrđenja</strong>. Od <strong>803. do 1018. godine</strong> ovo područje pripadalo je <strong>Prvom Bugarskom Carstvu</strong>, zatim <strong>Vizantijskom Carstvu</strong> do <strong>1193. godine</strong>, a potom <strong>Drugom Bugarskom Carstvu</strong> do <strong>1257. godine</strong>. Njegov izuzetan <em>strateški položaj</em> prepoznali su i srednjovekovni graditelji, koji su temelje starijih utvrđenja iskoristili za izgradnju novih tvrđava.
                  <br /><br />
                  <strong>Golubac</strong> je podignut na obali <strong>Dunava</strong>, na samom ulazu u <strong>Đerdapsku klisuru</strong>, na liticama uzvišenja <strong>Radana</strong>. Na ovom mestu nekada se nalazila rimska tvrđava <strong>Vico Cuppae</strong>, dok je u srednjem veku ovde podignuto novo utvrđenje, zamišljeno kao <em>vojna tvrđava za borbu hladnim oružjem</em> i značajno <em>strateško uporište</em>.
                  <br /><br />
                  Na osnovu istorijskih, arhitektonskih i arheoloških podataka, smatra se da je tvrđava nastala u drugoj polovini <strong>13.</strong> i početkom <strong>14. veka</strong>, a da su je podigli <strong>Srbi</strong>. Tokom vremena, njen prvobitni izgled menjan je više puta, jer je tvrđava dograđivana i prilagođavana potrebama artiljerije. Svoj današnji oblik dobila je krajem <strong>15. veka</strong>.
                </p>
              </section>

              <img srcSet={`${golubac44} 450w, ${golubac4}`} alt="Tvrđava Golubac 4" loading="lazy" />

              <section lang="sr">
                <p>
                  <strong>Golubac</strong> se prvi put pominje u <em>ugarskim izvorima</em> iz <strong>1335</strong>, <strong>1337.</strong> i <strong>1342. godine</strong>. Prema tim izvorima, tvrđava se dovodi u vezu sa <strong>ugarskim kraljem Ludvikom I</strong>. Međutim, tačan datum njene izgradnje i identitet graditelja nisu poznati. Ipak, smatra se da je osnovu tvrđave, odnosno <strong>„Gornji grad”</strong>, podigao <strong>srpski, odnosno pravoslavni velmoža</strong>, što potvrđuje i postojanje pravoslavne <strong>kapele</strong> u sklopu četvrte kule.
                  <br /><br />
                  Kasnije je tvrđava proširena na <strong>„zadnji”</strong> i <strong>„prednji grad”</strong>, tokom srpske ili ugarske vlasti, iako postoji mogućnost da je od samog početka izgrađena u ovom obimu. Poslednju fazu gradnje sproveli su <strong>Turci</strong>, ojačavši šestu, sedmu, osmu i devetu kulu, dok su u produžetku spoljašnjeg bedema dodali nisku <strong>artiljerijsku kulu</strong> (<strong>desetu</strong>), koja je nadzirala Dunav i štitila pristanište za <em>šajke</em> koje se nalazilo ispod tvrđave.
                </p>
              </section>

              <img srcSet={`${golubac55} 450w, ${golubac5}`} alt="Tvrđava Golubac 5" loading="lazy" />

              <section lang="sr">
                <p>
                  <strong>Golubac</strong> je zbog svog strateškog značaja bio često na meti različitih osvajača. Krajem <strong>14. i početkom 15. veka</strong> koristili su ga <strong>ugarski kraljevi</strong>, a potom su ga zauzeli <strong>Turci</strong> u drugoj polovini <strong>15. veka</strong>. Tokom vekova, tvrđava je menjala vlasnike i služila kao uporište u brojnim ratnim sukobima između <strong>Osmanskog carstva</strong> i <strong>ugarskih vlasti</strong>.
                  <br /><br />
                  Nakon <strong>Berlinskog kongresa 1878. godine</strong>, tvrđava prelazi pod kontrolu <strong>Kneževine Srbije</strong>. Tokom <strong>20. veka</strong>, tvrđava je bila zapuštena, ali je od 2012. godine započela njena revitalizacija i turističko valorizovanje.
                </p>
              </section>

              <img srcSet={`${golubac66} 450w, ${golubac6}`} alt="Tvrđava Golubac 6" loading="lazy" />

              <section lang="sr">
                <p>
                  Od tada pa sve do <strong>19. veka</strong>, Turci su vladali <strong>Golupcem</strong>. Nakratko su ga držali <strong>Austrijanci (1688–1690)</strong> i <strong>srpski ustanici</strong> tokom <em>Kočine krajine</em> i <em>Prvog srpskog ustanka</em>. Srbi ponovo osvajaju <strong>Golubac</strong> u <em>Drugom srpskom ustanku</em>.
                  <br /><br />
                  Ipak, <strong>Golubački grad</strong> je zvanično predat Srbima na upravu tek <strong>1868. godine</strong>. Tada, zajedno sa još nekoliko gradova u Srbiji, Turci ga konačno predaju <strong>knezu Mihailu Obrenoviću</strong>.
                </p>
              </section>

            </>
          )
          :
          (
            <>

              <h2>Golubac Fortress</h2>

              <section lang="en">
                <p>
                  <strong>Golubac Fortress</strong> or <strong>Golubac Castle</strong> is a <em>medieval fortress</em> and a <strong>cultural monument of exceptional importance</strong>. It is located in the <strong>Đerdap National Park</strong>, on the right bank of the <strong>Danube River</strong>, about <strong>4 km</strong> downstream from the present-day settlement. It is situated on <strong>high cliffs</strong>, at a point where the river narrows, at the very entrance to the <strong>Đerdap Gorge</strong>.
                  <br /><br />
                  The fortress was built in a <em>fan-shaped</em> layout and consists of three parts: the <strong>front</strong>, the <strong>back</strong>, and the <strong>upper town (with citadel)</strong>. It comprises a total of <strong>10 towers</strong> and <strong>two large carriage gates</strong>. In front of the fortress was a <em>civil settlement</em>, of which only partially excavated remains of buildings testify today.
                  <br /><br />
                  <strong>Golubac</strong> has a turbulent history. During the Middle Ages, many <em>battles for its control</em> were fought, especially between the <strong>Ottoman Empire</strong> and the <strong>Kingdom of Hungary</strong>. In <strong>1867</strong>, the Turkish garrison left Golubac Fortress, which was then handed over to the Serbian prince <strong>Mihailo Obrenović</strong>. Today, the fortress is a <strong>popular tourist attraction</strong> on the Danube.
                  <br /><br />
                  The <strong>revitalization</strong> of the fortress began in <strong>2012</strong>, when a <em>bypass road and tunnel</em> were built, and the full restoration was originally planned to be completed by the end of <strong>2017</strong>. The fortress was fully <strong>restored</strong> and <em>officially opened</em> on <strong>March 29, 2019</strong>. It is managed by the <strong>Public Enterprise “Golubački grad - Fortress”</strong>.
                </p>
              </section>

              <img srcSet={`${golubac22} 450w, ${golubac2}`} alt="Golubac Fortress 2" loading="lazy" />

              <section lang="en">
                <p>
                  <strong>Golubački grad - Fortress</strong> is located on the right bank of the <strong>Danube</strong>, in the municipality of <strong>Golubac</strong>, at the entrance to the <strong>Đerdap National Park</strong> area. The <strong>entrance gate</strong> of the fortress is the main entry point to the national park from the west, while east of the fortress ramparts lies the <strong>Golubac Nature Reserve</strong>.
                  <br /><br />
                  The base of Golubački grad is <em>irregular</em> and fully adapted to the terrain’s configuration. Cut into the rock, it represented one of the <em>most difficult obstacles</em> for enemies coming from the north. The highest points of the fortification, the <strong>eastern and southern</strong> towers, were hard to access due to the rocky terrain, while the western side was the easiest approach. There was a connection between walls and towers, and from each tower it was possible to access the <strong>defensive wall</strong>.
                  <br /><br />
                  <strong>Golubac</strong> was fortified with <strong>nine towers</strong>, mostly <em>square-shaped</em>. In front of the lowest part of the fortress was a <strong>moat</strong>, over which one entered the town via a bridge through the gate. Inside the town were <em>inner and outer fortifications</em>.
                  <br /><br />
                  The fortress was built in a <em>fan shape</em> and consists of three parts: the <strong>front</strong>, <strong>back</strong>, and <strong>upper town (with citadel)</strong>. It includes a total of <strong>10 towers</strong> and <strong>two large carriage gates</strong>. Later, the Turks reinforced the towers with openings for <strong>cannons</strong> and added one more tower (the <strong>tenth</strong>) around <strong>1480</strong>. In front of the town was a <strong>front wall</strong>, probably filled with water as it was connected to the Danube. <strong>Golubac</strong> was connected by a heavy chain to the <strong>Babakaj rock</strong>, which still protrudes from the Danube, controlling river and road traffic through the Đerdap Gorge.
                  <br /><br />
                  In front of the fortress was a <em>civil settlement</em>, evidenced today by partially excavated remains of buildings.
                </p>
              </section>

              <img srcSet={`${golubac33} 450w, ${golubac3}`} alt="Golubac Fortress 3" loading="lazy" />

              <section lang="en">
                <p>
                  <strong>Medieval Golubac</strong> was built on the remains of an older <strong>Roman fortification</strong>. From <strong>803 to 1018</strong>, this area belonged to the <strong>First Bulgarian Empire</strong>, then to the <strong>Byzantine Empire</strong> until <strong>1193</strong>, and afterwards to the <strong>Second Bulgarian Empire</strong> until <strong>1257</strong>. Its outstanding <em>strategic position</em> was recognized by medieval builders, who used the foundations of older fortifications to build new castles.
                  <br /><br />
                  <strong>Golubac</strong> was erected on the bank of the <strong>Danube</strong>, at the very entrance of the <strong>Đerdap Gorge</strong>, on the cliffs of the <strong>Radana</strong> hill. A Roman fortress called <strong>Vico Cuppae</strong> once stood here, while in the Middle Ages a new fortification was built as a <em>military fortress for close combat</em> and an important <em>strategic stronghold</em>.
                  <br /><br />
                  Based on historical, architectural, and archaeological data, it is believed that the fortress was built in the second half of the <strong>13th century</strong> and early <strong>14th century</strong> by the <strong>Serbs</strong>. Over time, its original appearance changed several times as the fortress was expanded and adapted for artillery use. It took its current form by the end of the <strong>15th century</strong>.
                </p>
              </section>

              <img srcSet={`${golubac44} 450w, ${golubac4}`} alt="Golubac Fortress 4" loading="lazy" />

              <section lang="en">
                <p>
                  <strong>Golubac</strong> is first mentioned in <em>Hungarian sources</em> from <strong>1335</strong>, <strong>1337</strong>, and <strong>1342</strong>. According to these sources, the fortress is associated with the <strong>Hungarian King Louis I</strong>. However, the exact date of construction and the identity of its builders remain unknown. It is believed that the core of the fortress, the <strong>“Upper Town”</strong>, was built by a <strong>Serbian, or Orthodox nobleman</strong>, which is confirmed by the presence of an Orthodox <strong>chapel</strong> in the fourth tower.
                  <br /><br />
                  Later, the fortress was expanded to the <strong>“back”</strong> and <strong>“front town”</strong> during Serbian or Hungarian rule, although it is possible that it was originally built at this scale. The last construction phase was carried out by the <strong>Turks</strong>, who strengthened the sixth, seventh, eighth, and ninth towers, and added a low <strong>artillery tower</strong> (the <strong>tenth</strong>) at the extension of the outer rampart, overseeing the Danube and protecting the dock for <em>small boats</em> located below the fortress.
                </p>
              </section>

              <img srcSet={`${golubac55} 450w, ${golubac5}`} alt="Golubac Fortress 5" loading="lazy" />

              <section lang="en">
                <p>
                  Due to its strategic importance, <strong>Golubac</strong> was often targeted by various conquerors. At the end of the <strong>14th</strong> and beginning of the <strong>15th century</strong>, it was used by <strong>Hungarian kings</strong>, and then occupied by the <strong>Turks</strong> in the second half of the <strong>15th century</strong>. Over the centuries, the fortress changed owners and served as a stronghold in numerous military conflicts between the <strong>Ottoman Empire</strong> and the <strong>Hungarian authorities</strong>.
                  <br /><br />
                  After the <strong>Berlin Congress of 1878</strong>, the fortress came under the control of the <strong>Principality of Serbia</strong>. During the <strong>20th century</strong>, the fortress was neglected, but since <strong>2012</strong>, its revitalization and tourist development have begun.
                </p>
              </section>

              <img srcSet={`${golubac66} 450w, ${golubac6}`} alt="Golubac Fortress 6" loading="lazy" />

              <section lang="en">
                <p>
                  From then until the <strong>19th century</strong>, the Turks ruled <strong>Golubac</strong>. Briefly, it was held by the <strong>Austrians (1688–1690)</strong> and <strong>Serbian insurgents</strong> during the <em>Kočina Krajina</em> and the <em>First Serbian Uprising</em>. The Serbs recaptured <strong>Golubac</strong> during the <em>Second Serbian Uprising</em>.
                  <br /><br />
                  However, <strong>Golubački grad</strong> was officially handed over to the Serbs only in <strong>1868</strong>. Then, along with several other towns in Serbia, the Turks finally handed it over to <strong>Prince Mihailo Obrenović</strong>.
                </p>
              </section>


            </>
          )}

      </div>

    </>
  );
};


export default TvrdjavaGolubac;