import vranje1 from "../../../../../assets/images/JuznaIIstocnaSrbija/PcinjskiOkrug/Vranje/vranje1.jpg";
import vranje2 from "../../../../../assets/images/JuznaIIstocnaSrbija/PcinjskiOkrug/Vranje/vranje2.jpg";
import vranje3 from "../../../../../assets/images/JuznaIIstocnaSrbija/PcinjskiOkrug/Vranje/vranje3.jpg";
import vranje4 from "../../../../../assets/images/JuznaIIstocnaSrbija/PcinjskiOkrug/Vranje/vranje4.jpg";
import vranje5 from "../../../../../assets/images/JuznaIIstocnaSrbija/PcinjskiOkrug/Vranje/vranje5.jpg";
import vranje6 from "../../../../../assets/images/JuznaIIstocnaSrbija/PcinjskiOkrug/Vranje/vranje6.jpg";
import vranje7 from "../../../../../assets/images/JuznaIIstocnaSrbija/PcinjskiOkrug/Vranje/vranje7.jpg";
import vranje8 from "../../../../../assets/images/JuznaIIstocnaSrbija/PcinjskiOkrug/Vranje/vranje8.jpg";
import vranje9 from "../../../../../assets/images/JuznaIIstocnaSrbija/PcinjskiOkrug/Vranje/vranje9.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { pcinjskiOkrugPathRoutes } from "./PcinjskiOkrugPathRoutes";

