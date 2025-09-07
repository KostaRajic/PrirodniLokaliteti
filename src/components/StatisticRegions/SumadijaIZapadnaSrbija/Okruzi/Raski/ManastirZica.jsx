/* eslint-disable react/no-unknown-property */
/* eslint-disable no-useless-escape */
import zica1 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RaskiOkrug/ManastirZica/desktop/zica1.jpg";
import zica2 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RaskiOkrug/ManastirZica/desktop/zica2.jpg";
import zica3 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RaskiOkrug/ManastirZica/desktop/zica3.jpg";
import zica4 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RaskiOkrug/ManastirZica/desktop/zica4.jpg";
import zica5 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RaskiOkrug/ManastirZica/desktop/zica5.jpg";
import zica11 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RaskiOkrug/ManastirZica/mobile/Mzica1.jpg";
import zica22 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RaskiOkrug/ManastirZica/mobile/Mzica2.jpg";
import zica33 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RaskiOkrug/ManastirZica/mobile/Mzica3.jpg";
import zica44 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RaskiOkrug/ManastirZica/mobile/Mzica4.jpg";
import zica55 from "../../../../../assets/images/SumadijaIZapadnaSrbija/RaskiOkrug/ManastirZica/mobile/Mzica5.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { raskiOkrugPathRoutes } from "./RaskiOkrugPathRoutes";
import { useContextAuth } from "../../../../../Context";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const ManastirZica = () => {
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
            ? "Manastir Žiča – Prva srpska arhiepiskopija i mesto krunisanja | Srbija Wonders"
            : "Žiča Monastery – First Serbian Archbishopric and Coronation Site | Serbia Wonders"}
        </title>

        <meta
          name="description"
          content={
            switchLanguage === 'rs'
              ? "Manastir Žiča, zadužbina Stefana Prvovenčanog i Svetog Save, bio je sedište prve srpske arhiepiskopije i mesto krunisanja srpskih kraljeva. Jedan od najznačajnijih manastira srednjovekovne Srbije."
              : "Žiča Monastery, founded by Stefan the First-Crowned and Saint Sava, served as the seat of the first Serbian archbishopric and the coronation site of Serbian kings. One of the most important medieval Serbian monasteries."}
        />

        <meta
          name="keywords"
          content={
            switchLanguage === 'rs'
              ? "Manastir Žiča, Sveti Sava, Stefan Prvovenčani, srpska arhiepiskopija, krunisanje kraljeva, srednjovekovni manastiri, srpsko pravoslavlje, kulturna baština Srbije"
              : "Žiča Monastery, Saint Sava, Stefan the First-Crowned, Serbian Archbishopric, coronation of kings, medieval monasteries, Serbian Orthodoxy, cultural heritage of Serbia"}
        />

        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/sumadija-tekst-modal/sumadija-i-zapadna-srbija/raski-okrug/manastir-zica`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/sumadija-tekst-modal/sumadija-i-zapadna-srbija/raski-okrug/manastir-zica"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/sumadija-tekst-modal/sumadija-i-zapadna-srbija/raski-okrug/manastir-zica"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/sumadija-tekst-modal/sumadija-i-zapadna-srbija/raski-okrug/manastir-zica"
        />

      </Helmet>


      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft className="arrowLeft" onClick={() => navigate(raskiOkrugPathRoutes.home(switchLanguage))} />
        <header></header>
        <img srcSet={`${zica33} 450w, ${zica3} `} alt="Manastir Žiča 1" />

        {switchLanguage === 'rs' ?
          (
            <>

              <h2 style={{ color: "white" }}>Manastir Žiča</h2>

              <section lang="sr">

                <p>
                  U prelepoj dolini <strong>Ibra</strong> i <strong>Raške</strong>, nedaleko od današnjeg grada <strong>Kraljeva</strong>,
                  nalazi se manastir <strong>Žiča</strong>. Mesto na kojem je podignut ovaj manastir,
                  unutar srednjovekovne srpske države, odabrano je pod uticajem važnih
                  državnih, političkih i privrednih faktora. Čvršće organizaciono
                  povezivanje teritorija koje je <strong>Nemanjić</strong> samo nešto ranije pripojio
                  <strong>Raškoj</strong> i neposredna eksploatacija plodnih područja koja su tada bila
                  dodeljena <em>Crkvi na korišćenje i upravljanje</em> svakako su bili među
                  osnovnim razlozima. Manastir Žiča je osnovan sa jasnom namerom da
                  postane sedište <strong>Arhiepiskopije</strong>, gde će se <em>krunisati kraljevi</em> i
                  postavljati arhiepiskopi <strong>Srpske Pravoslavne Crkve</strong>. Arhiepiskopija je
                  trebalo da bude podjednako udaljena od vizantijskog <strong>Carigrada</strong> i
                  latinskog <strong>Rima</strong>. Osim toga, među velikim srpskim manastirima, Žiča je
                  tada bila najudaljenija od eventualnih opasnosti koje su dolazile sa
                  jugoistoka, bilo od križarskog latinskog carstva ili od <strong>Bugarske</strong>.
                  Priroda u kojoj se nalazi Žiča nije samo lepa, već je i bogata.
                  Ekonomski razlozi da se tu osnuje Arhiepiskopija nisu bili manje
                  presudni od razloga bezbednosti. Samo ime <strong>Žiča</strong> govori o kraju koji je
                  bogat žitom.
                </p>
              </section>

              <img srcSet={`${zica22} 450w, ${zica2}`} alt="Manastir Žiča 2" />

              <section lang="sr">
                <p>
                  Tačno vreme izgradnje manastira Žiče nije zabeleženo u izvorima, pa je
                  utvrđeno posrednim putem na osnovu podataka koje donose <strong>Domentijan</strong> i
                  <strong>Teodosije</strong>, biografi <strong>Svetog Save</strong>. Oni beleže da je gradnju <em>Spasovog doma</em>
                  započeo <strong>Stefan Nemanjić</strong> još kao veliki župan, u vreme kada je njegov
                  mlađi brat bio starešina <strong>Studenice</strong>. Sava je, prema rečima Teodosija,
                  nadgledao zidanje Spasovog hrama. Na osnovu tih podataka zaključuje se
                  da je Žiča podignuta u periodu od 1206. do Savinog odlaska u <strong>Hilandar</strong>
                  1217. godine. Izgradnja novog sedišta srpskog arhiepiskopa trajala je
                  dosta dugo. Radovi su ubrzani nakon 1219. godine kada je, zahvaljujući
                  <strong>Svetom Savi</strong>, dobijena samostalnost Srpske Pravoslavne Crkve, i Žiča je
                  postala sedište srpske Arhiepiskopije. Naime, kao arhimandrit Studenice,
                  Sveti Sava je 1219. krenuo u <strong>Nikeju</strong>, tadašnju prestonicu <em>Vaseljenskog Patrijarha</em>. Patrijarh <strong>Manojlo Saranten Haritopul</strong> i car <strong>Teodor I Laskaris</strong>
                  dodeljuju arhimandritu Savi Akt o autokefalnosti Srpske Crkve,
                  hirotonisući ga na <strong>Cveti</strong> 1219. godine za prvog srpskog arhiepiskopa.
                  Među prvim poslovima koje je Sava obavio po povratku iz Nikeje bilo je
                  dovršenje manastira Žiče. On se, već prvih dana po dolasku, dogovarao sa
                  svojim bratom <strong>Stefanom</strong> šta treba "za završetak Svete velike
                  Arhiepiskopije, koju od početka začese sa velikom ljubavlju". U Žiči je
                  već 1220. godine arhiepiskop Sava hirotonisao osmoro episkopa.
                </p>

              </section>

              <img srcSet={`${zica11} 450w, ${zica1}`} alt="Manastir Žiča 3" />

              <section lang="sr">

                <p>
                  Najstariji istorijski izvori o manastiru Žiča su dve povelje kralja
                  <strong>Stefana</strong> i njegovog sina <strong>Radoslava</strong>, iz druge i treće dekade XIII veka,
                  prepisane u XIV veku na zidove prolaza, ispod kule na ulazu u crkvu. U
                  osnivačkoj povelji poimenično su navedeni darovi i povlastice koje je
                  Žičkoj Eparhiji dao <strong>Prvovenčani kralj</strong> sa svojim najstarijim sinom,
                  određenim za njegovog naslednika. Kralj daruje Spasovu crkvu, na prvom
                  mestu, relikvijama, zatim freskama i ikonama, zlatnim i srebrnim
                  posudama, ripidama, pokrovima i zavesama, bogoslužbenim odeždama,
                  Evanđeljima i knjigama. Od tih ikona i posuda, od tkanina i knjiga, koje
                  su morale činiti Žiču jednom od najbogatijih riznica u Srbiji, a možda i
                  na jugoistoku Evrope, danas ne postoji ni trag – gotovo sve su uništene.
                </p>
              </section>

              <img srcSet={`${zica44} 450w, ${zica4}`} alt="Manastir Žiča 4" />

              <section lang="sr">
                <p>
                  Najveći deo Žičke povelje sadrži podatke o darovima u zemljišnom posedu.
                  <strong>Prvovenčani kralj</strong> je Žiči darovao 57 sela i zaselaka, što znači više od
                  hiljadu hektara zemlje i nekoliko hiljada ljudi koji su obrađivali
                  zemlju ili se bavili zanatom. Glavna grupa darovanih sela bila je u
                  neposrednoj blizini Žiče, u <strong>Hvosnu</strong>, u <strong>Crnoj Gori</strong>. Zanimljivo je da i
                  danas, nakon osam vekova, 38 od tih sela nosi ista imena. Uz plodnu
                  zemlju u ravnici, manastir Žiča je osnivačkom poveljom dobio i osam
                  planina sa 217 pastirskih porodica. Žiči su pripadale kao pašnjaci
                  planine <strong>Željin</strong>, <strong>Kotlenik</strong>, <strong>Slane poljane</strong>, <strong>Javorje</strong> i <strong>Lukovica</strong>.
                  Vladari koji su nasledili Stefana Prvovenčanog darivali su Arhiepiskopiju
                  imanjima na <strong>Kosovu</strong> i <strong>Drenici</strong>. Od sredine XIII veka, Arhiepiskop je
                  raspolagao i tvrđavom koja je u slučaju opasnosti mogla da štiti
                  arhiepiskopske dragocenosti i svetišta, arhivu i biblioteku. Bio je to
                  grad <strong>Maglič</strong>, utvrđeni dvorski kompleks podignut na dvadesetak kilometara
                  od Žiče. U njemu se i danas vide ostaci arhiepiskopske palate i crkve
                  <strong>Svetog Đorđa</strong>.
                </p>
              </section>

              <img srcSet={`${zica55} 450w, ${zica5}`} alt="Manastir Žiča 5" />

              <section lang="sr">

                <p>
                  Crkva nove Arhiepiskopije, na kojoj je s puno truda, a pre svega
                  ljubavi, radilo, nije imala sreće da ostane netaknuta. Stradala je već
                  krajem XIII veka. Tada je manastir Žiča bio zapaljen i opustošen.
                  Verovatno se radilo o napadu braće <strong>Drmana</strong> i <strong>Kudelina</strong>, gospodara
                  <strong>Braničeva</strong>, koji su sa <strong>Tatarima</strong> i <strong>Kumanima</strong> pustošili Srbiju.
                  Arhiepiskopija je prebačena u <strong>Peć</strong>. <br /><br /> Opustošenu Žiču obnovio je
                  Arhiepiskop <strong>Jevstatije II</strong> (1292. - 1309.), a najveći posao bio je obnova
                  i živopisanje Spasove crkve. Međutim, Žiča je bila toliko uništena od
                  strane stranih pljačkaša da više nikada, ni posle svih obnovenih radova,
                  nije povratila svoj prvobitni sjaj. I Jevstatijev naslednik, <strong>Sava III</strong>
                  (1309. - 1316.), zajedno sa kraljem <strong>Milutinom</strong>, obnovio je najveći deo
                  živopisa.<br /><br /> Sve do 1459. godine život manastira Žiča tekao je normalno, a
                  sredinom XVI veka njegovi monasi napuštaju manastir, spasavajući se u
                  krajevima preko reke Save. Godine 1562. mitropolit smederevski <strong>Zaharije</strong>
                  zatiče manastir pust. Za monahe on podiže kletije, te je do kraja XVIII
                  veka manastir ponovo nastanjen.<br /><br /> Prema jednom spisku manastira u
                  Beogradskom pašaluku i okolini, koji je mogao nastati između 1804. i
                  1805. godine, Žiča je bila uvrštena među zapuštene manastire. <strong>Karađorđe</strong>
                  je posetio manastir 1806. godine i tada je obećao da će ga obnoviti, što
                  je i učinio podižući kletije sa četiri sprata. Tokom ustanka (1804. -
                  1813.) žički monasi su učestvovali u bojevima protiv Turaka, a nakon
                  sloma ustanka, manastir je ponovo stradao. Pola veka je stajao razoren,
                  kada je po odluci <strong>Svetog Sinoda</strong> iz 1854. godine, episkop <strong>šabački Joanikije Nešković</strong>
                  premesten na praznu Eparhiju žičku i započeo radove na obnovi manastira.
                  Sve do 1928. godine to je bio najveći obim radova
                  na njegovoj obnovi.
                </p>
              </section>

            </>
          )
          :
          (
            <>

              <h2 style={{ color: "white" }}>Žiča Monastery</h2>

              <section lang="en">
                <p> In the beautiful valley of the <strong>Ibar</strong> and <strong>Raška</strong> rivers, not far from the present-day city of <strong>Kraljevo</strong>, lies the <strong>Žiča</strong> Monastery. The location where this monastery was built, within the medieval Serbian state, was chosen under the influence of important state, political, and economic factors. The closer organizational connection of territories that <strong>Nemanjić</strong> had recently annexed to <strong>Raška</strong> and the direct exploitation of fertile lands that were then granted to the <em>Church for use and management</em> were certainly among the main reasons. The Žiča Monastery was founded with the clear intention of becoming the seat of the <strong>Archbishopric</strong>, where kings would be <em>crowned</em> and archbishops of the <strong>Serbian Orthodox Church</strong> would be appointed. The Archbishopric was intended to be equally distant from the Byzantine <strong>Constantinople</strong> and Latin <strong>Rome</strong>. Additionally, among the great Serbian monasteries, Žiča was at that time the farthest from potential dangers coming from the southeast, whether from the Crusader Latin Empire or from <strong>Bulgaria</strong>. The nature surrounding Žiča is not only beautiful but also rich. Economic reasons for establishing the Archbishopric here were no less decisive than reasons of security. The very name <strong>Žiča</strong> speaks of a region rich in grain. </p>
              </section>

              <img srcSet={`${zica22} 450w, ${zica2}`} alt="Žiča Monastery 2" />

              <section lang="en">
                <p> The exact time of the construction of the Žiča Monastery is not recorded in sources, so it was determined indirectly based on information provided by <strong>Domentijan</strong> and <strong>Teodosije</strong>, biographers of <strong>Saint Sava</strong>. They note that the construction of the <em>Spasov Dom</em> was started by <strong>Stefan Nemanjić</strong> while he was still the Grand Župan, at a time when his younger brother was the head of <strong>Studenica</strong>. According to Teodosije, Sava supervised the building of the Spasov temple. Based on this information, it is concluded that Žiča was built between 1206 and Sava's departure to <strong>Hilandar</strong> in 1217. The construction of the new seat of the Serbian archbishop lasted quite long. The work accelerated after 1219 when, thanks to <strong>Saint Sava</strong>, the Serbian Orthodox Church gained autonomy, and Žiča became the seat of the Serbian Archbishopric. Namely, as the archimandrite of Studenica, Saint Sava went in 1219 to <strong>Nicaea</strong>, then the capital of the <em>Ecumenical Patriarch</em>. Patriarch <strong>Manuel Saranten Charitopoulos</strong> and Emperor <strong>Theodore I Laskaris</strong> granted archimandrite Sava a Charter of autocephaly for the Serbian Church, consecrating him on <strong>Palm Sunday</strong> 1219 as the first Serbian archbishop. Among the first tasks Sava performed after returning from Nicaea was the completion of the Žiča Monastery. Upon arrival, he immediately discussed with his brother <strong>Stefan</strong> what was needed "to finish the Holy Great Archbishopric, which from the beginning was founded with great love." In Žiča, already in 1220, Archbishop Sava consecrated eight bishops. </p>
              </section>

              <img srcSet={`${zica11} 450w, ${zica1}`} alt="Žiča Monastery 3" />

              <section lang="en">
                <p> The oldest historical sources about the Žiča Monastery are two charters of King <strong>Stefan</strong> and his son <strong>Radoslav</strong>, from the second and third decades of the 13th century, copied in the 14th century on the walls of the passage below the tower at the entrance to the church. In the founding charter, the gifts and privileges given to the Žiča Eparchy by the <strong>First-Crowned King</strong> and his eldest son, designated as his heir, are listed by name. The king donated the Spasov Church, first and foremost, relics, then frescoes and icons, gold and silver vessels, ripidia, covers and curtains, liturgical vestments, Gospels and books. From those icons and vessels, from textiles and books, which must have made Žiča one of the richest treasuries in Serbia, and perhaps in southeastern Europe, today there remains no trace — almost everything was destroyed. </p>
              </section>

              <img srcSet={`${zica44} 450w, ${zica4}`} alt="Žiča Monastery 4" />

              <section lang="en">
                <p> Most of the Žiča charter contains data about gifts of landed property. The <strong>First-Crowned King</strong> gave Žiča 57 villages and hamlets, meaning more than a thousand hectares of land and several thousand people who cultivated the land or worked in crafts. The main group of donated villages was in the immediate vicinity of Žiča, in <strong>Hvosno</strong>, in <strong>Montenegro</strong>. Interestingly, even today, after eight centuries, 38 of those villages still bear the same names. Along with fertile lowland land, the Žiča Monastery was granted by the founding charter eight mountains with 217 shepherd families. The monastery had as pastures the mountains of <strong>Željin</strong>, <strong>Kotlenik</strong>, <strong>Slane Poljane</strong>, <strong>Javorje</strong>, and <strong>Lukovica</strong>. The rulers who succeeded Stefan the First-Crowned also donated properties to the Archbishopric in <strong>Kosovo</strong> and <strong>Drenica</strong>. From the mid-13th century, the Archbishop also controlled a fortress that could protect the archbishopric’s treasures and sanctuaries, archives, and library in case of danger. It was the town of <strong>Maglič</strong>, a fortified court complex built about twenty kilometers from Žiča. Remains of the archbishop’s palace and the church of <strong>Saint George</strong> can still be seen there today. </p>
              </section>

              <img srcSet={`${zica55} 450w, ${zica5}`} alt="Žiča Monastery 5" />

              <section lang="en">
                <p> The church of the new Archbishopric, built with great effort and, above all, love, did not have the luck to remain intact. It was damaged already at the end of the 13th century. At that time, the Žiča Monastery was burned and devastated. It probably happened during an attack by the brothers <strong>Drman</strong> and <strong>Kudelin</strong>, lords of <strong>Braničevo</strong>, who with <strong>Tatars</strong> and <strong>Cumans</strong> ravaged Serbia. The Archbishopric was transferred to <strong>Peć</strong>.<br /><br /> The devastated Žiča was restored by Archbishop <strong>Jevstatije II</strong> (1292–1309), and the main task was the restoration and painting of the Spasov Church. However, Žiča had been so thoroughly destroyed by foreign plunderers that, even after all the restored works, it never regained its original splendor. Jevstatije’s successor, <strong>Sava III</strong> (1309–1316), together with King <strong>Milutin</strong>, restored most of the frescoes.<br /><br /> Until 1459, the life of the Žiča Monastery proceeded normally, but by the mid-16th century its monks abandoned the monastery, saving themselves in the regions across the Sava River. In 1562, Metropolitan of Smederevo <strong>Zaharije</strong> found the monastery deserted. He built monastic cells for the monks, so by the end of the 18th century, the monastery was resettled.<br /><br /> According to a list of monasteries in the Belgrade Pashaluk and its surroundings, which may have been created between 1804 and 1805, Žiča was listed among the abandoned monasteries. <strong>Karađorđe</strong> visited the monastery in 1806 and promised to restore it, which he did by building cells with four floors. During the uprising (1804–1813), Žiča’s monks took part in fights against the Turks, and after the defeat of the uprising, the monastery suffered damage again. It stood ruined for half a century, until, by decision of the <strong>Holy Synod</strong> in 1854, Bishop <strong>Joanikije Nešković of Šabac</strong> was transferred to the vacant Žiča Eparchy and began restoration work. Until 1928, this was the largest scope of restoration efforts on the monastery. </p>
              </section>

            </>
          )}

      </div>
    </>
  );
};


export default ManastirZica;