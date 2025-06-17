import rajkovaPecina1 from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/RajkovaPecina/desktop/rajkovaPecina1.jpg";
import rajkovaPecina2 from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/RajkovaPecina/desktop/rajkovaPecina2.jpg";
import rajkovaPecina3 from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/RajkovaPecina/desktop/rajkovaPecina3.jpg";
import rajkovaPecina4 from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/RajkovaPecina/desktop/rajkovaPecina4.jpg";
import rajkovaPecina5 from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/RajkovaPecina/desktop/rajkovaPecina5.jpg";
import rajkovaPecina6 from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/RajkovaPecina/desktop/rajkovaPecina6.jpg";
import rajkovaPecina7 from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/RajkovaPecina/desktop/rajkovaPecina7.jpg";
import rajkovaPecina11 from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/RajkovaPecina/mobile/rajkovaPecinaM1.jpg";
import rajkovaPecina22 from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/RajkovaPecina/mobile/rajkovaPecinaM2.jpg";
import rajkovaPecina33 from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/RajkovaPecina/mobile/rajkovaPecinaM3.jpg";
import rajkovaPecina44 from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/RajkovaPecina/mobile/rajkovaPecinaM4.jpg";
import rajkovaPecina55 from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/RajkovaPecina/mobile/rajkovaPecinaM5.jpg";
import rajkovaPecina66 from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/RajkovaPecina/mobile/rajkovaPecinaM6.jpg";
import rajkovaPecina77 from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/RajkovaPecina/mobile/rajkovaPecinaM7.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { borskiOkrugPathRoutes } from "./BorskiOkrugPathRoutes";