export const Vranje = () => {
  const navigate = useNavigate();

  return (
    <div className="placeBackground">
      <ScrollToTop />
      <FaArrowLeft className="arrowLeft" onClick={() => navigate(pcinjskiOkrugPathRoutes.home)} />
      <header></header>
      <img src={vranje1} alt="Vranje 1" />

      <h2>Vranje</h2>

      <p style={{ paddingTop: "50px" }}>
        Vranje je više puta bilo osvajano, pre nego što je 1207. godine postalo
        deo Velikžupanijske Srbije. Kroz istoriju, Vranjem su vladale mnoge
        srpske plemićke porodice, sve dok ga 1455. godine nije pokorilo Osmansko
        carstvo. Tokom osmanske vlasti, Vranje je imalo značajnu ulogu jer se
        nalazilo na raskrsnici važnih puteva, a u jednom periodu bilo je i
        sedište kadiluka. Grad je oslobođen 31. januara 1878. godine i postao je
        sedište moravskog sreza. Godine 1904. Vranje je pogodio zemljotres, koji
        je prouzrokovao značajnu štetu na infrastrukturi.
      </p>

      <img src={vranje2} alt="Vranje 2" />

      <p>
        Tokom Prvog svetskog rata, Vranje je bilo okupirano od strane Kraljevine
        Bugarske, a nakon završetka rata postalo je deo Kraljevine Jugoslavije,
        da bi od 1929. godine pripadalo Varadarskoj banovini. U Drugom svetskom
        ratu, Vranje je ponovo okupirala Kraljevina Bugarska, a nakon
        oslobođenja postaje sedište Pčinjskog okruga. Tada počinje njegov
        industrijski i urbanistički razvoj, a grad postaje tekstilni, drvni i
        metalurški centar unutar SFRJ.
      </p>

      <img src={vranje3} alt="Vranje 3" />

      <p>
        Grad je poznat po muzici i trubačkim orkestrima, kao i po delima čuvenog
        srpskog realističkog pisca Borislava Stankovića. U Vranju se nalaze
        brojne institucije i spomenici posvećeni njegovom imenu. Grad je domaćin
        mnogim manifestacijama, među kojima su najpoznatije Stari dani, Borina
        nedelja i Borini pozorišni dani. Vranje je prvi grad na Balkanu koji je
        UNESCO proglasio gradom muzike. Takođe, Vranje je sedište Eparhije
        vranjske i 4. brigade Vojske Srbije.
      </p>

      <img src={vranje4} alt="Vranje 4" />

      <p>
        Ime grada Vranje potiče iz davne prošlosti, iako je kroz istoriju,
        naročito nakon oslobođenja od Turaka, bilo konfuzija i nesuglasica oko
        naziva. Postoje tvrdnje da je Vranje tokom vremena nosilo i više drugih
        imena. Vranjanci su uvek koristili ime Vranje, koje se prvi put pominje
        u vreme Stefana Dečanskog. Ovo ime odnosilo se isključivo na naseljeno
        mesto, dok je srednjovekovna župa nosila naziv Vranja. To je izazivalo
        zabunu, naročito u drugoj polovini 19. veka, kada su mnogi naučnici
        počeli da istražuju grad. Pokazalo se da je u to vreme Vranje zvanično
        nosilo naziv Vranja. U srednjovekovnim darovnim poveljama i drugim
        dokumentima grad je pominjan kao Vranja, Vranija, Vrania, Vrajna, Viran
        i Viranja. Kako će se grad zvati, zavisilo je i od jezika na kojem su
        pisani dokumenti. „Da bi zabuna bila veća, pojavile su se i legende koje
        govore da je Vranje bilo poznato kao Vrana, Golubinje ili Golubićeva“
        piše Miodrag Pešić u svojoj knjizi „Vranje“.
      </p>

      <img src={vranje5} alt="Vranje 5" />
      <p>
        Vranje je ekonomski, politički i kulturni centar Pčinjskog okruga, koji
        obuhvata opštine Bosilegrad, Bujanovac, Vladičin Han, Preševo,
        Surdulicu, Trgovište i grad Vranje. Grad se nalazi u severozapadnom delu
        Vranjske kotline, na levoj obali Južne Morave. Reka i grad su povezani
        magistralnim putem i železničkom prugom, koji na severu vode ka:
        Leskovcu (70 km), Nišu (110 km) i Beogradu (347 km), a na jugu ka:
        Kumanovu (56 km), Skoplju (91 km) i Solunu (354 km).
        <br />
        <br />
        Vranje je smešteno u podnožju planina Pljačkovice (1231 m), Krstilovice
        (1154 m) i Pržare (731 m). Od granice sa Bugarskom udaljeno je 70 km, a
        od Severne Makedonije 40 km.
      </p>

      <img src={vranje8} alt="Narodni muzej u Vranju" />
      <p>
        Narodni muzej u Vranju osnovan je 1960. godine u staroj zgradi Selamluk
        (jednoj od zgrada kompleksa Pašinih konaka), ukazom Narodnog odbora
        sreza Vranja kao Muzej narodnoslobodilačkog rata.
        <br />
        <br />
        Vremenom, kako su se zbirke formirale i uvećavale, prerastao je u muzej
        kompleksnog tipa, te je odlukom SO Vranje 1992. godine preimenovan u
        Narodni muzej u Vranju. Osnivanjem Muzeja kuće Bore Stankovića 1967.
        godine i Galerije Narodnog muzeja 1995. godine, postali su sastavni deo
        Narodnog muzeja u Vranju.
        <br />
        <br />
        Od svog osnivanja do danas, muzej je postao mesto dinamičnih izložbenih
        sezona, kako savremenog stvaralaštva, tako i drugih tematskih izložbi i
        prikladnih gradskih programa.
        <br />
        <br />
        Od 2003. godine, u sastav muzeja ulazi i stari Hamam.
        <br />
        <br />
        Pod upravom muzeja od 2019. godine nalazi se i Pribojićeva kuća, koja
        ima funkciju administrativnog centra.
        <br />
        <br />
        Od 2021. godine, zgrada Haremluka je pod upravom Narodnog muzeja Vranje,
        čime je čitav kompleks Pašinih konaka (sa zgradama Selamluka i
        Haremluka) kompletiran.
      </p>

      <img src={vranje9} alt="Saborna crkva Svete Trojice u Vranju" />

      <p>
        Saborna crkva Svete Trojice u Vranju je glavni i najveći pravoslavni
        hram u ovom gradu, kao i centralna crkva Vranjske eparhije Srpske
        pravoslavne crkve. Ona je proglašena za nepokretno kulturno dobro,
        spomenik kulture. Današnji Saborni hram je izgrađen na mestu prethodne
        crkve.
        <br />
        <br />
        Krajem 18. i početkom 19. veka, Vranje je doživelo privredni uspon, što
        je pratilo buđenje građanske i srpske nacionalne svesti, ali i obnovu
        verskog života nakon ukidanja Pećke patrijaršije.
        <br />
        <br />
        Velika Saborna crkva je izgrađena uz pomoć vranjskog paše Huseina,
        „velikog prijatelja Srba“, što je izazvalo nezadovoljstvo domaćih
        Turčina. Turci i Arnauti iz okolnih sela su 1843. godine, na Spasovdan,
        opljačkali hrišćane i oskrnavili crkve u varoši.
        <br />
        <br />
        Pod uticajem međunarodne javnosti i diplomatskih predstavnika, kao i na
        zahtev Vranjanaca, Porta je pohvatala i kaznila pobunjenike. Carska
        komisija je procenila štetu nanetu srušenoj Sabornoj crkvi. Pošto šteta
        nije bila nadoknađena, Vranjanci su sami, iz svojih sredstava i radom,
        podigli novu crkvu, najverovatnije na temeljima prethodne. Crkva je
        građena od 1858. do 1860. godine, a njen graditelj bio je Andreja
        Damjanov, iz poznate mijačke porodice, poreklom iz Tresočnja u debarskom
        kraju. Njegov brat je izradio oltarsku pregradu.
        <br />
        <br />
      </p>

      <img src={vranje6} alt=" Kuća Bore Stankovića" />
      <p>
        Kuća Bore Stankovića nalazi se u Vranju, u Babi Zlatinoj ulici broj 9, u
        nekadašnjoj Donjoj mali, na placu koji je kupila Borina baka, po kojoj
        je ulica i dobila ime. Ovaj objekat je značajan jer se upravo u ovoj
        kući rodio pisac Borisav Stanković. Kuća Bore Stankovića ima status
        spomenika kulture od velikog značaja. Izgrađena je 1855. godine i nalazi
        se u Babi Zlatinoj ulici, koja je dobila ime po Boriinoj baki sa očeve
        strane. Kuću je podigla "baba Zlata". Početkom 20. veka, opština je
        otkupila kuću, rekonstruisala je i od tipično vranjskog domaćinstva
        napravila muzejski objekat. Danas je u ovoj kući smešten muzej koji
        pripada Narodnom muzeju u Vranju.
      </p>

      <img src={vranje7} alt="Beli most u Vranju" />
      <p>
        Beli most, poznat i kao most ljubavi, izgrađen je 1844. godine u Vranju.
        Most se nalazi iznad Vranjske reke, u ulici Devet Jugovića, i prikazan
        je na grbu grada Vranja. Smatra se nepokretnim kulturnim dobrom i
        spomenikom kulture.
        <br />
        <br />
        Legenda kaže da je most podigla majka Turkinje Ajše u spomen nesrećnoj
        ljubavi njene ćerke i srpskog pastira Stojana.
        <br />
        <br />
        Po rođenju ćerke Ajše, Selim-begu su proročice predvideo da će se ona
        zaljubiti u Srbina. Iako je otac pokušavao da zatvori ćerku kako bi
        sprečio proročanstvo, nije uspeo u tome.
        <br />
        <br />
        Kada je zatekao Stojana i Ајšu zagrljene kraj reke pokušao je da ubije
        srpskog pastira. Međutim, usmrtio je sopstvenu ćerku koja je svojim
        telom zaštitila mladića kojeg je volela. Nakon toga je i Stojan svojim
        nožem oduzeo sebi život.
        <br />
        <br />
        ChatGPT said: Na mestu gde se odigrao događaj, podignut je most, a na
        most je postavljena ploča, tzv. tarih, na kojoj na turskom i arapskom
        jeziku stoji natpis: „Proklet neka je onaj koji rastavi što ljubav
        sastavi“.
      </p>
    </div>
  );
};
