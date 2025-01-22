import mackov1 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MacvanskiOkrug/MackovKamen/mackovKamen1.jpg";
import mackov2 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MacvanskiOkrug/MackovKamen/mackovKamen2.jpg";
import mackov3 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MacvanskiOkrug/MackovKamen/mackovKamen3.jpg";
import mackov4 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MacvanskiOkrug/MackovKamen/mackovKamen4.jpg";
import mackov5 from "../../../../../assets/images/SumadijaIZapadnaSrbija/MacvanskiOkrug/MackovKamen/mackovKamen5.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";

export const MackovKamen = () => {
  const navigate = useNavigate();

  return (
    <div className="placeBackground">
      <ScrollToTop />
      <FaArrowLeft className="arrowLeft" onClick={() => navigate(-1)} />
      <header></header>
      <img src={mackov1} alt="Mačkov Kamen 1" />

      <h2>MAČKOV KAMEN</h2>

      <p style={{ paddingTop: "50px" }}>
        Na vrhu planine Jagodnje, nazvane po bogatstvu šumskih jagoda koje tamo
        rastu, nalazi se čuveni Mačkov kamen, istorijsko mesto velike bitke iz
        Prvog svetskog rata, vođene 1914. godine. Na najvišoj tački planine, na
        nadmorskoj visini od 924 metra, podignuta je spomen-kosturnica u čast
        junacima koji su dali svoje živote u tom sukobu. Njena izgradnja
        započela je 1928. godine, a osvećenje je obavljeno četiri godine
        kasnije, pod rukovodstvom tadašnjeg srpskog patrijarha Varnave. Obimni
        konzervatorski radovi na spomen-kosturnici i spomen-česmi izvedeni su
        tokom 2013. i 2014. godine, kako bi se sačuvalo ovo značajno mesto.
      </p>

      <img src={mackov2} alt="Mačkov Kamen 2" />

      <p>
        Bitka na Mačkovom kamenu vođena je od 19. do 22. septembra 1914. godine,
        smeštena između Cerske bitke (16–20. avgust 1914) i Kolubarske bitke
        (16. novembar–12. decembar 1914). Prema mišljenju mnogih istoričara,
        predstavlja jednu od najkrvavijih i najtežih bitaka u toku celog Prvog
        svetskog rata. Iako je formalno završena pirovom pobedom austrougarske
        vojske, bitka je iznedrila jednog od najistaknutijih srpskih heroja tog
        vremena, ostavivši dubok trag u sećanju na Veliki rat.
      </p>

      <img src={mackov3} alt="Mačkov Kamen 3" />

      <p>
        Možda ime potpukovnika Dušana Purića (1873–1914), heroja sa Mačkovog
        kamena, nije poznato mnogima, ali verujemo da ćete ga nakon čitanja ovog
        teksta zapamtiti, jer takav heroj to zaslužuje. Na početku
        neprijateljskih dejstava, potpukovnik Purić bio je raspoređen na
        šarganskim položajima. Kao komandant Četvrtog puka „Stevan Nemanja“,
        koji je pripadao Užičkoj vojsci, uspešno je sprečavao prodor
        neprijateljskih snaga iz Višegrada prema Mokroj Gori i Kremni,
        pokazujući izuzetnu hrabrost i odlučnost. U borbama na Mačkovom kamenu
        život je izgubilo 115 srpskih oficira, a 176 je ranjeno, među kojima i
        princ Đorđe Karađorđević. Bitka je takođe bila značajna i zbog prisustva
        Nadežde Petrović, poznate srpske slikarke i bolničarke. Ona je nakon
        četvorodnevnog marša sa položaja u Sremu stigla na Mačkov kamen, gde je
        tokom svih borbi bila prisutna u bolnici, neposredno uz ratište,
        pružajući pomoć ranjenicima.
      </p>

      <img
        src={mackov4}
        alt="Mačkov Kamen 4"
      />

      <p>
        Planina Jagodnja gde se nalazi Mačkov Kamen je i popularno
        odredište za sve koji žele da uživaju u skijanju u mirnom okruženju,
        daleko od gužve velikih skijališta. Skijalište nudi staze koje su
        uglavnom pogodne za početnike i rekreativce, a idealno je za porodice
        koje žele da provedu kvalitetno vreme na snegu. Oprema za skijanje može
        se iznajmiti na licu mesta, a ski lift omogućava lakši pristup stazama.
        Iako nije previše veliko, skijalište je poznato po prirodnom okruženju i
        prijatnoj atmosferi.
      </p>

      <img src={mackov5} alt="Planina Jagodnja" />
      <p>
        Planina Jagodnja prostire se između Borašnje na severu, Sokolskih
        planina i rečice Uzovnice na istoku, Drine na zapadu i jugoistoku, te
        Krupnja na severoistoku. To je niža planina u Podrinju, sa najvišim
        tačkama Mčkov kamen (923 m) i Košutnja stopa (939 m). Ima asimetričan
        profil, sa strmim padinama koje se spuštaju prema jugu, prema Drini, dok
        je severna strana blago nagnuta. Južna strana planine je znatno više
        šumovita od severne. Sa njenog najvišeg dela pruža se širok i lep pogled
        na Drinu i Bosnu. Najlakši pristup Jagodnji je iz Krupnja, odakle vodi
        asfaltni put do Mčkovog kamena. Planina je sastavljena od škrilja, dok
        se u njenoj unutrašnjosti nalaze i krečnjaci, peskari i eruptivne
        stijene. Sa njenog širokog temena, tereni se spuštaju prema Drini i
        Jadru. Mčkov kamen je bio poprište teške bitke tokom Prvog svetskog rata
        1914. godine, između srpske i austrougarske vojske.sa stazama i alejama,
        a izgrađena je i pruga Šabac - Koviljača.
      </p>
    </div>
  );
};
