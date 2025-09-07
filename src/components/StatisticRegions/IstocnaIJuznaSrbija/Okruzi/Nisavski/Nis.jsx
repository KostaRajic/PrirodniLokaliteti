/* eslint-disable react/no-unknown-property */
/* eslint-disable no-useless-escape */
import nis1 from "../../../../../assets/images/JuznaIIstocnaSrbija/NisavskiOkrug/Nis/desktop/nis1.jpg";
import nis2 from "../../../../../assets/images/JuznaIIstocnaSrbija/NisavskiOkrug/Nis/desktop/nis2.jpg";
import nis3 from "../../../../../assets/images/JuznaIIstocnaSrbija/NisavskiOkrug/Nis/desktop/nis3.jpg";
import nis4 from "../../../../../assets/images/JuznaIIstocnaSrbija/NisavskiOkrug/Nis/desktop/nis4.jpg";
import nis5 from "../../../../../assets/images/JuznaIIstocnaSrbija/NisavskiOkrug/Nis/desktop/nis5.jpg";
import nis6 from "../../../../../assets/images/JuznaIIstocnaSrbija/NisavskiOkrug/Nis/desktop/nis6.jpg";
import nis7 from "../../../../../assets/images/JuznaIIstocnaSrbija/NisavskiOkrug/Nis/desktop/nis7.jpg";
import nis8 from "../../../../../assets/images/JuznaIIstocnaSrbija/NisavskiOkrug/Nis/desktop/nis8.jpg";
import nis9 from "../../../../../assets/images/JuznaIIstocnaSrbija/NisavskiOkrug/Nis/desktop/nis9.jpg";
import nis10 from "../../../../../assets/images/JuznaIIstocnaSrbija/NisavskiOkrug/Nis/desktop/nis10.jpg";
import nis11 from "../../../../../assets/images/JuznaIIstocnaSrbija/NisavskiOkrug/Nis/desktop/nis11.jpg";
import nis1_1 from "../../../../../assets/images/JuznaIIstocnaSrbija/NisavskiOkrug/Nis/mobile/nis101.jpg";
import nis2_2 from "../../../../../assets/images/JuznaIIstocnaSrbija/NisavskiOkrug/Nis/mobile/nis12.jpg";
import nis3_3 from "../../../../../assets/images/JuznaIIstocnaSrbija/NisavskiOkrug/Nis/mobile/nis13.jpg";
import nis4_4 from "../../../../../assets/images/JuznaIIstocnaSrbija/NisavskiOkrug/Nis/mobile/nis14.jpg";
import nis5_5 from "../../../../../assets/images/JuznaIIstocnaSrbija/NisavskiOkrug/Nis/mobile/nis15.jpg";
import nis6_6 from "../../../../../assets/images/JuznaIIstocnaSrbija/NisavskiOkrug/Nis/mobile/nis16.jpg";
import nis7_7 from "../../../../../assets/images/JuznaIIstocnaSrbija/NisavskiOkrug/Nis/mobile/nis17.jpg";
import nis8_8 from "../../../../../assets/images/JuznaIIstocnaSrbija/NisavskiOkrug/Nis/mobile/nis18.jpg";
import nis9_9 from "../../../../../assets/images/JuznaIIstocnaSrbija/NisavskiOkrug/Nis/mobile/nis19.jpg";
import nis10_10 from "../../../../../assets/images/JuznaIIstocnaSrbija/NisavskiOkrug/Nis/mobile/nis110.jpg";
import nis11_11 from "../../../../../assets/images/JuznaIIstocnaSrbija/NisavskiOkrug/Nis/mobile/nis111.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { useEffect, useState } from "react";
import { nisavskiOkrugPathRoutes } from "./NisavskiOkrugPathRoutes";
import { useContextAuth } from "../../../../../Context";
import { Helmet } from "react-helmet-async";