export const RajkovaPecina = () => {
  const navigate = useNavigate();

  return (
    <div className="placeBackground">
      <ScrollToTop />
      <FaArrowLeft
        className="arrowLeft"
        onClick={() => navigate(borskiOkrugPathRoutes.home)}
        style={{ fill: "white" }}
      />
      <header></header>
      <img srcSet={`${rajkovaPecina44} 400w, ${rajkovaPecina4} `} alt="Rajkova Pećina 1" />

      <h2>Rajkova Pećina</h2>

      <p style={{ paddingTop: "50px" }}>
        Rajkova pećina spada među najznačajnije turističke pećine u Srbiji.
        Smeštena je na udaljenosti od 2,5 km od Majdanpeka i prepoznatljiva je
        po izuzetno belim pećinskim ukrasima.
      </p>

      <img srcSet={`${rajkovaPecina22} 400w, ${rajkovaPecina2} `} alt="Rajkova Pećina 2" />

      <p>
        Rajkova pećina je dobila ime po Rajku Vojvodi, za koga se pretpostavlja
        da je živeo u 19. veku. Prema predanju, danju je bio mehandžija, dok je
        noću pljačkao turske karavane i skrivao blago u ovoj pećini.
        <br />
        <br />
        Prvi ju je istražio geograf Jovan Cvijić 1894. godine, ali su dalja
        istraživanja nastavljena tek tokom sedamdesetih godina 20. veka, pod
        vođstvom dr Radenka Lazarevića. Za turiste je zvanično otvorena 1975.
        godine.
      </p>

      <img srcSet={`${rajkovaPecina33} 400w, ${rajkovaPecina3} `} alt="Rajkova Pećina 3" />

      <p>
        Rajkova pećina je jedna od najvažnijih turističkih pećina u Srbiji.
        Smeštena je u istočnom delu zemlje, u blizini Majdanpeka. Proglašena je
        Spomenikom prirode od strane Skupštine opštine Majdanpek. Cela okolina
        izvorišta Malog Peka bogata je raznovrsnom florom i faunom, te
        predstavlja jedinstveno prirodno i speleološko bogatstvo. Zbog toga je
        postala deo prvog geoparka u Srbiji — Đerdap UNESCO geopark.
      </p>

      <img srcSet={`${rajkovaPecina11} 400w, ${rajkovaPecina1} `} alt="Rajkova Pećina 4" />

      <p>
        Rajkova pećina je nastala radom ponornice Rajkove reke. Proces njenog
        stvaranja bio je višefazan, što se vidi na terasama koje su očuvane na
        zidovima kanala. Klimatske oscilacije su izazvale zasipanje pećine
        rečnim nanosima debljine 1,5 metara. U narednoj fazi počelo je
        usađivanje korita, podsecanje i rušenje bigrene kore i nakita na njoj.
        Mlađi procesi uključuju depoziciju crvenice i travertina.
        <br />
        <br />
        Rajkova pećina je rečna, protokna pećina; kroz nju protiče istoimena
        reka, koja izvire sa Kaptanskih livada i nakon površinskog toka dugog
        3.625 metara ponire ispod vertikalnog krečnjačkog odseka visine 50-100
        metara, na kontaktu kremenih škriljaca i gornjajurskih krečnjaka.
        Pojavljuje se na visini od 427,58 metara. Površinski teče 22,5 metara i
        spaja se sa Paskovom rekom. Od ta dva potoka nastaje Mali Pek.
        <br />
        <br />
        Rajkova pećina se sastojala od dve odvojene celina: Ponorske i Izvorski
        pećine, a svaka celina ima po dva horizonta: rečni i suvi.
      </p>

      <img srcSet={`${rajkovaPecina55} 400w, ${rajkovaPecina5} `} alt="Rajkova Pećina 5" />
      <p>
        Rečni horizont je jednostavan pećinski kanal sa niskim kaskadama i
        džinovskim loncima. Dno aktivnog kanala prekriveno je peskom i šljunkom,
        a kanal se završava sifonom. U izvorskom delu takođe se izdvajaju suvi i
        rečni horizont. U rečnom delu postoji uski rečni kanal sa stenovitom,
        isprekidanom terasom višeg nivoa, na 6 m nadmorske visine. Uzvodno se
        kanal završava sifonom.
        <br />
        <br />U suvom horizontu nalazi se nekoliko dvorana koje su ukrašene
        izuzetno lepim nakitom, dok su na dnu formirane travertinske kade.
        Pećina sadrži čitav sistem dvorana, kanala i hodnika, a odlikuje se i
        pećinskim nakitom u obliku stalaktita, stalagmita i stubova od snežno
        belog kristalnog kalcita.
        <br />
        <br />
        Temperatura pećine je stalnih 8 stepeni Celzijusa, a vlažnost vazduha
        100%, zbog čega se za posetu pećini preporučuje toplija garderoba, čak i
        tokom letnjeg perioda.
        <br />
        <br />
        Fosilna fauna pećine obuhvata: Ursus spelaeus (pećinski medved), Sus
        scrofa (divlja svinja), Cervus elaphus (jelen).
      </p>

      <img srcSet={`${rajkovaPecina66} 400w, ${rajkovaPecina6} `} alt="Rajkova Pećina 5" />
      <p>
        Rečni horizont pećine prvi je istraživao Jovan Cvijić, a njegov rad
        nastaviće sedamdesetih godina 20. veka dr Radенко Lazarеvić u saradnji
        sa grupom speleologa iz Valjeva. R. Lazarеvić, zajedno sa članovima
        Speleološke grupe iz Valjeva i S. Dožića iz Instituta za šumarstvo,
        istraživao je, u dva navrata, čitavu Rajkovu pećinu. U prvoj fazi
        istražen je ponorski, a u drugoj fazi izvorski deo pećine.
        <br />
        <br />
        Otkrićem tzv. Suvog horizonta 1974. godine počelo je sprovođenje ideje o
        uređivanju pećine za turističke posete, što je realizovano 12. 09. 1975.
        godine. Tokom 2014. godine formirana je kružna staza koja povezuje oba
        horizonta pećine, u ukupnoj dužini od 1.400 metara.
      </p>

      <img srcSet={`${rajkovaPecina77} 400w, ${rajkovaPecina7} `} alt="Rajkova Pećina 5" />
      <p>
        Rajkova pećina je bogata pećinskim nakitom različitih oblika, od snežno
        belog kristalnog kalcita, koji je najkvalitetniji u Srbiji. Hodnici
        Rajkove pećine dugi su preko dva kilometra i podeljeni su u rečni i suvi
        horizont. Betonirana staza vodi kroz prostranu Koncertnu i Ježevu
        dvoranu, pored Malih i Velikih orgulja, Obesenog hajduka Rajka do
        Dvorane kada. Tu su i Žrtvenik, Duhovi, Dvorana vodopada, Sala stećaka,
        Zimska bajka i Kristalna dvorana.
        <br />
        <br />
        Hodajući pećinskom stazom, posetilac doživljava jedinstven zvuk
        žuborenja bistre Rajkove reke koja odjekuje pećinskim prostorima "Ježeve
        dvorane", sa hiljadama kalcitnih cevčica na tavanici. Zatim sledi
        prelazak preko rumenih bigrenih kada, pored "Zimske bajke" sa "Belim
        medvedom" i ulazak u "Kristalnu šumu" u kojoj se nalazi "Trepereće
        jezerce". Neke od najpoznatijih figura su "Egipatska boginja", "Puž",
        kao i "Panj sa gljivama". Spajanjem suvog i rečnog horizonta 2014.
        godine, formirana je kružna turistička staza u dužini od čak 1410
        metara.
      </p>
    </div>
  );
};
