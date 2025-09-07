/* eslint-disable react/no-unknown-property */
import jazak1 from "../../../../../assets/images/Vojvodina/SremskiOkrug/ManastirJazak/desktop/jazak2.jpg";
import jazak2 from "../../../../../assets/images/Vojvodina/SremskiOkrug/ManastirJazak/desktop/jazak3.jpg";
import jazak3 from "../../../../../assets/images/Vojvodina/SremskiOkrug/ManastirJazak/desktop/jazak4.jpg";
import jazak4 from "../../../../../assets/images/Vojvodina/SremskiOkrug/ManastirJazak/desktop/jazak5.jpg";
import jazak5 from "../../../../../assets/images/Vojvodina/SremskiOkrug/ManastirJazak/desktop/jazak6.jpg";
import jazak11 from "../../../../../assets/images/Vojvodina/SremskiOkrug/ManastirJazak/mobile/Mjazak2.jpg";
import jazak22 from "../../../../../assets/images/Vojvodina/SremskiOkrug/ManastirJazak/mobile/Mjazak3.jpg";
import jazak33 from "../../../../../assets/images/Vojvodina/SremskiOkrug/ManastirJazak/mobile/Mjazak4.jpg";
import jazak44 from "../../../../../assets/images/Vojvodina/SremskiOkrug/ManastirJazak/mobile/Mjazak5.jpg";
import jazak55 from "../../../../../assets/images/Vojvodina/SremskiOkrug/ManastirJazak/mobile/Mjazak6.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useFetcher, useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { sremskiOkrugPathRoutes } from "./SremskiOkrugPathRoutes";
import { useContextAuth } from "../../../../../Context";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const ManastirJazak = () => {
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
            ? 'Manastir Jazak na Fruškoj gori | Sveti car Uroš | Serbia Wonders'
            : 'Jazak Monastery on Fruška Gora | Saint Emperor Uroš | Serbia Wonders'}
        </title>

        <meta
          name="description"
          content={
            switchLanguage === 'rs'
              ? 'Manastir Jazak, smešten na Fruškoj gori, poznat je po netruležnim moštima svetog cara Uroša, bogatoj istoriji i kulturnom nasleđu. Jedan je od najznačajnijih srpskih manastira.'
              : 'Jazak Monastery, located on Fruška Gora, is known for the incorrupt relics of Saint Emperor Uroš, its rich history, and cultural heritage. One of the most significant Serbian monasteries.'
          }
        />

        <meta
          name="keywords"
          content={
            switchLanguage === 'rs'
              ? 'Manastir Jazak, Fruška gora, srpski manastiri, Sveti car Uroš, kulturno nasleđe Srbije, pravoslavni manastiri, istorija Srba, Jazak monasi, manastiri Vojvodina, duhovni turizam, sakralna arhitektura'
              : 'Jazak Monastery, Fruška Gora, Serbian monasteries, Saint Emperor Uroš, Serbian cultural heritage, Orthodox monasteries, Serbian history, Vojvodina monasteries, spiritual tourism, sacred architecture'
          }
        />

        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/sremski-okrug/manastir-jazak`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/sremski-okrug/manastir-jazak"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/sremski-okrug/manastir-jazak"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/kosovo-i-metohija-tekst-modal/kosovo-i-metohija/sremski-okrug/manastir-jazak"
        />
      </Helmet>


      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft
          className="arrowLeft"
          onClick={() => navigate(sremskiOkrugPathRoutes.home(switchLanguage))}
          style={{ fill: "white" }}
        />
        <header></header>
        <img srcSet={`${jazak11} 450w, ${jazak1} `} alt="Manastir Jazak 1" />

        {switchLanguage === 'rs' ?
          (
            <>
              <h2 style={{ color: "white" }}>Manastir Jazak</h2>

              <section lang="sr">
                <p>
                  Prema crkvenom predanju, manastir <strong>Jazak</strong> osnovao je despot <strong>Jovan</strong>, mlađi sin <em>Stefana Slepog</em> i <em>Angeline Branković</em>.
                </p>
                <p>
                  Prvi siguran zapis o ovom manastiru nalazi se u rukopisnom <em>"Triodu"</em> jazačkog monaha <strong>Lavrentija</strong> iz <strong>1522. godine</strong>.
                </p>
                <p>
                  U <em>turskim katastarskim defterima</em>, manastir se pominje u periodima <strong>1545–1548</strong>, <strong>1566–1569</strong> i <strong>1578. godine</strong>, uz napomene o slaboj manastirskoj ekonomiji u to vreme.
                </p>
                <p>
                  <strong>Mata Kosovac</strong>, u svom <em>"Šematisimu"</em> iz <strong>1910. godine</strong>, navodi da je u blizini manastira postojala i <em>ženska monaška zajednica</em>, što se može videti iz starih ikona i letopisa.
                </p>
                <p>
                  Smatra se da je prvi manastir, koji je uključivao <em>freskopisanu kamenu crkvu</em> i dva skromna konaka (kameni i drveni, pokriveni <em>hrastovom šindrom</em> i <em>šašom</em>), bio veoma siromašan.
                </p>
                <p>
                  Imao je malo <em>zemlje</em> i <em>šuma</em>, a poznato je da je <strong>1702. godine</strong>, u velikoj oskudici, na ovom mestu bilo samo <strong>osam monaha</strong>.
                </p>
              </section>

              <img srcSet={`${jazak22} 450w, ${jazak2} `} alt="Manastir Jazak 2" />

              <section lang="sr">
                <p>
                  Povećanje broja <strong>vernika</strong>, kao i <em>monaha</em> koji su želeli da nađu večnu spasenost kraj <em>netruležnog tela poslednjeg srpskog cara</em>, dovelo je do potrebe za izgradnjom novog hrama posvećenog <strong>Silasku Svetog Duha na apostole</strong> (pedeseti dan po Vaskrsu).
                </p>
                <p>
                  Gradnja crkve počela je <strong>1736. godine</strong>, uz pomoć monaha iz <em>Žiče</em> i <em>Rače</em>, sa blagoslovom mitropolita <strong>beogradskih i karlovačkih</strong>, <em>Vikentija (Jovanovića)</em>.
                </p>
                <p>
                  Nastojatelj manastirske zajednice bio je iguman <strong>kir Stefan (Dimitrijević)</strong>.
                </p>
                <p>
                  Crkva i konaci su građeni korišćenjem <em>kamena</em> i <em>opeke</em>, iznad ostataka starije građevine, za koju je <em>narodna predaja</em> tvrdila da je bila <strong>letnjikovac i dvorska crkva „sremkog“ kralja Dragutina</strong>.
                </p>
              </section>

              <img srcSet={`${jazak44} 450w, ${jazak4} `} alt="Manastir Jazak 3" />

              <section lang="sr">
                <p>
                  Iako je manastir više puta <strong>obnavljan</strong>, ne mogu se primetiti značajnija odstupanja u odnosu na stanje prikazano na litografiji <strong>Mihajla Troha</strong> iz <strong>1837. godine</strong>.
                </p>
                <p>
                  Prva obnova izvedena je <strong>1846. godine</strong> po nalogu mitropolita <em>Josifa (Rajičića)</em>, a druga između <strong>1926. i 1930. godine</strong>, tokom uprave arhimandrita <em>Valerijana (Pribićevića)</em>.
                </p>
                <p>
                  Iguman <strong>Sava (Orlović)</strong>, poznat kao istaknuti <em>fruškogorski pojac</em>, naručio je <strong>1899. godine</strong> da se na beloj okrečenoj unutrašnjosti hrama naslika <em>ornamentalna zidna dekoracija</em>.
                </p>
                <p>
                  <strong>Pavle Čortanović</strong> je naslikao <em>"Jevanđeliste"</em> na pandevntifima, a u ulju su predstavljeni <strong>Sveti Simeon Mirotočivi</strong>, <strong>Svetitelj Sava</strong>, <strong>Sveta Paraskeva</strong> i <strong>Sveta Majka Angelina</strong>.
                </p>
                <p>
                  Manastir <strong>Jazak</strong>, zahvaljujući uticaju igumana Save na <em>duhovnost</em>, kao i savršenom stanju <em>sakralnih i ekonomskih objekata</em> na imanju koje je <strong>1905. godine</strong> obuhvatilo čak <strong>1.672 katastarska jutra</strong>, bio je svrstavan među <strong>najuglednije srpske manastire</strong> sve do izbijanja <strong>Drugog svetskog rata</strong>.
                </p>
              </section>

              <img srcSet={`${jazak33} 450w, ${jazak3} `} alt="Manastir Jazak 4" />

              <section lang="sr">
                <p>
                  Pod okupacijom <strong>Nezavisne Države Hrvatske</strong>, manastir <strong>Jazak</strong> je pretrpeo ogromna stradanja. Sa dolaskom okupatorskih snaga, manastir su napustili vladika <em>Valerijan (Pribićević)</em> i svi monasi, osim ruskog jermonaha <strong>Kesarija (Kaļčenka)</strong>.
                </p>
                <p>
                  Odmah po izbijanju rata, veći deo <em>manastirske riznice</em>, pokretnih predmeta iz hrama, slike iz konaka, kao i oko <strong>150 vrednijih knjiga</strong> iz biblioteke, preneti su u <strong>Zagreb</strong>.
                </p>
                <p>
                  Ostale <em>umetnine</em> i <em>starine</em> odnešene su ili od strane vojnika ili meštana pod uticajem okupatora. <strong>Ustaše</strong> su tražile dragocenosti čak i u kovčegu <strong>Svetog cara Uroša</strong>, gde su prevrnuli njegove svete mošti, slomili ih i odneli, zajedno s vrednim pokrivačem.
                </p>
                <p>
                  Tela Svetog cara sačuvao je <strong>dr Radoslav Grujić</strong>, koji ga je, uz pratnju nemačke straže, <strong>14. aprila 1942. godine</strong>, odneo u <strong>Beograd</strong>.
                </p>
                <p>
                  Na <em>Preobraženje</em> iste godine, <strong>partizani</strong> su zapalili manastirske konake, dok su <strong>nemački vojnici</strong> skinuli crep sa krova i odneli drugi materijal koji im je bio potreban.
                </p>
                <p>
                  Sramotno je što su se pometnji i pljački pridružili i pojedini meštani. Iako je crkva <strong>Silaska Svetog Duha na apostole</strong> potom pretvorena u <em>konjušnicu</em>, <strong>ikona</strong> i <strong>ikonostas</strong> su, na sreću, preživeli bez većih oštećenja.
                </p>
                <p>
                  Ipak, manastirski konaci su bili potpuno opljačkani, a vekovima dug <em>bogoslužbeni ritam</em> je prekinut jer jermonah Kesariije nije imao ni <em>antimens</em> na kojem bi mogao služiti <strong>Svetu liturgiju</strong>.
                </p>
              </section>

              <img srcSet={`${jazak55} 450w, ${jazak5} `} alt="Manastir Jazak 5" />

              <section lang="sr">
                <p>
                  Kao što je već pomenuto, <em>manastirska riznica</em> je opljačkana tokom <strong>Drugog svetskog rata</strong>, ali su <em>starine</em>, koje su kasnije vraćene iz <strong>Zagreba</strong>, danas smeštene u <strong>Muzeju Srpske Pravoslavne Crkve u Beogradu</strong>.
                </p>
                <p>
                  Među tim eksponatima, manastiru Jazak su pripadali <strong>petohlebnica iz 1742. godine</strong>, <em>anafonika</em>, dva <em>srebrna krsta</em>, <em>vezenice narukvice</em> iz <strong>1778. godine</strong>, <em>zlatotkani vazduh</em>, <strong>carske vrata</strong> iz starog manastira i <em>bakrorez sa likom Svetog cara Uroša</em>.
                </p>
                <p>
                  U <em>oltaru hrama</em> čuvaju se dve ikone iz <strong>Starog Jaska</strong>, sa prikazima <strong>Hrista Arhiđereja</strong> i <strong>Presvete Bogorodice sa Hristom</strong>.
                </p>
                <p>
                  U vitrinama reprezentativnog salona izložena je <strong>srebrna petohlebnica</strong> iz <strong>16. veka</strong>, dok se u <em>manastirskoj biblioteci</em> nalaze stari <em>oslikani krst</em>, <em>putir</em>, dva <em>srebrna svećnjaka</em> i <em>votivni dar</em> – simbolički prikaz obolele noge.
                </p>
                <p>
                  Takođe, ovde je smeštena i značajna <em>zbirka knjiga</em>, među kojima se izdvaja <strong>Sveto pismo iz 1581. godine</strong>, dva moskovska <em>„Četvorojevanđelja“</em> iz <strong>1701.</strong> i <strong>1748. godine</strong>, te <strong>Novi zavet</strong> štampan u <em>Lajpcigu</em> <strong>1830. godine</strong>.
                </p>
                <p>
                  U manjem salonu u prizemlju južnog konaka čuvaju se dva lepa <strong>portreta</strong>, naslikana <em>uljem na platnu</em>, sa likovima <strong>igumana Save (Orlovića)</strong> i <strong>episkopa Valerijana (Pribićevića)</strong>.
                </p>
              </section>

            </>
          )
          :
          (
            <>
              <h2 style={{ color: "white" }}>Jazak Monastery</h2> <section lang="en"> <p> According to church tradition, the <strong>Jazak</strong> monastery was founded by Despot <strong>Jovan</strong>, the younger son of <em>Stefan the Blind</em> and <em>Angelina Branković</em>. </p> <p> The first certain record about this monastery is found in the manuscript <em>"Triodion"</em> by the Jazak monk <strong>Lavrentije</strong> from <strong>1522</strong>. </p> <p> In the <em>Ottoman cadastral registers</em>, the monastery is mentioned during the periods <strong>1545–1548</strong>, <strong>1566–1569</strong>, and <strong>1578</strong>, with notes on the weak monastic economy at that time. </p> <p> <strong>Mata Kosovac</strong>, in his <em>"Shematisim"</em> from <strong>1910</strong>, notes that there was a <em>female monastic community</em> near the monastery, which can be seen from old icons and chronicles. </p> <p> It is believed that the first monastery, which included a <em>frescoed stone church</em> and two modest residences (stone and wooden, covered with <em>oak shingles</em> and <em>reed</em>), was very poor. </p> <p> It had little <em>land</em> and <em>forest</em>, and it is known that in <strong>1702</strong>, during great scarcity, there were only <strong>eight monks</strong> there. </p> </section>
              <img srcSet={`${jazak22} 450w, ${jazak2} `} alt="Jazak Monastery 2" />

              <section lang="en">
                <p> The increase in the number of <strong>believers</strong>, as well as <em>monks</em> who sought eternal salvation near the <em> incorrupt body of the last Serbian emperor </em>, led to the need for the construction of a new temple dedicated to the <strong>Descent of the Holy Spirit on the Apostles</strong> (the fiftieth day after Easter). </p> <p> Construction of the church began in <strong>1736</strong>, with help from monks from <em>Žiča</em> and <em>Rača</em>, and the blessing of the metropolitan of <strong>Belgrade and Karlovci</strong>, <em>Vikentije (Jovanović)</em>. </p> <p> The abbot of the monastery community was igumen <strong>Stefan (Dimitrijević)</strong>. </p> <p> The church and residences were built using <em>stone</em> and <em>brick</em>, above the remains of an older building, which <em>folk tradition</em> claimed was the <strong>summer residence and court church of the "Srem" King Dragutin</strong>.
                </p>
              </section>
              <img srcSet={`${jazak44} 450w, ${jazak4}`} alt="Jazak Monastery 3" />

              <section lang="en"> <p> Although the monastery was restored several times, no significant deviations can be observed compared to the state shown in the lithograph by <strong>Mihajlo Troho</strong> from <strong>1837</strong>. </p> <p> The first restoration was carried out in <strong>1846</strong> by order of Metropolitan <em>Josif (Rajičić)</em>, and the second between <strong>1926 and 1930</strong>, during the tenure of Archimandrite <em>Valerijan (Pribićević)</em>. </p> <p> Igumen <strong>Sava (Orlović)</strong>, known as a prominent <em>Fruška Gora chanter</em>, ordered in <strong>1899</strong> the painting of <em>ornamental wall decoration</em> on the whitewashed interior of the temple. </p> <p> <strong>Pavle Čortanović</strong> painted the <em>"Evangelists"</em> on the pendentives, and in oil are depicted <strong>Saint Simeon the Myrrh-streaming</strong>, <strong>Saint Sava</strong>, <strong>Saint Paraskeva</strong>, and <strong>Saint Mother Angelina</strong>. </p> <p> Thanks to the influence of Igumen Sava on <em>spirituality</em>, as well as the excellent condition of <em>sacred and economic buildings</em> on the estate, which in <strong>1905</strong> covered as much as <strong>1,672 cadastral acres</strong>, the monastery <strong>Jazak</strong> was regarded as one of the <strong>most reputable Serbian monasteries</strong> until the outbreak of the <strong>Second World War</strong>. </p> </section>
              <img srcSet={`${jazak33} 450w, ${jazak3} `} alt="Jazak Monastery 4" />

              <section lang="en"> <p> Under the occupation of the <strong>Independent State of Croatia</strong>, the <strong>Jazak</strong> monastery suffered great devastation. With the arrival of the occupying forces, Bishop <em>Valerijan (Pribićević)</em> and all monks left, except the Russian hieromonk <strong>Kesariy (Kalchenko)</strong>. </p> <p> At the start of the war, most of the <em>monastic treasury</em>, movable objects from the church, paintings from the residence, as well as about <strong>150 valuable books</strong> from the library, were moved to <strong>Zagreb</strong>. </p> <p> Other <em>artifacts</em> and <em>antiques</em> were taken either by soldiers or locals under the influence of the occupiers. The <strong>Ustaše</strong> searched for valuables even in the coffin of <strong>Saint Emperor Uroš</strong>, overturning his holy relics, breaking and taking them along with the valuable cover. </p> <p> The body of the Saint Emperor was preserved by <strong>Dr. Radoslav Grujić</strong>, who, escorted by German guards, transported it to <strong>Belgrade</strong> on <strong>April 14, 1942</strong>. </p> <p> On the <em>Transfiguration</em> that same year, <strong>partisans</strong> burned the monastic residences, while <strong>German soldiers</strong> removed tiles from the roof and took other materials they needed. </p> <p> Shamefully, some locals joined the chaos and looting. Although the church of the <strong>Descent of the Holy Spirit on the Apostles</strong> was turned into a <em>stable</em>, the <strong>icon</strong> and <strong>iconostasis</strong> fortunately survived with minor damage. </p> <p> However, the monastic residences were completely looted, and the centuries-old <em>liturgical rhythm</em> was broken because hieromonk Kesariy did not have an <em>antimension</em> on which he could serve the <strong>Divine Liturgy</strong>. </p> </section>
              <img srcSet={`${jazak55} 450w, ${jazak5}`} alt="Jazak Monastery 5" />

              <section lang="en"> <p> As already mentioned, the <em>monastic treasury</em> was looted during the <strong>Second World War</strong>, but the <em>antiques</em> later returned from <strong>Zagreb</strong> are today housed in the <strong>Museum of the Serbian Orthodox Church in Belgrade</strong>. </p> <p> Among those exhibits belonging to the Jazak Monastery are a <strong>liturgical bread box from 1742</strong>, <em>anaphonary</em>, two <em>silver crosses</em>, <em>embroidered bracelets</em> from <strong>1778</strong>, <em>gold-threaded air</em>, <strong>royal doors</strong> from the old monastery, and a <em>copper engraving depicting Saint Emperor Uroš</em>. </p> <p> In the <em>altar of the temple</em> are kept two icons from <strong>Old Jazak</strong>, depicting <strong>Christ the High Priest</strong> and <strong>The Most Holy Theotokos with Christ</strong>. </p> <p> In the showcases of the representative hall are displayed a <strong>silver liturgical bread box</strong> from the <strong>16th century</strong>, while in the <em>monastic library</em> there are old <em>painted crosses</em>, a <em>chalice</em>, two <em>silver candlesticks</em>, and a <em>votive offering</em> – a symbolic representation of a diseased leg. </p> <p> Also housed here is a significant <em>collection of books</em>, including the <strong>Bible from 1581</strong>, two Moscow <em>"Four Gospels"</em> from <strong>1701</strong> and <strong>1748</strong>, and a <strong>New Testament</strong> printed in <em>Leipzig</em> in <strong>1830</strong>. </p> <p> In a smaller hall on the ground floor of the southern residence are kept two fine <strong>portraits</strong> painted <em>in oil on canvas</em>, depicting <strong>Igumen Sava (Orlović)</strong> and <strong>Bishop Valerijan (Pribićević)</strong>. </p> </section>

            </>
          )
        }

      </div >
    </>
  );
};


export default ManastirJazak;