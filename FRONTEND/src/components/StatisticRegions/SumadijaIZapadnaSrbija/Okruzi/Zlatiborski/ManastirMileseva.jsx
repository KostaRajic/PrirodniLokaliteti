/* eslint-disable react/no-unknown-property */
import mileseva1 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/Miloseva/desktop/miloseva1.jpg";
import mileseva2 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/Miloseva/desktop/miloseva2.jpg";
import mileseva3 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/Miloseva/desktop/miloseva3.jpg";
import mileseva4 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/Miloseva/desktop/miloseva4.jpg";
import mileseva5 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/Miloseva/desktop/miloseva5.jpg";
import mileseva11 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/Miloseva/mobile/Mmiloseva1.jpg";
import mileseva22 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/Miloseva/mobile/Mmiloseva2.jpg";
import mileseva33 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/Miloseva/mobile/Mmiloseva3.jpg";
import mileseva44 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/Miloseva/mobile/Mmiloseva4.jpg";
import mileseva55 from "../../../../../assets/images/SumadijaIZapadnaSrbija/ZlatiborskiOkrug/Miloseva/mobile/Mmiloseva5.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { zlatiborskiOkrugPathRoutes } from "./ZlatiborskiOkrugPahtRoutes";
import { useContextAuth } from "../../../../../Context";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const ManastirMileseva = () => {
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
            ? "Manastir Mileševa | Zadužbina kralja Vladislava, istorija i freske"
            : "Mileševa Monastery | Royal Legacy, History & Frescoes"}
        </title>

        <meta
          name="description"
          content={
            switchLanguage === 'rs'
              ? "Manastir Mileševa, zadužbina kralja Vladislava iz 13. veka, poznat je po fresci Belog anđela i značaju u srpskoj istoriji. Nalazi se u blizini Prijepolja."
              : "Mileševa Monastery, a 13th-century legacy of King Vladislav, is famous for the White Angel fresco and its historical importance. Located near Prijepolje, Serbia."
          }
        />

        <meta
          name="keywords"
          content={
            switchLanguage === 'rs'
              ? "Manastir Mileševa, Prijepolje, Beli anđeo, kralj Vladislav, srpski manastiri, Nemanjici, freske, srednjovekovna Srbija, Pećka patrijaršija, raški stil, zadužbine"
              : "Mileševa Monastery, Prijepolje, White Angel, King Vladislav, Serbian monasteries, Nemanjić dynasty, frescoes, medieval Serbia, Patriarchate of Peć, Raška style"
          }
        />

        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/sumadija-tekst-modal/sumadija-i-zapadna-srbija/zlatiborski-okrug/manastir-mileseva`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/sumadija-tekst-modal/sumadija-i-zapadna-srbija/zlatiborski-okrug/manastir-mileseva"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/sumadija-tekst-modal/sumadija-i-zapadna-srbija/zlatiborski-okrug/manastir-mileseva"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/sumadija-tekst-modal/sumadija-i-zapadna-srbija/zlatiborski-okrug/manastir-mileseva"
        />
      </Helmet>


      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft className="arrowLeft" onClick={() => navigate(zlatiborskiOkrugPathRoutes.home(switchLanguage))} />
        <header></header>
        <img srcSet={`${mileseva44} 450w, ${mileseva4} `} alt='Manastir Mileševa 1' loading="lazy" />

        {switchLanguage === 'rs' ?
          (
            <>

              <h1>Manastir Mileševa</h1>

              <section lang="sr">
                <p>
                  Manastir <strong>Mileševa</strong> smešten je u dolini istoimene reke, nedaleko od
                  <strong>Prijepolja</strong>. Građen je između <em>1218.</em> i <em>1219.</em> godine, a njegov živopis je
                  završen između <em>1222.</em> i <em>1228.</em> godine. Osnovao ga je kralj <strong>Vladislav</strong>, sin
                  kralja Stefana Prvovenčanog i unuk Nemanji. Vladislav je izgradio
                  Mileševu kao svoju porodičnu grobnicu, slično kako je njegov otac
                  podigao manastir <strong>Žiču</strong>, a deda <strong>Studenicu</strong>. Nakon što je <em>1234.</em> godine, uz
                  pomoć plemstva, zbacio svog starijeg brata Radoslava sa prestola,
                  Vladislav je <em>1243.</em> godine, predajući vlast svom mlađem bratu <strong>Urošu</strong>, sam
                  napustio tron. Preminuo je u <strong>Zeti</strong> u sedamdesetim godinama <em>XIII</em> veka, a
                  sahranjen je u svojoj zadužbini. U hijerarhiji srpskih manastira,
                  Mileševa je zauzimala drugo mesto, odmah nakon Studenice.
                </p>
              </section>

              <img srcSet={`${mileseva22} 450w, ${mileseva2} `} alt="Manastir Mileševa 2" loading="lazy" />

              <section lang="sr">
                <p>
                  Turci su prvi put poharali Mileševu <em>1459.</em> godine, ali je ubrzo
                  obnovljena. Iako pod turskom vlašću, manastir je nastavio da razvija
                  bogatu kulturnu delatnost. U njemu je crkveni i prosvetni život, iako
                  povremeno usporen, trajao gotovo neprekidno. U <em>XVI</em> veku (<em>1543.</em> i <em>1544.</em>
                  godine) u Mileševi je radila jedna od prvih srpskih štamparija, koja je
                  izdala veliki broj bogoslužbenih i drugih crkvenih knjiga, što ukazuje
                  na to da je u manastiru nastavljeno raditi na knjigama i pisanoj reči, i
                  u najtežim uslovima. Pored štamparije, u Mileševi je delovala i
                  manastirska škola, jedna od najstarijih u Srbiji. Iz okolnih područja
                  Mileševe potekli su, izgleda, i braća Sokolovići, od kojih je poturčeni
                  Mehmed postao veliki vezir, dok je drugi, Mileševski đak <strong>Makarios</strong>,
                  postao prvi patrijarh obnovljene Pećke patrijaršije. U drugoj polovini
                  <em>XVI</em> veka, za vreme patrijarha Makariosa Sokolovića, usledila je velika
                  obnova Mileševe. Tom prilikom podignuta je i spoljašnja priprata sa
                  živopisom.
                </p>
              </section>

              <img srcSet={`${mileseva33} 450w, ${mileseva3} `} alt="Manastir Mileševa 3" loading="lazy" />

              <section lang="sr">
                <p>
                  U <em>XVI</em> i <em>XVII</em> veku mnogi ugledni putnici posećivali su manastir, ponekad
                  ga nalazeći prepunog i u blagostanju, a ponekad su bili svedoci njegovih
                  teškoća. U <em>XVII</em> veku izvršene su značajne popravke manastirskih zgrada.
                  Krajem <em>XVII</em> veka, u vreme narodnih ustanaka, Mileševa je doživela
                  sudbinu sličnu onoj koju su pretrpeli nedaleki Sopoćani i drugi
                  manastiri u regionu sa kojeg je stanovništvo, pod patrijarhom
                  <strong>Čarnojevićem</strong>, pobeglo u Austriju. Turci su zapalili konake i opljačkali
                  manastir. Zabeleženo je da je crkva opljačkana i krajem <em>XVIII</em> veka.
                  Često napuštan, manastir je sve više propadao. Godine <em>1857.</em> ruski
                  putopisac i naučnik <strong>Giljferding</strong> piše da je crkva bila u ruševinama, da
                  su zidovi opstali, ali da nije bilo krova, da su kupole gotovo potpuno
                  srušene i da ih podržavaju samo delovi svodova.
                </p>
              </section>

              <img srcSet={`${mileseva11} 450w, ${mileseva1} `} alt="Manastir Mileševa 4" loading="lazy" />

              <section lang="sr">
                <p>
                  Najvažnija obnova manastira Mileševe izvršena je od <em>1863.</em> do <em>1865.</em>
                  godine, zahvaljujući trudu građana iz <strong>Prijepolja</strong>. Tada je manastirska
                  crkva značajno promenila svoj prvobitni arhitektonski izgled. Podignuti
                  su krovovi i kupole, dozidana polurazrušena apsida, a verovatno je
                  čitava građevina nad spoljnim nartheksom takođe obnovljena. Osvježeni su
                  freske, zaštitni zidovi, kao i manastirska vodenička zgrada. Nije
                  potpuno sigurno, ali se pretpostavlja da je prilikom obnove crkvi naneta
                  značajna šteta, uključujući uništavanje gotovo celog zida između
                  unutrašnje priprate i naosa, na kojem se nalazila velika scena Smrt
                  Bogorodice. Tom prilikom su oštećene i druge freske, uključujući portret
                  Nemanjića. Verovatno je zid sa portalom bio toliko oštećen i napukao da
                  majstori nisu mogli da ga konsoliduju, te su ga skoro u potpunosti
                  uklonili, proširujući time samu crkvu.
                </p>
              </section>

              <img srcSet={`${mileseva55} 450w, ${mileseva5} `} alt="Manastir Mileševa 5" loading="lazy" />

              <section lang="sr">
                <p>
                  Mileševarska crkva <strong>Svetog Vaznesenja Gospodnjeg</strong> izgrađena je po uzoru na
                  ranije vladarske zadužbine, <strong>Studenicu</strong> i <strong>Žiču</strong>, u raškom stilu.
                  Ovaj stil karakteriše romanijska tehnika zidanja, koja je bila uobičajena u
                  tadašnjem srpskom primorju, prilagođena potrebama Pravoslavne crkve.
                  Crkva je jednostavna, zidana ciglom, a zatim omalterisana. Građevina je
                  jednobrodna, sa dve niske pevnice, širokom centralnom apsidom i dve
                  bočne apside. Prvobitno je imala jednu kupolu, a tokom restauracija u
                  <em>XVII</em> ili <em>XIX</em> veku dodata je još jedna. Od nekadašnjeg unutrašnjeg
                  portala, verovatno izgrađenog po uzoru na studenički, sačuvao se samo
                  jedan kameni lav, prilično grubo isklesan. Ostale plastične dekoracije u
                  crkvi nisu prisutne, osim plitkih arkadica oko kupola i ornamentalnih
                  traka oko portala i nekih prozora. Posebnost arhitekture čini
                  jednobrodna osnova hrama, koja se širi od zapada (ulaza) prema istoku,
                  kao i izostavljanje istočnog traveja, zbog čega tri široke oltarske
                  apside neposredno leže uz istočni zid pod kupolom. Crkva je, u poređenju
                  sa drugim građevinama raškog stila, prilično visoka.
                </p>
              </section>

            </>
          )
          :
          (
            <>

              <h1>Mileševa Monastery</h1>

              <section lang="en">
                <p>
                  The <strong>Mileševa</strong> Monastery is located in the valley of the river of the same name, not far from
                  <strong>Prijepolje</strong>. It was built between <em>1218</em> and <em>1219</em>, and its frescoes were
                  completed between <em>1222</em> and <em>1228</em>. It was founded by King <strong>Vladislav</strong>, son
                  of King Stefan the First-Crowned and grandson of Nemanja. Vladislav built
                  Mileševa as his family mausoleum, similar to how his father
                  built the Žiča Monastery, and his grandfather Studenica. After, in <em>1234</em>, with the help of the nobility,
                  he overthrew his older brother Radoslav from the throne,
                  Vladislav in <em>1243</em>, handing over power to his younger brother <strong>Uroš</strong>, abdicated himself.
                  He died in <strong>Zeta</strong> in his seventies in the <em>13th</em> century,
                  and was buried in his endowment. In the hierarchy of Serbian monasteries,
                  Mileševa held the second place, right after Studenica.
                </p>
              </section>

              <img srcSet={`${mileseva22} 450w, ${mileseva2} `} alt="Mileševa Monastery 2" loading="lazy" />

              <section lang="en">
                <p>
                  The Turks first ravaged Mileševa in <em>1459</em>, but it was soon
                  restored. Despite Ottoman rule, the monastery continued to develop
                  rich cultural activity. Church and educational life in it, though
                  occasionally slowed down, lasted almost uninterrupted. In the <em>16th</em> century (<em>1543</em> and <em>1544</em>)
                  one of the first Serbian printing houses operated in Mileševa, which
                  issued a large number of liturgical and other church books, indicating
                  that work on books and written word continued in the monastery,
                  even under the hardest conditions. Besides the printing house, a
                  monastic school, one of the oldest in Serbia, also functioned in Mileševa.
                  From the surrounding areas of Mileševa apparently originated the Sokolović brothers,
                  one of whom, Mehmed, converted to Islam and became a grand vizier,
                  while the other, the Mileševa student <strong>Makarios</strong>,
                  became the first patriarch of the restored Peć Patriarchate. In the second half
                  of the <em>16th</em> century, during the time of Patriarch Makarios Sokolović,
                  a major renovation of Mileševa followed. At that time, the outer narthex with
                  frescoes was built.
                </p>
              </section>

              <img srcSet={`${mileseva33} 450w, ${mileseva3} `} alt="Mileševa Monastery 3" loading="lazy" />

              <section lang="en">
                <p>
                  In the <em>16th</em> and <em>17th</em> centuries, many prominent travelers visited the monastery,
                  sometimes finding it full and prosperous, and sometimes witnessing its
                  difficulties. In the <em>17th</em> century, significant repairs of the monastic buildings were made.
                  At the end of the <em>17th</em> century, during the national uprisings,
                  Mileševa suffered a fate similar to nearby Sopoćani and other
                  monasteries in the region from which the population, under Patriarch
                  <strong>Čarnojević</strong>, fled to Austria. The Turks burned the residential quarters and looted
                  the monastery. It was recorded that the church was looted again at the end of the <em>18th</em> century.
                  Often abandoned, the monastery gradually fell into ruin. In <em>1857</em>, the Russian
                  traveler and scientist <strong>Gilferding</strong> wrote that the church was in ruins, that
                  the walls remained, but there was no roof, the domes were almost completely
                  destroyed and supported only by parts of the vaults.
                </p>
              </section>

              <img srcSet={`${mileseva11} 450w, ${mileseva1} `} alt="Mileševa Monastery 4" loading="lazy" />

              <section lang="en">
                <p>
                  The most important restoration of the Mileševa Monastery was carried out from <em>1863</em> to <em>1865</em>,
                  thanks to the efforts of the citizens of <strong>Prijepolje</strong>. At that time, the monastic
                  church significantly changed its original architectural appearance. Roofs and domes
                  were built, a partially ruined apse was added, and probably
                  the entire building over the outer narthex was also renovated. Frescoes,
                  protective walls, as well as the monastic mill building were refreshed.
                  It is not entirely certain, but it is assumed that significant damage was done to the church during the restoration,
                  including the destruction of almost the entire wall between
                  the inner narthex and the nave, on which was a large scene of the Death
                  of the Virgin Mary. Other frescoes were also damaged at that time, including a portrait
                  of the Nemanjić dynasty. Probably the wall with the portal was so damaged and cracked that
                  the craftsmen could not consolidate it, so they almost completely
                  removed it, thus enlarging the church itself.
                </p>
              </section>

              <img srcSet={`${mileseva55} 450w, ${mileseva5} `} alt="Mileševa Monastery 5" loading="lazy" />

              <section lang="en">
                <p>
                  The Mileševa Church of the <strong>Holy Ascension of the Lord</strong> was built following the model of
                  earlier royal endowments, <strong>Studenica</strong> and <strong>Žiča</strong>, in the Raška style.
                  This style is characterized by the Romanesque masonry technique, which was common in
                  the then Serbian coastal regions, adapted to the needs of the Orthodox Church.
                  The church is simple, built of brick, then plastered. The building is
                  single-nave, with two low choirs, a wide central apse, and two
                  side apses. Originally it had one dome, and during restorations in the
                  <em>17th</em> or <em>19th</em> century, another was added. Of the former interior
                  portal, probably built following the Studenica model, only
                  one stone lion has been preserved, rather roughly carved. Other sculptural decorations in
                  the church are not present, except for shallow arcades around the domes and ornamental
                  bands around the portal and some windows. A special feature of the architecture is
                  the single-nave foundation of the temple, which widens from west (entrance) to east,
                  as well as the omission of the eastern nave, due to which three wide altar
                  apses lie directly against the eastern wall under the dome. Compared
                  to other Raška style buildings, the church is quite tall.
                </p>
              </section>


            </>
          )}

      </div>
    </>
  );
};

export default ManastirMileseva;