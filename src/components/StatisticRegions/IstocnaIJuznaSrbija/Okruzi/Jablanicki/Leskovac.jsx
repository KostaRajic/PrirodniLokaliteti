import leskovac1 from "../../../../../assets/images/JuznaIIstocnaSrbija/JablanickiOkrug/Leskovac/leskovac1.jpg";
import leskovac2 from "../../../../../assets/images/JuznaIIstocnaSrbija/JablanickiOkrug/Leskovac/leskovac2.jpg";
import leskovac3 from "../../../../../assets/images/JuznaIIstocnaSrbija/JablanickiOkrug/Leskovac/leskovac3.jpg";
import leskovac4 from "../../../../../assets/images/JuznaIIstocnaSrbija/JablanickiOkrug/Leskovac/leskovac4.jpg";
import leskovac5 from "../../../../../assets/images/JuznaIIstocnaSrbija/JablanickiOkrug/Leskovac/leskovac5.jpg";
import leskovac6 from "../../../../../assets/images/JuznaIIstocnaSrbija/JablanickiOkrug/Leskovac/leskovac6.jpg";
import leskovac7 from "../../../../../assets/images/JuznaIIstocnaSrbija/JablanickiOkrug/Leskovac/leskovac7.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { jablanickiOkrugPathRoutes } from "./JablanickiOkrugPathRoutes";

