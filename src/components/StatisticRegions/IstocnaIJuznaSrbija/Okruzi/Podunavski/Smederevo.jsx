import smederevo1 from "../../../../../assets/images/JuznaIIstocnaSrbija/PodunavskiOkrug/Smederevo/smederevo1.jpg";
import smederevo2 from "../../../../../assets/images/JuznaIIstocnaSrbija/PodunavskiOkrug/Smederevo/smederevo2.jpg";
import smederevo3 from "../../../../../assets/images/JuznaIIstocnaSrbija/PodunavskiOkrug/Smederevo/smederevo3.jpg";
import smederevo4 from "../../../../../assets/images/JuznaIIstocnaSrbija/PodunavskiOkrug/Smederevo/smederevo4.jpg";
import smederevo5 from "../../../../../assets/images/JuznaIIstocnaSrbija/PodunavskiOkrug/Smederevo/smederevo5.jpg";
import smederevo6 from "../../../../../assets/images/JuznaIIstocnaSrbija/PodunavskiOkrug/Smederevo/smederevo6.jpg";
import smederevo7 from "../../../../../assets/images/JuznaIIstocnaSrbija/PodunavskiOkrug/Smederevo/smederevo7.jpg";
import smederevo8 from "../../../../../assets/images/JuznaIIstocnaSrbija/PodunavskiOkrug/Smederevo/smederevo8.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { podunavskiOkrugPathRoutes } from "./PodunavskiOkrugPathRouts";

