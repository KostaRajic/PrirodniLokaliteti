import jerma1 from "../../../../../assets/images/JuznaIIstocnaSrbija/PirotskiOkrug/KanjonRekeJerme/desktop/kanjonRekeJerme1.jpg";
import jerma2 from "../../../../../assets/images/JuznaIIstocnaSrbija/PirotskiOkrug/KanjonRekeJerme/desktop/kanjonRekeJerme2.jpg";
import jerma3 from "../../../../../assets/images/JuznaIIstocnaSrbija/PirotskiOkrug/KanjonRekeJerme/desktop/kanjonRekeJerme3.jpg";
import jerma4 from "../../../../../assets/images/JuznaIIstocnaSrbija/PirotskiOkrug/KanjonRekeJerme/desktop/kanjonRekeJerme4.jpg";
import jerma5 from "../../../../../assets/images/JuznaIIstocnaSrbija/PirotskiOkrug/KanjonRekeJerme/desktop/kanjonRekeJerme5.jpg";
import jerma11 from "../../../../../assets/images/JuznaIIstocnaSrbija/PirotskiOkrug/KanjonRekeJerme/mobile/kanjonRekeJermeM1.jpg";
import jerma22 from "../../../../../assets/images/JuznaIIstocnaSrbija/PirotskiOkrug/KanjonRekeJerme/mobile/kanjonRekeJermeM2.jpg";
import jerma33 from "../../../../../assets/images/JuznaIIstocnaSrbija/PirotskiOkrug/KanjonRekeJerme/mobile/kanjonRekeJermeM3.jpg";
import jerma44 from "../../../../../assets/images/JuznaIIstocnaSrbija/PirotskiOkrug/KanjonRekeJerme/mobile/kanjonRekeJermeM4.jpg";
import jerma55 from "../../../../../assets/images/JuznaIIstocnaSrbija/PirotskiOkrug/KanjonRekeJerme/mobile/kanjonRekeJermeM5.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { pirotskiOkrugPathRoutes } from "./PirotskiOkrugPathRoutes";

export const KanjonRekeJerme = () => {
  const navigate = useNavigate();

  return (
    <div className="placeBackground">
      <ScrollToTop />
      <FaArrowLeft
        className="arrowLeft"
        onClick={() => navigate(pirotskiOkrugPathRoutes.home)}
        style={{ fill: "white" }}
      />
      <header></header>
      <img srcSet={`${jerma11} 400w, ${jerma1} `} alt="Kanjon reke Jerme 1" />

      <h2>Kanjon reke Jerme</h2>

      <p style={{ paddingTop: "50px" }}>
        Kanjon reke Jerme je impresivan prirodni fenomen koji se nalazi u
        jugoistočnom delu Srbije, a nastao je kroz milionima godina intenzivnih
        erozionih procesa. Ovaj kanjon je deo doline reke Jerme, koja se
        prostire na 72 kilometra. Smešten je između impozantnih stena Vlaške
        planine sa leve strane i planine Greben sa desne strane reke, stvarajući
        prelepu prirodnu kulisu. Smatra se jednim od najužih kanjona u Evropi, a
        meštani deo kanjona koji je najuzniji nazivaju ’’Cediljka’’ zbog
        njegovog karakterističnog oblika.
      </p>

      <img srcSet={`${jerma22} 400w, ${jerma2} `} alt="Kanjon reke Jerme 2" />

      <p>
        Kanjon reke Jerme nalazi se u regionu između gradova Pirot, Dimitrovgrad
        i Babušnica. Reka Jerma, koja prolazi kroz ovu oblast, oblikovala je
        ovaj impresivni kanjon tokom svog dugotrajnog toka. Ovaj prirodni
        fenomen star je oko 65 miliona godina, koliko je stara i sama reka
        Jerma. Na nekim mestima, visina zidina kanjona doseže i do 300 metara.
        Stene kanjona imaju bogat spektar boja, od crvene do oker, što stvara
        očaravajuće prizore tokom različitih delova dana. Kanjon reke Jerme
        proteže se na dužini od 15 kilometara i često se opisuje kao jedan od
        najlepših kanjona u Srbiji, a i na Balkanu. U neposrednoj blizini
        kanjona nalazi se i Zvonačka Banja.
      </p>

      <img srcSet={`${jerma33} 400w, ${jerma3} `} alt="Kanjon reke Jerme 3" />

      <p>
        Kanjon reke Jerme dom je raznovrsnom biljnom i životinjskom svetu. U
        ovom području mogu se uočiti retke vrste ptica grabljivica koje lete
        iznad kanjona. Suri orao je nesumnjivo gospodar neba ovog kraja, a ova
        veličanstvena ptica jedina nastanjuje ovu oblast u našoj zemlji. Šume
        oko kanjona pružaju utočište različitim divljim životinjama, kao što su
        jelene, divlje svinje i lisice. Ljubitelji prirode i ptica mogu uživati
        u posmatranju i fotografisanju ovog bogatog ekosistema.
      </p>

      <img srcSet={`${jerma44} 400w, ${jerma4} `} alt="Kanjon reke Jerme 4" />

      <p>
        Do 1927. godine, kanjon reke Jerme bio je potpuno izolovan i
        nepristupačan, sve dok nije došlo do ključnog trenutka kada je kroz ovu
        divlju klisuru probijena trasa uskog koloseka železnice. Ovaj važan
        događaj bio je deo plana za obezbeđivanje pristupa rudniku kamena uglja
        poznatom kao “Rakita”. U šezdesetim godinama 20. veka, rudnik je
        zatvoren, a sedamdesetih godina izgrađen je asfaltni put, koji je
        zamenio železničku prugu.
        <br />
        <br />
        Izgradnja puta otvorila je vrata prirodnoj lepoti kanjona reke Jerme,
        kao i Poganovskom manastiru, koji se nalazi uz samu reku. Zbog teške
        pristupačnosti kanjona pre 1927. godine, Poganovski manastir je ostao
        netaknut od mnogih osvajača kroz svoju istoriju.
      </p>

      <img srcSet={`${jerma55} 400w, ${jerma5} `} alt="Kanjon reke Jerme 5" />

      <p>
        Kanjon reke Jerme pruža širok spektar aktivnosti za posetioce koji žele
        da istraže ovu prelepu regiju. Pešačenje, planinarenje i vožnja biciklom
        najpopularniji su izbori među ljubiteljima prirode i avanturizma. Tokom
        letnjih meseci, reka Jerma postaje savršeno mesto za ribolov i kupanje.
        <br />
        <br />
        Za one koji žele da se upoznaju sa bogatom istorijom ovog kanjona,
        postoji mnogo pešačkih staza koje vode kroz značajna istorijska i
        kulturna mesta. Takođe, organizovane ture omogućavaju posetiocima da se
        detaljnije upoznaju sa ovom fascinantnom oblasti i njenim kulturnim
        nasleđem.
      </p>
    </div>
  );
};
