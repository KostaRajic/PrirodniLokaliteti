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
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { useEffect, useState } from "react";

export const Nis = () => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);

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
    <div className="placeBackground">
      <ScrollToTop />
      <FaArrowLeft className="arrowLeft" onClick={() => navigate(-1)} />
      <header></header>
      <img
        alt="Niš 1"
        srcSet={`${nis1_1} 400w, ${nis1} `}
        loading="lazy" 
      />

      <h2>Niš</h2>

      <p style={{ paddingTop: "50px" }}>
        Niš je gradsko naselje i sedište istoimene teritorijalne jedinice u
        Srbiji. Administrativni je centar Nišavskog upravnog okruga i najveći
        grad južne i istočne Srbije. Nalazi se na reci Nišavi, nedaleko od
        njenog ušća u Južnu Moravu. Grad Niš zauzima površinu od oko 596,73 km²,
        uključujući Nišku Banju i 68 prigradskih naselja.
        <br />
        <br />
        Kroz istoriju, Niš je bio administrativni, vojni i trgovački centar
        različitih država i carstava kojima je pripadao. U antičkom gradu Naisu,
        koji se nalazio na prostoru današnjeg Niša, rođeni su rimski carevi
        Konstantin Veliki i Konstancije III. Njegov geografski položaj učinio ga
        je strateški važnim i zbog toga često meta mnogih osvajača.
        <br />
        <br />
        Tokom vekova, teritorijom današnjeg Niša prošli su Dar­danci, Tračani,
        Iliri, Kelti, Rimljani, Huni, Avari, Vizantinci, Srbi, Bugari i
        Osmanlije. U više navrata grad su osvajali i Mađari, kao i Austrijanci.
        Od Turaka je oslobođen 1878. godine i od tada je ponovo deo Srbije, s
        kratkim prekidima tokom Prvog i Drugog svetskog rata, kada je bio pod
        okupacijom. Uticaj raznih naroda koji su živeli na teritoriji Niša i
        danas se može videti u kulturnom nasleđu grada, pre svega kroz njegovu
        arhitektonsku raznolikost.
      </p>

      <img
        alt="Niš 2"
        srcSet={`${nis10_10} 400w, ${nis10}`}
        loading="lazy" 
      />

      <p>
        Saobraćajna infrastruktura na teritoriji Niša čini ga ključnom
        raskrsnicom kopnenog i vazdušnog saobraćaja na Balkanu, posebno zbog
        intenzivnog prometa ka Turskoj i Grčkoj. Takođe, na teritoriji grada
        nalazi se međunarodni aerodrom Konstantin Veliki, što dodatno doprinosi
        njegovom strateškom značaju.
        <br />
        <br />
        Niš je značajan privredni, univerzitetski, kulturni, verski i politički
        centar Srbije. Univerzitet u Nišu, osnovan 1965. godine, obuhvata 14
        fakulteta i broji oko 30.000 studenata. Grad je ujedno i sedište Niške
        eparhije Srpske pravoslavne crkve.
        <br />
        <br />
        Administrativno, Niš je podeljen na pet gradskih opština: Medijana,
        Palilula, Pantelej, Crveni Krst i Niška Banja.
        <br />
        <br />
        Ime grada Niša spominje se u brojnim istorijskim izvorima od srednjeg
        veka do savremenog doba. Oblik imena varirao je u zavisnosti od jezika
        na kojem je zapisivan, ali su svi nazivi međusobno slični: Naissus,
        Nais, Nisus, Νισσα, Ναισσός, Νισος, نیش (Niş), Niš.
      </p>

      <img
        alt="Spomenik oslobodiocima Niša"
        srcSet={`${nis2_2} 400w, ${nis2}`}
        loading="lazy" 
      />

      <p>
        Spomenik oslobodiocima Niša, lokalno poznat kao "Konj", nalazi se u
        samom centru grada, na Trgu kralja Milana, i obeležava period
        oslobodilačkih ratova protiv Turaka, Bugara i Nemaca.
        <br />
        <br />
        Spomenik prikazuje vojnika Moravca na konju, u prirodnoj veličini, koji
        drži visoko podignutu levu ruku, dok mu je u desnoj zastava slobode.
        <br />
        <br />
        Najznačajnije godine ovog perioda su 1874. i 1877, kada su vođene borbe
        za oslobođenje Niša od Osmanskog carstva, kao i 1915. i 1918. godine,
        koje označavaju početak okupacije i oslobođenje grada u Prvom svetskom
        ratu.
        <br />
        <br />
        Autor ove monumentalne skulpture je Antun Augustinčić, zagrebački vajar.
        Spomenik se smatra jednim od najznačajnijih dela novije jugoslovenske
        skulpture i stavljen je pod zakonsku zaštitu 1983. godine.
      </p>

      <img
        alt="Univerzitet u Nišu"
        srcSet={`${nis3_3} 400w, ${nis3}`}
        loading="lazy" 
      />

      <p>
        Univerzitet u Nišu smešten je u jednoj od najistaknutijih zgrada, koja
        je izgrađena 1887. godine. Tokom svoje istorije, ova zgrada je služila
        kao sedište Suda, Načelstva i Kapetanije, a kasnije i kao prostor za
        kabinet Vlade i Ministarstvo inostranih poslova.
        <br />
        <br />
        Formiranje prvih fakulteta u Nišu započelo je 1960. godine, što je na
        kraju dovelo do osnivanja Univerziteta u Nišu 15. juna 1965. godine.
        <br />
        <br />
        Prvi fakulteti osnovani na ovom univerzitetu bili su Pravno-ekonomski,
        Medicinski i Tehnički fakultet. Danas, Univerzitet u Nišu broji 13
        fakulteta, a najmlađi među njima je Fakultet umetnosti. Ovaj fakultet je
        akreditovan 2009. godine, u trećem ciklusu akreditacije visokoškolskih
        ustanova u Srbiji, zajedno sa Univerzitetima u Beogradu i Novom Sadu.
      </p>

      <img
        alt="Narodni muzej u Nišu"
        srcSet={`${nis4_4} 400w, ${nis4}`}
        loading="lazy" 
      />

      <p>
        Narodni muzej u Nišu prva je ustanova ovog tipa, osnovana 1. aprila
        1933. godine od strane grupe entuzijasta koji su se okupili oko tada
        osnovanog Muzejskog društva. Među najistaknutijim osnivačima i članovima
        bili su Ađam Oršić Slavetović, Rudolf Bratanić, Borivoje Gojković,
        Aleksandar Nenadović i Borivoje Popović.
        <br />
        <br />
        Kao ustanova kompleksnog karaktera, muzej danas u svom fondu ima oko
        40.000 eksponata iz oblasti istorije, istorije umetnosti, arheologije,
        etnologije, kulturne istorije i numizmatike, kao i dve spomen zbirke –
        Stevana Sremca i Branka Miljkovića. U njegovom sastavu nalaze se i
        konzervatorsko-preparatorne radionice, foto laboratorija i biblioteka
        koja broji više od 10.000 knjiga.
      </p>

      <img
        alt="Ćele Kula 1"
        srcSet={`${nis5_5} 400w, ${nis5}`}
        loading="lazy" 
      />
      <p>
        Ćele Kula je jedinstven spomenik ne samo u Evropi, već i u svetu, i
        svedoči o strašnim trenucima u srpskoj istoriji. Da bismo u potpunosti
        razumeli simboliku ovog spomenika, potrebno je da se vratimo u vreme
        Prvog srpskog ustanka, koji je pod vođstvom Karađorđa (Đorđa Petrovića)
        počeo u februaru 1804. godine u Orašcu, s ciljem oslobođenja od
        Osmanlijskog carstva. Povod za početak ustanka bio je događaj poznat kao
        „Seča knezova“, kada su Turci ubili gotovo sve ugledne Srbe. Iako su
        ustanici dali sve od sebe da se oslobode, ustanak je na kraju ugušen u
        oktobru 1813. godine.
        <br />
        <br />
        Nakon bitaka na Ivankovcu, Mišaru i kod Deligrada, gde su ustanici
        izvojevali pobede i pokazali hrabrost, dolazi 1806. godina, kada sreća
        okreće leđa srpskoj vojsci. Rusija, koja je do tada bila važan saveznik,
        mora se povući zbog ratova sa Napoleonom.
        <br />
        <br />U maju 1809. godine dolazi do prvog velikog poraza Srpske vojske u
        bitci na Čegru (brdo blizu Niša). Nakon što je turski sultan shvatio
        ozbiljnost pobune, poslao je ogromnu vojsku da uguši ustanike. Srbi,
        koji su bili iscrpljeni i ostavljeni bez saveznika, uspeli su da okupe
        oko 17.000 vojnika pod komandom vojvode Stevana Sinđelića. S druge
        strane, turska vojska brojala je oko 40.000 vojnika.
      </p>

      <img
        alt="Ćele Kula 2"
        srcSet={`${nis6_6} 400w, ${nis6}`}
        loading="lazy" 
      />
      <p>
        Iako su bili duplo nadjačani, srpski borci su se borili hrabro, a kada
        je vojvoda Stevan Sinđelić shvatio da je izlaz nemoguć, odlučio je da
        kuburom puca u podzemni magacin baruta. Eksplozija je odnela mnoge
        živote, kako srpske, tako i turske vojske. Nakon što su ustanici
        izvojevali pirovu pobedu, Huršid paša, niški vezir, u nameri da se
        osveti i zastraši preostale Srbe, naredio je izgradnju Kule od lobanja,
        na putu za Carigrad.
        <br />
        <br />
        Kula je bila visoka 3 metra i sadržavala je 952 lobanje, raspoređene u
        14 redova na sve četiri strane. Pretpostavlja se da je na vrhu kule bila
        lobanja Stevana Sinđelića, koja je danas izložena na posebnom mestu.
        Svako ko je ulazio u Niš morao je da pređe drveni most i prođe pored
        Ćele Kule. Kasnije je oko nje podignuta kapela, kao znak poštovanja
        prema posmrtnim ostacima poginulih ustanika. Danas Ćele Kula sadrži 58
        preostalih lobanja, i predstavlja surovi podsetnik na istoriju Srbije i
        cenu koju je narod platio za slobodu.
      </p>

      <img
        alt="Niška Tvrđava"
        srcSet={`${nis7_7} 400w, ${nis7}`}
        loading="lazy" 
      />
      <p>
        Niška tvrđava je gradsko utvrđenje smešteno u centru Niša na desnoj
        obali reke Nišave, sa istorijom koja traje oko dva milenijuma, o čemu
        svedoče brojni arheološki nalazi. Ovaj kompleks kulturnog spomenika
        sastoji se od nekoliko celina, čije zajedničke karakteristike uključuju
        bogat kulturni sloj i složenu urbanističku kompoziciju prostora koji ima
        različite funkcije i namene, međusobno povezane i, u nekim slučajevima,
        sukobljene. Istorijski podaci i arhitektonsko nasleđe ukazuju da se ovaj
        prostor od 1. veka n.e. razvijao kao centralna tačka u Naisu, gde su
        nastajale i fortifikacije i urbani delovi naselja.
        <br />
        <br />
        Danas, Niška tvrđava spada među najbolje očuvane utvrde tog tipa u
        Srbiji i na Balkanu. Njena poligonalna osnova, sa osam bastionih terasa,
        izgrađena je na temeljima antičkog, vizantijskog i srednjovekovnog
        utvrđenja. Bedemi tvrđave su visoki 8 metara, a prosečna debljina im je
        3 metra. Ukupna dužina bedema je 2.100 metara, a tvrđava je okružena
        rovom, s površinom većom od 20 hektara.
      </p>

      <img
        alt="Nišvile"
        srcSet={`${nis8_8} 400w, ${nis8}`}
        loading="lazy" 
      />
      <p>
        Internacionalni džez festival Nišvil, najposećeniji džez festival
        jugoistočne Evrope, već godinama dosledno promoviše evropske vrednosti
        multikulturalnosti i pažljivo neguje muzički ukus pojedinaca. Potvrda
        toga je i veliki tekst "Nišvil - evropsko lice Srbije" objavljen u
        glasilu Evropske unije, magazinu "New Europe", koji izlazi u Briselu.
        Nišvil džez festival je Javna Gradska Manifestacija Niša, a odlukom
        Ministarstva kulture Republike Srbije, manifestacija je proglašena
        manifestacijom od Nacionalnog značaja. Nišvil je jedina kulturna
        manifestacija koja je dobila statuu "Najbolje iz Srbije" za 2011.
        godinu, prema izboru Ministarstva trgovine i usluga, Privredne komore
        Srbije i časopisa "Privredni pregled", a dobitnik je i nagrade "Projekat
        budućnosti" u akciji Kluba privrednih novinara Srbije 2010. godine i
        Centra za mala i srednja preduzeća. Turistička organizacija Srbije
        uključuje Nišvil u svoju zvaničnu sajamsku ponudu širom Evrope, a mnoge
        domaće i strane turističke organizacije i agencije pozivaju ljubitelje
        džez muzike da, krajem avgusta, posete Srbiju i mitski grad Niš.
      </p>

      <img
        alt="Park Bubanj"
        srcSet={`${nis9_9} 400w, ${nis9}`}
        loading="lazy" 
      />
      <p>
        Brdo Bubanj, koje se nalazi 3 kilometra od centra Niša, bilo je mesto
        masovnih streljanja zarobljenika tokom Drugog svetskog rata, a žrtve su
        bile pritvorene u Koncentracionom logoru u Nišu. Nakon oslobođenja, na
        ovom stratištu je podignut spomenik u obliku tri stisnute pesnice, koje
        simbolizuju muža, ženu i dete, kao i njihov zajednički otpor protiv
        zločina. Pesnice su različite visine: 13, 14 i 16 metara, i svojom
        impozantnošću ostavljaju snažan utisak na sve posetioce ovog
        memorijalnog parka.
      </p>

      <img
        alt="Mediana"
        srcSet={`${nis11_11} 400w, ${nis11}`}
        loading="lazy" 
      />
      <p>
        Mediana je arheološko nalazište koje se nalazi u istočnom delu Niša, na
        pola puta do Niške Banje, i predstavlja jedno od najznačajnijih rimskih
        naselja na ovom području. Nastalo je u kasnom periodu vladavine cara
        Dioklecijana, krajem 3. veka, ili početkom 4. veka, za vreme cara
        Konstantina Velikog.
        <br />
        <br />
        Mediana je bila rimski kompleks letnjih rezidencija, urbanih vila i
        velikog poljoprivrednog gazdinstva, otvorenog tipa. Lokacija je pored
        važnog putnog pravca koji je vodio od Naisa (današnji Niš) prema istoku,
        ka Serdici (današnji Sofija), a potom ka Konstantinopolju (današnji
        Istanbul).
      </p>
    </div>
  );
};
