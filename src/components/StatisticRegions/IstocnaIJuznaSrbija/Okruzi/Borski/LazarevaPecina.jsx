import lazarevaPecina1 from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/LazarevaPecina/lazarevaPecina1.jpg";
import lazarevaPecina2 from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/LazarevaPecina/lazarevaPecina2.jpg";
import lazarevaPecina3 from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/LazarevaPecina/lazarevaPecina3.jpg";
import lazarevaPecina4 from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/LazarevaPecina/lazarevaPecina4.jpg";
import lazarevaPecina5 from "../../../../../assets/images/JuznaIIstocnaSrbija/BorskiOkrug/LazarevaPecina/lazarevaPecina5.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../../../../ScrollToTop";

export const LazarevaPecina = () => {
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
      <img src={lazarevaPecina1} alt="Lazareva Pećina 1" />

      <h2>Lazareva Pećina</h2>

      <p style={{ paddingTop: "50px" }}>
        Lazareva pećina (poznata i kao Zlotska pećina) predstavlja najdužu
        pećinu u Srbiji. Smeštena je u istočnom podnožju Kučaja, na 3 kilometra
        od Zlota, 14 kilometara od Brestovačke banje i 21 kilometar od Bora.
        Ulaz u pećinu nalazi se na nadmorskoj visini od 291 metar, sa leve
        strane Lazareve reke. Pećina je izvorna, a u neposrednoj blizini ulaza,
        u koritu Lazareve reke, voda izbija na površinu u obliku jakog kraškog
        vrela. U okolini se nalazi veliki broj drugih speleoloških objekata,
        koji zajedno sa Lazarevom pećinom čine Zlotske pećine. Od svih ovih
        pećina, Lazareva je najpoznatija i turistički najranije uređena –
        turističko uređenje pećine započelo je 1953. godine, a turistička staza
        duga je 800 metara.
      </p>

      <img src={lazarevaPecina2} alt="Lazareva Pećina 2" />

      <p>
        Prvi opis Lazareve pećine dao je Felix Kanic, dok je prva istraživanja
        pećine izvršio Felix Hofman 1882. godine. Sedam godina nakon Hofmana,
        speleološka istraživanja objavio je i Jovan Cvijić. Pećinu je stvorila
        podzemna reka koja i danas prolazi kroz nju. Ukupna dužina istraženih
        kanala Lazareve pećine iznosi 16.041 metar. Speleolozi koji su vršili
        istraživanja pretpostavljaju da je podzemni prostor mnogo veći, a
        procenjuje se da zapremina pećinskih prostora premašuje 52.000 m³.
        Istraženi pećinski sistem sastoji se od dva horizonta pećinskih kanala:
        stariji suvi - fosilni i mlađi rečni - aktivni.
      </p>

      <img src={lazarevaPecina3} alt="Lazareva Pećina 3" />

      <p>
        Četiri najveće i najlepše dvorane u Lazarevoj pećini su: Prestižna
        dvorana, Koncertna dvorana, Dvorana slepih miševa i Dvorana blokova.
        <br />
        <br />
        Lazareva pećina je proglašena prirodnom retkošću i zaštićena kao
        spomenik prirode još 1949. godine. Zavod za zaštitu prirode Srbije je
        2005. godine proglasio Lazarevu pećinu objektom geonasleđa Srbije.
        Pećina se nalazi unutar spomenika prirode Lazarev kanjon.
      </p>

      <img src={lazarevaPecina4} alt="Lazareva Pećina 4" />

      <p>
        U Lazarevoj pećini nalazi se i veoma značajan arheološki lokalitet, gde
        su otkrivena tri praistorijska kulturna horizonta: iz bakarnog,
        bronzanog i gvozdenog doba. Naselje iz početka bakarnog doba, najstarije
        u pećini, pripada kulturama Krivodol–Salkuca–Bubanj i
        Koždermen–Gumelnica–Karanovo VI. Iz ovog perioda pronađeni su ostaci
        keramičkih predmeta i koštanih alatki, kao i predmeti od bakra (igle,
        kopče, šila, dlijeta). Tokom bronzanog doba, Lazareva pećina je služila
        kao lovačka stanica, pre oko 4.500 godina, a u gvozdenom dobu postaje
        centar metalurgije u periodu od 4. do 5. veka p.n.e. Predmeti pronađeni
        u pećini smatraju se zvanično najstarijim bakarnim nalazima u Srbiji.
      </p>

      <img src={lazarevaPecina5} alt="Lazareva Pećina 5" />
      <p>
        Fosilna i danas izumrla fauna Lazareve pećine predstavljena je ostacima
        pećinskog medveda, pećinskog lava i pećinske hijene. Savremena fauna
        obuhvata troglobiontske i trogofilne organizme. Među troglobiontima,
        značajne i karakteristične su endemske vrste zglavkara: Speleocyclops
        plutonis, Serbosoma lazarevensis, Pseudosinella problematica, Onychiurus
        trojan, Arrhopalites zloti. Ovu pećinu naseljava i podvrsta trefina,
        Duvalius stankovitchi georgievitchi. Trogofilska fauna pretežno je
        zastupljena slepim miševima, kojih je zabeleženo preko 20 vrsta, kao i
        psefalinom Bryaxis sculptifrons.
      </p>
    </div>
  );
};
