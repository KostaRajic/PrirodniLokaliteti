/* eslint-disable react/no-unknown-property */
import NS1 from "../../../../../assets/images/Vojvodina/JuznoBackiOkrug/NoviSad/desktop/NS1.jpg";
import NS2 from "../../../../../assets/images/Vojvodina/JuznoBackiOkrug/NoviSad/desktop/NS2.jpg";
import NS3 from "../../../../../assets/images/Vojvodina/JuznoBackiOkrug/NoviSad/desktop/NS3.jpg";
import NS4 from "../../../../../assets/images/Vojvodina/JuznoBackiOkrug/NoviSad/desktop/NS4.jpg";
import NS5 from "../../../../../assets/images/Vojvodina/JuznoBackiOkrug/NoviSad/desktop/NS5.jpg";
import NS6 from "../../../../../assets/images/Vojvodina/JuznoBackiOkrug/NoviSad/desktop/NS6.jpg";
import NS7 from "../../../../../assets/images/Vojvodina/JuznoBackiOkrug/NoviSad/desktop/NS7.jpg";
import NS11 from "../../../../../assets/images/Vojvodina/JuznoBackiOkrug/NoviSad/mobile/NSM1.jpg";
import NS22 from "../../../../../assets/images/Vojvodina/JuznoBackiOkrug/NoviSad/mobile/NSM2.jpg";
import NS33 from "../../../../../assets/images/Vojvodina/JuznoBackiOkrug/NoviSad/mobile/NSM3.jpg";
import NS44 from "../../../../../assets/images/Vojvodina/JuznoBackiOkrug/NoviSad/mobile/NSM4.jpg";
import NS55 from "../../../../../assets/images/Vojvodina/JuznoBackiOkrug/NoviSad/mobile/NSM5.jpg";
import NS66 from "../../../../../assets/images/Vojvodina/JuznoBackiOkrug/NoviSad/mobile/NSM6.jpg";
import NS77 from "../../../../../assets/images/Vojvodina/JuznoBackiOkrug/NoviSad/mobile/NSM7.jpg";


import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { JuznoBackiPathRoutes } from "./JuznoBackiPathRoutes";
import { useContextAuth } from "../../../../../Context";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";