export const Smederevo = () => {
  const navigate = useNavigate();

  return (
    <div className="placeBackground">
      <ScrollToTop />
      <FaArrowLeft
        className="arrowLeft"
        onClick={() => navigate(podunavskiOkrugPathRoutes.home)}
        style={{ fill: "white" }}
      />
      <header></header>
      <img src={smederevo1} alt="Smederevo 1" />

      <h2>Smederevo</h2>

      <p style={{ paddingTop: "50px" }}>
        Smederevo je gradsko naselje i sedište istoimene teritorijalne jedinice
        u Srbiji. To je administrativni centar Podunavskog upravnog okruga.
        Smederevo se nalazi na obalama Dunava, u severoistočnom delu Srbije.
        Grad je postao prestonica Srpske despotovine 1430. godine sa izgradnjom
        Smederevske tvrđave, nakon što je Beograd, dotadašnja prestonica, vraćen
        Ugarskoj 1427. godine. Smederevsku tvrđavu je izgradio tadašnji srpski
        despotski vladar Đurađ Branković. Tvrđava je tada bila najveća
        ravničarska tvrđava u Evropi. Danas je Smederevo veliki industrijski
        centar.
      </p>

      <img src={smederevo2} alt="Smederevo 2" />

      <p>
        Smederevo ima više stepsku kontinentalnu klimu nego umereno
        kontinentalnu. Srednja godišnja temperatura u gradu je 11,4 °C. Srednja
        temperatura u januaru je nešto ispod nule (-0,6 °C), dok u julu prosečno
        iznosi 21,9 °C. Tokom proleća (mart, april i maj) prosečna temperatura
        je oko 14 °C. Jesenje mesece (septembar, oktobar i novembar) karakteriše
        prosečna temperatura od 9,6 °C. U Smederevu godišnje padne oko 650 mm
        padavina. Najviše padavina je u maju (72 mm) i junu (86 mm), dok je
        najmanje u februaru (38 mm).
      </p>

      <img src={smederevo3} alt="Smederevo 3" />

      <p>
        Prvi pisani trag o Smederevu datira iz 1019. godine, u povelji
        vizantijskog cara Vasilija II, kada je ovde uspostavljena jedna od
        episkopija novostvorene Ohridske arhiepiskopije. Sledeći pomen o
        Smederevu nalazi se u povelji vladara Kraljevine Srbije, kneza Lazara,
        iz 1381. godine, u kojoj se pominje manastir Ravanica i sela i imanja
        koja su poklonjena „u Smederevu ljudini Bogosavu s opštinom i s
        baštinom“. Naselje dobija na značaju tek u 14. veku, kada je srpska
        država počela da se povlači prema severu pred turskim napadima. Godine
        1427, nakon smrti svog prethodnika Stefana, despot Đurađ Branković je,
        prema prethodnom dogovoru, morao da vrati Beograd ugarskom kralju.
      </p>

      <img
        src={smederevo4}
        alt="Smederevo 4"
      />

      <p>
        Kao grad sa tradicijom prestonice, Smederevo se izdvojilo odmah po
        izgradnji Smederevske tvrđave 1430. godine. Sve do 1459. godine, grad je
        bio sedište Despotovine na čelu sa despotom Đurađem Brankovićem. Nakon
        toga, grad prelazi pod vlast Turaka. Iako je bio razoren u sukobima
        1459. godine, Turci su prepoznali njegov izuzetno povoljan položaj na
        Dunavu i dogradili tvrđavu prema sopstvenim potrebama. Tokom dugog
        perioda, Smederevo je bilo sedište Smederevskog sanđaka, sve do dolaska
        Austrijanaca 1718. godine. Grad je 1739. ponovo prešao pod tursku vlast.
        Ipak, razvoj grada tokom vladavine Austrijanaca nastavljen je otvaranjem
        prve osnovne škole 1806. godine, za vreme Prvog srpskog ustanka. Tada je
        u gradu osnovan Praviteljstvujušči sovjet, na čelu sa Dositejem
        Obradovićem, a Smederevo je ponovo postalo prestonica.
      </p>

      <img src={smederevo5} alt="Muzej u Smederevu" />
      <p>
        Muzej u Smederevu je lokalna muzejska ustanova kompleksnog tipa, a u
        njegovom sastavu se nalaze zbirke iz oblasti prirodnih nauka,
        arheologije, numizmatike, istorije, etnologije, umetnosti, kao i zbirka
        savremene umetnosti.
        <br />
        <br />
        Osnovna delatnost muzeja, osim muzeoloških aktivnosti kao što su
        prikupljanje, proučavanje, stručna i naučna obrada, zaštita i
        prezentacija predmeta od kulturno-istorijskog, odnosno muzeološkog
        značaja na teritoriji opštine Smederevo, obuhvata i kulturno-prosvetnu,
        pedagošku, izložbenu, izdavačku i promotivnu delatnost. Pored stalne
        izložbene postavke, u muzeju se organizuju brojne tematske izložbe, kao
        i različite promocije i predavanja.
      </p>

      <img src={smederevo6} alt="Vila Zlatni Breg" />
      <p>
        Vila Zlatni Breg (poznata i kao Kraljev vinograd ili vila/letnjikovac
        dinastije Obrenović) nalazi se na najlepšoj lokaciji u Smederevu, u
        naselju Plavinac, koje je okrenuto ka severu prema Dunavu i banatskoj
        ravnici. Knez Miloš je 1829. godine kupio vinograd u Smederevu. U martu
        1836. godine, knez Miloš je poslao Jovanči 500 sadnica najboljih vrsta
        smederevske loze kako bi ukrasio vrt oko novog objekta. <br />
        <br />
        Ispred letnjikovca nalazi se veliki oblikovani kamen, biňektaš, koji je
        knezu služio za lakše uzjahivanje konja, jer je bio srednjeg rasta i
        čvrst. Kasnije je kralj Milan Obrenović uveo luksuz i lakaje u ovaj
        letnjikovac. Kraljevski par se često odmarali tu, pa je delovalo kao da
        se dvor preselio u Smederevo.
      </p>

      <img src={smederevo7} alt="Karađorđev dud" />
      <p>
        Karađorđev dud je spomenik prirode botaničkog značaja, ali i istorijsko
        mesto u Smederevu. Na ovom drvetu je 8. novembra 1805. godine vođa Prvog
        srpskog ustanka, Karađorđe, u prisustvu srpskih starešina i ustanika,
        primio ključeve Smederevske tvrđave od turskog zapovednika grada,
        dizdara Muharema Guše. Predaja ključeva obavljena je sa počastima, jer
        su Turci ostavili mnogo topova i municije, dok je Karađorđe dozvolio da
        se povuku sa vojnim počastima i sitnim oružjem, a zatim da lađama odu
        niz Dunav u Vidin, Bugarsku.
        <br />
        <br />
        Ispod ovog drveta, 8. novembra 1805. godine, dizdar Muharem Guša je
        predao ključeve Smedereva Karađorđu.
      </p>

      <img src={smederevo8} alt="Izletište Jugovo" />
      <p>
        Izletište Jugovo je popularno odredište u okolini Smedereva, koje se
        nalazi na jugoistočnim padinama Avale, a karakteriše ga prirodna lepota,
        mirna i prijatna atmosfera, idealna za odmor i rekreaciju. Ovo izletište
        je omiljeno među posetiocima koji žele da uživaju u prirodi, šetnjama,
        piknicima ili vožnji biciklom. <br />
        <br />
        Jugovo je poznato po bogatstvu flore i faune, kao i prelepim pejzažima
        koji pružaju opuštanje i osveženje. Zelenilo i svež vazduh čine ovo
        mesto savršenim za beg od gradske gužve. Pored toga, izletište je
        poznato i po svojim pratećim sadržajima kao što su ugostiteljski
        objekti, akva park, sportski tereni, kao i prostori za organizovanje
        različitih društvenih događanja.
        <br />
        <br />
        Za ljubitelje prirode i aktivnog odmora, Jugovo je odličan izbor za
        vikend izlete, šetnje ili jednodnevne posete.
      </p>
    </div>
  );
};
