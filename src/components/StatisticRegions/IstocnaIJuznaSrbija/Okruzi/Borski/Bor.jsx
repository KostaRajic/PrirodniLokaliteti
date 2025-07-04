import bor1 from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/Bor/desktop/bor1.jpg";
import bor2 from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/Bor/desktop/bor2.jpg";
import bor3 from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/Bor/desktop/bor3.jpg";
import bor4 from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/Bor/desktop/bor4.jpg";
import bor5 from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/Bor/desktop/bor5.jpg";
import bor6 from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/Bor/desktop/bor6.jpg";
import bor7 from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/Bor/desktop/bor7.jpg";
import bor11 from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/Bor/mobile/borM1.jpg";
import bor22 from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/Bor/mobile/borM2.jpg";
import bor33 from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/Bor/mobile/borM3.jpg";
import bor44 from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/Bor/mobile/borM4.jpg";
import bor55 from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/Bor/mobile/borM5.jpg";
import bor66 from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/Bor/mobile/borM6.jpg";
import bor77 from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/Bor/mobile/borM7.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";
import { borskiOkrugPathRoutes } from "./BorskiOkrugPathRoutes";

export const Bor = () => {
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
      <img srcSet={`${bor11} 400w, ${bor1} `} alt="Bor 1" loading="lazy"/>

      <h2>Bor</h2>

      <p style={{ paddingTop: "50px" }}>
        Bor se nalazi na istoku Republike Srbije, u Timočkoj regiji, između
        grada Zaječara i opština Negotin, Majdanpek, Žagubica, Despotovac i
        Boljevac. Karakteristična je blizina granica sa Bugarskom i Rumunijom.
        Veći deo teritorije je brdsko-planinski. Pripada slivu Timoka, odnosno
        Dunava. Grad Bor pripada Borčkom okrugu i zauzima površinu od 856 km² na
        kojoj živi 41.280 stanovnika (prema popisu iz 2022. godine), što je 48
        stanovnika na km².
      </p>

      <img srcSet={`${bor22} 400w, ${bor2} `} alt="Bor 2" loading="lazy"/>

      <p>
        Grad Bor se sastoji od centralnog naselja i sedišta grada – gradskog
        naselja Bor, kao i 12 sela: Gornjane, Tanda, Luka, Krivelj, Bučje,
        Oštrelj, Donja Bela Reka, Brestovac, Slatina, Zlot, Šarbanovac i
        Metovnica. Grad Bor je i sedište Borčkog okruga koji, pored Bora, čine
        opštine Kladovo, Majdanpek i Negotin.
        <br />
        <br />
        Veza sa glavnim putnim pravcem – autoputem E-75 (Beograd – Skoplje) je
        moguća preko 4 putna pravca i to: put preko Boljevca i Paraćina dužine
        87 km; put preko Zaječara, Knjaževca i Niša dužine 150 km; put preko
        Žagubice, Kučeva i Požarevca dužine oko 158 km i put preko Zagrađa i
        Miloševe kule dužine oko 205 km.
      </p>

      <img srcSet={`${bor33} 400w, ${bor3} `} alt="Bor 3" loading="lazy" />

      <p>
        Prirodni resursi Bora ne obuhvataju samo nalazišta ruda bogatih bakrom i
        zlatom, već se u njegovoj neposrednoj blizini nalaze i oaze netaknute
        prirode. Važnu specifičnost grada, koja nije uobičajena za industrijski
        razvijene sredine, čine prirodni uslovi za razvoj turizma. U neposrednoj
        blizini grada nalazi se jedna od najstarijih banja u Srbiji, Brestovačka
        banja, izdvajaju se visovi Crnog vrha, planina Stol, Veliki i Mali Krš,
        turistički biser Borsko jezero, krečnjačka površ Dubasnica, kao i
        zlotske pećine Vernjikica i Lazareva, sa izvanrednim pećinskim ukrasima.
      </p>

      <img srcSet={`${bor44} 400w, ${bor4} `} alt="Bor 4" loading="lazy"/>

      <p>
        Zapadni deo grada pripada planinskom kompleksu Južnog Kučaja. Svojom
        atraktivnošću i raznovrsnošću površinskih oblika reljefa izdvaja se
        krečnjačka površ Dubasnica, koja pokriva oko 70 km². Reke koje poniru na
        zapadnoj strani Dubasnice, izvire na istočnom obodu, na kontaktu
        krečnjačkih i vulkanskih stena. U podnožju planine Crni Vrh, na
        nadmorskoj visini od 438 metara, nalazi se turistički biser Borško
        jezero, površine 30 hektara. Jedna od najstarijih banja u Srbiji, sa
        titulom „kraljevske“ banje, smeštena je na nadmorskoj visini od 385
        metara – Brestovačka banja, čije vode spadaju među najlekovitije u
        Srbiji. Zlotske pećine i kanjon Zlotske reke, pored prirodnih lepota,
        odlikuju se prisustvom retkih vrsta flore i faune. Do sada je istraženo
        116 pećina i 14 jama.
      </p>

      <img srcSet={`${bor55} 400w, ${bor5} `} alt="Zoo Park u Boru" loading="lazy"/>
      <p>
        Zoo park Bor je smešten u blizini centra Bora i predstavlja jednu od
        atrakcija u ovom području. Ovaj zoološki vrt ima bogatstvo različitih
        životinjskih vrsta, a posetioci mogu uživati u posmatranju domaćih i
        egzotičnih životinja. Zoo park je posebno poznat po tome što je povezan
        sa prirodnim okruženjem, te posetioci mogu doživeti prijatnu atmosferu
        koja je pogodna za porodice, turiste i ljubitelje životinja. Uz to, Zoo
        park Bor promoviše edukaciju o zaštiti životne sredine i očuvanju
        ugroženih vrsta.
      </p>

      <img srcSet={`${bor66} 400w, ${bor6} `} alt="Planine Stol, Veliki Krš, Deli Jovan" loading="lazy"/>
      <p>
        Istočni deo zahvataju planine: Stol, koji je drugi po visini vrh na
        teritoriji grada, čiji zaravnjeni vrhovi i strme litice pružaju pogodne
        uslove za planinarenje i ekstremne sportove; Mali i Veliki Krs, Alpi
        istočne Srbije koji se uzdižu do visine od 1.148 metara; Deli Jovan koji
        pripada karpatsko-balkanskom sistemu i Gornjanska visoravan, oko koje se
        uzdižu ove planine.
      </p>

      <img srcSet={`${bor77} 400w, ${bor7} `} alt="Brestovačka banja" loading="lazy"/>
      <p>
        Brestovačka banja, koja se nalazi u blizini Bora, jedan je od
        najpoznatijih termalnih izvora u Srbiji. Poznata je po svojim lekovitim
        vodama koje imaju visoka terapeutskih svojstva. Banja je smeštena na
        nadmorskoj visini od 385 metara i koristi se za lečenje različitih
        zdravstvenih problema, naročito bolesti lokomotornog sistema, kožnih
        oboljenja, kao i za rehabilitaciju i relaksaciju. Pored lekovitih voda,
        Brestovačka banja nudi i prijatnu prirodnu okolinu, što je čini
        popularnom destinacijom za turizam i opuštanje. Banja je poznata i po
        svojoj istorijskoj tradiciji, jer se spominje kao „kraljevska“ banja,
        zbog značaja koji je imala tokom vremena.
      </p>
    </div>
  );
};