export const Leskovac = () => {
  const navigate = useNavigate();

  return (
    <div className="placeBackground">
      <ScrollToTop />
      <FaArrowLeft
        className="arrowLeft"
        onClick={() => navigate(jablanickiOkrugPathRoutes.home)}
        style={{ fill: "white" }}
      />
      <header></header>
      <img src={leskovac1} alt="Leskovac 1" />

      <h2>Leskovac</h2>

      <p style={{ paddingTop: "50px" }}>
        Leskovac je grad i sedište istoimene teritorijalne jedinice u Srbiji.
        Administrativni je centar Jablaničkog upravnog okruga i jedan od
        najvećih gradova u južnoj i istočnoj Srbiji. Nalazi se u Leskovačkoj
        kotlini, poznatoj po srpskom petoročju. Kroz samo naselje protice reka
        Veternica, a nedaleko od Leskovca prolazi Južna Morava, koja prima sve
        veće pritoke grada. Leskovac se nalazi na nadmorskoj visini od 228
        metara, a kotlina u kojoj je smeštena okružena je planinama Radan,
        Goljak i Pasjača na zapadu, Kukavica i Čemernik na jugu, te Babička
        gora, Seličevice i Suva planina na istoku.
      </p>

      <img src={leskovac2} alt="Leskovac 2" />

      <p>
        Grad Leskovac ima 144 naselja, a među njima su Leskovac, Vučje i
        Grdelica naselja gradskog tipa. Kao privredni, politički, društveni,
        kulturno-obrazovni i administrativni centar Jablaničkog okruga, Leskovac
        je poznat po razvijenoj tekstilnoj, hemijskoj, drvoprerađivačkoj i
        prehrambenoj industriji, a takođe i po tome što je grad roštilja i
        kulinarskih specijaliteta. Kao takav, Leskovac je domaćin velikog broja
        kulturnih institucija, među kojima se izdvaja Narodni muzej i Narodna
        biblioteka „Radoje Domanović“. Kulturne aktivnosti u gradu su duboko
        povezane sa njegovim nasleđem, a najpoznatija manifestacija u Leskovcu
        posvećena je leskovačkom roštilju i nosi naziv „Leskovačka
        roštiljijada“. Pored ove manifestacije, u Leskovcu se svake godine
        održavaju i Leskovački karneval i Leskovački internacionalni filmski
        festival (LIFFE).
      </p>

      <img src={leskovac3} alt="Leskovac 3" />

      <p>
        Najraniji naziv za područje u kojem se danas nalazi grad Leskovac bio je
        Glubočica (starosrpski Glьbočica), od praslovenskog glọbokъ, što znači
        „dubok”. Kasnije je, zbog pridjeva „dubok”, ustaljeno ime Dubočica.
        Područje Dubočice su još u 5. veku pre nove ere naseljavali Dardani.
        Prema predanju, ova teritorija je dobila ime po močvarnom terenu između
        Leskovca i sela Strojkovca, koji je bio karakterističan po dubokom blatu
        ili glibu, pa je otuda i nastalo ime Glibočica, odnosno Glubočica.
        Glubočica kao ime oblasti pominje se u periodu vladavine Stefana Nemanje
        i odnosi se na područje sliva reke Jablanice. U putopisima archeologa
        Feliksa Kanica postoje podaci o gradu Dibočici, koji se nalazio na ušću
        reke Lapaštice u reku Medveđu (Jablanicu).
      </p>

      <img src={leskovac4} alt="Leskovac 4" />

      <p>
        Leskovac se nalazi u podnožju brda Hisar (341 m), u srcu prostrane i
        plodne leskovačke kotline, jedne od najvećih kotlina u Srbiji. Ova
        kotlina se prostire duž srednjeg toka Južne Morave, između Niške kotline
        na severu i Vranjske kotline na jugu. Kotlina je dugačka 50, a široka 45
        km, a presijecaju je rečni tokovi Južne Morave, Jablanice, Veternice i
        Puste reke. Kroz sam grad protice reka Veternica.
        <br />
        <br />
        Leskovac leži na nadmorskoj visini od 228 m i smešten je u plodnoj
        kotlini, koja obuhvata 2.250 km² i u kojoj se nalazi još oko 300
        naselja. Ova kotlina je nekada bila deo Panonskog mora. Oko kotline se
        nalaze planine: Goľjak, Čemerik (1.638 m) i Kukavica na jugu, Babička
        gora (1.098 m), Seličevice (903 m), Bukovik, Kruševica i Suva planina na
        istoku, Radan (1.409 m) i Pasjača na zapadu. Na severu se graniči sa
        Niškom kotlinom, dok se na jugu, preko Grdeličke klisure, spaja sa
        Vranjsko-bujanovačkom kotlinom.
      </p>

      <img src={leskovac5} alt="Narodni muzej u Leskovcu" />
      <p>
        Narodni muzej u Leskovcu je neprofitna ustanova u službi društva, koja
        prikuplja, čuva, dokumentuje, proučava i prikazuje istorijsko-umetnička
        dela prikupljena na teritoriji koju pokriva. Muzejski predmeti su
        raspoređeni u zbirke prema njihovoj pripadnosti. Eksponati u stalnoj
        postavci ili izloženi na povremenim muzejskim izložbama proširuju
        saznanja o istorijskim kontekstima njihovog nastanka, upotrebi i
        umetničkoj vrednosti.
        <br />
        <br />
        Kao čuvar, zaštitnik i tumač kulturne baštine, muzej je nezaobilazan
        akter savremenih društvenih kretanja na jugu Srbije, koji se brine o
        unapređenju muzejske delatnosti, širenju opštih kulturnih vrednosti i
        ostvarivanju vaspitno-obrazovnih zadataka.
      </p>

      <img src={leskovac6} alt="Park Devet Jugovića u Leskovcu" />
      <p>
        Park Devet Jugovića u Leskovcu je jedan od važnijih gradskih parkova,
        smešten u samom centru grada. Ovaj park je poznat po svojoj zelenoj
        površini, koja pruža miran i prijatan ambijent za odmor i rekreaciju.
        Park je nazvan po devet junaka iz srpske istorije, poznatih kao
        Jugovići, koji su simbolizovali hrabrost i borbu za slobodu.
        <br />
        <br />U parku se često održavaju različite kulturne i društvene
        manifestacije, a njegove staze i livade pružaju prostor za šetanje,
        sport i opuštanje. Pored toga, park je domaćin i nekoliko spomenika,
        među kojima je i spomenik devet Jugovića, koji je podignut u znak
        sećanja na njihove herojske podvige.
      </p>

      <img src={leskovac7} alt="Spomen-park „Revolucije“" />
      <p>
        Spomen-park „Revolucije“ je memorijalni park koji se nalazi na istočnoj
        padini uzvišenja Hisar u gradu Leskovcu. Kompleks je izgrađen 1971.
        godine, a autor mu je arhitekta Bogdan Bogdanović. Posvećen je borcima
        NOB-a i žrtvama fašizma sa ovog područja, koji su poginuli tokom Drugog
        svetskog rata.
      </p>
    </div>
  );
};