const NoviSad = () => {
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
            ? 'Novi Sad | Srpska Atina na obali Dunava'
            : 'Novi Sad | The Serbian Athens on the Danube'}
        </title>

        <meta
          name="description"
          content={
            switchLanguage === 'rs'
              ? 'Novi Sad je kulturni i istorijski centar Srbije, smešten na obalama Dunava. Poznat je po Petrovaradinskoj tvrđavi, EXIT festivalu, bogatoj istoriji i statusu evropske prestonice kulture.'
              : 'Novi Sad is a cultural and historical center of Serbia, located on the Danube River. Known for Petrovaradin Fortress, EXIT Festival, rich heritage, and its status as European Capital of Culture.'
          }
        />

        <meta
          name="keywords"
          content={
            switchLanguage === 'rs'
              ? 'Novi Sad, Srpska Atina, Dunav, Petrovaradinska tvrđava, Exit festival, istorija Novog Sada, kultura, Vojvodina, evropska prestonica kulture, turističke atrakcije, Fruška gora'
              : 'Novi Sad, Serbian Athens, Danube, Petrovaradin Fortress, Exit Festival, Novi Sad history, culture, Vojvodina, European Capital of Culture, tourist attractions, Fruska Gora'
          }
        />

        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/juzno-backi/novi-sad`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/juzno-backi/novi-sad"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/juzno-backi/novi-sad"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/juzno-backi/novi-sad"
        />
      </Helmet>

      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft
          className="arrowLeft"
          onClick={() => navigate(JuznoBackiPathRoutes.home(switchLanguage))}
        />
        <header></header>
        <img srcSet={`${NS11} 450w, ${NS1} `} alt="Novi Sad 1" />

        <h2>Novi Sad</h2>

        {switchLanguage === 'rs' ? (

          <>

            <section lang="sr">
              <p>
                Grad leži na obalama reke Dunav, između 1252. i 1262. kilometra rečnog
                toka.
              </p>
              <p>
                Na levoj obali Dunava se nalazi ravničarski deo grada (
                <strong>Bačka</strong>), dok je na desnoj obali, na obroncima{" "}
                <strong>Fruške gore</strong>, smešten brdoviti deo grada (
                <strong>Srem</strong>).
              </p>
              <p>
                Nadmorska visina sa bačke strane je od 72 do 80 m, dok se sa sremske
                strane kreće između 250 i 350 m.
              </p>
              <p>
                Kod Novog Sada se u Dunav (sa leve strane reke) uliva{" "}
                <strong>Mali bački kanal</strong>, koji je deo sistema kanala{" "}
                <em>Dunav—Tisa—Dunav</em>.
              </p>
              <p>Bački deo grada je smešten sa obe strane ovog kanala.</p>
            </section>

            <img srcSet={`${NS33} 450w, ${NS3} `} alt="Novi Sad 2" />

            <section lang="sr">
              <p>
                Osnovan 1694. godine, Novi Sad je dugo vremena bio centar srpske
                kulture, zbog čega je često nazivan <strong>Srpska Atina</strong>.
                Danas je veliki industrijski i finansijski centar srpske ekonomije,
                univerzitetski, školski, kulturni, naučni, zdravstveni i politički
                centar Vojvodine, grad domaćin mnogih međunarodnih i domaćih
                privrednih, kulturnih, naučnih i sportskih manifestacija, kao i grad
                muzeja, galerija, biblioteka i pozorišta. Novi Sad je biran za{" "}
                <strong>evropsku prestonicu mladih</strong>
                (2019) i <strong>evropsku prestonicu kulture</strong> (2022), a takođe
                je uvršten na
                <em> Uneskovu listu kreativnih gradova</em> (2023).
              </p>
            </section>

            <img srcSet={`${NS44} 450w, ${NS4} `} alt="Novi Sad 3" />

            <section lang="sr">
              <p>
                Ukoliko se izuzme Petrovaradinska tvrđava sa okolinom, gde su nađeni
                tragovi iz skoro svih epoha, od praistorije, preko vremena dominacije
                Rima i potom srednjeg veka, sa bačke strane ima više lokacija
                raštrkanih nalazišta koja pokazuju da su ovde stalno osnivana nova
                naselja. Tako je na Klisi otkriveno naselje zemunica iz bronzanog i
                gvozdenog doba, a na mestu Temerinske petlje, kada su tu izvođeni
                radovi 1981. godine, nađeni su ostaci iz raznih vremenskih perioda, od
                paleolita do danas, konstatovano je postojanje nekropole starčevačke
                kulture i nađeni su tragovi velikog srednjovekovnog sela.
              </p>
            </section>

            <img srcSet={`${NS22} 450w, ${NS2} `} alt="Petrovaradinska tvrđava" />

            <section lang="sr">
              <p>
                <strong>Petrovaradinska tvrđava</strong> je verovatno najprepoznatljivija znamenitost
                Novog Sada. Smeštena na desnoj obali Dunava, ova impresivna tvrđava iz
                <strong>17. veka</strong> poznata je po svom opsežnom kompleksu, uključujući podzemne
                hodnike, vojnu arhitekturu, kao i prelepim pogledima na Novi Sad.
                Tvrđava je domaćin <strong>Exit festivala</strong>, jednom od najpoznatijih muzičkih
                festivala u Evropi. U okviru tvrđave se nalazi <strong>Sat kula</strong>, koja je
                specifična po tome što njen sat ima različite kazaljke za vreme za
                brodove i za pešake.
              </p>

            </section>

            <img srcSet={`${NS77} 450w, ${NS7} `} alt="Petrovaradinska tvrđava" />

            <section lang="sr">
              <p>
                <strong>Gradska kuća</strong> je zgrada u Novom Sadu koja predstavlja sedište
                gradonačelnika ovog grada. Nalazi se na <strong>Trgu Slobode</strong>. Iako se iz
                današnje zgrade gradom upravlja nešto više od 100 godina, institucija
                <strong>Magistrata</strong> stara je koliko i status slobodne kraljevske varoši, od 1748.
                godine. Pre nego što je Novi Sad dobio status slobodnog grada,
                <strong>Petrovaradinski šanac</strong> bio je pod civilnom (<em>kameralnom</em>) i vojnom
                (<em>militarnom</em>) upravom. Granica između ova dva dela uprave išla je
                današnjom <strong>Dunavskom ulicom</strong>. Vojnim delom upravljao je <em>oberkapetan</em>, koga
                su postavljale vojne vlasti u Petrovaradinu (najpoznatiji je bio
                zloglasni kapetan <strong>Sekula Vitković</strong>), dok je civilnim delom grada
                upravljao sudija, naizmenično Srbin i Nemanac. Nakon ukidanja <strong>Vojne
                  granice</strong>, grad je potpao pod civilnu upravu sudija sve do 7. decembra
                1788. godine, kada je dobio svog prvog gradonačelnika. Sudija je i dalje
                predsedavao gradskim sudom i upravljao pravnim poslovima, dok je
                gradonačelnik vodio <strong>Ekonomski odbor</strong>, bavio se vojnim i finansijskim
                pitanjima, i u saradnji sa šefom policije, brinuo o bezbednosti grada.
                Pravilo koje nije uvek bilo striktno poštovano bilo je da ako je sudija
                bio katolik, gradonačelnik mora biti Srbin i obrnuto. Prvi gradonačelnik
                Novog Sada bio je <strong>Dimitrije Bugarcki</strong>, dotadašnji senator koji je dva
                puta bio biran na funkciju načelnika grada. Najpoznatiji novosadski
                gradonačelnik bio je <strong>Svetozar Miletić</strong> (1861/62. i 1867.).
              </p>

            </section>

            <img srcSet={`${NS55} 450w, ${NS5} `} alt="Novi Sad 5" />

            <section lang="sr">
              <p>
                <strong>Srpska Atina</strong> je sinonim Novog Sada. Tokom <em>habsburške uprave</em>, Srbi u Novom Sadu su vodili živu političku i kulturnu borbu, a svoj kulturni procvat grad je doživeo u drugoj polovini 19. veka kada dobija ovaj laskavi naziv. Time je iskazana sličnost sa kulturnim i naučnim centrom antičkog sveta, grčkom Atinom. Novi Sad je središte gotovo svekolikog političkog, književnog, prosvetnog i kulturnog života Srba. To je doba velikog srpskog nacionalnog poleta u svim pravcima, poleta kojim je Novi Sad davao ton i određivao pravac.
              </p>

            </section>

            <img srcSet={`${NS66} 450w, ${NS6} `} alt="Novi Sad 6" />

            <section lang="sr">
              <p>
                Prvobitna imena Novog Sada bila su <strong>Racko (Srpsko) selo</strong>, <strong>Racka varoš</strong>, <strong>Racki grad</strong> (<em>Ratzen Stadt, Ratzenstatt</em>) i <strong>Petrovaradinski šanac</strong> (<em>Peterwardeiner Schantz</em>), dok ime <strong>Novi Sad</strong> (<em>Neoplanta, Neusatz, Újvidék</em>) datira iz 1748. godine. Manojlo Grbić u prvoj knjizi sa naslovom <em>"Karlovačko vladičanstvo"</em> na strani 288. piše: „U jesen 1722. držan je narodni Sabor u Varadinskom Šancu, a to je u današnjem Novom Sadu.”
              </p>

            </section>
          </>
        ) : (
          <><section lang="en">
            <p>
              The city lies on the banks of the Danube River, between the 1252nd and 1262nd kilometer of its course.
            </p>
            <p>
              On the left bank of the Danube is the flat part of the city (<strong>Bačka</strong>), while on the right bank, on the slopes of <strong>Fruška Gora</strong>, lies the hilly part of the city (<strong>Srem</strong>).
            </p>
            <p>
              The elevation on the Bačka side ranges from 72 to 80 meters, while on the Srem side it varies between 250 and 350 meters.
            </p>
            <p>
              Near Novi Sad, the <strong>Little Bačka Canal</strong> flows into the Danube ( from the left side of the river).It is part of the <em>Danube–Tisa–Danube</em> canal system.
            </p>
            <p>
              The Bačka part of the city is located on both sides of this canal.
            </p>
          </section>
            <img srcSet={`${NS33} 450w, ${NS3} `} alt="Novi Sad 2" />
            <section lang="en">
              <p>
                Founded in 1694, Novi Sad was for a long time the center of Serbian culture, which is why it was often called the <strong>Serbian Athens</strong>.
                Today, it is a major industrial and financial hub of the Serbian economy, as well as a university, educational, cultural, scientific, healthcare, and political center of Vojvodina.
                The city hosts numerous international and domestic economic, cultural, scientific, and sports events, and is also a city of museums, galleries, libraries, and theaters.
                Novi Sad was named the <strong>European Youth Capital</strong> (2019) and the <strong>European Capital of Culture</strong> (2022), and was also included on
                the <em>UNESCO Creative Cities list</em> (2023).
              </p>
            </section>
            <img srcSet={`${NS44} 450w, ${NS4} `} alt="Novi Sad 3" />
            <section lang="en">
              <p>
                Excluding the Petrovaradin Fortress and its surroundings, where traces from nearly all historical periods have been found — from prehistory, through the Roman era, to the Middle Ages — the Bačka side features several scattered archaeological sites indicating the continuous founding of new settlements in the area.
                For example, a settlement of pit houses from the Bronze and Iron Ages was discovered in Klisa, while at the site of the Temerinska Interchange, during construction work in 1981, remains from various time periods were found — from the Paleolithic to the present day.
                Evidence of a necropolis from the Starčevo culture was confirmed, along with traces of a large medieval village.
              </p>
            </section>
            <img srcSet={`${NS22} 450w, ${NS2} `} alt="Petrovaradinska tvrđava" />
            <section lang="en">
              <p>
                The <strong>Petrovaradin Fortress</strong> is probably the most recognizable landmark of Novi Sad. Located on the right bank of the <strong>Danube</strong>, this impressive <em>17th-century fortress</em> is known for its extensive complex, including underground tunnels, military architecture, and stunning views of Novi Sad.
                The fortress is home to the <strong>EXIT Festival</strong>, one of the most renowned music festivals in Europe.
                Within the fortress stands the <strong>Clock Tower</strong>, notable for its unique clock with hands that show different times for <em>river traffic</em> and <em>pedestrians</em>.
              </p>

            </section>
            <img srcSet={`${NS77} 450w, ${NS7} `} alt="Petrovaradinska tvrđava" />
            <section lang="en">
              <p>
                The <strong>City Hall</strong> is a building in Novi Sad that serves as the seat of the city's mayor. It is located on <strong>Liberty Square</strong>. Although the city has been governed from the current building for just over 100 years, the institution of the <strong>Magistrate</strong> dates back to the year <strong>1748</strong>, when Novi Sad was granted the status of a <em>free royal city</em>.
                Before Novi Sad gained this status, the <strong>Petrovaradin Šanac (Trench)</strong> was under both civil (<em>chamber</em>) and military (<em>military</em>) administration. The boundary between these two jurisdictions followed today’s <strong>Dunavska Street</strong>. The military part was governed by the <em>oberkapetan</em>, appointed by the military authorities in Petrovaradin (the most infamous being Captain <strong>Sekula Vitković</strong>), while the civil part was governed by a judge, who alternated between being a Serb and a German.
                After the <strong>Military Frontier</strong> was abolished, the city came under the full control of the civil judges until <strong>December 7, 1788</strong>, when it received its first mayor. The judge continued to preside over the city court and manage legal affairs, while the mayor led the <strong>Economic Council</strong>, handled military and financial matters, and, in cooperation with the chief of police, took care of the city’s security.
                A rule that was not always strictly followed stated that if the judge was Catholic, the mayor had to be a Serb, and vice versa. The first mayor of Novi Sad was <strong>Dimitrije Bugarcki</strong>, a former senator who had twice been elected as the city’s head. The most famous mayor of Novi Sad was <strong>Svetozar Miletić</strong> (<em>1861/62 and 1867</em>).
              </p>

            </section>
            <img srcSet={`${NS55} 450w, ${NS5} `} alt="Novi Sad 5" />
            <section lang="en">
              <p>
                "<strong>Serbian Athens</strong>" is a synonym for Novi Sad. During the <em>Habsburg rule</em>, Serbs in Novi Sad engaged in a lively political and cultural struggle, and the city experienced its cultural flourishing in the second half of the 19th century when it earned this flattering title. This name expressed the similarity to the cultural and scientific center of the ancient world, <strong>Greek Athens</strong>. Novi Sad was the center of almost all political, literary, educational, and cultural life of the Serbs. It was an era of great Serbian national enthusiasm in all directions, an enthusiasm with which Novi Sad set the tone and determined the course.
              </p>

            </section>
            <img srcSet={`${NS66} 450w, ${NS6} `} alt="Novi Sad 6" /><section lang="en">

              <p>
                The original names of Novi Sad were <strong>Racko (Serbian) village</strong>, <strong>Racka town</strong>, <strong>Racki grad</strong> (<em>Ratzen Stadt, Ratzenstatt</em>), and <strong>Petrovaradin Šanac</strong> (<em>Peterwardeiner Schantz</em>), while the name <strong>Novi Sad</strong> (<em>Neoplanta, Neusatz, Újvidék</em>) dates back to <strong>1748</strong>.
                Manojlo Grbić writes in his first book titled <em>"The Eparchy of Karlovci"</em> on page 288: "<em>In the autumn of 1722, a people's assembly was held in Varadin Šanac, which is present-day Novi Sad.</em>"
              </p>
            </section>
          </>
        )}
      </div>
    </>
  );
};


export default NoviSad;