const Nis = () => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);
  const { switchLanguage } = useContextAuth();
  const { lang } = useParams();

  useEffect(() => {
    if (lang && lang !== switchLanguage) {
      const newPath = window.location.pathname.replace(/^\/[^\/]+/, `/${switchLanguage}`);
      navigate(newPath, { replace: true });
    }
  }, [switchLanguage, lang, navigate]);



  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>

      <Helmet>

        <title>{switchLanguage === 'rs' ? "Niš – Istorijski i kulturni centar južne Srbije | Serbia Wonders" : "Niš – The Historical and Cultural Center of Southern Serbia | Serbia Wonders"}</title>
        <meta
          name="description"
          content={switchLanguage === 'rs' ?
            "Niš je jedan od najstarijih gradova u Srbiji, poznat po bogatoj istoriji, univerzitetu, kulturnim znamenitostima kao što su Ćele Kula, Niška tvrđava i Nišvil džez festival."
            :
            "Nis is one of the oldest cities in Serbia, known for its rich history, university, and cultural landmarks such as the Ćele Kula, Nis Fortress, and Nisville Jazz Festival."
          }
        />
        <meta
          name="keywords"
          content={switchLanguage === 'rs' ?
            "Niš, Niška tvrđava, Ćele Kula, Nišvil, Univerzitet u Nišu, istorija Niša, kulturna baština, Srbija, jug Srbije"
            :
            "Nis, Nis Fortress, Ćele Kula, Nisville, University of Nis, Nis history, cultural heritage, Serbia, southern Serbia"
          }
        />
        <meta name="author" content="Serbia Wonders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href={`https://www.serbiawonders.com/${lang}/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/nisavski-okrug/nis`}
        />
        <link
          rel="alternate"
          hreflang="sr"
          href="https://www.serbiawonders.com/sr/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/nisavski-okrug/nis"
        />
        <link
          rel="alternate"
          hreflang="en"
          href="https://www.serbiawonders.com/en/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/nisavski-okrug/nis"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.serbiawonders.com/en/istocna-srbija-tekst-modal/istocna-i-juzna-srbija/nisavski-okrug/nis"
        />

      </Helmet>



      <div className="placeBackground">
        <ScrollToTop />
        <FaArrowLeft className="arrowLeft" onClick={() => navigate(nisavskiOkrugPathRoutes.home)} />
        <header></header>
        <img
          alt="Niš 1"
          srcSet={`${nis1_1} 450w, ${nis1} `}
          loading="lazy"
        />

        <h2>Niš</h2>

        {switchLanguage === 'rs' ?
          (
            <>

              <section lang="sr">
                <p>
                  <strong>Niš</strong> je gradsko naselje i sedište istoimene teritorijalne jedinice u <strong>Srbiji</strong>. Administrativni je centar <em>Nišavskog upravnog okruga</em> i najveći grad južne i istočne Srbije. Nalazi se na reci <strong>Nišavi</strong>, nedaleko od njenog ušća u <em>Južnu Moravu</em>. Grad Niš zauzima površinu od oko <strong>596,73 km²</strong>, uključujući <strong>Nišku Banju</strong> i 68 prigradskih naselja.
                  <br /><br />
                  Kroz istoriju, Niš je bio <strong>administrativni</strong>, <strong>vojni</strong> i <strong>trgovački centar</strong> različitih država i carstava kojima je pripadao. U antičkom gradu <em>Naisu</em>, koji se nalazio na prostoru današnjeg Niša, rođeni su rimski carevi <strong>Konstantin Veliki</strong> i <strong>Konstancije III</strong>. Njegov geografski položaj učinio ga je <em>strateški važnim</em> i zbog toga često meta mnogih osvajača.
                  <br /><br />
                  Tokom vekova, teritorijom današnjeg Niša prošli su <strong>Dardanci</strong>, <strong>Tračani</strong>, <strong>Iliri</strong>, <strong>Kelti</strong>, <strong>Rimljani</strong>, <strong>Huni</strong>, <strong>Avari</strong>, <strong>Vizantinci</strong>, <strong>Srbi</strong>, <strong>Bugari</strong> i <strong>Osmanlije</strong>. U više navrata grad su osvajali i <strong>Mađari</strong>, kao i <strong>Austrijanci</strong>. Od Turaka je oslobođen <strong>1878. godine</strong> i od tada je ponovo deo Srbije, s kratkim prekidima tokom <em>Prvog i Drugog svetskog rata</em>, kada je bio pod okupacijom. Uticaj raznih naroda koji su živeli na teritoriji Niša i danas se može videti u kulturnom nasleđu grada, pre svega kroz njegovu <strong>arhitektonsku raznolikost</strong>.
                </p>
              </section>

              <img alt="Niš 2" srcSet={`${nis10_10} 450w, ${nis10}`} loading="lazy" />

              <section lang="sr">
                <p>
                  Saobraćajna infrastruktura na teritoriji Niša čini ga <strong>ključnom raskrsnicom kopnenog i vazdušnog saobraćaja</strong> na Balkanu, posebno zbog intenzivnog prometa ka <em>Turskoj</em> i <em>Grčkoj</em>. Takođe, na teritoriji grada nalazi se međunarodni aerodrom <strong>Konstantin Veliki</strong>, što dodatno doprinosi njegovom strateškom značaju.
                  <br /><br />
                  Niš je značajan <strong>privredni</strong>, <strong>univerzitetski</strong>, <strong>kulturni</strong>, <strong>verski</strong> i <strong>politički centar Srbije</strong>. Univerzitet u Nišu, osnovan <strong>1965. godine</strong>, obuhvata 14 fakulteta i broji oko <strong>30.000 studenata</strong>. Grad je ujedno i sedište <strong>Niške eparhije Srpske pravoslavne crkve</strong>.
                  <br /><br />
                  Administrativno, Niš je podeljen na pet gradskih opština: <strong>Medijana</strong>, <strong>Palilula</strong>, <strong>Pantelej</strong>, <strong>Crveni Krst</strong> i <strong>Niška Banja</strong>.
                  <br /><br />
                  Ime grada Niša spominje se u brojnim istorijskim izvorima od srednjeg veka do savremenog doba. Oblik imena varirao je u zavisnosti od jezika na kojem je zapisivan, ali su svi nazivi međusobno slični: <em>Naissus</em>, <em>Nais</em>, <em>Nisus</em>, <em>Νισσα</em>, <em>Ναισσός</em>, <em>Νισος</em>, <em>نیش (Niş)</em>, <strong>Niš</strong>.
                </p>
              </section>

              <img alt="Spomenik oslobodiocima Niša" srcSet={`${nis2_2} 450w, ${nis2}`} loading="lazy" />

              <section lang="sr">
                <p>
                  Spomenik oslobodiocima Niša, lokalno poznat kao "<strong>Konj</strong>", nalazi se u samom centru grada, na Trgu kralja Milana, i obeležava period oslobodilačkih ratova protiv <strong>Turaka</strong>, <strong>Bugara</strong> i <strong>Nemaca</strong>.
                  <br /><br />
                  Spomenik prikazuje vojnika Moravca na konju, u prirodnoj veličini, koji drži visoko podignutu levu ruku, dok mu je u desnoj zastava slobode.
                  <br /><br />
                  Najznačajnije godine ovog perioda su <strong>1874.</strong> i <strong>1877.</strong>, kada su vođene borbe za oslobođenje Niša od Osmanskog carstva, kao i <strong>1915.</strong> i <strong>1918.</strong> godine, koje označavaju početak okupacije i oslobođenje grada u Prvom svetskom ratu.
                  <br /><br />
                  Autor ove monumentalne skulpture je <strong>Antun Augustinčić</strong>, zagrebački vajar. Spomenik se smatra jednim od najznačajnijih dela novije jugoslovenske skulpture i stavljen je pod zakonsku zaštitu <strong>1983. godine</strong>.
                </p>
              </section>

              <img alt="Univerzitet u Nišu" srcSet={`${nis3_3} 450w, ${nis3}`} loading="lazy" />

              <section lang="sr">
                <p>
                  Univerzitet u Nišu smešten je u jednoj od najistaknutijih zgrada, koja je izgrađena <strong>1887. godine</strong>. Tokom svoje istorije, ova zgrada je služila kao sedište <em>Suda</em>, <em>Načelstva</em> i <em>Kapetanije</em>, a kasnije i kao prostor za kabinet Vlade i Ministarstvo inostranih poslova.
                  <br /><br />
                  Formiranje prvih fakulteta u Nišu započelo je <strong>1960. godine</strong>, što je na kraju dovelo do osnivanja Univerziteta u Nišu <strong>15. juna 1965. godine</strong>.
                  <br /><br />
                  Prvi fakulteti osnovani na ovom univerzitetu bili su <strong>Pravno-ekonomski</strong>, <strong>Medicinski</strong> i <strong>Tehnički fakultet</strong>. Danas, Univerzitet u Nišu broji <strong>13 fakulteta</strong>, a najmlađi među njima je <strong>Fakultet umetnosti</strong>. Ovaj fakultet je akreditovan <strong>2009. godine</strong>, u trećem ciklusu akreditacije visokoškolskih ustanova u Srbiji, zajedno sa Univerzitetima u Beogradu i Novom Sadu.
                </p>
              </section>

              <img alt="Narodni muzej u Nišu" srcSet={`${nis4_4} 450w, ${nis4}`} loading="lazy" />

              <section lang="sr">
                <p>
                  Narodni muzej u Nišu prva je ustanova ovog tipa, osnovana <strong>1. aprila 1933. godine</strong> od strane grupe entuzijasta koji su se okupili oko tada osnovanog Muzejskog društva. Među najistaknutijim osnivačima i članovima bili su <strong>Ađam Oršić Slavetović</strong>, <strong>Rudolf Bratanić</strong>, <strong>Borivoje Gojković</strong>, <strong>Aleksandar Nenadović</strong> i <strong>Borivoje Popović</strong>.
                  <br /><br />
                  Kao ustanova kompleksnog karaktera, muzej danas u svom fondu ima oko <strong>40.000 eksponata</strong> iz oblasti istorije, istorije umetnosti, arheologije, etnologije, kulturne istorije i numizmatike, kao i dve spomen zbirke – <em>Stevana Sremca</em> i <em>Branka Miljkovića</em>. U njegovom sastavu nalaze se i konzervatorsko-preparatorne radionice, foto laboratorija i biblioteka koja broji više od <strong>10.000 knjiga</strong>.
                </p>
              </section>

              <img alt="Ćele Kula 1" srcSet={`${nis5_5} 450w, ${nis5}`} loading="lazy" />

              <section lang="sr">
                <p>
                  Ćele Kula je jedinstven spomenik ne samo u Evropi, već i u svetu, i svedoči o strašnim trenucima u srpskoj istoriji. Da bismo u potpunosti razumeli simboliku ovog spomenika, potrebno je da se vratimo u vreme <strong>Prvog srpskog ustanka</strong>, koji je pod vođstvom <em>Karađorđa (Đorđa Petrovića)</em> počeo u februaru 1804. godine u Orašcu, s ciljem oslobođenja od Osmanlijskog carstva. Povod za početak ustanka bio je događaj poznat kao <strong>„Seča knezova“</strong>, kada su Turci ubili gotovo sve ugledne Srbe. Iako su ustanici dali sve od sebe da se oslobode, ustanak je na kraju ugušen u oktobru 1813. godine.
                  <br /><br />
                  Nakon bitaka na <strong>Ivankovcu</strong>, <strong>Mišaru</strong> i kod <strong>Deligrada</strong>, gde su ustanici izvojevali pobede i pokazali hrabrost, dolazi 1806. godina, kada sreća okreće leđa srpskoj vojsci. <strong>Rusija</strong>, koja je do tada bila važan saveznik, mora se povući zbog ratova sa Napoleonom.
                  <br /><br />
                  U maju 1809. godine dolazi do prvog velikog poraza Srpske vojske u <strong>bitci na Čegru</strong> (brdo blizu Niša). Nakon što je turski sultan shvatio ozbiljnost pobune, poslao je ogromnu vojsku da uguši ustanike. Srbi, koji su bili iscrpljeni i ostavljeni bez saveznika, uspeli su da okupe oko <strong>17.000 vojnika</strong> pod komandom vojvode <strong>Stevana Sinđelića</strong>. S druge strane, turska vojska brojala je oko <strong>40.000 vojnika</strong>.
                </p>
              </section>

              <img alt="Ćele Kula 2" srcSet={`${nis6_6} 450w, ${nis6}`} loading="lazy" />

              <section lang="sr">
                <p>
                  Iako su bili <strong>duplo nadjačani</strong>, srpski borci su se borili hrabro, a kada je vojvoda <strong>Stevan Sinđelić</strong> shvatio da je izlaz nemoguć, odlučio je da kuburom puca u podzemni magacin baruta. Eksplozija je odnela mnoge živote, kako srpske, tako i turske vojske. Nakon što su ustanici izvojevali <strong>pirovu pobedu</strong>, <strong>Huršid paša</strong>, niški vezir, u nameri da se osveti i zastraši preostale Srbe, naredio je izgradnju <strong>Kule od lobanja</strong>, na putu za <em>Carigrad</em>.
                  <br /><br />
                  Kula je bila visoka <strong>3 metra</strong> i sadržavala je <strong>952 lobanje</strong>, raspoređene u 14 redova na sve četiri strane. Pretpostavlja se da je na vrhu kule bila lobanja <strong>Stevana Sinđelića</strong>, koja je danas izložena na posebnom mestu. Svako ko je ulazio u Niš morao je da pređe drveni most i prođe pored Ćele Kule. Kasnije je oko nje podignuta kapela, kao znak poštovanja prema posmrtnim ostacima poginulih ustanika. Danas Ćele Kula sadrži <strong>58 preostalih lobanja</strong>, i predstavlja surovi podsetnik na istoriju Srbije i cenu koju je narod platio za slobodu.
                </p>

                <img alt="Niška Tvrđava" srcSet={`${nis7_7} 450w, ${nis7}`} loading="lazy" />
              </section>

              <section lang="sr">
                <p>
                  <strong>Niška tvrđava</strong> je gradsko utvrđenje smešteno u centru Niša na desnoj obali reke Nišave, sa istorijom koja traje oko <strong>dva milenijuma</strong>, o čemu svedoče brojni arheološki nalazi. Ovaj kompleks kulturnog spomenika sastoji se od nekoliko celina, čije zajedničke karakteristike uključuju bogat kulturni sloj i složenu urbanističku kompoziciju prostora koji ima različite funkcije i namene, međusobno povezane i, u nekim slučajevima, sukobljene. Istorijski podaci i arhitektonsko nasleđe ukazuju da se ovaj prostor od <strong>1. veka n.e.</strong> razvijao kao centralna tačka u Naisu, gde su nastajale i fortifikacije i urbani delovi naselja.
                  <br /><br />
                  Danas, Niška tvrđava spada među <strong>najbolje očuvane utvrde</strong> tog tipa u Srbiji i na Balkanu. Njena poligonalna osnova, sa <strong>osam bastionih terasa</strong>, izgrađena je na temeljima antičkog, vizantijskog i srednjovekovnog utvrđenja. Bedemi tvrđave su visoki <strong>8 metara</strong>, a prosečna debljina im je <strong>3 metra</strong>. Ukupna dužina bedema je <strong>2.100 metara</strong>, a tvrđava je okružena rovom, s površinom većom od <strong>20 hektara</strong>.
                </p>

                <img alt="Nišvile" srcSet={`${nis8_8} 450w, ${nis8}`} loading="lazy" />
              </section>

              <section lang="sr">
                <p>
                  Internacionalni džez festival <strong>Nišvil</strong>, najposećeniji džez festival jugoistočne Evrope, već godinama dosledno promoviše evropske vrednosti <em>multikulturalnosti</em> i pažljivo neguje muzički ukus pojedinaca. Potvrda toga je i veliki tekst "<strong>Nišvil - evropsko lice Srbije</strong>" objavljen u glasilu Evropske unije, magazinu "<em>New Europe</em>", koji izlazi u Briselu.
                  <br /><br />
                  Nišvil džez festival je Javna Gradska Manifestacija Niša, a odlukom Ministarstva kulture Republike Srbije, manifestacija je proglašena manifestacijom od <strong>Nacionalnog značaja</strong>. Nišvil je jedina kulturna manifestacija koja je dobila statuu "<strong>Najbolje iz Srbije</strong>" za 2011. godinu, prema izboru Ministarstva trgovine i usluga, Privredne komore Srbije i časopisa "<em>Privredni pregled</em>", a dobitnik je i nagrade "<strong>Projekat budućnosti</strong>" u akciji Kluba privrednih novinara Srbije 2010. godine i Centra za mala i srednja preduzeća.
                  <br /><br />
                  Turistička organizacija Srbije uključuje Nišvil u svoju zvaničnu sajamsku ponudu širom Evrope, a mnoge domaće i strane turističke organizacije i agencije pozivaju ljubitelje džez muzike da, krajem avgusta, posete Srbiju i mitski grad Niš.
                </p>

                <img alt="Park Bubanj" srcSet={`${nis9_9} 450w, ${nis9}`} loading="lazy" />
              </section>

              <section lang="sr">
                <p>
                  Brdo <strong>Bubanj</strong>, koje se nalazi 3 kilometra od centra Niša, bilo je mesto masovnih streljanja zarobljenika tokom <strong>Drugog svetskog rata</strong>, a žrtve su bile pritvorene u Koncentracionom logoru u Nišu. Nakon oslobođenja, na ovom stratištu je podignut spomenik u obliku <strong>tri stisnute pesnice</strong>, koje simbolizuju muža, ženu i dete, kao i njihov zajednički otpor protiv zločina. Pesnice su različite visine: <strong>13, 14 i 16 metara</strong>, i svojom impozantnošću ostavljaju snažan utisak na sve posetioce ovog memorijalnog parka.
                </p>

                <img alt="Mediana" srcSet={`${nis11_11} 450w, ${nis11}`} loading="lazy" />
              </section>

              <section lang="sr">
                <p>
                  <strong>Mediana</strong> je arheološko nalazište koje se nalazi u istočnom delu Niša, na pola puta do Niške Banje, i predstavlja jedno od najznačajnijih rimskih naselja na ovom području. Nastalo je u kasnom periodu vladavine cara <strong>Dioklecijana</strong>, krajem <strong>3. veka</strong>, ili početkom <strong>4. veka</strong>, za vreme cara <strong>Konstantina Velikog</strong>.
                  <br /><br />
                  Mediana je bila rimski kompleks letnjih rezidencija, urbanih vila i velikog poljoprivrednog gazdinstva, otvorenog tipa. Lokacija je pored važnog putnog pravca koji je vodio od Naisa (današnji Niš) prema istoku, ka Serdici (današnji <em>Sofija</em>), a potom ka Konstantinopolju (današnji <em>Istanbul</em>).
                </p>
              </section>

            </>
          )
          :
          (
            <>

              <section lang="en"> <p> <strong>Niš</strong> is an urban settlement and the administrative center of the territorial unit of the same name in <strong>Serbia</strong>. It is the administrative center of the <em>Nišava District</em> and the largest city in southern and eastern Serbia. It is located on the river <strong>Nišava</strong>, not far from its confluence with the <em>South Morava</em> river. The city of Niš covers an area of about <strong>596.73 km²</strong>, including <strong>Niška Banja</strong> and 68 suburban settlements. <br /><br /> Throughout history, Niš has been an <strong>administrative</strong>, <strong>military</strong>, and <strong>trade center</strong> of various states and empires it belonged to. In the ancient city of <em>Naisus</em>, which was located on the site of present-day Niš, the Roman emperors <strong>Constantine the Great</strong> and <strong>Constantius III</strong> were born. Its geographical position made it <em>strategically important</em> and therefore often a target of many conquerors. <br /><br /> Over the centuries, the territory of present-day Niš was inhabited or ruled by the <strong>Dardanians</strong>, <strong>Thracians</strong>, <strong>Illyrians</strong>, <strong>Celts</strong>, <strong>Romans</strong>, <strong>Huns</strong>, <strong>Avars</strong>, <strong>Byzantines</strong>, <strong>Serbs</strong>, <strong>Bulgarians</strong>, and <strong>Ottomans</strong>. The city was also conquered several times by <strong>Hungarians</strong> and <strong>Austrians</strong>. It was liberated from the Turks in <strong>1878</strong> and has since been part of Serbia, with brief interruptions during the <em>First and Second World Wars</em>, when it was under occupation. The influence of various peoples who lived in the territory of Niš is still visible in the city’s cultural heritage, primarily through its <strong>architectural diversity</strong>. </p> </section>
              <img alt="Niš 2" srcSet={`${nis10_10} 450w, ${nis10}`} loading="lazy" />

              <section lang="en"> <p> The traffic infrastructure in Niš makes it a <strong>key crossroads of land and air traffic</strong> in the Balkans, especially due to intense traffic towards <em>Turkey</em> and <em>Greece</em>. Additionally, the city hosts the international airport <strong>Constantine the Great</strong>, which further contributes to its strategic importance. <br /><br /> Niš is an important <strong>economic</strong>, <strong>university</strong>, <strong>cultural</strong>, <strong>religious</strong>, and <strong>political center of Serbia</strong>. The University of Niš, founded in <strong>1965</strong>, encompasses 14 faculties and has about <strong>30,000 students</strong>. The city is also the seat of the <strong>Niš Eparchy of the Serbian Orthodox Church</strong>. <br /><br /> Administratively, Niš is divided into five city municipalities: <strong>Mediana</strong>, <strong>Palilula</strong>, <strong>Pantelej</strong>, <strong>Crveni Krst</strong>, and <strong>Niška Banja</strong>. <br /><br /> The name of the city Niš is mentioned in numerous historical sources from the Middle Ages to modern times. The form of the name has varied depending on the language it was written in, but all names are similar: <em>Naissus</em>, <em>Nais</em>, <em>Nisus</em>, <em>Νισσα</em>, <em>Ναισσός</em>, <em>Νισος</em>, <em>نیش (Niş)</em>, <strong>Niš</strong>. </p> </section>
              <img alt="Monument to the Liberators of Niš" srcSet={`${nis2_2} 450w, ${nis2}`} loading="lazy" />

              <section lang="en"> <p> The Monument to the Liberators of Niš, locally known as "<strong>The Horse</strong>", is located in the city center, on King Milan Square, and commemorates the period of liberation wars against the <strong>Turks</strong>, <strong>Bulgarians</strong>, and <strong>Germans</strong>. <br /><br /> The monument depicts a Morava soldier on horseback, life-sized, holding his left arm raised high, while in his right hand he holds the flag of freedom. <br /><br /> The most significant years of this period are <strong>1874</strong> and <strong>1877</strong>, when battles for the liberation of Niš from the Ottoman Empire were fought, as well as <strong>1915</strong> and <strong>1918</strong>, which mark the beginning of occupation and the city’s liberation during the First World War. <br /><br /> The author of this monumental sculpture is <strong>Antun Augustinčić</strong>, a sculptor from Zagreb. The monument is considered one of the most important works of modern Yugoslav sculpture and was placed under legal protection in <strong>1983</strong>. </p> </section>
              <img alt="University of Niš" srcSet={`${nis3_3} 450w, ${nis3}`} loading="lazy" />

              <section lang="en"> <p> The University of Niš is housed in one of the most prominent buildings, built in <strong>1887</strong>. Throughout its history, this building served as the seat of the <em>Court</em>, <em>District Office</em>, and <em>Captaincy</em>, and later as space for the Government Cabinet and Ministry of Foreign Affairs. <br /><br /> The formation of the first faculties in Niš began in <strong>1960</strong>, which eventually led to the founding of the University of Niš on <strong>June 15, 1965</strong>. <br /><br /> The first faculties established at this university were the <strong>Faculty of Law and Economics</strong>, <strong>Faculty of Medicine</strong>, and <strong>Faculty of Technical Sciences</strong>. Today, the University of Niš has <strong>13 faculties</strong>, with the youngest being the <strong>Faculty of Arts</strong>. This faculty was accredited in <strong>2009</strong>, during the third accreditation cycle of higher education institutions in Serbia, alongside the Universities of Belgrade and Novi Sad. </p> </section>
              <img alt="National Museum in Niš" srcSet={`${nis4_4} 450w, ${nis4}`} loading="lazy" />

              <section lang="en"> <p> The National Museum in Niš is the first institution of its kind, founded on <strong>April 1, 1933</strong> by a group of enthusiasts who gathered around the newly established Museum Society. Among the most prominent founders and members were <strong>Ađam Oršić Slavetović</strong>, <strong>Rudolf Bratanić</strong>, <strong>Borivoje Gojković</strong>, <strong>Aleksandar Nenadović</strong>, and <strong>Borivoje Popović</strong>. <br /><br /> As a complex institution, the museum today holds around <strong>40,000 exhibits</strong> in the fields of history, art history, archaeology, ethnology, cultural history, and numismatics, as well as two memorial collections – those of <em>Stevan Sremac</em> and <em>Branko Miljković</em>. The museum also includes conservation and preparatory workshops, a photo laboratory, and a library with more than <strong>10,000 books</strong>. </p> </section>
              <img alt="Ćele Kula 1" srcSet={`${nis5_5} 450w, ${nis5}`} loading="lazy" />

              <section lang="en"> <p> Ćele Kula is a unique monument not only in Europe but also worldwide, and it testifies to the terrible moments in Serbian history. To fully understand the symbolism of this monument, it is necessary to return to the time of the <strong>First Serbian Uprising</strong>, led by <em>Karađorđe (Đorđe Petrović)</em>, which began in February 1804 in Orašac with the goal of liberation from the Ottoman Empire. The trigger for the uprising was an event known as the <strong>"Slaughter of the Knezes"</strong>, when the Turks killed almost all prominent Serbs. Although the insurgents gave their best effort to free themselves, the uprising was ultimately crushed in October 1813. <br /><br /> After battles at <strong>Ivankovac</strong>, <strong>Mišar</strong>, and near <strong>Deligrad</strong>, where the insurgents won victories and showed bravery, the year 1806 came, when luck turned against the Serbian army. <strong>Russia</strong>, which had been an important ally, had to withdraw due to wars with Napoleon. <br /><br /> In May 1809, the first major defeat of the Serbian army occurred in the <strong>Battle of Čegar</strong> (a hill near Niš). After the Ottoman sultan realized the seriousness of the rebellion, he sent a huge army to crush the insurgents. The Serbs, exhausted and left without allies, managed to gather about <strong>17,000 soldiers</strong> under the command of the vojvoda (duke) <strong>Stevan Sinđelić</strong>. The Turkish army numbered about <strong>40,000 soldiers</strong>. </p> </section>
              <img alt="Ćele Kula 2" srcSet={`${nis6_6} 450w, ${nis6}`} loading="lazy" />

              <section lang="en"> <p> Although they were <strong>outnumbered more than two to one</strong>, the Serbian fighters fought bravely, and when vojvoda <strong>Stevan Sinđelić</strong> realized that escape was impossible, he decided to shoot the powder magazine underground with his pistol. The explosion took many lives, both Serbian and Turkish soldiers. After the insurgents achieved a <strong>Pyrrhic victory</strong>, <strong>Hurshid Pasha</strong>, the Niš vizier, intending to avenge and intimidate the remaining Serbs, ordered the construction of the <strong>Skull Tower</strong> on the road to <em>Constantinople</em>. <br /><br /> The tower was <strong>3 meters high</strong> and contained <strong>952 skulls</strong> arranged in 14 rows on all four sides. It is assumed that the skull of <strong>Stevan Sinđelić</strong> was at the top of the tower, which is now displayed in a special place. Everyone entering Niš had to cross a wooden bridge and pass by Ćele Kula. Later, a chapel was built around it as a sign of respect for the remains of the fallen insurgents. Today, Ćele Kula contains <strong>58 remaining skulls</strong> and represents a harsh reminder of Serbian history and the price paid for freedom. </p>
                <img alt="Niš Fortress" srcSet={`${nis7_7} 450w, ${nis7}`} loading="lazy" />

              </section> <section lang="en"> <p> The <strong>Niš Fortress</strong> is a city fortification located in the center of Niš on the right bank of the Nišava River, with a history spanning about <strong>two millennia</strong>, as evidenced by numerous archaeological finds. This cultural monument complex consists of several units, whose common characteristics include a rich cultural layer and a complex urban composition of spaces with different functions and purposes, interconnected and sometimes conflicting. Historical data and architectural heritage indicate that this area developed from the <strong>1st century AD</strong> as a central point in Naisus, where fortifications and urban parts of the settlement were built. <br /><br /> Today, Niš Fortress is among the <strong>best-preserved fortresses</strong> of its kind in Serbia and the Balkans. Its polygonal base, with <strong>eight bastion terraces</strong>, was built on the foundations of ancient, Byzantine, and medieval fortifications. The fortress walls are <strong>8 meters high</strong>, with an average thickness of <strong>3 meters</strong>. The total length of the walls is <strong>2,100 meters</strong>, and the fortress is surrounded by a moat, covering an area larger than <strong>20 hectares</strong>. </p>
                <img alt="Nišville" srcSet={`${nis8_8} 450w, ${nis8}`} loading="lazy" />

              </section> <section lang="en"> <p> The international jazz festival <strong>Nišville</strong>, the most attended jazz festival in Southeast Europe, has consistently promoted European values of <em>multiculturalism</em> and carefully nurtures the musical taste of individuals for years. Confirmation of this is the extensive article "<strong>Nišville – the European Face of Serbia</strong>" published in the European Union publication, the magazine "<em>New Europe</em>", issued in Brussels. <br /><br /> Nišville is held annually in the summer, lasting about a week, featuring world-renowned jazz musicians, as well as emerging young artists from Serbia and abroad. It is one of the few festivals of its kind in Europe that combines <strong>jazz</strong> with various <em>musical styles</em> such as funk, blues, rock, reggae, and ethno music, attracting a diverse audience. </p> </section>

            </>
          )}

      </div>
    </>
  );
};


export default Nis;