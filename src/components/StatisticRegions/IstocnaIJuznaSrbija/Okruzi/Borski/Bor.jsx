import bor1 from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/Bor/bor1.jpg";
import bor2 from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/Bor/bor2.jpg";
import bor3 from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/Bor/bor3.jpg";
import bor4 from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/Bor/bor4.jpg";
import bor5 from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/Bor/bor5.jpg";
import bor6 from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/Bor/bor6.jpg";
import bor7 from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/Bor/bor7.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";

export const Bor = () => {
  const navigate = useNavigate();

  return (
    <div className="placeBackground">
      <ScrollToTop />
      <FaArrowLeft
        className="arrowLeft"
        onClick={() => navigate(-1)}
        style={{ fill: "white" }}
      />
      <header></header>
      <img src={bor1} alt="Krupajsko Vrelo 1" />

      <h2>Krupajsko Vrelo</h2>

      <p style={{ paddingTop: "50px" }}>
        Bor se nalazi na istoku Republike Srbije, u Timočkoj regiji, između
        grada Zaječara i opština Negotin, Majdanpek, Žagubica, Despotovac i
        Boljevac. Karakteristična je blizina granica sa Bugarskom i Rumunijom.
        Veći deo teritorije je brdsko-planinski. Pripada slivu Timoka, odnosno
        Dunava. Grad Bor pripada Borčkom okrugu i zauzima površinu od 856 km² na
        kojoj živi 41.280 stanovnika (prema popisu iz 2022. godine), što je 48
        stanovnika na km².
      </p>

      <img src={bor2} alt="Krupajsko Vrelo 2" />

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

      <img src={bor3} alt="Krupajsko Vrelo 3" />

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

      <img src={bor4} alt="Krupajsko Vrelo 4" />

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

      <img src={bor5} alt="Zoo Park u Boru" />
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

      <img src={bor6} alt="Planine Stol, Veliki Krš, Deli Jovan" />
      <p>
        Istočni deo zahvataju planine: Stol, koji je drugi po visini vrh na
        teritoriji grada, čiji zaravnjeni vrhovi i strme litice pružaju pogodne
        uslove za planinarenje i ekstremne sportove; Mali i Veliki Krs, Alpi
        istočne Srbije koji se uzdižu do visine od 1.148 metara; Deli Jovan koji
        pripada karpatsko-balkanskom sistemu i Gornjanska visoravan, oko koje se
        uzdižu ove planine.
      </p>

      <img src={bor7} alt="Brestovačka banja" />
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
